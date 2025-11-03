import Link from "next/link"
import { MapPin, Phone } from "lucide-react"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function CoverageAreasSection() {
  const coverageAreas = {
    "Zona Norte": [
      { name: "Pilar", slug: "/zonas-de-cobertura/zona-norte/pilar", description: "Arenado de piletas en Pilar" },
      { name: "San Isidro", slug: "/zonas-de-cobertura/zona-norte/san-isidro", description: "Arenado de piletas en San Isidro" },
      { name: "Tigre", slug: "/zonas-de-cobertura/zona-norte/tigre", description: "Arenado de piletas en Tigre" },
      { name: "Vicente López", slug: "/zonas-de-cobertura/zona-norte/vicente-lopez", description: "Arenado de piletas en Vicente López" },
      { name: "San Fernando", slug: "/zonas-de-cobertura/zona-norte/san-fernando", description: "Arenado de piletas en San Fernando" },
      { name: "José C. Paz", slug: "/zonas-de-cobertura/zona-norte/jose-c-paz", description: "Arenado de piletas en José C. Paz" },
      { name: "San Miguel", slug: "/zonas-de-cobertura/zona-norte/san-miguel", description: "Arenado de piletas en San Miguel" },
      { name: "Malvinas Argentinas", slug: "/zonas-de-cobertura/zona-norte/malvinas-argentinas", description: "Arenado de piletas en Malvinas Argentinas" },
      { name: "General San Martín", slug: "/zonas-de-cobertura/zona-norte/general-san-martin", description: "Arenado de piletas en General San Martín" },
      { name: "Cardales", slug: "/zonas-de-cobertura/zona-norte/cardales", description: "Arenado de piletas en Cardales" },
      { name: "Zárate", slug: "/zonas-de-cobertura/zona-norte/zarate", description: "Arenado de piletas en Zárate" }
    ],
    "Zona Oeste": [
      { name: "Moreno", slug: "/zonas-de-cobertura/zona-oeste/moreno", description: "Arenado de piletas en Moreno" },
      { name: "General Rodríguez", slug: "/zonas-de-cobertura/zona-oeste/general-rodriguez", description: "Arenado de piletas en General Rodríguez" },
      { name: "Ituzaingó", slug: "/zonas-de-cobertura/zona-oeste/ituzaingo", description: "Arenado de piletas en Ituzaingó" },
      { name: "Morón", slug: "/zonas-de-cobertura/zona-oeste/moron", description: "Arenado de piletas en Morón" },
      { name: "Hurlingham", slug: "/zonas-de-cobertura/zona-oeste/hurlingham", description: "Arenado de piletas en Hurlingham" },
      { name: "3 de Febrero", slug: "/zonas-de-cobertura/zona-oeste/3-de-febrero", description: "Arenado de piletas en 3 de Febrero" }
    ],
    "CABA": [
      { name: "Palermo", slug: "/zonas-de-cobertura/caba/palermo", description: "Arenado de piletas en Palermo" },
      { name: "Recoleta", slug: "/zonas-de-cobertura/caba/recoleta", description: "Arenado de piletas en Recoleta" },
      { name: "Belgrano", slug: "/zonas-de-cobertura/caba/belgrano", description: "Arenado de piletas en Belgrano" },
      { name: "Núñez", slug: "/zonas-de-cobertura/caba/nunez", description: "Arenado de piletas en Núñez" },
      { name: "Villa Crespo", slug: "/zonas-de-cobertura/caba/villa-crespo", description: "Arenado de piletas en Villa Crespo" }
    ]
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Zonas que Cubrimos - Arenado de Piletas en Buenos Aires
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            <strong>Arenado de piletas en Zona Norte, Oeste y CABA.</strong> Brindamos servicio profesional 
            de arenado para piletas en toda la región metropolitana de Buenos Aires con equipos móviles.
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
              ¿No encontrás tu zona?
            </h3>
            <p className="text-blue-800 mb-4">
              Cubrimos gran parte del Gran Buenos Aires. Consultanos por tu ubicación específica.
            </p>
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </section>
  )
}
