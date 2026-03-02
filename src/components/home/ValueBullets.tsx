"use client"

import { Truck, FileCheck, Clock } from "lucide-react"

const bullets = [
  {
    icon: Truck,
    title: "Coordinación logística",
    text: "Planificación por etapas y sectores para no interferir con tu operación.",
  },
  {
    icon: Clock,
    title: "Aumento de rendimiento",
    text: "Capacidad de sumar equipos para cumplir con el cronograma.",
  },
  {
    icon: FileCheck,
    title: "Preparación según ISO 8501",
    text: "Determinamos el grado de limpieza y perfil de anclaje requerido para asegurar la correcta adherencia del recubrimiento.",
  },
]

export default function ValueBullets() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {bullets.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="p-3 rounded-lg bg-white border border-gray-200 shadow-sm">
                <Icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
