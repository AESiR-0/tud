// app/page.tsx
"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Check, ChevronRight, Star } from "lucide-react";
import { InfiniteMovingCards } from "@/components/ui/MovingCards";
import { mfont } from "@/components/fonts";
import ParallaxProcess from "@/components/ParallaxProcess";
import Roadmap from "@/components/RoadMap";
import WhyStartCard from "@/components/whyStatCard";
import Image from 'next/image'
import { motion } from 'framer-motion'
import AvatarCarousel from "@/components/WhyStatCarousel";


export default function Home() {
  const benefits = [
    {
      title: "Time-Saving & Cost-Saving: 80% cheaper",
      description: "Your AI avatar works around the clock, never taking a break.",
    },
    {
      title: "Multi-Lingual",
      description: "Save on staffing costs with our affordable avatar solutions.",
    },
    {
      title: "Adaptive Content: On Any Platform",
      description: "Communicate with customers in any language effortlessly.",
    },

  ];

  const steps = [
    {
      step: "1",
      title: "Concepts & Scripts",
      description: "",
    },
    {
      step: "2",
      title: "Shoot Multiple Looks",
      description: "",
    },
    {
      step: "3",
      title: "Train Avatar & Ai Voice",
      description: "",
    },
    {
      step: "4",
      title: "Scale It Across Markets",
      description: "One video? Ten markets? No problem. We auto-adapt.",
    },
  ];

  const differentiators = [
    "🚀Instagram, Meta, Google, Etc performance ads",
    "E-commerce Product Demos",
    "📚 Training & E-learning",
    "Webinar recordings",
    "WhatsApp & CRM Messaging",
  ];


  const testimonials = [
    {
      // name: "Sarah Johnson",
      role: "Growth Lead, D2C Wellness Brand",
      quote: "We saved weeks of production time and launched our multilingual campaigns 4x faster. Game-changer!",
      stars: 5,
    },
    {
      // name: "Michael Chen",
      role: " VP Marketing, EdTech Startup",
      quote: "We don’t need studios anymore. The AI avatar does it all — in every language our audience speaks.",
      stars: 5,
    },
  ];

  const faqs = [
    {
      question: "Can I create videos in regional Indian languages?",
      answer: "Yes! We support Hindi, Tamil, Malayalam, Telugu, Kannada, and many more.",
    },
    {
      question: "Can I use my own script?",
      answer: "Absolutely. Or we’ll help you write one that converts.",
    },
    {
      question: "Can I get my own avatar?",
      answer: "Yes. Custom avatar creation is available on request.",
    }
  ];

  const testimonials1 = [
    {
      src:
        "/images/TUD Assets-08.png",
      name: "mama earth",
      
    },
    {
      src:
        "/images/TUD Assets-09.png",
      name: "dot and key"
    },
    {
      src:
      "/images/TUD Assets-10.png",
      name: "vahdam"
    },
    {
      src:
        "/images/TUD Assets-11.png",
      name: "kama ayurveda"
    },
    {
      src:
        "/images/TUD Assets-12.png",
      name: "curious cub"
    },
    {
      src:
        "/images/Ugaoo logo-01-.png",
      name: "ugaoo"
    },
  ];
  
  const testimonials2 = [
    {
      src:
        "/images/TUD Assets-13.png",
      name: "dev gadhvi",
      
    },
    {
      src:
        "/images/TUD Assets-14.png",
      name: "gynoveda"
    },
    {
      src:
      "/images/TUD Assets-15.png",
      name: "khadi essentials"
    },
    {
      src:
        "/images/TUD Assets-16.png",
      name: "sock socha"
    },
    {
      src:
        "/images/TUD Assets-17.png",
      name: "mother sparsh"
    },
    {
      src:
        "/images/TUD Assets-18.png",
      name: "arun pandit"
    },
  ];
  

  return (
    <div className="min-h-screen bg-background text-foreground bg-yellow">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <Badge variant="destructive" className="mb-4">
            AI Revolution Starts Here
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
          Shoot it Once. Say It Everywhere!
          </h1>
          <p className="max-w-2xl text-lg md:text-xl mb-8">
          One avatar for 100 Videos. Cut Production Costs by 80%.
          One Video. Every Platform.  
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <Button size="lg" className="w-full sm:w-auto">
            Get Your First Video<ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            {/* <Button size="lg" variant="outline" className="w-full sm:w-auto">
              See Demo
            </Button> */}
          </div>
        </div>
      </section>
      
        <ParallaxProcess />

        {/* Key Benefits */}
      <section className="container mx-auto px-4 py-16 bg-yellow">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Reasons to Start AI Video Today</h2>
          <p className="max-w-2xl mx-auto">
          Our AI-powered video creation service replicates human presenters using cutting-edge avatars that will scale your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      {/* <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple 4-Step Process</h2>
          <p className="max-w-2xl mx-auto">
            Getting your custom AI avatar is quick and effortless.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-yellow text-black flex items-center justify-center text-2xl font-bold mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>     */}
      <Roadmap />

      {/* What Makes Us Different */}
      <AvatarCarousel />
      <WhyStartCard />

    <div className="container mx-auto px-4 py-16 bg-yellow">
            <div className="h-[13rem] md:h-[15rem] rounded-md flex flex-col antialiased
              items-center justify-center relative overflow-hidden opacity-60">
            <InfiniteMovingCards
                items={testimonials1}
                direction="right"
                speed="normal"
                pauseOnHover={false}
            />
            <InfiniteMovingCards
                items={testimonials2}
                direction="left"
                speed="normal"
                pauseOnHover={false}
            />
            </div>
        </div>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16 bg-yellow">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow text-yellow" />
                  ))}
                </div>
                <blockquote className="italic mb-6">"{testimonial.quote}"</blockquote>
                <div>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="max-w-2xl mx-auto">
            Find answers to common questions about our AI avatar services.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-ful">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 bg-yellow">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Ditch the Studio?</h2>
          <p className="max-w-2xl mx-auto mb-8">
          Create your next high-converting video — faster, cheaper, and at scale.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button size="lg"> Let’s Make Your First AI Video</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}