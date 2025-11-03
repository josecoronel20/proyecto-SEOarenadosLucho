import Link from "next/link"
import { MapPin } from "lucide-react"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function CoverageAreasSection() {
  const coverageAreas = {
    "Zona Norte": [
      { name: "Pilar", slug: "/zonas-de-cobertura/zona-norte/pilar", description: "Arenado y restauración profesional de muebles en Pilar - Servicio premium con 15 años de experiencia" },
      { name: "San Isidro", slug: "/zonas-de-cobertura/zona-norte/san-isidro", description: "Arenado y restauración de muebles antiguos en San Isidro - Servicio certificado con garantía" },
      { name: "Tigre", slug: "/zonas-de-cobertura/zona-norte/tigre", description: "Arenado profesional de muebles en Tigre - Especialistas en restauración y acabados premium" },
      { name: "Vicente López", slug: "/zonas-de-cobertura/zona-norte/vicente-lopez", description: "Arenado y restauración de muebles en Vicente López - Servicio integral garantizado" },
      { name: "San Fernando", slug: "/zonas-de-cobertura/zona-norte/san-fernando", description: "Arenado profesional de muebles en San Fernando - Restauración completa certificada" },
      { name: "José C. Paz", slug: "/zonas-de-cobertura/zona-norte/jose-c-paz", description: "Servicio premium de arenado de muebles en José C. Paz - Restauración profesional" },
      { name: "San Miguel", slug: "/zonas-de-cobertura/zona-norte/san-miguel", description: "Arenado y restauración de muebles en San Miguel - Servicio especializado con garantía" },
      { name: "Malvinas Argentinas", slug: "/zonas-de-cobertura/zona-norte/malvinas-argentinas", description: "Arenado profesional de muebles en Malvinas Argentinas - Calidad certificada" },
      { name: "General San Martín", slug: "/zonas-de-cobertura/zona-norte/general-san-martin", description: "Restauración y arenado de muebles en San Martín - Servicio integral premium" }
    ],
    "Zona Oeste": [
      { name: "Moreno", slug: "/zonas-de-cobertura/zona-oeste/moreno", description: "Arenado y restauración profesional de muebles en Moreno - Servicio especializado garantizado" },
      { name: "General Rodríguez", slug: "/zonas-de-cobertura/zona-oeste/general-rodriguez", description: "Arenado de muebles antiguos en General Rodríguez - Tecnología avanzada" },
      { name: "Ituzaingó", slug: "/zonas-de-cobertura/zona-oeste/ituzaingo", description: "Restauración y arenado de muebles en Ituzaingó - Calidad profesional certificada" },
      { name: "Morón", slug: "/zonas-de-cobertura/zona-oeste/moron", description: "Arenado profesional de muebles en Morón - 15 años de experiencia garantizada" },
      { name: "Hurlingham", slug: "/zonas-de-cobertura/zona-oeste/hurlingham", description: "Servicio premium de arenado de muebles en Hurlingham - Restauración integral" },
      { name: "3 de Febrero", slug: "/zonas-de-cobertura/zona-oeste/3-de-febrero", description: "Arenado y restauración de muebles en 3 de Febrero - Servicio profesional" }
    ],
    "CABA": [
      { name: "Palermo", slug: "/zonas-de-cobertura/caba/palermo", description: "Arenado profesional de muebles en Palermo - Servicio premium certificado" },
      { name: "Recoleta", slug: "/zonas-de-cobertura/caba/recoleta", description: "Restauración y arenado de muebles en Recoleta - Calidad garantizada" },
      { name: "Belgrano", slug: "/zonas-de-cobertura/caba/belgrano", description: "Arenado de muebles antiguos en Belgrano - Servicio especializado profesional" },
      { name: "Núñez", slug: "/zonas-de-cobertura/caba/nunez", description: "Arenado y restauración de muebles en Núñez - Resultados certificados" },
      { name: "Villa Crespo", slug: "/zonas-de-cobertura/caba/villa-crespo", description: "Servicio premium de arenado de muebles en Villa Crespo - Calidad superior" }
    ]
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Arenado y Restauración Profesional de Muebles en Buenos Aires",
    "serviceType": "Arenado y Restauración de Muebles",
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
    "description": "Servicio premium de arenado y restauración de muebles en Buenos Aires. 15 años de experiencia en restauración completa, eliminación de pintura antigua y acabados profesionales. Equipamiento especializado y personal certificado. Cobertura total en Zona Norte, Oeste y CABA con garantía de calidad."
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="py-16 bg-gray-50" aria-label="Zonas de cobertura para arenado y restauración profesional de muebles">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Arenado y Restauración Profesional de Muebles en Buenos Aires | 15 Años de Excelencia
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              <strong>Expertos certificados en arenado y restauración de muebles con más de 15 años de trayectoria comprobada.</strong> Brindamos 
              servicio premium especializado para muebles de madera y metal, restauración integral y eliminación garantizada de pintura antigua en toda la región metropolitana. 
              Utilizamos tecnología de última generación y contamos con técnicos altamente capacitados para asegurar resultados profesionales duraderos en cada proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.entries(coverageAreas).map(([zone, areas]) => (
              <div key={zone} className="bg-white rounded-lg shadow-md p-6" role="region" aria-label={`Servicio premium de arenado y restauración de muebles en ${zone}`}>
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600 mr-2" aria-hidden="true" />
                  <h2 className="text-2xl font-bold text-gray-900">Arenado y Restauración Profesional de Muebles en {zone}</h2>
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
                ¿Busca Servicio Premium de Arenado y Restauración de Muebles en Su Zona?
              </h3>
              <p className="text-blue-800 mb-6 text-lg">
                Solicite presupuesto sin cargo para arenado y restauración profesional de muebles en todo Buenos Aires. Garantizamos resultados superiores y servicio especializado premium para muebles antiguos y modernos.
              </p>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
