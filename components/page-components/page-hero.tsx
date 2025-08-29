import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  description: string;
  features?: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  backgroundClassName?: string;
  children?: React.ReactNode;
}

export function PageHero({
  title,
  description,
  features = [],
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  backgroundClassName = "bg-gradient-to-br from-gray-50 to-white",
  children
}: PageHeroProps) {
  return (
    <section className={`py-20 ${backgroundClassName}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.2}>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              {description}
            </p>
            
            {features.length > 0 && (
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-primary">
                    {feature.icon}
                    <span className="font-semibold">{feature.title}</span>
                    <span className="text-muted-foreground">- {feature.description}</span>
                  </div>
                ))}
              </div>
            )}

            {(ctaText || secondaryCtaText) && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {ctaText && ctaHref && (
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link href={ctaHref} className="flex items-center gap-2">
                      {ctaText}
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                )}
                {secondaryCtaText && secondaryCtaHref && (
                  <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link href={secondaryCtaHref}>
                      {secondaryCtaText}
                    </Link>
                  </Button>
                )}
              </div>
            )}
          </div>
        </BlurFade>
        
        {children}
      </div>
    </section>
  );
}