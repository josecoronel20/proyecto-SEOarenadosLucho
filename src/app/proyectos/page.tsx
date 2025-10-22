import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { HeroSection } from "./componentes/HeroSection"
import { StatsSection } from "./componentes/StatsSection"
import { ProjectsGallerySection } from "./componentes/ProjectsGallerySection"
import { ProcessSection } from "./componentes/ProcessSection"
import { WhyChooseSection } from "./componentes/WhyChooseSection"
import { TestimonialsSection } from "./componentes/TestimonialsSection"
import { FinalCTASection } from "./componentes/FinalCTASection"

export default function ProyectosPage() {
  return (
    <main className="min-h-screen" role="main" aria-label="Página de proyectos de arenado">
      <Breadcrumbs segments={[{ label: 'Proyectos de Arenado en Pilar y Zona Norte' }]} />
      
      <HeroSection />
      <StatsSection />
      <ProjectsGallerySection />
      <ProcessSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <FinalCTASection />
    </main>
  )
}
