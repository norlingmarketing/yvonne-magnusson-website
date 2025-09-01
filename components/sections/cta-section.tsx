import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CTASectionProps {
  locale: string;
  dict: any;
}

export function CTASection({ locale, dict }: CTASectionProps) {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h2 className="font-mono text-sm font-medium tracking-tight text-primary-foreground/80">
            {dict.cta.subtitle}
          </h2>
          <h4 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            {dict.cta.title}
          </h4>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            {dict.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-3 text-lg">
              <Link href={`/${locale}/kontakt`}>
                {dict.cta.primaryButton}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-3 text-lg bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href={`/${locale}/tjanster`}>
                {dict.cta.secondaryButton}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}