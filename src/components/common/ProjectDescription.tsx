"use client"

import React from 'react'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { AlertCircle, Lightbulb, CheckCircle2 } from 'lucide-react'

export interface Project {
  id: number
  title: string
  category: string
  url: string
  idSection?: string
  description: string
  images: string[]
  challenges: string | string[]
  solutions: string | string[]
  results: string
}

interface ProjectDescriptionProps {
  project: Project
}

export function ProjectDescription({ project }: ProjectDescriptionProps) {
  return (
    <Card className="w-full max-w-5xl mx-auto shadow-xl overflow-hidden">
      {/* Desktop Layout: Images left, Title/Description right */}
      <div className="flex flex-col lg:flex-row">
        {/* Image Carousel - Left side on desktop */}
        {project.images && project.images.length > 0 && (
          <div className="relative w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-auto lg:min-h-[500px] bg-gray-100 mb-4">
            <Carousel className="w-full h-full" opts={{ align: "start", loop: project.images.length > 1 }}>
              <CarouselContent className="-ml-0" style={{ height: '100%' }}>
                {project.images.map((image, index) => (
                  <CarouselItem 
                    key={`${project.id}-${index}`} 
                    className="basis-full pl-0"
                    style={{ minWidth: '100%', height: '100%' }}
                  >
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={image}
                        alt={`${project.title} - Imagen ${index + 1}`}
                        fill
                        className="object-cover lg:rounded-br-xl"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={index === 0}
                        unoptimized
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {project.images.length > 1 && (
                <>
                  <CarouselPrevious className="left-2 md:left-4" />
                  <CarouselNext className="right-2 md:right-4" />
                </>
              )}
            </Carousel>
          </div>
        )}

        {/* Title and Description - Right side on desktop */}
        <CardHeader className="pb-4 lg:w-1/2 lg:flex lg:flex-col lg:justify-center">
          <div className="flex items-start justify-between gap-4 mb-2">
            <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">
              {project.title}
            </CardTitle>
            <Badge 
              variant="secondary"
              className={`${
                project.category === 'Industrial' 
                  ? 'bg-primary/80 text-white' 
                  : 'bg-primary-400/80 text-white'
              }`}
            >
              {project.category}
            </Badge>
          </div>
          <CardDescription className="text-base md:text-lg text-gray-700 leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>
      </div>

      {/* Challenges, Solutions, Results - Full width below */}
      <CardContent className="pt-6 pb-8 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Challenges */}
          <div className="bg-gradient-to-br from-red-50 to-red-100/50 border border-red-200 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-500 rounded-lg shadow-sm">
                <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg md:text-xl">Desafíos</h3>
            </div>
            <div className="space-y-2.5">
              {Array.isArray(project.challenges) ? (
                <ul className="space-y-2.5">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm md:text-base text-gray-700 leading-relaxed">
                      <span className="text-red-500 font-semibold mt-1.5 shrink-0">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{project.challenges}</p>
              )}
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500 rounded-lg shadow-sm">
                <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg md:text-xl">Soluciones</h3>
            </div>
            <div className="space-y-2.5">
              {Array.isArray(project.solutions) ? (
                <ul className="space-y-2.5">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm md:text-base text-gray-700 leading-relaxed">
                      <span className="text-blue-500 font-semibold mt-1.5 shrink-0">•</span>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{project.solutions}</p>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-500 rounded-lg shadow-sm">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg md:text-xl">Resultados</h3>
            </div>
            <div className="space-y-2.5">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">{project.results}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Helper function to get project by ID and category
export function getProjectById(
  projectsData: any,
  category: 'industrial' | 'particular',
  id: number
): Project | null {
  const categoryKey = category === 'industrial' ? 'industrialProjects' : 'particularProjects'
  const categoryIndex = category === 'industrial' ? 0 : 1
  
  const projects = projectsData[categoryIndex]?.[categoryKey] || []
  return projects.find((p: Project) => p.id === id) || null
}
