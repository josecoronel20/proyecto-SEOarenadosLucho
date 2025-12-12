import { CheckCircle } from "lucide-react"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function WhatWeDoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            ¿Qué hacemos?
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Eliminamos pintura, óxido y contaminantes con arenado profesional. 
            <span className="font-semibold text-primary"> Tu superficie queda lista para pintar en menos tiempo y con mejor resultado.</span>
          </p>
          
          <div className="bg-blue-50 rounded-xl p-6 mb-8 border-l-4 border-primary">
            <div className="flex items-start gap-4 text-left">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-800 font-medium mb-2">
                  Beneficio principal: Superficie perfectamente preparada
                </p>
                <p className="text-gray-600 text-sm">
                  El arenado elimina completamente óxido, pintura vieja y contaminantes, dejando la superficie con la rugosidad ideal para que la pintura se adhiera mejor y dure más tiempo.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/presupuesto-rapido">
                Solicitar Presupuesto
              </Link>
            </Button>
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </section>
  )
}

