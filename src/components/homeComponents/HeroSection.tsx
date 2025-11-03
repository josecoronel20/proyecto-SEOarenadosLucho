import Link from "next/link";
import Image from "next/image";
import { Clock, MapPin, Award } from "lucide-react";
import { PROJECT } from "@/config/project";
import { poppins } from "@/lib/fonts";
import { ClientCTA } from "./ClientCTA";
const LOCALIDADES = [
  {title: "Pilar", href: "/zona-de-cobertura/zona-norte/pilar"},
  {title: "José C. Paz", href: "/zona-de-cobertura/zona-norte/jose-c-paz"},
  {title: "San Isidro", href: "/zona-de-cobertura/zona-norte/san-isidro"},
  {title: "Tigre", href: "/zona-de-cobertura/zona-norte/tigre"},
  {title: "General Rodríguez", href: "/zona-de-cobertura/zona-norte/general-rodriguez"},
  {title: "Morón", href: "/zona-de-cobertura/zona-norte/moron"},
];

const ZONAS = [
  {title: "Zona Norte", href: "/zona-de-cobertura/zona-norte"},
  {title: "Zona Oeste", href: "/zona-de-cobertura/zona-oeste"},
  {title: "CABA", href: "/zona-de-cobertura/caba"},
];

const TRUSTINDICATORS = [
  {
    icon: MapPin,
    label: "Servicio móvil y en taller",
  },
  {
    icon: Award,
    label: "20+ años de experiencia",
  },
  {
    icon: Clock,
    label: "Presupuesto en 24h",
  },
];

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 py-20">
      {/* Hero Background Image (LCP) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/portada-hero-arenados-lucho.webp"
          alt="Arenado y granallado profesional en Pilar y Zona Norte - Arenados Lucho"
          fill
          className="object-cover opacity-10"
          priority
          sizes="100vw"
        />
      </div>

      <div className={`container mx-auto px-4 relative z-10 ${poppins.className}`}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
            Arenado de Piletas, Vehículos e Industrial en Pilar
            <span className="block text-primary mt-2 text-xl md:text-2xl font-bold">
              Sandblasting profesional móvil y en taller
            </span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Especialistas en <strong>arenado de piletas</strong>, <strong>vehículos</strong>, 
            <strong>estructuras industriales</strong> y <strong>piezas metálicas</strong>. 
            Eliminamos óxido, pintura, sarro y algas con <strong>sandblasting profesional</strong>. 
            Servicio móvil en{" "}
            {LOCALIDADES.slice(0, 4).map((loc: {title: string, href: string}, i: number): React.ReactNode => (
              <span key={loc.title}>
                {i > 0 && ", "}
                <Link
                  href={loc.href}
                  className="underline decoration-dotted decoration-primary hover:decoration-solid"
                >
                  {loc.title}
                </Link>
              </span>
            ))}
            {", "}y otras localidades de{" "}
            {ZONAS.filter((zona): zona is {title: string, href: string} => zona !== undefined).map((zona, i) => (
              <span key={zona.title}>
                {i > 0 && ", "}
                <Link
                  href={zona.href}
                  className="underline decoration-dotted decoration-primary hover:decoration-solid"
                >
                  {zona.title}
                </Link>
              </span>
            ))}.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-600">
            {TRUSTINDICATORS.map((indicator) => (
              <div key={indicator.label} className="flex items-center gap-2">
                <indicator.icon className="h-4 w-4 text-blue-600" aria-hidden />
                <span>{indicator.label}</span>
              </div>
            ))}
          </div>

          <ClientCTA />

          <p className="text-sm text-gray-500 flex gap-2 justify-center">
            <Clock className="h-4 w-4" aria-hidden />
            Presupuestos detallados sin cargo. Cotizaciones por m² o proyecto
            completo.
          </p>
        </div>
      </div>
    </section>
  );
}
