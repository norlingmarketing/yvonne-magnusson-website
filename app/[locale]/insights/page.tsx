import type { Metadata } from "next";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { ArticleCards } from "@/components/page-components/article-cards";
import { getArticles, getCategories } from "@/lib/data/insights-articles";
import { CTASection } from "@/components/sections/cta-section";
import { TrendingUp, Users, Target, Lightbulb, BookOpen, Mail } from "lucide-react";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv');
  
  return {
    title: `${dict.insights.badge} - Yvonne Magnusson`,
    description: dict.insights.subtitle,
    keywords: "transformation insights, leadership articles, retail strategy, digital transformation, organizational change, business insights",
  };
}


export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv');
  const articles = getArticles(locale);
  const categories = getCategories(locale);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BlurFade delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <BookOpen className="h-4 w-4 text-primary" />
                <span className="text-primary font-medium">{dict.insights.badge}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {dict.insights.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                {dict.insights.subtitle}
              </p>
            </BlurFade>
            
            <BlurFade delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {dict.insights.stats.map((stat, index) => {
                  const icons = [TrendingUp, Users, Target, Lightbulb];
                  const IconComponent = icons[index];
                  return (
                    <div key={index} className="text-center">
                      <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                      <p className="text-muted-foreground text-sm">{stat.label}</p>
                    </div>
                  );
                })}
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
                {dict.insights.articlesTitle}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {dict.insights.articlesSubtitle}
              </p>
            </div>
          </BlurFade>

          <ArticleCards 
            articles={articles} 
            categories={categories} 
            showFeaturedFirst={true} 
            dict={dict}
          />
        </div>
      </section>

      {/* Newsletter CTA */}
      <CTASection
        locale={locale}
        dict={dict}
        customTitle={dict.insights.newsletterTitle}
        customDescription={dict.insights.newsletterSubtitle}
        primaryButtonText={dict.insights.newsletterButton}
        primaryButtonIcon={<Mail className="h-5 w-5 ml-2" />}
        primaryButtonHref={`/${locale}/kontakt`}
        secondaryButtonText={dict.common.viewAll}
        secondaryButtonHref={`/${locale}/tjanster`}
      />

      {/* Featured Topics */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BlurFade delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {dict.insights.topicsTitle}
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              {dict.insights.topicsSubtitle}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {categories.filter(cat => cat !== "Alla" && cat !== "All").map((category, index) => (
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