import { CheckCircle, Zap, Shield, Clock } from "lucide-react"

export function CompactBenefitsSection() {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Limpieza 100% efectiva",
      description: "Elimina completamente óxido, pintura y contaminantes recuperando la superficie original"
    },
    {
      icon: Zap,
      title: "Hasta 70% más rápido",
      description: "Proceso eficiente que ahorra tiempo y dinero evitando días de trabajo manual con lija o químicos"
    },
    {
      icon: Shield,
      title: "Resultado profesional garantizado",
      description: "Calidad industrial imposible de lograr con métodos tradicionales, garantizando una superficie nueva y lista para cualquier recubrimiento"
    },
    {
      icon: Clock,
      title: "Respuesta en 24 horas",
      description: "Presupuesto rápido y servicio puntual, para que puedas empezar a trabajar en tu proyecto lo antes posible"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Beneficios Clave
            </h2>
            <p className="text-lg text-gray-600">
              Por qué elegir arenado profesional
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

