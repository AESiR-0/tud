import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Founder() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden">
              <Image
                src="/images/Founder Section-23.png"
                alt="May Pierce"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 sm:gap-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a]">
              Meet May Pierce
            </h2>
            <p className="text-base sm:text-lg text-[#1a1a1a]/80">
              Founder and visionary behind our AI video technology. With over a decade of experience in video production and AI, May has revolutionized how businesses create and distribute video content.
            </p>
            <p className="text-base sm:text-lg text-[#1a1a1a]/80">
              Her mission is to make professional video production accessible to everyone, breaking down language barriers and reducing costs while maintaining the highest quality standards.
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg hover:bg-black transition-all bg-yellow hover:text-white text-[#1a1a1a]"
            >
              Learn More About Our Story
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 