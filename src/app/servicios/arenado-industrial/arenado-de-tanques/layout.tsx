import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado de Tanques en Zona Norte, Oeste y CABA | Arenados Lucho",
  description: "Arenado de tanques, granallado de tanques y restauración de tanques en Zona Norte, Oeste y CABA. Limpieza de tanques industriales y preparación de tanques para pintar. Presupuesto gratuito.",
  metadataBase: new URL("https://www.arenadoslucho.com.ar"),
  alternates: {
    canonical: "/servicios/arenado-de-tanques",
  },
  openGraph: {
    title: "Arenado de Tanques en Zona Norte, Oeste y CABA | Arenados Lucho",
    description: "Arenado de tanques, granallado de tanques y restauración de tanques. Limpieza de tanques industriales y preparación de tanques para pintar. Presupuesto gratuito.",
    url: "https://www.arenadoslucho.com.ar/servicios/arenado-de-tanques",
    siteName: "Arenados Lucho",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/proyectos/arenado-pileta-pilar-despues.webp",
        width: 1200,
        height: 630,
        alt: "Arenado de tanques profesional - Antes y después",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arenado de Tanques en Zona Norte, Oeste y CABA | Arenados Lucho",
    description: "Arenado de tanques, granallado de tanques y restauración de tanques. Limpieza de tanques industriales y preparación de tanques para pintar.",
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
  other: {
    "DC.identifier": "https://www.arenadoslucho.com.ar/servicios/arenado-de-tanques",
  },
}

export default function ArenadoTanquesLayout({
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
            "name": "Arenados Lucho - Expertos en Arenado de Tanques",
            "image": "/images/logo.webp",
            "description": "Servicio profesional de arenado y limpieza de tanques en Zona Norte, Oeste y CABA. Más de 15 años de experiencia en restauración de tanques industriales.",
            "url": "https://www.arenadoslucho.com.ar/servicios/arenado-de-tanques",
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
              "reviewCount": "100",
              "bestRating": "5",
              "worstRating": "1"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Arenado de Tanques",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Tanques Industriales",
                    "description": "Limpieza y preparación de tanques industriales"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Tanques", 
                    "description": "Tratamiento profesional para tanques"
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
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Arenado de Tanques",
                "item": "https://www.arenadoslucho.com.ar/servicios/arenado-de-tanques"
              }
            ]
          })
        }}
      />

      {children}
    </>
  )
}

