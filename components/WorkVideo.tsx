import React from "react";
import { VideoCard } from "./ui/VideoCard1";



export function WorkVideo1() {
  return (
    <div id='work' className="flex w-full flex-col justify-center items-center pt-8 pb-8">
        <div className=" rounded-md flex flex-col antialiased
         bg-yellow items-center 
          justify-center relative">
        <VideoCard
            items={work1}
            direction="right"
            speed="normal"
            pauseOnHover={false}
            listClassName=" relative rounded-2xl px-2 py-2 h-[20em] w-[20em] md:h-[24em] md:w-[24em]"
            
        />
        
        </div>
    </div>
  );
}


const work1 = [
  {
    src:
      "/videos/resize_dnk.mp4",
    name: "dot and key glow start"
  },
  {
    
    src:
      "/videos/resize_kama2.mp4",
    name: "Kama ayurveda",
    
  },
  {
    src:
      "/videos/resize_B2G1.mp4",
    name: "buy 2 get 1 pouch free"
  },
  {
    src:
    "/videos/resize_lm.mp4",
    name: "dot and key lip balm"
  },
  {
    src:
      "/videos/resize_ms.mp4",
    name: "mother sparsh cleaner"
  },
  {
    src:
      "/videos/resize_hw.mp4",
    name: "dot and key moisturiser"
  },
  {
    src:
      "/videos/resize_dnk.mp4",
    name: "dot and key glow"
  },
];