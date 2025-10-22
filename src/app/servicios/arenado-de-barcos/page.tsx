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
  title: "Arenado de Barcos en Tigre y Zona Norte | Servicios Navales Profesionales - Cotizá Online",
  description: "Arenado de barcos, cascos y embarcaciones en Tigre, San Fernando y Zona Norte. Mantenimiento naval especializado, eliminación de incrustaciones marinas y preparación para pintura. Presupuesto gratuito por WhatsApp.",
  keywords: "arenado barcos Tigre, arenado barcos Zona Norte, mantenimiento naval Buenos Aires, cascos barcos, embarcaciones, incrustaciones marinas, pintura, arenado Nordelta",
}

export default function ArenadoBarcosPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumbs segments={[{ label: 'Servicios', href: '/servicios' }, { label: 'Arenado de barcos' }]} />
      
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