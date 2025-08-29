import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ShinyButton } from "@/components/magicui/shiny-button";
import Link from "next/link";


export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h2 className="font-mono text-sm font-medium tracking-tight text-primary-foreground/80">
            REDO ATT BÖRJA?
          </h2>
          <h4 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Accelerera er transformation idag
          </h4>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Låt oss diskutera hur min expertis kan hjälpa er navigera genom förändring 
            och skapa hållbar tillväxt för framtiden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/kontakt">
              <ShimmerButton 
                className="px-8 py-3 text-lg"
                background="rgba(255, 255, 255, 1)"
                shimmerColor="hsl(var(--primary))"
              >
                Boka intro-samtal
              </ShimmerButton>
            </Link>
            <Link href="/tjanster">
              <ShinyButton className="px-8 py-3 text-lg border border-primary-foreground text-primary-foreground">
                Läs mer om tjänster
              </ShinyButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}