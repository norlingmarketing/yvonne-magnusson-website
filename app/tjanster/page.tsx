import type { Metadata } from "next";
import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Users, Briefcase, TrendingUp, Presentation, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Tjänster - Yvonne Magnusson | Styrelsearbete, Advisory, Interim & Workshops",
  description: "Professionella tjänster inom transformation: Styrelsearbete, Senior Advisory, Interimledare och Workshops. 30+ års erfarenhet från retail och FMCG.",
  keywords: "styrelseledamot, interim VD, senior advisor, workshops, transformation, retail, FMCG",
};

const services = [
  {
    id: "styrelsearbete",
    icon: Users,
    title: "Styrelsearbete",
    description: "Kommersiell skärpa och strategiskt fokus för styrelser i transformationsresor och internationalisering.",
    features: [
      "Internationalisering och digitalisering",
      "Kulturell transformation",
      "Strategisk riktning och uppsikt",
      "Risk- och möjlighetsanalys",
      "M&A-processer och integration"
    ],
    idealFor: [
      "Retail- och FMCG-företag",
      "Företag i transformationsfas", 
      "Internationell expansion",
      "Digital omställning"
    ],
    approach: "Löpande styrelsearbete med djup branschkunskap och fokus på långsiktig värdeskapning.",
    investment: "Enligt styrelsearvodering och tidsåtgång",
    color: "from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
    href: "/tjanster/styrelsearbete"
  },
  {
    id: "senior-advisor",
    icon: Briefcase,
    title: "Senior Advisor",
    description: "Löpande rådgivning för ledningsgrupper och ägare inom retail och consumer markets.",
    features: [
      "2-3 dagar/månad engagement",
      "Strategisk sparring och vägledning",
      "Retail & Consumer expertis",
      "Nätverk och branschkontakter",
      "Implementeringsstöd"
    ],
    idealFor: [
      "Tillväxtföretag inom retail",
      "Ledningsgrupper som behöver branschexpertis",
      "Företag med expansionsplaner",
      "Ägare som söker strategisk rådgivning"
    ],
    approach: "Månatligt engagement med regelbunden kontakt och strategiska genomgångar.",
    investment: "Fast månadsarvode baserat på omfattning",
    color: "from-emerald-50 to-emerald-100",
    iconColor: "text-emerald-600",
    href: "/tjanster/senior-advisor"
  },
  {
    id: "interim-ledare",
    icon: TrendingUp,
    title: "Interimledare",
    description: "VD/CCO roller vid behov av förändring, turnaround eller tillväxtresa med fokus på snabba resultat.",
    features: [
      "Snabb analys och mobilisering",
      "Fokus på KPI-leverans",
      "Erfaren turnaround-specialist",
      "Team-motivering och utveckling",
      "Strukturerad överlämning"
    ],
    idealFor: [
      "Företag i kris eller turnaround",
      "Tillväxtföretag som behöver erfaren ledning",
      "Ägarbyten eller övergångssituationer",
      "Företag med operativa utmaningar"
    ],
    approach: "3-18 månaders uppdrag med tydliga mål och löpande uppföljning.",
    investment: "Månadsarvode + prestationsbaserad bonus",
    color: "from-purple-50 to-purple-100",
    iconColor: "text-purple-600",
    href: "/tjanster/interim-ledare"
  },
  {
    id: "workshops",
    icon: Presentation,
    title: "Workshops",
    description: "Skräddarsydda workshops för strategisk utveckling och transformation med konkreta utfall.",
    features: [
      "Retail Experience Sprint",
      "International Readiness Assessment", 
      "Business Model Innovation",
      "Digital Transformation Roadmap",
      "Konkret handlingsplan"
    ],
    idealFor: [
      "Ledningsgrupper som behöver strategisk klarhet",
      "Företag som planerar expansion",
      "Team som ska genomföra transformation",
      "Styrelser som behöver djupare förståelse"
    ],
    approach: "1-2 dagars intensiva workshops med förarbete och uppföljning.",
    investment: "Fast pris per workshop inkl. material och uppföljning",
    color: "from-amber-50 to-amber-100",
    iconColor: "text-amber-600",
    href: "/tjanster/workshops"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Första samtalet",
    description: "Kostnadsfritt 15-30 minuters samtal för att förstå era behov och utmaningar."
  },
  {
    step: "02", 
    title: "Behovsanalys",
    description: "Djupare genomgång av situation, mål och förutsättningar för att skräddarsy lösningen."
  },
  {
    step: "03",
    title: "Förslag & planering",
    description: "Konkret förslag på upplägg, tidsplan och investering baserat på era specifika behov."
  },
  {
    step: "04",
    title: "Genomförande",
    description: "Strukturerat genomförande med löpande kommunikation och anpassning efter behov."
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <MainNav />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.2}>
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Professionella tjänster
                </h1>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                  Fyra fokuserade tjänsteområden för att driva transformation och tillväxt inom retail 
                  och consumer markets. Alla byggda på 30+ års erfarenhet och beprövade metoder.
                </p>
                
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge variant="secondary" className="px-4 py-2 text-sm bg-[#2C5F7C]/10 border border-[#2C5F7C]/20 text-[#2C5F7C]">
                    30+ års erfarenhet
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm bg-[#2C5F7C]/10 border border-[#2C5F7C]/20 text-[#2C5F7C]">
                    4 genomförda turnarounds
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm bg-[#2C5F7C]/10 border border-[#2C5F7C]/20 text-[#2C5F7C]">
                    Internationell erfarenhet
                  </Badge>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <BlurFade key={index} delay={0.2 + index * 0.1}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                      <CardHeader className="pb-4">
                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`h-8 w-8 ${service.iconColor}`} />
                        </div>
                        <CardTitle className="text-2xl text-gray-900 group-hover:text-[#2C5F7C] transition-colors">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-lg leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Vad som ingår:</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Idealiskt för:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.idealFor.map((item, itemIndex) => (
                              <Badge 
                                key={itemIndex}
                                variant="outline" 
                                className="text-xs border-gray-300 text-gray-600"
                              >
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t border-gray-100">
                          <div className="flex justify-between items-center">
                            <div className="text-sm text-gray-500">
                              {service.investment}
                            </div>
                            <Button 
                              asChild 
                              className="bg-[#2C5F7C] hover:bg-[#2C5F7C]/90 group-hover:bg-[#2C5F7C] group-hover:text-white"
                            >
                              <Link href={service.href} className="flex items-center gap-2">
                                Läs mer
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.2}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Så arbetar vi tillsammans
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  En strukturerad process som säkerställer att vi skapar maximal värde för er organisation.
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <BlurFade key={index} delay={0.4 + index * 0.1}>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2C5F7C] text-white rounded-full text-xl font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#2C5F7C] to-[#1e4a5f] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.2}>
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Vilken tjänst passar er bäst?
                </h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                  Låt oss diskutera era utmaningar och hitta den mest lämpliga lösningen 
                  för er transformation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-[#2C5F7C] hover:bg-gray-50">
                    <Link href="/kontakt" className="flex items-center gap-2">
                      Boka kostnadsfritt samtal
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#2C5F7C]">
                    <Link href="/forelasningar" className="flex items-center gap-2">
                      Se föreläsningar
                      <Presentation className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}