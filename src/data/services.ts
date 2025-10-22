import servicesData from './services.json'

export interface Service {
  id: string
  title: string
  description: string
  href: string
  imageSrc: string
  imageAlt: string
  features: string[]
  category: string
  popular: boolean
}

export interface ServiceCategory {
  name: string
  description: string
  icon: string
}

export interface ServicesData {
  services: Service[]
  categories: Record<string, ServiceCategory>
}

// Exportar los datos tipados
export const services: ServicesData = servicesData as ServicesData

// Utilidades para filtrar y buscar servicios
export const getServicesByCategory = (category: string): Service[] => {
  return services.services.filter(service => service.category === category)
}

export const getPopularServices = (): Service[] => {
  return services.services.filter(service => service.popular)
}

export const getServiceById = (id: string): Service | undefined => {
  return services.services.find(service => service.id === id)
}

export const getAllServices = (): Service[] => {
  return services.services
}

export const getServicesByPopularity = (): Service[] => {
  return services.services.sort((a, b) => {
    // Primero los populares, luego los demás
    if (a.popular && !b.popular) return -1
    if (!a.popular && b.popular) return 1
    return 0
  })
}

// Obtener estadísticas de servicios
export const getServiceStats = () => {
  const totalServices = services.services.length
  const popularServices = services.services.filter(s => s.popular).length
  const servicesByCategory = services.services.reduce((acc, service) => {
    acc[service.category] = (acc[service.category] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  return {
    totalServices,
    popularServices,
    servicesByCategory,
    categories: Object.keys(services.categories).length
  }
}
