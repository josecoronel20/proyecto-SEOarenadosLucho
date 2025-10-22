import type { Metadata } from "next"
import { PROJECT } from "@/config/project"

export const metadata: Metadata = {
  title: "Arenado en Zona Oeste | Morón, Moreno, General Rodríguez - Arenados Lucho",
  description: "Servicio de arenado móvil en Zona Oeste: Morón, Moreno, General Rodríguez, Ituzaingó, Hurlingham y más. Presupuesto gratuito. Respuesta en 24h. +20 años de experiencia local.",
  keywords: `${PROJECT.seo.primaryKeywords.join(", ")}, ${PROJECT.seo.secondaryKeywords.join(", ")}, ${PROJECT.seo.longTailKeywords.join(", ")}, arenado Morón, arenado Moreno, arenado General Rodríguez, arenado Ituzaingó, arenado Hurlingham, arenado Zona Oeste, sandblasting Morón, arenado 3 de Febrero`,
  authors: [{ name: PROJECT.name }],
  openGraph: {
    title: "Arenado en Zona Oeste | Morón, Moreno, General Rodríguez - Arenados Lucho",
    description: "Servicio de arenado móvil en Zona Oeste: Morón, Moreno, General Rodríguez y más. Presupuesto gratuito. Respuesta en 24h.",
    type: "website",
    locale: "es_AR",
    url: "https://www.arenadoslucho.com.ar/zonas-de-cobertura/zona-oeste",
    siteName: PROJECT.name,
    images: [{
      url: '/images/portada-hero-arenados-lucho.webp',
      width: 1200,
      height: 630,
      alt: 'Arenado en Zona Oeste - Arenados Lucho - Servicio móvil profesional'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Arenado en Zona Oeste | Morón, Moreno, General Rodríguez",
    description: "Servicio de arenado móvil en Zona Oeste: Morón, Moreno, General Rodríguez y más. Presupuesto gratuito.",
    images: ['/images/portada-hero-arenados-lucho.webp'],
  },
  alternates: {
    canonical: "https://www.arenadoslucho.com.ar/zonas-de-cobertura/zona-oeste"
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
    'geo.placename': 'Zona Oeste',
    'geo.position': '-34.6000;-58.7000',
    'ICBM': '-34.6000, -58.7000'
  }
}

// JSON-LD Structured Data for Zona Oeste Page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Servicio de Arenado en Zona Oeste",
  "description": "Servicio profesional de arenado móvil en Zona Oeste del Gran Buenos Aires",
  "url": "https://www.arenadoslucho.com.ar/zonas-de-cobertura/zona-oeste",
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
    "areaServed": PROJECT.coverage.zonaOeste.map(city => ({
      "@type": "City",
      "name": city
    }))
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "-34.6000",
      "longitude": "-58.7000"
    },
    "geoRadius": "30000"
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Zona Oeste",
        "item": "https://www.arenadoslucho.com.ar/zonas-de-cobertura/zona-oeste"
      }
    ]
  }
}

export default function ZonaOesteLayout({
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
