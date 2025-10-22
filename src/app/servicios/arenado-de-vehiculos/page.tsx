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
  title: "Arenado de Vehículos en Pilar y Zona Norte | Servicio Automotriz Profesional - Cotizá Online",
  description: "Arenado de vehículos en Pilar, San Isidro y Zona Norte. Remoción de pintura, óxido y preparación para pintura automotriz. Servicio móvil a domicilio. Presupuesto gratuito por WhatsApp.",
  keywords: "arenado vehiculos Pilar, remocion pintura auto Zona Norte, restauracion automotriz Buenos Aires, arenado carroceria, preparacion pintura vehiculos, sandblasting auto",
}

export default function ArenadoVehiculosPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumbs segments={[{ label: 'Servicios', href: '/servicios' }, { label: 'Arenado de vehículos' }]} />
      
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