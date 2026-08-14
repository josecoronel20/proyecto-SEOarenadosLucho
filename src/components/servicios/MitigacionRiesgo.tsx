import { Calendar, Wind, Paintbrush, Wallet } from "lucide-react"
import Link from "next/link"

/**
 * Las objeciones reales, con el título en criollo.
 *
 * Antes esta sección se llamaba **"Mitigación de riesgo"**: lenguaje de pliego.
 * El cliente objetivo no busca mitigar riesgos, busca que algo deje de estar
 * descascarado sin que le frenen la obra.
 */
const objeciones = [
  {
    icon: Calendar,
    pregunta: "¿Me van a frenar la obra?",
    respuesta:
      "Coordinamos el cronograma con vos y trabajamos por sectores: intervenimos una zona y la liberamos. Si el plazo aprieta, sumamos equipos.",
  },
  {
    icon: Wind,
    pregunta: "El polvo me complica las otras tareas",
    respuesta:
      "Por eso trabajamos por zonas y coordinamos horarios. En galpones y predios amplios no suele ser problema; en obra en marcha intervenimos un sector a la vez.",
  },
  {
    icon: Paintbrush,
    pregunta: "¿Queda bien para pintar después?",
    respuesta:
      "Es el objetivo del trabajo. Sacamos óxido, pintura vieja y suciedad y te entregamos la superficie pareja, lista para pintar, antióxido o revestimiento.",
  },
  {
    icon: Wallet,
    pregunta: "¿Cuánto me va a salir?",
    respuesta:
      "Depende de la superficie, el estado y el acceso. La visita y el presupuesto son sin costo: vamos, lo vemos y te pasamos un precio claro.",
  },
]

export function MitigacionRiesgo() {
  return (
    <section
      className="py-14 md:py-20 border-b border-gray-200 bg-white"
      aria-labelledby="objeciones"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <h2
          id="objeciones"
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center"
        >
          Lo que siempre nos preguntan
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {objeciones.map(({ icon: Icon, pregunta, respuesta }) => (
            <div
              key={pregunta}
              className="rounded-xl border border-gray-200 bg-gray-50/50 p-5"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2 rounded-lg bg-primary-100 text-primary-700">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    &ldquo;{pregunta}&rdquo;
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed">{respuesta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-700 text-base leading-relaxed text-center mt-8">
          ¿Tenés otra duda? Mirá las{" "}
          <Link
            href="/preguntas-frecuentes"
            className="text-primary-600 font-semibold hover:underline"
          >
            preguntas frecuentes
          </Link>{" "}
          o escribinos y te la sacamos.
        </p>
      </div>
    </section>
  )
}
