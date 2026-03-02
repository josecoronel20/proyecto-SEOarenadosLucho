"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"

export function ServiciosHero() {
  return (
    <section className="h-[calc(100vh-80px)] flex flex-col  bg-white px-4 py-4">
      <div className="relative flex items-end h-full p-4">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/arenadoIndustrial.PNG"
            alt="Arenado industrial"
            fill
            className="object-cover rounded-lg object-top"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary-900 via-primary-900/85 to-transparent rounded-lg" />

        {/* Content */}
        <div className="container mx-auto relative z-20 w-full pb-8 md:pb-20">
          <div className="max-w-3xl lg:max-w-4xl mx-auto flex flex-col gap-4 md:gap-7 lg:gap-8 items-center text-center px-2 sm:px-0">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-300 leading-tight drop-shadow-lg">
              Arenado industrial
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/95 leading-relaxed font-medium drop-shadow-md max-w-3xl">
              Arenamos estructuras metálicas de forma eficiente y segura, cumpliendo con los plazos y garantizando la calidad de la obra.
            </p>
            <div className="mt-2">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 md:px-10 md:py-5 bg-white text-primary-700 font-semibold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 border-2 border-white/90"
              >
                
                Contactanos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
