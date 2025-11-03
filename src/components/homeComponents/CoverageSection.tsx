import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, MapPin, Clock, CheckCircle2 } from "lucide-react"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"
import { PROJECT, getZonaNorteAreas, getZonaOesteAreas, getCABAAreas } from "@/config/project"

export function CoverageSection() {
  const zonaNorte = getZonaNorteAreas()
  const zonaOeste = getZonaOesteAreas()
  const caba = getCABAAreas()

  return (
    <section id="cobertura" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold mb-4 block">SERVICIO DE ARENADO EN BUENOS AIRES</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Zonas de Cobertura para Servicios de Arenado y Sandblasting
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Brindamos <strong>servicio profesional de arenado industrial y sandblasting</strong> en toda el área metropolitana de Buenos Aires. 
            Nuestro equipo móvil se desplaza hasta tu ubicación para garantizar resultados excepcionales.
          </p>
        </div>
        
        {/* Zona Norte - Prioridad Máxima */}
        <div className="mb-12 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-blue-600" />
            Zona Norte GBA
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
            {zonaNorte.map((area, index) => (
              <Link 
                key={index}
                href={`/zonas-de-cobertura/zona-norte/${area.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-6 py-3 text-base text-center bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition-all hover:bg-blue-100 hover:-translate-y-1"
              >
                <div className="font-medium text-blue-800">Arenado en {area}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Zona Oeste */}
        <div className="mb-12 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-blue-600" />
            Zona Oeste GBA
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
            {zonaOeste.map((area, index) => (
              <Link 
                key={index}
                href={`/zonas-de-cobertura/zona-oeste/${area.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-6 py-3 text-base text-center bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition-all hover:bg-blue-100 hover:-translate-y-1"
              >
                <div className="font-medium text-blue-800">Arenado en {area}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* CABA */}
        <div className="mb-12 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-blue-600" />
            Ciudad de Buenos Aires
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {caba.map((area, index) => (
              <Link 
                key={index}
                href={`/zonas-de-cobertura/${area.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-6 py-3 text-base text-center bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition-all hover:bg-blue-100 hover:-translate-y-1"
              >
                <div className="font-medium text-blue-800">Arenado en {area}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Beneficios */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 max-w-4xl mx-auto mb-12 text-white">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4">
              <MapPin className="h-8 w-8 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Servicio Móvil</h3>
                <p className="text-blue-100">Nos desplazamos a tu ubicación con todo el equipo necesario</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="h-8 w-8 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Respuesta Rápida</h3>
                <p className="text-blue-100">Cotización y visita técnica en menos de 24 horas</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-xl text-gray-700 mb-6">
            ¿No encontrás tu localidad en la lista? Consultanos
          </p>
          <WhatsAppButton
            label="Consultar por WhatsApp"
            className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold text-lg px-8"
            variant="outline"
            size="lg"
          />
        </div>
      </div>
    </section>
  )
}
