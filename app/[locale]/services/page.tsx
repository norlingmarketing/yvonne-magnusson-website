import type { Metadata } from "next";
import { PageHero } from "@/components/page-components/page-hero";
import { ServiceCards } from "@/components/page-components/service-cards";
import { ProcessSteps } from "@/components/page-components/process-steps";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getServices, getProcessSteps } from "@/lib/data/services";
import { LocalizedLink } from "@/components/localized-link";
import { type Locale } from "@/lib/routes";
import { ArrowRight, Presentation } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv');
  
  return {
    title: `${dict.services.page.title} - Yvonne Magnusson`,
    description: dict.services.page.description,
    keywords: "board member, interim CEO, senior advisor, workshops, transformation, retail, FMCG",
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv');
  const services = getServices(dict, locale);
  const processSteps = getProcessSteps(dict);
  return (
    <main className="min-h-screen">
      <PageHero
        title={dict.services.page.title}
        description={dict.services.page.description}
        ctaText={dict.services.page.ctaText}
        ctaHref={`/${locale}/kontakt`}
      >
        <BlurFade delay={0.4}>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-primary/10 border border-primary/20 text-primary">
              {dict.services.page.badge1}
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-primary/10 border border-primary/20 text-primary">
              {dict.services.page.badge2}
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-primary/10 border border-primary/20 text-primary">
              {dict.services.page.badge3}
            </Badge>
          </div>
        </BlurFade>
      </PageHero>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServiceCards services={services} dict={dict} locale={locale} />
        </div>
      </section>

      <ProcessSteps 
        steps={processSteps}
        title={dict.services.page.processTitle}
        description={dict.services.page.processDescription}
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.2}>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {dict.services.page.finalCtaTitle}
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
                {dict.services.page.finalCtaDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <LocalizedLink route="contact" locale={locale as Locale} className="flex items-center gap-2">
                    {dict.services.page.finalCtaButton}
                    <ArrowRight className="h-5 w-5" />
                  </LocalizedLink>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <LocalizedLink route="speaking" locale={locale as Locale} className="flex items-center gap-2">
                    {dict.services.page.finalCtaSecondary}
                    <Presentation className="h-5 w-5" />
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