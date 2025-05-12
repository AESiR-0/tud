'use client'
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import VideoComparison from "./VideoComparison";
import { useState } from "react";

export default function Hero() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Badge variant="destructive" className="mb-4 text-sm sm:text-base">
              Everything AI starts here
            </Badge>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 text-yellow leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Shoot it Once. Say It Everywhere!
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            One avatar for 100 Videos. Cut Production Costs by 80%. One Video.
            Every Platform.
          </motion.p>

          <motion.div
            className="w-full max-w-4xl mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <VideoComparison
              beforeVideo="/everything_ai_media/before_after_effect/before.mp4"
              afterVideo="/everything_ai_media/before_after_effect/after.mp4"
              className="shadow-2xl"
            />
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              size="lg"
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              className="w-full sm:w-auto text-base sm:text-lg hover:bg-black transition-all bg-yellow hover:text-white text-[#1a1a1a]"
            >
              Get Your First Video
              <ChevronRight className={`h-4 w-4 ${isButtonHovered ? 'ml-4' : 'ml-2'}`} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 