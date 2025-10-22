import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { HeroSection } from "./componentes/HeroSection"
import { WhySanFernandoSection } from "./componentes/WhySanFernandoSection"
import { ServicesSection } from "./componentes/ServicesSection"
import { SanFernandoInfoSection } from "./componentes/SanFernandoInfoSection"
import { TestimonialsSection } from "./componentes/TestimonialsSection"
import { ContactCTASection } from "./componentes/ContactCTASection"

export default function SanFernandoPage() {
  return (
    <main className="min-h-screen" role="main" aria-label="Página de arenado en San Fernando">
      <Breadcrumbs segments={[{ label: 'Zonas de cobertura', href: '/zonas-de-cobertura' }, { label: 'Zona Norte', href: '/zonas-de-cobertura/zona-norte' }, { label: 'San Fernando' }]} />
      
      <HeroSection />
      <WhySanFernandoSection />
      <ServicesSection />
      <SanFernandoInfoSection />
      <TestimonialsSection />
      <ContactCTASection />
    </main>
  )
}
