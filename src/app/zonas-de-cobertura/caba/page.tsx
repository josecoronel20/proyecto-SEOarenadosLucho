import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { HeroSection } from "./componentes/HeroSection"
import { PopularBarriosSection } from "./componentes/PopularBarriosSection"
import { AllBarriosSection } from "./componentes/AllBarriosSection"
import { ServicesSection } from "./componentes/ServicesSection"
import { SpecialConsiderationsSection } from "./componentes/SpecialConsiderationsSection"
import { ContactCTASection } from "./componentes/ContactCTASection"

export default function CABAPage() {
  return (
    <main className="min-h-screen" role="main" aria-label="Página de CABA">
      <Breadcrumbs segments={[{ label: 'Zonas de cobertura', href: '/zonas-de-cobertura' }, { label: 'CABA' }]} />
      
      <HeroSection />
      <AllBarriosSection />
      <ServicesSection />
      <SpecialConsiderationsSection />
      <ContactCTASection />
    </main>
  )
}
