// components/RoadmapDotted.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
// Remove ScrollTrigger import since we're not using it anymore
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// Don't register ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Upload Content",
    description: "Provide media samples for training",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    title: "Customize Avatar",
    description: "Select personality and appearance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Integration",
    description: "Connect with your platforms",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    ),
  },
  {
    title: "Go Live",
    description: "Launch your AI avatar",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 3l14 9-14 9V3z" />
      </svg>
    ),
  },
];

export default function RoadmapDotted({
  stepList,
}: {
  stepList?: typeof steps;
}) {
  // Track if the section is in view
  const [isInView, setIsInView] = useState(false);

  // Refs for GSAP animations
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create an observer to watch when the roadmap enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        // Check if the container is in view
        if (entries[0].isIntersecting) {
          setIsInView(true);
          // Once we've seen it, no need to keep observing
          observer.disconnect();
        }
      },
      {
        // Start animations when 15% of the container is visible
        threshold: 0.15,
        // Start checking when the element is near the viewport
        rootMargin: "0px 0px -10% 0px"
      }
    );

    // Start observing our container
    observer.observe(containerRef.current);

    // Safety check to ensure content is visible after 5 seconds
    // just in case intersection observer fails
    const safetyTimer = setTimeout(() => {
      if (!isInView) setIsInView(true);
    }, 5000);

    return () => {
      observer.disconnect();
      clearTimeout(safetyTimer);
    };
  }, []);

  // Run animations when section comes into view
  useEffect(() => {
    if (!isInView || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate title with GSAP
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "back.out(1.2)"
        }
      );

      // Animate path
      gsap.fromTo(
        pathRef.current,
        {
          strokeDashoffset: 100,
          opacity: 0
        },
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut"
        }
      );

      // Animate steps with GSAP
      stepRefs.current.forEach((step, index) => {
        if (!step) return;

        const dot = step.querySelector('.step-dot');
        const card = step.querySelector('.step-card');
        const icon = step.querySelector('svg');

        // Step container animation
        gsap.fromTo(
          step,
          {
            opacity: 0,
            y: 50,
            x: index % 2 === 0 ? -30 : 30
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.4 + (index * 0.2)
          }
        );

        // Dot animation with GSAP
        gsap.fromTo(
          dot,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            delay: 0.6 + (index * 0.2)
          }
        );

        // Icon animation with GSAP
        gsap.fromTo(
          icon,
          {
            scale: 0,
            rotation: 180
          },
          {
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            delay: 0.7 + (index * 0.2)
          }
        );

        // Card animation with GSAP
        gsap.fromTo(
          card,
          {
            opacity: 0,
            scale: 0.9
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            delay: 0.8 + (index * 0.2)
          }
        );

        // Add hover animations
        if (card) {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              borderColor: "#fcd34d",
              duration: 0.3
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              scale: 1,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              borderColor: "#fde68a",
              duration: 0.3
            });
          });
        }

        // Add hover animations to dots
        if (dot) {
          dot.addEventListener('mouseenter', () => {
            gsap.to(dot, {
              scale: 1.1,
              borderColor: "#fbbf24",
              duration: 0.2
            });
            gsap.to(icon, {
              scale: 1.2,
              color: "#d97706",
              duration: 0.2
            });
          });

          dot.addEventListener('mouseleave', () => {
            gsap.to(dot, {
              scale: 1,
              borderColor: "#fde68a",
              duration: 0.2
            });
            gsap.to(icon, {
              scale: 1,
              color: "#d97706",
              duration: 0.2
            });
          });
        }
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [isInView]);

  const setStepRef = (index: number) => (el: HTMLDivElement | null) => {
    stepRefs.current[index] = el;
  };

  return (
    <div ref={containerRef} className="min-h-[120vh] py-16 px-4 sm:px-6 lg:px-8 bg-yellow">
      <div className="max-w-4xl mx-auto">
        <h2
          ref={titleRef}
          className={`text-3xl font-bold text-center mb-12 text-black ${isInView ? 'opacity-100' : 'opacity-0'}`}
        >
          Our 4-Step Journey
        </h2>

        <div className="relative">
          {/* Dotted Path Line - Curved between steps */}
          <svg
            className={`absolute h-full w-full left-0 top-0 pointer-events-none ${isInView ? 'opacity-100' : 'opacity-0'}`}
            viewBox="0 0 100 400"
            preserveAspectRatio="none"
          >
            <path
              ref={pathRef}
              d="M50,20 
                 C50,60 50,60 50,100
                 C50,140 50,140 50,180
                 C50,220 50,220 50,260
                 C50,300 50,300 50,340"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2"
              strokeDasharray="3,3"
            />
          </svg>

          <div className="space-y-24">
            {(stepList || steps).map((step, index) => (
              <div
                key={index}
                ref={setStepRef(index)}
                className={`relative flex justify-center ${isInView ? 'opacity-100' : 'opacity-0'}`}
              >
                {/* Step Dot */}
                <div
                  className="step-dot absolute left-1/2 -translate-x-1/2 -top-3 w-16 h-16 rounded-full bg-white border-4 border-yellow-200 z-10 flex items-center justify-center"
                >
                  <div className="w-8 h-8 text-yellow-600">
                    {step.icon}
                  </div>
                </div>

                {/* Step Card */}
                <div
                  className={`w-full max-w-md ${index % 2 === 0
                    ? "md:mr-auto md:pr-16"
                    : "md:ml-auto md:pl-16"
                    }`}
                >
                  <div
                    className="step-card p-6 bg-white rounded-xl shadow-lg border border-yellow-200 relative"
                  >
                    {/* Small arrow pointing to dot */}
                    <div
                      className={`absolute -top-3 ${index % 2 === 0 ? "left-6" : "right-6"
                        } w-4 h-4 bg-white transform rotate-45 border-t border-l border-yellow-200`}
                    ></div>

                    <h3 className="text-xl font-bold text-black">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-gray-700">{step.description}</p>
                    <div className="mt-4 text-sm font-medium text-yellow-600">
                      Step {index + 1} of {steps.length}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}