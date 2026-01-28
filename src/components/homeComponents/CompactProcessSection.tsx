import { MessageCircle, Eye, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function CompactProcessSection() {
  const steps = [
    {
      number: "1",
      icon: MessageCircle,
      title: "Solicitud de trabajo",
      description:
        "Nos enviás los datos del proyecto por formulario, whatsapp o mail.",
    },
    {
      number: "2",
      icon: Eye,
      title: "Evaluación y presupuesto",
      description:
        "Definimos alcance, superficie y logística para cotizar con precisión.",
    },
    {
      number: "3",
      icon: MessageCircle,
      title: "Planificación operativa",
      description:
        "Coordinamos fecha, modalidad (obra o taller) y condiciones de trabajo.",
    },
    {
      number: "4",
      icon: CheckCircle,
      title: "Ejecución del arenado",
      description:
        "Realizamos el servicio según lo planificado y el tipo de superficie.",
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
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

