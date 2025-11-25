import { MetadataRoute } from 'next'
import { getBlogSitemapData } from '@/data/blog'
import { PROJECT } from '@/config/project'

const BASE_URL = 'https://www.arenadoslucho.com.ar'

// Helper para convertir nombres de ciudades a slugs de URL
function cityToSlug(city: string): string {
  return city
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[áéíóúñ]/g, (match) => {
      const map: { [key: string]: string } = {
        'á': 'a',
        'é': 'e',
        'í': 'i',
        'ó': 'o',
        'ú': 'u',
        'ñ': 'n'
      }
      return map[match] || match
    })
    .replace(/[^a-z0-9-]/g, '')
}

// Helper para crear entrada de sitemap
function createSitemapEntry(
  url: string,
  priority: number,
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'monthly',
  lastModified?: Date
): MetadataRoute.Sitemap[0] {
  return {
    url: `${BASE_URL}${url}`,
    lastModified: lastModified || new Date(),
    changeFrequency,
    priority,
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const sitemapEntries: MetadataRoute.Sitemap = []

  // Página principal
  sitemapEntries.push(createSitemapEntry('/', 1.0, 'weekly'))

  // Páginas principales
  sitemapEntries.push(createSitemapEntry('/servicios', 0.9, 'monthly'))
  sitemapEntries.push(createSitemapEntry('/proyectos', 0.8, 'weekly'))
  sitemapEntries.push(createSitemapEntry('/blog', 0.8, 'weekly'))
  sitemapEntries.push(createSitemapEntry('/presupuesto-rapido', 0.9, 'monthly'))
  sitemapEntries.push(createSitemapEntry('/preguntas-frecuentes', 0.7, 'monthly'))
  sitemapEntries.push(createSitemapEntry('/politica-de-privacidad', 0.3, 'yearly'))
  sitemapEntries.push(createSitemapEntry('/superficies-que-arenamos', 0.7, 'monthly'))

  // Servicios - Generados dinámicamente desde PROJECT.services
  PROJECT.services.forEach((service) => {
    sitemapEntries.push(createSitemapEntry(service.href, 0.8, 'monthly'))
  })

  // Servicio de pintura (no está en PROJECT.services pero existe)
  sitemapEntries.push(createSitemapEntry('/servicios/pintura', 0.8, 'monthly'))

  // Zonas de cobertura - Páginas principales
  sitemapEntries.push(createSitemapEntry('/zonas-de-cobertura', 0.7, 'monthly'))
  sitemapEntries.push(createSitemapEntry('/zonas-de-cobertura/zona-norte', 0.7, 'monthly'))
  sitemapEntries.push(createSitemapEntry('/zonas-de-cobertura/zona-oeste', 0.7, 'monthly'))
  sitemapEntries.push(createSitemapEntry('/zonas-de-cobertura/caba', 0.7, 'monthly'))

  // Zonas de cobertura - Ciudades de Zona Norte
  PROJECT.coverage.zonaNorte.forEach((city) => {
    const citySlug = cityToSlug(city)
    const priority = city === 'Pilar' ? 0.8 : 0.6 // Pilar tiene mayor prioridad
    sitemapEntries.push(
      createSitemapEntry(`/zonas-de-cobertura/zona-norte/${citySlug}`, priority, 'monthly')
    )
  })

  // Zonas de cobertura - Ciudades de Zona Oeste
  PROJECT.coverage.zonaOeste.forEach((city) => {
    const citySlug = cityToSlug(city)
    sitemapEntries.push(
      createSitemapEntry(`/zonas-de-cobertura/zona-oeste/${citySlug}`, 0.6, 'monthly')
    )
  })

  // Superficies que arenamos - Páginas principales
  const surfaces = [
    { slug: 'arenado-de-hormigon', priority: 0.7 },
    { slug: 'arenado-de-madera', priority: 0.7 },
    { slug: 'arenado-de-piedra', priority: 0.7 },
    { slug: 'arenado-de-metales', priority: 0.7 },
  ]

  surfaces.forEach((surface) => {
    sitemapEntries.push(
      createSitemapEntry(`/superficies-que-arenamos/${surface.slug}`, surface.priority, 'monthly')
    )
  })

  // Superficies de metales - Subpáginas
  const metalSurfaces = [
    { slug: 'acero-inoxidable', priority: 0.6 },
    { slug: 'aluminio', priority: 0.6 },
    { slug: 'hierro', priority: 0.6 },
  ]

  metalSurfaces.forEach((metal) => {
    sitemapEntries.push(
      createSitemapEntry(
        `/superficies-que-arenamos/arenado-de-metales/${metal.slug}`,
        metal.priority,
        'monthly'
      )
    )
  })

  // Categorías del blog
  const blogCategories = [
    'piletas',
    'industrial',
    'barcos',
    'vehiculos',
    'piezas-metalicas',
    'muebles',
    'fachadas',
    'tecnicas',
  ]

  blogCategories.forEach((category) => {
    sitemapEntries.push(
      createSitemapEntry(`/blog/categoria/${category}`, 0.6, 'monthly')
    )
  })

  // Posts del blog - Generados dinámicamente
  const blogSitemapData = getBlogSitemapData()
  blogSitemapData.forEach((item) => {
    sitemapEntries.push({
      url: `${BASE_URL}${item.url}`,
      lastModified: new Date(item.lastModified),
      changeFrequency: item.changeFrequency,
      priority: item.priority,
    })
  })

  return sitemapEntries
}
