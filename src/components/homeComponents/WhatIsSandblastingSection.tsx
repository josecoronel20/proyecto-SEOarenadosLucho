import { CheckCircle, Shield, Zap, Wrench } from "lucide-react";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

export function WhatIsSandblastingSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Qué es el <span className="text-primary">Arenado</span> o{" "}
            <span className="text-primary">Sandblasting</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            El <strong>arenado</strong>, también conocido como{" "}
            <strong>sandblasting</strong> o <strong>granallado</strong>, es una
            técnica profesional de <strong>limpieza profunda</strong> y{" "}
            <strong>preparación de superficies</strong> que revoluciona la
            industria de la restauración y mantenimiento.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-center mb-16">
          {/* Content Section */}
          <div className="order-1 lg:order-none">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Técnicas de{" "}
              <span className="text-primary">Limpieza Profunda</span>{" "}
              Profesional
            </h3>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg mb-4">
                    El <strong>arenado</strong> (también conocido como{" "}
                    <strong>sandblasting</strong> o <strong>granallado</strong>)
                    es un proceso industrial que utiliza{" "}
                    <strong>aire comprimido a alta presión</strong> para
                    proyectar partículas abrasivas contra superficies, logrando
                    una <strong>limpieza profunda</strong> sin precedentes.
                  </p>
                  <p>
                    Las partículas abrasivas pueden ser arena, granalla metálica
                    u otros materiales según el tipo de superficie y el
                    resultado deseado, permitiendo una{" "}
                    <strong>preparación de superficies</strong> óptima para cada
                    proyecto.
                  </p>
                </div>

                <div className="bg-primary/5 p-8 rounded-xl border-l-4 border-primary">
                  <h4 className="text-2xl font-semibold text-primary mb-6">
                    ¿Por qué elegir el Arenado Profesional?
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <span className="text-lg">
                        <strong>Limpieza profunda</strong> que elimina óxido,
                        pintura, sarro y contaminantes persistentes
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <span className="text-lg">
                        <strong>Preparación de superficies</strong> perfecta
                        para nuevos acabados y revestimientos
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <span className="text-lg">
                        Resultados <strong>profesionales</strong> imposibles de
                        lograr con métodos tradicionales
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              1. Evaluación
            </h4>
            <p className="text-gray-600 text-sm">
              Analizamos la superficie y determinamos el tipo de{" "}
              <strong>arenado</strong> más adecuado
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              2. Aplicación
            </h4>
            <p className="text-gray-600 text-sm">
              Ejecutamos el <strong>sandblasting</strong> con equipos
              profesionales de última generación
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              3. Control
            </h4>
            <p className="text-gray-600 text-sm">
              Verificamos la calidad de la <strong>limpieza profunda</strong> y{" "}
              <strong>preparación de superficies</strong>
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              4. Finalización
            </h4>
            <p className="text-gray-600 text-sm">
              Entregamos la superficie lista para pintura, galvanizado o el
              tratamiento deseado
            </p>
          </div>
        </div>

        {/* Video Demonstration Section */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ve el <span className="text-primary">Arenado</span> en Acción -
            Proceso Real
          </h3>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                Arenado de Piletas en Pilar - Proceso Profesional
              </h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Observa cómo realizamos el <strong>arenado profesional</strong>{" "}
                de piletas en Pilar. Nuestro proceso de{" "}
                <strong>sandblasting</strong> elimina completamente algas, sarro
                y pintura vieja, dejando la superficie perfectamente preparada
                para nuevos revestimientos.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>
                    <strong>Limpieza profunda</strong> sin dañar la estructura
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>
                    <strong>Preparación de superficies</strong> para pintura o
                    revestimiento
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>
                    Resultados <strong>profesionales</strong> garantizados
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <video
                className="w-full h-full object-cover rounded-lg"
                poster="/images/portada-hero-arenados-lucho.webp"
                preload="metadata"
                playsInline
                muted
                loop
                autoPlay
                aria-label="Video demostrativo del proceso de arenado de piletas en Pilar - Sandblasting profesional"
              >
                <source src="/videos/arenado-pileta-pilar-video.mp4" type="video/mp4" />
                <p className="text-center text-gray-500 p-4">
                  Tu navegador no soporta la reproducción de video.
                  <a
                    href="/videos/arenado-pileta-pilar-video.mp4"
                    className="text-primary hover:underline ml-1"
                  >
                    Descargar video
                  </a>
                </p>
              </video>
            </div>
          </div>
        </div>

        {/* Applications Section */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Aplicaciones del <span className="text-primary">Arenado</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                🏊‍♂️ Piletas y Piscinas
              </h4>
              <p className="text-gray-600">
                Eliminación de algas, sarro y pintura vieja.{" "}
                <strong>Preparación de superficies</strong> para nuevos
                revestimientos.
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                🏭 Industria
              </h4>
              <p className="text-gray-600">
                <strong>Limpieza profunda</strong> de maquinaria, estructuras
                metálicas y equipos industriales.
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                🚗 Vehículos
              </h4>
              <p className="text-gray-600">
                Restauración de chasis, carrocerías y piezas automotrices con{" "}
                <strong>sandblasting</strong> profesional.
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                🪑 Muebles
              </h4>
              <p className="text-gray-600">
                Restauración de muebles de madera eliminando barnices y pinturas
                antiguas.
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                🏠 Fachadas
              </h4>
              <p className="text-gray-600">
                <strong>Preparación de superficies</strong> de ladrillo,
                concreto y piedra para nuevos acabados.
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                🚢 Barcos
              </h4>
              <p className="text-gray-600">
                Mantenimiento de cascos y estructuras náuticas con{" "}
                <strong>arenado</strong> especializado.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-primary text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              ¿Necesitas <strong>Arenado</strong> o{" "}
              <strong>Sandblasting</strong> Profesional?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Más de 20 años de experiencia en{" "}
              <strong>limpieza profunda</strong> y{" "}
              <strong>preparación de superficies</strong> en Pilar y Zona Norte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                label="Consultar por WhatsApp"
                className="bg-white text-primary hover:bg-gray-100 transition-colors px-8 py-3 rounded-lg font-semibold"
                variant="default"
                size="lg"
              />
              <a
                href="/presupuesto-rapido"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Solicitar Presupuesto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
