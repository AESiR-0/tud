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

export default function Testimonials() {
  return (
    <section className="py-16 bg-yellow">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-black/80">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-white/90 backdrop-blur-sm shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow text-yellow"
                      />
                    ))}
                  </div>
                  <blockquote className="italic mb-6 text-black">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="text-sm text-black/70 font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="h-[13rem] md:h-[15rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden opacity-60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 flex flex-col gap-4">
            <div className="flex animate-marquee">
              {testimonials1.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="mx-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={150}
                    height={100}
                    className="object-contain h-20 w-auto"
                  />
                </motion.div>
              ))}
            </div>
            <div className="flex animate-marquee-reverse">
              {testimonials2.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="mx-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={150}
                    height={100}
                    className="object-contain h-20 w-auto"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 