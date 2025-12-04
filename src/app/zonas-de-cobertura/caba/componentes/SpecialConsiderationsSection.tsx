import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function SpecialConsiderationsSection() {
  const considerations = [
    {
      title: "Horarios Flexibles",
      description: "Adaptamos nuestros horarios a las restricciones de tránsito y regulaciones municipales de cada barrio."
    },
    
    {
      title: "Permisos Municipales",
      description: "Es necesario que el contratista tenga los permisos necesarios para trabajar en espacios públicos."
    },
    {
      title: "Edificios Históricos",
      description: "Especialistas en edificios protegidos y estructuras de valor patrimonial. Se debe tener la autorización del Ministerio de Cultura para ejecutar el servicio en edificios históricos."
    }
  ]

  return (
    <section className="py-16" aria-labelledby="special-considerations-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800" id="special-considerations-heading">
                Consideraciones Especiales para CABA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list" aria-label="Consideraciones especiales para CABA">
                {considerations.map((consideration, index) => (
                  <div key={index} role="listitem">
                    <h4 className="font-semibold text-purple-700 mb-2">{consideration.title}</h4>
                    <p className="text-sm text-purple-600">
                      {consideration.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
