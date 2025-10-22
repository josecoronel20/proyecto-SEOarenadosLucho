import { Header } from "@/components/headerComponents/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { HeroSection } from "@/components/homeComponents/HeroSection"
import { ServicesSection } from "@/components/homeComponents/ServicesSection"
import { ProjectsSection } from "@/components/homeComponents/ProjectsSection"
import { QuoteFormSection } from "@/components/common/QuoteFormSection"
import { CoverageSection } from "@/components/homeComponents/CoverageSection"
import { FAQSection } from "@/components/homeComponents/FAQSection"
import { TrustSection } from "@/components/homeComponents/TrustSection"

export default function HomePage() {
  return (
    <>
      <Breadcrumbs segments={[]} />
      
      <main className="min-h-screen">
        <h1 className="sr-only">Arenado y granallado profesional en Pilar y Zona Norte - Arenados Lucho</h1>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <QuoteFormSection />
        <CoverageSection />
        <FAQSection />
        <TrustSection />
      </main>
    </>
  )
}
