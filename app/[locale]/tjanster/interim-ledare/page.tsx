import type { Metadata } from "next";
import { BlurFade } from "@/components/magicui/blur-fade";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, AlertTriangle, Target, TrendingUp, Zap, CheckCircle, Shield, Users, Clock } from "lucide-react";
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
    title: `${dict.pages.services.interimExecutive.title} - Yvonne Magnusson`,
    description: dict.pages.services.interimExecutive.subtitle,
    keywords: "interim executive, crisis management, turnaround, transformation, leadership, retail, FMCG",
  };
}

export default async function InterimExecutivePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv');

  const situationIcons = [AlertTriangle, Target, TrendingUp, Zap];
  const deliverableIcons = [Target, TrendingUp, Shield];

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
                {dict.pages.services.interimExecutive.backToServices}
              </Link>
            </div>
          </BlurFade>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <BlurFade delay={0.3}>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                  {dict.pages.services.interimExecutive.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {dict.pages.services.interimExecutive.subtitle}
                </p>
                
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href={`/${locale}/kontakt`}>
                    {dict.pages.services.interimExecutive.ctaButton}
                  </Link>
                </Button>
              </div>
            </BlurFade>

            <BlurFade delay={0.5}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    <NumberTicker value={4} />
                  </div>
                  <p className="text-muted-foreground font-medium">{dict.pages.services.interimExecutive.turnaroundsStat}</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    <NumberTicker value={18} />
                  </div>
                  <p className="text-muted-foreground font-medium">{dict.pages.services.interimExecutive.ceoYearsStat}</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    <NumberTicker value={7} />
                  </div>
                  <p className="text-muted-foreground font-medium">{dict.pages.services.interimExecutive.startupDaysStat}</p>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {dict.pages.services.interimExecutive.situationsTitle}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {dict.pages.services.interimExecutive.situationsSubtitle}
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dict.pages.services.interimExecutive.situations.map((situation, index) => {
              const IconComponent = situationIcons[index];
              return (
                <BlurFade key={index} delay={0.4 + index * 0.1}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-6">
                        <IconComponent className="h-8 w-8 text-primary" />
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {situation.urgency}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{situation.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {situation.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {dict.pages.services.interimExecutive.capabilitiesTitle}
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                {dict.pages.services.interimExecutive.capabilitiesSubtitle}
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dict.pages.services.interimExecutive.capabilities.map((capability, index) => (
              <BlurFade key={index} delay={0.4 + index * 0.1}>
                <div className="bg-background/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-accent mr-3" />
                    <h3 className="text-lg font-bold">{capability.title}</h3>
                  </div>
                  <p className="text-primary-foreground/90 leading-relaxed">{capability.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Timeline */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {dict.pages.services.interimExecutive.deliverablesTitle}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {dict.pages.services.interimExecutive.deliverablesSubtitle}
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {dict.pages.services.interimExecutive.deliverables.map((phase, index) => {
              const IconComponent = deliverableIcons[index];
              return (
                <BlurFade key={index} delay={0.4 + index * 0.1}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-primary/10 rounded-xl mr-4">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{phase.phase}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
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

      {/* Industries & Experience */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <BlurFade delay={0.2}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {dict.pages.services.interimExecutive.industryTitle}
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {dict.pages.services.interimExecutive.industrySubtitle}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Shield className="h-6 w-6 text-primary mr-4" />
                    <span className="text-foreground font-medium">
                      {locale === 'sv' ? 'Beprövad track record inom turnarounds' : 'Proven track record in turnarounds'}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-primary mr-4" />
                    <span className="text-foreground font-medium">
                      {locale === 'sv' ? 'Expertis inom team- och kulturförändring' : 'Expertise in team and cultural transformation'}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-6 w-6 text-primary mr-4" />
                    <span className="text-foreground font-medium">
                      {locale === 'sv' ? 'Fokus på hållbar tillväxt och lönsamhet' : 'Focus on sustainable growth and profitability'}
                    </span>
                  </div>
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.4}>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {locale === 'sv' ? 'Branschområden' : 'Industry Areas'}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {dict.pages.services.interimExecutive.industries.map((industry, index) => (
                    <div 
                      key={index}
                      className="bg-muted/50 rounded-xl p-4 text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
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
            <BlurFade delay={0.2}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {dict.pages.services.interimExecutive.mobilizationTitle}
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {dict.pages.services.interimExecutive.mobilizationSubtitle}
                </p>
                
                <div className="space-y-6">
                  {dict.pages.services.interimExecutive.mobilizationSteps.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-20 text-accent font-bold text-sm mr-4">{item.day}</div>
                      <div className="text-muted-foreground">{item.task}</div>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.4}>
              <div className="bg-background/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <Clock className="h-16 w-16 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{dict.pages.services.interimExecutive.availabilityTitle}</h3>
                  <p className="text-muted-foreground">{dict.pages.services.interimExecutive.availabilitySubtitle}</p>
                </div>
                
                <div className="space-y-4 text-center">
                  <div className="border-t border-white/20 pt-4">
                    <div className="text-3xl font-bold text-accent mb-1">24/7</div>
                    <div className="text-muted-foreground text-sm">
                      {locale === 'sv' ? 'Tillgänglig för kritiska beslut' : 'Available for critical decisions'}
                    </div>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="text-3xl font-bold text-accent mb-1">100%</div>
                    <div className="text-muted-foreground text-sm">
                      {locale === 'sv' ? 'Fokus på ditt uppdrag' : 'Focus on your assignment'}
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        locale={locale}
        dict={dict}
        customTitle={dict.pages.services.interimExecutive.ctaTitle}
        customDescription={dict.pages.services.interimExecutive.ctaSubtitle}
        primaryButtonText={dict.pages.services.interimExecutive.ctaButton}
        secondaryButtonText={dict.pages.services.interimExecutive.ctaSecondary}
      />
    </main>
  );
}