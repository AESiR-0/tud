import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Time-Saving & Cost-Saving: 80% cheaper",
    description: "Your AI avatar works around the clock, never taking a break.",
  },
  {
    title: "Multi-Lingual",
    description: "Save on staffing costs with our affordable avatar solutions.",
  },
  {
    title: "Adaptive Content: On Any Platform",
    description: "Communicate with customers in any language effortlessly.",
  },
];

export default function Benefits() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Reasons to Start AI Video Today
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our AI-powered video creation service replicates human presenters
            using cutting-edge avatars that will scale your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 