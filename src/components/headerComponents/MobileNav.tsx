"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface MobileNavProps {
  isOpen: boolean;
  isServicesOpen: boolean;
  onToggleServices: () => void;
  onClose: () => void;
}

export function MobileNav({
  isOpen,
  isServicesOpen,
  onToggleServices,
  onClose,
}: MobileNavProps) {
  const navItems = [
    {
      title: "Proyectos",
      href: "/proyectos",
    },
    {
      title: "Zonas de cobertura",
      href: "/zonas-de-cobertura",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "FAQ",
      href: "/preguntas-frecuentes",
    },
  ];

  const servicesItems = [
    {
      title: "Arenado de piletas",
      href: "/servicios/arenado-de-piletas",
    },
    {
      title: "Arenado de vehículos",
      href: "/servicios/arenado-de-vehiculos",
    },
    {
      title: "Arenado de barcos",
      href: "/servicios/arenado-de-barcos",
    },
    {
      title: "Arenado de piezas metálicas",
      href: "/servicios/arenado-de-piezas-metalicas",
    },
    {
      title: "Arenado industrial",
      href: "/servicios/arenado-industrial",
    },
    {
      title: "Arenado de muebles de madera",
      href: "/servicios/arenado-de-muebles",
    },
    {
      title: "Arenado de fachadas particulares",
      href: "/servicios/arenado-de-fachadas",
    },
  ];

  return (
    <div className={`lg:hidden ${isOpen ? "block" : "hidden"} pb-4`}>
      <nav className="flex flex-col space-y-2">
        <Link
          href="/"
          className="px-4 py-3 hover:bg-accent rounded-md text-base min-h-[44px] flex items-center"
          onClick={onClose}
        >
          Inicio
        </Link>

        <div className="px-4 py-2">
          <button
            onClick={onToggleServices}
            className="flex items-center justify-between w-full hover:bg-accent rounded-md py-3 min-h-[44px] text-base"
          >
            <span>Servicios</span>
            <ChevronDown
              className={`h-5 w-5 transition-transform ${
                isServicesOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isServicesOpen && (
            <div className="ml-4 mt-2 space-y-1 border-l-2 border-muted pl-4">
              <div className="flex flex-col gap-2">
                <Link
                  href="/servicios"
                  className="px-3 py-3 text-base hover:bg-accent rounded-md min-h-[44px] flex items-center"
                  onClick={onClose}
                >
                  Todos los servicios
                </Link>
                {servicesItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-3 py-3 text-base hover:bg-accent rounded-md min-h-[44px] flex items-center"
                    onClick={onClose}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-4 py-3 hover:bg-accent rounded-md text-base min-h-[44px] flex items-center"
            onClick={onClose}
          >
            {item.title}
          </Link>
        ))}
        <Button className="mt-4 text-white bg-primary min-h-[48px] text-base font-semibold" asChild>
          <Link href="/presupuesto-rapido" onClick={onClose}>
            Presupuesto Rápido
          </Link>
        </Button>
      </nav>
    </div>
  );
}
