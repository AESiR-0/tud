import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  Camera, 
  Mic, 
  Globe,
  ArrowRight 
} from "lucide-react";
import Image from "next/image";

const steps = [
  {
    title: "Concepts & Scripts",
    description: "Start with your existing content or let us help create engaging scripts that convert.",
    icon: FileText,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    hoverColor: "group-hover:bg-blue-100",
    delay: 0,
    duckPosition: "top-0 left-0",
  },
  {
    title: "Shoot Multiple Looks",
    description: "Choose from our diverse range of AI avatars or create your custom presenter.",
    icon: Camera,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    hoverColor: "group-hover:bg-purple-100",
    delay: 0.2,
    duckPosition: "top-1/2 right-0",
  },
  {
    title: "Train Avatar & AI Voice",
    description: "Our AI learns your brand's tone and style for consistent messaging.",
    icon: Mic,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    hoverColor: "group-hover:bg-pink-100",
    delay: 0.4,
    duckPosition: "bottom-0 left-0",
  },
  {
    title: "Scale It Across Markets",
    description: "One video? Ten markets? No problem. We auto-adapt your content for global reach.",
    icon: Globe,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    hoverColor: "group-hover:bg-orange-100",
    delay: 0.6,
    duckPosition: "bottom-0 right-0",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const duckVariants = {
  initial: { y: 0 },
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative">
      {/* Background Ducks */}
      <div className="absolute inset-0 pointer-events-none">
        {steps.map((step, index) => (
          <motion.div
            key={`duck-${index}`}
            className={`absolute ${step.duckPosition} w-16 h-16`}
            variants={duckVariants}
            initial="initial"
            animate="float"
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            <Image
              src="/images/duck_peeping.png"
              alt="Floating duck"
              width={64}
              height={64}
              className="opacity-20"
            />
          </motion.div>
        ))}
      </div>

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

        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6">
                    <motion.div 
                      className="flex items-start gap-4"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className={`p-4 rounded-2xl ${step.bgColor} ${step.hoverColor} transition-colors duration-300 relative`}
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
                          <step.icon className={`w-8 h-8 ${step.color}`} />
                        </motion.div>
                        <motion.div 
                          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-sm font-bold text-gray-600"
                          whileHover={{ scale: 1.2 }}
                        >
                          {index + 1}
                        </motion.div>
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {step.description}
                        </p>
                        <motion.div 
                          className="flex items-center text-gray-500 group-hover:text-gray-700 transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-sm font-medium">Learn more</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 