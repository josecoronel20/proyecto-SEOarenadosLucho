import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react"
import { getProjectBySlug } from "@/lib/getProjectBySlug"

const SLUG_NAVE_FERROVIARIA = "nave-ferroviaria"
const LOCATION_NAVE_FERROVIARIA = "Del Viso, Buenos Aires"
const FALLBACK_IMAGE = "/images/services/arenadoIndustrial/Nave/IMG_2419.PNG"

export function CasoDestacado() {
  const caso = getProjectBySlug(SLUG_NAVE_FERROVIARIA)
  if (!caso) return null

  const imageSrc = caso.images?.[0] ?? FALLBACK_IMAGE
  const slug = caso.idSection ?? SLUG_NAVE_FERROVIARIA
  const highlights = caso.valorDiferencial?.slice(0, 3) ?? []

  return (
    <section
      className="py-12 md:py-16 bg-papel-alt border-b border-papel-linea"
      aria-label="Caso destacado"
    >
      <div className="container mx-auto px-5 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="ficha-num text-xs font-semibold uppercase tracking-wider text-maquina-700 mb-2">
            Caso destacado
          </p>
          <h2 className="text-3xl md:text-[2.5rem] font-bold tracking-tight leading-[1.1] text-tinta mb-8">
            {caso.title}
          </h2>

          <div className="border-t-2 border-tinta pt-6">
            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[280px]">
                <Image
                  src={imageSrc}
                  alt={caso.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 flex items-center gap-1.5 px-3 py-1.5 bg-tinta text-papel text-sm font-medium">
                  
                  {LOCATION_NAVE_FERROVIARIA}
                </div>
              </div>

              <div className="flex flex-col justify-center">
                
                <ul className="space-y-2.5 mb-6">
                  {highlights.map((item: string) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-tinta flex-shrink-0 mt-0.5" />
                      <span className="text-tinta-70 text-sm md:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/casos-de-exito/${slug}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-tinta text-papel font-semibold rounded-sm hover:bg-tinta transition-colors"
                  >
                    Ver caso completo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/casos-de-exito"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-papel-linea text-tinta-70 font-semibold rounded-sm hover:border-tinta hover:text-tinta transition-colors"
                  >
                    Ver todos los casos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
