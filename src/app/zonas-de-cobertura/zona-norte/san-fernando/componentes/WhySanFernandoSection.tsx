import { Card, CardContent } from "@/components/ui/card"
import { Home, Building2, Award } from "lucide-react"

export function WhySanFernandoSection() {
  const sanFernandoAdvantages = [
    {
      icon: Home,
      title: "Servicio Residencial",
      description: "Especializados en servicios para hogares y familias en San Fernando, con atención personalizada y horarios flexibles."
    },
    {
      icon: Building2,
      title: "Servicio Comercial",
      description: "Atendemos comercios, oficinas y establecimientos comerciales en San Fernando con técnicas adaptadas a cada necesidad."
    },
    {
      icon: Award,
      title: "Excelencia en Servicio",
      description: "Servicio especializado con excelencia garantizada, técnicas suaves y atención personalizada que respeta el entorno residencial."
    }
  ]

  return (
    <section className="py-16" aria-labelledby="why-san-fernando-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="why-san-fernando-heading" className="text-3xl font-bold mb-4">
              ¿Por qué elegirnos en San Fernando?
            </h2>
            <p className="text-lg text-muted-foreground">
              Atención personalizada para hogares y comercios en San Fernando
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" role="list" aria-label="Ventajas de elegir Arenados Lucho en San Fernando">
            {sanFernandoAdvantages.map((advantage, index) => {
              const IconComponent = advantage.icon
              return (
                <Card key={index} className="text-center border-rose-200 bg-rose-50" role="listitem">
                  <CardContent className="pt-8 pb-8">
                    <div className="bg-rose-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
