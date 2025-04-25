"use client";

import BarChart from "@/components/BarChart";
import Brands from "@/components/Brands";
import { Card } from "@/components/Card2";
import Footer from "@/components/Footer1";
import Hero from "@/components/Hero";
import Services1 from "@/components/Services2";
import Services from "@/components/Services3";
import GrowthStats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import {WorkVideo1} from "@/components/WorkVideo"
import { WorkVideo2 } from "@/components/WorkVideo1";
import { navItems } from "@/data";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) {
    return null;
  }
  return (
    <main className="bg-yellow flex justify-center item-center flex-col  mx-auto sm:px-10 px-2 overflow-clip">
      <div className="max-w-7xl w-full mx-auto">
        <FloatingNav 
        navItems={navItems}
        className="bg-yellow border-[1.5px] border-black-100 "
          />
        <Hero />
        <WorkVideo1 />
        <Card />
        <WorkVideo2 />
        {/* <Services1 /> */}
        <Services />
        <GrowthStats />
        <Brands />
        <Testimonial />
        <BarChart />
        <Footer />
      </div>
    </main>
  );
}