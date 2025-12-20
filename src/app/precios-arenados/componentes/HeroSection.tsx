"use client"

import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"
import { CheckCircle, Calculator } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
            Precio de <span className="text-primary">Arenado</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
            Cotización según superficie y tipo de trabajo
          </p>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            El costo del arenado depende de múltiples variables. Cada proyecto se cotiza de forma personalizada para ofrecerle el mejor precio según sus necesidades específicas.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-600 mb-8">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Presupuesto gratuito
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Respuesta en 24 horas
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Cotización personalizada
            </span>
          </div>

          {/* CTAs principales */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-semibold min-h-[52px] text-base"
              asChild
            >
              <Link href="#cotizar">
                <Calculator className="mr-2 h-5 w-5" />
                Solicitar presupuesto personalizado
              </Link>
            </Button>
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </section>
  )
}

