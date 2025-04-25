import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-16 md:py-24 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Badge variant="destructive" className="mb-4">
              AI Revolution Starts Here
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 text-yellow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Shoot it Once. Say It Everywhere!
          </motion.h1>
          
          <motion.p 
            className="max-w-2xl text-white text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            One avatar for 100 Videos. Cut Production Costs by 80%. One Video.
            Every Platform.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="w-full hover:bg-black transition-all bg-yellow hover:text-white text-[#1a1a1a] sm:w-auto"
            >
              Get Your First Video
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 