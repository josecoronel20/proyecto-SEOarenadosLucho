import Image from "next/image"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"
import { Ruler, Truck, Wrench, MapPin } from "lucide-react"

export function MaquinariaSection() {
  return (
    <section id="maquinaria-arenado" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Maquinaria utilizada para el arenado
            </h2>
          
          </div>

          <div className="mb-10 flex justify-center">
            <figure className="bg-white rounded-lg shadow-md max-w-3xl w-full overflow-hidden p-0">
              <div className="relative w-full h-52 sm:h-64 md:h-80 min-h-[180px] m-0">
                <Image
                  src="/images/maquinaria/compresor-y-camioneta.png"
                  alt="Equipos de arenado en obra"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                  loading="lazy"
                  style={{ border: 0 }}
                  priority={false}
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-0 py-3 text-center text-sm text-white font-medium">
                  Equipos de arenado en obra
                </figcaption>
              </div>
            </figure>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-3">
              <Ruler className="h-6 w-6 text-primary" />
              Requisitos de espacio
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="flex items-start gap-3">
                <Truck className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-base text-gray-900 mb-1">Camioneta</h4>
                  <p className="text-gray-700">
                    Necesita aprox. <strong>5 m</strong> de largo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Wrench className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-base text-gray-900 mb-1">Compresor</h4>
                  <p className="text-gray-700">
                    Aproximadamente <strong>4 m</strong> de largo.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-primary p-4 rounded-r-lg mt-2">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-base text-gray-900 mb-1">Espacio total</h4>
                  <p className="text-gray-700">
                    Aproximadamente <strong>9 metros</strong> lineales y acceso vehicular adecuado.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/90 text-white rounded-lg p-6 text-center">
            <p className="text-lg mb-4 text-blue-100">
              ¿Tenés dudas sobre el espacio en tu obra? Consultanos por WhatsApp.
            </p>
            <div className="flex justify-center">
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
