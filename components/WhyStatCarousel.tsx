'use client'

import Image from 'next/image'

const cards = [
  {
    title: 'Individuals/Influencers',
    subtitle: 'Perfect for Brands Who Want to Scale Fast',
    points: [
      { icon: '🚀', text: 'Instagram, Meta, Google, Etc performance ads' },
      { icon: '🛒', text: 'E-commerce Product Demos' },
      { icon: '📚', text: 'Training & E-learning' },
      { icon: '🎥', text: 'Webinar recordings' },
      { icon: '💬', text: 'WhatsApp & CRM Messaging' },
    ],
    image: 'https://source.unsplash.com/random/800x600?avatar',
  },
  {
    title: 'AI Video Creators',
    subtitle: 'Create Stunning Visuals Instantly',
    points: [
      { icon: '🎭', text: 'Personalized Avatar Videos' },
      { icon: '🧠', text: 'Script to Video Automation' },
      { icon: '🌐', text: 'Multilingual Narration' },
      { icon: '📱', text: 'Social-Ready Formats' },
      { icon: '⚡', text: 'Ultra-fast Rendering' },
    ],
    image: 'https://source.unsplash.com/random/800x600?ai',
  },
  {
    title: 'For Enterprises',
    subtitle: 'Scale Internal Training & Comms',
    points: [
      { icon: '🏢', text: 'Internal Announcements' },
      { icon: '🧑‍🏫', text: 'Employee Onboarding' },
      { icon: '📈', text: 'Monthly Reporting Videos' },
      { icon: '🔁', text: 'Reusable Avatar Templates' },
      { icon: '🔒', text: 'Secure & Customizable' },
    ],
    image: 'https://source.unsplash.com/random/800x600?business',
  },
]

export default function AvatarCarousel() {
  return (
    <section className="w-full bg-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-black mb-20">
          Why Should You Start?
        </h2>

        <div className="space-y-20">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                } items-center gap-10 md:gap-20`}
            >
              {/* Left - Image */}
              <div className="md:w-1/2 w-full h-64 md:h-96 relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Right - Content */}
              <div className="md:w-1/2 w-full">
                <h3 className="text-3xl font-bold text-black mb-2">{card.title}</h3>
                <p className="text-xl text-gray-700 mb-6">{card.subtitle}</p>
                <ul className="space-y-4">
                  {card.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-black text-lg">
                      <span className="text-2xl">{point.icon}</span>
                      <span>{point.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
