"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ChevronRight, Clock, Target, Users, TrendingUp, CheckCircle, AlertTriangle, Zap, Award, Shield } from "lucide-react";
import Link from "next/link";

export default function InterimExecutivePage() {
  const situations = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-accent" />,
      title: "Akut Ledarskap",
      description: "Snabb insats när VD eller ledningsgrupp behöver ersättas omedelbart",
      urgency: "Omedelbart"
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Transformation",
      description: "Genomföra omfattande organisationsförändringar eller turnarounds", 
      urgency: "3-18 månader"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Tillväxtfaser",
      description: "Leda organisationen genom snabb expansion eller nya marknader",
      urgency: "6-24 månader"
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Kritiska Projekt",
      description: "Säkerställa framgång för affärskritiska initiativ och implementeringar",
      urgency: "3-12 månader"
    }
  ];

  const capabilities = [
    {
      title: "Omedelbar Handlingskraft",
      description: "Träder in dag 1 med full operativ kapacitet och börjar leverera resultat direkt"
    },
    {
      title: "Förändringsledarskap", 
      description: "Beprövad track record av att genomföra komplexa transformationer framgångsrikt"
    },
    {
      title: "Krishantering",
      description: "Erfaren av att navigera utmanande situationer och vända negativa trender"
    },
    {
      title: "Teambyggande",
      description: "Snabbt identifiera och utveckla nyckeltalanger samt bygga högpresterande team"
    },
    {
      title: "Stakeholder Management", 
      description: "Hantera komplexa relationer med styrelse, investerare, kunder och leverantörer"
    },
    {
      title: "Resultatfokus",
      description: "Leverera mätbara förbättringar inom definierade tidsramar och budgetar"
    }
  ];

  const deliverables = [
    {
      phase: "Första 30 Dagarna",
      icon: <Target className="h-6 w-6 text-primary" />,
      items: [
        "Djupgående organisationsanalys och gap-identifiering",
        "Stakeholder-mapping och relationsetablering", 
        "Quick wins och kortsiktiga förbättringar",
        "Teamutvärdering och nyckelrekryteringar"
      ]
    },
    {
      phase: "90-Dagars Mål",
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      items: [
        "Strategisk roadmap och handlingsplan",
        "Organisationsstruktur och processoptimering",
        "KPI-ramverk och uppföljningssystem",
        "Kulturförändring och engagemangsprogram"
      ]
    },
    {
      phase: "Långsiktig Impact",
      icon: <Award className="h-6 w-6 text-primary" />,
      items: [
        "Hållbar tillväxt och förbättrad lönsamhet",
        "Stärkt marknadsposition och konkurrensfördelar",
        "Utvecklad organisationskapacitet",
        "Smidig överlämning till permanent ledning"
      ]
    }
  ];

  const industries = [
    "Retail & E-commerce",
    "FMCG & Consumer Goods", 
    "Fashion & Lifestyle",
    "Food & Beverage",
    "Distribution & Logistics",
    "Technology & Digital"
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
            <span className="text-primary font-medium">Interimledare</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Interim <span className="text-primary">Ledare</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Omedelbar ledarskapskapacitet för kritiska situationer. Från akuta 
                ledarskapsbehov till strategiska transformationer.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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
                <p className="text-muted-foreground font-medium">År som VD/Interimchef</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <NumberTicker value={7} />
                </div>
                <p className="text-muted-foreground font-medium">Dagar till Uppstart</p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Situations */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                När Behövs en Interimledare?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Situationer som kräver omedelbar, erfaren ledarskap för att säkerställa 
                kontinuitet och driva nödvändiga förändringar.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {situations.map((situation, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <div className="bg-muted/50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-6">
                    <div>{situation.icon}</div>
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {situation.urgency}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{situation.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{situation.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--primary))] to-[#1a4a5c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Interimledarskap som Levererar
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                30+ års operativ erfarenhet kombinerat med beprövade resultat inom 
                transformation och tillväxt.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <div className="bg-background/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-accent mr-3" />
                    <h3 className="text-lg font-bold">{capability.title}</h3>
                  </div>
                  <p className="text-blue-100 leading-relaxed">{capability.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Timeline */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Vad Du Kan Förvänta Dig
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                En strukturerad approach med tydliga milstolpar och leveranser från dag ett.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {deliverables.map((phase, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <div className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-50 rounded-xl mr-4">
                      {phase.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{phase.phase}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Experience */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <BlurFade delay={0.1}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Branschexpertis
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Djup förståelse för komplexiteten inom retail, FMCG och konsumentbranschen 
                  ger mig förutsättningar att snabbt identifiera utmaningar och möjligheter.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Shield className="h-6 w-6 text-primary mr-4" />
                    <span className="text-foreground font-medium">Beprövad track record inom turnarounds</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-primary mr-4" />
                    <span className="text-foreground font-medium">Expertis inom team- och kulturförändring</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-6 w-6 text-primary mr-4" />
                    <span className="text-foreground font-medium">Fokus på hållbar tillväxt och lönsamhet</span>
                  </div>
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.3}>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Branschområden</h3>
                <div className="grid grid-cols-2 gap-4">
                  {industries.map((industry, index) => (
                    <div 
                      key={index}
                      className="bg-muted/50 rounded-xl p-4 text-center hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                    >
                      <span className="font-medium">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Availability & Process */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <BlurFade delay={0.1}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Snabb Mobilisering
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  När tiden är kritisk kan jag mobilisera inom 7 dagar. En strukturerad 
                  process säkerställer smidig övergång och omedelbar impact.
                </p>
                
                <div className="space-y-6">
                  {[
                    { day: "Dag 1-2", task: "Initial utvärdering och stakeholder-möten" },
                    { day: "Dag 3-5", task: "Organisationsanalys och prioritering" }, 
                    { day: "Dag 6-7", task: "Handlingsplan och kommunikationsstrategi" },
                    { day: "Vecka 2", task: "Full operativ aktivitet och leverans" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-20 text-accent font-bold text-sm mr-4">{item.day}</div>
                      <div className="text-muted-foreground">{item.task}</div>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.3}>
              <div className="bg-background/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <Clock className="h-16 w-16 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Omedelbar Tillgänglighet</h3>
                  <p className="text-muted-foreground">Flexibel start inom 7 dagar</p>
                </div>
                
                <div className="space-y-4 text-center">
                  <div className="border-t border-white/20 pt-4">
                    <div className="text-3xl font-bold text-accent mb-1">24/7</div>
                    <div className="text-muted-foreground text-sm">Tillgänglig för kritiska beslut</div>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="text-3xl font-bold text-accent mb-1">100%</div>
                    <div className="text-muted-foreground text-sm">Fokus på ditt uppdrag</div>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BlurFade delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Behöver Du Omedelbar Ledarskapsförstärkning?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Kontakta mig för en konfidentiell diskussion om dina akuta ledarskapsbehov. 
              Jag kan mobilisera inom en vecka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <ShimmerButton className="w-full sm:w-auto">
                  Kontakta för Akut Behov
                </ShimmerButton>
              </Link>
              <Link 
                href="/tjanster"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              >
                Se Alla Tjänster
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
}