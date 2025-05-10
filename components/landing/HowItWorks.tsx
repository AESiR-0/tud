import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  Camera, 
  Mic, 
  Globe 
} from "lucide-react";

const steps = [
  {
    title: "Concepts & Scripts",
    description: "Start with your existing content or let us help create engaging scripts that convert.",
    icon: <FileText className="w-8 h-8" />,
  },
  {
    title: "Shoot Multiple Looks",
    description: "Choose from our diverse range of AI avatars or create your custom presenter.",
    icon: <Camera className="w-8 h-8" />,
  },
  {
    title: "Train Avatar & AI Voice",
    description: "Our AI learns your brand's tone and style for consistent messaging.",
    icon: <Mic className="w-8 h-8" />,
  },
  {
    title: "Scale It Across Markets",
    description: "One video? Ten markets? No problem. We auto-adapt your content for global reach.",
    icon: <Globe className="w-8 h-8" />,
  },
];

export default function HowItWorks() {
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
            How It Works
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Simple 4-step process to create your AI-powered video content
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
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
    </section>
  );
} 