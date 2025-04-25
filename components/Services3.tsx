/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { WordFlip } from './WordF';
import { ThreeDuckling } from './ThreeDuckling';

const ServicesSection = () => {
  const services = [
    {
      title: 'Performance Marketing',
      description: 'Boost your monthly profits and outrank your competition with the help of our Coaching Industry Experienced Account Managers. We do media buying for you on Meta & Google.',
      image: '/videos/services2.mp4',
      imageLeft: true
    },
    {
      title: 'Performance Ad Shoots & Editing',
      description: 'Generate high impact with high-quality, scroll-stopping videos. We manage end to end video ads production including scripting, shooting and editing.',
      image: '/videos/services1.mp4',
      imageLeft: false
    },
    {
      title: 'Business Strategy',
      description: 'Always have clarity on next steps in your growth journey and stay one step ahead of your competition. Your win > our win.',
      image: '/videos/services3.mp4',
      imageLeft: true
    },
    {
      title: 'Content & Ad Editing',
      description: 'Maximize ROI with data-driven copy & clever design. We create and design ads that achieve impressive click-through rates (CTR) and cost-effective results with low CPAs.',
      image: '/videos/services4.mp4',
      imageLeft: false
    },
    
  ];

  return (
    <div className="bg-yellow-500 text-black p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-black">
            Our Services
          </h2>
          <div className='flex flex-rows mx-auto w-full justify-evenly items-center mb-2'>
              <ThreeDuckling />
          </div>
          <div className="w-full">
              <WordFlip />
          </div>
        </div>
        
        <div className="grid gap-2 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-yellow text-yellow-500 rounded-lg p-2 md:p-6">
              <div className={`grid gap-2 md:gap-6 ${
                service.imageLeft 
                  ? 'md:grid-cols-[1fr_1fr]' 
                  : 'md:grid-cols-[1fr_1fr]'
              }`}>
                {service.imageLeft ? (
                  <>
                    <div className="order-1">
                      {/* <img 
                        src={service.image} 
                        alt={service.title} 
                        className="rounded-lg shadow-lg w-full h-auto object-cover"
                      /> */}
                      <video autoPlay muted loop className="rounded-lg shadow-lg w-full h-auto object-cover">
                        <source src={service.image}  type="video/mp4" />
                    
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="order-2">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-black">
                        {service.title}
                      </h3>
                      <p className="text-sm md:text-base text-black-100">
                        {service.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 md:order-1">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-black">
                        {service.title}
                      </h3>
                      <p className="text-sm md:text-base text-black-100">
                        {service.description}
                      </p>
                    </div>
                    <div className="order-1 md:order-2">
                      {/* <img 
                        src={service.image} 
                        alt={service.title} 
                        className="rounded-lg shadow-lg w-full h-auto object-cover"
                      /> */}
                      <video autoPlay muted loop className="rounded-lg shadow-lg w-full h-auto object-cover">
                        <source src={service.image}  type="video/mp4" />
                    
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;