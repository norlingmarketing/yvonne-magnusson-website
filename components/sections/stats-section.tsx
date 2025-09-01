"use client";

import { NumberTicker } from "@/components/magicui/number-ticker";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Dictionary } from "@/lib/types/dictionary";


interface StatsSectionProps {
  locale: string;
  dict: Dictionary;
}

export function StatsSection({ locale: _locale, dict }: StatsSectionProps) {
  const stats = dict.statsSection.stats;
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <BlurFade delay={0.2}>
          <div className="text-center space-y-4 py-6 mx-auto">
            <h2 className="text-sm text-primary font-mono font-medium tracking-tight">
              {dict.statsSection.title}
            </h2>
            <h4 className="text-5xl font-medium mb-2 text-balance max-w-3xl mx-auto tracking-tighter text-foreground">
              {dict.statsSection.subtitle}
            </h4>
          </div>
        </BlurFade>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <BlurFade key={index} delay={0.4 + index * 0.1}>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-primary">
                  <NumberTicker value={stat.value} />
                  {stat.suffix}
                </h3>
                <p className="text-sm text-muted-foreground max-w-[200px]">
                  {stat.label}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}