import Link from "next/link"
import Image from "next/image"
import { MessageCircle, ArrowRight } from "lucide-react"
import { WhatsAppCTA } from "@/components/common/WhatsAppCTA"
import { WPP_BTN_ON_DARK, WPP_MSG } from "@/lib/wpp"
import { H1 } from "@/components/common/system"

/**
 * Hero de la home.
 *
 * Decisiones deliberadas, todas por conversión:
 *
 * 1. **No ocupa 100vh.** Antes empujaba todo el contenido fuera de la pantalla:
 *    el que no conoce la palabra "arenado" rebotaba sin llegar a la explicación.
 * 2. **El `<h1>` es el título real**, con keyword + zona. Antes el h1 era una
 *    frase descriptiva en `text-base` y el nombre de la marca un `<p>` gigante.
 * 3. **Fondo = imagen con `priority`, no el video.** `heroVideo.mp4` pesa 24,3 MB
 *    sin comprimir: en 4G la home quedaba en blanco varios segundos, con tráfico
 *    pago rebotando antes de ver nada.
 * 4. **Se fue el copete** ("Arenados Lucho · In situ, con equipo propio") que iba
 *    arriba del título. Un renglón chico encima de un titular es de las cosas que
 *    delatan una plantilla, y acá encima repetía la marca que ya está en el
 *    header. El titular tiene que aguantarse solo.
 *
 * El filete naranja al pie es la firma del sistema: la misma línea que separa
 * los bloques del catálogo, acá al ancho de la pantalla.
 */
export function HeroSection() {
  return (
    <section className="relative bg-tinta border-b-2 border-maquina-500">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services/arenadoIndustrial/Nave/IMG_2419.PNG"
          alt="Arenado de una estructura metálica en Buenos Aires"
          fill
          className="object-cover opacity-35"
          priority
          sizes="100vw"
        />
      </div>
      {/* El escáner midió 2,2:1 en los píxeles más claros de la foto. El
          degradado sube el piso para que ningún punto del texto quede por debajo
          de AA, sin tapar del todo la imagen. */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-tinta via-tinta/90 to-tinta/75" />

      <div className="container mx-auto px-5 lg:px-8 relative z-20 py-16 md:py-28">
        <div className="max-w-4xl">
          <h1 className={`${H1} text-papel`}>
            Arenado en Buenos Aires y AMBA: dejamos la superficie lista para
            pintar o revestir
          </h1>

          <p className="mt-6 text-base md:text-xl leading-relaxed text-tinta-20 max-w-[60ch]">
            El arenado es como una lija potente: saca de una vez la pintura vieja,
            el óxido y lo descascarado. Vamos a tu obra, galpón o casa con nuestros
            equipos —no trasladás nada— y te entregamos la superficie limpia y
            pareja.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <WhatsAppCTA message={WPP_MSG.general} className={WPP_BTN_ON_DARK}>
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Pedir presupuesto por WhatsApp
            </WhatsAppCTA>
            <Link
              href="/casos-de-exito"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/50 text-papel font-semibold rounded-sm hover:bg-papel/10 transition-colors"
            >
              Ver trabajos reales
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <p className="mt-5 text-sm md:text-base text-tinta-20">
            La visita y el presupuesto son sin costo y sin compromiso.
          </p>
        </div>
      </div>
    </section>
  )
}
