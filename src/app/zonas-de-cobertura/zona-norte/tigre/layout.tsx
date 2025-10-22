import type { Metadata } from "next"
import { PROJECT } from "@/config/project"

export const metadata: Metadata = {
  title: "Arenado en Tigre | Especialistas en Arenado Naval y Sandblasting - Arenados Lucho",
  description: "Servicio de arenado móvil en Tigre. Especialistas únicos en arenado de barcos, cascos, cubiertas y estructuras navales. Técnicas adaptadas al ambiente marino del Delta. Arenado de piletas y vehículos. Presupuesto gratuito.",
  keywords: `${PROJECT.seo.primaryKeywords.join(", ")}, ${PROJECT.seo.secondaryKeywords.join(", ")}, ${PROJECT.seo.longTailKeywords.join(", ")}, arenado Tigre, sandblasting Tigre, arenado de barcos Tigre, arenado naval Tigre, arenado de cascos Tigre, arenado de cubiertas Tigre, arenado de piletas Tigre, arenado de vehículos Tigre, granallado naval Tigre, limpieza profunda Tigre, servicio móvil Tigre, presupuesto arenado Tigre, especialización naval Tigre, ambiente marino Tigre, Delta del Paraná Tigre, Puerto de Frutos Tigre, clubes náuticos Tigre`,
  authors: [{ name: PROJECT.name }],
  openGraph: {
    title: "Arenado en Tigre | Especialistas Navales - Arenados Lucho",
    description: "Servicio de arenado móvil en Tigre. Especialistas únicos en arenado de barcos y estructuras navales con técnicas adaptadas al ambiente marino.",
    type: "website",
    locale: "es_AR",
    url: "https://www.arenadoslucho.com.ar/zonas-de-cobertura/zona-norte/tigre",
    siteName: PROJECT.name,
    images: [{
      url: '/images/portada-hero-arenados-lucho.webp',
      width: 1200,
      height: 630,
      alt: 'Arenado en Tigre - Arenados Lucho - Especialistas Navales'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Arenado en Tigre | Especialistas Navales - Arenados Lucho",
    description: "Servicio de arenado móvil en Tigre. Especialistas únicos en arenado de barcos y estructuras navales.",
    images: ['/images/portada-hero-arenados-lucho.webp'],
  },
  alternates: {
    canonical: "https://www.arenadoslucho.com.ar/zonas-de-cobertura/zona-norte/tigre"
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
    'geo.placename': 'Tigre',
    'geo.position': '-34.4208;-58.5792',
    'ICBM': '-34.4208, -58.5792'
  }
}

// JSON-LD Structured Data for Tigre Page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Arenados Lucho - Tigre",
  "description": "Servicio de arenado y sandblasting en Tigre. Especialistas únicos en arenado de barcos y estructuras navales con técnicas adaptadas al ambiente marino del Delta.",
  "url": "https://www.arenadoslucho.com.ar/zonas-de-cobertura/zona-norte/tigre",
  "telephone": PROJECT.contact.phone,
  "email": PROJECT.contact.email,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tigre",
    "addressRegion": "Buenos Aires",
    "addressCountry": "AR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-34.4208",
    "longitude": "-58.5792"
  },
  "areaServed": {
    "@type": "City",
    "name": "Tigre"
  },
  "serviceType": [
    "Arenado de Barcos",
    "Arenado Naval", 
    "Arenado de Cascos",
    "Arenado de Cubiertas",
    "Arenado de Piletas",
    "Arenado de Vehículos",
    "Mantenimiento Naval"
  ],
  "openingHours": "Mo-Sa 08:00-18:00",
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "85"
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
        "name": "Tigre",
        "item": "https://www.arenadoslucho.com.ar/zonas-de-cobertura/zona-norte/tigre"
      }
    ]
  }
}

export default function TigreLayout({
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
