import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-16 bg-yellow relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 bg-opacity-10 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.2) 0%, rgba(255,193,7,0) 70%)",
            backgroundSize: "120% 120%",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ready to Ditch the Studio?
          </motion.h2>
          
          <motion.p
            className="max-w-2xl mx-auto mb-10 text-black/80 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Create your next high-converting video — faster, cheaper, and at
            scale.
          </motion.p>
          
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                size="lg"
                className="bg-black hover:bg-white text-yellow hover:text-black font-medium px-6 py-6 text-lg shadow-lg cursor-none"
              >
                🎬 Let's Make Your First AI Video
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 