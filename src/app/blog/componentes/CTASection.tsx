import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { PROJECT } from "@/config/project"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function CTASection() {
  return (
    <section className="py-16 bg-muted/50" aria-labelledby="cta-heading">
      <div className="container mx-auto px-4 text-center">
        <h2 id="cta-heading" className="text-3xl font-bold mb-4">
          ¿Necesitas Servicios de Arenado en Pilar?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
          Después de leer nuestros artículos, ¿estás listo para tu próximo proyecto en Pilar, San Isidro, Tigre o Zona Norte? 
          Contacta con expertos locales para obtener un presupuesto personalizado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <WhatsAppButton
            href={`https://wa.me/${PROJECT.contact.whatsapp.replace(/\s+/g, '')}`}
            label="WhatsApp"
            className="bg-green-600 hover:bg-green-700"
            variant="default"
            size="lg"
          />
          <Button size="lg" asChild>
            <Link href="/presupuesto-rapido" aria-label="Solicitar presupuesto para arenado en Pilar">
              Solicitar Presupuesto en Pilar
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/servicios" aria-label="Ver servicios de arenado en Zona Norte">
              Servicios en Zona Norte
            </Link>
          </Button>
        </div>
        <div className="mt-8 text-sm text-muted-foreground" role="list" aria-label="Información de contacto">
          <p role="listitem">📞 WhatsApp para Pilar y Zona Norte: {PROJECT.contact.whatsapp}</p>
          <p role="listitem">📧 Email: {PROJECT.contact.email}</p>
          <p role="listitem">⏰ Horarios de atención en Pilar: {PROJECT.contact.hours}</p>
        </div>
      </div>
    </section>
  )
}
