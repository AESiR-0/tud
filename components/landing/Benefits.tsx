import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  DollarSign, 
  Clock, 
  Palette, 
  Globe, 
  Sparkles, 
  LineChart,
  ArrowRight
} from "lucide-react";

const benefits = [
  {
    title: "Cost-Effective",
    description: "Reduce video production costs by up to 80% while maintaining professional quality.",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-50",
    hoverColor: "group-hover:bg-green-100",
  },
  {
    title: "Time-Saving",
    description: "Create multiple videos in minutes instead of hours or days.",
    icon: Clock,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    hoverColor: "group-hover:bg-blue-100",
  },
  {
    title: "Consistent Branding",
    description: "Maintain perfect brand consistency across all video content.",
    icon: Palette,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    hoverColor: "group-hover:bg-purple-100",
  },
  {
    title: "Global Reach",
    description: "Instantly translate and localize your videos for international markets.",
    icon: Globe,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    hoverColor: "group-hover:bg-orange-100",
  },
  {
    title: "Easy to Use",
    description: "No technical expertise required. Create professional videos with simple text input.",
    icon: Sparkles,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    hoverColor: "group-hover:bg-pink-100",
  },
  {
    title: "Scalable Solution",
    description: "Scale your video production without increasing your team size.",
    icon: LineChart,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    hoverColor: "group-hover:bg-indigo-100",
  },
];

export default function Benefits() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#1a1a1a]">
            Why Choose Our Solution
          </h2>
          <p className="text-base sm:text-lg text-[#1a1a1a]/80 max-w-2xl mx-auto">
            Transform your video production process with our cutting-edge AI technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-none bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group">
                <CardContent className="p-6 sm:p-8">
                  <motion.div 
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${benefit.bgColor} ${benefit.hoverColor} flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.5 }
                      }}
                    >
                      <benefit.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${benefit.color}`} />
                    </motion.div>
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-[#1a1a1a] group-hover:text-[#1a1a1a]/80 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-base sm:text-lg text-[#1a1a1a]/70 mb-4">
                    {benefit.description}
                  </p>
                  <motion.div 
                    className="flex items-center text-[#1a1a1a]/60 group-hover:text-[#1a1a1a] transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 