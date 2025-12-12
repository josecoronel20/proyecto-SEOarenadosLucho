import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { HeroSection } from "../../componentes/HeroSection"
import { BenefitsSection } from "../../componentes/BenefitsSection"
import { ProcessSection } from "../../componentes/ProcessSection"
import { TreatmentTypesSection } from "../../componentes/TreatmentTypesSection"
import { GallerySection } from "../../componentes/GallerySection"
import { CoverageAreasSection } from "../../componentes/CoverageAreasSection"
import { FAQSection } from "../../componentes/FAQSection"
import { ReviewsSection } from "../../componentes/ReviewsSection"
import { FinalCTASection } from "../../componentes/FinalCTASection"
import { CheckCircle, Sparkles, PaintBucket, Gauge, Shield, Wrench, ClipboardCheck, Trash2 } from "lucide-react"
import type { Metadata } from "next"
import servicesData from "@/data/services.json"

// Helper para mapear nombres de iconos a componentes
const iconMap: { [key: string]: React.ReactNode } = {
  Sparkles: <Sparkles className="h-6 w-6 text-blue-500" />,
  PaintBucket: <PaintBucket className="h-6 w-6 text-blue-500" />,
  Gauge: <Gauge className="h-6 w-6 text-blue-500" />,
  Shield: <Shield className="h-6 w-6 text-blue-500" />,
  Wrench: <Wrench className="h-6 w-6 text-blue-500" />,
  ClipboardCheck: <ClipboardCheck className="h-8 w-8 text-white" />,
  Trash2: <Trash2 className="h-8 w-8 text-white" />,
  CheckCircle: <CheckCircle className="h-8 w-8 text-white" />,
}

// Obtener el contenido del servicio
function getServiceContent() {
  const service = servicesData.services.find(s => s.id === "arenado-muebles")
  if (!service?.pageContent) {
    throw new Error("Service content not found for arenado-muebles")
  }
  return service.pageContent
}

const serviceContent = getServiceContent()

export const metadata: Metadata = {
  title: serviceContent.metadata.title,
  description: serviceContent.metadata.description,
  keywords: serviceContent.metadata.keywords,
}

export default function ArenadoMueblesPage() {
  // Mapear beneficios con iconos
  const benefits = serviceContent.benefits.items.map(benefit => ({
    icon: iconMap[benefit.icon] || <Sparkles className="h-6 w-6 text-blue-500" />,
    title: benefit.title,
    description: benefit.description
  }))

  // Mapear proceso con iconos
  const process = serviceContent.process.steps.map(step => ({
    step: step.step,
    icon: iconMap[step.icon] || <CheckCircle className="h-8 w-8 text-white" />,
    title: step.title,
    description: step.description
  }))

  return (
    <div className="min-h-screen">
      <Breadcrumbs segments={[{ label: 'Servicios', href: '/servicios' }, { label: 'Arenado de superficies de madera' }]} />
      
      <HeroSection
        title={serviceContent.hero.title}
        titleHighlight={serviceContent.hero.titleHighlight}
        description={serviceContent.hero.description}
        heroImage="/images/servicios/servicio-arenado-superficie-madera-pilar.png"
        heroImageAlt="Arenado profesional de muebles de madera en Pilar"
      />
      <BenefitsSection
        title={serviceContent.benefits.title}
        subtitle={serviceContent.benefits.subtitle}
        benefits={benefits}
      />
      <ProcessSection
        title={serviceContent.process.title}
        subtitle={serviceContent.process.subtitle}
        process={process}
      />
      <TreatmentTypesSection
        title={serviceContent.treatments.title}
        subtitle={serviceContent.treatments.subtitle}
        treatments={serviceContent.treatments.items}
        helpText={serviceContent.treatments.helpText}
      />
      <GallerySection
        title={serviceContent.gallery.title}
        subtitle={serviceContent.gallery.subtitle}
        category={serviceContent.gallery.category}
      />
      <CoverageAreasSection
        title={serviceContent.coverage.title}
        subtitle={serviceContent.coverage.subtitle}
        coverageAreas={serviceContent.coverage.zones}
      />
      <FAQSection
        title={serviceContent.faq.title}
        subtitle={serviceContent.faq.subtitle}
        faqs={serviceContent.faq.items}
      />
      <ReviewsSection
        title={serviceContent.reviews.title}
        subtitle={serviceContent.reviews.subtitle}
        reviews={serviceContent.reviews.items}
        ctaTitle={serviceContent.reviews.ctaTitle}
        ctaDescription={serviceContent.reviews.ctaDescription}
      />
      <FinalCTASection
        title={serviceContent.finalCTA.title}
        description={serviceContent.finalCTA.description}
        benefits={serviceContent.finalCTA.benefits}
        whatsappTitle={serviceContent.finalCTA.whatsappTitle}
        whatsappDescription={serviceContent.finalCTA.whatsappDescription}
        formTitle={serviceContent.finalCTA.formTitle}
        formDescription={serviceContent.finalCTA.formDescription}
        bottomTitle={serviceContent.finalCTA.bottomTitle}
        bottomDescription={serviceContent.finalCTA.bottomDescription}
      />
    </div>
  )
}

