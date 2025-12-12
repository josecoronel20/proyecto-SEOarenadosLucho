import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Clock, CheckCircle } from "lucide-react"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

interface FinalCTASectionProps {
  title: string
  description: string
  benefits: string[]
  whatsappTitle?: string
  whatsappDescription?: string
  formTitle?: string
  formDescription?: string
  formButtonText?: string
  formHref?: string
  bottomTitle?: string
  bottomDescription?: string
}

export function FinalCTASection({ 
  title,
  description,
  benefits,
  whatsappTitle = "Presupuesto WhatsApp - Zona Norte",
  whatsappDescription = "Atención inmediata. Enviá fotos y recibí presupuesto personalizado al instante.",
  formTitle = "Cotización Online - Buenos Aires Norte",
  formDescription = "Servicio express. Completá el formulario y recibí tu presupuesto detallado en 24 horas.",
  formButtonText = "Cotizar Online",
  formHref = "/presupuesto-rapido",
  bottomTitle,
  bottomDescription
}: FinalCTASectionProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-xl font-semibold mb-4 flex items-center justify-center">
                <MessageCircle className="h-6 w-6 mr-2" />
                {whatsappTitle}
              </div>
              <p className="text-sm opacity-90 mb-4">
                {whatsappDescription}
              </p>
              <WhatsAppButton />
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-xl font-semibold mb-4 flex items-center justify-center">
                <Clock className="h-6 w-6 mr-2" />
                {formTitle}
              </div>
              <p className="text-sm opacity-90 mb-4">
                {formDescription}
              </p>
              <Button size="lg" variant="outline" className="w-full border-white text-primary hover:bg-white hover:text-blue-600" asChild>
                <Link href={formHref}>
                  {formButtonText}
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {bottomTitle && bottomDescription && (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-lg font-semibold mb-2">
                {bottomTitle}
              </div>
              <p className="text-sm opacity-90">
                {bottomDescription}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

