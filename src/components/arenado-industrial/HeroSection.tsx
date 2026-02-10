"use client"

import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

export function HeroSection() {
  const email = "arenadoslucho@hotmail.com"
  const whatsappNumber = "5491123787750"
  const whatsappMessage = encodeURIComponent("Hola, me gustaría coordinar una visita técnica para evaluar un proyecto de arenado industrial.")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section className="h-screen bg-white px-4 pb-4 pt-24">
      <div className="relative flex items-end h-full p-4">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/services/arenadoIndustrial.png" 
            alt="Arenado Industrial" 
            fill 
            className="object-cover rounded-lg" 
          />
        </div>

        {/* Overlay Gradient - De abajo hacia arriba */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary-900 via-primary-900/80  to-transparent rounded-lg"></div>

        {/* Content - Compactado en la parte inferior */}
        <div className="container mx-auto relative z-20 w-full pb-8 md:pb-12">
          <div className="max-w-4xl mx-auto flex flex-col gap-4 md:gap-6 items-center text-center">
            {/* Title */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              Arenado Industrial para Empresas
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg lg:text-xl text-white/95 leading-relaxed font-medium drop-shadow-md max-w-3xl">
              Soluciones profesionales de preparación y limpieza de superficies metálicas para proyectos industriales.
            </p>

            {/* CTAs - Botones con bordes completamente redondeados */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-2xl mt-2">
              {/* CTA Primaria - Email */}
              <Link 
                href={`mailto:${email}?subject=Solicitud de Presupuesto - Arenado Industrial&body=Hola, me gustaría solicitar un presupuesto para un proyecto de arenado industrial.%0D%0A%0D%0ADetalles del proyecto:%0D%0A- Tipo de superficie:%0D%0A- Dimensiones:%0D%0A- Ubicación:%0D%0A- Fecha estimada:%0D%0A%0D%0AGracias.`}
                className="inline-flex items-center justify-center gap-1 px-8 py-4 bg-primary-400 hover:bg-primary-500 text-white font-semibold text-base md:text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-xl w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                Contactar
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
