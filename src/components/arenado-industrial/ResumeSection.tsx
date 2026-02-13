"use client"

import React from 'react'
import { Target } from 'lucide-react'
import H2 from '../common/H2'
export function ResumeSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <H2 title="Qué hacemos" />

          {/* Main Content */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 md:p-8 shadow-md">
            <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
            Servicios de <strong className="text-primary-600">arenado industrial</strong> orientados a garantizar continuidad operativa y previsibilidad en cada intervención. Abordamos cada proyecto con criterios técnicos claros y planificación estructurada, alineando el grado de preparación de superficie con el sistema de recubrimiento posterior, bajo estándares de la norma <strong className="text-primary-600">ISO 8501</strong>.</p>

            {/* Benefit Highlight */}
            <div className="bg-white rounded-lg p-5 border-l-4 border-primary-500">
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Beneficio Principal
                  </h3>
                  <p className="text-base text-gray-700">
                  Iniciamos con una <strong className="text-primary-600">visita técnica de evaluación</strong> para analizar el estado del sustrato y definir el alcance real del trabajo. A partir de ese diagnóstico, desarrollamos una planificación logística detallada que optimiza recursos, reduce tiempos de proceso y asegura el cumplimiento de los plazos acordados sin comprometer la operación.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
