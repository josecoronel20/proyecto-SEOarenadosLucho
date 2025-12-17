import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado de Superficies en Zona Norte, Oeste y CABA | Servicios Profesionales - Arenados Lucho",
  description: "Arenado de superficies profesional en Zona Norte, Oeste y CABA. Servicios de arenado para superficies metálicas y superficies de madera. Presupuesto gratuito y servicio en taller y móvil.",
  keywords: [
    "arenado superficies Pilar",
    "arenado superficies Zona Norte",
    "servicios arenado superficies Buenos Aires",
    "arenado superficies metálicas",
    "arenado superficies madera",
    "arenado superficies CABA",
    "arenado superficies zona oeste",
    "servicio arenado superficies"
  ],
  authors: [{ name: "Arenados Lucho" }],
  creator: "Arenados Lucho - Expertos en Arenado de Superficies",
  publisher: "Arenados Lucho",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.arenadoslucho.com.ar"),
  alternates: {
    canonical: "/servicios/arenado-de-superficies",
  },
  openGraph: {
    title: "Arenado de Superficies en Zona Norte, Oeste y CABA | Servicios Profesionales",
    description: "Servicios profesionales de arenado de superficies para superficies metálicas y superficies de madera. Más de 15 años de experiencia. Presupuesto gratuito y servicio en taller y móvil.",
    url: "https://www.arenadoslucho.com.ar/servicios/arenado-de-superficies",
    siteName: "Arenados Lucho",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/proyectos/arenado-pieza-metalica-san-isidro-despues.webp",
        width: 1200,
        height: 630,
        alt: "Arenado de superficies profesional en Zona Norte, Oeste y CABA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arenado de Superficies en Zona Norte, Oeste y CABA | Servicios Profesionales",
    description: "Servicios profesionales de arenado de superficies. Más de 15 años de experiencia. Presupuesto gratuito.",
    images: ["/images/proyectos/arenado-pieza-metalica-san-isidro-despues.webp"],
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
  category: "construction",
  classification: "Arenado de Superficies",
  other: {
    "geo.region": "AR-C",
    "geo.placename": "Pilar, Buenos Aires",
    "geo.position": "-34.4359;-58.7014",
    "ICBM": "-34.4359, -58.7014",
    "DC.title": "Arenado de Superficies en Zona Norte, Oeste y CABA Buenos Aires",
    "DC.description": "Servicios profesionales de arenado de superficies para superficies metálicas y superficies de madera en Zona Norte, Oeste y CABA de Buenos Aires.",
    "DC.subject": "Arenado, Superficies, Superficies Metálicas, Superficies de Madera, Zona Norte, Zona Oeste, CABA",
    "DC.language": "es",
    "DC.creator": "Arenados Lucho",
    "DC.publisher": "Arenados Lucho",
    "DC.coverage": "Zona Norte, Zona Oeste, CABA, Buenos Aires",
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": "https://www.arenadoslucho.com.ar/servicios/arenado-de-superficies",
    "DC.rights": "Copyright Arenados Lucho",
    "DC.date.created": "2025-01-27",
    "DC.date.modified": "2025-01-27",
  },
}

export default function ArenadoSuperficiesLayout({
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
            "name": "Arenados Lucho - Expertos en Arenado de Superficies",
            "image": "/images/logo.webp",
            "description": "Servicios profesionales de arenado de superficies en Zona Norte, Oeste y CABA de Buenos Aires. Especialistas en superficies metálicas y superficies de madera. Más de 15 años de experiencia.",
            "url": "https://www.arenadoslucho.com.ar/servicios/arenado-de-superficies",
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
                "@type": "AdministrativeArea",
                "name": "Zona Norte GBA"
              },
              {
                "@type": "AdministrativeArea",
                "name": "Zona Oeste GBA"
              },
              {
                "@type": "City",
                "name": "CABA"
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
              "reviewCount": "400",
              "bestRating": "5",
              "worstRating": "1"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Arenado de Superficies",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Superficies Metálicas",
                    "description": "Limpieza y preparación de superficies metálicas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Superficies de Madera",
                    "description": "Limpieza y preparación de superficies de madera"
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
                "name": "Arenado de Superficies",
                "item": "https://www.arenadoslucho.com.ar/servicios/arenado-de-superficies"
              }
            ]
          })
        }}
      />

      {children}
    </>
  )
}

