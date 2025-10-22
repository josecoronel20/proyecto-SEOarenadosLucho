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
  title: "Arenado Industrial en Pilar y Zona Norte | Servicio Profesional para Maquinaria Pesada - Cotizá Online",
  description: "Arenado industrial en Pilar, San Isidro y Zona Norte. Limpieza de maquinaria pesada, estructuras metálicas y equipos industriales. Servicio móvil a domicilio. Presupuesto gratuito por WhatsApp.",
  keywords: "arenado industrial Pilar, granallado industrial Zona Norte, limpieza maquinaria pesada Buenos Aires, arenado estructuras metálicas, mantenimiento industrial, equipos industriales",
}

export default function ArenadoIndustrialPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumbs segments={[{ label: 'Servicios', href: '/servicios' }, { label: 'Arenado industrial' }]} />
      
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