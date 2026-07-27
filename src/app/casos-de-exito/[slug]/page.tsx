import { notFound } from "next/navigation"
import Link from "next/link"
import { getProjectBySlug, getAllSlugs, getOtherProjects } from "@/lib/getProjectBySlug"
import { CasoDetalleContent } from "@/components/casos-de-exito/CasoDetalleContent"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import type { Metadata } from "next"
import CTASection from "@/components/common/CTASection"
import { SITE_URL, BUSINESS_ID, og } from "@/lib/siteConfig"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: "Caso no encontrado" }
  return {
    title: project.title,
    description: project.overview,
    alternates: { canonical: `/casos-de-exito/${slug}` },
    openGraph: og(project.title, project.overview, project.images?.[0]),
  }
}

export default async function CasoDetallePage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const casoSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Casos de éxito", item: `${SITE_URL}/casos-de-exito` },
          { "@type": "ListItem", position: 3, name: project.title, item: `${SITE_URL}${project.url}` },
        ],
      },
      {
        "@type": "CreativeWork",
        name: project.title,
        description: project.overview,
        about: "Arenado y preparación de superficies",
        creator: { "@id": BUSINESS_ID },
        ...(project.images && project.images.length > 0
          ? { image: project.images.map((img) => `${SITE_URL}${img}`) }
          : {}),
      },
    ],
  }

  const otherProjects = getOtherProjects(slug, 3)

  return (
    <div className="min-h-screen bg-gray-50 py-10 md:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(casoSchema) }}
      />
      <div className="container mx-auto px-4 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Inicio", href: "/" },
            { name: "Casos de éxito", href: "/casos-de-exito" },
            { name: project.title },
          ]}
        />
        <CasoDetalleContent project={project} />
      </div>

      {/* Seguir viendo — enlazado interno (evita callejones sin salida) */}
      <div className="container mx-auto px-4 lg:px-8 mt-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Seguir viendo</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/servicios"
              className="inline-flex items-center px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-primary-500 hover:text-primary-600 transition-colors text-sm font-medium"
            >
              Ver servicios de arenado
            </Link>
            <Link
              href="/arenado-de-piletas"
              className="inline-flex items-center px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-primary-500 hover:text-primary-600 transition-colors text-sm font-medium"
            >
              Arenado de piletas
            </Link>
            {otherProjects.map((p) => (
              <Link
                key={p.id}
                href={`/casos-de-exito/${p.idSection}`}
                className="inline-flex items-center px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-primary-500 hover:text-primary-600 transition-colors text-sm font-medium"
              >
                {p.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-10  overflow-hidden">
      <CTASection /></div>
    </div>
  )
}
