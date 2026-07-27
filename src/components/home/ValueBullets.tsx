"use client"

import { Truck, Paintbrush, Clock } from "lucide-react"

const bullets = [
  {
    icon: Truck,
    title: "Trabajamos in situ",
    text: "Vamos con nuestro equipo y compresores propios a tu obra, galpón o casa. No trasladás nada.",
  },
  {
    icon: Clock,
    title: "Rápido y sin frenar tu obra",
    text: "Trabajamos por sectores y podemos sumar equipos para cumplir con tu cronograma.",
  },
  {
    icon: Paintbrush,
    title: "Listo para pintar o revestir",
    text: "Sacamos óxido, pintura vieja y suciedad y te dejamos la superficie pareja, lista para pintar, antióxido o revestimiento.",
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
