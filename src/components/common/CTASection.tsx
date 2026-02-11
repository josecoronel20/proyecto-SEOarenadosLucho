"use client"

import React from 'react'
import Link from 'next/link'
import { FileText } from 'lucide-react'
import WppBtn from './WppBtn'
import EmailBtn from './EmailBtn'

const CTASection = () => {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/ctaVideo.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay Gradient - De abajo hacia arriba */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary-900 via-primary-900/80 to-transparent"></div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            ¿Listo para avanzar con tu proyecto de arenado?
          </h2>

          {/* Subtítulo */}
          <p className="text-base md:text-lg lg:text-xl text-white/95 mb-12 max-w-2xl mx-auto drop-shadow-md">
            Contanos qué necesitás y recibí una respuesta clara para evaluar tiempos, alcance y próxima etapa del trabajo.
          </p>

          {/* Botón Principal */}
          <div className="mb-8">
            <Link
              href="/presupuesto-rapido"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-400 hover:bg-primary-500 text-white font-semibold text-lg rounded-full transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <FileText className="w-5 h-5" />
              Solicitar Presupuesto Rápido
            </Link>
            <p className="text-sm text-white/90 mt-3 drop-shadow-md">
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
        </div>
      </div>
    </section>
  )
}

export default CTASection
