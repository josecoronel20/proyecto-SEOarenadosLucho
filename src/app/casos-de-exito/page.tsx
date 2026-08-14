"use client"

import { useMemo, useState } from "react"
import projectsData from "@/lib/projectsInfo.json"
import { CasosHero } from "@/components/casos-de-exito/CasosHero"
import { FiltroTipo, type FiltroTipoValue } from "@/components/casos-de-exito/FiltroTipo"
import { CasoCard, type CasoProject } from "@/components/casos-de-exito/CasoCard"
import CTASection from "@/components/common/CTASection"

function getAllProjects(): CasoProject[] {
  // Fix: correctly extract the projects list from the JSON, handling typing safely
  const data: any = projectsData
  const list = data[0]?.industrialProjects ?? []
  return list.filter((p: any) => p?.title && p?.overview)
}

export default function CasosDeExitoPage() {
  const [filtro, setFiltro] = useState<FiltroTipoValue>("todos")

  const projects = useMemo(() => getAllProjects(), [])
  const filtered = useMemo(() => {
    if (filtro === "todos") return projects
    return projects.filter((p) => p.tipo === filtro)
  }, [projects, filtro])

  return (
    <div className="min-h-screen bg-papel-alt">
      <CasosHero />
      <section className="py-8 md:py-10 border-b border-papel-linea bg-papel">
        <div className="container mx-auto px-5 lg:px-8">
          <FiltroTipo value={filtro} onChange={setFiltro} />
        </div>
      </section>
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filtered.map((project) => (
              <CasoCard key={project.id} project={project} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-tinta-70 py-12">
              No hay casos para el filtro seleccionado.
            </p>
          )}
        </div>
      </section>
      <CTASection />
    </div>
  )
}
