import { Button } from "@/components/ui/button";
import { LocalizedLink } from "@/components/localized-link";
import { Dictionary } from "@/lib/types/dictionary";
import { ReactNode } from "react";
import { type Locale } from "@/lib/routes";

interface CTASectionProps {
  locale: string;
  dict: Dictionary;
  // Optional custom content overrides
  customTitle?: string;
  customSubtitle?: string;
  customDescription?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonHref?: string;
  primaryButtonIcon?: ReactNode;
  secondaryButtonIcon?: ReactNode;
  variant?: "default" | "dark";
}

export function CTASection({ 
  locale, 
  dict,
  customTitle,
  customSubtitle,
  customDescription,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonHref,
  secondaryButtonHref,
  primaryButtonIcon,
  secondaryButtonIcon,
  variant = "default"
}: CTASectionProps) {
  const isDark = variant === "dark";
  const sectionClass = isDark 
    ? "py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    : "py-20 bg-primary text-primary-foreground";
  const containerClass = isDark ? "max-w-4xl" : "max-w-7xl";
  
  const title = customTitle || dict.cta.title;
  const subtitle = customSubtitle || dict.cta.subtitle;
  const description = customDescription || dict.cta.description;
  const primaryText = primaryButtonText || dict.cta.primaryButton;
  const secondaryText = secondaryButtonText || dict.cta.secondaryButton;
  const primaryHref = primaryButtonHref || "contact";
  const secondaryHref = secondaryButtonHref || "services";

  return (
    <section className={sectionClass}>
      <div className={`mx-auto ${containerClass} px-4 sm:px-6 lg:px-8`}>
        <div className="text-center space-y-6">
          {subtitle && (
            <h2 className="font-mono text-sm font-medium tracking-tight text-primary-foreground/80">
              {subtitle}
            </h2>
          )}
          <h4 className="text-3xl md:text-4xl font-bold mb-6">
            {title}
          </h4>
          <p className={`text-xl ${isDark ? 'text-muted-foreground' : 'text-primary-foreground/80'} max-w-3xl mx-auto mb-8 leading-relaxed`}>
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className={isDark ? "bg-primary hover:bg-primary/90" : undefined} variant={isDark ? undefined : "secondary"}>
              {primaryHref?.startsWith('/') || primaryHref?.startsWith('http') ? (
                <a href={primaryHref} className="flex items-center gap-2" target={primaryHref?.startsWith('http') || primaryHref?.endsWith('.pdf') ? "_blank" : undefined} rel={primaryHref?.startsWith('http') || primaryHref?.endsWith('.pdf') ? "noopener noreferrer" : undefined}>
                  {primaryText}
                  {primaryButtonIcon}
                </a>
              ) : (
                <LocalizedLink route={primaryHref as any} locale={locale as Locale} className="flex items-center gap-2">
                  {primaryText}
                  {primaryButtonIcon}
                </LocalizedLink>
              )}
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className={isDark 
                ? "border-white text-white hover:bg-background hover:text-foreground"
                : "bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              }
            >
              {secondaryHref?.startsWith('/') || secondaryHref?.startsWith('http') ? (
                <a href={secondaryHref} className="flex items-center gap-2" target={secondaryHref?.startsWith('http') || secondaryHref?.endsWith('.pdf') ? "_blank" : undefined} rel={secondaryHref?.startsWith('http') || secondaryHref?.endsWith('.pdf') ? "noopener noreferrer" : undefined}>
                  {secondaryText}
                  {secondaryButtonIcon}
                </a>
              ) : (
                <LocalizedLink route={secondaryHref as any} locale={locale as Locale} className="flex items-center gap-2">
                  {secondaryText}
                  {secondaryButtonIcon}
                </LocalizedLink>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}