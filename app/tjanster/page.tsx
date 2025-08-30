import type { Metadata } from "next";
import { PageHero } from "@/components/page-components/page-hero";
import { ServiceCards } from "@/components/page-components/service-cards";
import { ProcessSteps } from "@/components/page-components/process-steps";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services, processSteps } from "@/lib/data/services";
import Link from "next/link";
import { ArrowRight, Presentation } from "lucide-react";

export const metadata: Metadata = {
  title: "Tjänster - Yvonne Magnusson | Styrelsearbete, Advisory, Interim & Workshops",
  description: "Professionella tjänster inom transformation: Styrelsearbete, Senior Advisory, Interimledare och Workshops. 30+ års erfarenhet från retail och FMCG.",
  keywords: "styrelseledamot, interim VD, senior advisor, workshops, transformation, retail, FMCG",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Professionella tjänster"
        description="Fyra fokuserade tjänsteområden för att driva transformation och tillväxt inom retail och consumer markets. Alla byggda på 30+ års erfarenhet och beprövade metoder."
        ctaText="Diskutera era behov"
        ctaHref="/kontakt"
      >
        <BlurFade delay={0.4}>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-primary/10 border border-primary/20 text-primary">
              30+ års erfarenhet
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-primary/10 border border-primary/20 text-primary">
              4 genomförda turnarounds
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-primary/10 border border-primary/20 text-primary">
              Internationell erfarenhet
            </Badge>
          </div>
        </BlurFade>
      </PageHero>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServiceCards services={services} />
        </div>
      </section>

      <ProcessSteps 
        steps={processSteps}
        title="Så arbetar vi tillsammans"
        description="En strukturerad process som säkerställer att vi skapar maximal värde för er organisation."
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.2}>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Vilken tjänst passar er bäst?
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
                Låt oss diskutera era utmaningar och hitta den mest lämpliga lösningen 
                för er transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link href="/kontakt" className="flex items-center gap-2">
                    Boka kostnadsfritt samtal
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link href="/forelasningar" className="flex items-center gap-2">
                    Se föreläsningar
                    <Presentation className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}