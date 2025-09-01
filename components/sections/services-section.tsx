"use client";

import { LocalizedLink } from "@/components/localized-link";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { getIcon, IconName } from "@/lib/utils/icon-map";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Dictionary } from "@/lib/types/dictionary";
import { type Locale } from "@/lib/routes";

interface ServicesSectionProps {
  locale: string;
  dict: Dictionary;
}

export function ServicesSection({ locale, dict }: ServicesSectionProps) {
  const services = [
    {
      icon: "Users" as IconName,
      title: dict.services.boardWork,
      description: dict.services.boardWorkDescription,
      features: dict.services.boardWorkFeatures,
      route: 'boardWork' as const,
    },
    {
      icon: "Briefcase" as IconName,
      title: dict.services.seniorAdvisor,
      description: dict.services.seniorAdvisorDescription,
      features: dict.services.seniorAdvisorFeatures,
      route: 'seniorAdvisor' as const,
    },
    {
      icon: "TrendingUp" as IconName,
      title: dict.services.interimExecutive,
      description: dict.services.interimExecutiveDescription,
      features: dict.services.interimExecutiveFeatures,
      route: 'interimExecutive' as const,
    },
    {
      icon: "Presentation" as IconName,
      title: dict.services.workshops,
      description: dict.services.workshopsDescription,
      features: dict.services.workshopsFeatures,
      route: 'workshops' as const,
    },
  ];
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
              {dict.services.sectionTitle}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {dict.services.sectionSubtitle}
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
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
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
                      <LocalizedLink route={service.route} locale={locale as Locale} className="flex items-center justify-center gap-2">
                        {dict.common.readMore}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </LocalizedLink>
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
              <LocalizedLink route="services" locale={locale as Locale} className="flex items-center gap-2">
                {dict.services.viewAllServices}
                <ArrowRight className="h-5 w-5" />
              </LocalizedLink>
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}