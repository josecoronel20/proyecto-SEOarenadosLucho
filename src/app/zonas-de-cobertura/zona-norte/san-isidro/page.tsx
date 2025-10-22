import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { HeroSection } from "./componentes/HeroSection"
import { WhySanIsidroSection } from "./componentes/WhySanIsidroSection"
import { ServicesSection } from "./componentes/ServicesSection"
import { SanIsidroInfoSection } from "./componentes/SanIsidroInfoSection"
import { TestimonialsSection } from "./componentes/TestimonialsSection"
import { ContactCTASection } from "./componentes/ContactCTASection"

export default function SanIsidroPage() {
  return (
    <main className="min-h-screen" role="main" aria-label="Página de arenado premium en San Isidro">
      <Breadcrumbs segments={[{ label: 'Zonas de cobertura', href: '/zonas-de-cobertura' }, { label: 'Zona Norte', href: '/zonas-de-cobertura/zona-norte' }, { label: 'San Isidro' }]} />
      
      <HeroSection />
      <WhySanIsidroSection />
      <ServicesSection />
      <SanIsidroInfoSection />
      <TestimonialsSection />
      <ContactCTASection />
    </main>
  )
}
