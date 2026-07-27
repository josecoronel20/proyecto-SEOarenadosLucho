import type { MetadataRoute } from "next"
import { getAllSlugs } from "@/lib/getProjectBySlug"
import { SITE_URL } from "@/lib/siteConfig"

const staticPaths = [
  "",
  "/servicios",
  "/casos-de-exito",
  "/preguntas-frecuentes",
  "/contacto",
  "/politica-de-privacidad",
  "/terminos-y-condiciones",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "" || path === "/servicios" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/contacto" || path === "/servicios" ? 0.9 : 0.7,
  }))

  const caseEntries: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${SITE_URL}/casos-de-exito/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticEntries, ...caseEntries]
}
