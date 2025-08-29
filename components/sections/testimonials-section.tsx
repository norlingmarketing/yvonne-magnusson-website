"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Auto-rotate every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

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

        {/* Desktop: Show all testimonials in grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <BlurFade key={index} delay={0.4 + index * 0.1}>
              <Card className="h-full bg-muted/50 border-0 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
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

        {/* Mobile: Carousel */}
        <div className="md:hidden relative">
          <BlurFade delay={0.4}>
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-muted/50 border-0 shadow-lg">
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
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center mt-6 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}