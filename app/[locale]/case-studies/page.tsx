import type { Metadata } from "next";
import { BlurFade } from "@/components/magicui/blur-fade";
import { CaseStudyCards } from "@/components/page-components/case-study-cards";
import { ImpactAreas } from "@/components/page-components/impact-areas";
import { getCaseStudies, getImpactAreasData, getOverallStats } from "@/lib/data/case-studies";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { getDictionary } from "@/lib/dictionaries";
import { CTASection } from "@/components/sections/cta-section";
import { Calendar, Download } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv');
  
  return {
    title: `${dict.cases.title} ${dict.cases.titleHighlight} - Yvonne Magnusson`,
    description: dict.cases.subtitle,
    keywords: "case studies, transformation results, retail turnaround, FMCG transformation, digital transformation, success stories, business transformation, turnaround results, interim CEO results",
  };
}

export default async function CaseReferenserPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv');
  
  // Get locale-aware data
  const caseStudies = getCaseStudies(locale);
  const impactAreasData = getImpactAreasData(locale);
  const overallStats = getOverallStats(locale);

  return (
    <div className="bg-gradient-to-b from-muted/50 to-background">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                {dict.cases.title} <span className="text-primary">{dict.cases.titleHighlight}</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {dict.cases.subtitle}
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
                {dict.cases.caseStudiesTitle}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {dict.cases.caseStudiesSubtitle}
              </p>
            </div>
          </BlurFade>

          <CaseStudyCards caseStudies={caseStudies} dict={dict} />
        </div>
      </section>

      {/* Impact Areas */}
      <ImpactAreas impactAreas={impactAreasData} dict={dict} />

      {/* CTA Section */}
      <CTASection
        locale={locale}
        dict={dict}
        customTitle={`${dict.cases.finalCtaTitle} ${dict.cases.finalCtaTitleHighlight}?`}
        customDescription={dict.cases.finalCtaSubtitle}
        primaryButtonText={dict.cases.finalCtaButton}
        secondaryButtonText={dict.cases.finalCtaSecondary}
        primaryButtonIcon={<Calendar className="h-5 w-5" />}
        secondaryButtonIcon={<Download className="h-5 w-5" />}
        secondaryButtonHref={`/${locale}/om-yvonne`}
      />
    </div>
  );
}