import type { Metadata } from "next";
import { BlurFade } from "@/components/magicui/blur-fade";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LocalizedLink } from "@/components/localized-link";
import { type Locale } from "@/lib/routes";
import { ArrowLeft, Users, Target, Clock, Star, CheckCircle, ArrowRight, Lightbulb, TrendingUp, Shield, Award } from "lucide-react";
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
    title: `${dict.pages.services.workshops.title} - Yvonne Magnusson`,
    description: dict.pages.services.workshops.subtitle,
    keywords: "workshops, leadership development, team building, transformation, training, retail, FMCG",
  };
}

export default async function WorkshopsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv');

  const workshopTypeIcons = [TrendingUp, Users, Target, Lightbulb];
  const guaranteeIcons = [Shield, Users, Clock];

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
                {dict.pages.services.workshops.backToServices}
              </LocalizedLink>
            </div>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                {dict.pages.services.workshops.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {dict.pages.services.workshops.subtitle}
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.5}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <NumberTicker value={500} />+
                </div>
                <p className="text-muted-foreground font-medium">{dict.pages.services.workshops.trainedLeadersStat}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <NumberTicker value={4} />.<NumberTicker value={8} />
                </div>
                <p className="text-muted-foreground font-medium">{dict.pages.services.workshops.averageRatingStat}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <NumberTicker value={95} />%
                </div>
                <p className="text-muted-foreground font-medium">{dict.pages.services.workshops.recommendationStat}</p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Workshop Types */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {dict.pages.services.workshops.typesTitle}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {dict.pages.services.workshops.typesSubtitle}
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dict.pages.services.workshops.workshopTypes.map((workshop, index) => {
              const IconComponent = workshopTypeIcons[index];
              return (
                <BlurFade key={index} delay={0.4 + index * 0.1}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-6">
                        <IconComponent className="h-8 w-8 text-primary" />
                        <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {workshop.focus}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{workshop.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed mb-6">
                        {workshop.description}
                      </CardDescription>
                      
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
                    </CardHeader>
                  </Card>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {dict.pages.services.workshops.formatsTitle}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {dict.pages.services.workshops.formatsSubtitle}
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dict.pages.services.workshops.formats.map((format, index) => (
              <BlurFade key={index} delay={0.4 + index * 0.1}>
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{format.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {format.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {format.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {dict.pages.services.workshops.methodologyTitle}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {dict.pages.services.workshops.methodologySubtitle}
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dict.pages.services.workshops.methodology.map((phase, index) => (
              <BlurFade key={index} delay={0.4 + index * 0.1}>
                <div className="text-center relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-2xl font-bold text-xl mb-6">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  {index < 2 && (
                    <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-muted-foreground" />
                  )}
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">{phase.phase}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{phase.description}</p>
                  
                  <ul className="space-y-2 text-left">
                    {phase.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
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
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {dict.pages.services.workshops.outcomesTitle}
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                {dict.pages.services.workshops.outcomesSubtitle}
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dict.pages.services.workshops.learningOutcomes.map((outcome, index) => (
              <BlurFade key={index} delay={0.4 + index * 0.1}>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                  <span className="text-primary-foreground/90 leading-relaxed">{outcome}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {dict.pages.services.workshops.testimonialsTitle}
              </h2>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dict.pages.services.workshops.testimonials.map((testimonial, index) => (
              <BlurFade key={index} delay={0.4 + index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-warning fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-muted-foreground leading-relaxed italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                  </CardHeader>
                  <CardContent>
                    <div className="border-t border-border pt-4">
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-primary font-medium">{testimonial.role}</div>
                      <div className="text-muted-foreground text-sm">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Investment & Booking */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {dict.pages.services.workshops.investmentTitle}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {dict.pages.services.workshops.investmentSubtitle}
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {dict.pages.services.workshops.guarantees.map((guarantee, index) => {
                const IconComponent = guaranteeIcons[index];
                return (
                  <div key={index} className="text-center p-6 bg-muted rounded-2xl">
                    <IconComponent className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-foreground mb-2">{guarantee.title}</h3>
                    <p className="text-muted-foreground text-sm">{guarantee.description}</p>
                  </div>
                );
              })}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        locale={locale}
        dict={dict}
        customTitle={dict.pages.services.workshops.ctaTitle}
        customDescription={dict.pages.services.workshops.ctaSubtitle}
        primaryButtonText={dict.pages.services.workshops.ctaButton}
        secondaryButtonText={dict.pages.services.workshops.ctaSecondary}
        secondaryButtonHref={`/${locale}/forelasningar`}
      />
    </main>
  );
}