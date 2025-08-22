"use client";

import { NumberTicker } from "@/components/magicui/number-ticker";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Building2, TrendingUp, Target, Users } from "lucide-react";

const achievements = [
  {
    icon: Building2,
    number: 30,
    suffix: "+",
    label: "års erfarenhet",
    description: "från retail och FMCG",
  },
  {
    icon: Users,
    number: 18,
    suffix: "",
    label: "år som VD",
    description: "i lokala och internationella verksamheter",
  },
  {
    icon: TrendingUp,
    number: 4,
    suffix: "",
    label: "turnarounds",
    description: "framgångsrikt genomförda",
  },
  {
    icon: Target,
    number: 6,
    suffix: "",
    label: "företag",
    description: "med lönsam tillväxt skapad",
  },
];

const expertise = [
  "Change Management",
  "Cultural Transformation", 
  "Digital Transformation",
  "Business Modelling",
  "Internationalisering",
  "Retail Excellence",
];

export function CredentialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beprövad expertis och resultat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mer än tre decennier av ledarskap inom retail och FMCG, 
              med fokus på transformation som levererar mätbara resultat.
            </p>
          </div>
        </BlurFade>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <BlurFade key={index} delay={0.4 + index * 0.1}>
                <div className="text-center p-6 rounded-lg border border-gray-100 hover:border-[#2C5F7C]/20 hover:shadow-lg transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2C5F7C]/10 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-[#2C5F7C]" />
                  </div>
                  <div className="text-4xl font-bold text-[#2C5F7C] mb-2">
                    <NumberTicker value={achievement.number} />
                    {achievement.suffix}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {achievement.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {achievement.description}
                  </div>
                </div>
              </BlurFade>
            );
          })}
        </div>

        <BlurFade delay={0.8}>
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Kärnkompetenser
              </h3>
              <p className="text-gray-600">
                Specialiserade expertområden som driver transformation framåt
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {expertise.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-white border border-[#2C5F7C]/20 text-[#2C5F7C] hover:bg-[#2C5F7C]/5"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}