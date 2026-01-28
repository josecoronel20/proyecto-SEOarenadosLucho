"use client"

import React from "react"
import { CTAActionButtons } from "../common/CTAActionButtons"

export function ServiciosHeroSection() {
  return (
    <section
      className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 py-20"
      aria-labelledby="servicios-hero-title"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            id="servicios-hero-title"
            className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 leading-tight"
          >
            Servicios más solicitados
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
           Conocé los tipos de servicios que más realizamos en nuestra empresa.
          </p>

          <CTAActionButtons />
        </div>
      </div>
    </section>
  )
}
