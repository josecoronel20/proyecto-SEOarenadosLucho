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
  tipoIntervencion: "Tipo de intervención",
  objetivoSuperficie: "Objetivo de la superficie",
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
          <Badge className="mb-3 bg-maquina-500 text-tinta rounded-sm">
            {project.tipo ? TIPO_LABEL[project.tipo] ?? project.tipo : project.category}
          </Badge>
          <h1 className="text-2xl md:text-4xl font-bold text-tinta leading-tight">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle asChild className="flex items-center gap-2 text-lg">
            <h2>
              <Target className="w-5 h-5 text-tinta" />
              Resumen del proyecto
            </h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-tinta-70 leading-relaxed">{project.overview}</p>
        </CardContent>
      </Card>

      {/* Galería de imágenes */}
      {hasImages && (
        <Card>
          <CardHeader>
            <CardTitle asChild className="text-lg"><h2>Galería</h2></CardTitle>
          </CardHeader>
          <CardContent>
            <Carousel opts={{ align: "start", loop: project.images!.length > 1 }} className="w-full">
              <CarouselContent className="-ml-0">
                {project.images!.map((src, i) => (
                  <CarouselItem key={i} className="pl-0 basis-full">
                    <div className="relative aspect-video w-full rounded-sm overflow-hidden bg-papel-alt">
                      <Image
                        src={src}
                        alt={`${project.title} - Imagen ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 896px"
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
            <CardTitle asChild className="flex items-center gap-2 text-lg">
              <h2>
                <Building2 className="w-5 h-5 text-tinta" />
                Contexto
              </h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {project.context.tipoEstructura && (
              <div>
                <p className="text-sm font-semibold text-tinta-70 uppercase tracking-wide mb-1">Tipo de estructura</p>
                <p className="text-tinta-70">{project.context.tipoEstructura}</p>
              </div>
            )}
            {project.context.entornoTrabajo && (
              <div>
                <p className="text-sm font-semibold text-tinta-70 uppercase tracking-wide mb-1">Entorno de trabajo</p>
                <p className="text-tinta-70">{project.context.entornoTrabajo}</p>
              </div>
            )}
            {project.context.objetivoCliente && (
              <div>
                <p className="text-sm font-semibold text-tinta-70 uppercase tracking-wide mb-1">Objetivo del cliente</p>
                <p className="text-tinta-70">{project.context.objetivoCliente}</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Alcance del trabajo */}
      {project.alcanceTrabajo && project.alcanceTrabajo.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle asChild className="flex items-center gap-2 text-lg">
              <h2>
                <ListChecks className="w-5 h-5 text-tinta" />
                Alcance del trabajo
              </h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {project.alcanceTrabajo.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-tinta-70">
                  <span className="text-tinta mt-1.5">•</span>
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
          <CardTitle asChild className="flex items-center gap-2 text-lg">
            <h2>
              <AlertCircle className="w-5 h-5 text-amber-600" />
              Desafíos operativos
            </h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {project.desafiosOperativos.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-tinta-70">
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
            <CardTitle asChild className="flex items-center gap-2 text-lg">
              <h2>
                <ClipboardList className="w-5 h-5 text-blue-600" />
                Metodología
              </h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {metodologiaEntries.map(([key, value]) => (
              <div key={key}>
                <p className="text-sm font-semibold text-tinta-70 mb-1">
                  {METODOLOGIA_LABELS[key] ?? key}
                </p>
                <p className="text-tinta-70 leading-relaxed">{value}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Parámetros técnicos */}
      {parametros.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle asChild className="flex items-center gap-2 text-lg">
              <h2>
                <FileCheck className="w-5 h-5 text-tinta" />
                Ficha del trabajo
              </h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {parametros.map(([key, value]) => (
              <div key={key}>
                <p className="text-sm font-semibold text-tinta-70">
                  {PARAMETROS_LABELS[key] ?? key}
                </p>
                <p className="text-tinta-70">{value}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Resultados */}
      <Card className="border-green-200 bg-green-50/30">
        <CardHeader>
          <CardTitle asChild className="flex items-center gap-2 text-lg">
            <h2>
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              Resultados
            </h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-tinta leading-relaxed">{project.resultados}</p>
        </CardContent>
      </Card>

      {/* Valor diferencial */}
      {project.valorDiferencial && project.valorDiferencial.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle asChild className="flex items-center gap-2 text-lg">
              <h2>
                <Sparkles className="w-5 h-5 text-tinta" />
                Valor diferencial
              </h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {project.valorDiferencial.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-tinta-70">
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
