"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import projectsData from '@/lib/projectsInfo.json'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import H2 from "../common/H2"
interface ProjectItem {
  id: number
  title: string
  overview: string
  images?: string[]
  category: string
  tipo?: string
  url: string
  idSection?: string
}

const TIPO_LABEL: Record<string, string> = {
  "restauracion-mantenimiento": "Restauración y mantenimiento",
  "obra-publica": "Obra pública",
  "obra-construccion": "Obra en construcción",
}

const ProjectsSection = () => {
  const industrialProjects = (projectsData as any)[0]?.industrialProjects || []
  const allProjects: ProjectItem[] = industrialProjects.filter(
    (project: any) =>
      project.title &&
      project.overview &&
      project.images &&
      Array.isArray(project.images) &&
      project.images.length > 0
  )

  if (allProjects.length === 0) {
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
    <section className="py-20 bg-white max-w-7xl mx-auto">
      <div className="container mx-auto px-4 lg:px-8">
        <H2 title="Proyectos Destacados" />

        <div className="relative px-12 md:px-16">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {allProjects.map((project) => (
                <CarouselItem 
                  key={project.id} 
                  className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="relative h-[500px] md:h-[600px] overflow-hidden border-0 shadow-lg group">
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={project.images![0]}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    <div className="absolute inset-0 z-20 flex flex-col justify-end">
                      <CardHeader className="text-white pb-4">
                        <Badge variant="secondary" className="mb-3 w-fit bg-primary/80 text-white border-primary">
                          {project.tipo ? TIPO_LABEL[project.tipo] ?? project.tipo : project.category}
                        </Badge>
                        <CardTitle className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight text-white">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-white/90 text-base md:text-lg leading-relaxed line-clamp-3">
                          {project.overview}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="pt-0 pb-6">
                        <Link
                          href={project.idSection ? `/casos-de-exito/${project.idSection}` : "/casos-de-exito"}
                          className="w-full"
                          tabIndex={-1}
                        >
                          <Button className="w-full bg-primary-400" asChild>
                            <span>Ver Proyecto</span>
                          </Button>
                        </Link>
                      </CardFooter>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
