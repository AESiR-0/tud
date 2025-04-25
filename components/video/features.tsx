/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const Features = () => {
  const services = [
    {
      title: 'Avatar Creation',
      description: 'Professionally designed digital avatars for businesses, influencers, and content creators.',
      image: '',
      imageLeft: true
    },
    {
      title: ' AI-Powered Ad Campaigns',
      description: "Smart ad solutions that maximize reach, engagement, and ROI.",
      image: '',
      imageLeft: false
    },
    {
      title: 'Multichannel Advertising',
      description: 'Deploy avatars in ads across Facebook, Instagram, YouTube, and more.',
      image: '',
      imageLeft: true
    },
    {
      title: 'Performance Analytics',
      description: 'Get detailed insights and optimize campaigns for better results.',
      image: '',
      imageLeft: false
    },
    
  ];

  return (
    <div className="bg-yellow-500 text-black p-2 md:p-4">
      <div className="max-w-5xl mx-auto">
        <div><h1 className="text-5xl md:text-4xl text-center font-bold mb-5 text-black">Our Services</h1></div>
        <div className="grid gap-2 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-yellow text-yellow-500 rounded-lg p-2 md:p-4">
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
                      {/* <video autoPlay muted loop className="rounded-lg shadow-lg w-full h-auto object-cover">
                        <source src={service.image}  type="video/mp4" />
                    
                        Your browser does not support the video tag.
                      </video> */}
                    </div>
                    <div className="order-2 flex flex-col justify-center items-center w-full h-full">
                      <h3 className="text-2xl md:text-3xl text-center font-bold mb-3 text-black">
                        {service.title}
                      </h3>
                      <p className="text-sm md:text-base text-center text-black-100">
                        {service.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 md:order-1 flex flex-col justify-center items-center w-full h-full">
                      <h3 className="text-3xl md:text-4xl text-center font-bold mb-3 text-black">
                        {service.title}
                      </h3>
                      <p className="text-sm md:text-base text-center text-black-100">
                        {service.description}
                      </p>
                    </div>
                    <div className="order-1 md:order-2">
                      {/* <img 
                        src={service.image} 
                        alt={service.title} 
                        className="rounded-lg shadow-lg w-full h-auto object-cover"
                      /> */}
                      {/* <video autoPlay muted loop className="rounded-lg shadow-lg w-full h-auto object-cover">
                        <source src={service.image}  type="video/mp4" />
                    
                        Your browser does not support the video tag.
                      </video> */}
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

