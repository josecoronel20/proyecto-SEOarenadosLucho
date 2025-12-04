import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/ui/project-card"
import { ArrowRight, Eye } from "lucide-react"
import { getFeaturedProjects } from "@/data/projects"

export function ProjectsSection() {
  // Get 6 featured projects to display in the home page gallery
  const featuredProjects = getFeaturedProjects(4)
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-3xl font-bold mb-4 text-gray-900">
            Proyectos de arenado | Antes y Después
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Galería de resultados reales de sandblasting y granallado. Comprobá la calidad del servicio profesional en nuestros proyectos realizados en Pilar y Zona Norte.{" "}
            <Link href="/zonas-de-cobertura" className="text-primary hover:underline font-semibold">
              GBA
            </Link>. Ver proyectos antes y después de nuestros servicios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA para ver más proyectos */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            ¿Querés ver más proyectos y casos de éxito?
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/proyectos" className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Ver más proyectos de sandblasting
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}