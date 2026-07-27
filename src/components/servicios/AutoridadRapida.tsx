"use client"

import { Shield, Building2, CircleDot, Wrench } from "lucide-react"

const items = [
  { icon: Shield, label: "Seguros vigentes" },
  { icon: Building2, label: "Ejecución en obras públicas" },
  { icon: CircleDot, label: "Superficie lista para pintar o revestir" },
  { icon: Wrench, label: "Equipos propios" },
]

const sectionClass = "py-10 md:py-14 border-b border-gray-200 bg-gray-50"
const iconBoxClass = "flex-shrink-0 p-2 rounded-lg bg-primary-100 text-primary-700"
const iconSizeClass = "w-5 h-5"

export function AutoridadRapida() {
  return (
    <section className={sectionClass} aria-label="Autoridad técnica">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-white"
            >
              <div className={iconBoxClass}>
                <Icon className={iconSizeClass} />
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
