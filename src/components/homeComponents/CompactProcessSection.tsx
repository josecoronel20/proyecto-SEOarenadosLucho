import { MessageCircle, Eye, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function CompactProcessSection() {
  const steps = [
    {
      number: "1",
      icon: MessageCircle,
      title: "Consulta",
      description: "Contactanos por WhatsApp o formulario. Te damos una cotización preliminar."
    },
    {
      number: "2", 
      icon: Eye,
      title: "Visita Técnica",
      description: "Inspección gratuita para evaluar tu proyecto y presupuesto final."
    },
    {
      number: "3",
      icon: CheckCircle,
      title: "Ejecución",
      description: "Arenado profesional con equipos propios y entrega lista para pintar."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Proceso Simple
            </h2>
            <p className="text-lg text-gray-600">
              3 pasos para contratar nuestro servicio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-400 mb-2">{step.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Listo para comenzar?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/presupuesto-rapido">
                  Solicitar Presupuesto
                </Link>
              </Button>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

