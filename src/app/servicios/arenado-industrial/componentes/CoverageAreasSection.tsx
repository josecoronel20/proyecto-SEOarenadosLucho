import Link from "next/link"
import { MapPin, Phone } from "lucide-react"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function CoverageAreasSection() {
  const coverageAreas = {
    "Zona Norte": [
      { name: "Pilar", slug: "/zonas-de-cobertura/zona-norte/pilar", description: "Arenado industrial profesional en Pilar - Servicio especializado para industrias y empresas" },
      { name: "San Isidro", slug: "/zonas-de-cobertura/zona-norte/san-isidro", description: "Arenado industrial certificado en San Isidro - Tratamiento anticorrosivo garantizado" },
      { name: "Tigre", slug: "/zonas-de-cobertura/zona-norte/tigre", description: "Arenado industrial de alta calidad en Tigre - Equipamiento de última generación" },
      { name: "Vicente López", slug: "/zonas-de-cobertura/zona-norte/vicente-lopez", description: "Servicio de arenado industrial en Vicente López - Expertos en superficies metálicas" },
      { name: "San Fernando", slug: "/zonas-de-cobertura/zona-norte/san-fernando", description: "Arenado industrial profesional en San Fernando - Preparación para pintura industrial" },
      { name: "José C. Paz", slug: "/zonas-de-cobertura/zona-norte/jose-c-paz", description: "Arenado industrial especializado en José C. Paz - Eliminación total de óxido" },
      { name: "San Miguel", slug: "/zonas-de-cobertura/zona-norte/san-miguel", description: "Servicio de arenado industrial en San Miguel - Tratamiento profesional garantizado" },
      { name: "Malvinas Argentinas", slug: "/zonas-de-cobertura/zona-norte/malvinas-argentinas", description: "Arenado industrial certificado en Malvinas Argentinas - Máxima calidad" },
      { name: "General San Martín", slug: "/zonas-de-cobertura/zona-norte/general-san-martin", description: "Arenado industrial profesional en San Martín - Servicio integral" }
    ],
    "Zona Oeste": [
      { name: "Moreno", slug: "/zonas-de-cobertura/zona-oeste/moreno", description: "Arenado industrial especializado en Moreno - Servicio completo para industrias" },
      { name: "General Rodríguez", slug: "/zonas-de-cobertura/zona-oeste/general-rodriguez", description: "Arenado industrial en General Rodríguez - Tecnología de punta" },
      { name: "Ituzaingó", slug: "/zonas-de-cobertura/zona-oeste/ituzaingo", description: "Servicio profesional de arenado industrial en Ituzaingó - Resultados garantizados" },
      { name: "Morón", slug: "/zonas-de-cobertura/zona-oeste/moron", description: "Arenado industrial certificado en Morón - Experiencia y profesionalismo" },
      { name: "Hurlingham", slug: "/zonas-de-cobertura/zona-oeste/hurlingham", description: "Arenado industrial de calidad en Hurlingham - Servicio integral" },
      { name: "3 de Febrero", slug: "/zonas-de-cobertura/zona-oeste/3-de-febrero", description: "Arenado industrial profesional en 3 de Febrero - Soluciones efectivas" }
    ],
    "CABA": [
      { name: "Palermo", slug: "/zonas-de-cobertura/caba/palermo", description: "Servicio de arenado industrial en Palermo - Máxima calidad garantizada" },
      { name: "Recoleta", slug: "/zonas-de-cobertura/caba/recoleta", description: "Arenado industrial especializado en Recoleta - Tecnología avanzada" },
      { name: "Belgrano", slug: "/zonas-de-cobertura/caba/belgrano", description: "Arenado industrial profesional en Belgrano - Experiencia certificada" },
      { name: "Núñez", slug: "/zonas-de-cobertura/caba/nunez", description: "Servicio de arenado industrial en Núñez - Resultados duraderos" },
      { name: "Villa Crespo", slug: "/zonas-de-cobertura/caba/villa-crespo", description: "Arenado industrial certificado en Villa Crespo - Calidad superior" }
    ]
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Arenado Industrial Profesional en Buenos Aires",
    "serviceType": "Arenado Industrial y Tratamiento Anticorrosivo",
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
      "areaServed": ["Zona Norte", "Zona Oeste", "CABA"],
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150"
      }
    },
    "description": "Servicio profesional de arenado industrial para maquinaria pesada, tanques y estructuras metálicas en Buenos Aires. Más de 15 años de experiencia, equipamiento certificado y personal especializado. Cobertura total en Zona Norte, Oeste y CABA."
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="py-16 bg-gray-50" aria-label="Zonas de cobertura para arenado industrial profesional">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Arenado Industrial Profesional en Buenos Aires | Servicio Especializado Certificado
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              <strong>Expertos certificados en arenado industrial con más de 15 años de trayectoria comprobada.</strong> Ofrecemos 
              servicio especializado de arenado para maquinaria pesada, tanques industriales y estructuras metálicas en toda la región metropolitana. 
              Utilizamos equipamiento industrial certificado y contamos con personal altamente capacitado para garantizar resultados profesionales duraderos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.entries(coverageAreas).map(([zone, areas]) => (
              <div key={zone} className="bg-white rounded-lg shadow-md p-6" role="region" aria-label={`Servicio de arenado industrial en ${zone}`}>
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600 mr-2" aria-hidden="true" />
                  <h2 className="text-2xl font-bold text-gray-900">Arenado Industrial Profesional en {zone}</h2>
                </div>
                <ul className="flex flex-wrap gap-4">
                  {areas.map((area) => (
                    <li key={area.name}>
                      <Link 
                        href={area.slug}
                        className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                        title={area.description}
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
                ¿Necesita Servicio Profesional de Arenado Industrial en Su Zona?
              </h3>
              <p className="text-blue-800 mb-6 text-lg">
                Solicite presupuesto sin cargo para arenado industrial certificado en todo Buenos Aires. Garantizamos calidad superior y servicio profesional especializado para maquinaria pesada e instalaciones industriales.
              </p>
              <WhatsAppButton />
                  
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
