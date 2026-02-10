"use client";

import { Menu } from "lucide-react";
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

export function Header() {
  const pages = [
    { name: "Inicio", href: "/" },
    { name: "Arenado Industrial", href: "/arenado-industrial" },
    { name: "Arenado Particular", href: "/arenado-particular" },
    { name: "Presupuesto Rápido", href: "/presupuesto-rapido" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/images/logo-solo-azul.png" alt="Arenados Lucho" width={75} height={75} />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-primary">Arenados Lucho</h1>
              <p className="text-xs text-primary">Preparación y Limpieza de Superficies</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-4">
              {pages.map((page) => (
                <li key={page.href} className="hover:scale-105 transition-all duration-300">
                  <Link
                    href={page.href}
                    className={
                      page === pages[pages.length - 1]
                        ? "bg-primary-400 rounded text-white px-4 py-2 transition-colors"
                        : "text-primary-600 hover:text-primary-400 transition-colors"
                    }
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu - Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="lg:hidden p-2"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6 text-primary" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left text-primary">Menú</SheetTitle>
              </SheetHeader>
              <nav className="mt-8">
                <div className="flex flex-col gap-4">
                  {pages.map((page) => (
                    <SheetClose key={page.href} asChild>
                      <Link
                        href={page.href}
                        className={
                          page === pages[pages.length - 1]
                            ? "bg-primary-400 rounded text-white px-4 py-3 transition-colors text-center font-medium"
                            : "text-primary-600 hover:text-primary-400 transition-colors px-4 py-3 text-center font-medium hover:bg-primary-50 rounded"
                        }
                      >
                        {page.name}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
