"use client"

import React from 'react'
import { FileText, Calendar, Wrench, CheckCircle2 } from 'lucide-react'
import H2 from '../common/H2'

const steps = [
  {
    "number": 1,
    "title": "Presupuesto rápido",
    "description": "Nos enviás tu consulta desde la web con fotos y detalles básicos. Te respondemos a la brevedad con una propuesta clara y orientativa."
  },
  {
    "number": 2,
    "title": "Coordinación",
    "description": "Definimos si el trabajo se realiza en nuestro taller o en tu domicilio y acordamos fecha según disponibilidad."
  },
  {
    "number": 3,
    "title": "Realizamos el arenado",
    "description": "Ejecutamos el trabajo de forma prolija y eficiente, dejando la superficie lista para pintar, revestir o continuar con la restauración."
  },
  {
    "number": 4,
    "title": "Retiro o finalización",
    "description": "Te entregamos la pieza o finalizamos el trabajo en el lugar, lista para su siguiente etapa."
  }
  
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
