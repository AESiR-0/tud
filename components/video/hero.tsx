/* eslint-disable @next/next/no-img-element */
'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="text-black leading-8 tracking-wide pb-16 md:py-24">
      <div className="container mx-auto pt-4 ">
        <div className="flex max-w-2xl mx-auto flex-row md:flex-row md:items-center md:justify-between">
          <div className="w-full mx-auto text-center md:pr-2 mb-4 md:mb-0">
            <h1 className="text-4xl  md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Create Stunning Avatars & Supercharge Your Ads with AI
              <span className="inline-block relative">
                <img
                  src="https://ext.same-assets.com/3151828093/3313946041.png"
                  alt="impact"
                  width={100}
                  height={40}
                  className="inline mx-2"
                />
              </span>
              
            </h1>
            <p className="text-xl md:text-2xl text-center mb-8">
            Elevate Your Brand with AI-Generated Avatars & Targeted Ad Campaigns
            </p>
            <div className="flex justify-center items-center">
                <Link
                href="#contact"
                className="flex items-center  rounded-full bg-white px-6 py-3 text-base font-medium  hover:bg-opacity-90 mb-2"
                >
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
                Book a call
                </Link>
            </div>
          </div>
        </div>
        
            <div className="relative top-10  w-auto md:w-[48em]  mx-auto h-auto md:h-80 lg:h-96  bg-white rounded-lg overflow-hidden border-4 border-white shadow-xl">
              
              <video autoPlay muted loop className="rounded-lg shadow-lg object-contain">
                    <source src="videos/services1.mp4"  type="video/mp4" />
                
                    Your browser does not support the video tag.
                </video>
              
            </div>
        
      </div>
    </section>
  );
}
