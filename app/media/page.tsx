import type { Metadata } from "next";
import { BlurFade } from "@/components/magicui/blur-fade";
import { PressReleases } from "@/components/page-components/press-releases";
import { MediaKitDownloads } from "@/components/page-components/media-kit-downloads";
import { MediaAppearances } from "@/components/page-components/media-appearances";
import { ExpertTopics } from "@/components/page-components/expert-topics";
import { MediaContactInfo } from "@/components/page-components/media-contact-info";
import { 
  pressReleases, 
  mediaKit, 
  mediaAppearances, 
  expertTopics 
} from "@/lib/data/media-kit";
import { Badge } from "@/components/ui/badge";
import { Camera, Users, Award, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Media & Press - Pressresurser och Expertkommentarer",
  description: "Presskit, mediematerial och expertkommentarer från Yvonne Magnusson. Tillgänglig för intervjuer, keynotes och expertanalys inom transformation och retail.",
  keywords: [
    "media kit",
    "press resources",
    "expert commentary",
    "keynote speaker",
    "media appearances",
    "transformation expert",
    "retail expert",
    "press releases",
    "speaking engagements",
    "media interviews"
  ],
};

const credentials = [
  {
    icon: Users,
    label: "Expertområden",
    value: "Transformation, Retail, FMCG, Digital, Styrelsearbete, Internationalisering"
  },
  {
    icon: Camera,
    label: "Medieerfarenhet",
    value: "50+ TV, radio och podcast-intervjuer i nationella och internationella medier"
  },
  {
    icon: Star,
    label: "Språk",
    value: "Flyt i svenska, engelska och tyska för internationella medier"
  },
  {
    icon: Award,
    label: "Trovärdighet",
    value: "30+ års praktisk erfarenhet med dokumenterade resultat inom transformation"
  }
];

export default function MediaPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BlurFade delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <Camera className="h-4 w-4 text-primary" />
                <span className="text-primary font-medium">Media & Press</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Pressresurser & Expertkommentarer
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Komplett presskit med mediematerial, expertkommentarer och resurser 
                för journalister och eventorganisatörer.
              </p>
            </BlurFade>
            
            <BlurFade delay={0.2}>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <Badge variant="secondary" className="px-4 py-2">
                  Expertkommentarer inom 24h
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  Intervjuer på svenska, engelska, tyska
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  Live TV/Radio tillgänglig
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
                Pressmeddelanden
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Senaste nyheter och milstolpar inom transformation och business development.
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
                Mediakit för Nedladdning
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Högkvalitativa bilder, biografier och videomaterial för media och event.
              </p>
            </div>
          </BlurFade>

          <MediaKitDownloads items={mediaKit} />
        </div>
      </section>

      {/* Recent Media Appearances */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Senaste Medieframträdanden
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Aktuella intervjuer och expertkommentarer i nationella och internationella medier.
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
                Media Credentials
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Professionell medieexpertis med dokumenterad erfarenhet av 
                intervjuer och kommentarer i nationella och internationella medier.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {credentials.map((credential, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <credential.icon className="h-8 w-8 text-accent" />
                    <h3 className="text-lg font-bold">{credential.label}</h3>
                  </div>
                  <p className="text-primary-foreground/90 leading-relaxed">{credential.value}</p>
                </div>
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={0.5}>
            <div className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <Star className="h-12 w-12 text-accent mx-auto mb-4" />
                  <div className="text-2xl font-bold mb-2">50+</div>
                  <p className="text-primary-foreground/90">Medieframträdanden</p>
                </div>
                <div>
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <div className="text-2xl font-bold mb-2">25+</div>
                  <p className="text-primary-foreground/90">Keynote Presentations</p>
                </div>
                <div>
                  <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                  <div className="text-2xl font-bold mb-2">10+</div>
                  <p className="text-primary-foreground/90">Branschutmärkelser</p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Expert Topics */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ExpertTopics topics={expertTopics} />
        </div>
      </section>

      {/* Contact for Media */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Media & Pressförfrågningar
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                För intervjuförfrågningar, expertkommentarer eller talarbokningar, 
                kontakta mig direkt eller genom min assistent.
              </p>
            </div>
          </BlurFade>

          <MediaContactInfo />
        </div>
      </section>
    </main>
  );
}