"use client"

import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="h-screen bg-white px-4 pb-4 pt-24">
      <div className="relative flex items-end h-full p-4">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-lg"
          >
            <source src="/videos/heroVideo.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Overlay Gradient - De abajo hacia arriba */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary-900 via-primary-900/80 to-transparent rounded-lg"></div>

        {/* Content - Compactado en la parte inferior */}
        <div className="container mx-auto relative z-20 w-full pb-8 md:pb-12 lg:pb-16">
          <div className="max-w-6xl mx-auto flex flex-col gap-4 md:gap-6 lg:gap-8 items-center text-center">
            {/* Logo and Title */}
            <div className="flex flex-row items-center justify-center gap-1 md:gap-4 mb-2">
              <Image 
                src="/images/logo-solo-blanco.png" 
                alt="Arenados Lucho" 
                width={100} 
                height={100}
                className="object-contain w-14 md:w-20 lg:w-24 xl:w-32 h-auto"
              />
              <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                Arenados Lucho
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white/95 leading-relaxed font-medium drop-shadow-md max-w-3xl px-4">
              Preparación y Limpieza de Superficies en Zona Norte, Oeste y CABA
            </p>

            {/* Services List */}
            <ul className="flex flex-wrap gap-3 md:gap-4 justify-center mb-4 md:mb-6">
              <li>
                <Link 
                  href="/arenado-industrial" 
                  className="border border-white/50 px-4 md:px-6 py-2 md:py-2.5 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 text-white text-sm md:text-base lg:text-lg shadow-md hover:shadow-lg"
                >
                  Arenado Industrial
                </Link>
              </li>
              <li>
                <Link 
                  href="/arenado-particular" 
                  className="border border-white/50 px-4 md:px-6 py-2 md:py-2.5 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 text-white text-sm md:text-base lg:text-lg shadow-md hover:shadow-lg"
                >
                  Arenado Particular
                </Link>
              </li>
            </ul>

            {/* CTA Button - Bordes completamente redondeados en la parte inferior */}
            <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
              <Link 
                href="/presupuesto-rapido"
                className="block w-full px-8 md:px-10 lg:px-12 py-4 md:py-5 lg:py-6 bg-primary-400 hover:bg-primary-500 text-white font-semibold text-base md:text-lg lg:text-xl rounded-full transition-all duration-300 hover:scale-105 shadow-xl text-center"
              >
                Pedir Presupuesto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
