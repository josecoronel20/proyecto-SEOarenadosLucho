import { MapPin } from "lucide-react"
import { ZONAS } from "@/lib/siteConfig"

/**
 * Señal de SEO local **sin páginas delgadas**.
 *
 * La alternativa —una landing por partido— sería un doorway: sin contenido real
 * y distinto por zona, Google las trata como spam y diluyen la autoridad de las
 * 3 páginas que sí importan. Esta sección da la señal en texto; el trabajo pesado
 * de SEO local lo hace el Google Business Profile.
 *
 * Se nombran agrupaciones, no partidos: prometer zonas que después se rechazan
 * quema leads y reseñas.
 */
export function ZonasCobertura({ className = "bg-gray-50" }: { className?: string }) {
  return (
    <section className={`py-12 md:py-16 ${className}`} aria-labelledby="zonas">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 id="zonas" className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Dónde trabajamos
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
            Hacemos arenado a domicilio en <strong>Buenos Aires y todo el AMBA</strong>. Vamos con
            nuestros equipos y compresores: no dependemos de la energía del lugar ni tenés que
            trasladar nada.
          </p>

          <ul className="flex flex-wrap justify-center gap-2.5 mb-6">
            {ZONAS.map((zona) => (
              <li
                key={zona}
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm md:text-base font-medium text-gray-800"
              >
                <MapPin className="w-4 h-4 text-primary-600" />
                {zona}
              </li>
            ))}
          </ul>

          <p className="text-gray-600 text-sm md:text-base">
            ¿Estás más lejos? Consultanos igual: según el trabajo, viajamos.
          </p>
        </div>
      </div>
    </section>
  )
}
