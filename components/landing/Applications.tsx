import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, GraduationCap, Building2, Microscope, Globe, Video } from "lucide-react";

const applications = [
  {
    title: "E-commerce",
    description: "Create engaging product videos and tutorials in multiple languages.",
    icon: ShoppingBag,
  },
  {
    title: "Education",
    description: "Develop educational content and training materials at scale.",
    icon: GraduationCap,
  },
  {
    title: "Corporate Communications",
    description: "Streamline internal communications and training videos.",
    icon: Building2,
  },
  {
    title: "Research",
    description: "Present research findings and scientific content effectively.",
    icon: Microscope,
  },
  {
    title: "Global Marketing",
    description: "Launch marketing campaigns across different regions simultaneously.",
    icon: Globe,
  },
  {
    title: "Content Creation",
    description: "Generate consistent content for social media and platforms.",
    icon: Video,
  },
];

export default function Applications() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#1a1a1a]">
            Where All It Can Be Used
          </h2>
          <p className="text-base sm:text-lg text-[#1a1a1a]/80 max-w-2xl mx-auto">
            Transform your video production process with our cutting-edge AI technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {applications.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-none bg-yellow/10 hover:bg-yellow/20 transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <app.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#1a1a1a] mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#1a1a1a]">
                    {app.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#1a1a1a]/80">
                    {app.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 