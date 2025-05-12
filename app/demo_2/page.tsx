"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Testimonials from "@/components/landing/Testimonials";
import Applications from "@/components/landing/Applications";
import Stats from "@/components/landing/Stats";
import Story from "@/components/landing/Story";
import InteractiveContent from "@/components/InteractiveContent";
import Founder from "@/components/landing/Founder";
import Media from "@/components/landing/Media";
import ContactForm from "@/components/landing/ContactForm";

export default function Home() {
  return (
    <div className="cursor-du">
      <div className="min-h-screen bg-background text-foreground">
        {/* Duckling Logo */}
        <div className="fixed z-10 bottom-5 right-10">
          <Image
            src="/images/duck1.png"
            height={32}
            width={32}
            alt="duckling"
            className="h-[3.5rem] w-auto md:h-[4.5rem]"
          />
        </div>

        {/* Main Content */}
        <main>
          <Hero />
          <InteractiveContent />
          <Benefits />
          <Applications />
          <Media />
          <Stats />
          <Story />
          <Founder />
          <Testimonials />
          <FAQ />
          <ContactForm />
          <CTA />
        </main>
      </div>
    </div>
  );
} 