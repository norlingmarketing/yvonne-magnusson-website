import type { Metadata } from "next";
import { BlurFade } from "@/components/magicui/blur-fade";
import { CaseStudyCards } from "@/components/page-components/case-study-cards";
import { ImpactAreas } from "@/components/page-components/impact-areas";
import { caseStudies, impactAreasData, overallStats, industries } from "@/lib/data/case-studies";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case & Referenser - Bevisade Transformationsresultat | Yvonne Magnusson",
  description: "Verkliga framgångshistorier från 30+ transformationsprojekt. 40%+ tillväxt, 15 procentenheter EBITDA-förbättring och beprövade resultat inom retail och FMCG.",
  keywords: [
    "case studier",
    "transformation resultat", 
    "retail turnaround",
    "FMCG transformation",
    "digital transformation cases",
    "framgångshistorier",
    "business transformation",
    "turnaround results",
    "interim VD resultat",
    "retail case studies"
  ],
};

export default function CaseReferenserPage() {

  return (
    <div className="bg-gradient-to-b from-muted/50 to-background">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Bevisade <span className="text-primary">Resultat</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Verkliga transformationshistorier från 30+ år av framgångsrikt ledarskap 
                inom retail, FMCG och konsumentbranschen.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {overallStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    <NumberTicker value={stat.value} />{stat.suffix}
                  </div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Utvalda Transformationshistorier
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Djupgående case studies som visar konkreta resultat och beprövade metoder 
                för framgångsrik affärstransformation.
              </p>
            </div>
          </BlurFade>

          <CaseStudyCards caseStudies={caseStudies} />
        </div>
      </section>

      {/* Impact Areas */}
      <ImpactAreas impactAreas={impactAreasData} />

      {/* Industry Experience */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Branschexpertis
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Djup erfarenhet och beprövade resultat inom flera nyckelvertikaler 
                inom retail och konsumentbranschen.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl mb-3">{industry.icon}</div>
                  <h3 className="text-sm font-bold text-foreground mb-2">{industry.name}</h3>
                  <p className="text-xs text-muted-foreground">{industry.cases} cases</p>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.2}>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Redo att skapa era <span className="text-primary">nästa framgångshistoria</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Låt oss diskutera era utmaningar och hur proven metodologi 
                kan accelerera er transformation och tillväxtresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="inline-flex items-center">
                  <Link href="/kontakt">
                    Boka kostnadsfritt strategisamtal
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Link 
                  href="/om-yvonne" 
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Läs mer om Yvonnes bakgrund
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
}