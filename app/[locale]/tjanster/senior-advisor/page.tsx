import type { Metadata } from "next";
import { BlurFade } from "@/components/magicui/blur-fade";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Users, Target, TrendingUp, Lightbulb, Shield, Award, ArrowLeft } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { CTASection } from "@/components/sections/cta-section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv');
  
  return {
    title: `${dict.pages.services.seniorAdvisor.title} - Yvonne Magnusson`,
    description: dict.pages.services.seniorAdvisor.subtitle,
    keywords: "senior advisor, strategic advisory, transformation, retail, FMCG, leadership development",
  };
}

export default async function SeniorAdvisorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv');

  const iconMap = {
    TrendingUp,
    Users,
    Target,
    Lightbulb,
    Shield,
    Award,
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.2}>
            <div className="mb-8">
              <Link 
                href={`/${locale}/tjanster`} 
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                {dict.pages.services.seniorAdvisor.backToServices}
              </Link>
            </div>
          </BlurFade>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <BlurFade delay={0.3}>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                  {dict.pages.services.seniorAdvisor.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {dict.pages.services.seniorAdvisor.subtitle}
                </p>
                
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href={`/${locale}/kontakt`} className="flex items-center gap-2">
                    {dict.pages.services.seniorAdvisor.ctaButton}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </BlurFade>

            <BlurFade delay={0.5}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    <NumberTicker value={30} />+
                  </div>
                  <p className="text-muted-foreground font-medium">{dict.pages.services.seniorAdvisor.yearsStat}</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    <NumberTicker value={4} />
                  </div>
                  <p className="text-muted-foreground font-medium">{dict.pages.services.seniorAdvisor.turnaroundsStat}</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    <NumberTicker value={18} />
                  </div>
                  <p className="text-muted-foreground font-medium">{dict.pages.services.seniorAdvisor.ceoYearsStat}</p>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {dict.pages.services.seniorAdvisor.expertiseTitle}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {dict.pages.services.seniorAdvisor.expertiseSubtitle}
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dict.pages.services.seniorAdvisor.expertiseAreas.map((area, index) => {
              const IconComponent = index === 0 ? TrendingUp : 
                                  index === 1 ? Users : 
                                  index === 2 ? Target : Lightbulb;
              return (
                <BlurFade key={index} delay={0.4 + index * 0.1}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mb-6">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{area.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {area.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {dict.pages.services.seniorAdvisor.valueTitle}
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                {dict.pages.services.seniorAdvisor.valueSubtitle}
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dict.pages.services.seniorAdvisor.valueProp.map((prop, index) => {
              const IconComponent = index === 0 ? Shield : index === 1 ? Award : Users;
              return (
                <BlurFade key={index} delay={0.4 + index * 0.1}>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-background/10 rounded-2xl mb-6">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{prop.title}</h3>
                    <p className="text-primary-foreground/90 leading-relaxed">{prop.description}</p>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Types */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {dict.pages.services.seniorAdvisor.engagementTitle}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {dict.pages.services.seniorAdvisor.engagementSubtitle}
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dict.pages.services.seniorAdvisor.engagementTypes.map((type, index) => (
              <BlurFade key={index} delay={0.4 + index * 0.1}>
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {type.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-muted-foreground">
                          {dict.pages.services.seniorAdvisor.durationLabel}
                        </span>
                        <span className="text-sm font-medium text-primary">{type.duration}</span>
                      </div>
                      <div className="flex items-start justify-between">
                        <span className="text-sm font-medium text-muted-foreground">
                          {dict.pages.services.seniorAdvisor.formatLabel}
                        </span>
                        <span className="text-sm font-medium text-primary text-right max-w-[60%]">{type.format}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {dict.pages.services.seniorAdvisor.processTitle}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {dict.pages.services.seniorAdvisor.processSubtitle}
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {dict.pages.services.seniorAdvisor.processSteps.map((phase, index) => (
              <BlurFade key={index} delay={0.4 + index * 0.1}>
                <div className="text-center relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-2xl font-bold text-xl mb-6">
                    {phase.step}
                  </div>
                  {index < 3 && (
                    <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-muted-foreground" />
                  )}
                  <h3 className="text-xl font-bold text-foreground mb-4">{phase.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        locale={locale}
        dict={dict}
        customTitle={dict.pages.services.seniorAdvisor.ctaTitle}
        customDescription={dict.pages.services.seniorAdvisor.ctaSubtitle}
        primaryButtonText={dict.pages.services.seniorAdvisor.ctaButton}
        secondaryButtonText={dict.pages.services.seniorAdvisor.ctaSecondary}
        secondaryButtonHref={`/${locale}/om-yvonne`}
      />
    </main>
  );
}