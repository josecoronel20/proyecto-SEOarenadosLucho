import { Sparkles, PaintBucket, Gauge, Shield, Wrench } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Sparkles className="h-6 w-6 text-blue-500" />,
      title: "Arenado Industrial Profesional en Pilar - Eliminación Total de Óxido",
      description: "Servicio especializado de arenado industrial en Pilar, San Isidro y Zona Norte. Eliminamos 100% del óxido, corrosión y contaminantes de maquinaria pesada, tanques y estructuras industriales con equipamiento certificado."
    },
    {
      icon: <PaintBucket className="h-6 w-6 text-blue-500" />,
      title: "Preparación para Pintura Industrial en Zona Norte Buenos Aires",
      description: "Preparación experta de superficies mediante arenado industrial para pintura epoxy, tratamientos anticorrosivos y revestimientos industriales en Pilar y GBA Norte. Garantizamos máxima adherencia y durabilidad."
    },
    {
      icon: <Gauge className="h-6 w-6 text-blue-500" />,
      title: "Arenado Industrial de Alta Precisión en Buenos Aires",
      description: "Servicio de arenado industrial con acabado uniforme y controlado en Zona Norte. Utilizamos tecnología de última generación para maquinaria pesada, tanques industriales y estructuras metálicas. Resultados garantizados."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Arenado Industrial Certificado en Pilar y San Isidro",
      description: "Proceso de arenado industrial certificado que preserva la integridad estructural. Servicio seguro y profesional para equipos industriales, tanques y maquinaria pesada en toda la Zona Norte de Buenos Aires."
    },
    {
      icon: <Wrench className="h-6 w-6 text-blue-500" />,
      title: "Arenado Industrial con Equipos Especializados en Buenos Aires",
      description: "Tecnología industrial de última generación para arenado de maquinaria pesada y estructuras en Pilar, San Isidro y Zona Norte. Más de 15 años brindando resultados profesionales superiores."
    }
  ]

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Arenado Industrial Profesional en Zona Norte Buenos Aires",
    "serviceType": "Arenado Industrial y Preparación de Superficies",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Arenados Lucho",
      "areaServed": ["Pilar", "San Isidro", "Tigre", "Vicente López", "San Fernando", "Zona Norte GBA"],
      "priceRange": "$$"
    },
    "description": "Servicio profesional de arenado industrial para maquinaria pesada, tanques y estructuras metálicas. Eliminación garantizada de óxido y preparación para pintura industrial en toda la Zona Norte de Buenos Aires.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios Profesionales de Arenado Industrial",
      "itemListElement": benefits.map(b => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": b.title,
          "description": b.description
        }
      }))
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="py-16 bg-gray-50" aria-label="Beneficios del servicio profesional de arenado industrial en Zona Norte">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Arenado Industrial Profesional en Pilar y Zona Norte | Servicio Especializado con 15 Años de Experiencia
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Empresa líder en arenado industrial para maquinaria pesada, tanques y estructuras metálicas en Pilar, San Isidro y toda la Zona Norte. 
              Más de 15 años brindando servicios certificados de preparación de superficies para pintura industrial y tratamientos anticorrosivos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow" role="article">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
