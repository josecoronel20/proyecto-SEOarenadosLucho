import Link from "next/link"
import { Section, SectionHead } from "@/components/common/system"

/**
 * Las objeciones reales, con el título en criollo.
 *
 * Antes esta sección se llamaba **"Mitigación de riesgo"**: lenguaje de pliego.
 * El cliente objetivo no busca mitigar riesgos, busca que algo deje de estar
 * descascarado sin que le frenen la obra.
 */
const objeciones = [
  {
    pregunta: "¿Me van a frenar la obra?",
    respuesta:
      "Coordinamos el cronograma con vos y trabajamos por sectores: intervenimos una zona y la liberamos. Si el plazo aprieta, sumamos equipos.",
  },
  {
    pregunta: "El polvo me complica las otras tareas",
    respuesta:
      "Por eso trabajamos por zonas y coordinamos horarios. En galpones y predios amplios no suele ser problema; en obra en marcha intervenimos un sector a la vez.",
  },
  {
    pregunta: "¿Queda bien para pintar después?",
    respuesta:
      "Es el objetivo del trabajo. Sacamos óxido, pintura vieja y suciedad y te entregamos la superficie pareja, lista para pintar, antióxido o revestimiento.",
  },
  {
    pregunta: "¿Cuánto me va a salir?",
    respuesta:
      "Depende de la superficie, el estado y el acceso. La visita y el presupuesto son sin costo: vamos, lo vemos y te pasamos un precio claro.",
  },
]

export function MitigacionRiesgo() {
  return (
    // Pregunta y respuesta en dos columnas, separadas por filete. Antes cada una
    // era una caja con el ícono en otro cuadradito adentro; el ícono además
    // ilustraba la pregunta (un calendario para "¿me frenan la obra?") sin
    // agregarle nada.
    <Section fondo="papel" aria-labelledby="objeciones">
      <SectionHead id="objeciones" titulo="Lo que siempre nos preguntan" />

      <div className="border-t border-papel-linea">
        {objeciones.map(({ pregunta, respuesta }) => (
          <div
            key={pregunta}
            className="grid gap-x-10 gap-y-2 border-b border-papel-linea py-6 md:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]"
          >
            <p className="font-semibold text-tinta">
              &ldquo;{pregunta}&rdquo;
            </p>
            <p className="text-tinta-70 leading-relaxed max-w-[62ch]">{respuesta}</p>
          </div>
        ))}
      </div>

      <p className="text-tinta-70 text-base leading-relaxed mt-8">
          ¿Tenés otra duda? Mirá las{" "}
          <Link
            href="/preguntas-frecuentes"
            className="text-maquina-700 font-semibold underline underline-offset-4"
          >
            preguntas frecuentes
          </Link>{" "}
          o escribinos y te la sacamos.
        </p>
    </Section>
  )
}
