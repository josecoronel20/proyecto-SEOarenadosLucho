import Image from "next/image"
import { MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { WhatsAppCTA } from "@/components/common/WhatsAppCTA"
import { WPP_BTN_ON_DARK, WPP_MSG } from "@/lib/wpp"

/**
 * Hero de /servicios. Igual que en la home: fuera el `100vh` (empujaba todo el
 * contenido fuera de pantalla) y el `<h1>` pasa a llevar keyword + zona — antes
 * era "Arenado industrial" a secas, tirando "buenos aires"/"amba" justo del
 * elemento que más pesa para la consulta local.
 */
export function ServiciosHero() {
  return (
    <section className="relative bg-primary-900">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services/arenadoIndustrial.PNG"
          alt="Arenado de estructuras metálicas en un galpón de Buenos Aires"
          fill
          className="object-cover object-top opacity-45"
          priority
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary-900 via-primary-900/85 to-primary-900/55" />

      <div className="container mx-auto px-4 lg:px-8 relative z-20 py-14 md:py-24">
        <div className="max-w-3xl">
          <Breadcrumbs items={[{ name: "Inicio", href: "/" }, { name: "Servicios" }]} />

          <p className="text-primary-200 font-semibold text-sm md:text-base mb-3">
            Obra · Industria · Galpones · Buenos Aires y AMBA
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
            Arenado industrial y en obra en Buenos Aires y AMBA
          </h1>

          <p className="mt-5 text-base md:text-xl text-white/95 leading-relaxed max-w-2xl drop-shadow-md">
            Arenamos estructuras metálicas, tanques, silos, camiones, hierros, paredes y fachadas
            <strong className="font-semibold"> en tu obra, tu planta o tu galpón</strong>. Vamos con
            equipo y compresores propios: no trasladás nada y no dependemos de la energía del lugar.
          </p>

          <p className="mt-3 text-white/90 font-medium">
            Sacamos óxido y pintura vieja y te lo dejamos listo para pintar o revestir.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <WhatsAppCTA message={WPP_MSG.obra} className={WPP_BTN_ON_DARK}>
              <MessageCircle className="w-5 h-5" />
              Pedir presupuesto por WhatsApp
            </WhatsAppCTA>
            <Link
              href="/casos-de-exito"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/90 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Ver trabajos reales
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
