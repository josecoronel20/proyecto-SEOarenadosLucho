import { Check, X } from "lucide-react"

const realizamos = [
  "Arenado en obra y construcción",
  "Estructuras metálicas, tanques y silos",
  "Restauración de fachadas, paredes y ladrillo a la vista",
  "Hierros, camiones y acoplados en tu galpón (in situ)",
  "Piletas listas para repintar o revestir",
  "Plantas, naves y trabajos de gran superficie",
]

const noRealizamos = [
  "Muebles y piezas sueltas chicas",
  "Portones y rejas de hogar",
  "Autos y motos particulares",
  "El pintado o el revestimiento final",
  "Granallado o arenado certificado con normas",
]

/**
 * La puerta de entrada del visitante que NO conoce la palabra "arenado" — un
 * segmento entero del negocio (el dueño de casa busca "sacar la pintura de la
 * pileta", no "arenado"). Por eso explica el servicio en criollo antes de vender.
 *
 * La lista de "lo que no hacemos" no es humildad: filtra al comprador equivocado
 * (que cuesta plata en Ads y tiempo en WhatsApp) y le da credibilidad al que sí
 * sirve. Incluye el límite que más malentendidos genera: no pintamos.
 */
export function IntroductionSection() {
  return (
    <section className="py-14 md:py-20 bg-white border-b border-gray-200" aria-labelledby="que-es">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2
            id="que-es"
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center"
          >
            ¿Qué es el arenado y para qué te sirve?
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center mb-4">
            Si se te descascara la pintura, tenés óxido o una superficie vieja, el arenado es la
            forma más rápida de resolverlo: lanzamos arena a presión y sacamos de una sola vez la
            pintura vieja, el óxido y todo lo flojo, sin lijar ni rascar a mano.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center mb-12">
            Lo hacemos <strong>in situ</strong> —en tu obra, en tu galpón o en tu casa— y te
            entregamos la superficie limpia y pareja,{" "}
            <strong>lista para pintar o revestir</strong>. La mano final la das vos, tu pintor o
            tu piletero, con el material que elijas.
          </p>

          <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Qué arenamos</h3>
              <ul className="space-y-2.5">
                {realizamos.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Qué no hacemos</h3>
              <ul className="space-y-2.5">
                {noRealizamos.map((item) => (
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
