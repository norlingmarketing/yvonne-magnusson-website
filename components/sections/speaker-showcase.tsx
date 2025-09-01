"use client";

import Image from "next/image";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { LocalizedLink } from "@/components/localized-link";
import { Award, Globe, Mic, Users } from "lucide-react";
import { type Locale } from "@/lib/routes";
import { Dictionary } from "@/lib/types/dictionary";

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

interface SpeakerShowcaseProps {
  locale: string;
  dict: Dictionary;
}

export function SpeakerShowcase({ locale, dict }: SpeakerShowcaseProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/50 via-background to-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Inspirerande föreläsare & paneldeltagare
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                priority={false}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-primary-foreground">
                      <highlight.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{highlight.title}</h3>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              ))}
              
              <div className="pt-6">
                <Button asChild size="lg">
                  <LocalizedLink route="speaking" locale={locale as Locale} className="px-6 py-2">
                    Se föreläsningsämnen
                  </LocalizedLink>
                </Button>
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Recent Speaking Engagements */}
        <BlurFade delay={0.8}>
          <div className="bg-background rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Senaste föreläsningar & paneler</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l-4 border-primary pl-4">
                <p className="font-semibold text-foreground">Leaders of Trade</p>
                <p className="text-sm text-muted-foreground">Copenhagen, September 2025</p>
                <p className="text-xs text-muted-foreground mt-1">Business Transformation</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <p className="font-semibold text-foreground">Fashion Industry Summit</p>
                <p className="text-sm text-muted-foreground">Stockholm, 2025</p>
                <p className="text-xs text-muted-foreground mt-1">Panel: Future of Retail</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="font-semibold text-foreground">Retail Tech Conference</p>
                <p className="text-sm text-muted-foreground">Nordic Region, 2024</p>
                <p className="text-xs text-muted-foreground mt-1">Digital Transformation</p>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}