import { CheckCircle, Shield, Zap, Wrench, AirVent, Package, Target, Sparkles } from "lucide-react";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function WhatIsSandblastingSection() {
  return (
    <section id="what-is-sandblasting" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Qué es el <span className="text-primary">Arenado</span> o{" "}
            <span className="text-primary">Sandblasting</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            El <strong>arenado</strong> (también conocido como <strong>sandblasting</strong> o <strong>granallado</strong>) es una técnica industrial que proyecta partículas abrasivas a alta presión sobre superficies para eliminar pintura, óxido, sarro y contaminantes. 
            Se utiliza para <strong>preparación de superficies</strong> antes de aplicar nuevos recubrimientos, mejorando la adherencia y durabilidad.
          </p>
          
          {/* Ventajas y tipos de abrasivos */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
            <div className="bg-primary/5 p-8 rounded-xl border-l-4 border-primary text-left">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Ventajas sobre métodos tradicionales
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Más rápido</strong> que lijado manual o decapado químico
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Llega a áreas difíciles</strong> y espacios angostos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Rugosidad controlada</strong> para mejor adherencia de pintura
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>No deja residuos químicos</strong> como el decapado
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 text-left">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Tipos de abrasivos utilizados
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-primary">• Granalla metálica:</span>
                  <span>Para metales y estructuras industriales</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-primary">• Arena de sílice:</span>
                  <span>Para superficies de hormigón y piedra</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-primary">• Óxido de aluminio:</span>
                  <span>Para trabajos de precisión y acabados finos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-primary">• Bicarbonato de sodio:</span>
                  <span>Para superficies delicadas sin dañar el sustrato</span>
                </li>
              </ul>
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

        {/* Equipment Functioning Section */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            ¿Cómo Funciona el <span className="text-primary">Equipo de Arenado</span>?
          </h3>

          {/* Imagen explicativa */}
          <div id="how-it-works" className="flex justify-center my-6">
            <Image
              src="/images/maquinaria/imagen-explicativa.png"
              alt="Imagen explicativa del funcionamiento de la maquinaria de arenado y sandblasting"
              className="rounded-xl shadow-lg border border-gray-100 w-64 h-auto max-w-full"
              width={256}
              height={171}
              loading="lazy"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-l-4 border-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <AirVent className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                Compresor de Aire
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Genera <strong>aire a alta presión</strong>, que se conduce por una manguera hasta la tolva.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-l-4 border-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                Tolva o Tanque Presurizado
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Contiene el <strong>abrasivo</strong>. El aire comprimido mezcla y expulsa la arena por una manguera hacia la boquilla.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-l-4 border-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                Boquilla de Arenado
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                El operador dirige el <strong>chorro de aire y arena</strong> sobre la superficie, removiendo pintura, óxido, impurezas o revestimientos antiguos.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-l-4 border-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                Resultado
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                La superficie queda <strong>limpia, con rugosidad controlada</strong>, lista para aplicar pintura, epoxi o revestimientos protectores.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 rounded-xl p-6 border-2 border-primary/20 text-center">
            <p className="text-lg text-gray-700 mb-4">
              ¿Necesitás conocer el <strong>espacio requerido</strong> para ubicar el compresor y la camioneta en tu obra?
            </p>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-primary border-primary hover:bg-primary hover:text-white"
              asChild
            >
              <Link
                href="/servicios#maquinaria-arenado"
                className="w-full flex flex-row flex-wrap justify-center items-center text-center"
                style={{ wordBreak: "break-word", whiteSpace: "normal" }}
              >
                <span className="break-words block">
                  Ver Dimensiones de Maquinaria
                </span>
                <Zap className="ml-2 h-5 w-5" />
              </Link>
            </Button>
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
                Observa en este video cómo realizamos el <strong>arenado profesional</strong> de piletas en Pilar. 
                El proceso elimina completamente algas, sarro y pintura vieja, dejando la superficie perfectamente 
                preparada para nuevos revestimientos sin dañar la estructura.
              </p>
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
            Qué se puede <span className="text-primary">Arenar</span>?
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
              Más de 20 años de experiencia en Pilar, Zona Norte, Zona Oeste y CABA. 
              Equipos propios y personal capacitado para garantizar resultados profesionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                
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
