"use client";

import { LocalizedLink } from "@/components/localized-link";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { AuroraText } from "@/components/magicui/aurora-text";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Dictionary } from "@/lib/types/dictionary";
import { type Locale } from "@/lib/routes";

interface HeroSectionProps {
  locale: string;
  dict: Dictionary;
}

export function HeroSection({ locale, dict }: HeroSectionProps) {
  return (
    <section className="relative py-20 md:py-32 lg:py-40 flex items-center justify-center bg-gradient-to-br from-muted/50 to-background overflow-hidden min-h-[600px] md:min-h-[700px]">
      {/* Animated Background Grid */}
      <FlickeringGrid
        className="absolute inset-0 z-0 [mask-image:radial-gradient(50vw_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color="hsl(var(--primary))"
        maxOpacity={0.1}
        flickerChance={0.05}
      />
      
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Content Column - 2/3 width */}
          <div className="order-2 lg:order-1 lg:col-span-2 text-center lg:text-left space-y-6 md:space-y-8">
            <div>
              <BlurFade delay={0.2}>
                <AnimatedGradientText className="mb-6">
                  {dict.hero.badge}
                </AnimatedGradientText>
              </BlurFade>
            </div>

            <div>
              <BlurFade delay={0.4}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-4xl mx-auto lg:mx-0">
                  <span className="text-foreground">{dict.hero.personalIntro}</span>
                  <AuroraText 
                    colors={["#2C5F7C", "#D4A574", "#1e40af", "#06b6d4", "#2C5F7C"]}
                    speed={0.8}
                    className="inline-block"
                  >
                    {dict.hero.titleHighlight}
                  </AuroraText>
                  <span className="text-foreground">{dict.hero.titleEnd}</span>
                </h1>
              </BlurFade>
            </div>

            <div>
              <BlurFade delay={0.6}>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                  {dict.hero.subtitle}
                </p>
              </BlurFade>
            </div>

            <div>
              <BlurFade delay={0.8}>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center sm:items-start">
                  <Button asChild size="lg" className="px-8 py-3 text-lg w-full sm:w-auto">
                    <LocalizedLink route="contact" locale={locale as Locale} className="flex items-center justify-center gap-2">
                      {dict.hero.ctaPrimary}
                      <ArrowRight className="h-5 w-5" />
                    </LocalizedLink>
                  </Button>
                  
                  <Button asChild variant="outline" size="lg" className="px-8 py-3 text-lg w-full sm:w-auto">
                    <LocalizedLink route="speaking" locale={locale as Locale} className="flex items-center justify-center gap-2">
                      <Play className="h-5 w-5" />
                      {dict.hero.ctaSecondary}
                    </LocalizedLink>
                  </Button>
                </div>
              </BlurFade>
            </div>
          </div>

          {/* Photo Column - 1/3 width */}
          <div className="order-1 lg:order-2 lg:col-span-1 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg">
              {/* Placeholder Professional Photo */}
              <div className="relative aspect-[4/5] rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border border-border/50">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">YM</span>
                    </div>
                    <p className="text-sm">Professional Photo</p>
                    <p className="text-xs text-muted-foreground/70">500x625px recommended</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}