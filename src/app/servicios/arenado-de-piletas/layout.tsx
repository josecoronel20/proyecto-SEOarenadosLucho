import type { Metadata } from "next"
import { generateServiceSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Arenado de Piletas en Pilar | Limpieza Profesional 2025",
  description: "Arenado de piletas en Pilar y Zona Norte. Limpieza profunda, eliminación de algas. Presupuesto gratuito en 24h. ¡Cotizá ahora!",
  keywords: [
    "arenado piletas Pilar",
    "arenado piletas San Isidro",
    "arenado piletas Zona Norte",
    "limpieza piscinas Buenos Aires",
    "arenado piletas Tigre",
    "arenado piletas Vicente López",
    "arenado piletas San Fernando",
    "limpieza profunda piletas",
    "eliminacion algas piletas",
    "preparacion pintura piletas",
    "servicio piletas Zona Norte",
    "arenado piletas precio",
    "arenado piletas presupuesto",
    "arenado piletas 2025"
  ],
  authors: [{ name: "Arenados Lucho" }],
  creator: "Arenados Lucho - Expertos en Arenado de Piletas",
  publisher: "Arenados Lucho",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.arenadoslucho.com.ar"),
  alternates: {
    canonical: "/servicios/arenado-de-piletas",
  },
  openGraph: {
    title: "Arenado de Piletas en Pilar | Limpieza Profesional 2025",
    description: "Arenado de piletas en Pilar y Zona Norte. Limpieza profunda, eliminación de algas. Presupuesto gratuito en 24h. ¡Cotizá ahora!",
    url: "https://www.arenadoslucho.com.ar/servicios/arenado-de-piletas",
    siteName: "Arenados Lucho",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/proyectos/arenado-pileta-pilar-despues.webp",
        width: 1200,
        height: 630,
        alt: "Arenado de piletas profesional en Pilar y Zona Norte - Limpieza de piscinas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arenado de Piletas en Pilar | Limpieza Profesional 2025",
    description: "Arenado de piletas en Pilar y Zona Norte. Limpieza profunda, eliminación de algas. Presupuesto gratuito en 24h. ¡Cotizá ahora!",
    images: ["/images/proyectos/arenado-pileta-pilar-despues.webp"],
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
  category: "pool",
  classification: "Arenado de Piletas y Servicios de Piscinas",
  other: {
    "geo.region": "AR-C",
    "geo.placename": "Pilar, Buenos Aires",
    "geo.position": "-34.4359;-58.7014",
    "ICBM": "-34.4359, -58.7014",
    "DC.title": "Arenado de Piletas en Pilar y Zona Norte Buenos Aires 2025",
    "DC.description": "Servicio profesional de arenado de piletas y limpieza profunda de piscinas en Pilar, San Isidro y Zona Norte de Buenos Aires.",
    "DC.subject": "Arenado Piletas, Limpieza Piscinas, Eliminación Algas, Preparación Pintura, Pilar, San Isidro, Zona Norte",
    "DC.language": "es",
    "DC.creator": "Arenados Lucho",
    "DC.publisher": "Arenados Lucho",
    "DC.coverage": "Pilar, San Isidro, Tigre, Vicente López, San Fernando, Zona Norte, Buenos Aires",
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": "https://arenadoslucho.com/servicios/arenado-de-piletas",
    "DC.rights": "Copyright Arenados Lucho",
    "DC.date.created": "2025-01-27",
    "DC.date.modified": "2025-01-27",
  },
}

export default function ArenadoPiletasLayout({
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
            "name": "Arenados Lucho - Expertos en Arenado de Piletas",
            "image": "/images/logo.webp",
            "description": "Servicio profesional de arenado de piletas y limpieza profunda de piscinas en Pilar, San Isidro y Zona Norte de Buenos Aires. Más de 15 años de experiencia en servicios de piletas.",
            "url": "https://arenadoslucho.com/servicios/arenado-de-piletas",
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
              }
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "-34.4359",
                "longitude": "-58.7014"
              },
              "geoRadius": "30000"
            },
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "150",
              "bestRating": "5",
              "worstRating": "1"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Arenado de Piletas",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Limpieza Profunda de Piletas",
                    "description": "Servicio profesional de arenado y limpieza profunda para piletas y piscinas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Preparación para Pintura de Piletas", 
                    "description": "Tratamiento especializado para preparar piletas para pintura y revestimientos"
                  }
                }
              ]
            },
            "sameAs": [
              "https://wa.me/5491123787750",
              "mailto:arenadoslucho@hotmail.com"
            ]
          })
        }}
      />
      
      {/* Service Schema */}
      {(() => {
        const serviceSchema = generateServiceSchema("arenado-piletas", "Pilar")
        return serviceSchema ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(serviceSchema)
            }}
          />
        ) : null
      })()}

      {children}
    </>
  )
}
