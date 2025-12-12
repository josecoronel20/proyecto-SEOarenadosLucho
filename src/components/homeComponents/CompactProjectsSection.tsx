import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/ui/project-card"
import { ArrowRight } from "lucide-react"
import { getFeaturedProjects } from "@/data/projects"

export function CompactProjectsSection() {
  const featuredProjects = getFeaturedProjects(3)
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Resultados Reales
            </h2>
            <p className="text-lg text-gray-600">
              Casos de éxito con impacto concreto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" asChild>
              <Link href="/proyectos">
                Ver más proyectos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

