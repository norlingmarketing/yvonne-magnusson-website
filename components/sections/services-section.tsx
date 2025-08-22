"use client";

import Link from "next/link";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase, TrendingUp, Presentation } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Styrelsearbete",
    description: "Kommersiell skärpa och strategiskt fokus för styrelser i transformationsresor.",
    features: [
      "Internationalisering och digitalisering",
      "Kulturell transformation",
      "Strategisk riktning och uppsikt"
    ],
    href: "/tjanster/styrelsearbete",
    color: "from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Briefcase,
    title: "Senior Advisor",
    description: "Löpande rådgivning för ledningsgrupper och ägare inom retail och consumer.",
    features: [
      "2-3 dagar/månad engagement",
      "Strategisk sparring",
      "Retail & Consumer expertis"
    ],
    href: "/tjanster/senior-advisor",
    color: "from-emerald-50 to-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: TrendingUp,
    title: "Interimledare",
    description: "VD/CCO roller vid behov av förändring, turnaround eller tillväxtresa.",
    features: [
      "Snabb analys och mobilisering",
      "Fokus på KPI-leverans",
      "Erfaren turnaround-specialist"
    ],
    href: "/tjanster/interim-ledare",
    color: "from-purple-50 to-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Presentation,
    title: "Workshops",
    description: "Skräddarsydda workshops för strategisk utveckling och transformation.",
    features: [
      "Retail Experience Sprint",
      "International Readiness",
      "Business Model Innovation"
    ],
    href: "/tjanster/workshops",
    color: "from-amber-50 to-amber-100",
    iconColor: "text-amber-600",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vad jag erbjuder
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fyra fokuserade tjänsteområden för att driva transformation och tillväxt 
              i retail och consumer markets.
            </p>
          </div>
        </BlurFade>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <BlurFade key={index} delay={0.4 + index * 0.1}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 bg-white">
                  <CardHeader className="pb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 ${service.iconColor}`} />
                    </div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-[#2C5F7C] transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-[#2C5F7C] rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full border-[#2C5F7C] text-[#2C5F7C] hover:bg-[#2C5F7C] hover:text-white group-hover:bg-[#2C5F7C] group-hover:text-white transition-all"
                    >
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
            <Button asChild size="lg" className="bg-[#2C5F7C] hover:bg-[#2C5F7C]/90 text-white px-8 py-3">
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