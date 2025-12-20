"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import { WhatsAppButton } from "../common/WhatsAppButton"

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
            Servicio de arenado y granallado Profesional en Zona Norte, Oeste y CABA
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Somos especialistas en <strong>arenado</strong>, <strong>granallado</strong> y <strong>decapado</strong> de superficies. <strong>Arenado a domicilio</strong> en toda la Zona Norte, Zona Oeste y CABA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-2">
            <WhatsAppButton />
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
              asChild
            >
              <Link href="/presupuesto-rapido" aria-label="Solicitar presupuesto arenado y granallado">
                <FileText className="mr-2 h-5 w-5 inline-block" aria-hidden />
                Pedí presupuesto ahora
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
