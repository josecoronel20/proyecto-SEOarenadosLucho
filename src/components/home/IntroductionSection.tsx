import { Check, X } from "lucide-react"

const proyectosQueRealizamos = [
  "Arenado en obra y construcción",
  "Estructuras metálicas, tanques y silos",
  "Restauración de fachadas y paredes",
  "Hierros, camiones y acoplados en tu galpón (in situ)",
  "Piletas listas para repintar o revestir",
  "Plantas, naves y trabajos de gran superficie",
]

const trabajosQueNoRealizamos = [
  "Muebles",
  "Portones y rejas de hogar",
  "Autos y motos particulares",
  "Trabajos artesanales o piezas sueltas chicas",
  "Granallado o arenado certificado con normas",
]

export function IntroductionSection() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Párrafo de posicionamiento */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center mb-12 md:mb-14">
            ¿Se te descascara la pintura o tenés óxido y superficies viejas? El arenado es como una lija potente: saca de una toda la pintura vieja, el óxido y lo descascarado, y deja la superficie lista para pintar o revestir. Hacemos arenado sin vueltas, in situ —en obra, en tu galpón o en tu casa— sobre estructuras, tanques, fachadas, hierros y piletas, con equipo propio y plazos claros.
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
