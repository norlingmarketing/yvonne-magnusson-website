"use client";

import Link from "next/link";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Ripple } from "@/components/magicui/ripple";
import type { Dictionary } from "@/lib/dictionaries";

interface LocalizedHeroSectionProps {
  dictionary: Dictionary;
  locale: string;
}

export function LocalizedHeroSection({ dictionary, locale }: LocalizedHeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-muted/50 to-background overflow-hidden">
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
          <AnimatedGradientText className="mb-6">
            {dictionary.hero.gradientText}
          </AnimatedGradientText>
        </BlurFade>

        <BlurFade delay={0.4}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            {dictionary.hero.title}{" "}
            <span className="text-primary">
              {dictionary.hero.titleHighlight}
            </span>
            <br />
            {dictionary.hero.titleEnd}
          </h1>
        </BlurFade>

        <BlurFade delay={0.6}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {dictionary.hero.subtitle}
          </p>
        </BlurFade>

        <BlurFade delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              asChild 
              className="px-8 py-3 text-lg bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href={`/${locale}/kontakt`} className="flex items-center gap-2">
                {dictionary.hero.ctaPrimary}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button variant="outline" className="px-8 py-3 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <Link href={`/${locale}/forelasningar`} className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                {dictionary.hero.ctaSecondary}
              </Link>
            </Button>
          </div>
        </BlurFade>

      </div>
    </section>
  );
}