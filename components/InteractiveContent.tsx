'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const contentBlocks = [
  {
    id: 1,
    title: "Concepts & Scripts",
    description: "We start by developing compelling concepts and scripts that resonate with your target audience.",
    image: "/everything_ai_media/concepts_and_scripting.mp4",
  },
  {
    id: 2,
    title: "Shoot Multiple Looks",
    description: "Our team captures diverse looks and styles to ensure versatility in your content.",
    image: "/everything_ai_media/Shoot Avatar.mp4",
  },
  {
    id: 3,
    title: "Train Avatar & AI Voice",
    description: "We create and train your digital avatar with lifelike movements and natural-sounding AI voice.",
    image: "/everything_ai_media/Audio Ai Training.mp4",
  },
  {
    id: 4,
    title: "Scale It Across Markets",
    description: "One video? Ten markets? No problem. We auto-adapt your content for global reach.",
    image: "/everything_ai_media/Scale.mp4",
  },
];

const TRANSITION_DURATION = 5000; // 5 seconds for mobile auto-transition

export default function InteractiveContent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const cursorRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle mobile auto-transition
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (isMobile) {
      const startAutoTransition = () => {
        if (intervalId) {
          clearInterval(intervalId);
        }
        
        setProgress(0);
        const startTime = Date.now();
        
        intervalId = setInterval(() => {
          const elapsed = Date.now() - startTime;
          const newProgress = (elapsed / TRANSITION_DURATION) * 100;
          
          if (newProgress >= 100) {
            setProgress(100);
            if (intervalId) {
              clearInterval(intervalId);
            }
            setActiveIndex((prev) => (prev + 1) % contentBlocks.length);
          } else {
            setProgress(newProgress);
          }
        }, 10);
      };

      startAutoTransition();
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isMobile, activeIndex]);

  // Handle video changes
  const handleVideoChange = (index: number) => {
    if (videoRef.current && !isVideoLoading) {
      setIsVideoLoading(true);
      
      // Fade out current video
      gsap.to(videoRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          if (videoRef.current) {
            // Set up event listeners before changing source
            const handleCanPlay = () => {
              if (videoRef.current) {
                videoRef.current.play()
                  .then(() => {
                    // Fade in new video
                    gsap.to(videoRef.current, {
                      opacity: 1,
                      duration: 0.3,
                      onComplete: () => {
                        setIsVideoLoading(false);
                      }
                    });
                  })
                  .catch(error => {
                    console.error('Error playing video:', error);
                    setIsVideoLoading(false);
                  });
              }
            };

            const handleError = () => {
              console.error('Error loading video');
              setIsVideoLoading(false);
            };

            // Remove old event listeners
            videoRef.current.removeEventListener('canplay', handleCanPlay);
            videoRef.current.removeEventListener('error', handleError);

            // Add new event listeners
            videoRef.current.addEventListener('canplay', handleCanPlay);
            videoRef.current.addEventListener('error', handleError);

            // Update video source
            videoRef.current.src = contentBlocks[index].image;
            videoRef.current.load();
          }
        },
      });
    }
  };

  // Update video when activeIndex changes
  useEffect(() => {
    handleVideoChange(activeIndex);
  }, [activeIndex]);

  // Custom cursor animation (desktop only)
  useEffect(() => {
    if (isMobile) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);

    gsap.to(cursor, {
      x: mousePosition.x,
      y: mousePosition.y,
      duration: 0.1,
      ease: 'power2.out',
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [mousePosition, isMobile]);

  // Scroll-based animations and pinning
  useEffect(() => {
    const section = sectionRef.current;
    const contents = contentRefs.current;
    if (!section || !contents.length) return;

    // Calculate total height needed for all sections
    const sectionHeight = isMobile
      ? window.innerHeight * contentBlocks.length * 1.5
      : window.innerHeight * contentBlocks.length - 400;

    // Clean up previous ScrollTrigger
    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill();
    }

    // Set up the main pin (desktop only)
    if (!isMobile) {
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${sectionHeight}px - 200px`,
        pin: true,
        pinSpacing: true,
        scrub: 0.2,
        markers: false,
      });
    }

    // Create a timeline for smooth transitions
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${sectionHeight}px`,
        scrub: isMobile ? 0.8 : 0.4,
        onUpdate: (self) => {
          const progress = Math.min(Math.max(self.progress, 0), 1);
          const sectionIndex = Math.min(
            Math.floor(progress * contentBlocks.length),
            contentBlocks.length - 1
          );
          if (sectionIndex !== activeIndex) {
            setActiveIndex(sectionIndex);
          }
        }
      }
    });

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [activeIndex, isMobile]);

  // Ensure activeIndex is always valid
  const safeActiveIndex = Math.min(Math.max(activeIndex, 0), contentBlocks.length - 1);

  return (
    <div ref={sectionRef} className="relative min-h-screen bg-gradient-to-b from-yellow to-white text-black overflow-hidden">
      {/* Custom Cursor (desktop only) */}
      {!isMobile && (
        <div
          ref={cursorRef}
          className="fixed w-4 h-4 pointer-events-none z-50 mix-blend-difference"
        >
          <div className="w-full h-full bg-black rounded-sm relative">
            <div className="absolute top-0 left-0 w-1 h-1 bg-black animate-pulse" />
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-8">
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4 sm:gap-6 md:gap-8 ${isMobile ? 'h-auto' : 'h-screen'}`}>
          {/* Content Blocks */}
          <div className={`flex flex-col ${isMobile ? 'space-y-4' : 'space-y-6 md:space-y-8'} ${isMobile ? 'order-2' : ''}`}>
            {contentBlocks.map((block, index) => (
              <div
                key={block.id}
                ref={el => { contentRefs.current[index] = el; }}
                className={`p-4 sm:p-5 md:p-6 rounded-lg transition-all duration-300 cursor-pointer relative
                  ${safeActiveIndex === index
                    ? 'bg-black text-white'
                    : 'bg-white hover:bg-white/90 shadow-lg'
                  }`}
                onMouseEnter={() => {
                  if (!isMobile && cursorRef.current) {
                    gsap.to(cursorRef.current, {
                      scale: 1.5,
                      duration: 0.2,
                    });
                  }
                }}
                onMouseLeave={() => {
                  if (!isMobile && cursorRef.current) {
                    gsap.to(cursorRef.current, {
                      scale: 1,
                      duration: 0.2,
                    });
                  }
                }}
                onClick={() => {
                  if (!isVideoLoading) {
                    setActiveIndex(index);
                    if (isMobile && progressIntervalRef.current) {
                      clearInterval(progressIntervalRef.current);
                      setProgress(0);
                    }
                  }
                }}>
                <h2 className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 ${safeActiveIndex === index ? 'text-[#FFD700]' : 'text-black'}`}>
                  {block.title}
                </h2>
                <p className={`text-sm sm:text-base ${safeActiveIndex === index ? 'text-white' : 'text-gray-800'}`}>
                  {block.description}
                </p>
                {isMobile && safeActiveIndex === index && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                    <div 
                      className="h-full bg-[#FFD700] transition-all duration-100"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Video Container */}
          <div className={`relative ${isMobile ? 'h-[50vh] sm:h-[60vh] md:h-[70vh]' : 'h-full'} ${isMobile ? 'order-1' : ''}`}>
            <div
              ref={imageRef}
              className="absolute inset-0 rounded-lg overflow-hidden shadow-2xl"
            >
              <video
                ref={videoRef}
                src={contentBlocks[safeActiveIndex].image}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 