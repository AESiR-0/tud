import Image from "next/image";
import { motion } from "framer-motion";

export default function FloatingDuck() {
  return (
    <motion.div
      className="fixed z-10 bottom-5 right-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <Image
        src="/images/TUD Assets-03.png"
        height={32}
        width={32}
        alt="duckling"
        className="h-[3.5rem] w-auto md:h-[4.5rem]"
      />
    </motion.div>
  );
} 