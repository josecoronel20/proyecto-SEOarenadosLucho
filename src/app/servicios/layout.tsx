import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado y Granallado en Pilar | Servicios Profesionales 2025",
  description: "Servicios profesionales de arenado en Pilar y Zona Norte. Piletas, vehículos, fachadas. Presupuesto gratuito en 24h. ¡Cotizá ahora!",
  keywords: [
    "arenado Pilar",
    "arenado Zona Norte",
    "granallado Buenos Aires",
    "sandblasting Pilar",
    "limpieza industrial",
    "arenado piletas",
    "arenado industria",
    "arenado vehículos",
    "arenado barcos",
    "arenado muebles",
    "arenado fachadas",
    "arenado piezas metálicas",
    "preparación para pintura",
    "servicio móvil",
    "arenado presupuesto"
  ],
  authors: [{ name: "Arenados Lucho" }],
  creator: "Arenados Lucho - Expertos en Arenado",
  publisher: "Arenados Lucho",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.arenadoslucho.com.ar"),
  alternates: {
    canonical: "/servicios",
  },
  openGraph: {
    title: "Arenado y Granallado en Pilar | Servicios Profesionales 2025",
    description: "Servicios profesionales de arenado en Pilar y Zona Norte. Piletas, vehículos, fachadas. Presupuesto gratuito en 24h. ¡Cotizá ahora!",
    url: "https://www.arenadoslucho.com.ar/servicios",
    siteName: "Arenados Lucho",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/logo.webp",
        width: 1200,
        height: 630,
        alt: "Servicios de Arenado en Pilar y Zona Norte - Arenados Lucho",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arenado y Granallado en Pilar | Servicios Profesionales 2025",
    description: "Servicios profesionales de arenado en Pilar y Zona Norte. Piletas, vehículos, fachadas. Presupuesto gratuito en 24h. ¡Cotizá ahora!",
    images: ["/images/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "services",
  classification: "Servicios de Arenado y Granallado",
  other: {
    "geo.region": "AR-C",
    "geo.placename": "Pilar, Buenos Aires",
    "geo.position": "-34.4359;-58.7014",
    "ICBM": "-34.4359, -58.7014",
    "DC.title": "Arenado y Granallado en Pilar y Zona Norte Buenos Aires 2025",
    "DC.description": "Servicios profesionales de arenado, granallado, sandblasting y limpieza de superficies para piletas, industria, vehículos, barcos, muebles y fachadas en Pilar, San Isidro y Zona Norte de Buenos Aires.",
    "DC.subject": "Arenado, Granallado, Sandblasting, Limpieza Industrial, Piletas, Industria, Vehículos, Barcos, Muebles, Fachadas, Pilar, San Isidro, Zona Norte",
    "DC.language": "es",
    "DC.creator": "Arenados Lucho",
    "DC.publisher": "Arenados Lucho",
    "DC.coverage": "Pilar, San Isidro, Tigre, Vicente López, San Fernando, Zona Norte, Buenos Aires",
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": "https://www.arenadoslucho.com.ar/servicios",
    "DC.rights": "Copyright Arenados Lucho",
    "DC.date.created": "2025-01-27",
    "DC.date.modified": "2025-01-27",
  },
}

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Structured Data for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Arenados Lucho - Expertos en Arenado y Granallado",
            "image": "/images/logo.webp",
            "description": "Servicio profesional de arenado, granallado, sandblasting y limpieza de superficies para piletas, industria, vehículos, barcos, muebles y fachadas en Pilar, San Isidro y Zona Norte de Buenos Aires.",
            "url": "https://www.arenadoslucho.com.ar/servicios",
            "telephone": "+54 9 11 2378-7750",
            "email": "arenadoslucho@hotmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pilar",
              "addressRegion": "Buenos Aires",
              "addressCountry": "AR",
              "postalCode": "1629"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-34.4359",
              "longitude": "-58.7014"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "18:00"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Pilar"
              },
              {
                "@type": "City", 
                "name": "San Isidro"
              },
              {
                "@type": "City",
                "name": "Tigre"
              },
              {
                "@type": "City",
                "name": "Vicente López"
              },
              {
                "@type": "City",
                "name": "San Fernando"
              },
              {
                "@type": "AdministrativeArea",
                "name": "Zona Norte GBA"
              },
              {
                "@type": "AdministrativeArea",
                "name": "Zona Oeste GBA"
              },
              {
                "@type": "AdministrativeArea",
                "name": "Ciudad Autónoma de Buenos Aires"
              }
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "-34.4359",
                "longitude": "-58.7014"
              },
              "geoRadius": "50000"
            },
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "200",
              "bestRating": "5",
              "worstRating": "1"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Arenado y Granallado",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Piletas",
                    "description": "Limpieza profunda y preparación de superficies para pintura o revestimiento en piletas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado Industrial",
                    "description": "Limpieza y preparación de estructuras metálicas, maquinarias y obras industriales"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Vehículos",
                    "description": "Remoción de pintura y óxido en autos, camiones y chasis"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Barcos",
                    "description": "Mantenimiento naval profesional y eliminación de incrustaciones marinas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Muebles",
                    "description": "Restauración y despintado de muebles con acabado fino"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Fachadas",
                    "description": "Limpieza de edificios y comerciales, preparación para pintura exterior"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Piezas Metálicas",
                    "description": "Tratamiento de piezas pequeñas con precisión y preparación para galvanizado"
                  }
                }
              ]
            },
           
          })
        }}
      />
      
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
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
                "name": "Servicios",
                "item": "https://www.arenadoslucho.com.ar/servicios"
              }
            ]
          })
        }}
      />

      {children}
    </>
  )
}

