import React from "react";
import { InfiniteMovingCards } from "./ui/MovingCards";
import { mfont } from "./fonts";


export default function Brands() {
  return (
    <div className="flex w-full flex-col justify-center items-center pt-2  pb-2">
        <h1 className={`${mfont.variable} font-sans  text-center text-3xl md:text-4xl pt-6 lg:text-6xl font-medium pb-2`}>Brands We Worked With</h1>
        <div className="h-[13rem] md:h-[15rem] rounded-md flex flex-col antialiased
         bg-yellow items-center
          justify-center relative overflow-hidden">
        <InfiniteMovingCards
            items={testimonials1}
            direction="right"
            speed="normal"
            pauseOnHover={false}
        />
        <InfiniteMovingCards
            items={testimonials2}
            direction="left"
            speed="normal"
            pauseOnHover={false}
        />
        </div>
    </div>
  );
}

const testimonials1 = [
  {
    src:
      "/images/TUD Assets-08.png",
    name: "mama earth",
    
  },
  {
    src:
      "/images/TUD Assets-09.png",
    name: "dot and key"
  },
  {
    src:
    "/images/TUD Assets-10.png",
    name: "vahdam"
  },
  {
    src:
      "/images/TUD Assets-11.png",
    name: "kama ayurveda"
  },
  {
    src:
      "/images/TUD Assets-12.png",
    name: "curious cub"
  },
  {
    src:
      "/images/Ugaoo logo-01-.png",
    name: "ugaoo"
  },
];

const testimonials2 = [
  {
    src:
      "/images/TUD Assets-13.png",
    name: "dev gadhvi",
    
  },
  {
    src:
      "/images/TUD Assets-14.png",
    name: "gynoveda"
  },
  {
    src:
    "/images/TUD Assets-15.png",
    name: "khadi essentials"
  },
  {
    src:
      "/images/TUD Assets-16.png",
    name: "sock socha"
  },
  {
    src:
      "/images/TUD Assets-17.png",
    name: "mother sparsh"
  },
  {
    src:
      "/images/TUD Assets-18.png",
    name: "arun pandit"
  },
];
