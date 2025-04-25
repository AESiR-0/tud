import React from "react";
import { VideoCard } from "./ui/VideoCard1";

export function WorkVideo2() {
    return (
      <div id='work' className="flex w-full flex-col justify-center items-center pb-8">
          <div className=" rounded-md flex flex-col antialiased
           bg-yellow items-center 
            justify-center relative">
          <VideoCard
              items={work2}
              direction="right"
              speed="normal"
              pauseOnHover={false}
              listClassName=" relative rounded-2xl my-2 mx-3 md:mx-5 h-[28em] w-[16em] md:h-[35em] md:w-[20em]"
          />
          
          </div>
      </div>
    );
  }


  
const work2 = [
  {
    src:
      "/videos/05.mp4",
    name: "Super human 2"
  },
    {
      src:
        "/videos/04.mp4",
      name: "Super human 1"
    },
    {
      src:
      "/videos/resize_dnkv.mp4",
      name: "dot and key lip balm video"
    },
    {
      src:
      "/videos/06.mp4",
      name: "ai workshop"
    },
    {
      src:
      "/videos/01.mp4",
      name: "ankit neerav"
    },
    {
      src:
      "/videos/02.mp4",
      name: "Excel"
    },
    {
      src:
      "/videos/03.mp4",
      name: "law of attraction"
    },
    {
      src:
        "/videos/resize_dev.mp4",
      name: "Dev Gadhvi"
    },
    // {
    //   src:
    //     "/videos/resize_ap1.mp4",
    //   name: "Arun Pandit Vlog"
    // },
    {
      src:
        "/videos/05.mp4",
      name: "Super human 21"
    },
  ];
  
  