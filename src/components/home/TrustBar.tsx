"use client"

import { Shield, Award, Calendar, Briefcase } from "lucide-react"

const items = [
  { icon: Shield, label: "Documentación vigente" },
  { icon: Award, label: "Equipo seguro" },
  { icon: Calendar, label: "Adaptabilidad a tu cronograma" },
]

export default function TrustBar() {
  return (
    <section
      className="bg-white border-b border-gray-200 shadow-sm"
      aria-label="Confianza"
    >
      <div className="container mx-auto px-4 lg:px-8 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-start gap-3 md:gap-4"
            >
              <div className="flex-shrink-0 p-2.5 rounded-full bg-primary-100 text-primary-700">
                <Icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <span className="text-sm md:text-base font-semibold text-gray-800">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
