import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { HeroSection } from "./componentes/HeroSection"
import { BenefitsSection } from "./componentes/BenefitsSection"
import { ProcessSection } from "./componentes/ProcessSection"
import { CoverageAreasSection } from "./componentes/CoverageAreasSection"
import { BeforeAfterSection } from "./componentes/BeforeAfterSection"
import { QuoteFormSection } from "@/components/common/QuoteFormSection"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import { Suspense } from "react"

const SITE_URL = "https://www.arenadoslucho.com.ar"

export const metadata: Metadata = {
  title: "Arenado Industrial en CABA, Zona Norte y Oeste | Granallado y Tratamiento Anticorrosivo",
  description:
    "Arenado industrial profesional. Granallado y tratamiento anticorrosivo para industrias y grandes estructuras. Servicio móvil en CABA, Zona Norte y Oeste. Solicite presupuesto.",
  keywords: [
    "arenado industrial",
    "granallado industrial",
    "tratamiento anticorrosivo",
    "arenado metalúrgico",
    "arenado industrial CABA",
    "arenado industrial Zona Norte",
    "arenado industrial Zona Oeste",
    "granallado estructuras",
    "tratamiento superficies industriales",
    "arenado maquinaria industrial"
  ].join(", "),
  alternates: {
    canonical: `${SITE_URL}/servicios/arenado-industrial`,
  },
  openGraph: {
    title: "Arenado Industrial en CABA, Zona Norte y Oeste | Granallado y Tratamiento Anticorrosivo",
    description:
      "Arenado industrial profesional. Granallado y tratamiento anticorrosivo para industrias y grandes estructuras. Servicio móvil.",
    url: `${SITE_URL}/servicios/arenado-industrial`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arenado Industrial | Granallado y Tratamiento Anticorrosivo",
    description:
      "Arenado industrial profesional. Granallado y tratamiento anticorrosivo para industrias y grandes estructuras.",
  },
}

// Generate LocalBusiness and Service schema
function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Arenado Industrial",
    "provider": {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}#business`,
      "name": "Arenados Lucho",
      "url": SITE_URL,
      "telephone": "+54 9 11 2378-7750",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pilar",
        "addressRegion": "Buenos Aires",
        "addressCountry": "AR",
      },
      "areaServed": [
        { "@type": "City", "name": "Pilar" },
        { "@type": "City", "name": "San Isidro" },
        { "@type": "City", "name": "Tigre" },
        { "@type": "City", "name": "Morón" },
        { "@type": "City", "name": "CABA" }
      ]
    },
    "description": "Servicio profesional de arenado industrial. Granallado y tratamiento anticorrosivo para industrias, grandes estructuras y maquinarias. Preparación de superficies para pintura o recubrimientos industriales. Servicio móvil y en taller.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Arenado Industrial",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Arenado industrial",
            "description": "Granallado y tratamiento anticorrosivo para industrias y grandes estructuras. Preparación de superficies para pintura o recubrimientos industriales."
          }
        }
      ]
    }
  }
}

const structuredData = generateStructuredData()

export default function ArenadoIndustrialPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main className="min-h-screen">
        <Breadcrumbs segments={[
          { label: "Servicios", href: "/servicios" },
          { label: "Arenado industrial" }
        ]} />
        
        {/* Hero con H1 exacto y CTA */}
        <HeroSection />
        
        {/* Beneficios del arenado industrial */}
        <BenefitsSection />
        
        {/* Resultados reales - Antes/después */}
        <BeforeAfterSection />
        
        {/* CTA después de resultados */}
        <div className="py-12 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              ¿Necesita arenado industrial para su empresa?
            </h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Solicite un presupuesto personalizado para su proyecto industrial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold" asChild>
                <a href="#cotizar">
                  Solicitar presupuesto
                </a>
              </Button>
              <WhatsAppButton />
            </div>
          </div>
        </div>
        
        {/* Proceso del arenado */}
        <ProcessSection />
        
        {/* Zonas de cobertura - Local SEO */}
        <CoverageAreasSection />
        
        {/* Formulario */}
        <Suspense fallback={<div className="py-16 bg-white"><div className="container mx-auto px-4 text-center">Cargando formulario...</div></div>}>
          <QuoteFormSection />
        </Suspense>
      </main>
    </>
  )
}
