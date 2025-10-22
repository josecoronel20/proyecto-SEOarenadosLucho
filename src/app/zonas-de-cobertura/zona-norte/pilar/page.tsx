import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { HeroSection } from "./componentes/HeroSection"
import { WhyPilarSection } from "./componentes/WhyPilarSection"
import { ServicesSection } from "./componentes/ServicesSection"
import { PilarInfoSection } from "./componentes/PilarInfoSection"
import { TestimonialsSection } from "./componentes/TestimonialsSection"
import { ContactCTASection } from "./componentes/ContactCTASection"

export default function PilarPage() {
  return (
    <main className="min-h-screen" role="main" aria-label="Página de arenado en Pilar">
      <Breadcrumbs segments={[{ label: 'Zonas de cobertura', href: '/zonas-de-cobertura' }, { label: 'Zona Norte', href: '/zonas-de-cobertura/zona-norte' }, { label: 'Pilar' }]} />
      
      <HeroSection />
      <WhyPilarSection />
      <ServicesSection />
      <PilarInfoSection />
      <TestimonialsSection />
      <ContactCTASection />
    </main>
  )
}
