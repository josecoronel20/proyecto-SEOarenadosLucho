import { MessageCircle, Eye, Wrench, CheckCircle, Clock, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Consulta Inicial",
      description: "Contactanos por WhatsApp o formulario. Contanos sobre tu proyecto y te damos una cotización preliminar.",
      details: [
        "Evaluación inicial del proyecto",
        "Cotización preliminar sin cargo",
        "Respuesta en menos de 24 horas"
      ],
      color: "bg-blue-500"
    },
    {
      number: "02", 
      icon: Eye,
      title: "Visita Técnica",
      description: "Realizamos una inspección detallada para evaluar el estado de la superficie y determinar el mejor método de arenado.",
      details: [
        "Inspección gratuita en tu ubicación",
        "Análisis del material y estado",
        "Presupuesto final detallado"
      ],
      color: "bg-green-500"
    },
    {
      number: "03",
      icon: Wrench,
      title: "Preparación y Arenado",
      description: "Protegemos el área, preparamos los equipos y ejecutamos el arenado profesional con técnicas especializadas.",
      details: [
        "Protección del área de trabajo",
        "Arenado con equipos profesionales",
        "Control de calidad en tiempo real"
      ],
      color: "bg-orange-500"
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Control y Entrega",
      description: "Verificamos la calidad del trabajo, limpiamos el área y entregamos la superficie lista para el siguiente paso.",
      details: [
        "Inspección final de calidad",
        "Limpieza completa del área",
        "Superficie lista para pintura/revestimiento"
      ],
      color: "bg-purple-500"
    }
  ]

  const guarantees = [
    {
      icon: Clock,
      title: "Puntualidad",
      description: "Cumplimos con los plazos acordados"
    },
    {
      icon: MapPin,
      title: "Servicio Móvil",
      description: "Llevamos todo el equipo a tu ubicación"
    },
    {
      icon: Phone,
      title: "Soporte 24/7",
      description: "Atención durante todo el proceso"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Nuestro <span className="text-primary">Proceso de Trabajo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un proceso probado y eficiente que garantiza resultados excepcionales en cada proyecto de sandblasting profesional. 
            Desde la consulta inicial hasta la entrega final, te acompañamos en cada paso.
          </p>
        </div>

        {/* Proceso paso a paso */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Línea conectora */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-4 z-0"></div>
              )}
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative z-10">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mr-4`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-400">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-sm text-gray-600">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Garantías */}
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            Nuestras Garantías
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <guarantee.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-lg font-semibold mb-2">{guarantee.title}</div>
                <p className="text-blue-100">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Listo para comenzar tu proyecto?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactanos hoy mismo y recibí tu presupuesto gratuito en menos de 24 horas. 
            Nuestro equipo está listo para ayudarte.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg" asChild>
              <Link href="/presupuesto-rapido" className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Cotizar Ahora
              </Link>
            </Button>
            
            <WhatsAppButton
            />
          </div>
        </div>
      </div>
    </section>
  )
}
