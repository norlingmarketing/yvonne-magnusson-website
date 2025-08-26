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


export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Vad klienter säger
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Förtroende byggt genom levererade resultat och långsiktiga partnerskap.
            </p>
          </div>
        </BlurFade>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <BlurFade key={index} delay={0.4 + index * 0.1}>
              <Card className="h-full bg-muted/50 border-0 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <blockquote className="text-foreground text-lg leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    <div className="text-xs text-primary font-medium mt-1">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>

      </div>
    </section>
  );
}