import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado de Vehículos en Zona Norte, Oeste y CABA | Servicios Profesionales - Arenados Lucho",
  description: "Arenado de vehículos profesional en Zona Norte, Oeste y CABA. Servicios de arenado para camiones, autos y barcos. Presupuesto gratuito y servicio móvil.",
  keywords: [
    "arenado vehiculos Pilar",
    "arenado vehiculos Zona Norte",
    "servicios arenado vehiculos Buenos Aires",
    "arenado camiones",
    "arenado autos",
    "arenado barcos",
    "arenado vehiculos CABA",
    "arenado vehiculos zona oeste",
    "servicio arenado vehiculos"
  ],
  authors: [{ name: "Arenados Lucho" }],
  creator: "Arenados Lucho - Expertos en Arenado de Vehículos",
  publisher: "Arenados Lucho",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.arenadoslucho.com.ar"),
  alternates: {
    canonical: "/servicios/arenado-de-vehiculos",
  },
  openGraph: {
    title: "Arenado de Vehículos en Zona Norte, Oeste y CABA | Servicios Profesionales",
    description: "Servicios profesionales de arenado de vehículos para camiones, autos y barcos. Más de 15 años de experiencia. Presupuesto gratuito y servicio móvil.",
    url: "https://www.arenadoslucho.com.ar/servicios/arenado-de-vehiculos",
    siteName: "Arenados Lucho",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/proyectos/arenado-barco-tigre-despues.webp",
        width: 1200,
        height: 630,
        alt: "Arenado de vehículos profesional en Zona Norte, Oeste y CABA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arenado de Vehículos en Zona Norte, Oeste y CABA | Servicios Profesionales",
    description: "Servicios profesionales de arenado de vehículos. Más de 15 años de experiencia. Presupuesto gratuito.",
    images: ["/images/proyectos/arenado-barco-tigre-despues.webp"],
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
  category: "automotive",
  classification: "Arenado de Vehículos",
  other: {
    "geo.region": "AR-C",
    "geo.placename": "Pilar, Buenos Aires",
    "geo.position": "-34.4359;-58.7014",
    "ICBM": "-34.4359, -58.7014",
    "DC.title": "Arenado de Vehículos en Zona Norte, Oeste y CABA Buenos Aires",
    "DC.description": "Servicios profesionales de arenado de vehículos para camiones, autos y barcos en Zona Norte, Oeste y CABA de Buenos Aires.",
    "DC.subject": "Arenado, Vehículos, Camiones, Autos, Barcos, Zona Norte, Zona Oeste, CABA",
    "DC.language": "es",
    "DC.creator": "Arenados Lucho",
    "DC.publisher": "Arenados Lucho",
    "DC.coverage": "Zona Norte, Zona Oeste, CABA, Buenos Aires",
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": "https://www.arenadoslucho.com.ar/servicios/arenado-de-vehiculos",
    "DC.rights": "Copyright Arenados Lucho",
    "DC.date.created": "2025-01-27",
    "DC.date.modified": "2025-01-27",
  },
}

export default function ArenadoVehiculosLayout({
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
            "name": "Arenados Lucho - Expertos en Arenado de Vehículos",
            "image": "/images/logo.webp",
            "description": "Servicios profesionales de arenado de vehículos en Zona Norte, Oeste y CABA de Buenos Aires. Especialistas en camiones, autos y barcos. Más de 15 años de experiencia.",
            "url": "https://www.arenadoslucho.com.ar/servicios/arenado-de-vehiculos",
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
              "reviewCount": "300",
              "bestRating": "5",
              "worstRating": "1"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Arenado de Vehículos",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Camiones",
                    "description": "Limpieza y preparación de camiones para pintura"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Autos",
                    "description": "Limpieza y preparación de autos para pintura"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Barcos",
                    "description": "Despintado y tratamiento de cascos y estructuras navales"
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
                "name": "Arenado de Vehículos",
                "item": "https://www.arenadoslucho.com.ar/servicios/arenado-de-vehiculos"
              }
            ]
          })
        }}
      />

      {children}
    </>
  )
}

