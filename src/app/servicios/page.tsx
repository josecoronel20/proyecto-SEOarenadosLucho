import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { ServiciosHeroSection } from "@/components/serviciosComponents/ServiciosHeroSection"
import { ServiciosSection } from "@/components/serviciosComponents/ServiciosSection"
import { MaquinariaSection } from "@/components/serviciosComponents/MaquinariaSection"
import { BenefitsSection } from "@/components/serviciosComponents/BenefitsSection"
import { ContactCTA } from "@/components/serviciosComponents/ContactCTA"

export default function ServiciosPage() {
  return (
    <>
      <Breadcrumbs segments={[{ label: 'Servicios' }]} />
      
      <main className="min-h-screen">
        <ServiciosHeroSection />
        <ServiciosSection />
        <MaquinariaSection />
        <BenefitsSection />
        <ContactCTA />
      </main>
    </>
  )
}

// JSON-LD Schema - Removed duplicate metadata export

// Schema.org JSON-LD
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Arenados Lucho",
  "description": "Servicios profesionales de arenado, granallado y limpieza de superficies",
  "url": "https://tudominio.com/servicios",
  "telephone": "+54-11-1234-5678",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Buenos Aires",
    "addressRegion": "Buenos Aires",
    "addressCountry": "AR"
  },
  "areaServed": [
    "Pilar", "Zona Norte", "San Isidro", "Tigre", "Zona Oeste", "Morón", "La Plata", "CABA"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Arenado",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Arenado de piscinas",
        "description": "Limpieza profunda y preparación de superficies para pintura o revestimiento",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Arenados Lucho"
        }
      },
      {
        "@type": "Service", 
        "name": "Arenado industrial",
        "description": "Limpieza y preparación de estructuras metálicas, maquinarias y obras industriales",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Arenados Lucho"
        }
      },
      {
        "@type": "Service",
        "name": "Arenado de vehículos", 
        "description": "Remoción de pintura y óxido en autos, camiones y chasis",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Arenados Lucho"
        }
      },
      {
        "@type": "Service",
        "name": "Arenado de muebles",
        "description": "Restauración y despintado de muebles con acabado fino",
        "provider": {
          "@type": "LocalBusiness", 
          "name": "Arenados Lucho"
        }
      }
    ]
  }
}

// Agregar al head del layout o usar next/head
export function generateMetadata() {
  return {
    title: "Arenado y Granallado · Servicios – Arenado Pilar y Zona Norte",
    description: "Servicios de arenado, granallado, sandblasting y limpieza de superficies para piletas, industria, vehículos y muebles en Pilar, Zona Norte, San Isidro, Tigre y CABA. Trabajo in situ y en taller. Pedí presupuesto rápido por WhatsApp.",
    keywords: "arenado, granallado, sandblasting, limpieza industrial, piletas, industria, vehículos, muebles, Pilar, Zona Norte, San Isidro, Tigre, CABA, Buenos Aires, preparación para pintura, servicio móvil",
    alternates: {
      canonical: "https://tudominio.com/servicios"
    },
    openGraph: {
      title: "Arenado y Granallado · Servicios – Arenado Pilar y Zona Norte",
      description: "Servicios de arenado, granallado, sandblasting y limpieza de superficies para piletas, industria, vehículos y muebles en Pilar, Zona Norte, San Isidro, Tigre y CABA.",
      type: "website",
      locale: "es_AR",
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData)
    }
  }
}