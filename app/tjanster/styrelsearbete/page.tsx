import type { Metadata } from "next";
import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Users, Globe, TrendingUp, Target, CheckCircle, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Styrelsearbete - Yvonne Magnusson | Transformation och Internationalisering",
  description: "Erfaren styrelseledamot med kommersiell skärpa. Specialist på transformation, internationalisering och digitalisering inom retail och FMCG.",
  keywords: "styrelseledamot, styrelseordförande, retail, FMCG, transformation, internationalisering, digitalisering",
};

const competencies = [
  {
    icon: Globe,
    title: "Internationalisering",
    description: "Djup erfarenhet av expansion till nordiska och globala marknader",
    details: [
      "Marknadsetablering i nya länder",
      "Kulturell anpassning och lokalisering", 
      "Partnerskap och joint ventures",
      "Regulatory compliance internationellt"
    ]
  },
  {
    icon: TrendingUp,
    title: "Digital Transformation",
    description: "Proven track record av digital omställning och teknisk utveckling",
    details: [
      "E-handel och omnikanal-strategier",
      "Digital infrastruktur och system",
      "Data-driven beslutsfattande",
      "Teknisk innovation och automation"
    ]
  },
  {
    icon: Target,
    title: "Strategisk Utveckling",
    description: "Långsiktig strategiutveckling med fokus på hållbar tillväxt",
    details: [
      "Affärsmodells-innovation",
      "Marknadsstrategi och positioning",
      "M&A och tillväxtinitiativ",
      "Risk- och möjlighetsanalys"
    ]
  },
  {
    icon: Users,
    title: "Kulturell Transformation",
    description: "Ledarskap i organisatorisk förändring och kulturutveckling",
    details: [
      "Change management processer",
      "Ledarskaps- och teamutveckling",
      "Kommunikation och förankring",
      "Performance management"
    ]
  }
];

const currentPositions = [
  {
    role: "Styrelseordförande",
    companies: [
      { name: "MAIA Universe", description: "Tech startup inom AI och hållbarhet" },
      { name: "Waynes Coffee Sweden AB", description: "Ledande kaffekedja i Sverige" },
      { name: "IWF", description: "International Women's Forum" }
    ]
  },
  {
    role: "Styrelseledamot", 
    companies: [
      { name: "Bio-Restore", description: "Bioteknikföretag inom miljölösningar" },
      { name: "DI Close", description: "Nätverk för kvinnliga ledare" }
    ]
  }
];

const idealSituations = [
  {
    title: "Transformationsresor",
    description: "Företag som genomgår större förändringar inom digitalisering, affärsmodell eller marknadsstrategi.",
    examples: ["Digital transformation", "Affärsmodells-innovation", "Kulturförändring"]
  },
  {
    title: "Internationell expansion", 
    description: "Bolag som planerar eller genomför etablering på nya marknader, särskilt inom Norden.",
    examples: ["Marknadsetablering", "Joint ventures", "Kulturell anpassning"]
  },
  {
    title: "Tillväxt och skalning",
    description: "Företag i tillväxtfas som behöver erfaren ledning för att hantera komplexitet och risk.",
    examples: ["Skalning av verksamhet", "Systemuppbyggnad", "Teamutveckling"]
  },
  {
    title: "Krissituationer",
    description: "Bolag som behöver erfaren krishantering och turnaround-expertis för att vända utvecklingen.",
    examples: ["Turnaround management", "Stakeholder management", "Operativ effektivisering"]
  }
];

const valueCreation = [
  {
    area: "Strategisk riktning",
    impact: "Tydlig långsiktig strategi med konkreta milstolpar och mätbara mål"
  },
  {
    area: "Risk management",
    impact: "Strukturerad riskanalys och förebyggande åtgärder baserat på praktisk erfarenhet"
  },
  {
    area: "Branschexpertis",
    impact: "Djup förståelse för retail och FMCG med nätverk och marknadskännedom"
  },
  {
    area: "Genomförandekraft",
    impact: "Praktisk erfarenhet av att omsätta strategi till handling och resultat"
  }
];

export default function BoardWorkPage() {
  return (
    <div className="min-h-screen">
      <MainNav />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.2}>
              <div className="mb-8">
                <Link 
                  href="/tjanster" 
                  className="inline-flex items-center text-[#2C5F7C] hover:text-[#2C5F7C]/80 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Tillbaka till tjänster
                </Link>
              </div>
            </BlurFade>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <BlurFade delay={0.3}>
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl mb-6">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Styrelsearbete
                  </h1>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Kommersiell skärpa och strategiskt fokus för styrelser som driver transformation, 
                    internationalisering och hållbar tillväxt inom retail och FMCG.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    <Badge variant="secondary" className="px-4 py-2 bg-blue-50 text-blue-700 border-blue-200">
                      5+ aktiva styrelseuppdrag
                    </Badge>
                    <Badge variant="secondary" className="px-4 py-2 bg-blue-50 text-blue-700 border-blue-200">
                      30+ års VD-erfarenhet
                    </Badge>
                    <Badge variant="secondary" className="px-4 py-2 bg-blue-50 text-blue-700 border-blue-200">
                      Certifierad styrelseledamot
                    </Badge>
                  </div>
                  
                  <Button asChild size="lg" className="bg-[#2C5F7C] hover:bg-[#2C5F7C]/90">
                    <Link href="/kontakt" className="flex items-center gap-2">
                      Diskutera styrelsesamarbete
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </BlurFade>
              
              <BlurFade delay={0.5}>
                <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-blue-900">Nuvarande styrelseroller</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-6">
                    {currentPositions.map((position, index) => (
                      <div key={index}>
                        <h3 className="font-semibold text-blue-800 mb-3">{position.role}:</h3>
                        <ul className="space-y-2">
                          {position.companies.map((company, companyIndex) => (
                            <li key={companyIndex} className="text-blue-700">
                              <span className="font-medium">{company.name}</span>
                              <span className="text-blue-600 text-sm block">{company.description}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* Core Competencies */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.2}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Kärnkompetenser i styrelsearbetet
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Djup expertis inom de områden som är kritiska för framgångsrik styrning av retail- och FMCG-företag.
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-2 gap-8">
              {competencies.map((competency, index) => {
                const Icon = competency.icon;
                return (
                  <BlurFade key={index} delay={0.4 + index * 0.1}>
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                            <Icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <CardTitle className="text-xl">{competency.title}</CardTitle>
                        </div>
                        <CardDescription className="text-base leading-relaxed">
                          {competency.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {competency.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                              {detail}
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

        {/* Ideal Situations */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.2}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  När mitt styrelseengagemang skapar störst värde
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Situationer där djup branschexpertis och praktisk erfarenhet gör verklig skillnad för bolagets utveckling.
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-2 gap-8">
              {idealSituations.map((situation, index) => (
                <BlurFade key={index} delay={0.4 + index * 0.1}>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-xl text-[#2C5F7C]">{situation.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {situation.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900">Exempel på fokusområden:</h4>
                        <div className="flex flex-wrap gap-2">
                          {situation.examples.map((example, exampleIndex) => (
                            <Badge 
                              key={exampleIndex}
                              variant="outline" 
                              className="text-xs border-[#2C5F7C]/30 text-[#2C5F7C]"
                            >
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Value Creation */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.2}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Värdeskapande för er organisation
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Konkret bidrag som stärker bolagets strategiska position och genomförandeförmåga.
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {valueCreation.map((value, index) => (
                <BlurFade key={index} delay={0.4 + index * 0.1}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#2C5F7C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-8 h-8 bg-[#2C5F7C] rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.area}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.impact}
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
                  Stärk er styrelse med branschexpertis
                </h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                  Låt oss diskutera hur jag kan bidra till er styrelse och stödja er strategiska utveckling.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-[#2C5F7C] hover:bg-gray-50">
                    <Link href="/kontakt" className="flex items-center gap-2">
                      Diskutera styrelseroll
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#2C5F7C]">
                    <Link href="/om-yvonne" className="flex items-center gap-2">
                      Se bakgrund & erfarenhet
                      <Users className="h-5 w-5" />
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