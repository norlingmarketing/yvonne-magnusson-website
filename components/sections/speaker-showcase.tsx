"use client";

import Image from "next/image";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Link from "next/link";
import { Award, Globe, Mic, Users } from "lucide-react";

const speakingHighlights = [
  {
    icon: Mic,
    title: "Keynote Speaker",
    description: "Leaders of Trade Copenhagen 2025"
  },
  {
    icon: Users,
    title: "Panel Discussions",
    description: "Fashion Industry Summit & Retail Tech"
  },
  {
    icon: Globe,
    title: "International Events",
    description: "Speaking across Nordics & Europe"
  },
  {
    icon: Award,
    title: "Expert Commentary",
    description: "DI Close & Industry Forums"
  }
];

export function SpeakerShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Inspirerande föreläsare & paneldeltagare
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Med passion för transformation och förändringsledning delar jag insikter från 30+ års erfarenhet
            </p>
          </div>
        </BlurFade>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Speaking Photo */}
          <BlurFade delay={0.4}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/yvonne-panel.jpg"
                alt="Yvonne Magnusson speaking at panel discussion"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm font-semibold mb-1">Panel Discussion</p>
                <p className="text-lg font-bold">Fashion Industry Summit</p>
              </div>
            </div>
          </BlurFade>

          {/* Speaking Highlights */}
          <BlurFade delay={0.6}>
            <div className="space-y-6">
              {speakingHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2C5F7C] to-[#D4A574] rounded-xl flex items-center justify-center text-white">
                      <highlight.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              ))}
              
              <div className="pt-6">
                <ShimmerButton
                  className="text-white bg-[#2C5F7C] hover:bg-[#2C5F7C]/90"
                  shimmerColor="#D4A574"
                >
                  <Link href="/forelasningar" className="px-6 py-2">
                    Se föreläsningsämnen
                  </Link>
                </ShimmerButton>
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Recent Speaking Engagements */}
        <BlurFade delay={0.8}>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Senaste föreläsningar & paneler</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l-4 border-[#2C5F7C] pl-4">
                <p className="font-semibold text-gray-900">Leaders of Trade</p>
                <p className="text-sm text-gray-600">Copenhagen, September 2025</p>
                <p className="text-xs text-gray-500 mt-1">Business Transformation</p>
              </div>
              <div className="border-l-4 border-[#D4A574] pl-4">
                <p className="font-semibold text-gray-900">Fashion Industry Summit</p>
                <p className="text-sm text-gray-600">Stockholm, 2025</p>
                <p className="text-xs text-gray-500 mt-1">Panel: Future of Retail</p>
              </div>
              <div className="border-l-4 border-[#2C5F7C] pl-4">
                <p className="font-semibold text-gray-900">Retail Tech Conference</p>
                <p className="text-sm text-gray-600">Nordic Region, 2024</p>
                <p className="text-xs text-gray-500 mt-1">Digital Transformation</p>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}