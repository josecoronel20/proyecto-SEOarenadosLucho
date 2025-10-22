import Link from "next/link"
import { MapPin, Phone } from "lucide-react"

export function CoverageAreasSection() {
  const coverageAreas = {
    "Zona Norte": [
      { name: "Pilar", slug: "/zonas-de-cobertura/zona-norte/pilar", description: "Arenado de vehículos en Pilar" },
      { name: "San Isidro", slug: "/zonas-de-cobertura/zona-norte/san-isidro", description: "Arenado de vehículos en San Isidro" },
      { name: "Tigre", slug: "/zonas-de-cobertura/zona-norte/tigre", description: "Arenado de vehículos en Tigre" },
      { name: "Vicente López", slug: "/zonas-de-cobertura/zona-norte/vicente-lopez", description: "Arenado de vehículos en Vicente López" },
      { name: "San Fernando", slug: "/zonas-de-cobertura/zona-norte/san-fernando", description: "Arenado de vehículos en San Fernando" },
      { name: "José C. Paz", slug: "/zonas-de-cobertura/zona-norte/jose-c-paz", description: "Arenado de vehículos en José C. Paz" },
      { name: "San Miguel", slug: "/zonas-de-cobertura/zona-norte/san-miguel", description: "Arenado de vehículos en San Miguel" },
      { name: "Malvinas Argentinas", slug: "/zonas-de-cobertura/zona-norte/malvinas-argentinas", description: "Arenado de vehículos en Malvinas Argentinas" },
      { name: "General San Martín", slug: "/zonas-de-cobertura/zona-norte/general-san-martin", description: "Arenado de vehículos en General San Martín" }
    ],
    "Zona Oeste": [
      { name: "Moreno", slug: "/zonas-de-cobertura/zona-oeste/moreno", description: "Arenado de vehículos en Moreno" },
      { name: "General Rodríguez", slug: "/zonas-de-cobertura/zona-oeste/general-rodriguez", description: "Arenado de vehículos en General Rodríguez" },
      { name: "Ituzaingó", slug: "/zonas-de-cobertura/zona-oeste/ituzaingo", description: "Arenado de vehículos en Ituzaingó" },
      { name: "Morón", slug: "/zonas-de-cobertura/zona-oeste/moron", description: "Arenado de vehículos en Morón" },
      { name: "Hurlingham", slug: "/zonas-de-cobertura/zona-oeste/hurlingham", description: "Arenado de vehículos en Hurlingham" },
      { name: "3 de Febrero", slug: "/zonas-de-cobertura/zona-oeste/3-de-febrero", description: "Arenado de vehículos en 3 de Febrero" }
    ],
    "CABA": [
      { name: "Palermo", slug: "/zonas-de-cobertura/caba/palermo", description: "Arenado de vehículos en Palermo" },
      { name: "Recoleta", slug: "/zonas-de-cobertura/caba/recoleta", description: "Arenado de vehículos en Recoleta" },
      { name: "Belgrano", slug: "/zonas-de-cobertura/caba/belgrano", description: "Arenado de vehículos en Belgrano" },
      { name: "Núñez", slug: "/zonas-de-cobertura/caba/nunez", description: "Arenado de vehículos en Núñez" },
      { name: "Villa Crespo", slug: "/zonas-de-cobertura/caba/villa-crespo", description: "Arenado de vehículos en Villa Crespo" }
    ]
  }

  return (
    <section className="py-16 bg-gray-50" aria-label="Zonas de cobertura para arenado de vehículos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Servicio de Arenado de Vehículos en Buenos Aires | Zona Norte, Oeste y CABA
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            <strong>Servicio profesional de arenado automotriz en toda la región metropolitana.</strong> Especialistas 
            en arenado de autos, camionetas y vehículos comerciales en Pilar, San Isidro, Tigre y todo Buenos Aires. 
            Contamos con equipos móviles para brindar servicio en tu zona.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(coverageAreas).map(([zone, areas]) => (
            <div key={zone} className="bg-white rounded-lg shadow-md p-6" role="region" aria-label={`Cobertura en ${zone}`}>
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-blue-600 mr-2" aria-hidden="true" />
                <h3 className="text-xl font-bold text-gray-900">Arenado en {zone}</h3>
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

        <div className="mt-8 text-center">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              ¿Necesitás Arenado de Vehículos en Tu Zona?
            </h3>
            <p className="text-blue-800 mb-4">
              Brindamos servicio en todo el Gran Buenos Aires. Consultá disponibilidad y presupuesto para tu ubicación.
            </p>
            <Link 
              href="https://wa.me/5491123787750?text=Hola,%20necesito%20presupuesto%20para%20arenado%20de%20vehiculo%20en%20mi%20zona"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              aria-label="Consultar cobertura de servicio de arenado por WhatsApp"
            >
              <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
              Consultá Ahora por WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
