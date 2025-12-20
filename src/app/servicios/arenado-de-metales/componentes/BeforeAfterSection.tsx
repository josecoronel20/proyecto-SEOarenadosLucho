import { ProjectCard } from "@/components/ui/project-card"
import { getAllProjects } from "@/data/projects"

type Categoria =
  | "metales"
  | "madera"
  | "vehiculo"
  | "industrial"
  | "pileta"

const CATEGORY_LABELS: Record<Categoria, {
  title: string,
  subtitle: string,
  verMas: string,
  proximo: string,
}> = {
  metales: {
    title: "Resultados reales en metales",
    subtitle: "Observá cómo el arenado renueva y restaura piezas metálicas y estructuras. Deslizá el control para ver el antes y después.",
    verMas: "¿Querés ver más proyectos de arenado de metales?",
    proximo: "Próximamente mostraremos resultados de nuestro arenado de metales."
  },
  madera: {
    title: "Resultados reales en madera",
    subtitle: "Observá la restauración de superficies y muebles de madera realizada con arenado profesional.",
    verMas: "¿Querés ver más proyectos de arenado de madera?",
    proximo: "Próximamente mostraremos resultados de nuestro arenado de madera."
  },
  vehiculo: {
    title: "Resultados reales en vehículos",
    subtitle: "El arenado profesional en carrocerías, chasis y partes vehiculares: mirá la diferencia.",
    verMas: "¿Querés ver más proyectos de arenado en vehículos?",
    proximo: "Próximamente mostraremos resultados de nuestro arenado de vehículos."
  },
  industrial: {
    title: "Resultados reales en industria",
    subtitle: "Arenado aplicado en maquinaria, estructuras y superficies industriales. Antes y después de cada trabajo.",
    verMas: "¿Querés ver más proyectos de arenado industrial?",
    proximo: "Próximamente mostraremos resultados de nuestro arenado industrial."
  },
  pileta: {
    title: "Resultados reales en piletas",
    subtitle: "Observá cómo una pileta recupera su superficie tras el arenado profesional.",
    verMas: "¿Querés ver más proyectos de arenado de piletas?",
    proximo: "Próximamente mostraremos resultados de nuestro arenado de piletas."
  }
}

export function BeforeAfterSection({ category }: { category: Categoria }) {
  const allProjects = getAllProjects()
  
  // Filtrar proyectos según la categoría
  const filterByCategory = (p: any) => {
    switch (category) {
      case "metales":
        return (
          p.category === "metales" ||
          p.title.toLowerCase().includes("metal") ||
          p.title.toLowerCase().includes("estructura") ||
          p.title.toLowerCase().includes("pieza") ||
          p.title.toLowerCase().includes("reja")
        )
      case "madera":
        return (
          p.category === "madera" ||
          p.title.toLowerCase().includes("madera") ||
          p.title.toLowerCase().includes("deck")
        )
      case "vehiculo":
        return (
          p.category === "vehiculo" ||
          p.title.toLowerCase().includes("auto") ||
          p.title.toLowerCase().includes("vehículo") ||
          p.title.toLowerCase().includes("camioneta") ||
          p.title.toLowerCase().includes("chasis") ||
          p.title.toLowerCase().includes("carrocería") ||
          p.title.toLowerCase().includes("camión")
        )
      case "industrial":
        return (
          p.category === "industrial" ||
          p.title.toLowerCase().includes("industria") ||
          p.title.toLowerCase().includes("industrial") ||
          p.title.toLowerCase().includes("maquinaria")
        )
      case "pileta":
        return (
          p.category === "pileta" ||
          p.title.toLowerCase().includes("pileta") ||
          p.title.toLowerCase().includes("piscina")
        )
      default:
        return false
    }
  }
  
  const filteredProjects = allProjects
    .filter(filterByCategory)
    .slice(0, 3)
    .map(project => ({
      id: project.id,
      title: project.title,
      description: project.description,
      beforeImage: project.beforeImage,
      afterImage: project.afterImage,
      beforeAlt: project.beforeAlt,
      afterAlt: project.afterAlt,
      location: project.location,
      category: project.category
    }))

  // Si no hay proyectos filtrados, mostrar los primeros 3 de cualquier tipo
  const featuredProjects =
    filteredProjects.length > 0
      ? filteredProjects
      : allProjects.slice(0, 3).map(project => ({
          id: project.id,
          title: project.title,
          description: project.description,
          beforeImage: project.beforeImage,
          afterImage: project.afterImage,
          beforeAlt: project.beforeAlt,
          afterAlt: project.afterAlt,
          location: project.location,
          category: project.category
        }))
        
  const { title, subtitle, verMas, proximo } = CATEGORY_LABELS[category]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
            {title}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {subtitle}
          </p>

          {featuredProjects.length > 0 ? (
            <>
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-4">
                  {verMas}
                </p>
                <a
                  href="/proyectos"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Ver galería completa de proyectos
                </a>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">
                {proximo}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
