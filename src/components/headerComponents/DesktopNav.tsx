"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function DesktopNav() {
  const servicesItems = [
    {
      title: "Arenado de piletas",
      href: "/servicios/arenado-de-piletas",
      description: "Limpieza profunda y preparación de superficies para pintura o revestimiento."
    },
    {
      title: "Arenado industrial",
      href: "/servicios/arenado-industrial", 
      description: "Limpieza y preparación de estructuras metálicas, maquinarias y obras industriales."
    },
    {
      title: "Arenado de vehículos",
      href: "/servicios/arenado-de-vehiculos",
      description: "Remoción de pintura y óxido en autos, camiones y chasis."
    },
    {
      title: "Arenado de barcos",
      href: "/servicios/arenado-de-barcos",
      description: "Despintado y tratamiento de cascos, cubiertas y estructuras navales."
    },
    {
      title: "Arenado de piezas metálicas",
      href: "/servicios/arenado-de-piezas-metalicas",
      description: "Servicio fino en cabina para piezas mecánicas, ornamentales o industriales."
    },
    {
      title: "Arenado de muebles de madera",
      href: "/servicios/arenado-de-muebles",
      description: "Restauración y despintado de muebles con acabado fino."
    },
    {
      title: "Arenado de fachadas particulares",
      href: "/servicios/arenado-de-fachadas",
      description: "Restauración de fachadas de viviendas y edificios."
    },
    {
      title: "Servicio de Pintura",
      href: "/servicios/pintura",
      description: "Pintura profesional epoxi, anticorrosiva y para fachadas con preparación previa."
    }
  ]

  const navItems = [
    {
      title: "Superficies que Arenamos",
      href: "/superficies-que-arenamos"
    },
    {
      title: "Proyectos",
      href: "/proyectos"
    },
    {
      title: "Zonas de Cobertura",
      href: "/zonas-de-cobertura"
    },
    {
      title: "Blog",
      href: "/blog"
    },
    {
      title: "FAQ",
      href: "/preguntas-frecuentes"
    }
  ]

  return (
    <div className="hidden lg:flex items-center space-x-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-md font-normal">Servicios</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 lg:w-[750px] lg:grid-cols-3">
                <div className="row-span-4">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/servicios"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Todos los Servicios
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Servicios profesionales de arenado y sandblasting para diferentes industrias en Buenos Aires.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
                {servicesItems.map((item) => (
                  <NavigationMenuLink key={item.href} asChild>
                    <Link href={item.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">{item.title}</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {item.description}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {navItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink asChild>
                <Link href={item.href} className="px-4 py-2 hover:text-primary transition-colors">
                  {item.title}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <Button asChild>
        <Link href="/presupuesto-rapido">Presupuesto Rápido</Link>
      </Button>
    </div>
  )
}
