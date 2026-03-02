import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getProjectBySlug, getAllSlugs } from "@/lib/getProjectBySlug"
import { CasoDetalleContent } from "@/components/casos-de-exito/CasoDetalleContent"
import type { Metadata } from "next"
import CTASection from "@/components/common/CTASection"

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
  }
}

export default async function CasoDetallePage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  return (
    <main className="min-h-screen bg-gray-50 py-10 md:py-14">
      <div className="container mx-auto px-4 lg:px-8">
        <Link
          href="/casos-de-exito"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a casos de éxito
        </Link>
        <CasoDetalleContent project={project} />
      </div>
      <div className="container mx-auto pt-10  overflow-hidden">
      <CTASection /></div>
    </main>
  )
}
