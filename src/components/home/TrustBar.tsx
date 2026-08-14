import { Truck, Users, Wallet, MapPin } from "lucide-react"

/**
 * Los 4 hechos que responden las objeciones de entrada antes de que se formulen.
 *
 * Antes decía "Documentación vigente", "Equipo seguro", "Adaptabilidad a tu
 * cronograma" y "Equipos Móviles": lenguaje de pliego que no diferencia y que
 * nadie está buscando. Estos 4 son cosas concretas que el cliente sí pregunta.
 */
const items = [
  { icon: Truck, label: "Vamos a tu obra, galpón o casa", sub: "No trasladás nada" },
  { icon: Users, label: "2 equipos propios", sub: "Con compresores propios" },
  { icon: Wallet, label: "Visita y presupuesto sin costo", sub: "Sin compromiso" },
  { icon: MapPin, label: "Buenos Aires y AMBA", sub: "CABA y Gran Buenos Aires" },
]

export default function TrustBar() {
  return (
    <section
      className="bg-white border-b border-gray-200 shadow-sm"
      aria-label="Por qué trabajar con nosotros"
    >
      <div className="container mx-auto px-4 lg:px-8 py-6 md:py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 max-w-5xl mx-auto">
          {items.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-start gap-3">
              <div className="flex-shrink-0 p-2.5 rounded-full bg-primary-100 text-primary-700">
                <Icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <p className="text-sm md:text-base font-semibold text-gray-900 leading-snug">
                  {label}
                </p>
                <p className="text-xs md:text-sm text-gray-600 mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
