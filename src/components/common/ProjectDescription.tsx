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
  challenges: string
  solutions: string
  results: string
}

interface ProjectDescriptionProps {
  project: Project
}

export function ProjectDescription({ project }: ProjectDescriptionProps) {
  return (
    <Card className="w-full max-w-5xl mx-auto shadow-xl overflow-hidden">
      {/* Image Carousel */}
      {project.images && project.images.length > 0 && (
        <div className="relative w-full h-[400px] md:h-[500px] bg-gray-100">
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
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 80vw"
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

      {/* Content */}
      <CardHeader className="pb-4">
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

      <CardContent className="space-y-6">
        {/* Challenges */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-5">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Desafíos</h3>
              <p className="text-gray-700 leading-relaxed">{project.challenges}</p>
            </div>
          </div>
        </div>

        {/* Solutions */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Soluciones</h3>
              <p className="text-gray-700 leading-relaxed">{project.solutions}</p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Resultados</h3>
              <p className="text-gray-700 leading-relaxed">{project.results}</p>
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
