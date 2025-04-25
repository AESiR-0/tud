// components/ParallaxProcess.tsx
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    step: "1",
    title: "Concepts & Scripts",
    description: "We start by developing compelling concepts and scripts that resonate with your target audience.",
    image: "/images/D&K1.png",
  },
  {
    step: "2",
    title: "Shoot Multiple Looks",
    description: "Our team captures diverse looks and styles to ensure versatility in your content.",
    image: "/images/D&K2.png",
  },
  {
    step: "3",
    title: "Train Avatar & Ai Voice",
    description: "We create and train your digital avatar with lifelike movements and natural-sounding AI voice.",
    image: "/images/D&K1.png",
  },
  {
    step: "4",
    title: "Scale It Across Markets",
    description: "One video? Ten markets? No problem. We auto-adapt your content for global reach.",
    image: "/images/D&K2.png",
  },
];

export default function ParallaxProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const contents = contentRefs.current;
    const images = imageRefs.current;

    // Set up scroll trigger for the section
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=400vh",
      pin: true,
      pinSpacing: true,
      scrub: 1,
      markers: false,
    });

    // Animate each content and image pair
    steps.forEach((_, index) => {
      const content = contents[index];
      const image = images[index];
      if (!content || !image) return;

      const start = index * 0.25;
      const end = (index + 1) * 0.25;

      // Content animation
      gsap.fromTo(content,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
          filter: "blur(10px)"
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: `${start * 100}% top`,
            end: `${end * 100}% top`,
            scrub: 1,
          }
        }
      );

      // Image animation with precise opacity control
      const imageTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: `${start * 100}% top`,
          end: `${end * 100}% top`,
          scrub: true,
        }
      });

      // Set initial state
      gsap.set(image, { opacity: 0 });

      // Add fade in and out points
      imageTimeline
        .to(image, {
          opacity: 1,
          duration: 0.2,
          ease: "power2.in",
        })
        .to(image, {
          opacity: 0,
          duration: 0.2,
          ease: "power2.out",
        });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-yellow text-white h-[400vh] overflow-hidden">
      <div className="sticky top-0 h-screen">
        {/* Mobile Layout */}
        <div className="md:hidden h-full flex flex-col">
          <div className="relative h-1/2">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={el => { imageRefs.current[index] = el; }}
                className="absolute inset-0 opacity-0"
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-30" />
              </div>
            ))}
          </div>
          <div className="relative h-1/2 overflow-y-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={el => { contentRefs.current[index] = el; }}
                className="absolute inset-0 flex items-center justify-center p-4"
              >
                <div className="relative z-10 w-full max-w-md px-6 py-8 bg-black bg-opacity-70 rounded-xl backdrop-blur-sm text-center transform transition-all duration-500">
                  <span className="text-4xl font-bold text-yellow-400 block mb-3">
                    0{index + 1}
                  </span>
                  <h2 className="text-2xl font-bold mb-4">{step.title}</h2>
                  <p className="text-base text-gray-200">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 h-full">
          {/* Left Column - Scrollable Content */}
          <div className="relative h-screen">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={el => { contentRefs.current[index] = el; }}
                className="absolute inset-0 flex items-center justify-center px-8"
              >
                <div className="relative z-10 max-w-2xl px-8 py-12 bg-black bg-opacity-70 rounded-xl backdrop-blur-sm text-center transform transition-all duration-500">
                  <span className="text-6xl font-bold text-yellow-400 block mb-4">
                    0{index + 1}
                  </span>
                  <h2 className="text-4xl font-bold mb-6">{step.title}</h2>
                  <p className="text-xl text-gray-200">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Fixed Image */}
          <div className="relative h-screen overflow-hidden">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={el => { imageRefs.current[index] = el; }}
                className="absolute inset-0 opacity-0"
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-30" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}