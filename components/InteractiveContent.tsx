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
    image: "/images/D&K1.png",
  },
  {
    id: 2,
    title: "Shoot Multiple Looks",
    description: "Our team captures diverse looks and styles to ensure versatility in your content.",
    image: "/images/D&K2.png",
  },
  {
    id: 3,
    title: "Train Avatar & AI Voice",
    description: "We create and train your digital avatar with lifelike movements and natural-sounding AI voice.",
    image: "/images/D&K1.png",
  },
  {
    id: 4,
    title: "Scale It Across Markets",
    description: "One video? Ten markets? No problem. We auto-adapt your content for global reach.",
    image: "/images/D&K2.png",
  },
];

export default function InteractiveContent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Custom cursor animation
  useEffect(() => {
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
  }, [mousePosition]);

  // Scroll-based animations and pinning
  useEffect(() => {
    const section = sectionRef.current;
    const contents = contentRefs.current;
    const image = imageRef.current;
    if (!section || !contents.length || !image) return;

    // Calculate total height needed for all sections
    const sectionHeight = window.innerHeight * contentBlocks.length;
    const sectionGap = window.innerHeight * 0.2; // 20% of viewport height as gap

    // Set up the main pin
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${sectionHeight}px - 50px`,
      pin: true,
      pinSpacing: true,
      scrub: 0.2,
      markers: false,
    });

    // Create a timeline for smooth transitions
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${sectionHeight}px`,
        scrub: 0.4,
        onUpdate: (self) => {
          const progress = Math.min(Math.max(self.progress, 0), 1); // Clamp progress between 0 and 1
          const sectionIndex = Math.min(
            Math.floor(progress * contentBlocks.length),
            contentBlocks.length - 1
          );
          if (sectionIndex !== activeIndex) {
            setActiveIndex(sectionIndex);
            gsap.to(image, {
              opacity: 0,
              scale: 0.8,
              duration: 0.2,
              onComplete: () => {
                gsap.to(image, {
                  opacity: 1,
                  scale: 1,
                  duration: 0.3,
                  ease: 'power2.out',
                });
              },
            });
          }
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [activeIndex]);

  // Ensure activeIndex is always valid
  const safeActiveIndex = Math.min(Math.max(activeIndex, 0), contentBlocks.length - 1);

  return (
    <div ref={sectionRef} className="relative min-h-screen bg-yellow text-black overflow-hidden">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-4 h-4 pointer-events-none z-50 mix-blend-difference"
      >
        <div className="w-full h-full bg-black rounded-sm relative">
          <div className="absolute top-0 left-0 w-1 h-1 bg-black animate-pulse" />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-5 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-screen">
          {/* Left Column - Content Blocks */}
          <div className="flex flex-col justify-center space-y-8">
            {contentBlocks.map((block, index) => (
              <div
                key={block.id}
                ref={el => { contentRefs.current[index] = el; }}
                className={`p-6 rounded-lg transition-all duration-300 cursor-pointer
                  ${safeActiveIndex === index 
                    ? 'bg-black text-white' 
                    : 'bg-white hover:bg-white/90 shadow-lg'
                  }`}
                onMouseEnter={() => {
                  if (cursorRef.current) {
                    gsap.to(cursorRef.current, {
                      scale: 1.5,
                      duration: 0.2,
                    });
                  }
                }}
                onMouseLeave={() => {
                  if (cursorRef.current) {
                    gsap.to(cursorRef.current, {
                      scale: 1,
                      duration: 0.2,
                    });
                  }
                }}
              >
                <h2 className={`text-2xl font-bold mb-2 ${safeActiveIndex === index ? 'text-[#FFD700]' : 'text-black'}`}>
                  {block.title}
                </h2>
                <p className={safeActiveIndex === index ? 'text-white' : 'text-gray-800'}>
                  {block.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column - Image */}
          <div className="relative h-full">
            <div
              ref={imageRef}
              className="absolute inset-0 rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src={contentBlocks[safeActiveIndex].image}
                alt={contentBlocks[safeActiveIndex].title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 