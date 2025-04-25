'use client';

import Link from 'next/link';

export function CTA() {
  return (
    <section className="py-10 mx-auto max-w-6xl bg-mmhmm-purple text-black bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <p className='text-center text-blue-950 font-bold'> Ready to Transform Your Digital Presence?</p>
        <h2 className="text-4xl md:text-3xl font-bold text-center mt-10">
        Get started today and experience the power of AI-driven branding and advertising.
        </h2>
        <div className="flex justify-center mt-10">
          <Link
            href="#contact"
            className="inline-flex items-center rounded-full bg-yellow px-6 py-3 text-base font-medium text-mmhmm-purple hover:bg-opacity-90"
          >
            <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
            </svg>
            Book a call
          </Link>
        </div>
      </div>
    </section>
  );
}
