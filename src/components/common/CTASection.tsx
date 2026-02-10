"use client"

import React from 'react'
import Link from 'next/link'
import { MessageCircle, Mail, FileText } from 'lucide-react'

const CTASection = () => {
  // WhatsApp number - actualizar con el número real

  const whatsappNumberPart1 = "5491123" 
  const whatsappNumberPart2 = "787750"
  const whatsappMessage = encodeURIComponent("Hola, me gustaría recibir asesoramiento sobre arenado.")
  const whatsappUrl = `https://wa.me/${whatsappNumberPart1}${whatsappNumberPart2}?text=${whatsappMessage}`
const emailPart1 = "arenados"
const emailPart2 = "lucho@hotmail.com"
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
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg border border-gray-200 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 text-green-600" />
              Hablar por WhatsApp
            </a>
           

            {/* Email */}
            <Link
              href={`mailto:${emailPart1}${emailPart2}`}
              className="flex items-center gap-3 px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg border border-gray-200 w-full sm:w-auto"
            >
              <Mail className="w-5 h-5 text-primary" />
              Contactar por email
            </Link>
          
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
