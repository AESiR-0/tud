import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Lightbulb, 
  Rocket, 
  Users,
  TrendingUp,
  Globe,
  Zap
} from "lucide-react";

const storySteps = [
  {
    title: "The Innovation",
    description: "Started as a case study exploring AI's potential in video creation. Our initial tests showed a 300% increase in content production speed and 40% cost reduction.",
    icon: <Lightbulb className="w-8 h-8" />,
    year: "2022",
    metrics: [
      { label: "Production Speed", value: "300%", icon: <Zap className="w-4 h-4" /> },
      { label: "Cost Reduction", value: "40%", icon: <TrendingUp className="w-4 h-4" /> }
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Internal Success",
    description: "Built and tested internally, creating 500+ videos. Achieved 85% engagement rate and 3x higher conversion rates compared to traditional video production.",
    icon: <Rocket className="w-8 h-8" />,
    year: "2023",
    metrics: [
      { label: "Engagement Rate", value: "85%", icon: <TrendingUp className="w-4 h-4" /> },
      { label: "Conversion Rate", value: "3x", icon: <Zap className="w-4 h-4" /> }
    ],
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Client Impact",
    description: "Helping 100+ businesses across India. Average 60% reduction in production time, 45% cost savings, and 200% increase in content output.",
    icon: <Users className="w-8 h-8" />,
    year: "2024",
    metrics: [
      { label: "Time Saved", value: "60%", icon: <Zap className="w-4 h-4" /> },
      { label: "Content Output", value: "200%", icon: <Globe className="w-4 h-4" /> }
    ],
    color: "from-orange-500 to-orange-600"
  },
];

export default function Story() {
  return (
      <section className="py-20 bg-gradient-to-b from-white via-yellow to-white">
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

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Animated Timeline line */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {storySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:ml-auto md:mr-8" : "md:mr-auto md:ml-8"
                } md:w-1/2`}
              >
                <Card className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div 
                        className={`p-3 rounded-full bg-gradient-to-r ${step.color} text-white`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {step.icon}
                      </motion.div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">
                          {step.year}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {step.metrics.map((metric, idx) => (
                        <motion.div
                          key={idx}
                          className="bg-gray-50 rounded-lg p-3 flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <div className="text-blue-600">
                            {metric.icon}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{metric.value}</div>
                            <div className="text-xs text-gray-500">{metric.label}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
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