"use client"

import React from 'react'
import { Target } from 'lucide-react'

export function ResumeSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Qué hacemos
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 md:p-8 shadow-md">
            <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
              Servicios de <strong className="text-primary-600">arenado industrial</strong> diseñados para intervenir sin afectar la continuidad operativa. Planificamos las tareas para reducir paradas de planta y cumplir plazos comprometidos, priorizando coordinación logística y tiempos previsibles.
            </p>

            {/* Benefit Highlight */}
            <div className="bg-white rounded-lg p-5 border-l-4 border-primary-500">
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Beneficio Principal
                  </h3>
                  <p className="text-base text-gray-700">
                    Minimizar el <strong className="text-primary-600">downtime del activo</strong> y entregar una superficie lista para protección o revestimiento que garantice un resultado duradero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
