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
  resultados: string
  valorDiferencial?: string[]

  /**
   * Fotos con pie, en orden de proceso. Cuando existe, reemplaza a la galería
   * suelta: el que mira un caso quiere ver cómo fue el trabajo, no un carrusel.
   *
   * ⚠️ Cada pie describe SOLO lo que se ve en su cuadro. No afirma que dos fotos
   * sean del mismo recipiente ni deduce nada que no esté a la vista.
   */
  fotos?: { src: string; pie: string }[]

  /** Cómo suele ser un trabajo de este tipo. Generalidades, no datos del caso. */
  comoSuele?: { concepto: string; detalle: string }[]

  /** Lo que pone el cliente. Ver `contexto/21-realidad-operativa.md`. */
  queNecesitamos?: string[]
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

/** Otros casos (para enlazado interno "seguir viendo") — excluye el slug actual. */
export function getOtherProjects(slug: string, limit = 3): ProjectForDetail[] {
  return getAllProjects()
    .filter((p) => p.idSection && p.idSection !== slug)
    .slice(0, limit)
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
