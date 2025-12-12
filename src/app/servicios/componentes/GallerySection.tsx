import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/ui/project-card"
import { ArrowRight, Eye } from "lucide-react"
import projectsData from "@/data/projects.json"

interface GallerySectionProps {
  title: string
  subtitle?: string
  category: string
  buttonText?: string
  buttonHref?: string
}

export function GallerySection({ 
  title, 
  subtitle,
  category,
  buttonText = "Ver Proyectos Completos",
  buttonHref = "/proyectos"
}: GallerySectionProps) {
  const projects = projectsData.projects.filter(project => project.category === category)
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
            <Link href={buttonHref} className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              {buttonText}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

