"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/project-card";
import { Filter, MessageCircle, ArrowRight } from "lucide-react";
import { getAllProjects } from "@/data/projects";
import { PROJECT } from "@/config/project";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

export function ProjectsGallerySection() {
  // Obtener todos los proyectos del JSON
  const allProjects = getAllProjects();

  // Estado para el filtro
  const [selectedService, setSelectedService] = useState<string>("todos");

  // Servicios disponibles para filtrar según las categorías de imágenes
  const services = [
    {
      id: "todos",
      nameDesktop: "Todos los Proyectos",
      nameMobile: "Todos",
      icon: "🔧",
    },
    {
      id: "pileta",
      nameDesktop: "Arenado de Piletas",
      nameMobile: "Piletas",
      icon: "🏊",
    },
    {
      id: "vehiculo",
      nameDesktop: "Arenado de Vehículos",
      nameMobile: "Vehículos",
      icon: "🚗",
    },
    {
      id: "industrial",
      nameDesktop: "Arenado Industrial",
      nameMobile: "Industrial",
      icon: "🏭",
    },
    {
      id: "madera",
      nameDesktop: "Arenado de Madera",
      nameMobile: "Madera",
      icon: "🪵",
    },
    {
      id: "metal",
      nameDesktop: "Arenado de Metales",
      nameMobile: "Metales",
      icon: "⚙️",
    },
    {
      id: "otro",
      nameDesktop: "Otros Proyectos",
      nameMobile: "Otros",
      icon: "🏗️",
    },
  ];

  // Función para obtener la categoría del proyecto (coincide con el nombre del archivo)
  const getMainCategory = (category: string): string => {
    const normalizedCategory = category.toLowerCase();

    // Mapeo directo a las categorías de los nombres de archivo
    if (normalizedCategory === "pileta" || normalizedCategory === "piscina") {
      return "pileta";
    }
    if (
      normalizedCategory === "vehiculo" ||
      normalizedCategory === "auto" ||
      normalizedCategory === "camion" ||
      normalizedCategory === "chasis" ||
      normalizedCategory === "barco"
    ) {
      return "vehiculo";
    }
    if (
      normalizedCategory === "industrial" ||
      normalizedCategory === "tanque" ||
      normalizedCategory === "estructura" ||
      normalizedCategory === "edificio" ||
      normalizedCategory === "fabrica" ||
      normalizedCategory === "pared"
    ) {
      return "industrial";
    }
    if (normalizedCategory === "madera" || normalizedCategory === "mueble") {
      return "madera";
    }
    if (
      normalizedCategory === "metal" ||
      normalizedCategory === "pieza" ||
      normalizedCategory === "llanta" ||
      normalizedCategory === "acero"
    ) {
      return "metal";
    }

    // Todo lo demás es "otro"
    return "otro";
  };

  // Filtrar proyectos según el servicio seleccionado
  const filteredProjects =
    selectedService === "todos"
      ? allProjects
      : allProjects.filter(
          (project) => getMainCategory(project.category) === selectedService
        );

  // Mostrar los primeros 12 proyectos filtrados
  const featuredProjects = filteredProjects.slice(0, 12);

  // Handler para cambiar el filtro
  const handleFilterChange = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  return (
    <section className="py-16" aria-labelledby="gallery-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="gallery-heading" className="text-3xl font-bold mb-4">
            Galería de Proyectos de Arenado - Antes y Después
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selección de nuestros proyectos de arenado en diferentes
            industrias.
          </p>
        </div>

        {/* Filtro de Servicios */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <Filter className="h-5 w-5 mr-2 text-blue-600" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-gray-700">
              Filtrar por Servicio de Arenado:
            </h3>
          </div>
          <div
            className="flex flex-wrap justify-center gap-3"
            role="group"
            aria-label="Filtros de servicios"
          >
            {services.map((service) => (
              <Button
                key={service.id}
                type="button"
                variant={selectedService === service.id ? "default" : "outline"}
                size="sm"
                onClick={() => handleFilterChange(service.id)}
                className={`flex items-center gap-2 transition-all ${
                  selectedService === service.id
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "hover:bg-blue-50 hover:border-blue-300"
                }`}
                aria-pressed={selectedService === service.id}
              >
                <span className="text-lg" aria-hidden="true">
                  {service.icon}
                </span>
                <span className="hidden sm:inline">{service.nameDesktop}</span>
                <span className="sm:hidden">{service.nameMobile}</span>
              </Button>
            ))}
          </div>

          {/* Contador de resultados */}
          <div className="text-center mt-4">
            <p className="text-sm text-muted-foreground" aria-live="polite">
              Mostrando {featuredProjects.length} de {filteredProjects.length}{" "}
              proyectos
              {selectedService !== "todos" && (
                <>
                  <span className="hidden sm:inline">
                    {" "}
                    de{" "}
                    {
                      services.find((s) => s.id === selectedService)
                        ?.nameDesktop
                    }
                  </span>
                  <span className="sm:hidden">
                    {" "}
                    de{" "}
                    {services.find((s) => s.id === selectedService)?.nameMobile}
                  </span>
                </>
              )}
            </p>
          </div>
        </div>

        {/* Grid de Proyectos */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          role="list"
          aria-label="Galería de proyectos de arenado"
        >
          {featuredProjects.map((project) => (
            <div key={project.id} role="listitem">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
