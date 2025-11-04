import { WhatsAppButton } from "@/components/common/WhatsAppButton"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FinalCTASection() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Necesitás Servicio de Pintura Profesional?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contactanos para un presupuesto sin cargo. Servicio en Pilar, San Isidro, Tigre y toda Zona Norte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton />
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100" asChild>
              <Link href="/presupuesto-rapido">Cotizar Online</Link>
            </Button>
          </div>
          <p className="text-blue-100 text-sm mt-6">
            Presupuesto gratuito · Respuesta en 24h · Garantía por escrito
          </p>
        </div>
      </div>
    </section>
  )
}

