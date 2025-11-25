import { CheckCircle, Zap, Shield, Clock, Award, Wrench } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Limpieza Profunda",
      description: "Elimina completamente óxido, pintura, sarro y contaminantes persistentes que otros métodos no pueden remover",
      highlight: "100% efectivo"
    },
    {
      icon: Zap,
      title: "Preparación Perfecta",
      description: "Deja la superficie perfectamente preparada para pintura, galvanizado o cualquier revestimiento",
      highlight: "Listo para pintar"
    },
    {
      icon: Shield,
      title: "Resultado Profesional",
      description: "Calidad industrial imposible de lograr con métodos tradicionales como lijado o cepillado",
      highlight: "Calidad garantizada"
    },
    {
      icon: Clock,
      title: "Ahorro de Tiempo",
      description: "Proceso rápido y eficiente que reduce significativamente el tiempo de preparación de superficies",
      highlight: "Hasta 70% más rápido"
    },
    {
      icon: Award,
      title: "Durabilidad",
      description: "Los acabados aplicados sobre superficies arenadas duran mucho más tiempo y mejor adherencia",
      highlight: "Mayor durabilidad"
    },
    {
      icon: Wrench,
      title: "Versatilidad",
      description: "Funciona en cualquier material: metal, hormigón, madera, ladrillo, piedra y más",
      highlight: "Multi-material"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            ¿Por qué elegir <span className="text-primary">Arenado</span> vs. otros métodos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            El sandblasting profesional supera a cualquier método tradicional de limpieza y preparación de superficies. 
            Descubrí las ventajas que nos convierten en la mejor opción para tu proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{benefit.title}</h3>
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {benefit.highlight}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparación con métodos tradicionales */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Arenado vs. Métodos Tradicionales
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
              <div className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">✗</span>
                Métodos Tradicionales
              </div>
              <ul className="space-y-2 text-red-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  Lijado manual: lento y agotador
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  Cepillado: no elimina óxido profundo
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  Químicos: tóxicos y contaminantes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  Resultados inconsistentes
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400">
              <div className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">✓</span>
                Sandblasting Profesional
              </div>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Proceso rápido y eficiente
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Elimina óxido y contaminantes profundos
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Ecológico y seguro
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Resultados profesionales garantizados
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
