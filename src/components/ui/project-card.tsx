import { BeforeAfter } from "@/components/ui/before-after"
import { MapPin, FolderOpen } from "lucide-react"

interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    beforeImage: string
    afterImage: string
    beforeAlt: string
    afterAlt: string
    location: string
    category: string
  }
  className?: string
}

export function ProjectCard({ project, className = "" }: ProjectCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ${className}`}>
      <div className="relative">
        <BeforeAfter
          beforeImage={project.beforeImage}
          afterImage={project.afterImage}
          beforeAlt={project.beforeAlt}
          afterAlt={project.afterAlt}
          className="w-full h-72"
        />
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
          <h3 className="text-2xl font-bold text-white mb-2">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-1.5 text-primary bg-primary/5 px-4 py-2 rounded-lg">
            <MapPin className="h-4 w-4" />
            <span className="font-medium">{project.location}</span>
          </div>
          
          {project.category && (
            <div className="flex items-center gap-1.5 text-primary bg-primary/5 px-4 py-2 rounded-lg">
              <FolderOpen className="h-4 w-4" />
              <span className="font-medium capitalize">{project.category}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
