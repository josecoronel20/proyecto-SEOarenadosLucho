import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { HeroSection } from "./componentes/HeroSection"
import { PrimaryAreasSection } from "./componentes/PrimaryAreasSection"
import { OtherAreasSection } from "./componentes/OtherAreasSection"
import { ServicesSection } from "./componentes/ServicesSection"
import { ContactCTASection } from "./componentes/ContactCTASection"

export default function ZonaOestePage() {
  return (
    <main className="min-h-screen" role="main" aria-label="Página de zona oeste">
      <Breadcrumbs segments={[{ label: 'Zonas de cobertura', href: '/zonas-de-cobertura' }, { label: 'Zona Oeste' }]} />
      
      <HeroSection />
      <PrimaryAreasSection />
      <OtherAreasSection />
      <ServicesSection />
      <ContactCTASection />
    </main>
  )
}
