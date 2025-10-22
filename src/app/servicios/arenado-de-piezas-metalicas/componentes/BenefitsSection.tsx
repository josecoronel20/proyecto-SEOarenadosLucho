import { Sparkles, PaintBucket, Gauge, Shield, Wrench } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Sparkles className="h-6 w-6 text-blue-500" />,
      title: "Eliminación Total de Óxido y Corrosión en Zona Norte",
      description: "Servicio profesional de arenado industrial en Pilar y Zona Norte. Eliminamos 100% del óxido, corrosión y pintura antigua de piezas metálicas con técnicas especializadas."
    },
    {
      icon: <PaintBucket className="h-6 w-6 text-blue-500" />,
      title: "Preparación Profesional para Galvanizado Industrial",
      description: "Preparación experta mediante arenado para galvanizado, pintura industrial y tratamientos anticorrosivos en Pilar. Resultados garantizados y duraderos."
    },
    {
      icon: <Gauge className="h-6 w-6 text-blue-500" />,
      title: "Acabado Industrial de Alta Calidad en Buenos Aires",
      description: "Servicio de arenado industrial con acabado uniforme que asegura máxima adherencia para galvanizado y pinturas. Tecnología de última generación en Zona Norte."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Arenado Seguro para Piezas Industriales en Pilar",
      description: "Arenado industrial de precisión que preserva las dimensiones exactas de cada pieza. Proceso certificado y seguro para todo tipo de metales en Zona Norte GBA."
    },
    {
      icon: <Wrench className="h-6 w-6 text-blue-500" />,
      title: "Equipamiento Industrial Especializado en Buenos Aires",
      description: "Tecnología industrial de última generación para arenado de piezas metálicas en Pilar y Zona Norte. Garantizamos resultados profesionales superiores."
    }
  ]

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Arenado Industrial de Piezas Metálicas en Zona Norte",
    "serviceType": "Arenado Industrial",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Arenados Lucho",
      "areaServed": ["Pilar", "San Isidro", "Zona Norte GBA"]
    },
    "description": "Servicio profesional de arenado industrial para piezas metálicas. Eliminación de óxido y preparación para galvanizado en Zona Norte.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Arenado Industrial",
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
      <section className="py-16 bg-gray-50" aria-label="Beneficios del servicio de arenado industrial de piezas metálicas">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Arenado Industrial de Piezas Metálicas en Pilar y Zona Norte | Servicio Profesional Especializado
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Empresa líder en arenado industrial de piezas metálicas en Pilar, San Isidro y toda la Zona Norte. 
              Más de 10 años de experiencia garantizando la mejor preparación para galvanizado y tratamientos industriales.
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
