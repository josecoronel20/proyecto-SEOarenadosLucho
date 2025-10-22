import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { PROJECT } from "@/config/project"

export function FinalCTASection() {
  return (
    <section className="py-16 bg-primary text-primary-foreground" aria-labelledby="final-cta-heading">
      <div className="container mx-auto px-4 text-center">
        <h2 id="final-cta-heading" className="text-3xl font-bold mb-4">
          ¿Necesitás un servicio de arenado en Pilar o Zona Norte?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Únete a nuestros clientes satisfechos. Con más de 20 años de experiencia local, 
          contactanos hoy mismo para tu proyecto de arenado en Pilar, San Isidro, Tigre y todo Zona Norte.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
            <Link href={`https://wa.me/${PROJECT.contact.whatsapp.replace(/\s+/g, '')}?text=Hola,%20necesito%20presupuesto%20para%20arenado%20en%20Pilar`}>
              Pedir Presupuesto de Arenado en Pilar
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
            <Link href="/presupuesto-rapido">
              Cotizar Arenado Online
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
