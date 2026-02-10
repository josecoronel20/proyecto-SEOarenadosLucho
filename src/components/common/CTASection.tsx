"use client"

import React from 'react'
import Link from 'next/link'
import { FileText } from 'lucide-react'
import WppBtn from './WppBtn'
import EmailBtn from './EmailBtn'
const CTASection = () => {

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título */}
          <h2 className="text-4xl md:text-5xl font-bold text-primary-600 mb-4">
            ¿Listo para avanzar con tu proyecto de arenado?
          </h2>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-primary-600 mb-12 max-w-2xl mx-auto">
            Contanos qué necesitás y recibí una respuesta clara para evaluar tiempos, alcance y próxima etapa del trabajo.
          </p>

          {/* Botón Principal */}
          <div className="mb-8">
            <Link
              href="/presupuesto-rapido"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-400 text-white font-semibold text-lg rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <FileText className="w-5 h-5" />
              Solicitar Presupuesto Rápido
            </Link>
            <p className="text-sm text-primary-600 mt-3">
              Enviá los detalles de tu proyecto y recibí una propuesta orientativa.
            </p>
          </div>

          {/* Botones Secundarios */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* WhatsApp */}
            <WppBtn type="CTASection" />
           

            {/* Email */}
            <EmailBtn type="CTASection" />
          
          </div>

          {/* Descripciones de botones secundarios (desktop) */}
          <div className="hidden sm:flex gap-8 justify-center mt-4">
            <p className="text-sm text-primary-600 max-w-xs">
              Asesoramiento directo para resolver dudas rápidas antes de avanzar.
            </p>
            <p className="text-sm text-primary-600 max-w-xs">
              Contactar mediante un formulario para establecer contacto para un proyecto profesional.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
