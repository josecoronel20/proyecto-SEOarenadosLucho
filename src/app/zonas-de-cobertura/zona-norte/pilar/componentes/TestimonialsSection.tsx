import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      content: "Excelente servicio de arenado en Pilar. Arenaron mi pileta y quedó perfecta. Muy profesionales, llegaron puntuales y el resultado fue impecable. Definitivamente los recomiendo para cualquier servicio de arenado.",
      author: "María González",
      location: "Centro de Pilar",
      rating: 5,
      bgColor: "border-green-200 bg-green-50",
      textColor: "text-green-800",
      authorColor: "text-green-700"
    },
    {
      content: "Contraté el servicio de arenado industrial para mi empresa en el Polo Industrial de Pilar. Arenaron toda la maquinaria y quedó como nueva. Muy recomendables para servicios industriales de arenado.",
      author: "Carlos Rodríguez",
      location: "Polo Industrial Pilar",
      rating: 5,
      bgColor: "border-blue-200 bg-blue-50",
      textColor: "text-blue-800",
      authorColor: "text-blue-700"
    }
  ]

  return (
    <section className="py-16" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="testimonials-heading" className="text-3xl font-bold mb-4">
              Testimonios de Clientes en Pilar
            </h2>
            <p className="text-lg text-muted-foreground">
              Experiencias reales de nuestros clientes con el servicio de arenado en Pilar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" role="list" aria-label="Testimonios de clientes en Pilar">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className={`${testimonial.bgColor}`} role="listitem">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4" aria-label={`${testimonial.rating} estrellas`}>
                    <div className="flex text-yellow-400">
                      {"★".repeat(testimonial.rating).split('').map((star, i) => (
                        <span key={i} aria-hidden="true">{star}</span>
                      ))}
                    </div>
                  </div>
                  <p className={`text-sm ${testimonial.textColor} mb-4`}>
                    "{testimonial.content}"
                  </p>
                  <div className={`text-sm font-semibold ${testimonial.authorColor}`}>
                    - {testimonial.author}, {testimonial.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
