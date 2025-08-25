"use client";

import Link from "next/link";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Ripple } from "@/components/magicui/ripple";
import { NumberTicker } from "@/components/magicui/number-ticker";


export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Animated Background Grid */}
      <FlickeringGrid
        className="absolute inset-0 z-0 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color="#2C5F7C"
        maxOpacity={0.1}
        flickerChance={0.05}
        height={800}
        width={800}
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Ledarskap för{" "}
            <span className="bg-gradient-to-r from-[#2C5F7C] via-[#D4A574] to-[#2C5F7C] bg-clip-text text-transparent">
              lönsam tillväxt
            </span>
            <br />
            och transformation
          </h1>
        </BlurFade>

        <BlurFade delay={0.6}>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Med 30+ års erfarenhet från ledande roller i retail och FMCG hjälper jag företag och styrelser 
            navigera genom digitalisering, kulturförflyttning och internationalisering.
          </p>
        </BlurFade>

        <BlurFade delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <ShimmerButton
              className="text-white bg-[#2C5F7C] hover:bg-[#2C5F7C]/90 px-8 py-3 text-lg"
              shimmerColor="#D4A574"
            >
              <Link href="/kontakt" className="flex items-center gap-2">
                Boka intro-samtal
                <ArrowRight className="h-5 w-5" />
              </Link>
            </ShimmerButton>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-[#2C5F7C] text-[#2C5F7C] hover:bg-[#2C5F7C] hover:text-white px-8 py-3 text-lg"
            >
              <Link href="/forelasningar" className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Se föreläsningar
              </Link>
            </Button>
          </div>
        </BlurFade>

        <BlurFade delay={1.0}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#2C5F7C] mb-2">
                <NumberTicker value={30} />+
              </div>
              <div className="text-sm text-gray-600">års erfarenhet</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#2C5F7C] mb-2">
                <NumberTicker value={18} />
              </div>
              <div className="text-sm text-gray-600">år som VD</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#2C5F7C] mb-2">
                <NumberTicker value={4} />
              </div>
              <div className="text-sm text-gray-600">turnarounds</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#2C5F7C] mb-2">
                <NumberTicker value={6} />
              </div>
              <div className="text-sm text-gray-600">lönsamma tillväxtresor</div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}