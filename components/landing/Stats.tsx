import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const stats = [
  {
    value: 1000,
    suffix: "+",
    label: "Videos Created",
    description: "High-quality AI videos delivered to clients",
  },
  {
    value: 15,
    suffix: "+",
    label: "Languages",
    description: "Support for multiple Indian and global languages",
  },
  {
    value: 80,
    suffix: "%",
    label: "Cost Reduction",
    description: "Compared to traditional video production",
  },
  {
    value: 50,
    suffix: "+",
    label: "Active Clients",
    description: "Trusted by leading brands and businesses",
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            By The Numbers
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Our impact in numbers - transforming video creation across industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4">
                <span className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow to-yellow/80">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    const duration = 2500; // 2.5 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * value));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value]);

  return <>{count}{suffix}</>;
} 