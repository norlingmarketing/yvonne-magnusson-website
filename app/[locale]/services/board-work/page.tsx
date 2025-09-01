import type { Metadata } from "next";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LocalizedLink } from "@/components/localized-link";
import { type Locale } from "@/lib/routes";
import { ArrowRight, Users, Globe, TrendingUp, Target, CheckCircle, ArrowLeft } from "lucide-react";
import { getBoardCompetencies, getBoardPositions, getBoardIdealSituations, getBoardValueCreation } from "@/lib/data/services";
import { getDictionary } from "@/lib/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv');
  
  return {
    title: `${dict.pages.services.boardWork.title} - Yvonne Magnusson`,
    description: dict.pages.services.boardWork.subtitle,
    keywords: "board member, chairman, retail, FMCG, transformation, internationalization, digitalization",
  };
}





export default async function BoardWorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv');
  
  // Get dynamic data based on dictionary
  const boardCompetencies = getBoardCompetencies(dict);
  const boardPositions = getBoardPositions(dict);
  const boardIdealSituations = getBoardIdealSituations(dict);
  const boardValueCreation = getBoardValueCreation(dict);
  
  return (
    <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.2}>
              <div className="mb-8">
                <LocalizedLink 
                  route="services" 
                  locale={locale as Locale}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {dict.pages.services.boardWork.backToServices}
                </LocalizedLink>
              </div>
            </BlurFade>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <BlurFade delay={0.3}>
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary/10 to-primary/20 rounded-xl mb-6">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    {dict.pages.services.boardWork.title}
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    {dict.pages.services.boardWork.subtitle}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
                      {dict.pages.services.boardWork.badge1}
                    </Badge>
                    <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
                      {dict.pages.services.boardWork.badge2}
                    </Badge>
                    <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
                      {dict.pages.services.boardWork.badge3}
                    </Badge>
                  </div>
                  
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <LocalizedLink route="contact" locale={locale as Locale} className="flex items-center gap-2">
                      {dict.pages.services.boardWork.ctaButton}
                      <ArrowRight className="h-5 w-5" />
                    </LocalizedLink>
                  </Button>
                </div>
              </BlurFade>
              
              <BlurFade delay={0.5}>
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-foreground">{dict.pages.services.boardWork.currentRolesTitle}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-6">
                    {boardPositions.map((position, index) => (
                      <div key={index}>
                        <h3 className="font-semibold text-foreground mb-3">{position.role}:</h3>
                        <ul className="space-y-2">
                          {position.companies.map((company, companyIndex) => (
                            <li key={companyIndex} className="text-foreground">
                              <span className="font-medium">{company.name}</span>
                              <span className="text-muted-foreground text-sm block">{company.description}</span>
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
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.2}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {dict.pages.services.boardWork.competenciesTitle}
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  {dict.pages.services.boardWork.competenciesSubtitle}
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-2 gap-8">
              {boardCompetencies.map((competency, index) => {
                const IconComponent = competency.icon === "Globe" ? Globe : competency.icon === "TrendingUp" ? TrendingUp : competency.icon === "Target" ? Target : Users;
                return (
                  <BlurFade key={index} delay={0.4 + index * 0.1}>
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-primary" />
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
                            <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
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
        <section className="py-20 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.2}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {dict.pages.services.boardWork.idealSituationsTitle}
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  {dict.pages.services.boardWork.idealSituationsSubtitle}
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-2 gap-8">
              {boardIdealSituations.map((situation, index) => (
                <BlurFade key={index} delay={0.4 + index * 0.1}>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">{situation.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {situation.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground">{dict.pages.services.boardWork.exampleFocusAreas}</h4>
                        <div className="flex flex-wrap gap-2">
                          {situation.examples.map((example, exampleIndex) => (
                            <Badge 
                              key={exampleIndex}
                              variant="outline" 
                              className="text-xs border-primary/30 text-primary"
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
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.2}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {dict.pages.services.boardWork.valueCreationTitle}
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  {dict.pages.services.boardWork.valueCreationSubtitle}
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {boardValueCreation.map((value, index) => (
                <BlurFade key={index} delay={0.4 + index * 0.1}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {value.area}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.impact}
                    </p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[hsl(var(--primary))] to-[#1e4a5f] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.2}>
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {dict.pages.services.boardWork.finalCtaTitle}
                </h2>
                <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
                  {dict.pages.services.boardWork.finalCtaSubtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-background text-primary hover:bg-muted/50">
                    <LocalizedLink route="contact" locale={locale as Locale} className="flex items-center gap-2">
                      {dict.pages.services.boardWork.finalCtaButton}
                      <ArrowRight className="h-5 w-5" />
                    </LocalizedLink>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-background hover:text-primary">
                    <LocalizedLink route="about" locale={locale as Locale} className="flex items-center gap-2">
                      {dict.pages.services.boardWork.finalCtaSecondary}
                      <Users className="h-5 w-5" />
                    </LocalizedLink>
                  </Button>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>
    </main>
  );
}