import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { CredentialsSection } from "@/components/sections/credentials-section";
import { SpeakerShowcase } from "@/components/sections/speaker-showcase";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { LogoCloudSection } from "@/components/sections/logo-cloud-section";
import { StatsSection } from "@/components/sections/stats-section";
import { StructuredData } from "@/components/seo/structured-data";
import { locales } from "@/lib/locale-config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Testing Basic Page</h1>
      <p className="text-lg">If you see this, the basic routing works.</p>
    </div>
  );
}
