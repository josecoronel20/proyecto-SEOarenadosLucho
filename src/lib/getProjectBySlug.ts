import projectsData from "./projectsInfo.json"

export interface MetodologiaRecord {
  [key: string]: string
}

export interface ProjectForDetail {
  id: number
  title: string
  category: string
  tipo?: string
  url: string
  idSection?: string
  images?: string[]
  overview: string
  context?: {
    tipoEstructura?: string
    entornoTrabajo?: string
    objetivoCliente?: string
  }
  alcanceTrabajo?: string[]
  desafiosOperativos: string[]
  metodologia?: MetodologiaRecord
  parametrosTecnicos?: {
    tipoIntervencion?: string
    objetivoSuperficie?: string
    condicionFinal?: string
  }
  resultados: string
  valorDiferencial?: string[]
}

const data = projectsData as unknown as { industrialProjects?: ProjectForDetail[] }[]

function getAllProjects(): ProjectForDetail[] {
  return data[0]?.industrialProjects ?? []
}

export function getProjectBySlug(slug: string): ProjectForDetail | null {
  const projects = getAllProjects()
  return projects.find((p) => p.idSection === slug) ?? null
}

export function getAllSlugs(): string[] {
  const projects = getAllProjects()
  return projects
    .map((p) => p.idSection)
    .filter((s): s is string => Boolean(s))
}

/** Mapea el proyecto al formato legacy (description, challenges, solutions, results, images). */
export function mapToLegacyProject(p: ProjectForDetail): {
  id: number
  title: string
  category: string
  url: string
  idSection?: string
  description: string
  images: string[]
  challenges: string[]
  solutions: string[]
  results: string
} {
  const solutions = p.metodologia ? Object.values(p.metodologia).filter(Boolean) : []
  return {
    id: p.id,
    title: p.title,
    category: p.category,
    url: p.url,
    idSection: p.idSection,
    description: p.overview,
    images: [],
    challenges: Array.isArray(p.desafiosOperativos) ? p.desafiosOperativos : [],
    solutions,
    results: p.resultados,
  }
}
