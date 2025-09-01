import type { Metadata } from "next";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getDictionary } from "@/lib/dictionaries";
import { CTASection } from "@/components/sections/cta-section";
import { LocalizedLink } from "@/components/localized-link";
import { type Locale } from "@/lib/routes";
import { 
  ArrowRight, 
  Play, 
  Download,
  Calendar,
  Star,
  Users,
  Clock,
  CheckCircle
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv');
  
  return {
    title: `${dict.speaking.title} - Yvonne Magnusson`,
    description: dict.speaking.subtitle,
    keywords: "keynote speaker, transformation, digitalization, retail, FMCG, internationalization, leadership",
  };
}

export default async function SpeakingPage({
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
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                  <Star className="h-4 w-4 text-primary" />
                  <span className="text-primary font-medium">{dict.speaking.badge}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  {dict.speaking.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {dict.speaking.subtitle}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
                    {dict.speaking.languages}
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
                    {dict.speaking.duration}
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
                    {dict.speaking.format}
                  </Badge>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <LocalizedLink route="contact" locale={locale as Locale} className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      {dict.speaking.ctaButton}
                      <ArrowRight className="h-5 w-5" />
                    </LocalizedLink>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <a href="/downloads/yvonne-magnusson-speaker-kit.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Download className="h-5 w-5 mr-2" />
                      {dict.speaking.speakerKit}
                    </a>
                  </Button>
                </div>
              </div>
            </BlurFade>
            
            <BlurFade delay={0.4}>
              <div className="relative">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative cursor-pointer group">
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center bg-foreground/50 hover:bg-foreground/40 transition-colors">
                          <div className="w-20 h-20 bg-background/90 rounded-full flex items-center justify-center group-hover:bg-background group-hover:scale-110 transition-all">
                            <Play className="h-10 w-10 text-primary ml-1" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-background/95 backdrop-blur-sm rounded-lg p-4">
                          <h3 className="font-semibold text-foreground">{dict.speaking.videoTitle}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{dict.speaking.videoSubtitle}</p>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Play className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">{dict.speaking.videoPlaceholder}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {dict.speaking.topicsTitle}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {dict.speaking.topicsSubtitle}
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {dict.speaking.topics.map((topic, index) => (
              <BlurFade key={topic.id} delay={0.4 + index * 0.1}>
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">{index + 1}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">{topic.duration}</Badge>
                    </div>
                    <CardTitle className="text-xl">{topic.title}</CardTitle>
                    <CardDescription className="text-sm text-accent font-medium mb-2">
                      {topic.subtitle}
                    </CardDescription>
                    <p className="text-muted-foreground leading-relaxed">
                      {topic.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Key Points */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        {locale === 'sv' ? 'Innehåll' : 'Content'}
                      </h4>
                      <ul className="space-y-2">
                        {topic.keyPoints.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Audience */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {locale === 'sv' ? 'Målgrupp' : 'Audience'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {topic.audience.map((audience, audienceIndex) => (
                          <Badge key={audienceIndex} variant="secondary" className="text-xs">
                            {audience}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Format */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        Format
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {topic.format.map((format, formatIndex) => (
                          <Badge key={formatIndex} variant="outline" className="text-xs">
                            {format}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="border-t border-border pt-6">
                      <blockquote className="text-sm text-muted-foreground italic mb-3">
                        &ldquo;{topic.testimonial.quote}&rdquo;
                      </blockquote>
                      <div className="text-xs">
                        <div className="font-medium text-foreground">{topic.testimonial.author}</div>
                        <div className="text-muted-foreground">{topic.testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTASection
        locale={locale}
        dict={dict}
        customTitle={dict.speaking.finalCtaTitle}
        customDescription={dict.speaking.finalCtaSubtitle}
        primaryButtonText={dict.speaking.finalCtaButton}
        secondaryButtonText={dict.speaking.finalCtaSecondary}
        primaryButtonIcon={<Calendar className="h-5 w-5" />}
        secondaryButtonIcon={<Download className="h-5 w-5" />}
        secondaryButtonHref="/downloads/yvonne-magnusson-speaker-kit.pdf"
      />
    </main>
  );
}