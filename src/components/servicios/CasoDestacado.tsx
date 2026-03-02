"use client"

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
      className="py-12 md:py-16 bg-gray-50 border-b border-gray-200"
      aria-label="Caso destacado"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">
            Caso destacado
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {caso.title}
          </h2>

          <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-lg">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[280px]">
                <Image
                  src={imageSrc}
                  alt={caso.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/95 text-gray-700 text-sm font-medium">
                  <MapPin className="w-4 h-4 text-primary-600" />
                  {LOCATION_NAVE_FERROVIARIA}
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-center">
                
                <ul className="space-y-2.5 mb-6">
                  {highlights.map((item: string) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm md:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/casos-de-exito/${slug}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Ver caso completo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/casos-de-exito"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-primary-500 hover:text-primary-600 transition-colors"
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
