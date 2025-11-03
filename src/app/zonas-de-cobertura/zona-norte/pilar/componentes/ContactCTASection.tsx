import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, ArrowRight } from "lucide-react"
import { PROJECT } from "@/config/project"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function ContactCTASection() {
  return (
    <section className="py-16" aria-labelledby="contact-cta-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <Card className="max-w-2xl mx-auto border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="pt-8 pb-8">
                <h3 id="contact-cta-heading" className="text-2xl font-bold mb-4">
                  ¿Necesitas servicio de arenado en Pilar?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Como nuestra localidad principal, te garantizamos la mejor atención y respuesta inmediata para todos los servicios de arenado.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <WhatsAppButton
                 
                  />
                  <Button variant="outline" asChild>
                    <Link href="/presupuesto-rapido" aria-label="Solicitar presupuesto para arenado en Pilar">
                      Solicitar Presupuesto
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={`tel:${PROJECT.contact.phone.replace(/\s+/g, '')}`} aria-label="Llamar para servicio en Pilar">
                      <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                      Llamar
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
