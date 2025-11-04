import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PaintBucket, Shield, Building2, Car } from "lucide-react"

export function TreatmentTypesSection() {
  const treatments = [
    {
      icon: <PaintBucket className="h-10 w-10 text-blue-600" />,
      title: "Pintura al Agua para Piletas",
      description: "Aplicación de pintura al agua especialmente formulada para piletas, logrando máxima adherencia y durabilidad bajo el agua."
    },
    {
      icon: <Building2 className="h-10 w-10 text-blue-600" />,
      title: "Pintura para Fachadas",
      description: "Pintura exterior de alta calidad, ideal para proteger y embellecer fachadas residenciales, comerciales o industriales."
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: "Impermeabilizante",
      description: "Tratamiento impermeabilizante para prevenir filtraciones y humedad en superficies expuestas a la intemperie."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Tipos de Pintura que Aplicamos</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos diferentes tipos de pintura especializada según las necesidades de cada proyecto
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((treatment, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="mb-4">
                  {treatment.icon}
                </div>
                <CardTitle>{treatment.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{treatment.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

