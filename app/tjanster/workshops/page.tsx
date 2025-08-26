"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ChevronRight, Users, Target, Clock, Star, CheckCircle, ArrowRight, Lightbulb, TrendingUp, Shield, Award } from "lucide-react";
import Link from "next/link";

export default function WorkshopsPage() {
  const workshopTypes = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Transformationsledarskap",
      description: "Utveckla din förmåga att leda framgångsrika organisationsförändringar",
      duration: "1-2 dagar",
      participants: "8-15 deltagare",
      focus: "Ledarskap & Förändring"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Teamutveckling",
      description: "Bygga högpresterande team genom praktiska verktyg och metoder",
      duration: "1 dag",
      participants: "5-12 deltagare", 
      focus: "Team & Samarbete"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Strategisk Verkställighet",
      description: "Från strategi till resultat - säkerställ framgångsrik implementering",
      duration: "1-2 dagar",
      participants: "6-20 deltagare",
      focus: "Strategi & Execution"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovation & Digitaliserng",
      description: "Navigera digital transformation och skapa innovativa lösningar",
      duration: "1 dag", 
      participants: "10-25 deltagare",
      focus: "Innovation & Digital"
    }
  ];

  const formats = [
    {
      title: "Intensivworkshops",
      description: "Djupgående 1-2 dagars program med praktiska verktyg och case studies",
      benefits: ["Direkt applicerbara verktyg", "Interaktiva övningar", "Personlig utvecklingsplan"]
    },
    {
      title: "Halvdagsformat",
      description: "Fokuserade 4-timmars sessioner för specifika utmaningar",
      benefits: ["Tidseffektiv lösning", "Målriktad kunskap", "Konkreta nästa steg"]
    },
    {
      title: "Workshopserier", 
      description: "Flera sammankopplade sessioner för djupare transformation",
      benefits: ["Hållbar förändring", "Kontinuerlig uppföljning", "Gradvis implementation"]
    },
    {
      title: "Skräddarsydda Program",
      description: "Helt anpassade workshop-program för era specifika behov",
      benefits: ["100% relevant innehåll", "Era verkliga utmaningar", "Flexibel leverans"]
    }
  ];

  const methodology = [
    {
      phase: "Förberedelse",
      description: "Föranalys av behov, mål och deltagargrupp",
      details: ["Stakeholder-intervjuer", "Nulägesanalys", "Målsättning", "Anpassning av innehåll"]
    },
    {
      phase: "Genomförande", 
      description: "Interaktiv workshop med praktiska verktyg",
      details: ["Teoretisk grund", "Praktiska övningar", "Case studies", "Grupparbeten"]
    },
    {
      phase: "Uppföljning",
      description: "Säkerställ implementation och resultat",
      details: ["Handlingsplan", "30-dagars check-in", "Material & verktyg", "Kontinuerlig support"]
    }
  ];

  const testimonials = [
    {
      quote: "Yvonnes workshop om transformationsledarskap gav oss konkreta verktyg som vi använder dagligen. Hennes praktiska approach och verkliga exempel gjorde skillnad.",
      author: "Maria Andersson",
      role: "VD, RetailTech AB",
      company: "RetailTech AB"
    },
    {
      quote: "Fantastiskt engagerad och kunnig. Workshopen om teamutveckling resulterade i märkbar förbättring av vårt samarbete och prestationer.",
      author: "Erik Johansson", 
      role: "HR-chef, Nordic Fashion Group",
      company: "Nordic Fashion Group"
    }
  ];

  const learningOutcomes = [
    "Praktiska verktyg för förändringsledarskap",
    "Strategier för att hantera motstånd och skapa engagemang",
    "Metoder för att bygga högpresterande team",
    "Ramverk för strategisk verkställighet",
    "Tekniker för innovation och problemlösning",
    "Personlig utvecklingsplan med konkreta steg"
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
            <span className="text-primary font-medium">Workshops</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Praktiska <span className="text-primary">Workshops</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Utveckla era ledare och team genom interaktiva workshops baserade på 
                30+ års praktisk erfarenhet från transformation och tillväxt.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <NumberTicker value={500} />+
                </div>
                <p className="text-muted-foreground font-medium">Utbildade Ledare</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <NumberTicker value={4} />.<NumberTicker value={8} />
                </div>
                <p className="text-muted-foreground font-medium">Genomsnittligt Betyg (5.0)</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <NumberTicker value={95} />%
                </div>
                <p className="text-muted-foreground font-medium">Skulle Rekommendera</p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Workshop Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Populära Workshop-områden
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Våra mest efterfrågade workshops täcker de kritiska områden som driver 
                framgångsrik transformation och ledarskapsutveckling.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshopTypes.map((workshop, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <div className="bg-muted/50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-6">
                    <div>{workshop.icon}</div>
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {workshop.focus}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">{workshop.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{workshop.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-primary mr-2" />
                      <span className="text-muted-foreground">{workshop.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-primary mr-2" />
                      <span className="text-muted-foreground">{workshop.participants}</span>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Flexibla Workshop-format
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Olika format för att passa era specifika behov, tidsramar och målsättningar.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {formats.map((format, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{format.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{format.description}</p>
                  
                  <ul className="space-y-2">
                    {format.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-[#2C5F7C] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Vår Approach
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                En beprövad metodik som säkerställer att workshopen skapar varaktig förändring 
                och konkreta resultat för er organisation.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodology.map((phase, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <div className="text-center relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2C5F7C] text-white rounded-2xl font-bold text-xl mb-6">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  {index < 2 && (
                    <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-gray-300" />
                  )}
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{phase.phase}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{phase.description}</p>
                  
                  <ul className="space-y-2 text-left">
                    {phase.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-[#D4A574] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 bg-gradient-to-br from-[#2C5F7C] to-[#1a4a5c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Vad Deltagarna Får Med Sig
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Konkreta verktyg, praktiska metoder och personliga insikter som kan 
                implementeras direkt i den dagliga verksamheten.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningOutcomes.map((outcome, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-[#D4A574] mr-4 mt-1 flex-shrink-0" />
                  <span className="text-blue-100 leading-relaxed">{outcome}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Vad Deltagarna Säger
              </h2>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-600 mb-6 leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-[#2C5F7C] font-medium">{testimonial.role}</div>
                    <div className="text-gray-500 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Investment & Booking */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Investering & Bokning
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Workshops prissätts baserat på format, varaktighet och antal deltagare. 
                Kontakta mig för en skräddarsydd offert anpassad efter era specifika behov.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <Shield className="h-8 w-8 text-[#2C5F7C] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Kvalitetsgaranti</h3>
                <p className="text-gray-600 text-sm">100% nöjdhetsgaranti eller full återbetalning</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <Users className="h-8 w-8 text-[#2C5F7C] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Flexibel Leverans</h3>
                <p className="text-gray-600 text-sm">På plats, virtuellt eller hybridformat</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <Clock className="h-8 w-8 text-[#2C5F7C] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Snabb Uppstart</h3>
                <p className="text-gray-600 text-sm">Kan levereras inom 2-3 veckor</p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BlurFade delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Redo att Utveckla Era Ledare?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Låt oss diskutera hur en skräddarsydd workshop kan accelerera er 
              ledarskaps- och organisationsutveckling. Boka ett kostnadsfritt samtal idag.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <ShimmerButton className="w-full sm:w-auto">
                  Diskutera Workshop-behov
                </ShimmerButton>
              </Link>
              <Link 
                href="/forelasningar"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Se Föreläsningar
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
}