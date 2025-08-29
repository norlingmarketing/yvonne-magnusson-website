"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { ArticleCards } from "@/components/page-components/article-cards";
import { articles, categories } from "@/lib/data/insights-articles";
import { TrendingUp, Users, Target, Lightbulb, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

const insights = [
  {
    icon: TrendingUp,
    label: "Artiklar publicerade",
    value: "50+"
  },
  {
    icon: Users,
    label: "Läsare per månad",
    value: "15,000+"
  },
  {
    icon: Target,
    label: "Praktiska case studies",
    value: "25+"
  },
  {
    icon: Lightbulb,
    label: "År av erfarenhet",
    value: "30+"
  }
];

export default function InsightsContent() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BlurFade delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <BookOpen className="h-4 w-4 text-primary" />
                <span className="text-primary font-medium">Insights & Perspektiv</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Lär av transformation i praktiken
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Djupgående analyser och strategiska perspektiv från verkligheten. 
                30+ års erfarenhet av att leda transformation inom retail och FMCG.
              </p>
            </BlurFade>
            
            <BlurFade delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {insights.map((insight, index) => (
                  <div key={index} className="text-center">
                    <insight.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground mb-1">{insight.value}</div>
                    <p className="text-muted-foreground text-sm">{insight.label}</p>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Senaste insikter
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Praktiska lärdomar och strategiska perspektiv från verkligheten av transformation och ledarskap.
              </p>
            </div>
          </BlurFade>

          <ArticleCards 
            articles={articles} 
            categories={categories} 
            showFeaturedFirst={true} 
          />
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BlurFade delay={0.1}>
            <BookOpen className="h-16 w-16 text-accent mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Få nya insikter direkt
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
              Prenumerera på mitt nyhetsbrev och få tillgång till exklusiva analyser, 
              case studies och strategiska perspektiv direkt i inkorgen.
            </p>
            
            <Button asChild size="lg" variant="secondary">
              <Link href="/kontakt">
                <ArrowRight className="h-5 w-5 mr-2" />
                Prenumerera på nyhetsbrev
              </Link>
            </Button>
          </BlurFade>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BlurFade delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Mest lästa områden
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Upptäck de ämnen som engagerar ledare mest inom transformation och organisationsförändring.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {categories.filter(cat => cat !== "Alla").map((category, index) => (
                <BlurFade key={category} delay={0.2 + index * 0.1}>
                  <Button variant="outline" size="lg" asChild>
                    <Link href={`#articles-${category.toLowerCase()}`}>
                      {category}
                    </Link>
                  </Button>
                </BlurFade>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}