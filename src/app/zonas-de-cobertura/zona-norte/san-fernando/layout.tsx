import type { Metadata } from "next"
import { PROJECT } from "@/config/project"

export const metadata: Metadata = {
  title: "Arenado en San Fernando | Servicio Residencial y Comercial - Arenados Lucho",
  description: "Servicio de arenado móvil en San Fernando. Especialistas en piletas, fachadas, vehículos, muebles, industrial y barcos. Servicio residencial y comercial con excelencia garantizada. Presupuesto gratuito.",
  keywords: `${PROJECT.seo.primaryKeywords.join(", ")}, ${PROJECT.seo.secondaryKeywords.join(", ")}, ${PROJECT.seo.longTailKeywords.join(", ")}, arenado San Fernando, arenado de piletas San Fernando, arenado de fachadas San Fernando, arenado de vehículos San Fernando, arenado de muebles San Fernando, arenado residencial San Fernando, arenado comercial San Fernando, limpieza profunda San Fernando, servicio móvil San Fernando, presupuesto arenado San Fernando, servicio residencial San Fernando, servicio comercial San Fernando, excelencia en servicio San Fernando`,
  authors: [{ name: PROJECT.name }],
  openGraph: {
    title: "Arenado en San Fernando | Servicio Residencial y Comercial - Arenados Lucho",
    description: "Servicio de arenado móvil en San Fernando. Especialistas en servicios residenciales y comerciales con excelencia garantizada.",
    type: "website",
    locale: "es_AR",
    url: "https://www.arenadoslucho.com.ar/zonas-de-cobertura/zona-norte/san-fernando",
    siteName: PROJECT.name,
    images: [{
      url: '/images/portada-hero-arenados-lucho.webp',
      width: 1200,
      height: 630,
      alt: 'Arenado en San Fernando - Arenados Lucho - Servicio Residencial y Comercial'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Arenado en San Fernando | Servicio Residencial y Comercial - Arenados Lucho",
    description: "Servicio de arenado móvil en San Fernando. Especialistas en servicios residenciales y comerciales.",
    images: ['/images/portada-hero-arenados-lucho.webp'],
  },
  alternates: {
    canonical: "https://www.arenadoslucho.com.ar/zonas-de-cobertura/zona-norte/san-fernando"
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
    'geo.placename': 'San Fernando',
    'geo.position': '-34.4417;-58.5631',
    'ICBM': '-34.4417, -58.5631'
  }
}

// JSON-LD Structured Data for San Fernando Page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Arenados Lucho - San Fernando",
  "description": "Servicio de arenado y sandblasting en San Fernando. Especialistas en servicios residenciales y comerciales con excelencia garantizada.",
  "url": "https://www.arenadoslucho.com.ar/zonas-de-cobertura/zona-norte/san-fernando",
  "telephone": PROJECT.contact.phone,
  "email": PROJECT.contact.email,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Fernando",
    "addressRegion": "Buenos Aires",
    "addressCountry": "AR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-34.4417",
    "longitude": "-58.5631"
  },
  "areaServed": {
    "@type": "City",
    "name": "San Fernando"
  },
  "serviceType": [
    "Arenado de Piletas",
    "Arenado de Fachadas", 
    "Arenado de Vehículos",
    "Arenado de Muebles",
    "Arenado Industrial",
    "Arenado de Barcos",
    "Arenado de Piezas Metálicas"
  ],
  "openingHours": "Mo-Sa 08:00-18:00",
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "95"
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
        "name": "San Fernando",
        "item": "https://www.arenadoslucho.com.ar/zonas-de-cobertura/zona-norte/san-fernando"
      }
    ]
  }
}

export default function SanFernandoLayout({
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
