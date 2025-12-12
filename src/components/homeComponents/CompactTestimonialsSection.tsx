import { Star } from "lucide-react"

export function CompactTestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      location: "Pilar",
      service: "Arenado de Pileta",
      rating: 5,
      text: "Excelente servicio. Muy profesionales y el resultado fue perfecto. La pileta quedó como nueva."
    },
    {
      name: "Carlos Rodríguez", 
      location: "San Isidro",
      service: "Arenado de Vehículo",
      rating: 5,
      text: "Arenaron mi auto y quedó como nuevo. Precios justos y servicio a domicilio. Muy recomendables."
    },
    {
      name: "Ana Martínez",
      location: "Tigre", 
      service: "Arenado Industrial",
      rating: 5,
      text: "Servicio impecable en nuestra fábrica. El resultado superó nuestras expectativas."
    },
    {
      name: "Roberto Fernández",
      location: "Morón",
      service: "Arenado de Fachada",
      rating: 5,
      text: "Quedamos muy satisfechos. Trabajo profesional y puntual. La fachada quedó perfecta."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-lg text-gray-600">
              Más de 500 proyectos exitosos nos respaldan
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                  <p className="text-xs text-primary font-medium">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

