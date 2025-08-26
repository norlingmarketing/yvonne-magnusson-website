import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Link from "next/link";

const BUTTONS = [
  { text: "Boka intro-samtal", href: "/kontakt", variant: "default" as const },
  { text: "Läs mer om tjänster", href: "/tjanster", variant: "outline" as const },
];

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container px-4 py-12 md:px-6 md:py-24 lg:py-32">
        <div className="mx-auto space-y-4 py-6 text-center">
          <h2 className="font-mono text-sm font-medium tracking-tight text-accent-foreground">
            REDO ATT BÖRJA?
          </h2>
          <h4 className="mx-auto mb-2 max-w-3xl text-balance text-5xl font-medium tracking-tighter">
            Accelerera er transformation idag
          </h4>
        </div>
        <div className="space-y-4 text-center">
          <p className="mx-auto max-w-[700px] text-balance text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Låt oss diskutera hur min expertis kan hjälpa er navigera genom förändring 
            och skapa hållbar tillväxt för framtiden.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <ShimmerButton
              className="px-8 py-4 text-lg font-semibold"
              shimmerColor="hsl(var(--primary-foreground))"
              background="hsl(var(--background))"
            >
              <Link href="/kontakt" prefetch={false} className="text-foreground">
                Boka intro-samtal
              </Link>
            </ShimmerButton>
            <Button 
              variant="outline"
              asChild
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg font-semibold bg-transparent"
            >
              <Link href="/tjanster" prefetch={false}>
                Läs mer om tjänster
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}