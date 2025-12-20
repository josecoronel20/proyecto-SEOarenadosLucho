import { ProjectCard } from "@/components/ui/project-card"
import { getAllProjects } from "@/data/projects"

export function BeforeAfterSection() {
  // Filtrar proyectos industriales
  const allProjects = getAllProjects()
  const industrialProjects = allProjects
    .filter(project => 
      project.category === "industrial" || 
      project.title.toLowerCase().includes("industrial") ||
      project.title.toLowerCase().includes("estructura") ||
      project.title.toLowerCase().includes("metalurgico") ||
      project.title.toLowerCase().includes("granallado")
    )
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

  // Si no hay proyectos industriales, usar los primeros 3
  const featuredProjects = industrialProjects.length > 0 
    ? industrialProjects 
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

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
            Resultados reales
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Conoce diferentes proyectos de <strong>arenados industriales</strong>. Deslizá el control para ver el antes y después.
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
                  ¿Querés ver más proyectos de arenado industrial?
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
                Próximamente mostraremos resultados de nuestros trabajos de arenado industrial.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

