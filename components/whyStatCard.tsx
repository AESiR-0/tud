// components/WhyStartCard.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

const features = [
  '🚀 Instagram, Meta, Google, Etc performance ads',
  '🛍️ E-commerce Product Demos',
  '📚 Training & E-learning',
  '🎥 Webinar recordings',
  '💬 WhatsApp & CRM Messaging',
]

export default function WhyStartCard() {
  return (
    <section className="py-12 px-4 md:px-16 ">
          <motion.div
            className="max-w-6xl mx-auto flex flex-col md:flex-row items-center rounded-2xl bg-white shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Left Image */}
            <div className="w-full md:w-1/2 h-72 md:h-auto relative">
              <Image
                src="/images/d&k1.png" // Replace with your image path
                alt="AI Avatar Demo"
                fill
                objectFit="cover"
                className="rounded-l-2xl"
              />
            </div>
    
            {/* Right Content */}
            <div className="w-full md:w-1/2 p-6 md:p-10">
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Why Should You Start
              </motion.h2>
              <p className="text-lg text-gray-600 font-medium mb-6">
                Perfect for Brands Who Want to Scale Fast
              </p>
              <ul className="space-y-3 text-gray-700 text-base font-medium">
                {[
                  '🚀 Instagram, Meta, Google, Etc performance ads',
                  '🛒 E-commerce Product Demos',
                  '📚 Training & E-learning',
                  '🎥 Webinar recordings',
                  '💬 WhatsApp & CRM Messaging',
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </section>
  )
}
