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
  title: "Arenado de Fachadas en Pilar y Zona Norte | Limpieza Profesional de Edificios Residenciales y Comerciales - Cotizá Online",
  description: "Arenado de fachadas en Pilar, San Isidro y Zona Norte. Limpieza profesional de fachadas residenciales y comerciales. Eliminación de pintura antigua y preparación para pintura exterior. Presupuesto gratuito por WhatsApp.",
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