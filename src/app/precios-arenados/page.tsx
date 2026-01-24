import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { HeroSection } from "./componentes/HeroSection"
import { PriceFactorsSection } from "./componentes/PriceFactorsSection"
import { FAQSection } from "./componentes/FAQSection"
import { QuoteFormSection } from "@/components/common/QuoteFormSection"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"
import { Button } from "@/components/ui/button"
import { Suspense } from "react"

const SITE_URL = "https://www.arenadoslucho.com.ar"

export const metadata: Metadata = {
  title: "Precio de Arenado: Cotización según Superficie y Tipo de Trabajo | Arenados Lucho",
  description:
    "Precio de arenado: cotización personalizada según superficie, tipo de material, accesibilidad y zona. Factores que determinan el costo. Solicite presupuesto gratuito.",
  keywords: [
    "precio de arenado",
    "arenado precio",
    "precio por m2 arenado",
    "presupuesto arenado",
    "cotización arenado",
    "precio arenado CABA",
    "precio arenado Zona Norte",
    "precio arenado Zona Oeste",
    "cuanto cuesta arenado",
  ].join(", "),
  alternates: {
    canonical: `${SITE_URL}/precios-arenados`,
  },
  openGraph: {
    title: "Precio de Arenado: Cotización según Superficie y Tipo de Trabajo",
    description:
      "Precio de arenado: cotización personalizada según superficie, tipo de material, accesibilidad y zona. Factores que determinan el costo.",
    url: `${SITE_URL}/precios-arenados`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Precio de Arenado | Cotización Personalizada",
    description:
      "Precio de arenado: cotización personalizada según superficie, tipo de material, accesibilidad y zona.",
  },
}

// Generate FAQPage schema
function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cómo se calcula el precio por m2 de arenado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El precio por m2 de arenado no es fijo, depende de varios factores como el tipo de material, estado superficial, accesibilidad, si el trabajo se realiza in situ o en taller, la zona geográfica, y los plazos requeridos. Cada proyecto se cotiza de forma personalizada."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué factores aumentan o reducen el costo del arenado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los factores que influyen en el costo incluyen: tipo de material (metal, madera, concreto), estado superficial (cantidad de capas de pintura, óxido), accesibilidad del área, si requiere trabajo in situ o puede realizarse en taller, metros cuadrados, urgencia del trabajo, y la zona geográfica (CABA, Zona Norte, Zona Oeste)."
        }
      },
      {
        "@type": "Question",
        "name": "¿Es más económico traer el trabajo al taller?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generalmente, trabajar en taller puede ser más económico ya que no requiere movilidad de equipos y permite mejor control del proceso. Sin embargo, para grandes estructuras o cuando no es posible mover las piezas, el servicio móvil es la opción adecuada. Cada caso se evalúa individualmente."
        }
      },
      {
        "@type": "Question",
        "name": "¿Afecta la zona (CABA, Norte, Oeste) al precio del arenado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, la zona puede influir en el precio debido a los costos de movilidad y desplazamiento de equipos. Trabajamos en CABA, Zona Norte y Zona Oeste. El costo de movilidad se incluye en la cotización personalizada según la ubicación específica del proyecto."
        }
      }
    ]
  }
}

const structuredData = generateStructuredData()

export default function PreciosArenadosPage() {
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
          { label: "Precios de arenado" }
        ]} />
        
        {/* Hero con H1 exacto y CTA */}
        <HeroSection />
        
        {/* Sección de factores de precio */}
        <PriceFactorsSection />
        
        {/* FAQ sobre precios */}
        <FAQSection />

        
        {/* Formulario */}
        <Suspense fallback={<div className="py-16 bg-white"><div className="container mx-auto px-4 text-center">Cargando formulario...</div></div>}>
          <QuoteFormSection />
        </Suspense>
      </main>
    </>
  )
}

