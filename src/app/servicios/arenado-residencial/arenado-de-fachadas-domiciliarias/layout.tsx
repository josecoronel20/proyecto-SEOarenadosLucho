import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado de Fachadas en Zona Norte, Oeste y CABA | Arenados Lucho",
  description: "Arenado de fachadas, granallado de fachadas y restauración de fachadas en Zona Norte, Oeste y CABA. Limpieza profesional de edificios. Presupuesto gratuito.",
  metadataBase: new URL("https://www.arenadoslucho.com.ar"),
  alternates: {
    canonical: "/servicios/arenado-de-fachadas-domiciliarias",
  },
  openGraph: {
    title: "Arenado de Fachadas en Zona Norte, Oeste y CABA | Arenados Lucho",
    description: "Arenado de fachadas, granallado de fachadas y restauración de fachadas. Limpieza profesional de edificios. Presupuesto gratuito.",
    url: "https://www.arenadoslucho.com.ar/servicios/arenado-de-fachadas-domiciliarias",
    siteName: "Arenados Lucho",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/proyectos/arenado-fachada-san-martin-despues.webp",
        width: 1200,
        height: 630,
        alt: "Arenado de fachadas profesional - Antes y después",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arenado de Fachadas en Zona Norte, Oeste y CABA | Arenados Lucho",
    description: "Arenado de fachadas, granallado de fachadas y restauración de fachadas. Limpieza profesional de edificios.",
    images: ["/images/proyectos/arenado-fachada-san-martin-despues.webp"],
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
    "DC.identifier": "https://www.arenadoslucho.com.ar/servicios/arenado-de-fachadas-domiciliarias",
  },
}

export default function ArenadoFachadasDomiciliariasLayout({
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
            "name": "Arenados Lucho - Expertos en Arenado de Fachadas",
            "image": "/images/logo.webp",
            "description": "Servicio profesional de arenado y limpieza de fachadas en Zona Norte, Oeste y CABA. Más de 15 años de experiencia en restauración de edificios residenciales y comerciales.",
            "url": "https://www.arenadoslucho.com.ar/servicios/arenado-de-fachadas-domiciliarias",
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
              "reviewCount": "140",
              "bestRating": "5",
              "worstRating": "1"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Arenado de Fachadas",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Fachadas Residenciales",
                    "description": "Limpieza y preparación de fachadas de casas y edificios residenciales"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Fachadas Comerciales", 
                    "description": "Tratamiento profesional para fachadas de locales y edificios comerciales"
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
                "name": "Arenado de Fachadas",
                "item": "https://www.arenadoslucho.com.ar/servicios/arenado-de-fachadas-domiciliarias"
              }
            ]
          })
        }}
      />

      {children}
    </>
  )
}

