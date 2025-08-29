"use client";

import Link from "next/link";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { getIcon, IconName } from "@/lib/utils/icon-map";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: "Users" as IconName,
    title: "Styrelsearbete",
    description: "Kommersiell skärpa och strategiskt fokus för styrelser i transformationsresor.",
    features: [
      "Internationalisering och digitalisering",
      "Kulturell transformation",
      "Strategisk riktning och uppsikt"
    ],
    href: "/tjanster/styrelsearbete",
  },
  {
    icon: "Briefcase" as IconName,
    title: "Senior Advisor",
    description: "Löpande rådgivning för ledningsgrupper och ägare inom retail och consumer.",
    features: [
      "2-3 dagar/månad engagement",
      "Strategisk sparring",
      "Retail & Consumer expertis"
    ],
    href: "/tjanster/senior-advisor",
  },
  {
    icon: "TrendingUp" as IconName,
    title: "Interimledare",
    description: "VD/CCO roller vid behov av förändring, turnaround eller tillväxtresa.",
    features: [
      "Snabb analys och mobilisering",
      "Fokus på KPI-leverans",
      "Erfaren turnaround-specialist"
    ],
    href: "/tjanster/interim-ledare",
  },
  {
    icon: "Presentation" as IconName,
    title: "Workshops",
    description: "Skräddarsydda workshops för strategisk utveckling och transformation.",
    features: [
      "Retail Experience Sprint",
      "International Readiness",
      "Business Model Innovation"
    ],
    href: "/tjanster/workshops",
  },
];

export function ServicesSection() {
  return (
    <section className="relative py-20 bg-muted/50 overflow-hidden">
      {/* Animated Background Pattern */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.05}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
          "absolute inset-0"
        )}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Vad jag erbjuder
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fyra fokuserade tjänsteområden för att driva transformation och tillväxt 
              i retail och consumer markets.
            </p>
          </div>
        </BlurFade>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = getIcon(service.icon);
            return (
              <BlurFade key={index} delay={0.4 + index * 0.1}>
                <Card className="relative h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border-0 bg-card/80 backdrop-blur-sm hover:bg-card overflow-hidden flex flex-col hover:border-primary/20">
                  {/* Card background pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <AnimatedGridPattern
                      numSquares={15}
                      maxOpacity={0.03}
                      duration={2}
                      repeatDelay={0.5}
                      className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4 group-hover:scale-110 group-hover:bg-primary/20 group-hover:rotate-3 transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 flex flex-col flex-1">
                    <ul className="space-y-2 mb-6 flex-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${featureIndex * 50}ms` }}>
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full mt-auto" asChild>
                      <Link href={service.href} className="flex items-center justify-center gap-2">
                        Läs mer
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </BlurFade>
            );
          })}
        </div>

        <BlurFade delay={0.8}>
          <div className="text-center">
            <Button asChild size="lg" className="px-8 py-3 text-lg">
              <Link href="/tjanster" className="flex items-center gap-2">
                Se alla tjänster
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}