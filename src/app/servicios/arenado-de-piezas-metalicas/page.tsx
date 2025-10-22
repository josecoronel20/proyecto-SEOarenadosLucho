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
  title: "Arenado de Piezas Metálicas en Pilar y Zona Norte | Servicio Industrial Profesional - Cotizá Online",
  description: "Arenado de piezas metálicas en Pilar, San Isidro y Zona Norte. Eliminación de óxido, corrosión y preparación para galvanizado. Servicio industrial especializado. Presupuesto gratuito por WhatsApp.",
  keywords: "arenado piezas metalicas Pilar, arenado industrial Zona Norte, galvanizado Buenos Aires, arenado piezas, preparacion galvanizado, sandblasting industrial",
}

export default function ArenadoPiezasMetalicasPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumbs segments={[{ label: 'Servicios', href: '/servicios' }, { label: 'Arenado de piezas metálicas' }]} />
      
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