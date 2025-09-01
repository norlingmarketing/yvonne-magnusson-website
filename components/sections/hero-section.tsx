"use client";

import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { AuroraText } from "@/components/magicui/aurora-text";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Ripple } from "@/components/magicui/ripple";


export function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();
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
            {t('badge')}
          </AnimatedGradientText>
        </BlurFade>

        <BlurFade delay={0.4}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="text-foreground">{t('titleStart')}</span>
            <AuroraText 
              colors={["#2C5F7C", "#D4A574", "#1e40af", "#06b6d4", "#2C5F7C"]}
              speed={0.8}
              className="inline-block"
            >
              {t('titleHighlight')}
            </AuroraText>
            <span className="text-foreground">{t('titleEnd')}</span>
          </h1>
        </BlurFade>

        <BlurFade delay={0.6}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </BlurFade>

        <BlurFade delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={`/${locale}/kontakt`}>
              <Button size="lg" className="px-8 py-3 text-lg flex items-center gap-2">
                {t('ctaPrimary')}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            
            <Link href={`/${locale}/forelasningar`}>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg flex items-center gap-2">
                <Play className="h-5 w-5" />
                {t('ctaSecondary')}
              </Button>
            </Link>
          </div>
        </BlurFade>

      </div>
    </section>
  );
}