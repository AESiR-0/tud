"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Testimonials from "@/components/landing/Testimonials";
import ParallaxProcess from "@/components/ParallaxProcess";
import RoadmapDotted from "@/components/RoadMap";
import WhyStartCard from "@/components/whyStatCard";
import AvatarCarousel from "@/components/WhyStatCarousel";
import InteractiveContent from "@/components/InteractiveContent";

export default function Home() {
  return (
    <div className="cursor-du">
      <div className="min-h-screen bg-background text-foreground">
        {/* Duckling Logo */}
        <div className="fixed z-10 bottom-5 right-10">
          <Image
            src="/images/TUD Assets-03.png"
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
          <RoadmapDotted />
          <AvatarCarousel />
          <Testimonials />
          <FAQ />
          <CTA />
        </main>
      </div>
    </div>
  );
} 