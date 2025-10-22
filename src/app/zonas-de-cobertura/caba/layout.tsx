import type { Metadata } from "next"
import { PROJECT } from "@/config/project"

export const metadata: Metadata = {
  title: "Arenado en CABA | Ciudad Autónoma de Buenos Aires - Arenados Lucho",
  description: "Servicio de arenado móvil en CABA. Cobertura completa en todos los barrios porteños. Presupuesto gratuito. Respuesta en 24h. +20 años de experiencia local.",
  keywords: `${PROJECT.seo.primaryKeywords.join(", ")}, ${PROJECT.seo.secondaryKeywords.join(", ")}, ${PROJECT.seo.longTailKeywords.join(", ")}, arenado CABA, arenado Buenos Aires, arenado Capital Federal, sandblasting CABA, arenado barrios porteños, servicio móvil CABA, arenado Palermo, arenado Recoleta, arenado Belgrano, arenado Caballito`,
  authors: [{ name: PROJECT.name }],
  openGraph: {
    title: "Arenado en CABA | Ciudad Autónoma de Buenos Aires - Arenados Lucho",
    description: "Servicio de arenado móvil en CABA. Cobertura completa en todos los barrios porteños. Presupuesto gratuito. Respuesta en 24h.",
    type: "website",
    locale: "es_AR",
    url: "https://www.arenadoslucho.com.ar/zonas-de-cobertura/caba",
    siteName: PROJECT.name,
    images: [{
      url: '/images/portada-hero-arenados-lucho.webp',
      width: 1200,
      height: 630,
      alt: 'Arenado en CABA - Arenados Lucho - Servicio móvil profesional'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Arenado en CABA | Ciudad Autónoma de Buenos Aires",
    description: "Servicio de arenado móvil en CABA. Cobertura completa en todos los barrios porteños. Presupuesto gratuito.",
    images: ['/images/portada-hero-arenados-lucho.webp'],
  },
  alternates: {
    canonical: "https://www.arenadoslucho.com.ar/zonas-de-cobertura/caba"
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
    'geo.region': 'AR-C',
    'geo.placename': 'Ciudad Autónoma de Buenos Aires',
    'geo.position': '-34.6037;-58.3816',
    'ICBM': '-34.6037, -58.3816'
  }
}

// JSON-LD Structured Data for CABA Page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Servicio de Arenado en CABA",
  "description": "Servicio profesional de arenado móvil en la Ciudad Autónoma de Buenos Aires",
  "url": "https://www.arenadoslucho.com.ar/zonas-de-cobertura/caba",
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
    "areaServed": PROJECT.coverage.caba.map(city => ({
      "@type": "Place",
      "name": city
    }))
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "-34.6037",
      "longitude": "-58.3816"
    },
    "geoRadius": "20000"
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
        "name": "CABA",
        "item": "https://www.arenadoslucho.com.ar/zonas-de-cobertura/caba"
      }
    ]
  }
}

export default function CABALayout({
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
