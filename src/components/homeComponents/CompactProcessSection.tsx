import { MessageCircle, Eye, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function CompactProcessSection() {
  const steps = [
    {
      number: "1",
      icon: MessageCircle,
      title: "Pedí tu presupuesto",
      description:
        "Contactanos por WhatsApp o completá el formulario en la página de presupuesto rápido.",
    },
    {
      number: "2",
      icon: Eye,
      title: "Evaluamos tu caso",
      description:
        "Analizamos el trabajo según los detalles y la descripción que nos brindes para darte un presupuesto preciso.",
    },
    {
      number: "3",
      icon: MessageCircle,
      title: "Coordinamos fecha",
      description:
        "Agendamos la fecha de ejecución según tu disponibilidad.",
    },
    {
      number: "4",
      icon: CheckCircle,
      title: "Realizamos el arenado",
      description:
        "Nuestro equipo realiza el arenado correspondiente en obra o en taller según el servicio.",
    },
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
              4 pasos para contratar nuestro servicio
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
        </div>
      </div>
    </section>
  )
}

