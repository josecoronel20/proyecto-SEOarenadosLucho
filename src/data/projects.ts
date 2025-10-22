import projectsData from './projects.json'

export interface Project {
  id: string
  title: string
  description: string
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
  location: string
  service?: string
  category: string
}

export interface Category {
  name: string
  description: string
  services: string[]
}

export interface Location {
  name: string
  zone: string
  priority: number
}

export interface ProjectsData {
  projects: Project[]
  categories: Record<string, Category>
  locations: Record<string, Location>
}

// Exportar los datos tipados
export const projects: ProjectsData = projectsData as ProjectsData

// Utilidades para filtrar y buscar proyectos
export const getProjectsByService = (serviceId: string): Project[] => {
  return projects.projects.filter(project => project.service === serviceId)
}

export const getProjectsByLocation = (location: string): Project[] => {
  return projects.projects.filter(project => 
    project.location.toLowerCase().includes(location.toLowerCase())
  )
}

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.projects.filter(project => project.category === category)
}

export const getProjectsByZone = (zone: string): Project[] => {
  return projects.projects.filter(project => {
    const locationData = projects.locations[project.location]
    return locationData?.zone === zone
  })
}

export const getAllProjects = (): Project[] => {
  return projects.projects
}

export const getFeaturedProjects = (limit: number = 6): Project[] => {
  // Priorizar proyectos de Pilar y Zona Norte
  return projects.projects
    .sort((a, b) => {
      const aLocation = projects.locations[a.location]
      const bLocation = projects.locations[b.location]
      
      // Priorizar por zona (Pilar = 1, Zona Norte = 2, etc.)
      if (aLocation?.priority !== bLocation?.priority) {
        return (aLocation?.priority || 999) - (bLocation?.priority || 999)
      }
      
      // Luego por servicio (piletas primero)
      const serviceOrder = ['arenado-piletas', 'arenado-vehiculos', 'arenado-industrial', 'arenado-fachadas', 'arenado-barcos', 'arenado-piezas']
      const aServiceIndex = serviceOrder.indexOf(a.service)
      const bServiceIndex = serviceOrder.indexOf(b.service)
      
      return aServiceIndex - bServiceIndex
    })
    .slice(0, limit)
}

export const getProjectById = (id: string): Project | undefined => {
  return projects.projects.find(project => project.id === id)
}

export const getProjectsByServiceAndLocation = (serviceId: string, location: string): Project[] => {
  return projects.projects.filter(project => 
    project.service === serviceId && 
    project.location.toLowerCase().includes(location.toLowerCase())
  )
}

// Obtener estadísticas de proyectos
export const getProjectStats = () => {
  const totalProjects = projects.projects.length
  const projectsByService = projects.projects.reduce((acc, project) => {
    acc[project.service] = (acc[project.service] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  const projectsByZone = projects.projects.reduce((acc, project) => {
    const locationData = projects.locations[project.location]
    const zone = locationData?.zone || 'Otros'
    acc[zone] = (acc[zone] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  return {
    totalProjects,
    projectsByService,
    projectsByZone,
    categories: Object.keys(projects.categories).length,
    locations: Object.keys(projects.locations).length
  }
}
