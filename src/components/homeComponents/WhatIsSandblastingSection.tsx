import { Sparkles, Zap, Shield } from "lucide-react"

export function WhatIsSandblastingSection() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900">
            ¿Qué es el arenado?
          </h2>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-4 text-center">
              El <strong>arenado</strong> (también llamado <strong>limpieza por chorro de arena</strong> o <strong>chorro abrasivo</strong>) 
              es un proceso profesional de limpieza y preparación de superficies que consiste en proyectar partículas abrasivas 
              a alta velocidad para eliminar pintura vieja, óxido, suciedad, moho y otros contaminantes.
            </p>
            <p className="text-base text-gray-600 leading-relaxed text-center">
              Esta técnica permite preparar superficies de manera eficiente para aplicar nuevos recubrimientos, 
              mejorando la adherencia y durabilidad de la pintura o revestimiento.
            </p>
          </div>

          {/* Términos relacionados - versión compacta */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
              <div className="flex items-center mb-2">
                <Sparkles className="h-5 w-5 text-primary mr-2" />
                <h3 className="text-base font-semibold text-gray-900">Sandblasting</h3>
              </div>
              <p className="text-sm text-gray-600">
                Término en inglés que significa "chorro de arena". El nombre más usado en la industria.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
              <div className="flex items-center mb-2">
                <Zap className="h-5 w-5 text-primary mr-2" />
                <Shield className="h-5 w-5 text-primary mr-2" />
                <h3 className="text-base font-semibold text-gray-900">Decapado</h3>
              </div>
              <p className="text-sm text-gray-600">
                Remoción específica de pintura o recubrimientos antiguos para preparar la superficie para un nuevo tratamiento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

