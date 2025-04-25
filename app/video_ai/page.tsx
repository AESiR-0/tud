// import { Header } from '@/components/header';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import { CTA } from '@/components/video/cta';
import { Features } from '@/components/video/features';
import { Hero } from '@/components/video/hero';
import { navItems } from '@/data';
// import { Features } from '@/components/features';
// import { CreativeControl } from '@/components/creative-control';
// import { SmartAI } from '@/components/smart-ai';
// import { CoPresent } from '@/components/co-present';
// import { UseCases } from '@/components/use-cases';
// import { CTA } from '@/components/cta';
import Footer from "@/components/Footer1";
import { UseCases } from '@/components/video/use-case';
import WhyChooseUs from '@/components/video/whyus';
import Brands from '@/components/Brands';

export default function VideoPage() {
  return (
    <main className="relative bg-yellow flex justify-center item-center flex-col  mx-auto sm:px-5 pt-5 overflow-clip">
      <div className="max-w-7xl w-full mx-auto">
    <FloatingNav 
        navItems={navItems}
        className="bg-yellow border-[1.5px] border-black-100 "
        />
      {/* <Header /> */}
      <Hero />
      <Brands />
      <WhyChooseUs />
       <Features />
      {/*
      <CreativeControl />
      <SmartAI />
      <CoPresent />
      
      
       */}
    <UseCases />
      <CTA />
      <Footer />
      </div>
    </main>
  );
}
