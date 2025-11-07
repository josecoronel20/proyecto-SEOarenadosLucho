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
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 leading-tight">
            Arenado profesional en Pilar, Zona Norte, Zona Oeste y CABA
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
          Realizamos trabajos de restauración y preparación de superficies en todo tipo de proyectos. Disponemos de equipos propios y planificamos cada etapa para optimizar tiempos y resultados.
          </p>

          <p className="text-sm text-gray-500 mb-6">
            Respuesta en el día · Equipos propios · Coordinamos ingreso en obra
          </p>

          {/* CTAs principales */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-4">
            <Link
              href="/presupuesto-rapido"
              className="inline-block px-6 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 font-medium transition"
              aria-label="Pedir presupuesto rápido"
            >
              Presupuesto rápido
            </Link>
            <WhatsAppButton />
          </div>

          {/* CTAs secundarios */}
          <div className="flex justify-center gap-4 text-sm mb-6">
            <Link
              href="/proyectos"
              className="text-gray-600 hover:underline"
              aria-label="Ver proyectos"
            >
              Ver proyectos
            </Link>
            <span className="text-gray-400">·</span>
            <Link
              href="/servicios"
              className="text-gray-600 hover:underline"
              aria-label="Ver servicios"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
