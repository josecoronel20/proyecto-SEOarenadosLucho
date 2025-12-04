import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      location: "Pilar",
      project: "Arenado de Pileta",
      content: "Excelente servicio local, muy profesionales y el resultado superó mis expectativas.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      location: "San Isidro",
      project: "Arenado Industrial",
      content: "Servicio impecable en nuestros equipos industriales. Muy recomendables en Zona Norte.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      location: "Tigre",
      project: "Mantenimiento Naval",
      content: "Conocen perfectamente el área naval. Mi yate quedó como nuevo. Excelente servicio en el Delta.",
      rating: 5
    }
  ]

  return (
    <section className="py-16" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="testimonials-heading" className="text-3xl font-bold mb-4">
            Testimonios de Clientes en Pilar y Zona Norte
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            La satisfacción de nuestros clientes locales es el mejor testimonio de nuestro servicio de arenado.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list" aria-label="Testimonios de clientes">
          {testimonials.map((testimonial, index) => (
            <Card key={index} role="listitem">
              <CardHeader>
                <CardDescription>
                  <span className="sr-only">Testimonio de {testimonial.name}: </span>
                  "{testimonial.content}"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.project} en {testimonial.location}
                  </p>
                  <div className="flex mt-2" aria-label={`${testimonial.rating} estrellas`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400" aria-hidden="true">★</span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
