import Link from "next/link"
import { MapPin, Phone } from "lucide-react"

export function CoverageAreasSection() {
  const coverageAreas = {
    "Zona Norte": [
      { name: "Pilar", slug: "/zonas-de-cobertura/zona-norte/pilar", description: "Arenado de piezas metálicas en Pilar" },
      { name: "San Isidro", slug: "/zonas-de-cobertura/zona-norte/san-isidro", description: "Arenado de piezas metálicas en San Isidro" },
      { name: "Tigre", slug: "/zonas-de-cobertura/zona-norte/tigre", description: "Arenado de piezas metálicas en Tigre" },
      { name: "Vicente López", slug: "/zonas-de-cobertura/zona-norte/vicente-lopez", description: "Arenado de piezas metálicas en Vicente López" },
      { name: "San Fernando", slug: "/zonas-de-cobertura/zona-norte/san-fernando", description: "Arenado de piezas metálicas en San Fernando" },
      { name: "José C. Paz", slug: "/zonas-de-cobertura/zona-norte/jose-c-paz", description: "Arenado de piezas metálicas en José C. Paz" },
      { name: "San Miguel", slug: "/zonas-de-cobertura/zona-norte/san-miguel", description: "Arenado de piezas metálicas en San Miguel" },
      { name: "Malvinas Argentinas", slug: "/zonas-de-cobertura/zona-norte/malvinas-argentinas", description: "Arenado de piezas metálicas en Malvinas Argentinas" },
      { name: "General San Martín", slug: "/zonas-de-cobertura/zona-norte/general-san-martin", description: "Arenado de piezas metálicas en General San Martín" }
    ],
    "Zona Oeste": [
      { name: "Moreno", slug: "/zonas-de-cobertura/zona-oeste/moreno", description: "Arenado de piezas metálicas en Moreno" },
      { name: "General Rodríguez", slug: "/zonas-de-cobertura/zona-oeste/general-rodriguez", description: "Arenado de piezas metálicas en General Rodríguez" },
      { name: "Ituzaingó", slug: "/zonas-de-cobertura/zona-oeste/ituzaingo", description: "Arenado de piezas metálicas en Ituzaingó" },
      { name: "Morón", slug: "/zonas-de-cobertura/zona-oeste/moron", description: "Arenado de piezas metálicas en Morón" },
      { name: "Hurlingham", slug: "/zonas-de-cobertura/zona-oeste/hurlingham", description: "Arenado de piezas metálicas en Hurlingham" },
      { name: "3 de Febrero", slug: "/zonas-de-cobertura/zona-oeste/3-de-febrero", description: "Arenado de piezas metálicas en 3 de Febrero" }
    ],
    "CABA": [
      { name: "Palermo", slug: "/zonas-de-cobertura/caba/palermo", description: "Arenado de piezas metálicas en Palermo" },
      { name: "Recoleta", slug: "/zonas-de-cobertura/caba/recoleta", description: "Arenado de piezas metálicas en Recoleta" },
      { name: "Belgrano", slug: "/zonas-de-cobertura/caba/belgrano", description: "Arenado de piezas metálicas en Belgrano" },
      { name: "Núñez", slug: "/zonas-de-cobertura/caba/nunez", description: "Arenado de piezas metálicas en Núñez" },
      { name: "Villa Crespo", slug: "/zonas-de-cobertura/caba/villa-crespo", description: "Arenado de piezas metálicas en Villa Crespo" }
    ]
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Arenado Industrial de Piezas Metálicas en Buenos Aires",
    "serviceType": "Arenado Industrial",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-34.4784",
        "longitude": "-58.5106"
      },
      "geoRadius": "50000"
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Arenados Lucho",
      "image": "/images/logo.webp",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Buenos Aires",
        "addressCountry": "AR"
      },
      "areaServed": ["Zona Norte", "Zona Oeste", "CABA"]
    },
    "description": "Servicio profesional de arenado industrial para piezas metálicas en Buenos Aires. Cobertura en Zona Norte, Oeste y CABA."
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="py-16 bg-gray-50" aria-label="Zonas de cobertura para arenado de piezas metálicas">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Arenado Industrial de Piezas Metálicas en Buenos Aires | Servicio Profesional
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              <strong>Expertos en arenado industrial con más de 15 años de experiencia.</strong> Brindamos servicio 
              especializado de arenado para piezas metálicas en toda la región metropolitana. Equipamiento de última 
              generación y personal calificado para resultados profesionales garantizados.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.entries(coverageAreas).map(([zone, areas]) => (
              <div key={zone} className="bg-white rounded-lg shadow-md p-6" role="region" aria-label={`Cobertura en ${zone}`}>
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600 mr-2" aria-hidden="true" />
                  <h2 className="text-2xl font-bold text-gray-900">Arenado Industrial en {zone}</h2>
                </div>
                <ul className="flex flex-wrap gap-4">
                  {areas.map((area) => (
                    <li key={area.name}>
                      <Link 
                        href={area.slug}
                        className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                        title={`Servicio profesional de ${area.description}`}
                        aria-label={area.description}
                      >
                        {area.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                ¿Buscás Arenado Industrial de Calidad en Tu Zona?
              </h3>
              <p className="text-blue-800 mb-6 text-lg">
                Presupuesto sin cargo para arenado industrial en todo Buenos Aires. Garantía de calidad y servicio profesional.
              </p>
              <Link 
                href="https://wa.me/5491123787750?text=Hola,%20necesito%20presupuesto%20para%20arenado%20de%20piezas%20metalicas%20en%20mi%20zona"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 text-lg"
                aria-label="Solicitar presupuesto de arenado industrial por WhatsApp"
              >
                <Phone className="h-6 w-6 mr-3" aria-hidden="true" />
                Solicitá Presupuesto por WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
