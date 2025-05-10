import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "This AI video technology has revolutionized our content creation process. We're now able to produce high-quality videos in multiple languages at a fraction of the cost.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "Global Tech Solutions",
  },
  {
    quote: "The ability to create consistent, professional videos across different platforms has been a game-changer for our brand. The quality is outstanding.",
    author: "Michael Chen",
    role: "Content Strategist",
    company: "Digital Innovations",
  },
];

const testimonials1 = [
  { src: "/images/TUD Assets-08.png", name: "mama earth" },
  { src: "/images/TUD Assets-09.png", name: "dot and key" },
  { src: "/images/TUD Assets-10.png", name: "vahdam" },
  { src: "/images/TUD Assets-11.png", name: "kama ayurveda" },
  { src: "/images/TUD Assets-12.png", name: "curious cub" },
  { src: "/images/Ugaoo logo-01-.png", name: "ugaoo" },
];

const testimonials2 = [
  { src: "/images/TUD Assets-13.png", name: "dev gadhvi" },
  { src: "/images/TUD Assets-14.png", name: "gynoveda" },
  { src: "/images/TUD Assets-15.png", name: "khadi essentials" },
  { src: "/images/TUD Assets-16.png", name: "sock socha" },
  { src: "/images/TUD Assets-17.png", name: "mother sparsh" },
  { src: "/images/TUD Assets-18.png", name: "arun pandit" },
];

// Create duplicate arrays for seamless marquee
const marqueeItems1 = [...testimonials1, ...testimonials1];
const marqueeItems2 = [...testimonials2, ...testimonials2];

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-yellow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#1a1a1a]">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-[#1a1a1a]/80 max-w-2xl mx-auto">
            Hear from businesses that have transformed their video production with our AI technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-none bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#1a1a1a] mb-3 sm:mb-4" />
                  <p className="text-sm sm:text-base text-[#1a1a1a]/80 mb-4 sm:mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-[#1a1a1a]">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm sm:text-base text-[#1a1a1a]/60">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
} 