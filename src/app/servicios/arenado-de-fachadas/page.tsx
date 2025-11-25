import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { HeroSection } from "./componentes/HeroSection"
import { BenefitsSection } from "./componentes/BenefitsSection"
import { ProcessSection } from "./componentes/ProcessSection"
import { TreatmentTypesSection } from "./componentes/TreatmentTypesSection"
import { GallerySection } from "./componentes/GallerySection"
import { CoverageAreasSection } from "./componentes/CoverageAreasSection"
import { FAQSection } from "./componentes/FAQSection"
import { ReviewsSection } from "./componentes/ReviewsSection"
import { FinalCTASection } from "./componentes/FinalCTASection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado de Fachadas en Zona Norte, Oeste y CABA | Limpieza Profesional de Edificios - Cotizá Online",
  description: "Arenado de fachadas en Zona Norte, Oeste y CABA. Restauramos exteriores residenciales y comerciales eliminando pintura antigua y suciedad. Presupuesto gratuito por WhatsApp.",
  keywords: "arenado fachadas Pilar, arenado fachadas Zona Norte, limpieza fachadas Buenos Aires, restauracion fachadas, pintura fachadas, edificios residenciales",
}

export default function ArenadoFachadasPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumbs segments={[{ label: 'Servicios', href: '/servicios' }, { label: 'Arenado de fachadas' }]} />
      
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
      <TreatmentTypesSection />
      <GallerySection />
      <CoverageAreasSection />
      <FAQSection />
      <ReviewsSection />
      <FinalCTASection />
    </div>
  )
}