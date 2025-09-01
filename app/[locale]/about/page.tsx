import type { Metadata } from "next";
import { BlurFade } from "@/components/magicui/blur-fade";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Button } from "@/components/ui/button";
import { CareerTimeline } from "@/components/page-components/career-timeline";
import { CurrentRoles } from "@/components/page-components/current-roles";
import { timelineData, currentRoles, expertise, languages, educationData } from "@/lib/data/timeline";
import { LocalizedLink } from "@/components/localized-link";
import { type Locale } from "@/lib/routes";
import { ArrowRight, Download, Users, GraduationCap, Globe } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv');
  
  return {
    title: `${dict.about.title} - Transformation Leadership Expert`,
    description: dict.about.subtitle,
    keywords: "Yvonne Magnusson, transformation leader, retail expert, CEO, board member, FMCG",
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv');

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <BlurFade delay={0.2}>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  {dict.about.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {dict.about.subtitle}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <NumberTicker value={30} className="text-2xl font-bold text-primary" />
                    <span className="text-2xl font-bold text-primary">+</span>
                    <span className="text-muted-foreground">{dict.about.experienceYears}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <NumberTicker value={18} className="text-2xl font-bold text-primary" />
                    <span className="text-muted-foreground">{dict.about.ceoYears}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <NumberTicker value={4} className="text-2xl font-bold text-primary" />
                    <span className="text-muted-foreground">{dict.about.turnarounds}</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <LocalizedLink route="contact" locale={locale as Locale} className="flex items-center gap-2">
                      {dict.about.discussCollaboration}
                      <ArrowRight className="h-5 w-5" />
                    </LocalizedLink>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <a href="/downloads/yvonne-magnusson-cv.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Download className="h-5 w-5 mr-2" />
                      {dict.about.downloadCV}
                    </a>
                  </Button>
                </div>
              </div>
            </BlurFade>
            
            <BlurFade delay={0.4}>
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl"></div>
                <div className="absolute inset-4 bg-card rounded-xl shadow-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-primary" />
                    </div>
                    <p className="text-muted-foreground italic">
                      &ldquo;{dict.about.transformationQuote}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <CurrentRoles currentRoles={currentRoles} />
      
      <CareerTimeline timelineData={timelineData} />
      
      {/* Combined Expertise & Education Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <BlurFade delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  {dict.about.expertiseTitle}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 rounded-full transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.4}>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  {dict.about.educationLanguagesTitle}
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      {dict.about.educationSubtitle}
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      {educationData.map((education, index) => (
                        <li key={index}>{education}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Globe className="h-5 w-5 text-primary" />
                      {dict.about.languagesSubtitle}
                    </h3>
                    <div className="space-y-2">
                      {languages.map((lang, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-foreground">{lang.lang}</span>
                          <span className="text-muted-foreground">{lang.level}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.2}>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {dict.about.ctaTitle}
              </h2>
              <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
                {dict.about.ctaSubtitle}
              </p>
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <LocalizedLink route="contact" locale={locale as Locale} className="flex items-center gap-2">
                  {dict.about.ctaButton}
                  <ArrowRight className="h-5 w-5" />
                </LocalizedLink>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}