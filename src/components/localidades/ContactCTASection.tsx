import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"
import { cn } from "@/lib/utils"

interface ContactCTASectionProps {
  locationName: string
  title?: string
  description?: string
  colorScheme?: "blue" | "green" | "purple" | "orange"
}

const colorSchemes = {
  blue: {
    card: "border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100"
  },
  green: {
    card: "border-green-200 bg-gradient-to-br from-green-50 to-green-100"
  },
  purple: {
    card: "border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100"
  },
  orange: {
    card: "border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100"
  }
}

export function ContactCTASection({
  locationName,
  title,
  description,
  colorScheme = "blue"
}: ContactCTASectionProps) {
  const colors = colorSchemes[colorScheme]
  const sectionTitle = title || `¿Necesitas servicio de arenado en ${locationName}?`
  const sectionDescription = description || `Te garantizamos la mejor atención y respuesta rápida para todos los servicios de arenado en ${locationName}.`

  return (
    <section className="py-16" aria-labelledby="contact-cta-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <Card className={cn("max-w-2xl mx-auto", colors.card)}>
              <CardContent className="pt-8 pb-8">
                <h3 id="contact-cta-heading" className="text-2xl font-bold mb-4">
                  {sectionTitle}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {sectionDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <WhatsAppButton />
                  <Button variant="outline" asChild>
                    <Link href="/presupuesto-rapido" aria-label={`Solicitar presupuesto para arenado en ${locationName}`}>
                      Solicitar Presupuesto
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
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

