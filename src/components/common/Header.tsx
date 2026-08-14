"use client";

import { Menu, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { WhatsAppCTA } from "@/components/common/WhatsAppCTA";
import { WPP_BTN, WPP_BTN_SM, WPP_MSG } from "@/lib/wpp";

export function Header() {
  // El CTA de conversión ya NO es un link a /contacto: abre WhatsApp directo.
  // /contacto sigue en el menú porque es landing de Ads y explica qué contar.
  const pages = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Piletas", href: "/arenado-de-piletas" },
    { name: "Casos de éxito", href: "/casos-de-exito" },
    { name: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    // Filete en vez de sombra: en el sistema de catálogo las capas se separan
    // con una línea, no con una elevación difusa.
    <header className="sticky top-0 left-0 right-0 z-50 bg-papel/95 backdrop-blur-sm border-b border-papel-linea">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/">
            <Image src="/images/logo-solo-azul.png" alt="Arenados Lucho" width={75} height={75} />
            </Link>
            <div className="hidden md:block">
              <p className="text-lg font-bold tracking-tight text-tinta">Arenados Lucho</p>
              <p className="text-xs text-tinta-70">Preparación y limpieza de superficies</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-4">
              {pages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-sm font-medium text-tinta-70 hover:text-maquina-700 transition-colors"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
            <WhatsAppCTA message={WPP_MSG.general} className={WPP_BTN_SM}>
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </WhatsAppCTA>
          </nav>

          {/* Mobile: CTA de WhatsApp siempre visible + menú */}
          <div className="flex items-center gap-2 lg:hidden">
            <WhatsAppCTA message={WPP_MSG.general} className={WPP_BTN_SM}>
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </WhatsAppCTA>

            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2" aria-label="Abrir menú">
                  <Menu className="w-6 h-6 text-tinta" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left text-tinta">Menú</SheetTitle>
                </SheetHeader>
                <nav className="mt-8">
                  {/* Alineado a la izquierda y separado por filete: un menú
                      centrado obliga a saltar el ojo en cada renglón. */}
                  <div className="flex flex-col border-t border-papel-linea">
                    {pages.map((page) => (
                      <SheetClose key={page.href} asChild>
                        <Link
                          href={page.href}
                          className="text-tinta hover:text-maquina-700 transition-colors py-3.5 font-medium border-b border-papel-linea"
                        >
                          {page.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>

                  <div className="mt-6">
                    <WhatsAppCTA
                      message={WPP_MSG.general}
                      className={`${WPP_BTN} w-full`}
                    >
                      <MessageCircle className="w-5 h-5" />
                      Escribinos por WhatsApp
                    </WhatsAppCTA>
                    <p className="text-xs text-tinta-70 text-center mt-3">
                      Visita y presupuesto sin costo
                    </p>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
