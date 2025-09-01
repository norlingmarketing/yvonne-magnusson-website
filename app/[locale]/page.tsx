import { getDictionary } from "@/lib/dictionaries";
import { locales } from "@/lib/locale-config";
import { HeroSection } from "@/components/sections/hero-section";
import { CredentialsSection } from "@/components/sections/credentials-section";
import { StatsSection } from "@/components/sections/stats-section";
import { LogoCloudSection } from "@/components/sections/logo-cloud-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SpeakerShowcase } from "@/components/sections/speaker-showcase";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Home({ 
  params 
}: { 
  params: Promise<{ locale: 'sv' | 'en' }> 
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  
  return (
    <div>
      <HeroSection locale={locale} dict={dict} />
      <LogoCloudSection locale={locale} dict={dict} />
      <StatsSection locale={locale} dict={dict} />
      <CredentialsSection locale={locale} dict={dict} />
      <ServicesSection locale={locale} dict={dict} />
      <SpeakerShowcase locale={locale} dict={dict} />
      <TestimonialsSection locale={locale} dict={dict} />
      <CTASection locale={locale} dict={dict} />
    </div>
  );
}
