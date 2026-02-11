"use client"

import React from 'react'
import { FileText, Calendar, Wrench, CheckCircle2 } from 'lucide-react'
import H2 from '../common/H2'
const steps = [
  {
    number: 1,
    title: "Evaluación y propuesta",
    description: "Visita o revisión remota del activo, identificación de alcance y entrega de presupuesto orientativo y cronograma en 24 h.",
    icon: FileText,
  },
  {
    number: 2,
    title: "Planificación por sectores",
    description: "Descomponemos la intervención en sectores para coordinar con producción y minimizar interferencias y paradas.",
    icon: Calendar,
  },
  {
    number: 3,
    title: "Ejecución coordinada",
    description: "Trabajo por sectores según cronograma: intervención, limpieza de área y liberación de la zona para continuar operaciones habituales.",
    icon: Wrench,
  },
  {
    number: 4,
    title: "Entrega y soporte",
    description: "Entrega con informe de intervención y recomendaciones para repintado o revestimiento; posibilidad de coordinación para etapas siguientes.",
    icon: CheckCircle2,
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <H2 title="Cómo trabajamos" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div
                  key={step.number}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Number Badge */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-lg">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <IconComponent className="w-6 h-6 text-primary-500" />
                        <h3 className="text-xl font-bold text-gray-900">
                          Paso {step.number} — {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

         
        </div>
      </div>
    </section>
  )
}
