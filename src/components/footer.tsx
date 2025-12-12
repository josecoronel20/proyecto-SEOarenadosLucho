import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { poppins } from "@/lib/fonts"

const footerServices = [
  {
    title: "Arenado Residencial",
    href: "/servicios/arenado-residencial"
  },
  {
    title: "Arenado Industrial",
    href: "/servicios/arenado-industrial"
  },
  {
    title: "Arenado de Vehículos", 
    href: "/servicios/arenado-de-vehiculos"
  },
  {
    title: "Arenado de Superficies",
    href: "/servicios/arenado-de-superficies"
  }
]

const quickLinks = [
  {
    title: "Inicio",
    href: "/"
  },
  {
    title: "Servicios",
    href: "/servicios"
  },
  {
    title: "Proyectos",
    href: "/proyectos"
  },
  {
    title: "Zonas de Cobertura",
    href: "/zonas-de-cobertura"
  },
  {
    title: "Presupuesto",
    href: "/presupuesto-rapido"
  },
  {
    title: "Política de Privacidad",
    href: "/politica-de-privacidad"
  }
]

const contactInfo = [
  {
    icon: Phone,
    text: "WhatsApp",
    href: "https://wa.me/5491123787750"
  },
  {
    icon: Mail,
    text: "arenadoslucho@hotmail.com",
    href: "mailto:arenadoslucho@hotmail.com"
  },
  {
    icon: MapPin,
    text: "Pilar, Zona Norte",
    href: "/zonas-de-cobertura/zona-norte/pilar"
  },
  {
    icon: Clock,
    text: "Lun-Sab: 8:00 - 18:00",
    href: null
  }
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contacto Directo */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contacto</h3>
            <div className="space-y-2 text-sm">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon className="h-4 w-4" />
                    {contact.href ? (
                      <Link href={contact.href} className="hover:text-white transition-colors">
                        {contact.text}
                      </Link>
                    ) : (
                      <span>{contact.text}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enlaces Esenciales */}
          <div>
            <h3 className="font-semibold text-white mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicios" className="hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="hover:text-white transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/zonas-de-cobertura" className="hover:text-white transition-colors">
                  Zonas de Cobertura
                </Link>
              </li>
              <li>
                <Link href="/presupuesto-rapido" className="hover:text-white transition-colors">
                  Presupuesto
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios Principales */}
          <div>
            <h3 className="font-semibold text-white mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              {footerServices.map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2025 Arenados Lucho. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
