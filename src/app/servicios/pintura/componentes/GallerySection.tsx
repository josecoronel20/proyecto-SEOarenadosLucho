
import Link from "next/link"
import projectsData from "@/data/projects.json"
import { ProjectCard } from "@/components/ui/project-card"

export function GallerySection() {
  // Cada proyecto tiene .category === "pintura" para los proyectos de pintura
  const pinturaProjects = (projectsData.projects || []).filter(
    (project) => project.category === "pintura"
  )

  // Mostrar solo los primeros 4 proyectos de pintura como preview
  const displayProjects = pinturaProjects.slice(0, 4)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestros Trabajos de Pintura</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Galería de proyectos completados con nuestro servicio profesional de pintura
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
          {displayProjects.map((project, index) => (
            <ProjectCard project={project} key={project.id || index} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/proyectos" passHref>
            <button className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary-dark transition">
              Ver todos los proyectos
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
