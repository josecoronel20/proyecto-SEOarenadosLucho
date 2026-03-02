import { Check, X } from "lucide-react"

const proyectosQueRealizamos = [
  "Estructuras metálicas industriales",
  "Plantas fabriles y depósitos",
  "Tanques y silos",
  "Obras en construcción y mantenimiento industrial",
  "Infraestructura pública y privada",
  "Proyectos de gran superficie y alto volumen",
]

const trabajosQueNoRealizamos = [
  "Muebles",
  "Portones domiciliarios",
  "Rejas de hogar",
  "Vehículos o llantas",
  "Trabajos artesanales o pequeños",
]

export function IntroductionSection() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Párrafo de posicionamiento */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center mb-12 md:mb-14">
            Somos una empresa especializada en preparación de superficies industriales para obras, mantenimiento y recuperación estructural. Intervenimos en plantas, naves, estructuras metálicas y equipamiento de gran porte, cumpliendo estándares técnicos exigentes y plazos operativos definidos.
          </p>

          <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
            {/* Qué tipo de proyectos realizamos */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Qué tipo de proyectos realizamos
              </h2>
              <ul className="space-y-2.5">
                {proyectosQueRealizamos.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Qué tipo de trabajos no realizamos */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Qué tipo de trabajos no realizamos
              </h2>
              <ul className="space-y-2.5">
                {trabajosQueNoRealizamos.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
