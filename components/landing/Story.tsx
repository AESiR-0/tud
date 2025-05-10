import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Lightbulb, 
  Rocket, 
  Users 
} from "lucide-react";

const storySteps = [
  {
    title: "The Beginning",
    description: "It all started as a case study - exploring how AI could revolutionize video creation. We saw the potential to make video production accessible to everyone.",
    icon: <Lightbulb className="w-8 h-8" />,
    year: "2022",
  },
  {
    title: "Internal Success",
    description: "We built it for ourselves first, creating hundreds of videos for our own content. The results were incredible - faster production, consistent quality, and global reach.",
    icon: <Rocket className="w-8 h-8" />,
    year: "2023",
  },
  {
    title: "Client Impact",
    description: "Today, we're helping businesses across India create engaging video content in multiple languages, saving time and resources while maintaining high quality.",
    icon: <Users className="w-8 h-8" />,
    year: "2024",
  },
];

export default function Story() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Our Journey
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            From a simple idea to transforming video creation across India
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200" />

            {storySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:ml-auto md:mr-8" : "md:mr-auto md:ml-8"
                } md:w-1/2`}
              >
                <Card className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-full bg-gray-100">
                        {step.icon}
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">
                          {step.year}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 