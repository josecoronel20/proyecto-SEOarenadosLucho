import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, FileText, Clock, MapPin } from "lucide-react"
import { PROJECT } from "@/config/project"

export function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Solicitá tu presupuesto personalizado
          </h2>
          <p className="text-xl mb-10 text-blue-200 leading-relaxed">
            Especificá el servicio de <strong className="text-white">arenado o sandblasting</strong> que necesitás, junto con la ubicación y dimensiones. 
            Brindamos servicios en <strong className="text-white">Zona Norte, Zona Oeste y CABA</strong>.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="flex items-center gap-3 bg-white/10 rounded-full px-6 py-3">
              <MapPin className="h-5 w-5 text-blue-200" />
              <span className="text-blue-200">Servicio móvil a domicilio</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 rounded-full px-6 py-3">
              <Clock className="h-5 w-5 text-blue-200" />
              <span className="text-blue-200">Respuesta en 24h</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-xl transition-all duration-300 text-lg py-6" 
              asChild
            >
              <Link 
                href={`https://wa.me/${PROJECT.contact.whatsapp.replace(/\D/g, '')}?text=Quiero%20presupuesto%20de%20arenado%20-%20[servicio]%20-%20[localidad]`}
                aria-label="Pedir presupuesto por WhatsApp"
                className="flex items-center"
              >
                <MessageCircle className=" h-6 w-6" />
                Solicitar presupuesto por WhatsApp
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/80 text-primary hover:bg-white hover:text-blue-900 transition-all duration-300 text-lg py-6" 
              asChild
            >
              <Link 
                href="/presupuesto-rapido" 
                aria-label="Cotizar online con formulario"
                className="flex items-center"
              >
                <FileText className="mr-3 h-6 w-6" />
                Cotizar online (formulario)
              </Link>
            </Button>
          </div>
          
          <p className="text-blue-200 text-base">
            Presupuesto sin cargo · Respuesta en 24h hábiles · Incluye visita técnica si se requiere evaluación in situ
          </p>
        </div>
      </div>
    </section>
  )
}
