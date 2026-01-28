import { CheckCircle, Zap, Shield, Clock } from "lucide-react"

export function CompactBenefitsSection() {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Presupuesto rápido y sin costo",
      description: "Evaluamos técnicamente cada trabajo, desde superficies industriales hasta proyectos generales, para cotizar con precisión real."
    },
    {
      icon: Zap,
      title: "Movilidad y operación propia",
      description: "Equipos y personal preparados para operar en plantas industriales, obras y trabajos particulares de gran o mediana escala."
    },
    {
      icon: Shield,
      title: "Adaptación logística a cada proyecto",
      description: "Nos integramos a cronogramas industriales complejos y también a trabajos puntuales con menor infraestructura."
    },
    {
      icon: Clock,
      title: "Experiencia en superficies y estructuras exigentes",
      description: "Aplicamos criterio técnico tanto en entornos industriales críticos como en trabajos generales que requieren calidad profesional."
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
              Por qué elegir <strong>Arenados Lucho</strong>
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

