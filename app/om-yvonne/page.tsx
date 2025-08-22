import type { Metadata } from "next";
import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { BlurFade } from "@/components/magicui/blur-fade";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download, Briefcase, GraduationCap, Globe, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Om Yvonne Magnusson - Transformation Leadership Expert",
  description: "30+ års erfarenhet från ledande roller inom retail och FMCG. 18 år som VD med genomförda turnarounds och internationell expansion.",
  keywords: "Yvonne Magnusson, transformation leader, retail expert, VD, styrelseledamot, FMCG",
};

const timelineData = [
  {
    year: "2023-2024",
    title: "VD",
    company: "Indiska 1901 AB",
    description: "Ledde omstart efter konkurs och skapade fundamental stabilitet för framtida tillväxt.",
    achievements: [
      "Ny omnikanal-affärsmodell definierad",
      "Halverade förlust första verksamhetsåret",
      "Öppnade två nya butiker (Väla och Frölunda Torg)",
      "Implementerade ERP-system (BC) och Power BI"
    ]
  },
  {
    year: "2020-2023",
    title: "Interim VD",
    company: "Insulas verksamheter i Sverige (Marenor och Fiskeriet)",
    description: "Genomförde stort turnaround-program för 2 miljarder SEK-verksamhet.",
    achievements: [
      "Marenor AB uppvisade +7,2 MSEK EBIT 2021",
      "Förbättring från -40 MSEK till positivt resultat",
      "Avveckling och optimering av produktionsenheter",
      "Implementering av gemensam affärs- och driftsmodell"
    ]
  },
  {
    year: "2018-2020", 
    title: "Interim VD",
    company: "Departments & Stores Europe AB (del av RnB)",
    description: "Stabiliserade kärnverksamheten och vände e-handelssatsningen till lönsamhet.",
    achievements: [
      "DSE AB redovisade +15 MSEK EBIT december 2019",
      "Manofakind.se turnaround från -15 MSEK till break-even",
      "Framgångsrika hyres- och leverantörsförhandlingar",
      "Omorganisation med 3,5 MSEK årlig besparing"
    ]
  },
  {
    year: "2017-2018",
    title: "Managing Director",
    company: "BTT Sverige/Kesko (K Rauta AB och Onninen AB)",
    description: "Utvecklade affärsmodell för 4 miljarder SEK verksamhet och 1300 anställda.",
    achievements: [
      "Konsolidering av grossist- och detaljhandelsmodellen",
      "Lansering av e-handelsplattform för Onninen AB",
      "Bidrag till M&A-aktiviteter svenska marknaden"
    ]
  },
  {
    year: "2011-2016",
    title: "VD", 
    company: "Cervera AB",
    description: "Genomförde turnaround från -30 MSEK förlust till över +17 MSEK resultat på 4 år.",
    achievements: [
      "Förändring från frivillig fackhandel till helintegrerad detaljhandel",
      "Lanserade e-handel och omnikanal-lösningar",
      "Centrallager, distribution och centrala leverantörsförhandlingar",
      "Framgångsrik exit till Accent Private Equity"
    ]
  },
  {
    year: "2007-2011",
    title: "Managing Director",
    company: "Villeroy&Boch Tableware Nordic & Baltics",
    description: "Ledde transformation från decentraliserad till centraliserad modell över 8 länder.",
    achievements: [
      "Försäljningen ökade med 40%",
      "200% resultatförbättring genom kostnadsbesparingar",
      "Fokus på egna butiker och e-handel som distributionskanaler"
    ]
  }
];

const currentRoles = [
  {
    icon: Users,
    title: "Styrelseordförande",
    companies: ["MAIA Universe", "Waynes Coffee Sweden AB", "IWF"],
  },
  {
    icon: Briefcase,
    title: "Styrelseledamot",
    companies: ["Bio-Restore", "DI Close"],
  },
  {
    icon: Globe,
    title: "Senior Advisor",
    companies: ["IAMRUNBOX"],
  }
];

const expertise = [
  "Change Management",
  "Cultural Transformation", 
  "Digital Transformation",
  "Business Modelling",
  "Internationalisering",
  "Turnaround Management",
  "Retail Excellence",
  "Omnichannel Strategy",
  "M&A Integration",
  "Team Leadership"
];

const languages = [
  { lang: "Svenska", level: "Modersmål" },
  { lang: "Engelska", level: "Flytande" },
  { lang: "Tyska", level: "Goda kunskaper" }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <MainNav />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <BlurFade delay={0.2}>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Om Yvonne Magnusson
                  </h1>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    En ledare med djup erfarenhet av transformation inom retail och FMCG. 
                    Specialist på att skapa lönsam tillväxt genom strategisk förändring, 
                    kulturell utveckling och internationell expansion.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2">
                      <NumberTicker value={30} className="text-2xl font-bold text-[#2C5F7C]" />
                      <span className="text-2xl font-bold text-[#2C5F7C]">+</span>
                      <span className="text-gray-600">års erfarenhet</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <NumberTicker value={18} className="text-2xl font-bold text-[#2C5F7C]" />
                      <span className="text-gray-600">år som VD</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <NumberTicker value={4} className="text-2xl font-bold text-[#2C5F7C]" />
                      <span className="text-gray-600">turnarounds</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="bg-[#2C5F7C] hover:bg-[#2C5F7C]/90">
                      <Link href="/kontakt" className="flex items-center gap-2">
                        Diskutera samarbete
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="border-[#2C5F7C] text-[#2C5F7C] hover:bg-[#2C5F7C] hover:text-white">
                      <Download className="h-5 w-5 mr-2" />
                      Ladda ner CV
                    </Button>
                  </div>
                </div>
              </BlurFade>
              
              <BlurFade delay={0.4}>
                <div className="relative">
                  <div className="aspect-[4/5] bg-gradient-to-br from-[#2C5F7C]/10 to-[#D4A574]/10 rounded-2xl"></div>
                  <div className="absolute inset-4 bg-white rounded-xl shadow-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-[#2C5F7C]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="h-12 w-12 text-[#2C5F7C]" />
                      </div>
                      <p className="text-gray-600 italic">
                        &ldquo;Transformation genom ledarskap&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* Current Roles */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.2}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Nuvarande roller
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Aktiv inom styrelser och rådgivning för att driva strategisk utveckling
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-3 gap-8">
              {currentRoles.map((role, index) => {
                const Icon = role.icon;
                return (
                  <BlurFade key={index} delay={0.4 + index * 0.1}>
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2C5F7C]/10 rounded-full mb-4">
                          <Icon className="h-8 w-8 text-[#2C5F7C]" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{role.title}</h3>
                        <ul className="space-y-2">
                          {role.companies.map((company, companyIndex) => (
                            <li key={companyIndex} className="text-gray-600">
                              {company}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </section>

        {/* Career Timeline */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.2}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Karriärresa
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  En översikt över nyckelroller och framgångar genom åren
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.4}>
              <Timeline items={timelineData} />
            </BlurFade>
          </div>
        </section>

        {/* Expertise & Education */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <BlurFade delay={0.2}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Expertområden
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {expertise.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="px-4 py-2 text-sm bg-[#2C5F7C]/10 border border-[#2C5F7C]/20 text-[#2C5F7C] hover:bg-[#2C5F7C]/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </BlurFade>

              <BlurFade delay={0.4}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Utbildning & Språk
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-[#2C5F7C]" />
                        Utbildning
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Civilekonom, Mittuniversitetet, Sverige</li>
                        <li>Internationella studier, Julius-Maximilians-Universität, Tyskland</li>
                        <li>Masterstudier, University of Warwick</li>
                        <li>Styrelsecertifiering &ldquo;Rätt fokus i styrelsearbetet&rdquo;, Styrelseakademien</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Globe className="h-5 w-5 text-[#2C5F7C]" />
                        Språk
                      </h3>
                      <div className="space-y-2">
                        {languages.map((lang, index) => (
                          <div key={index} className="flex justify-between">
                            <span className="text-gray-900">{lang.lang}</span>
                            <span className="text-gray-600">{lang.level}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#2C5F7C] to-[#1e4a5f] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.2}>
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Redo att diskutera ert nästa steg?
                </h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                  Låt oss utforska hur min erfarenhet kan bidra till er transformation och tillväxt.
                </p>
                <Button asChild size="lg" className="bg-white text-[#2C5F7C] hover:bg-gray-50">
                  <Link href="/kontakt" className="flex items-center gap-2">
                    Boka introduktionssamtal
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}