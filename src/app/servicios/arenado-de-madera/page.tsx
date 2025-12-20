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
  title: "Arenado de Madera en CABA, Zona Norte y Oeste | Restauración de Muebles",
  description:
    "Arenado profesional de madera. Decapado y restauración de muebles y superficies de madera. Quita pintura vieja sin dañar la madera. Precio competitivo. Servicio móvil en CABA, Zona Norte y Oeste. Cotizá gratis.",
  keywords: [
    "arenado de madera",
    "decapado de madera",
    "restauración muebles",
    "arenado en madera",
    "arenado madera CABA",
    "arenado madera Zona Norte",
    "arenado madera Zona Oeste",
    "decapado muebles",
    "restauración muebles madera",
    "arenado superficies madera"
  ].join(", "),
  alternates: {
    canonical: `${SITE_URL}/servicios/arenado-de-madera`,
  },
  openGraph: {
    title: "Arenado de Madera en CABA, Zona Norte y Oeste | Restauración de Muebles",
    description:
      "Arenado profesional de madera. Decapado y restauración de muebles y superficies de madera. Quita pintura vieja sin dañar la madera. Precio competitivo. Servicio móvil.",
    url: `${SITE_URL}/servicios/arenado-de-madera`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arenado de Madera | Restauración de Muebles Profesional",
    description:
      "Arenado profesional de madera. Decapado y restauración de muebles y superficies de madera. Quita pintura vieja sin dañar la madera.",
  },
}

// Generate LocalBusiness and Service schema
function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Arenado de Madera",
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
    "description": "Servicio profesional de arenado de madera. Quita todas las capas de pintura vieja de muebles y superficies de madera sin dañar la madera. Deja la superficie nueva lista para barniz o pintura. Durabilidad por varios años.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Arenado de Madera",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Arenado de madera",
            "description": "Quita pintura vieja de muebles y superficies de madera sin dañar la madera. Deja superficie nueva lista para barniz o pintura."
          }
        }
      ]
    }
  }
}

const structuredData = generateStructuredData()

export default function ArenadoDeMaderaPage() {
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
          { label: "Arenado de madera" }
        ]} />
        
        {/* Hero con H1 exacto y CTA */}
        <HeroSection />
        
        {/* Beneficios del arenado de madera */}
        <BenefitsSection />
        
        {/* Resultados reales - Antes/después */}
        <BeforeAfterSection />
        
        {/* CTA después de resultados */}
        <div className="py-12 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              ¿Listo para restaurar tus muebles?
            </h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Cotizá tu proyecto ahora y deja tus muebles como nuevos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold" asChild>
                <a href="#cotizar">
                  Cotizá tu proyecto
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
