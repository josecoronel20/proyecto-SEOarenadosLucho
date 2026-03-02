"use client"

import { CalendarCheck, MapPin, Zap, FileCheck, Target, DoorOpen, Fence, UserCheck } from "lucide-react"

const requisitos = [
  { icon: DoorOpen, text: "Accesos definidos" },
  { icon: FileCheck, text: "Permisos de intervención" },
  { icon: Fence, text: "Corte de área si se decide clausurar" },
  { icon: UserCheck, text: "Coordinación con encargado de obra" },
]

const logistica = [
  { icon: CalendarCheck, text: "Coordinamos fases con el encargado de obra" },
  { icon: MapPin, text: "Clausuramos zonas estratégicamente para intervenir y liberar rápido" },
  { icon: Zap, text: "Compresores propios (no dependemos de energía de obra)" },
  { icon: FileCheck, text: "Accesos y permisos acordados antes de iniciar" },
]

const sectionClass = "py-10 md:py-14 border-b border-gray-200 bg-white"
const titleClass = "text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center"
const iconBoxClass = "flex-shrink-0 p-2 rounded-lg bg-primary-100 text-primary-700 mt-0.5"
const iconSizeClass = "w-5 h-5"
const textClass = "text-gray-700 text-base leading-relaxed pt-1"

export function LogisticaCoordinacion() {
  return (
    <section className={sectionClass} aria-label="Logística y requisitos">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className={titleClass}>Logística y coordinación</h2>
          
          <p className="text-gray-700 text-base leading-relaxed mb-6 text-center">
            El mayor problema no es el arenado, sino el impacto en el cronograma. Por eso coordinamos todo con el encargado y trabajamos por zonas para intervenir y liberar lo antes posible.
          </p>

          <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-5 md:p-6 mb-6">
            <p className="font-semibold text-gray-900 mb-4">Para iniciar necesitamos:</p>
            <ul className="space-y-3">
              {requisitos.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-4">
                  <div className={iconBoxClass}>
                    <Icon className={iconSizeClass} />
                  </div>
                  <span className={textClass}>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-5 md:p-6 mb-6">
            <p className="font-semibold text-gray-900 mb-4">Cómo trabajamos:</p>
            <ul className="space-y-3">
              {logistica.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-4">
                  <div className={iconBoxClass}>
                    <Icon className={iconSizeClass} />
                  </div>
                  <span className={textClass}>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-primary-200 bg-primary-50/50 p-4">
            <Target className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
            <p className="text-gray-800 font-semibold text-base leading-relaxed">
              Objetivo: intervenir, terminar y liberar el sector lo antes posible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
