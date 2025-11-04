import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { poppins } from "@/lib/fonts"

const footerServices = [
  {
    title: "Arenado de Piletas",
    href: "/servicios/arenado-de-piletas"
  },
  {
    title: "Arenado Industrial",
    href: "/servicios/arenado-industrial"
  },
  {
    title: "Arenado de Barcos", 
    href: "/servicios/arenado-de-barcos"
  },
  {
    title: "Arenado de Vehículos",
    href: "/servicios/arenado-de-vehiculos"
  },
  {
    title: "Arenado de Fachadas",
    href: "/servicios/arenado-de-fachadas"
  },
  {
    title: "Arenado de Muebles",
    href: "/servicios/arenado-de-muebles"
  },
  {
    title: "Arenado de Piezas Metálicas",
    href: "/servicios/arenado-de-piezas-metalicas"
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
  }
]

const contactInfo = [
  {
    icon: Phone,
    text: "+54 9 11 2378-7750",
    href: "tel:+5491123787750"
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
    <footer className="bg-muted/50 py-10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 w-full justify-center">
              <Image 
                src="/images/logo-solo-azul.svg" 
                alt="Logo Arenados Lucho" 
                width={64} 
                height={32}
                className="h-8 w-16"
                priority={false}
                quality={75}
              />
              <span className={`text-3xl font-bold text-primary ${poppins.className}`}>Arenados Lucho</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Servicios profesionales de arenado con más de 10 años de experiencia. 
              Calidad garantizada en cada proyecto.{" "}
              <Link href="/preguntas-frecuentes" className="text-primary underline underline-offset-2 decoration-2 font-semibold">
                Conoce más sobre nuestros servicios
              </Link>.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Servicios</h3>
            <ul className="space-y-2 text-sm">
              {footerServices.map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="text-muted-foreground hover:text-foreground">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contacto</h3>
            <div className="space-y-3 text-sm">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon className="h-4 w-4" />
                    {contact.href ? (
                      <Link href={contact.href} className="text-muted-foreground hover:text-foreground">
                        {contact.text}
                      </Link>
                    ) : (
                      <span className="text-muted-foreground">{contact.text}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Arenados Lucho. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
