"use client"

import { DoorOpen, FileCheck, Fence, UserCheck } from "lucide-react"

const items = [
  { icon: DoorOpen, text: "Accesos definidos" },
  { icon: FileCheck, text: "Permisos de intervención" },
  { icon: Fence, text: "Corte de área si se decide clausurar" },
  { icon: UserCheck, text: "Coordinación con encargado de obra" },
]

export function RequisitosCliente() {
  return (
    <section
      className="bg-white py-12 md:py-16 border-b border-gray-200"
      aria-label="Requisitos del cliente"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Requisitos del cliente
          </h2>
          <p className="text-gray-700 font-semibold mb-6">
            Para iniciar necesitamos:
          </p>
          <ul className="space-y-4">
            {items.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2 rounded-lg bg-primary-100 text-primary-700 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-gray-700 text-base md:text-lg leading-relaxed pt-1">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
