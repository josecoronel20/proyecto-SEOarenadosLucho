import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, MapPin } from 'lucide-react'
import { WhatsAppCTA } from '@/components/common/WhatsAppCTA'
import { WPP_BTN, WPP_MSG } from '@/lib/wpp'
import { ZONAS } from '@/lib/siteConfig'

// Server Component: antes era "use client" solo por getFullYear(), que se resuelve
// igual en el servidor (el footer se re-renderiza en cada build/deploy).
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
    { label: 'Política de Privacidad', href: '/politica-de-privacidad' },
    { label: 'Términos y Condiciones', href: '/terminos-y-condiciones' },
  ]

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
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
                <p className="text-xl font-bold">Arenados Lucho</p>
                <p className="text-xs text-primary-200">Preparación y Limpieza de Superficies</p>
              </div>
            </div>
            <p className="text-sm text-primary-200 max-w-md">
              Arenado in situ en obra, industria, galpones y piletas. Sacamos óxido y pintura
              vieja y dejamos la superficie lista para pintar o revestir. Vamos con equipo propio:
              no trasladás nada.
            </p>

            <div className="mt-5">
              <WhatsAppCTA message={WPP_MSG.general} className={WPP_BTN}>
                <MessageCircle className="w-5 h-5" />
                Escribinos por WhatsApp
              </WhatsAppCTA>
              <p className="text-xs text-primary-300 mt-2">
                Visita y presupuesto sin costo · Respondemos rápido
              </p>
            </div>
          </div>

          {/* Navegación */}
          <nav aria-label="Navegación del pie">
            <p className="font-semibold mb-4 text-lg">Navegación</p>
            <ul className="flex flex-col gap-2">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-primary-200 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Zonas — señal de SEO local sin crear páginas delgadas por partido */}
          <div>
            <p className="font-semibold mb-4 text-lg">Dónde trabajamos</p>
            <ul className="flex flex-col gap-2">
              {ZONAS.map((zona) => (
                <li key={zona} className="flex items-center gap-2 text-sm text-primary-200">
                  <MapPin className="w-4 h-4 flex-shrink-0 text-primary-300" />
                  {zona}
                </li>
              ))}
            </ul>
            <p className="text-xs text-primary-300 mt-3 leading-relaxed">
              ¿Estás más lejos? Consultanos igual: según el trabajo viajamos.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-300 text-center md:text-left">
              © {currentYear} Arenados Lucho. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 text-sm text-primary-300">
              {privacyPolicy.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-white transition-colors"
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
