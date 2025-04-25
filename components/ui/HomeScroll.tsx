import Image from "next/image";
import { cn } from "@/utils/cn";

export const ParallaxScroll = ({
  images,
  className,
  campaign,
}: {
  images: string[];
  className?: string;
  campaign: string[];
}) => {

  const third = Math.ceil(images.length / 4);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2* third, 3 * third);
  const fourthPart = images.slice(3 * third);

  const firstPartC = campaign.slice(0, third);
  const secondPartC = campaign.slice(third, 2 * third);
  const thirdPartC = campaign.slice(2* third, 3 * third);
  const fourthPartC = campaign.slice(3 * third);


  return (
    <div
      className={cn("items-start overflow-y-auto w-full no-scrollbar", className)}
      
    >
      <div
        className="grid grid-cols-2 md:grid-cols-4 items-start  md:max-w-7xl max-w-full mx-auto gap-4 md:gap-10 py-10 px-2 md:px-10"
    
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <div
              key={"grid-1" + idx}
              className="mx-auto w-full relative rounded-2xl overflow-hidden -inset-y-7"
            >
              <div className="absolute rounded-2xl inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duraton-300">
            <h1 className="text-2xl md:text-3xl font-bold text">{firstPartC[idx]}</h1>
              </div>
              <Image
                src={el}
                className="h-64 w-full md:h-80 object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <div 
                key={"grid-2" + idx}
              className="mx-auto w-full relative rounded-2xl overflow-hidden"
            >
              <div className="absolute rounded-2xl inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duraton-300">
                <h1 className="text-2xl md:text-3xl font-bold text">{secondPartC[idx]}</h1>
              </div>
              <Image
                src={el}
                className="h-64 w-full md:h-80 object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <div 
                key={"grid-3" + idx}
              className="mx-auto w-full relative rounded-2xl overflow-hidden -inset-y-7"
            >
              <div className="absolute rounded-2xl inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duraton-300">
                <h1 className="text-2xl md:text-3xl font-bold text">{thirdPartC[idx]}</h1>
              </div>
              <Image
                src={el}
                className="h-64 w-full md:h-80  object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </div>
          ))}
        </div>
        <div className="grid gap-10">
          {fourthPart.map((el, idx) => (
            <div 
                key={"grid-4" + idx}
                className="mx-auto w-full relative rounded-2xl overflow-hidden"
            >
              <div className="absolute rounded-2xl inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duraton-300">
                <h1 className="text-2xl md:text-3xl font-bold text">{fourthPartC[idx]}</h1>
              </div>
              <Image
                src={el}
                className="h-64 w-full md:h-80  object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
