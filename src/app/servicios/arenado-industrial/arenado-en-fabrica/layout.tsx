import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado en Fábrica en Zona Norte, Oeste y CABA | Arenados Lucho",
  description: "Arenado industrial en fábrica, granallado en fábrica y restauración en fábrica en Zona Norte, Oeste y CABA. Limpieza de superficies en fábrica y preparación de superficies en fábrica. Presupuesto gratuito.",
  metadataBase: new URL("https://www.arenadoslucho.com.ar"),
  alternates: {
    canonical: "/servicios/arenado-en-fabrica",
  },
  openGraph: {
    title: "Arenado en Fábrica en Zona Norte, Oeste y CABA | Arenados Lucho",
    description: "Arenado industrial en fábrica, granallado en fábrica y restauración en fábrica. Limpieza de superficies en fábrica y preparación de superficies en fábrica. Presupuesto gratuito.",
    url: "https://www.arenadoslucho.com.ar/servicios/arenado-en-fabrica",
    siteName: "Arenados Lucho",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/proyectos/arenado-pileta-pilar-despues.webp",
        width: 1200,
        height: 630,
        alt: "Arenado en fábrica profesional - Antes y después",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arenado en Fábrica en Zona Norte, Oeste y CABA | Arenados Lucho",
    description: "Arenado industrial en fábrica, granallado en fábrica y restauración en fábrica. Limpieza de superficies en fábrica y preparación de superficies en fábrica.",
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
    "DC.identifier": "https://www.arenadoslucho.com.ar/servicios/arenado-en-fabrica",
  },
}

export default function ArenadoEnFabricaLayout({
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
            "name": "Arenados Lucho - Expertos en Arenado en Fábrica",
            "image": "/images/logo.webp",
            "description": "Servicio profesional de arenado y limpieza de superficies en fábricas en Zona Norte, Oeste y CABA. Más de 15 años de experiencia en restauración en fábrica y preparación de superficies industriales.",
            "url": "https://www.arenadoslucho.com.ar/servicios/arenado-en-fabrica",
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
              "name": "Servicios de Arenado en Fábrica",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado Industrial en Fábrica",
                    "description": "Limpieza y preparación de superficies industriales en fábricas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Restauración en Fábrica", 
                    "description": "Tratamiento profesional para superficies industriales en fábricas"
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
                "name": "Arenado en Fábrica",
                "item": "https://www.arenadoslucho.com.ar/servicios/arenado-en-fabrica"
              }
            ]
          })
        }}
      />

      {children}
    </>
  )
}

