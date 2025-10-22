import Link from "next/link"
import { MapPin, Phone } from "lucide-react"

export function CoverageAreasSection() {
  const coverageAreas = {
    "Zona Norte": [
      { name: "Tigre", slug: "/zonas-de-cobertura/zona-norte/tigre", description: "Arenado de barcos en Tigre" },
      { name: "San Fernando", slug: "/zonas-de-cobertura/zona-norte/san-fernando", description: "Arenado de barcos en San Fernando" },
      { name: "San Isidro", slug: "/zonas-de-cobertura/zona-norte/san-isidro", description: "Arenado de barcos en San Isidro" },
      { name: "Vicente López", slug: "/zonas-de-cobertura/zona-norte/vicente-lopez", description: "Arenado de barcos en Vicente López" },
      { name: "Pilar", slug: "/zonas-de-cobertura/zona-norte/pilar", description: "Arenado de barcos en Pilar" },
      { name: "Nordelta", slug: "/zonas-de-cobertura/zona-norte/nordelta", description: "Arenado de barcos en Nordelta" },
      { name: "Puerto Madero", slug: "/zonas-de-cobertura/caba/puerto-madero", description: "Arenado de barcos en Puerto Madero" }
    ],
    "Zona Oeste": [
      { name: "Moreno", slug: "/zonas-de-cobertura/zona-oeste/moreno", description: "Arenado de barcos en Moreno" },
      { name: "General Rodríguez", slug: "/zonas-de-cobertura/zona-oeste/general-rodriguez", description: "Arenado de barcos en General Rodríguez" },
      { name: "Ituzaingó", slug: "/zonas-de-cobertura/zona-oeste/ituzaingo", description: "Arenado de barcos en Ituzaingó" },
      { name: "Morón", slug: "/zonas-de-cobertura/zona-oeste/moron", description: "Arenado de barcos en Morón" }
    ],
    "CABA": [
      { name: "Puerto Madero", slug: "/zonas-de-cobertura/caba/puerto-madero", description: "Arenado de barcos en Puerto Madero" },
      { name: "Costanera Sur", slug: "/zonas-de-cobertura/caba/costanera-sur", description: "Arenado de barcos en Costanera Sur" },
      { name: "Núñez", slug: "/zonas-de-cobertura/caba/nunez", description: "Arenado de barcos en Núñez" },
      { name: "Belgrano", slug: "/zonas-de-cobertura/caba/belgrano", description: "Arenado de barcos en Belgrano" }
    ]
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Zonas que Cubrimos - Arenado de Barcos en Buenos Aires
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            <strong>Arenado de barcos en Zona Norte, Oeste y CABA.</strong> Brindamos servicio profesional 
            de arenado para embarcaciones en toda la región metropolitana de Buenos Aires con equipos especializados.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(coverageAreas).map(([zone, areas]) => (
            <div key={zone} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">{zone}</h3>
              </div>
              <ul className="flex flex-wrap gap-4">
                {areas.map((area) => (
                  <li key={area.name}>
                    <Link 
                      href={area.slug}
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                      title={area.description}
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
              ¿No encontrás tu zona náutica?
            </h3>
            <p className="text-blue-800 mb-4">
              Cubrimos gran parte del Gran Buenos Aires y zonas náuticas. Consultanos por tu ubicación específica.
            </p>
            <Link 
              href="https://wa.me/5491123787750?text=Hola,%20necesito%20arenado%20de%20barco%20en%20mi%20zona"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <Phone className="h-5 w-5 mr-2" />
              Consultar Cobertura Naval por WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
