import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is AI video technology?",
    answer: "AI video technology uses artificial intelligence to automate and enhance video production processes, including translation, voice synthesis, and content adaptation across different languages and formats."
  },
  {
    question: "How does the translation process work?",
    answer: "Our AI system analyzes your video content, translates the speech while maintaining natural intonation, and synchronizes the new audio with the video, ensuring perfect lip-sync and emotional expression."
  },
  {
    question: "What languages do you support?",
    answer: "We support over 50 languages, including major global languages and regional dialects. Our system continuously learns and improves to support more languages and dialects."
  },
  {
    question: "How long does it take to process a video?",
    answer: "Processing time depends on video length and complexity. Typically, a 5-minute video can be translated and processed within 24 hours. We offer expedited processing for urgent projects."
  },
  {
    question: "What video formats do you accept?",
    answer: "We accept all major video formats including MP4, MOV, AVI, and WMV. For best results, we recommend high-quality source files with clear audio."
  }
];

export default function FAQ() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-[#1a1a1a]/80">
              Find answers to common questions about our AI video technology and services.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#1a1a1a]/10"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg font-medium text-[#1a1a1a] py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base sm:text-lg text-[#1a1a1a]/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
} 