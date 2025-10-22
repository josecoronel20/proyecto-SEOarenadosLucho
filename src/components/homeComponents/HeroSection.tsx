"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircle, FileText, Clock, MapPin, Award } from "lucide-react";
import { PROJECT } from "@/config/project";
import { poppins } from "@/lib/fonts";
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
  const whatsappNumber = PROJECT.contact?.whatsapp?.replace(/\D/g, "") ?? "";
  const waText = encodeURIComponent(
    `Solicitud de presupuesto Arenado - ${LOCALIDADES[0]} - (indicar m2)`
  );
  const waHref = `https://wa.me/${whatsappNumber}?text=${waText}`;

  function openWhatsAppAnalytics() {
    if (typeof window === "undefined") return;
    try {
      // gtag event if configured
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.gtag?.("event", "click_whatsapp", {
        service: "arenado",
        location: LOCALIDADES[0],
      });
    } catch (e) {
      /* noop */
    }
  }

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
            Arenado y granallado en Pilar y Zona Norte
            <span className="block text-primary mt-2 text-xl md:text-2xl font-bold">
              Servicio profesional móvil y en taller
            </span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Servicio profesional de <strong>arenado y granallado</strong> para eliminación de pintura, óxido, sarro y otros residuos
            para dejar la superficie lista para pintura o revestimiento. Trabajo
            controlado y eficiente con <strong>sandblasting profesional</strong>. Atención rápida en{" "}
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 px-4 sm:px-0">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white shadow-lg"
              asChild
            >
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solicitar presupuesto por WhatsApp - Arenados Lucho"
                onClick={openWhatsAppAnalytics}
                data-analytics="cta_whatsapp"
              >
                <MessageCircle
                  className="mr-2 h-5 w-5 inline-block"
                  aria-hidden
                />
                Solicitar presupuesto por WhatsApp
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              asChild
            >
              <Link
                href="/presupuesto-rapido"
                aria-label="Solicitar presupuesto gratuito de arenado"
              >
                <FileText className="mr-2 h-5 w-5 inline-block" aria-hidden />
                Solicitar presupuesto gratuito de arenado
              </Link>
            </Button>
          </div>

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
