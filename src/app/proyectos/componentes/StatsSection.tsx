export function StatsSection() {
  const stats = [
    { number: "150+", label: "Proyectos Completados en Pilar y Zona Norte" },
    { number: "20+", label: "Años de Experiencia Local" },
    { number: "100%", label: "Clientes Satisfechos en Buenos Aires" },
    { number: "24/7", label: "Soporte Técnico Local" }
  ]

  return (
    <section className="py-16 bg-muted/50" aria-labelledby="stats-heading">
      <div className="container mx-auto px-4">
        <h2 id="stats-heading" className="sr-only">Estadísticas de Arenados Lucho</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2" aria-label={`${stat.number} ${stat.label}`}>
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
