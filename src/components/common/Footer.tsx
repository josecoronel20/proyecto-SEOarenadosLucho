import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { WhatsAppCTA } from '@/components/common/WhatsAppCTA'
import { WPP_BTN, WPP_MSG } from '@/lib/wpp'
import { ZONAS } from '@/lib/siteConfig'

// Server Component: antes era "use client" solo por getFullYear(), que se resuelve
// igual en el servidor (el footer se re-renderiza en cada build/deploy).
//
// El pie es la contratapa del catálogo: fondo tinta, columnas separadas por
// filete y encabezados chicos en versalita. Los alfileres de mapa al lado de
// cada zona se fueron —repetían en dibujo lo que la palabra ya decía.
export function Footer() {
  const currentYear = new Date().getFullYear()

  const navigation = [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Arenado de piletas', href: '/arenado-de-piletas' },
    { label: 'Casos de éxito', href: '/casos-de-exito' },
    { label: 'Preguntas frecuentes', href: '/preguntas-frecuentes' },
    { label: 'Contacto', href: '/contacto' },
  ]

  const privacyPolicy = [
    { label: 'Política de privacidad', href: '/politica-de-privacidad' },
    { label: 'Términos y condiciones', href: '/terminos-y-condiciones' },
  ]

  /** Encabezado de columna: chico, en caja alta y espaciado, como el rótulo de
   *  una tabla impresa. No compite con los títulos de la página. */
  const rotulo =
    'ficha-num text-xs font-semibold uppercase tracking-wider text-maquina-400 mb-4'

  return (
    <footer className="bg-tinta text-papel">
      <div className="container mx-auto px-5 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Marca */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo-solo-blanco.png"
                alt="Arenados Lucho"
                width={60}
                height={60}
                className="object-contain"
              />
              <div>
                <p className="text-xl font-bold tracking-tight">Arenados Lucho</p>
                <p className="text-xs text-tinta-20">
                  Preparación y limpieza de superficies
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-tinta-20 max-w-[52ch]">
              Arenado in situ en obra, industria, galpones y piletas. Sacamos óxido
              y pintura vieja y dejamos la superficie lista para pintar o revestir.
              Vamos con equipo propio: no trasladás nada.
            </p>

            <div className="mt-6">
              <WhatsAppCTA message={WPP_MSG.general} className={WPP_BTN}>
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Escribinos por WhatsApp
              </WhatsAppCTA>
              <p className="text-xs text-tinta-20 mt-3">
                Visita y presupuesto sin costo · Respondemos rápido
              </p>
            </div>
          </div>

          {/* Navegación */}
          <nav aria-label="Navegación del pie">
            <p className={rotulo}>Navegación</p>
            <ul className="flex flex-col">
              {navigation.map((item) => (
                <li key={item.label} className="border-t border-white/10">
                  <Link
                    href={item.href}
                    className="block py-2.5 text-sm text-tinta-20 hover:text-papel transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Zonas — señal de SEO local sin crear páginas delgadas por partido */}
          <div>
            <p className={rotulo}>Dónde trabajamos</p>
            <ul className="flex flex-col">
              {ZONAS.map((zona) => (
                <li
                  key={zona}
                  className="border-t border-white/10 py-2.5 text-sm text-tinta-20"
                >
                  {zona}
                </li>
              ))}
            </ul>
            <p className="text-xs text-tinta-20 mt-4 leading-relaxed">
              ¿Estás más lejos? Consultanos igual: según el trabajo viajamos.
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <p className="text-sm text-tinta-20">
              © {currentYear} Arenados Lucho. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-tinta-20">
              {privacyPolicy.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-papel transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
