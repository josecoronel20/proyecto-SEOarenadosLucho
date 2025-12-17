import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado Industrial en Zona Norte, Oeste y CABA | Servicios Profesionales - Arenados Lucho",
  description: "Arenado industrial profesional en Zona Norte, Oeste y CABA. Servicios de arenado para tanques, estructuras metálicas, edificios antiguos y fábricas. Presupuesto gratuito y servicio móvil.",
  keywords: [
    "arenado industrial Pilar",
    "arenado industrial Zona Norte",
    "servicios arenado industrial Buenos Aires",
    "arenado tanques",
    "arenado estructuras metálicas",
    "arenado edificios antiguos",
    "arenado en fábrica",
    "arenado industrial CABA",
    "arenado industrial zona oeste",
    "servicio arenado industrial"
  ],
  authors: [{ name: "Arenados Lucho" }],
  creator: "Arenados Lucho - Expertos en Arenado Industrial",
  publisher: "Arenados Lucho",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.arenadoslucho.com.ar"),
  alternates: {
    canonical: "/servicios/arenado-industrial",
  },
  openGraph: {
    title: "Arenado Industrial en Zona Norte, Oeste y CABA | Servicios Profesionales",
    description: "Servicios profesionales de arenado industrial para tanques, estructuras metálicas, edificios antiguos y fábricas. Más de 15 años de experiencia. Presupuesto gratuito y servicio móvil.",
    url: "https://www.arenadoslucho.com.ar/servicios/arenado-industrial",
    siteName: "Arenados Lucho",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/proyectos/arenado-tanque-industrial-despues.webp",
        width: 1200,
        height: 630,
        alt: "Arenado industrial profesional en Zona Norte, Oeste y CABA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arenado Industrial en Zona Norte, Oeste y CABA | Servicios Profesionales",
    description: "Servicios profesionales de arenado industrial. Más de 15 años de experiencia. Presupuesto gratuito.",
    images: ["/images/proyectos/arenado-tanque-industrial-despues.webp"],
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
  category: "industrial",
  classification: "Arenado Industrial",
  other: {
    "geo.region": "AR-C",
    "geo.placename": "Pilar, Buenos Aires",
    "geo.position": "-34.4359;-58.7014",
    "ICBM": "-34.4359, -58.7014",
    "DC.title": "Arenado Industrial en Zona Norte, Oeste y CABA Buenos Aires",
    "DC.description": "Servicios profesionales de arenado industrial para tanques, estructuras metálicas, edificios antiguos y fábricas en Zona Norte, Oeste y CABA de Buenos Aires.",
    "DC.subject": "Arenado, Industrial, Tanques, Estructuras Metálicas, Edificios Antiguos, Fábricas, Zona Norte, Zona Oeste, CABA",
    "DC.language": "es",
    "DC.creator": "Arenados Lucho",
    "DC.publisher": "Arenados Lucho",
    "DC.coverage": "Zona Norte, Zona Oeste, CABA, Buenos Aires",
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": "https://www.arenadoslucho.com.ar/servicios/arenado-industrial",
    "DC.rights": "Copyright Arenados Lucho",
    "DC.date.created": "2025-01-27",
    "DC.date.modified": "2025-01-27",
  },
}

export default function ArenadoIndustrialLayout({
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
            "name": "Arenados Lucho - Expertos en Arenado Industrial",
            "image": "/images/logo.webp",
            "description": "Servicios profesionales de arenado industrial en Zona Norte, Oeste y CABA de Buenos Aires. Especialistas en tanques, estructuras metálicas, edificios antiguos y fábricas. Más de 15 años de experiencia.",
            "url": "https://www.arenadoslucho.com.ar/servicios/arenado-industrial",
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
              "reviewCount": "200",
              "bestRating": "5",
              "worstRating": "1"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Arenado Industrial",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Tanques",
                    "description": "Limpieza y preparación de tanques industriales"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Estructuras Metálicas",
                    "description": "Restauración de estructuras metálicas industriales"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Edificios Antiguos",
                    "description": "Restauración de edificios antiguos y fachadas históricas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado en Fábrica",
                    "description": "Servicio de arenado industrial en fábricas"
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
                "name": "Arenado Industrial",
                "item": "https://www.arenadoslucho.com.ar/servicios/arenado-industrial"
              }
            ]
          })
        }}
      />

      {children}
    </>
  )
}

