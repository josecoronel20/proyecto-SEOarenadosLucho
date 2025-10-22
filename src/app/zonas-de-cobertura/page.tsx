import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { HeroSection } from "./componentes/HeroSection"
import { CoverageZonesSection } from "./componentes/CoverageZonesSection"
import { ContactCTASection } from "./componentes/ContactCTASection"
import { BenefitsSection } from "./componentes/BenefitsSection"

export default function ZonasCoberturaPage() {
  return (
    <main className="min-h-screen" role="main" aria-label="Página de zonas de cobertura">
      <Breadcrumbs segments={[{ label: 'Zonas de cobertura' }]} />
      
      <HeroSection />
      <CoverageZonesSection />
      <ContactCTASection />
      <BenefitsSection />
    </main>
  )
}
