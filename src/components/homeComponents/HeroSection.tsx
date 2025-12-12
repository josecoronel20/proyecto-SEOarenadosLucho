import Link from "next/link";
import Image from "next/image";
import { poppins } from "@/lib/fonts";
import { WhatsAppButton } from "../common/WhatsAppButton";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 py-20">
      {/* Hero Background Image (LCP) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/portada-hero-arenados-lucho.webp"
          alt="Arenado profesional en Pilar, Zona Norte, Zona Oeste y CABA"
          fill
          className="object-cover opacity-10"
          priority
          sizes="100vw"
        />
      </div>

      <div className={`container mx-auto px-4 relative z-10 ${poppins.className}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
            Arenado Profesional en <span className="text-primary">Zona Norte, Oeste y CABA</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-medium">
            Eliminamos pintura, óxido y contaminantes. Tu superficie queda lista para pintar con mejor adherencia y durabilidad.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-8">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Respuesta en 24 horas
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Equipos propios
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Servicio móvil
            </span>
          </div>

          {/* CTAs principales */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link
              href="/presupuesto-rapido"
              className="inline-block px-8 py-4 rounded-lg text-white bg-primary hover:bg-primary/90 font-semibold text-lg transition shadow-lg hover:shadow-xl"
              aria-label="Pedir presupuesto rápido"
            >
              Solicitar Presupuesto Gratis
            </Link>
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </section>
  );
}
