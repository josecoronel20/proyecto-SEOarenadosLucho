"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Target, AlertCircle, Lightbulb, CheckCircle2 } from "lucide-react"

// Agregamos el nuevo campo a la interfaz para la imagen.
export interface CasoProject {
  id: number
  title: string
  category: string
  tipo?: "restauracion-mantenimiento" | "obra-publica" | "obra-construccion"
  url: string
  idSection?: string
  overview: string
  context?: {
    tipoEstructura?: string
    entornoTrabajo?: string
    objetivoCliente?: string
  }
  alcanceTrabajo?: string[]
  desafiosOperativos: string[]
  metodologia?: Record<string, string>
  parametrosTecnicos?: Record<string, string>
  resultados: string
  valorDiferencial?: string[]
  images?: string[] // Nuevo campo (puede ser undefined si no hay imagen)
}

const TIPO_LABEL: Record<string, string> = {
  "restauracion-mantenimiento": "Restauración y mantenimiento",
  "obra-publica": "Obra pública",
  "obra-construccion": "Obra en construcción",
}

interface CasoCardProps {
  project: CasoProject
}

export function CasoCard({ project }: CasoCardProps) {
  const desafios = Array.isArray(project.desafiosOperativos) ? project.desafiosOperativos : []
  const metodologiaValues = project.metodologia ? Object.values(project.metodologia).filter(Boolean) : []

  return (
    <article className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      {/* Imagen/prueba visual */}
      {project.images && (
        <div className="w-full h-44 md:h-52 bg-gray-100 overflow-hidden flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.images[0]}
            alt={project.title}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-4 md:p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2 mb-3">
          <h2 className="text-lg font-bold text-gray-900 line-clamp-2">
            {project.title}
          </h2>
          <Badge className="bg-primary/90 text-white shrink-0">
            {project.tipo ? TIPO_LABEL[project.tipo] ?? project.tipo : project.category}
          </Badge>
        </div>

        {/* Objetivo / Overview */}
        <div className="mb-3">
          <p className="flex items-start gap-2 text-sm text-gray-600">
            <Target className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
            <span className="line-clamp-3">{project.overview}</span>
          </p>
        </div>

        <Link
          href={project.idSection ? `/casos-de-exito/${project.idSection}` : project.url}
          className="mt-4 inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm"
        >
          Ver caso completo →
        </Link>
      </div>
    </article>
  )
}
