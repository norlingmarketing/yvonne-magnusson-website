"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Building2, Users2, Award, TrendingUp } from "lucide-react";

const clientLogos = [
  { name: "ICA", category: "Retail" },
  { name: "Coop", category: "Retail" },
  { name: "Hemköp", category: "Retail" },
  { name: "Axfood", category: "FMCG" },
  { name: "Orkla", category: "FMCG" },
  { name: "Unilever", category: "FMCG" },
  { name: "H&M", category: "Retail" },
  { name: "KappAhl", category: "Retail" }
];

const achievements = [
  {
    icon: Building2,
    title: "Styrelser",
    description: "Ledamot i flera börsnoterade företag",
    count: "8+"
  },
  {
    icon: TrendingUp,
    title: "Tillväxtresor",
    description: "Framgångsrika transformationer genomförda",
    count: "25+"
  },
  {
    icon: Users2,
    title: "Medarbetare",
    description: "Personer ledda genom förändringsresor",
    count: "5000+"
  },
  {
    icon: Award,
    title: "Utmärkelser",
    description: "Branschutmärkelser för ledarskap",
    count: "12"
  }
];

export function LogoCloudSection() {
  return (
    <section className="py-16 bg-white/50 backdrop-blur-sm border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <BlurFade delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Förtroendet från ledande företag
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Genom åren har jag haft förmånen att arbeta med och leda transformation i några av Sveriges mest erkända företag
            </p>
          </div>
        </BlurFade>

        {/* Client Logos */}
        <BlurFade delay={0.4}>
          <div className="mb-16">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {clientLogos.map((client) => (
                <div 
                  key={client.name}
                  className="group relative"
                >
                  <div className="flex flex-col items-center space-y-2 p-4 rounded-lg transition-all duration-300 hover:bg-white/80 hover:shadow-lg">
                    <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-600 font-semibold text-sm group-hover:text-[#2C5F7C] transition-colors">
                      {client.name}
                    </div>
                    <span className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors">
                      {client.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Achievements Grid */}
        <BlurFade delay={0.6}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {achievements.map((achievement) => (
              <div 
                key={achievement.title}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#2C5F7C] to-[#D4A574] rounded-2xl mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="h-8 w-8" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-[#2C5F7C] mb-2">
                  {achievement.count}
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  {achievement.title}
                </div>
                <div className="text-xs text-gray-600 leading-relaxed">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </BlurFade>

        {/* CTA */}
        <BlurFade delay={0.8}>
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Vill du veta mer om hur dessa erfarenheter kan hjälpa ditt företag?
            </p>
            <ShimmerButton
              className="text-white bg-[#2C5F7C] hover:bg-[#2C5F7C]/90"
              shimmerColor="#D4A574"
            >
              <a href="/kontakt" className="px-6 py-2">
                Låt oss diskutera dina utmaningar
              </a>
            </ShimmerButton>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}