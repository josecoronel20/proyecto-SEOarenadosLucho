import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail } from "lucide-react"
import { PROJECT } from "@/config/project"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function ContactCTASection() {
  return (
    <section className="py-16" aria-labelledby="contact-cta-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <Card className="max-w-2xl mx-auto border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="pt-8 pb-8">
                <h3 id="contact-cta-heading" className="text-2xl font-bold mb-4">
                  ¿No encuentras tu localidad?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Contáctanos y te confirmamos si llegamos a tu ubicación. 
                  Estamos constantemente expandiendo nuestra cobertura.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <WhatsAppButton
                    label="WhatsApp"
                    className="bg-green-600 hover:bg-green-700"
                    variant="default"
                    size="default"
                  />
                  <Button variant="outline" asChild>
                    <Link href={`mailto:${PROJECT.contact.email}?subject=Consulta de Cobertura - Arenado`}>
                      <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                      Email
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={`tel:${PROJECT.contact.phone.replace(/\s+/g, '')}`}>
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
