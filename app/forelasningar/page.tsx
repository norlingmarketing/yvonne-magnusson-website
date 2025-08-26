import type { Metadata } from "next";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { 
  ArrowRight, 
  Play, 
  Users, 
  Globe, 
  Clock,
  CheckCircle,
  Download,
  Calendar,
  Star
} from "lucide-react";

export const metadata: Metadata = {
  title: "Föreläsningar - Yvonne Magnusson | Keynote Speaker Transformation & Retail",
  description: "Keynote speaker inom transformation, digitalisering och internationalisering. Inspirerande föreläsningar för ledare inom retail och FMCG.",
  keywords: "keynote speaker, föreläsare, transformation, digitalisering, retail, FMCG, internationalisering, ledarskap",
};

const speakingTopics = [
  {
    id: "digital-transformation",
    title: "Transformation i den digitala eran",
    subtitle: "Beyond the Buzzwords",
    description: "Vad händer verkligen när digitaliseringen förändrar allt? En ärlig genomgång av utmaningar, möjligheter och konsekvenser som sällan diskuteras.",
    keyPoints: [
      "Digitaliseringens verkliga påverkan på organisationer",
      "Kulturell transformation - den glömda komponenten",
      "Ledarskap när allt förändras samtidigt",
      "Praktiska verktyg för att navigera förändringen"
    ],
    audience: [
      "VD:ar och ledningsgrupper",
      "Styrelser som driver digital transformation",
      "HR-chefer och förändringsagenter",
      "Retail- och FMCG-ledare"
    ],
    duration: "30-60 minuter + Q&A",
    format: ["Keynote", "Workshop", "Paneldiskussion"],
    videoThumbnail: "/api/placeholder/600/400",
    testimonial: {
      quote: "Yvonnes föreläsning om digital transformation gav oss verktyg vi fortfarande använder två år senare.",
      author: "CEO, Fashion Retail Group",
      company: "Nordisk retailkedja"
    }
  },
  {
    id: "internationalization",
    title: "Internationalisering",
    subtitle: "From Nordic Success to Global Growth", 
    description: "Strategier, fallgropar och framgångsfaktorer för expansion på nya marknader. Baserat på praktisk erfarenhet av att bygga verksamhet i 8+ länder.",
    keyPoints: [
      "Marknadsetablering - vad som verkligen fungerar",
      "Kulturell anpassning utan att förlora identitet",
      "Partnerskap vs egen etablering",
      "Att bygga internationella team och ledarskap"
    ],
    audience: [
      "Tillväxtföretag med expansionsplaner",
      "Internationella koncerner",
      "Investare och private equity",
      "Export- och handelsorganisationer"
    ],
    duration: "45-60 minuter + Q&A",
    format: ["Keynote", "Masterclass", "Executive briefing"],
    videoThumbnail: "/api/placeholder/600/400",
    testimonial: {
      quote: "Konkret och actionable insights från någon som verkligen har gjort det själv.",
      author: "COO, Tech Scale-up",
      company: "B2C-företag"
    }
  },
  {
    id: "retail-experience",
    title: "Retail in the Age of Experience",
    subtitle: "From Transaction to Transformation",
    description: "Hur skapar man lojalitet och relevans när konsumenten har oändliga val? Om att bygga relationer i en transaktionsdriven värld.",
    keyPoints: [
      "Från produkt till upplevelse - praktiska exempel",
      "Omnichannel som verkligen fungerar",
      "Data-driven personalisering utan att tappa human touch",
      "Byggande av community och brand loyalty"
    ],
    audience: [
      "Retail-ledare och store managers",
      "E-handelschefer och digital teams",
      "Brand managers och marknadsförare",
      "Consumer goods companies"
    ],
    duration: "30-90 minuter (flexibelt)",
    format: ["Keynote", "Interactive session", "Case study workshop"],
    videoThumbnail: "/api/placeholder/600/400",
    testimonial: {
      quote: "Äntligen någon som förstår både den digitala och fysiska retailupplevelsen.",
      author: "CMO, Lifestyle Brand",
      company: "Omnichannel retailer"
    }
  }
];

const speakingFormats = [
  {
    format: "Keynote",
    duration: "30-60 minuter",
    description: "Inspirerande huvudtal som sätter ton för eventet",
    pricing: "Enligt offert",
    includes: ["Förarbete med eventteam", "Skräddarsytt innehåll", "Q&A-session", "Uppföljning"]
  },
  {
    format: "Workshop/Masterclass",
    duration: "2-4 timmar",
    description: "Interaktiva sessions med konkreta verktyg och övningar",
    pricing: "Enligt offert",
    includes: ["Materialpaket", "Gruppövningar", "Handlingsplan", "30-dagars email-support"]
  },
  {
    format: "Executive Briefing",
    duration: "90 minuter",
    description: "Djupgående sessions för ledningsgrupper och styrelser",
    pricing: "Enligt offert",
    includes: ["Konfidentiell diskussion", "Branschspecifik analys", "Strategic insights", "Follow-up call"]
  }
];

const pastEvents = [
  {
    event: "Retail Tech Summit 2024",
    location: "Stockholm",
    audience: "300+ retail executives",
    topic: "Digital Transformation in Retail"
  },
  {
    event: "Fashion Industry Summit 2025",
    location: "Copenhagen",
    audience: "200+ fashion leaders",
    topic: "Sustainable Growth Through Innovation"
  },
  {
    event: "FMCG Leaders Forum",
    location: "Helsinki",
    audience: "150+ FMCG executives",
    topic: "Market Expansion Strategies"
  }
];

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
                      <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                        <p className="text-white">Video player would be embedded here</p>
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

            <div className="space-y-12">
              {speakingTopics.map((topic, index) => (
                <BlurFade key={index} delay={0.3 + index * 0.1}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="grid lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <CardTitle className="text-2xl text-foreground mb-2">
                                {topic.title}
                              </CardTitle>
                              <p className="text-lg text-accent font-medium">
                                {topic.subtitle}
                              </p>
                            </div>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm" variant="outline" className="flex items-center gap-2">
                                  <Play className="h-4 w-4" />
                                  Preview
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl">
                                <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                                  <p className="text-white">Video preview for {topic.title}</p>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                          <CardDescription className="text-base leading-relaxed mb-6">
                            {topic.description}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Huvudpunkter:</h4>
                            <ul className="space-y-2">
                              {topic.keyPoints.map((point, pointIndex) => (
                                <li key={pointIndex} className="flex items-start text-sm text-muted-foreground">
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Målgrupp:</h4>
                            <div className="flex flex-wrap gap-2">
                              {topic.audience.map((aud, audIndex) => (
                                <Badge 
                                  key={audIndex}
                                  variant="outline" 
                                  className="text-xs border-border text-muted-foreground"
                                >
                                  {aud}
                                </Badge>
                              ))}
                            </div>
                            
                            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-primary" />
                                {topic.duration}
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-primary" />
                                {topic.format.join(", ")}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                      
                      <div className="bg-muted/50 p-6 flex flex-col justify-center">
                        <div className="bg-background rounded-lg p-4 border border-border">
                          <blockquote className="text-sm text-muted-foreground italic mb-3">
                            &ldquo;{topic.testimonial.quote}&rdquo;
                          </blockquote>
                          <div className="text-xs">
                            <div className="font-medium text-foreground">{topic.testimonial.author}</div>
                            <div className="text-muted-foreground">{topic.testimonial.company}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Speaking Formats */}
        <section className="py-20 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.2}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Format och upplägg
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Flexibla format som anpassas efter er målgrupp, tidsram och mål med evenemanget.
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-3 gap-8">
              {speakingFormats.map((format, index) => (
                <BlurFade key={index} delay={0.4 + index * 0.1}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">{format.format}</CardTitle>
                      <CardDescription>
                        <span className="font-medium">{format.duration}</span>
                        <br />
                        {format.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="text-lg font-semibold text-foreground">
                          {format.pricing}
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-foreground mb-2">Inkluderat:</h4>
                          <ul className="space-y-1">
                            {format.includes.map((include, includeIndex) => (
                              <li key={includeIndex} className="flex items-center text-sm text-muted-foreground">
                                <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                                {include}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.2}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Senaste uppdrag
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Ett urval av events där jag delat insights om transformation och ledarskap.
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <BlurFade key={index} delay={0.4 + index * 0.1}>
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{event.event}</CardTitle>
                      <CardDescription>
                        <div className="flex items-center justify-center gap-1 mb-2">
                          <Globe className="h-4 w-4" />
                          {event.location}
                        </div>
                        <div className="flex items-center justify-center gap-1 mb-2">
                          <Users className="h-4 w-4" />
                          {event.audience}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-medium text-primary">
                        {event.topic}
                      </p>
                    </CardContent>
                  </Card>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.2}>
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Skapa en minnesvärd upplevelse för er målgrupp
                </h2>
                <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
                  Låt oss diskutera hur vi kan skräddarsy innehåll och format 
                  för att maximera värdet för era deltagare.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                    <Link href="/kontakt" className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Boka föreläsning
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    <a href="/downloads/yvonne-magnusson-speaker-kit.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Download className="h-5 w-5" />
                      Ladda ner Speaker Kit
                    </a>
                  </Button>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-primary-foreground/80 mb-2">Eller ring direkt:</p>
                  <a href="tel:+46739853260" className="text-2xl font-semibold hover:underline">
                    +46 73 985 32 60
                  </a>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>
    </main>
  );
}