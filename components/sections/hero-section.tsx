"use client";

import Link from "next/link";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ArrowRight, Play } from "lucide-react";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Ripple } from "@/components/magicui/ripple";


export function HeroSection() {
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
            🌟 Transformation Leadership
          </AnimatedGradientText>
        </BlurFade>

        <BlurFade delay={0.4}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Ledarskap för{" "}
            <span className="text-primary">
              lönsam tillväxt
            </span>
            <br />
            och transformation
          </h1>
        </BlurFade>

        <BlurFade delay={0.6}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Med 30+ års erfarenhet från ledande roller i retail och FMCG hjälper jag företag och styrelser 
            navigera genom digitalisering, kulturförflyttning och internationalisering.
          </p>
        </BlurFade>

        <BlurFade delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <ShimmerButton
              className="px-8 py-3 text-lg"
              shimmerColor="hsl(var(--accent))"
              background="hsl(var(--primary))"
            >
              <Link href="/kontakt" className="flex items-center gap-2">
                Boka intro-samtal
                <ArrowRight className="h-5 w-5" />
              </Link>
            </ShimmerButton>
            
            <Button variant="outline" className="px-8 py-3 text-lg" asChild>
              <Link href="/forelasningar" className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Se föreläsningar
              </Link>
            </Button>
          </div>
        </BlurFade>

      </div>
    </section>
  );
}