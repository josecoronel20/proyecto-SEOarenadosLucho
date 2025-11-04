export function ReviewsSection() {
  const reviews = [
    {
      name: "María González",
      location: "Pilar",
      comment: "Excelente servicio de pintura. Mi pileta quedó como nueva. Muy profesionales y puntuales.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      location: "San Isidro",
      comment: "Pintaron la estructura metálica de mi casa. Quedó perfecto y la pintura anticorrosiva es de excelente calidad.",
      rating: 5
    },
    {
      name: "Laura Martínez",
      location: "Tigre",
      comment: "Muy contenta con el trabajo. Prepararon bien la superficie y aplicaron la pintura epoxi correctamente.",
      rating: 5
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Opiniones de Nuestros Clientes</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Lo que dicen nuestros clientes sobre nuestro servicio de pintura profesional
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">"{review.comment}"</p>
              <div>
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

