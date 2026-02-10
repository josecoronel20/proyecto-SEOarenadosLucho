"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pages = [
    { name: "Inicio", href: "/" },
    { name: "Arenado Industrial", href: "/arenado-industrial" },
    { name: "Arenado Particular", href: "/arenado-particular" },
    { name: "Presupuesto Rápido", href: "/presupuesto-rapido" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/65 backdrop-blur-sm ">
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
              <li key={page.href} className="hover:scale-105 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
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

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-gray-100 mt-4 pt-4">
            <div className="flex flex-col gap-4">
              {pages.map((page) => (
                <Link key={page.href} href={page.href} onClick={() => setIsMenuOpen(false)} className={
                  page === pages[pages.length - 1]
                    ? "bg-primary-400 rounded text-white px-4 py-2 transition-colors"
                    : "text-primary-600 hover:text-primary-400 transition-colors"
                }>
                  {page.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
