import type { Metadata } from "next"
import { PROJECT } from "@/config/project"

export const metadata: Metadata = {
  title: "Arenado en San Isidro | Servicio Premium de Sandblasting - Arenados Lucho",
  description: "Servicio de arenado móvil premium en San Isidro. Especialistas en fachadas históricas, vehículos de lujo y propiedades de alto standing. Presupuesto gratuito. Técnicas no abrasivas y preservación patrimonial.",
  keywords: `${PROJECT.seo.primaryKeywords.join(", ")}, ${PROJECT.seo.secondaryKeywords.join(", ")}, ${PROJECT.seo.longTailKeywords.join(", ")}, arenado San Isidro, arenado de fachadas San Isidro, arenado de vehículos San Isidro, arenado de piletas San Isidro, arenado de muebles San Isidro, arenado de barcos San Isidro, limpieza profunda San Isidro, servicio móvil San Isidro, presupuesto arenado San Isidro, arenado residencial San Isidro, servicio premium San Isidro, fachadas históricas San Isidro, vehículos de lujo San Isidro, preservación patrimonial San Isidro`,
  authors: [{ name: PROJECT.name }],
  openGraph: {
    title: "Arenado en San Isidro | Servicio Premium - Arenados Lucho",
    description: "Servicio de arenado móvil premium en San Isidro. Especialistas en fachadas históricas, vehículos de lujo y propiedades de alto standing.",
    type: "website",
    locale: "es_AR",
    url: "https://www.arenadoslucho.com.ar/zonas-de-cobertura/zona-norte/san-isidro",
    siteName: PROJECT.name,
    images: [{
      url: '/images/portada-hero-arenados-lucho.webp',
      width: 1200,
      height: 630,
      alt: 'Arenado en San Isidro - Arenados Lucho - Servicio Premium'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Arenado en San Isidro | Servicio Premium - Arenados Lucho",
    description: "Servicio de arenado móvil premium en San Isidro. Especialistas en fachadas históricas y vehículos de lujo.",
    images: ['/images/portada-hero-arenados-lucho.webp'],
  },
  alternates: {
    canonical: "https://www.arenadoslucho.com.ar/zonas-de-cobertura/zona-norte/san-isidro"
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
    'geo.placename': 'San Isidro',
    'geo.position': '-34.4722;-58.5271',
    'ICBM': '-34.4722, -58.5271'
  }
}

// JSON-LD Structured Data for San Isidro Page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Arenados Lucho - San Isidro",
  "description": "Servicio premium de arenado y sandblasting en San Isidro. Especialistas en fachadas históricas, vehículos de lujo y propiedades de alto standing.",
  "url": "https://www.arenadoslucho.com.ar/zonas-de-cobertura/zona-norte/san-isidro",
  "telephone": PROJECT.contact.phone,
  "email": PROJECT.contact.email,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Isidro",
    "addressRegion": "Buenos Aires",
    "addressCountry": "AR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-34.4722",
    "longitude": "-58.5271"
  },
  "areaServed": {
    "@type": "City",
    "name": "San Isidro"
  },
  "serviceType": [
    "Arenado de Fachadas Históricas",
    "Arenado de Vehículos de Lujo", 
    "Arenado de Muebles Antiguos",
    "Arenado de Piletas Premium",
    "Arenado de Piezas Metálicas",
    "Arenado de Barcos",
    "Preservación Patrimonial"
  ],
  "openingHours": "Mo-Sa 08:00-18:00",
  "priceRange": "$$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "120"
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
        "name": "San Isidro",
        "item": "https://www.arenadoslucho.com.ar/zonas-de-cobertura/zona-norte/san-isidro"
      }
    ]
  }
}

export default function SanIsidroLayout({
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
