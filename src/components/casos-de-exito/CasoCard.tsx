import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

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
    // Ficha de catálogo, no tarjeta: la foto arriba a sangre, y debajo el rótulo
    // de tipo en versalita —no una píldora de color— más el título y el objetivo.
    // Sin caja alrededor ni sombra; separa el filete superior. El ícono de diana
    // que iba pegado al objetivo se fue: no decía nada que el texto no dijera.
    <article className="flex flex-col h-full border-t-2 border-tinta pt-4 group">
      {project.images && (
        <div className="relative w-full h-44 md:h-52 bg-papel-alt overflow-hidden mb-4">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      )}

      <p className="ficha-num text-xs font-semibold uppercase tracking-wider text-maquina-700">
        {project.tipo ? TIPO_LABEL[project.tipo] ?? project.tipo : project.category}
      </p>

      <h2 className="mt-2 text-lg font-bold leading-snug text-tinta">
        {project.title}
      </h2>

      <p className="mt-2 text-sm leading-relaxed text-tinta-70 line-clamp-3 flex-1">
        {project.overview}
      </p>

      <Link
        href={project.idSection ? `/casos-de-exito/${project.idSection}` : project.url}
        aria-label={`Ver caso completo: ${project.title}`}
        className="mt-4 inline-flex items-center gap-1.5 font-semibold text-sm text-maquina-700 hover:text-maquina-600"
      >
        Ver caso completo
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </Link>
    </article>
  )
}
