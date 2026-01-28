import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Truck, Wrench, FileCheck, CheckCircle2 } from "lucide-react"
import { PROJECT } from "@/config/project"
import { CTAActionButtons } from "@/components/common/CTAActionButtons"

export function CoverageZonesSection() {
  const coverageZones = [
    {
      id: "zona-norte",
      title: "Zona Norte",
      description: "Prestamos servicio en localidades como Pilar, San Isidro, Tigre, San Fernando y alrededores.",
      detail: "Zona con alta demanda industrial, obras, galpones y proyectos de mantenimiento.",
      areas: PROJECT.coverage.zonaNorte,
      color: "border-blue-200 bg-blue-50",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      id: "zona-oeste", 
      title: "Zona Oeste",
      description: "Cubrimos General Rodríguez, Moreno, Morón, Ituzaingó y zonas cercanas.",
      detail: "Trabajos en plantas, obras en ejecución y proyectos de reacondicionamiento.",
      areas: PROJECT.coverage.zonaOeste,
      color: "border-green-200 bg-green-50",
      iconColor: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      id: "caba",
      title: "CABA",
      description: "Servicio en toda la Ciudad Autónoma de Buenos Aires.",
      detail: "Coordinación logística y operativa según accesos, horarios y normativa urbana.",
      areas: PROJECT.coverage.caba,
      color: "border-purple-200 bg-purple-50",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ]

  const operationPoints = [
    {
      icon: Truck,
      text: "Traslado con equipos y personal propio"
    },
    {
      icon: Wrench,
      text: "Trabajo en obra o retiro a taller según el caso"
    },
    {
      icon: FileCheck,
      text: "Coordinación previa de accesos y tiempos"
    },
    {
      icon: CheckCircle2,
      text: "Adaptación a normativas y condiciones del lugar"
    }
  ]

  return (
    <section className="py-16 bg-white" aria-labelledby="coverage-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Bloque 1 – Alcance del servicio */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 id="coverage-heading" className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Alcance del servicio
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Trabajamos de forma regular en las principales zonas del AMBA, atendiendo tanto proyectos industriales como trabajos generales.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nuestra operación está preparada para trasladarse y ejecutar el servicio según las condiciones y requerimientos de cada proyecto.
            </p>
          </div>

          {/* Bloque 2 – Zonas donde operamos */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
              Zonas donde operamos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coverageZones.map((zone) => (
                <Card key={zone.id} className={`${zone.color} hover:shadow-lg transition-shadow`}>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`${zone.bgColor} p-3 rounded-full`}>
                        <MapPin className={`h-6 w-6 ${zone.iconColor}`} aria-hidden="true" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">{zone.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      {zone.description}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {zone.detail}
                    </p>
                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="font-semibold mb-3 text-gray-900">Localidades:</h4>
                      <div className="flex flex-wrap gap-2">
                        {zone.areas.slice(0, 5).map((area) => (
                          <span 
                            key={area}
                            className="bg-white/70 px-2 py-1 rounded text-xs font-medium text-gray-700"
                          >
                            {area}
                          </span>
                        ))}
                        {zone.areas.length > 5 && (
                          <span className="bg-white/70 px-2 py-1 rounded text-xs font-medium text-gray-700">
                            +{zone.areas.length - 5} más
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Bloque 3 – Cómo operamos en cada zona */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
              Cómo operamos en cada zona
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {operationPoints.map((point, index) => {
                const Icon = point.icon
                return (
                  <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                      <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <p className="text-gray-700 font-medium">{point.text}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Bloque 4 – Proyectos dentro y fuera de estas zonas */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Proyectos dentro y fuera de estas zonas
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 max-w-3xl mx-auto">
              Si tu proyecto se encuentra fuera de estas áreas, podemos evaluarlo.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
              Analizamos la ubicación, el alcance del trabajo y la logística para confirmar viabilidad.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  )
}
