"use client";

import Link from "next/link";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { AuroraText } from "@/components/magicui/aurora-text";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Ripple } from "@/components/magicui/ripple";
import { Dictionary } from "@/lib/types/dictionary";

interface HeroSectionProps {
  locale: string;
  dict: Dictionary;
}

export function HeroSection({ locale, dict }: HeroSectionProps) {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 flex items-center justify-center bg-gradient-to-br from-muted/50 to-background overflow-hidden">
      {/* Animated Background Grid */}
      <FlickeringGrid
        className="absolute inset-0 z-0 [mask-image:radial-gradient(50vw_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color="hsl(var(--primary))"
        maxOpacity={0.1}
        flickerChance={0.05}
      />
      
      {/* Ripple Effect */}
      <Ripple
        className="absolute inset-0 z-0"
        mainCircleSize={300}
        mainCircleOpacity={0.08}
        numCircles={5}
      />
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <BlurFade delay={0.2}>
          <AnimatedGradientText className="mb-4">
            {dict.hero.badge}
          </AnimatedGradientText>
        </BlurFade>

        <BlurFade delay={0.4}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="text-foreground">{dict.hero.titleStart}</span>
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

        <BlurFade delay={0.6}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            {dict.hero.subtitle}
          </p>
        </BlurFade>

        <BlurFade delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={`/${locale}/kontakt`}>
              <Button size="lg" className="px-8 py-3 text-lg flex items-center gap-2">
                {dict.hero.ctaPrimary}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            
            <Link href={`/${locale}/forelasningar`}>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg flex items-center gap-2">
                <Play className="h-5 w-5" />
                {dict.hero.ctaSecondary}
              </Button>
            </Link>
          </div>
        </BlurFade>

      </div>
    </section>
  );
}