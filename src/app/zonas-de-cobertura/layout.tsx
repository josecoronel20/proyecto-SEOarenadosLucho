import type { Metadata } from "next"
import { PROJECT } from "@/config/project"

export const metadata: Metadata = {
  title: "Zonas de Cobertura | Arenado Profesional en Pilar, Zona Norte y CABA | Arenados Lucho",
  description: "Servicio móvil de arenado profesional en Pilar, Zona Norte, Oeste y CABA. Cobertura en +30 localidades con equipos móviles. Presupuesto gratuito en 24hs. +20 años de experiencia local.",
  keywords: `${PROJECT.seo.primaryKeywords.join(", ")}, ${PROJECT.seo.secondaryKeywords.join(", ")}, ${PROJECT.seo.longTailKeywords.join(", ")}, zonas de cobertura, servicio móvil, arenado a domicilio, cobertura Buenos Aires`,
  authors: [{ name: PROJECT.name }],
  openGraph: {
    title: "Zonas de Cobertura | Arenado Profesional en Pilar y GBA | Arenados Lucho",
    description: "Servicio móvil de arenado profesional. Cobertura en Pilar, Zona Norte, Oeste y CABA con equipos de última generación. Presupuesto gratuito en 24hs.",
    type: "website",
    locale: "es_AR",
    url: "https://www.arenadoslucho.com.ar/zonas-de-cobertura",
    siteName: PROJECT.name,
    images: [{
      url: '/images/portada-hero-arenados-lucho.webp',
      width: 1200,
      height: 630,
      alt: 'Zonas de Cobertura - Arenados Lucho - Servicio móvil de arenado profesional'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Zonas de Cobertura | Arenado Profesional en Pilar y GBA",
    description: "Servicio móvil de arenado profesional. Cobertura en Pilar, Zona Norte, Oeste y CABA con equipos de última generación.",
    images: ['/images/portada-hero-arenados-lucho.webp'],
  },
  alternates: {
    canonical: "https://www.arenadoslucho.com.ar/zonas-de-cobertura"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'AR-B',
    'geo.placename': 'Pilar',
    'geo.position': '-34.4587;-58.9142',
    'ICBM': '-34.4587, -58.9142'
  }
}

// JSON-LD Structured Data for Coverage Areas Page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Servicio de Arenado Móvil",
  "description": "Servicio profesional de arenado móvil con cobertura en Pilar, Zona Norte, Oeste y CABA",
  "url": "https://www.arenadoslucho.com.ar/zonas-de-cobertura",
  "provider": {
    "@type": "LocalBusiness",
    "name": PROJECT.name,
    "url": "https://www.arenadoslucho.com.ar",
    "telephone": PROJECT.contact.phone,
    "email": PROJECT.contact.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pilar",
      "addressRegion": "Buenos Aires",
      "addressCountry": "AR"
    },
    "areaServed": PROJECT.coverage.all.map(city => ({
      "@type": "City",
      "name": city
    }))
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "-34.4587",
      "longitude": "-58.9142"
    },
    "geoRadius": "50000"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://www.arenadoslucho.com.ar"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Zonas de Cobertura",
        "item": "https://www.arenadoslucho.com.ar/zonas-de-cobertura"
      }
    ]
  }
}

export default function ZonasCoberturaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  )
}
