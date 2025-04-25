import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    role: "Growth Lead, D2C Wellness Brand",
    quote:
      "We saved weeks of production time and launched our multilingual campaigns 4x faster. Game-changer!",
    stars: 5,
  },
  {
    role: "VP Marketing, EdTech Startup",
    quote:
      "We don't need studios anymore. The AI avatar does it all — in every language our audience speaks.",
    stars: 5,
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
    <section className="py-12 md:py-20 bg-yellow overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-black/80 text-base md:text-lg">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow text-yellow"
                      />
                    ))}
                  </div>
                  <blockquote className="italic mb-6 text-black text-base md:text-lg">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="text-sm md:text-base text-black/70 font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
{/* 
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% - 1rem));
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(calc(-100% - 1rem));
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          will-change: transform;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
          will-change: transform;
        }
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style> */}
    </section>
  );
} 