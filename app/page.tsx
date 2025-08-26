import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { CredentialsSection } from "@/components/sections/credentials-section";
import { SpeakerShowcase } from "@/components/sections/speaker-showcase";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { LogoCloudSection } from "@/components/sections/logo-cloud-section";
import { StatsSection } from "@/components/sections/stats-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoCloudSection />
      <StatsSection />
      <CredentialsSection />
      <SpeakerShowcase />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
