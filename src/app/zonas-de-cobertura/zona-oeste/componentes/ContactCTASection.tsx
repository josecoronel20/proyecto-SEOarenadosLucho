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
            <Card className="max-w-2xl mx-auto border-green-200 bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="pt-8 pb-8">
                <h3 id="contact-cta-heading" className="text-2xl font-bold mb-4">
                  ¿Necesitas servicio en Zona Oeste?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Contáctanos para un presupuesto gratuito. Respuesta garantizada en 24 horas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <WhatsAppButton
                   
                  />
                  <Button variant="outline" asChild>
                    <Link href="/presupuesto-rapido" aria-label="Solicitar presupuesto rápido">
                      Solicitar Presupuesto
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={`tel:${PROJECT.contact.phone.replace(/\s+/g, '')}`} aria-label="Llamar ahora">
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
