import { Card, CardContent } from "@/components/ui/card"
import { 
  Layers, 
  Wrench, 
  MapPin, 
  Factory, 
  Ruler, 
  Clock, 
  Truck 
} from "lucide-react"

const factors = [
  {
    icon: Layers,
    title: "Tipo de material",
    description: "El material a tratar (metal, madera, concreto, etc.) influye en el método y tiempo de trabajo requerido."
  },
  {
    icon: Wrench,
    title: "Estado superficial",
    description: "La cantidad de capas de pintura, presencia de óxido, sarro o contaminantes afecta la complejidad del trabajo."
  },
  {
    icon: Factory,
    title: "Accesibilidad",
    description: "La facilidad de acceso al área a tratar (altura, espacios reducidos, etc.) puede requerir equipos especiales."
  },
  {
    icon: Truck,
    title: "Trabajo in situ vs taller",
    description: "El trabajo en taller suele ser más económico, pero para grandes estructuras el servicio móvil es necesario."
  },
  {
    icon: Ruler,
    title: "Metros cuadrados",
    description: "La superficie total a tratar es un factor clave en el cálculo del precio. Proyectos más grandes pueden tener mejor precio por m2."
  },
  {
    icon: Clock,
    title: "Urgencia y plazos",
    description: "Los trabajos con plazos ajustados o urgencia pueden requerir recursos adicionales que afectan el costo."
  },
  {
    icon: MapPin,
    title: "Movilidad y zona",
    description: "La ubicación del proyecto (CABA, Zona Norte, Zona Oeste) influye en los costos de desplazamiento de equipos."
  }
]

export function PriceFactorsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
            Cómo se determina el precio del arenado
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            El precio de arenado no es fijo. Se calcula según múltiples factores que evaluamos en cada proyecto para ofrecerle la mejor cotización.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {factors.map((factor, index) => {
              const Icon = factor.icon
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow border-blue-100"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {factor.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {factor.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <p className="text-gray-700 font-medium mb-2">
              ¿Necesita saber el precio exacto para su proyecto?
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Complete nuestro formulario con los detalles de su trabajo y le enviaremos una cotización personalizada sin compromiso.
            </p>
            <a
              href="#cotizar"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Solicitar presupuesto
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

