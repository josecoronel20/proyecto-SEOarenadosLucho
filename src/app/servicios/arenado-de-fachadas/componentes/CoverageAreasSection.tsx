import Link from "next/link"
import { MapPin } from "lucide-react"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function CoverageAreasSection() {
  const coverageAreas = {
    "Zona Norte": [
      { name: "Pilar", slug: "/zonas-de-cobertura/zona-norte/pilar", description: "Arenado de fachadas profesional en Pilar 2024 - Servicio especializado para edificios residenciales y comerciales" },
      { name: "San Isidro", slug: "/zonas-de-cobertura/zona-norte/san-isidro", description: "Arenado de fachadas certificado en San Isidro 2024 - Limpieza de fachadas garantizada" },
      { name: "Tigre", slug: "/zonas-de-cobertura/zona-norte/tigre", description: "Arenado de fachadas de alta calidad en Tigre 2024 - Preparación para pintura exterior profesional" },
      { name: "Vicente López", slug: "/zonas-de-cobertura/zona-norte/vicente-lopez", description: "Servicio de arenado de fachadas en Vicente López 2024 - Expertos en limpieza de edificios" },
      { name: "San Fernando", slug: "/zonas-de-cobertura/zona-norte/san-fernando", description: "Arenado de fachadas profesional en San Fernando 2024 - Eliminación de pintura antigua" },
      { name: "José C. Paz", slug: "/zonas-de-cobertura/zona-norte/jose-c-paz", description: "Arenado de fachadas especializado en José C. Paz 2024 - Limpieza completa garantizada" },
      { name: "San Miguel", slug: "/zonas-de-cobertura/zona-norte/san-miguel", description: "Servicio de arenado de fachadas en San Miguel 2024 - Tratamiento profesional para edificios" },
      { name: "Malvinas Argentinas", slug: "/zonas-de-cobertura/zona-norte/malvinas-argentinas", description: "Arenado de fachadas certificado en Malvinas Argentinas 2024 - Máxima calidad en limpieza" },
      { name: "General San Martín", slug: "/zonas-de-cobertura/zona-norte/general-san-martin", description: "Arenado de fachadas profesional en San Martín 2024 - Servicio integral de limpieza" }
    ],
    "Zona Oeste": [
      { name: "Moreno", slug: "/zonas-de-cobertura/zona-oeste/moreno", description: "Arenado de fachadas especializado en Moreno 2024 - Servicio completo para edificios residenciales" },
      { name: "General Rodríguez", slug: "/zonas-de-cobertura/zona-oeste/general-rodriguez", description: "Arenado de fachadas en General Rodríguez 2024 - Tecnología especializada en limpieza" },
      { name: "Ituzaingó", slug: "/zonas-de-cobertura/zona-oeste/ituzaingo", description: "Servicio profesional de arenado de fachadas en Ituzaingó 2024 - Resultados garantizados" },
      { name: "Morón", slug: "/zonas-de-cobertura/zona-oeste/moron", description: "Arenado de fachadas certificado en Morón 2024 - Experiencia en limpieza de fachadas" },
      { name: "Hurlingham", slug: "/zonas-de-cobertura/zona-oeste/hurlingham", description: "Arenado de fachadas de calidad en Hurlingham 2024 - Servicio integral de limpieza" },
      { name: "3 de Febrero", slug: "/zonas-de-cobertura/zona-oeste/3-de-febrero", description: "Arenado de fachadas profesional en 3 de Febrero 2024 - Soluciones efectivas para edificios" }
    ],
    "CABA": [
      { name: "Palermo", slug: "/zonas-de-cobertura/caba/palermo", description: "Servicio de arenado de fachadas en Palermo 2024 - Máxima calidad garantizada en limpieza" },
      { name: "Recoleta", slug: "/zonas-de-cobertura/caba/recoleta", description: "Arenado de fachadas especializado en Recoleta 2024 - Tecnología avanzada para edificios" },
      { name: "Belgrano", slug: "/zonas-de-cobertura/caba/belgrano", description: "Arenado de fachadas profesional en Belgrano 2024 - Experiencia certificada en limpieza" },
      { name: "Núñez", slug: "/zonas-de-cobertura/caba/nunez", description: "Servicio de arenado de fachadas en Núñez 2024 - Resultados duraderos en limpieza" },
      { name: "Villa Crespo", slug: "/zonas-de-cobertura/caba/villa-crespo", description: "Arenado de fachadas certificado en Villa Crespo 2024 - Calidad superior en limpieza" }
    ]
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Arenado de Fachadas Profesional en Buenos Aires 2024",
    "serviceType": "Arenado de Fachadas y Limpieza de Edificios",
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
      "name": "Arenados Lucho - Expertos en Fachadas Buenos Aires",
      "image": "/images/logo.webp",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Buenos Aires",
        "addressCountry": "AR"
      },
      "areaServed": ["Zona Norte GBA", "Zona Oeste GBA", "Ciudad Autónoma de Buenos Aires"],
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "140"
      }
    },
    "description": "Servicio profesional de arenado para fachadas residenciales y comerciales en Buenos Aires 2024. Limpieza completa, eliminación de pintura antigua y preparación para pintura exterior. Más de 15 años de experiencia local, equipamiento especializado y personal calificado. Cobertura total en Zona Norte, Oeste y CABA."
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="py-16 bg-gray-50" aria-label="Zonas de cobertura para arenado de fachadas profesional en Buenos Aires 2024">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Arenado de Fachadas Profesional en Buenos Aires 2024 | Servicio Local Especializado
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              <strong>Expertos locales certificados en arenado de fachadas con más de 15 años de experiencia en Buenos Aires.</strong> Brindamos 
              servicio especializado de arenado para fachadas residenciales y comerciales, limpieza integral y eliminación de pintura antigua en toda la región metropolitana. 
              Utilizamos equipamiento de última generación y contamos con personal local altamente capacitado para garantizar resultados profesionales duraderos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.entries(coverageAreas).map(([zone, areas]) => (
              <div key={zone} className="bg-white rounded-lg shadow-md p-6" role="region" aria-label={`Servicio de arenado de fachadas en ${zone} Buenos Aires 2024`}>
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600 mr-2" aria-hidden="true" />
                  <h2 className="text-2xl font-bold text-gray-900">Arenado de Fachadas en {zone} 2024</h2>
                </div>
                <ul className="flex flex-wrap gap-4">
                  {areas.map((area) => (
                    <li key={area.name}>
                      <Link 
                        href={area.slug}
                        className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                        title={`Arenado de fachadas en ${area.name} 2024 - Servicio local profesional`}
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
                ¿Busca Servicio Local de Arenado de Fachadas en Buenos Aires 2024?
              </h3>
              <p className="text-blue-800 mb-6 text-lg">
                Solicite presupuesto sin cargo para arenado de fachadas certificado en su zona. Garantizamos calidad superior y atención personalizada por expertos locales en limpieza de fachadas residenciales y comerciales.
              </p>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
