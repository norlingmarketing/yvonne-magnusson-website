"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ChevronRight, Users, Target, TrendingUp, Lightbulb, Shield, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SeniorAdvisorPage() {
  const expertiseAreas = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Transformation & Tillväxt",
      description: "Strategisk vägledning för organisationsförändringar och tillväxtinitiativ baserat på 30+ års branschexpertis."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Ledarskaps- & Organisationsutveckling", 
      description: "Utveckla ledarskapskraft och bygga högpresterande team genom beprövade metoder och praktisk erfarenhet."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Strategi & Verkställighet",
      description: "Från strategi till resultat - säkerställ framgångsrik implementering av affärskritiska initiativ."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovation & Digitalisering",
      description: "Navigera den digitala transformationen och skapa innovativa affärsmodeller för framtidens utmaningar."
    }
  ];

  const valueProp = [
    {
      icon: <Shield className="h-6 w-6 text-accent" />,
      title: "Beprövad Expertis",
      description: "30+ år av framgångsrik ledarskap inom retail och FMCG, inklusive 18 år som VD."
    },
    {
      icon: <Award className="h-6 w-6 text-accent" />,
      title: "Resultatfokus",
      description: "Dokumenterad track record av framgångsrika transformationer och verksamhetsförbättringar."
    },
    {
      icon: <Users className="h-6 w-6 text-accent" />,
      title: "Praktisk Approach",
      description: "Hands-on rådgivning baserad på verklig branschexpertis och operativ erfarenhet."
    }
  ];

  const engagementTypes = [
    {
      title: "Strategisk Rådgivning",
      description: "Löpande strategisk support för VD och ledningsgrupp",
      duration: "3-12 månader",
      format: "Månatliga workshops och ad-hoc konsultationer"
    },
    {
      title: "Projektspecifik Rådgivning",
      description: "Expertis för specifika transformationsprojekt",
      duration: "1-6 månader", 
      format: "Veckovisa sessioner och milstolpsgenomgångar"
    },
    {
      title: "Board Advisory",
      description: "Rådgivning till styrelse och styrelseordförande",
      duration: "6-24 månader",
      format: "Styrelsemöten och strategisessioner"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Breadcrumbs */}
      <div className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Hem
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/tjanster" className="hover:text-primary transition-colors">
              Tjänster
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-primary font-medium">Senior Rådgivare</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Senior <span className="text-primary">Rådgivare</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Strategisk expertis och praktisk vägledning för ledningsgrupper som navigerar komplexa 
                affärsutmaningar och transformationer.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <NumberTicker value={30} />+
                </div>
                <p className="text-muted-foreground font-medium">År av Ledarskapsexpertis</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <NumberTicker value={4} />
                </div>
                <p className="text-muted-foreground font-medium">Framgångsrika Turnarounds</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <NumberTicker value={18} />
                </div>
                <p className="text-muted-foreground font-medium">År som VD</p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Expertområden
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Djup kunskap och praktisk erfarenhet inom de områden som är kritiska för 
                framgångsrik affärstransformation.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <div className="bg-muted/50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-6">{area.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--primary))] to-[#1a4a5c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Varför Välja Yvonne som Senior Rådgivare?
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Kombinationen av djup branschexpertis, praktisk erfarenhet och beprövade resultat 
                skapar unikt värde för dina affärsutmaningar.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProp.map((prop, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-background/10 rounded-2xl mb-6">
                    {prop.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{prop.title}</h3>
                  <p className="text-primary-foreground/90 leading-relaxed">{prop.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Types */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Uppdragsformat
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Flexibla rådgivningsformat anpassade efter dina specifika behov och utmaningar.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementTypes.map((type, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <div className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-foreground mb-4">{type.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{type.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Varaktighet:</span>
                      <span className="text-sm font-medium text-primary">{type.duration}</span>
                    </div>
                    <div className="flex items-start justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Format:</span>
                      <span className="text-sm font-medium text-primary text-right max-w-[60%]">{type.format}</span>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Så Arbetar Vi Tillsammans
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                En strukturerad approach som säkerställer konkreta resultat och varaktig förändring.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analys & Kartläggning",
                description: "Djupgående analys av nuläge, utmaningar och möjligheter."
              },
              {
                step: "02", 
                title: "Strategisk Planering",
                description: "Utveckling av tydlig roadmap och prioriterade insatsområden."
              },
              {
                step: "03",
                title: "Implementering",
                description: "Hands-on support och vägledning genom förändringsprocessen."
              },
              {
                step: "04",
                title: "Uppföljning",
                description: "Kontinuerlig utvärdering och justeringar för optimala resultat."
              }
            ].map((phase, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <div className="text-center relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-2xl font-bold text-xl mb-6">
                    {phase.step}
                  </div>
                  {index < 3 && (
                    <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-muted-foreground" />
                  )}
                  <h3 className="text-lg font-bold text-foreground mb-3">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{phase.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BlurFade delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Redo att Accelerera Din Transformation?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Låt oss diskutera hur min expertis kan bidra till era strategiska mål och 
              affärsresultat. Boka ett kostnadsfritt strategisamtal idag.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <ShimmerButton className="w-full sm:w-auto">
                  Boka Strategisamtal
                </ShimmerButton>
              </Link>
              <Link 
                href="/om-yvonne"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-background hover:text-foreground transition-all duration-300"
              >
                Läs Mer Om Yvonne
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
}