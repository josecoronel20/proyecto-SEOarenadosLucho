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
  title: "Servicio de Pintura en Pilar y Zona Norte | Pintura Epoxi y Anticorrosiva",
  description: "Servicio profesional de pintura en Pilar, Zona Norte y CABA. Pintura epoxi, anticorrosiva y para fachadas. Preparación con arenado previo. Presupuesto gratuito por WhatsApp.",
  keywords: "pintura Pilar, pintura epoxi, pintura anticorrosiva, servicio pintura Zona Norte, pintura fachadas, pintura automotriz",
}

export default function PinturaPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumbs segments={[{ label: 'Servicios', href: '/servicios' }, { label: 'Pintura' }]} />
      
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

