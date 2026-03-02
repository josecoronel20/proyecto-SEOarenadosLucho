import { HeroSection } from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import { IntroductionSection } from "@/components/home/IntroductionSection";
import ValueBullets from "@/components/home/ValueBullets";
import ProjectsSection from "@/components/home/ProjectsSection";
import CTASection from "@/components/common/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <IntroductionSection />
      <ProjectsSection />
      <ValueBullets />
      <CTASection />
    </>
  );
}
