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
        <div className="container mx-auto relative z-20 w-full pb-8 md:pb-12">
          <div className="max-w-4xl mx-auto flex flex-col gap-4 md:gap-6 items-center text-center">
            {/* Logo and Title */}
            <div className="flex items-center gap-3 mb-2">
              <Image 
                src="/images/logo-solo-blanco.png" 
                alt="Arenados Lucho" 
                width={60} 
                height={40}
                className="object-contain"
              />
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                Arenados Lucho
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base md:text-lg lg:text-xl text-white/95 leading-relaxed font-medium drop-shadow-md max-w-2xl">
              Preparación y Limpieza de Superficies en Zona Norte, Oeste y CABA
            </p>

            {/* Services List */}
            <ul className="flex flex-wrap gap-2 justify-center mb-4">
              <li>
                <Link 
                  href="/arenado-industrial" 
                  className="border border-white/50 px-3 py-1 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 text-white text-sm md:text-base shadow-md"
                >
                  Arenado Industrial
                </Link>
              </li>
              <li>
                <Link 
                  href="/arenado-particular" 
                  className="border border-white/50 px-3 py-1 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 text-white text-sm md:text-base shadow-md"
                >
                  Arenado Particular
                </Link>
              </li>
            </ul>

            {/* CTA Button - Bordes completamente redondeados en la parte inferior */}
            <div className="w-full max-w-md">
              <Link 
                href="/presupuesto-rapido"
                className="block w-full px-8 py-4 bg-primary-400 hover:bg-primary-500 text-white font-semibold text-base md:text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-xl text-center"
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
