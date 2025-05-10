import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-yellow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
              Get in Touch
            </h2>
            <p className="text-base sm:text-lg text-[#1a1a1a]/80">
              Ready to transform your video content? Let's discuss how we can help you achieve your goals.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="w-full text-base sm:text-lg"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="w-full text-base sm:text-lg"
                />
              </div>
            </div>
            <div>
              <Input
                type="text"
                placeholder="Subject"
                className="w-full text-base sm:text-lg"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                className="w-full min-h-[150px] text-base sm:text-lg"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg hover:bg-black transition-all bg-white hover:text-white text-[#1a1a1a]"
            >
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
} 