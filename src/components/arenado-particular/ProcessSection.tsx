"use client"

import React from 'react'
import { FileText, Calendar, Wrench, CheckCircle2 } from 'lucide-react'
import H2 from '../common/H2'

const steps = [
  {
    number: 1,
    title: "Evaluación y propuesta",
    description: "Consulta inicial para entender tu proyecto, evaluación del estado de la superficie y entrega de presupuesto orientativo en 24 h.",
    icon: FileText,
  },
  {
    number: 2,
    title: "Planificación del trabajo",
    description: "Coordinamos fecha y horario según tu disponibilidad, organizamos el trabajo para minimizar molestias y optimizar tiempos.",
    icon: Calendar,
  },
  {
    number: 3,
    title: "Ejecución profesional",
    description: "Trabajo realizado con equipos profesionales: intervención de arenado, limpieza del área y preparación de la superficie para la siguiente etapa.",
    icon: Wrench,
  },
  {
    number: 4,
    title: "Entrega y recomendaciones",
    description: "Entrega con superficie lista y recomendaciones para repintado o revestimiento; seguimiento para asegurar el mejor resultado final.",
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
