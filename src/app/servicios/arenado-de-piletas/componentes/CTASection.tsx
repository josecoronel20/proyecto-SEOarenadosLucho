import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Necesitas arenado para tu pileta en Pilar, San Isidro, Tigre o Zona Norte?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Contactanos hoy mismo y obtén un presupuesto personalizado para arenado de piletas en Pilar, José C. Paz, San Isidro, Tigre, Vicente López y toda Zona Norte. Respuesta en 24 horas hábiles.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
            <Link href="https://wa.me/5491123787750?text=Hola,%20necesito%20presupuesto%20para%20arenado%20de%20pileta">
              Pedir Presupuesto por WhatsApp
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600" asChild>
            <Link href="/presupuesto-rapido">
              Cotizar Online
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
