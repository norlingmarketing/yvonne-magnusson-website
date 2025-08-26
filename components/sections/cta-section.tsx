import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
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
            <Button 
              asChild 
              className="px-8 py-3 text-lg bg-background hover:bg-background/90 text-foreground"
            >
              <Link href="/kontakt">
                Boka intro-samtal
              </Link>
            </Button>
            <Button 
              variant="outline"
              asChild
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 text-lg bg-transparent"
            >
              <Link href="/tjanster">
                Läs mer om tjänster
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}