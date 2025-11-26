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
  title: "Arenado de Vehículos en Zona Norte, Oeste y CABA | Arenados Lucho",
  description: "Arenado de vehículos en Zona Norte, Oeste y CABA. Removemos pintura, óxido y corrosión. Servicio móvil. Presupuesto gratuito.",
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