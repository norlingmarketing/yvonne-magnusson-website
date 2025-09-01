import type { Metadata } from "next";
import { BlurFade } from "@/components/magicui/blur-fade";
import { PressReleases } from "@/components/page-components/press-releases";
import { MediaKitDownloads } from "@/components/page-components/media-kit-downloads";
import { MediaAppearances } from "@/components/page-components/media-appearances";
import { ExpertTopics } from "@/components/page-components/expert-topics";
import { MediaContactInfo } from "@/components/page-components/media-contact-info";
import { 
  getPressReleases, 
  getMediaKit, 
  getMediaAppearances, 
  getExpertTopics,
  getCredentials
} from "@/lib/data/media-kit";
import { Badge } from "@/components/ui/badge";
import { Camera, Users, Award, Star } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv');
  
  return {
    title: `${dict.media.badge} - Yvonne Magnusson`,
    description: dict.media.subtitle,
    keywords: "media kit, press resources, expert commentary, keynote speaker, media appearances, transformation expert, retail expert, press releases, speaking engagements, media interviews",
  };
}

export default async function MediaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv');
  const pressReleases = getPressReleases(locale);
  const mediaKit = getMediaKit(locale);
  const mediaAppearances = getMediaAppearances(locale);
  const expertTopics = getExpertTopics(locale);
  const credentials = getCredentials(locale);
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BlurFade delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <Camera className="h-4 w-4 text-primary" />
                <span className="text-primary font-medium">{dict.media.badge}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {dict.media.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                {dict.media.subtitle}
              </p>
            </BlurFade>
            
            <BlurFade delay={0.2}>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <Badge variant="secondary" className="px-4 py-2">
                  {dict.media.badges.expertComments}
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  {dict.media.badges.languages}
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  {dict.media.badges.liveTv}
                </Badge>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {dict.media.pressReleasesTitle}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {dict.media.pressReleasesSubtitle}
              </p>
            </div>
          </BlurFade>

          <PressReleases releases={pressReleases} />
        </div>
      </section>

      {/* Media Kit Downloads */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {dict.media.mediaKitTitle}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {dict.media.mediaKitSubtitle}
              </p>
            </div>
          </BlurFade>

          <MediaKitDownloads items={mediaKit} dict={dict} />
        </div>
      </section>

      {/* Recent Media Appearances */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {dict.media.appearancesTitle}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {dict.media.appearancesSubtitle}
              </p>
            </div>
          </BlurFade>

          <MediaAppearances appearances={mediaAppearances} />
        </div>
      </section>

      {/* Media Credentials */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {dict.media.credentialsTitle}
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                {dict.media.credentialsSubtitle}
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {credentials.map((credential, index) => {
              const IconComponent = credential.icon === "Users" ? Users : 
                                  credential.icon === "Camera" ? Camera :
                                  credential.icon === "Star" ? Star : Award;
              return (
                <BlurFade key={index} delay={0.2 + index * 0.1}>
                  <div className="bg-primary-foreground/10 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <IconComponent className="h-8 w-8 text-accent" />
                      <h3 className="text-lg font-bold">{credential.label}</h3>
                    </div>
                    <p className="text-primary-foreground/90 leading-relaxed">{credential.value}</p>
                  </div>
                </BlurFade>
              );
            })}
          </div>

          <BlurFade delay={0.5}>
            <div className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <Star className="h-12 w-12 text-accent mx-auto mb-4" />
                  <div className="text-2xl font-bold mb-2">50+</div>
                  <p className="text-primary-foreground/90">{dict.media.stats.mediaAppearances}</p>
                </div>
                <div>
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <div className="text-2xl font-bold mb-2">25+</div>
                  <p className="text-primary-foreground/90">{dict.media.stats.keynotePresentations}</p>
                </div>
                <div>
                  <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                  <div className="text-2xl font-bold mb-2">10+</div>
                  <p className="text-primary-foreground/90">{dict.media.stats.industryAwards}</p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Expert Topics */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ExpertTopics topics={expertTopics} locale={locale} dict={dict} />
        </div>
      </section>

      {/* Contact for Media */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {dict.media.contactTitle}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {dict.media.contactSubtitle}
              </p>
            </div>
          </BlurFade>

          <MediaContactInfo locale={locale} dict={dict} />
        </div>
      </section>
    </main>
  );
}