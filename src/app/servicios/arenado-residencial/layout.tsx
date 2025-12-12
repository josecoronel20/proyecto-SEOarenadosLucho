import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado Residencial en Zona Norte, Oeste y CABA | Servicios Profesionales - Arenados Lucho",
  description: "Arenado residencial profesional en Zona Norte, Oeste y CABA. Servicios de arenado para piletas, fachadas, pisos y muebles. Presupuesto gratuito y servicio móvil.",
  keywords: [
    "arenado residencial Pilar",
    "arenado residencial Zona Norte",
    "servicios arenado residencial Buenos Aires",
    "arenado piletas",
    "arenado fachadas",
    "arenado pisos",
    "arenado muebles",
    "arenado residencial CABA",
    "arenado residencial zona oeste",
    "servicio arenado residencial"
  ],
  authors: [{ name: "Arenados Lucho" }],
  creator: "Arenados Lucho - Expertos en Arenado Residencial",
  publisher: "Arenados Lucho",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.arenadoslucho.com.ar"),
  alternates: {
    canonical: "/servicios/arenado-residencial",
  },
  openGraph: {
    title: "Arenado Residencial en Zona Norte, Oeste y CABA | Servicios Profesionales",
    description: "Servicios profesionales de arenado residencial para piletas, fachadas, pisos y muebles. Más de 15 años de experiencia. Presupuesto gratuito y servicio móvil.",
    url: "https://www.arenadoslucho.com.ar/servicios/arenado-residencial",
    siteName: "Arenados Lucho",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/proyectos/arenado-pileta-pilar-despues.webp",
        width: 1200,
        height: 630,
        alt: "Arenado residencial profesional en Zona Norte, Oeste y CABA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arenado Residencial en Zona Norte, Oeste y CABA | Servicios Profesionales",
    description: "Servicios profesionales de arenado residencial. Más de 15 años de experiencia. Presupuesto gratuito.",
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
  category: "construction",
  classification: "Arenado Residencial",
  other: {
    "geo.region": "AR-C",
    "geo.placename": "Pilar, Buenos Aires",
    "geo.position": "-34.4359;-58.7014",
    "ICBM": "-34.4359, -58.7014",
    "DC.title": "Arenado Residencial en Zona Norte, Oeste y CABA Buenos Aires",
    "DC.description": "Servicios profesionales de arenado residencial para piletas, fachadas, pisos y muebles en Zona Norte, Oeste y CABA de Buenos Aires.",
    "DC.subject": "Arenado, Residencial, Piletas, Fachadas, Pisos, Muebles, Zona Norte, Zona Oeste, CABA",
    "DC.language": "es",
    "DC.creator": "Arenados Lucho",
    "DC.publisher": "Arenados Lucho",
    "DC.coverage": "Zona Norte, Zona Oeste, CABA, Buenos Aires",
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": "https://www.arenadoslucho.com.ar/servicios/arenado-residencial",
    "DC.rights": "Copyright Arenados Lucho",
    "DC.date.created": "2025-01-27",
    "DC.date.modified": "2025-01-27",
  },
}

export default function ArenadoResidencialLayout({
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
            "name": "Arenados Lucho - Expertos en Arenado Residencial",
            "image": "/images/logo.webp",
            "description": "Servicios profesionales de arenado residencial en Zona Norte, Oeste y CABA de Buenos Aires. Especialistas en piletas, fachadas, pisos y muebles. Más de 15 años de experiencia.",
            "url": "https://www.arenadoslucho.com.ar/servicios/arenado-residencial",
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
              "reviewCount": "500",
              "bestRating": "5",
              "worstRating": "1"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Arenado Residencial",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Piletas",
                    "description": "Limpieza y preparación de piletas residenciales"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Fachadas",
                    "description": "Restauración de fachadas residenciales"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Pisos",
                    "description": "Limpieza y preparación de pisos residenciales"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Muebles",
                    "description": "Restauración de muebles residenciales"
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
                "name": "Arenado Residencial",
                "item": "https://www.arenadoslucho.com.ar/servicios/arenado-residencial"
              }
            ]
          })
        }}
      />

      {children}
    </>
  )
}

