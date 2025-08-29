import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, LucideIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceDetailHeroProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  idealFor: string[];
  approach: string;
  investment: string;
  ctaText?: string;
  ctaHref?: string;
}

export function ServiceDetailHero({
  title,
  subtitle,
  description,
  icon: Icon,
  features,
  idealFor,
  approach,
  investment,
  ctaText = "Boka kostnadsfritt samtal",
  ctaHref = "/kontakt"
}: ServiceDetailHeroProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div className="space-y-8">
              <BlurFade delay={0.1}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    Tjänst
                  </Badge>
                </div>
              </BlurFade>

              <BlurFade delay={0.2}>
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                    {title}
                  </h1>
                  <p className="text-xl text-primary font-medium">
                    {subtitle}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              </BlurFade>

              <BlurFade delay={0.3}>
                <div className="flex gap-4">
                  <Button asChild size="lg">
                    <Link href={ctaHref}>
                      {ctaText}
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/case-referenser">
                      Se resultat
                    </Link>
                  </Button>
                </div>
              </BlurFade>
            </div>

            {/* Service Details Cards */}
            <div className="space-y-6">
              {/* Key Features */}
              <BlurFade delay={0.4}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">
                      Vad ingår
                    </h3>
                    <ul className="space-y-3">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </BlurFade>

              {/* Ideal For */}
              <BlurFade delay={0.5}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">
                      Passar för
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {idealFor.map((item, index) => (
                        <Badge key={index} variant="outline" className="text-sm">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>

              {/* Approach & Investment */}
              <BlurFade delay={0.6}>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium text-foreground mb-2 text-sm">
                        Approach
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {approach}
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium text-foreground mb-2 text-sm">
                        Investering
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {investment}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}