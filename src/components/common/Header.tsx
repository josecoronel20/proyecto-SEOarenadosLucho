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
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200/80 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/">
            <Image src="/images/logo-solo-azul.png" alt="Arenados Lucho" width={75} height={75} />
            </Link>
            <div className="hidden md:block">
              <p className="text-xl font-bold text-primary-600">Arenados Lucho</p>
              <p className="text-xs text-primary-600">Preparación y Limpieza de Superficies</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-4">
              {pages.map((page) => (
                <li key={page.href} className="hover:scale-105 transition-all duration-300">
                  <Link
                    href={page.href}
                    className="text-primary-600 hover:text-primary-400 transition-colors"
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
                  <Menu className="w-6 h-6 text-primary-600" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left text-primary-600">Menú</SheetTitle>
                </SheetHeader>
                <nav className="mt-8">
                  <div className="flex flex-col gap-2">
                    {pages.map((page) => (
                      <SheetClose key={page.href} asChild>
                        <Link
                          href={page.href}
                          className="text-primary-600 hover:text-primary-400 transition-colors px-4 py-3 text-center font-medium hover:bg-primary-50 rounded"
                        >
                          {page.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <WhatsAppCTA
                      message={WPP_MSG.general}
                      className={`${WPP_BTN} w-full`}
                    >
                      <MessageCircle className="w-5 h-5" />
                      Escribinos por WhatsApp
                    </WhatsAppCTA>
                    <p className="text-xs text-gray-500 text-center mt-3">
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
