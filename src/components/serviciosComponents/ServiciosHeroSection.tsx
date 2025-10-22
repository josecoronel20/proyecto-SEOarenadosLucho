"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, FileText, Clock, MapPin, Award, Shield } from "lucide-react"
import { PROJECT } from "@/config/project"

const LOCALIDADES = [
  "Pilar",
  "San Isidro",
  "Tigre",
  "Vicente López",
  "San Fernando",
  "Moreno",
  "Morón",
  "Palermo",
  "Recoleta",
]

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function ServiciosHeroSection() {
  const rawWhatsapp = PROJECT.contact?.whatsapp ?? ""
  const whatsappNumber = rawWhatsapp.replace(/\D/g, "")
  const waText = encodeURIComponent(
    "Hola! Necesito presupuesto para arenado en Buenos Aires. Indico local y m2."
  )
  const waHref = `https://wa.me/${whatsappNumber}?text=${waText}`

  const handleWhatsAppClick = () => {
    if (typeof window === "undefined") return
    try {
      // analytics event (gtag or dataLayer)
      // @ts-ignore
      window.gtag?.("event", "click_whatsapp", {
        service: "arenado",
        location: "Buenos Aires",
      })
    } catch (e) {
      // noop
    }
  }

  return (
    <section
      className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 py-20"
      aria-labelledby="servicios-hero-title"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1
            id="servicios-hero-title"
            className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 leading-tight"
          >
            Servicios de arenado y granallado en Buenos Aires
            <span className="block text-primary mt-2 text-2xl md:text-3xl font-semibold">
              Zona Norte, Oeste y CABA — Servicio móvil y en taller
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed">
            Arenados Lucho ofrece servicios de arenado en diferentes superficies como piletas, vehículos, fachadas, barcos, piezas metálicas, entre otros.
          </p>

          <p className="text-md text-gray-600 mb-6 max-w-3xl mx-auto">
            Servicio móvil en{" "}
            {LOCALIDADES.slice(0, 6).map((loc, i) => (
              <span key={loc}>
                {i > 0 && " · "}
                <Link
                  href={`/zona/${slugify(loc)}`}
                  className="underline decoration-dotted decoration-primary/40 hover:decoration-solid"
                >
                  {loc}
                </Link>
              </span>
            ))}
            {", y otras localidades de Buenos Aires."}
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" aria-hidden />
              <span>Servicio móvil en Buenos Aires</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" aria-hidden />
              <span>20+ años de experiencia</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" aria-hidden />
              <span>Garantía de calidad</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" aria-hidden />
              <span>Presupuesto en 24h</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg" asChild>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solicitar presupuesto por WhatsApp - Arenados Lucho"
                onClick={handleWhatsAppClick}
                data-analytics="cta_whatsapp"
              >
                <MessageCircle className="mr-2 h-5 w-5 inline-block" aria-hidden />
                Presupuesto gratis por WhatsApp
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
              asChild
            >
              <Link href="/presupuesto-rapido" aria-label="Cotizar servicio de arenado online">
                <FileText className="mr-2 h-5 w-5 inline-block" aria-hidden />
                Cotizar arenado online
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
