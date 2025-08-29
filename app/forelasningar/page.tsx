import type { Metadata } from "next";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { SpeakingTopics } from "@/components/page-components/speaking-topics";
import { speakingTopics } from "@/lib/data/speaking-topics";
import Link from "next/link";
import { 
  ArrowRight, 
  Play, 
  Download,
  Calendar,
  Star
} from "lucide-react";

export const metadata: Metadata = {
  title: "Föreläsningar - Yvonne Magnusson | Keynote Speaker Transformation & Retail",
  description: "Keynote speaker inom transformation, digitalisering och internationalisering. Inspirerande föreläsningar för ledare inom retail och FMCG.",
  keywords: "keynote speaker, föreläsare, transformation, digitalisering, retail, FMCG, internationalisering, ledarskap",
};

export default function SpeakingPage() {
  return (
    <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <BlurFade delay={0.2}>
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                    <Star className="h-4 w-4 text-primary" />
                    <span className="text-primary font-medium">Keynote Speaker</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Föreläsningar som inspirerar till handling
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Praktiska insights från 30+ års ledarskap inom transformation, internationalisering 
                    och retail excellence. Föreläsningar som ger verktyg, inte bara inspiration.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
                      Svenska, Engelska, Tyska
                    </Badge>
                    <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
                      30-240 minuter
                    </Badge>
                    <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
                      Live & Digital
                    </Badge>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                      <Link href="/kontakt" className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Boka föreläsning
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <a href="/downloads/yvonne-magnusson-speaker-kit.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Download className="h-5 w-5 mr-2" />
                        Speaker Kit
                      </a>
                    </Button>
                  </div>
                </div>
              </BlurFade>
              
              <BlurFade delay={0.4}>
                <div className="relative">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="relative cursor-pointer group">
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
                          <div className="w-full h-full flex items-center justify-center bg-foreground/50 hover:bg-foreground/40 transition-colors">
                            <div className="w-20 h-20 bg-background/90 rounded-full flex items-center justify-center group-hover:bg-background group-hover:scale-110 transition-all">
                              <Play className="h-10 w-10 text-primary ml-1" />
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-background/95 backdrop-blur-sm rounded-lg p-4">
                            <h3 className="font-semibold text-foreground">Transformation i den digitala eran</h3>
                            <p className="text-sm text-muted-foreground mt-1">Fashion Industry Summit 2025 - 3 min preview</p>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <Play className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                          <p className="text-muted-foreground">Videomaterial kommer snart</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* Speaking Topics */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.2}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Föreläsningsteman
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Tre huvudteman som kan anpassas och kombineras baserat på er målgrupp och era utmaningar.
                </p>
              </div>
            </BlurFade>

            <SpeakingTopics topics={speakingTopics} />
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <BlurFade delay={0.1}>
              <Star className="h-16 w-16 text-accent mx-auto mb-8" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Redo att inspirera ert team?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
                Kontakta mig för en diskussion om hur mina föreläsningar kan bidra till er organisations utveckling.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/kontakt">
                    <Calendar className="h-5 w-5 mr-2" />
                    Boka kostnadsfritt samtal
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <a href="/downloads/yvonne-magnusson-speaker-kit.pdf" download>
                    <Download className="h-5 w-5 mr-2" />
                    Ladda ner Speaker Kit
                  </a>
                </Button>
              </div>
            </BlurFade>
          </div>
        </section>
    </main>
  );
}