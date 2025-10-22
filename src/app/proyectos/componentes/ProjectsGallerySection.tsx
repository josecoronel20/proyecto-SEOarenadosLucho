"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/ui/project-card"
import { Filter, MessageCircle, ArrowRight } from "lucide-react"
import { getAllProjects } from "@/data/projects"
import { PROJECT } from "@/config/project"

export function ProjectsGallerySection() {
  // Obtener todos los proyectos del JSON
  const allProjects = getAllProjects()
  
  // Estado para el filtro
  const [selectedService, setSelectedService] = useState<string>("todos")
  
  // Servicios disponibles para filtrar
  const services = [
    { id: "todos", name: "Todos los Servicios de Arenado en Pilar y Zona Norte", icon: "🔧" },
    { id: "arenado-piletas", name: "Arenado de Piletas en Pilar", icon: "🏊‍♂️" },
    { id: "arenado-industrial", name: "Arenado Industrial en Zona Norte", icon: "🏭" },
    { id: "arenado-piezas", name: "Arenado de Piezas en Pilar", icon: "⚙️" },
    { id: "arenado-muebles", name: "Arenado de Muebles en Zona Norte", icon: "🪑" },
    { id: "arenado-barcos", name: "Arenado de Barcos en Buenos Aires", icon: "🚢" },
    { id: "arenado-vehiculos", name: "Arenado de Vehículos en Pilar", icon: "🚗" },
    { id: "arenado-fachadas", name: "Arenado de Fachadas en Zona Norte", icon: "🏠" }
  ]
  
  // Filtrar proyectos según el servicio seleccionado
  const filteredProjects = selectedService === "todos" 
    ? allProjects 
    : allProjects.filter(project => project.service === selectedService)
  
  // Mostrar los primeros 12 proyectos filtrados
  const featuredProjects = filteredProjects.slice(0, 12)

  return (
    <section className="py-16" aria-labelledby="gallery-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="gallery-heading" className="text-3xl font-bold mb-4">
            Galería de Proyectos de Arenado en Pilar y Zona Norte - Antes y Después
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selección de nuestros mejores trabajos de arenado en diferentes industrias. 
            Servicio profesional de arenado y sandblasting en Pilar, San Isidro, Tigre y todo el Norte de Buenos Aires.
          </p>
        </div>

        {/* Filtro de Servicios */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <Filter className="h-5 w-5 mr-2 text-blue-600" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-gray-700">Filtrar por Servicio de Arenado:</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3" role="group" aria-label="Filtros de servicios">
            {services.map((service) => (
              <Button
                key={service.id}
                variant={selectedService === service.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedService(service.id)}
                className={`flex items-center gap-2 transition-all ${
                  selectedService === service.id 
                    ? "bg-blue-600 hover:bg-blue-700 text-white" 
                    : "hover:bg-blue-50 hover:border-blue-300"
                }`}
                aria-pressed={selectedService === service.id}
              >
                <span className="text-lg" aria-hidden="true">{service.icon}</span>
                <span className="hidden sm:inline">{service.name}</span>
                <span className="sm:hidden">{service.name.split(' ')[0]}</span>
              </Button>
            ))}
          </div>
          
          {/* Contador de resultados */}
          <div className="text-center mt-4">
            <p className="text-sm text-muted-foreground" aria-live="polite">
              Mostrando {featuredProjects.length} de {filteredProjects.length} proyectos de arenado
              {selectedService !== "todos" && ` en ${services.find(s => s.id === selectedService)?.name}`}
            </p>
          </div>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" role="list" aria-label="Galería de proyectos de arenado">
          {featuredProjects.map((project) => (
            <div key={project.id} role="listitem">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        {/* CTA para presupuesto */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            ¿Te interesa realizar un proyecto de arenado? Tenemos más de 500 proyectos completados en Pilar y Zona Norte.
            {selectedService !== "todos" && (
              <span className="block mt-2 text-blue-600 font-medium">
                Especialistas en {services.find(s => s.id === selectedService)?.name.toLowerCase()}
                en toda la zona norte.
              </span>
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
              <Link href={`https://wa.me/${PROJECT.contact.whatsapp.replace(/\s+/g, '')}?text=Hola,%20necesito%20presupuesto%20para%20${selectedService === "todos" ? "arenado" : services.find(s => s.id === selectedService)?.name.toLowerCase()}`}>
                Consultar por WhatsApp
                <MessageCircle className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
              <Link href="/presupuesto-rapido">
                Cotizar Online
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
