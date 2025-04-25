import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Time-Saving & Cost-Saving",
    subtitle: "80% cheaper than traditional methods",
    description: "Your AI avatar works around the clock, never taking a break.",
    icon: <CheckCircle2 className="w-6 h-6 text-green-500" />,
  },
  {
    title: "Multi-Lingual Support",
    subtitle: "Global reach, local touch",
    description: "Communicate with customers in any language effortlessly.",
    icon: <CheckCircle2 className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Adaptive Content",
    subtitle: "Seamless platform integration",
    description: "Perfectly optimized content for any platform or device.",
    icon: <CheckCircle2 className="w-6 h-6 text-purple-500" />,
  },
];

export default function Benefits() {
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
            Why Choose AI Video?
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Transform your business with our cutting-edge AI video solutions that
            combine efficiency, versatility, and global reach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl md:text-2xl font-semibold text-gray-900">
                      {benefit.title}
                    </CardTitle>
                  </div>
                  <p className="text-sm font-medium text-gray-500">
                    {benefit.subtitle}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-500 text-sm">
            Join hundreds of businesses already transforming their content creation
          </p>
        </motion.div>
      </div>
    </section>
  );
} 