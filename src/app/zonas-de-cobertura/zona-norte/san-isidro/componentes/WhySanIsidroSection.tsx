import { Card, CardContent } from "@/components/ui/card"
import { Crown, Building, Car } from "lucide-react"

export function WhySanIsidroSection() {
  const sanIsidroAdvantages = [
    {
      icon: Crown,
      title: "Servicio Premium",
      description: "Especializados en propiedades de alto standing y vehículos de lujo, adaptando nuestras técnicas a los estándares más exigentes de San Isidro."
    },
    {
      icon: Building,
      title: "Experiencia en Fachadas Históricas",
      description: "Conocemos las particularidades de las construcciones históricas de San Isidro y aplicamos técnicas de preservación patrimonial."
    },
    {
      icon: Car,
      title: "Vehículos de Alta Gama",
      description: "Especialistas en arenado de vehículos de lujo y clásicos, con técnicas que preservan la integridad de materiales premium."
    }
  ]

  return (
    <section className="py-16" aria-labelledby="why-san-isidro-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="why-san-isidro-heading" className="text-3xl font-bold mb-4">
              ¿Por qué elegirnos en San Isidro?
            </h2>
            <p className="text-lg text-muted-foreground">
              Especialización premium para las necesidades exclusivas de San Isidro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" role="list" aria-label="Ventajas de elegir Arenados Lucho en San Isidro">
            {sanIsidroAdvantages.map((advantage, index) => {
              const IconComponent = advantage.icon
              return (
                <Card key={index} className="text-center border-purple-200 bg-purple-50" role="listitem">
                  <CardContent className="pt-8 pb-8">
                    <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
                    <p className="text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
