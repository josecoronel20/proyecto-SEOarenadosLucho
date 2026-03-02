"use client"

import Image from "next/image"
import {
  Card,
  CardContent,
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
import {
  Building2,
  Target,
  ListChecks,
  AlertCircle,
  ClipboardList,
  FileCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react"
import type { ProjectForDetail } from "@/lib/getProjectBySlug"

const TIPO_LABEL: Record<string, string> = {
  "restauracion-mantenimiento": "Restauración y mantenimiento",
  "obra-publica": "Obra pública",
  "obra-construccion": "Obra en construcción",
}

const METODOLOGIA_LABELS: Record<string, string> = {
  planificacion: "Planificación",
  coordinacion: "Coordinación",
  coordinacionInstitucional: "Coordinación institucional",
  controlCalidad: "Control de calidad",
  controlContaminacion: "Control de contaminación",
  controlImpacto: "Control de impacto",
  seguridad: "Seguridad",
  sectorizacion: "Sectorización",
  reubicacionControlada: "Reubicación controlada",
}

const PARAMETROS_LABELS: Record<string, string> = {
  normativaReferencia: "Normativa de referencia",
  gradoPreparacion: "Grado de preparación",
  gradoPreparacionAlcanzado: "Grado de preparación alcanzado",
  objetivoSuperficie: "Objetivo de superficie",
  condicionFinal: "Condición final",
}

interface CasoDetalleContentProps {
  project: ProjectForDetail
}

export function CasoDetalleContent({ project }: CasoDetalleContentProps) {
  const metodologiaEntries = project.metodologia
    ? Object.entries(project.metodologia).filter(([, v]) => v)
    : []
  const parametros = project.parametrosTecnicos
    ? Object.entries(project.parametrosTecnicos).filter(([, v]) => v)
    : []
  const hasImages = project.images && project.images.length > 0

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Encabezado */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <Badge className="mb-3 bg-primary/90 text-white">
            {project.tipo ? TIPO_LABEL[project.tipo] ?? project.tipo : project.category}
          </Badge>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Target className="w-5 h-5 text-primary-600" />
            Resumen del proyecto
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">{project.overview}</p>
        </CardContent>
      </Card>

      {/* Galería de imágenes */}
      {hasImages && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Galería</CardTitle>
          </CardHeader>
          <CardContent>
            <Carousel opts={{ align: "start", loop: project.images!.length > 1 }} className="w-full">
              <CarouselContent className="-ml-0">
                {project.images!.map((src, i) => (
                  <CarouselItem key={i} className="pl-0 basis-full">
                    <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        src={src}
                        alt={`${project.title} - Imagen ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 896px"
                        unoptimized
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {project.images!.length > 1 && (
                <>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </>
              )}
            </Carousel>
          </CardContent>
        </Card>
      )}

      {/* Contexto */}
      {project.context && (project.context.tipoEstructura || project.context.entornoTrabajo || project.context.objetivoCliente) && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Building2 className="w-5 h-5 text-primary-600" />
              Contexto
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {project.context.tipoEstructura && (
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Tipo de estructura</p>
                <p className="text-gray-700">{project.context.tipoEstructura}</p>
              </div>
            )}
            {project.context.entornoTrabajo && (
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Entorno de trabajo</p>
                <p className="text-gray-700">{project.context.entornoTrabajo}</p>
              </div>
            )}
            {project.context.objetivoCliente && (
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Objetivo del cliente</p>
                <p className="text-gray-700">{project.context.objetivoCliente}</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Alcance del trabajo */}
      {project.alcanceTrabajo && project.alcanceTrabajo.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <ListChecks className="w-5 h-5 text-primary-600" />
              Alcance del trabajo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {project.alcanceTrabajo.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <span className="text-primary-600 mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Desafíos operativos */}
      <Card className="border-amber-200 bg-amber-50/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <AlertCircle className="w-5 h-5 text-amber-600" />
            Desafíos operativos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {project.desafiosOperativos.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700">
                <span className="text-amber-600 mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Metodología */}
      {metodologiaEntries.length > 0 && (
        <Card className="border-blue-200 bg-blue-50/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <ClipboardList className="w-5 h-5 text-blue-600" />
              Metodología
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {metodologiaEntries.map(([key, value]) => (
              <div key={key}>
                <p className="text-sm font-semibold text-gray-700 mb-1">
                  {METODOLOGIA_LABELS[key] ?? key}
                </p>
                <p className="text-gray-700 leading-relaxed">{value}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Parámetros técnicos */}
      {parametros.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <FileCheck className="w-5 h-5 text-primary-600" />
              Parámetros técnicos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {parametros.map(([key, value]) => (
              <div key={key}>
                <p className="text-sm font-semibold text-gray-600">
                  {PARAMETROS_LABELS[key] ?? key}
                </p>
                <p className="text-gray-700">{value}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Resultados */}
      <Card className="border-green-200 bg-green-50/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            Resultados
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-800 leading-relaxed">{project.resultados}</p>
        </CardContent>
      </Card>

      {/* Valor diferencial */}
      {project.valorDiferencial && project.valorDiferencial.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Sparkles className="w-5 h-5 text-primary-600" />
              Valor diferencial
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {project.valorDiferencial.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
