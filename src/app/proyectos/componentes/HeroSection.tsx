import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PROJECT } from "@/config/project"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Proyectos de <span className="text-primary">Arenado en Pilar</span> y Zona Norte - Antes/Después
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Portfolio de proyectos de arenado realizados con éxito en más de 20 años de experiencia local. 
            Servicio profesional de arenado y sandblasting en Pilar, San Isidro, Tigre y todo Zona Norte de Buenos Aires.
          </p>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  )
}
