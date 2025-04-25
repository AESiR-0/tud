'use client';

import Image from 'next/image';

export function UseCases() {
  const useCases = [
    {
      icon: '/icons/work.svg',
      title: 'Choose Your Avatar Style',
      description: "Select from various design options or get a fully custom AI-generated avatar."
    },
    {
      icon: '/icons/update.svg',
      title: ' Integrate Into Ads',
      description: 'Use avatars in video and image ads to enhance engagement.'
    },
    {
      icon: '/icons/business.svg',
      title: 'Launch & Optimize',
      description: 'Deploy ads and track performance for continuous improvements.',
    },
    // {
    //   icon: '/icons/education.svg',
    //   title: 'Build editable video-based lessons students can watch anytime',
    // },
    // {
    //   icon: '/icons/income.svg',
    //   title: 'Earn passive income by making videos about your area of expertise',
    // },
    // {
    //   icon: '/icons/announcement.svg',
    //   title: 'Bringing joy to the whole company with a major announcement',
    // },
  ];

  return (
    <section className="max-w-5xl  mx-auto py-16 md:py-24 bg-mmhmm-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
          What will you get
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={useCase.icon}
                    alt={useCase.title}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h1 className="text-2xl font-bold">{useCase.title}</h1>
                  <p className="text-sm text-gray-800">{useCase.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
