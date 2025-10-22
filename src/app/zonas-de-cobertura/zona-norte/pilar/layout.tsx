import type { Metadata } from "next"
import { PROJECT } from "@/config/project"

export const metadata: Metadata = {
  title: "Arenado en Pilar | Servicio Profesional de Sandblasting - Arenados Lucho",
  description: "Servicio de arenado móvil en Pilar. Base principal con respuesta inmediata. Arenado de piletas, vehículos, fachadas, industrial y más. Presupuesto gratuito. +10 años de experiencia local en Pilar.",
  keywords: `${PROJECT.seo.primaryKeywords.join(", ")}, ${PROJECT.seo.secondaryKeywords.join(", ")}, ${PROJECT.seo.longTailKeywords.join(", ")}, arenado Pilar, sandblasting Pilar, arenado de piletas Pilar, arenado de vehículos Pilar, arenado industrial Pilar, arenado de fachadas Pilar, arenado de barcos Pilar, arenado de muebles Pilar, granallado Pilar, limpieza profunda Pilar, servicio móvil Pilar, presupuesto arenado Pilar, base principal Pilar, respuesta inmediata Pilar`,
  authors: [{ name: PROJECT.name }],
  openGraph: {
    title: "Arenado en Pilar | Base Principal - Arenados Lucho",
    description: "Servicio de arenado móvil en Pilar. Base principal con respuesta inmediata. Especialistas en sandblasting profesional. Presupuesto gratuito.",
    type: "website",
    locale: "es_AR",
    url: "https://www.arenadoslucho.com.ar/zonas-de-cobertura/zona-norte/pilar",
    siteName: PROJECT.name,
    images: [{
      url: '/images/portada-hero-arenados-lucho.webp',
      width: 1200,
      height: 630,
      alt: 'Arenado en Pilar - Arenados Lucho - Base principal con respuesta inmediata'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Arenado en Pilar | Base Principal - Arenados Lucho",
    description: "Servicio de arenado móvil en Pilar. Base principal con respuesta inmediata. Especialistas en sandblasting profesional.",
    images: ['/images/portada-hero-arenados-lucho.webp'],
  },
  alternates: {
    canonical: "https://www.arenadoslucho.com.ar/zonas-de-cobertura/zona-norte/pilar"
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

// JSON-LD Structured Data for Pilar Page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Arenados Lucho - Pilar",
  "description": "Servicio profesional de arenado y sandblasting en Pilar. Base principal con respuesta inmediata y más de 10 años de experiencia local.",
  "url": "https://www.arenadoslucho.com.ar/zonas-de-cobertura/zona-norte/pilar",
  "telephone": PROJECT.contact.phone,
  "email": PROJECT.contact.email,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pilar",
    "addressRegion": "Buenos Aires",
    "addressCountry": "AR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-34.4587",
    "longitude": "-58.9142"
  },
  "areaServed": {
    "@type": "City",
    "name": "Pilar"
  },
  "serviceType": [
    "Arenado de Piletas",
    "Arenado de Vehículos", 
    "Arenado Industrial",
    "Arenado de Fachadas",
    "Arenado de Piezas Metálicas",
    "Arenado de Muebles",
    "Arenado de Barcos"
  ],
  "openingHours": "Mo-Sa 08:00-18:00",
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150"
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
        "name": "Zona Norte",
        "item": "https://www.arenadoslucho.com.ar/zonas-de-cobertura/zona-norte"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Pilar",
        "item": "https://www.arenadoslucho.com.ar/zonas-de-cobertura/zona-norte/pilar"
      }
    ]
  }
}

export default function PilarLayout({
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
