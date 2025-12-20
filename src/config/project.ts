// project.ts
export type CoverageAreas = {
  zonaNorte: string[]
  zonaOeste: string[]
  caba: string[]
  primary: string[]
  all: string[]
}

export type Service = {
  id: string
  title: string
  description: string
  href: string
  features: string[]
}

export type Modality = {
  title: string
  description: string
  icon?: string
}

export type SEOConfig = {
  primaryKeywords: string[]
  secondaryKeywords: string[]
  longTailKeywords: string[]
}

export type Branding = {
  primaryColor: string
  primaryLight: string
  primaryDark: string
  neutralWhite: string
  neutralGray: string
  accentInfo: string
  accentSuccess: string
  accentWarning: string
  accentDanger: string
}

export type ConversionGoals = {
  primary: string
  secondary: string
  tertiary?: string
}

export type ProjectConfig = {
  name: string
  tagline: string
  contact: {
    phone: string
    whatsapp: string
    email: string
    hours: string
  }
  coverage: CoverageAreas
  services: Service[]
  modalities: Modality[]
  seo: SEOConfig
  branding: Branding
  conversionGoals: ConversionGoals
}

/**
 * Configuración central del proyecto Arenados Lucho
 * Mantener la constante inmutable (as const) para seguridad de tipos
 */
export const PROJECT: Readonly<ProjectConfig> = {
  name: "Arenados Lucho",
  tagline: "Servicio de arenado y sandblasting en Pilar y Zona Norte",

  contact: {
    phone: "+54 9 11 2378-7750",
    whatsapp: "+54 9 11 2378-7750",
    email: "arenadoslucho@hotmail.com",
    hours: "Lunes a Viernes 8:00-18:00"
  },

  coverage: {
    // Zona Norte - Prioridad máxima (especialmente Pilar)
    zonaNorte: [
      "Pilar",           // Prioridad #1
      "José C. Paz", 
      "Malvinas Argentinas",
      "San Miguel",
      "General San Martín",
      "San Fernando",
      "San Isidro",
      "Tigre",
      "Vicente López",
      "Cardales",
      "Zárate"
    ],
    // Zona Oeste - Prioridad media
    zonaOeste: [
      "General Rodríguez",
      "Moreno",
      "Ituzaingó",
      "Morón",
      "Hurlingham",
      "3 de Febrero"
    ],
    // CABA - Prioridad media
    caba: ["CABA"],
    // Zonas principales para SEO (las más importantes)
    primary: ["Pilar", "José C. Paz", "San Isidro", "Tigre", "General Rodríguez", "Morón", "CABA"],
    // Todas las zonas para referencia completa
    all: [
      // Zona Norte
      "Pilar", "José C. Paz", "Malvinas Argentinas", "San Miguel", "General San Martín", 
      "San Fernando", "San Isidro", "Tigre", "Vicente López", "Cardales", "Zárate",
      // Zona Oeste  
      "General Rodríguez", "Moreno", "Ituzaingó", "Morón", "Hurlingham", "3 de Febrero",
      // CABA
      "CABA"
    ]
  },

  services: [
    {
      id: "arenado-piletas",
      title: "Arenado de piletas",
      description: "Limpieza profunda y preparación de superficies para pintura o revestimiento",
      href: "/servicios/arenado-de-piletas",
      features: [
        "Preparación para pintura epoxi",
        "Eliminación de algas y moho",
        "Servicio móvil a domicilio",
        "Equipos de alta presión"
      ]
    },
    {
      id: "arenado-vehiculos",
      title: "Arenado de vehículos",
      description: "Remoción de pintura y óxido en autos, camiones, barcos y chasis",
      href: "/servicios/arenado-de-vehiculos",
      features: [
        "Remoción de pintura",
        "Eliminación de óxido",
        "Preparación para pintura",
        "Técnicas no abrasivas"
      ]
    },
    {
      id: "arenado-industrial",
      title: "Arenado industrial",
      description: "Limpieza y preparación de estructuras metálicas, maquinarias y obras industriales",
      href: "/servicios/arenado-industrial",
      features: [
        "Estructuras metálicas grandes",
        "Maquinaria industrial",
        "Preparación para pintura",
        "Servicio móvil a domicilio"
      ]
    },
    {
      id: "arenado-metales",
      title: "Arenado de metales",
      description: "Servicio fino en cabina para piezas metálicas, mecánicas, ornamentales o industriales",
      href: "/servicios/arenado-de-metales",
      features: [
        "Piezas mecánicas",
        "Servicio en taller",
        "Terminación uniforme",
        "Preparación para galvanizado"
      ]
    },
    {
      id: "arenado-madera",
      title: "Arenado de madera",
      description: "Restauración y despintado de muebles y superficies de madera con acabado fino",
      href: "/servicios/arenado-de-madera",
      features: [
        "Restauración de muebles",
        "Despintado fino",
        "Acabado profesional",
        "Preservación de madera"
      ]
    }
  ],

  modalities: [
    {
      title: "Arenado móvil",
      description: "Servicio in situ con equipos portátiles. Llevamos la tecnología de sandblasting a tu ubicación en Buenos Aires",
      icon: "MapPin"
    },
    {
      title: "Arenado en taller",
      description: "Servicio en cabina especializada para piezas pequeñas y proyectos de alta precisión",
      icon: "Award"
    }
  ],

  seo: {
    // Keywords primarias - Alta competencia, alto volumen
    primaryKeywords: [
      "arenados lucho",
      "arenado piletas",
      "arenado Pilar",
      "arenado Zona Norte", 
      "sandblasting Buenos Aires",
      "granallado Pilar",
      "limpieza profunda superficies"
    ],
    
    // Keywords secundarias - Media competencia, intención comercial
    secondaryKeywords: [
      "arenado de piletas Pilar",
      "arenado de vehículos Zona Norte", 
      "arenado de fachadas Buenos Aires",
      "preparación para pintura Pilar",
      "limpieza industrial Buenos Aires",
      "arenado de muebles madera Pilar",
      "arenado de barcos Zona Norte"
    ],
    
    // Long-tail - Baja competencia, alta conversión
    longTailKeywords: [
      "precio arenado pileta Pilar",
      "cuanto cuesta arenar auto Zona Norte", 
      "empresa arenado fachadas Buenos Aires",
      "arenado muebles madera Pilar",
      "sandblasting barcos Zona Norte",
      "presupuesto arenado industrial Buenos Aires",
      "arenado piletas antes y después Pilar",
      "granallado industrial Pilar",
      "arenado cabina Zona Norte",
      "mejor empresa arenado Pilar",
      "arenado profesional Zona Norte",
      "servicio arenado móvil Buenos Aires"
    ]
  },

  branding: {
    primaryColor: "#18415A",   // Azul petróleo principal
    primaryLight: "#3b82f6",   // Azul claro para detalles y hovers
    primaryDark: "#1e3a8a",    // Azul oscuro para fondos o encabezados
    neutralWhite: "#ffffff",   // Fondo base
    neutralGray: "#f3f4f6",    // Fondos y secciones secundarias
    accentInfo: "#60a5fa",     // Resaltados suaves
    accentSuccess: "#10b981",  // Acciones positivas o confirmaciones
    accentWarning: "#f59e0b",  // Avisos o elementos destacados
    accentDanger: "#ef4444"    // Errores o alertas
  },
  

  conversionGoals: {
    primary: "Pedir presupuesto por WhatsApp",
    secondary: "Cotizar online (formulario)",
    tertiary: "Contacto por email"
  }
} as const

// Utilidades SEO y de contenido
export const getServiceById = (id: string): Service | undefined =>
  PROJECT.services.find(s => s.id === id)

export const getLocalLongTails = (area: string): string[] =>
  PROJECT.seo.longTailKeywords.filter(k => k.toLowerCase().includes(area.toLowerCase()))

// Utilidades para zonas específicas
export const getZonaNorteAreas = (): string[] => PROJECT.coverage.zonaNorte
export const getZonaOesteAreas = (): string[] => PROJECT.coverage.zonaOeste
export const getCABAAreas = (): string[] => PROJECT.coverage.caba
export const getPrimaryAreas = (): string[] => PROJECT.coverage.primary
export const getAllAreas = (): string[] => PROJECT.coverage.all

// Generar keywords por zona específica
export const generateZonaKeywords = (zona: string): {
  primary: string[]
  secondary: string[]
  longTail: string[]
} => {
  const zonaLower = zona.toLowerCase()
  
  return {
    primary: PROJECT.seo.primaryKeywords.filter(k => k.toLowerCase().includes(zonaLower)),
    secondary: PROJECT.seo.secondaryKeywords.filter(k => k.toLowerCase().includes(zonaLower)),
    longTail: PROJECT.seo.longTailKeywords.filter(k => k.toLowerCase().includes(zonaLower))
  }
}

export const getServiceKeywords = (serviceId: string, area: string): {
  primary: string[]
  secondary: string[]
  longTail: string[]
} => {
  const service = getServiceById(serviceId)
  if (!service) return { primary: [], secondary: [], longTail: [] }
  
  const serviceName = service.title.toLowerCase()
  const areaLower = area.toLowerCase()
  
  return {
    primary: PROJECT.seo.primaryKeywords.filter(k => 
      k.toLowerCase().includes(areaLower) || k.toLowerCase().includes(serviceName)
    ),
    secondary: PROJECT.seo.secondaryKeywords.filter(k => 
      k.toLowerCase().includes(areaLower) && k.toLowerCase().includes(serviceName)
    ),
    longTail: PROJECT.seo.longTailKeywords.filter(k => 
      k.toLowerCase().includes(areaLower) && k.toLowerCase().includes(serviceName)
    )
  }
}

export const generatePageTitle = (service: string, area: string): string => {
  const serviceKeywords = getServiceKeywords(service, area)
  const primaryKeyword = serviceKeywords.primary[0] || `${service} ${area}`
  return `${primaryKeyword} | Arenados Lucho - Servicio Profesional`
}

export const generateMetaDescription = (service: string, area: string): string => {
  const serviceData = getServiceById(service)
  const longTail = getServiceKeywords(service, area).longTail[0]
  
  return `Servicio profesional de ${serviceData?.title.toLowerCase()} en ${area}. ${serviceData?.description}. Presupuesto gratuito por WhatsApp. Respuesta en 24h.`
}

// Generar URLs SEO-friendly
export const generateServiceUrl = (serviceId: string, area: string): string => {
  const service = getServiceById(serviceId)
  if (!service) return '/servicios'
  
  const serviceSlug = service.title.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[áéíóú]/g, (match) => {
      const map: { [key: string]: string } = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u' }
      return map[match]
    })
  
  const areaSlug = area.toLowerCase().replace(/\s+/g, '-')
  return `/servicios/${serviceSlug}-${areaSlug}`
}
