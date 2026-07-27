import { HeroSection } from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import { IntroductionSection } from "@/components/home/IntroductionSection";
import ValueBullets from "@/components/home/ValueBullets";
import ProjectsSection from "@/components/home/ProjectsSection";
import ServicesSection from "@/components/home/ServicesSection";
import CTASection from "@/components/common/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <IntroductionSection />
      <ProjectsSection />
      <ServicesSection />
      <ValueBullets />
      <CTASection />
    </>
  );
}
