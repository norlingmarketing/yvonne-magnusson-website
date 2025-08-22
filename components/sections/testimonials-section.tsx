"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Yvonne har en unik förmåga att kombinera strategiskt perspektiv med operativt ledarskap – alltid med fokus på hållbar lönsamhet.",
    author: "Styrelseordförande",
    company: "Retail AB",
    role: "Tidigare samarbete",
  },
  {
    quote: "Under Yvonnes ledning genomförde vi en framgångsrik turnaround som resulterade i +40 MSEK förbättring på två år.",
    author: "CFO",
    company: "Consumer Goods Nordic",
    role: "Interimuppdrag",
  },
  {
    quote: "Hennes expertis inom digital transformation och internationalisering var avgörande för vår expansion till nordiska marknader.",
    author: "VD",
    company: "Fashion Retail Group",
    role: "Senior Advisory",
  },
];

const logos = [
  { name: "Indiska", logo: "🏪" },
  { name: "Cervera", logo: "🏺" },
  { name: "NK", logo: "🏬" },
  { name: "V&B", logo: "🍽️" },
  { name: "Insula", logo: "🐟" },
  { name: "Kesko", logo: "🔨" },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vad klienter säger
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Förtroende byggt genom levererade resultat och långsiktiga partnerskap.
            </p>
          </div>
        </BlurFade>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <BlurFade key={index} delay={0.4 + index * 0.1}>
              <Card className="h-full bg-gray-50 border-0 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-[#2C5F7C] mb-4" />
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                    <div className="text-xs text-[#2C5F7C] font-medium mt-1">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.8}>
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Förtroende från ledande företag
              </h3>
              <p className="text-gray-600">
                Samarbetat med några av Nordens mest respekterade retail- och FMCG-företag
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {logos.map((logo, index) => (
                <div key={index} className="flex flex-col items-center group hover:opacity-100 transition-opacity">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {logo.logo}
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    {logo.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}