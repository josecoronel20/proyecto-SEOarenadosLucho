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
  title: "Arenado de Muebles en Pilar y Zona Norte | Restauración Profesional de Muebles de Madera y Metal - Cotizá Online",
  description: "Arenado de muebles en Pilar, San Isidro y Zona Norte. Restauración profesional de muebles de madera y metal. Eliminación de pintura antigua y preparación para barnizado. Presupuesto gratuito por WhatsApp.",
  keywords: "arenado muebles Pilar, arenado muebles madera Zona Norte, restauracion muebles Buenos Aires, despintado muebles, barnizado muebles, muebles antiguos",
}

export default function ArenadoMueblesPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumbs segments={[{ label: 'Servicios', href: '/servicios' }, { label: 'Arenado de muebles' }]} />
      
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