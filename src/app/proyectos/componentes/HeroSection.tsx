import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { PROJECT } from "@/config/project"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Proyectos de <span className="text-primary">Arenado en Pilar</span> y Zona Norte - Antes/Después
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Portfolio de trabajos de arenado realizados con éxito en más de 20 años de experiencia local. 
            Servicio profesional de arenado y sandblasting en Pilar, San Isidro, Tigre y todo Zona Norte de Buenos Aires.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
            <Link href={`https://wa.me/${PROJECT.contact.whatsapp.replace(/\s+/g, '')}?text=Hola,%20necesito%20presupuesto%20para%20arenado%20en%20Pilar`}>
              Presupuesto de Arenado en Pilar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
