"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"
import { CheckCircle, Calendar } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/servicios/servicio-arenado-superficie-metalica-san-isidro.png"
          alt="Arenado profesional de metales"
          fill
          className="object-cover opacity-5"
          priority
          sizes="100vw"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: H1 y descripción */}
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
                Arenado de <span className="text-primary">Metales</span>
              </h1>
              
              {/* Subtítulo corto orientado a empatizar */}
              <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Solución profesional para restaurar piezas metálicas, rejas y superficies metálicas.
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-8">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Respuesta en 24 horas
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Equipos propios
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Más de 20 años de experiencia
                </span>
              </div>

              {/* CTAs principales */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-semibold min-h-[52px] text-base"
                  asChild
                >
                  <Link href="#cotizar">
                    <Calendar className="mr-2 h-5 w-5" />
                    Cotizá tu proyecto
                  </Link>
                </Button>
                <WhatsAppButton />
              </div>
            </div>

            {/* Right: Imagen */}
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/servicios/servicio-arenado-superficie-metalica-san-isidro.png"
                alt="Arenado profesional de metales - Piezas metálicas"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

