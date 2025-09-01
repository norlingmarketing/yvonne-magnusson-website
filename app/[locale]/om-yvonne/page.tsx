import type { Metadata } from "next";
import { BlurFade } from "@/components/magicui/blur-fade";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Button } from "@/components/ui/button";
import { CareerTimeline } from "@/components/page-components/career-timeline";
import { CurrentRoles } from "@/components/page-components/current-roles";
import { timelineData, currentRoles, expertise, languages, educationData } from "@/lib/data/timeline";
import Link from "next/link";
import { ArrowRight, Download, Users, GraduationCap, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Om Yvonne Magnusson - Transformation Leadership Expert",
  description: "30+ års erfarenhet från ledande roller inom retail och FMCG. 18 år som VD med genomförda turnarounds och internationell expansion.",
  keywords: "Yvonne Magnusson, transformation leader, retail expert, VD, styrelseledamot, FMCG",
};

export default function AboutPage() {

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <BlurFade delay={0.2}>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Om Yvonne Magnusson
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  En ledare med djup erfarenhet av transformation inom retail och FMCG. 
                  Specialist på att skapa lönsam tillväxt genom strategisk förändring, 
                  kulturell utveckling och internationell expansion.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <NumberTicker value={30} className="text-2xl font-bold text-primary" />
                    <span className="text-2xl font-bold text-primary">+</span>
                    <span className="text-muted-foreground">års erfarenhet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <NumberTicker value={18} className="text-2xl font-bold text-primary" />
                    <span className="text-muted-foreground">år som VD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <NumberTicker value={4} className="text-2xl font-bold text-primary" />
                    <span className="text-muted-foreground">turnarounds</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link href="/kontakt" className="flex items-center gap-2">
                      Diskutera samarbete
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <a href="/downloads/yvonne-magnusson-cv.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Download className="h-5 w-5 mr-2" />
                      Ladda ner CV
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
                      &ldquo;Transformation genom ledarskap&rdquo;
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
                  Expertområden
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
                  Utbildning & Språk
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      Utbildning
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
                      Språk
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
                Redo att diskutera ert nästa steg?
              </h2>
              <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
                Låt oss utforska hur min erfarenhet kan bidra till er transformation och tillväxt.
              </p>
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link href="/kontakt" className="flex items-center gap-2">
                  Boka introduktionssamtal
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}