"use client"

import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ProjectDescription, Project } from './ProjectDescription'
import { Badge } from "@/components/ui/badge"
import { ChevronDown } from 'lucide-react'
import H2 from './H2'
import { cn } from '@/lib/utils'
interface AccordionSectionProps {
  projects: Project[]
  type?: "single" | "multiple"
  title: string
}

export function AccordionSection({ 
  projects, 
  type = "single",
  title
}: AccordionSectionProps) {
  const [defaultValueSingle, setDefaultValueSingle] = useState<string | undefined>(undefined)
  const [defaultValueMultiple, setDefaultValueMultiple] = useState<string[] | undefined>(undefined)

  useEffect(() => {
    // Obtener el hash de la URL (ej: #nave-ferroviaria)
    const hash = typeof window !== 'undefined' ? window.location.hash.slice(1) : ''
    
    if (hash) {
      // Buscar el proyecto que coincida con el hash
      const matchingProject = projects.find(
        (project) => project.idSection === hash
      )
      
      if (matchingProject) {
        const value = matchingProject.idSection || `project-${matchingProject.id}`
        
        if (type === "multiple") {
          setDefaultValueMultiple([value])
        } else {
          setDefaultValueSingle(value)
        }
        
        // Hacer scroll al elemento después de un pequeño delay para asegurar que el DOM esté listo
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 300)
      }
    }
  }, [projects, type])

  if (!projects || projects.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center py-12 text-gray-500">
            No hay proyectos disponibles
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="pb-20 bg-gray-50" id="proyectos">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <H2 title={title} />
          {/* Accordion */}
          {type === "multiple" ? (
            <Accordion 
              type="multiple" 
              className="w-full space-y-4"
              defaultValue={defaultValueMultiple}
            >
              {projects.map((project) => (
                <AccordionItem 
                  key={`${project.category}-${project.id}`}
                  value={project.idSection || `project-${project.id}`}
                  id={project.idSection || `project-${project.id}`}
                  className="bg-white rounded-lg border border-gray-200 px-6 shadow-md"
                >
                  <AccordionTrigger className="hover:no-underline py-6 [&>svg]:hidden group">
                    <div className="flex items-center justify-between gap-4 w-full">
                      <span className="text-lg md:text-xl font-semibold text-gray-900 text-left">
                        {project.title}
                      </span>
                      <Badge 
                        variant="secondary"
                        className="bg-primary-400/90 text-white flex items-center gap-1.5 shrink-0"
                      >
                        Ver más
                        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-6">
                    <ProjectDescription project={project} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <Accordion 
              type="single" 
              className="w-full space-y-4"
              defaultValue={defaultValueSingle}
            >
              {projects.map((project) => (
                <AccordionItem 
                  key={`${project.category}-${project.id}`}
                  value={project.idSection || `project-${project.id}`}
                  id={project.idSection || `project-${project.id}`}
                  className="bg-white rounded-lg border border-gray-200 px-6 shadow-md"
                >
                  <AccordionTrigger className="hover:no-underline py-6 [&>svg]:hidden group">
                    <div className="flex items-center justify-between gap-4 w-full">
                      <span className="text-lg md:text-xl font-semibold text-gray-900 text-left">
                        {project.title}
                      </span>
                      <Badge 
                        variant="secondary"
                        className="bg-primary-400/90 text-white flex items-center gap-1.5 shrink-0"
                      >
                        Ver más
                        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-6">
                    <ProjectDescription project={project} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </div>
    </section>
  )
}
