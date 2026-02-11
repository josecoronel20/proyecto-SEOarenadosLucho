"use client"

import Image from "next/image";
import WppBtn from "../common/WppBtn";

export function HeroSection() {
  return (
    <section className="h-screen bg-white px-4 pb-4 pt-24">
      <div className="relative flex items-end h-full p-4">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          
          <Image 
            src="/images/services/arenadoParticular.JPG" 
            alt="Arenado Particular" 
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
              Arenado Particular
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg lg:text-xl text-white/95 leading-relaxed font-medium drop-shadow-md max-w-3xl">
              Soluciones prácticas para limpiar, restaurar y renovar superficies de forma rápida y profesional.
            </p>

            {/* CTAs - Botones con bordes completamente redondeados */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-2xl mt-2">
              {/* CTA Primaria - WhatsApp */}
              <WppBtn type="CTASection" />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
