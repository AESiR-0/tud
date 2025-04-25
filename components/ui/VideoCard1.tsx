"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const VideoCard = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  listClassName,
}: {
  items: {
    src: string;
    name: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  listClassName?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      // const scrollerContent = Array.from(scrollerRef.current.children);

    //   scrollerContent.forEach((item) => {
    //     const duplicatedItem = item.cloneNode(true);
    //     if (scrollerRef.current) {
    //       scrollerRef.current.appendChild(duplicatedItem);
    //     }
    //   });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "35s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-y-hidden overflow-x-auto no-scrollbar --animation-duration:20s --animation-direction:forwards",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-2 py-2 w-max flex-nowrap justify-center items-center",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className={listClassName}
            key={item.name}
          >
            {/* <Video src={lm} muted loop autoPlay controls={false} width={400} height={600} className="absolute top-0 h-full w-full border-4 border-white rounded-2xl"/> */}
          
            <video width="400" height="500" autoPlay muted loop className="h-full w-full border-4 border-white bg-black rounded-2xl">
                <source src={item.src} type="video/mp4" />
            
                Your browser does not support the video tag.
            </video>
          </li>
        ))}
      </ul>
    </div>
  );
};
