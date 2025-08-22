"use client";

import Link from "next/link";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#2C5F7C] to-[#1e4a5f] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Redo att accelerera er transformation?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Låt oss diskutera hur min expertis kan hjälpa er navigera genom förändring 
              och skapa hållbar tillväxt.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <ShimmerButton
              className="bg-white text-[#2C5F7C] hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
              shimmerColor="#D4A574"
            >
              <Link href="/kontakt" className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Boka intro-samtal
              </Link>
            </ShimmerButton>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#2C5F7C] px-8 py-4 text-lg font-semibold bg-transparent"
            >
              <Link href="/forelasningar" className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Diskutera föreläsning
              </Link>
            </Button>
          </div>
        </BlurFade>

        <BlurFade delay={0.6}>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">15 min</div>
              <div className="text-blue-100">Kostnadsfritt intro-samtal</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">24h</div>
              <div className="text-blue-100">Svar på förfrågningar</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">30+</div>
              <div className="text-blue-100">År av beprövad expertis</div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}