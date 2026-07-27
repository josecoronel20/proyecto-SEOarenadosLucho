"use client"

import { Calendar, Wind, Paintbrush } from "lucide-react"
import Link from "next/link"

const objeciones = [
  {
    icon: Calendar,
    pregunta: "¿Van a retrasar la obra?",
    respuesta: "Cronograma definido y posibilidad de ampliar equipos.",
  },
  {
    icon: Wind,
    pregunta: "El polvo afecta otras tareas",
    respuesta: "Trabajamos por zonas: intervenimos y liberamos el sector rápido.",
  },
  {
    icon: Paintbrush,
    pregunta: "¿Queda bien para pintar después?",
    respuesta: "Sacamos óxido, pintura vieja y suciedad, y te dejamos la superficie pareja y lista para pintar o revestir.",
  },
]

export function MitigacionRiesgo() {
  return (
    <section
      className="py-10 md:py-14 border-b border-gray-200 bg-white"
      aria-label="Mitigación de riesgo"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
          Mitigación de riesgo
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {objeciones.map(({ icon: Icon, pregunta, respuesta }) => (
            <div
              key={pregunta}
              className="rounded-xl border border-gray-200 bg-gray-50/50 p-4 md:p-5"
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

        <div/>
      <p className="text-gray-700 text-base leading-relaxed text-center"> ¿Tenés más dudas? Visitá nuestra sección de<Link href="/preguntas-frecuentes" className="text-primary-700 font-semibold hover:underline">Preguntas frecuentes</Link> o <Link href="/contacto" className="text-primary-700 font-semibold hover:underline">contactanos</Link>.</p>
      </div>
    </section>
  )
}
