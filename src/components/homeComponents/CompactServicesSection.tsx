import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { CTAActionButtons } from "@/components/common/CTAActionButtons"

export function CompactServicesSection() {
  const services = [
    {
      title: "Arenado Industrial",
      description: "Estructuras metálicas y maquinaria pesada.",
      href: "/servicios#arenado-industrial",
      imageSrc: "/images/servicios/servicio-arenado-industrial-pilar.jpg"
    },
   
    
    {
      title: "Arenado de Metales",
      description: "Arenado de cualquier superficie metálica.",
      href: "/servicios#arenado-de-metales",
      imageSrc: "/images/servicios/servicio-arenado-auto-san-fernando.png"
    },
    {
      title: "Arenado de Piletas",
      description: "Limpieza profunda y preparación para pintura epoxi.",
      href: "/servicios#arenado-de-piletas",
      imageSrc: "/images/servicios/servicio-arenado-pileta-pilar.png"
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Servicios más solicitados
            </h2>
            <p className="text-lg text-gray-600">
              Soluciones profesionales de arenado para cada necesidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group transition-all border border-blue-100 rounded-2xl shadow-md hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 focus-within:shadow-xl focus-within:border-primary/60 relative overflow-hidden min-h-[400px]"
                style={{
                  backgroundImage: `url(${service.imageSrc})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Link over the card */}
                <Link
                  href={service.href}
                  className="absolute inset-0 z-10"
                  tabIndex={-1}
                  aria-label={`Ver más sobre ${service.title}`}
                ></Link>
                
                {/* Contenedor inferior con degradado que se funde con la imagen */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-6"
                  style={{
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.2) 80%, transparent 100%)"
                  }}
                >
                  <div className="flex flex-col items-start">
                    
                    <CardTitle className="text-lg font-semibold text-white mb-1 group-hover:text-white/90 transition-colors">
                      {service.title}
                    </CardTitle>
                    <p className="text-white/90 text-sm mb-4">{service.description}</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full font-medium bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/50 hover:text-white relative z-20"
                    asChild
                  >
                    <Link href={service.href}>
                      Ver más
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">¿Necesitas un presupuesto personalizado?</p>
            
              <CTAActionButtons />
            
          </div>
        </div>
      </div>
    </section>
  )
}

