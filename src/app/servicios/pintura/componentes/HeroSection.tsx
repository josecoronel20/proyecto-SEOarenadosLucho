import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/ui/project-card"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-background to-blue-50 py-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Arenado de Pintura y Revestimientos en <span className="text-blue-600">Zona Norte, Oeste y CABA</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ofrecemos <strong>servicio profesional de pintura</strong> para estructuras, fachadas, vehículos y superficies metálicas. Realizamos trabajos en <strong>Zona Norte, Zona Oeste y CABA</strong>. Nuestro <strong>servicio de pintura epoxi</strong> está disponible en <strong>Pilar, San Isidro, Tigre y toda Zona Norte</strong> de Buenos Aires. <strong>Pintura anticorrosiva</strong> y <strong>preparación profesional</strong> para resultados duraderos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton />
              <Button size="lg" variant="outline" asChild>
                <Link href="/presupuesto-rapido">
                  Cotizar Online
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <ProjectCard
              project={{
                id: "hero-pintura",
                title: "Pintura Profesional en Pilar",
                description: "Servicio completo de pintura y preparación",
                beforeImage: "/images/proyectos/pintura-piscina-pilar-antes.webp",
                afterImage: "/images/proyectos/pintura-piscina-pilar-despues.png",
                beforeAlt: "Piscina antes de la pintura - Pilar",
                afterAlt: "Piscina después de la pintura profesional - Pilar",
                location: "Pilar",
                category: "pintura"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

