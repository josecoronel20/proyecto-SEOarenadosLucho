"use client"

import { useState } from "react"
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
import { ChevronDown } from "lucide-react"

export function DesktopNav() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const serviceCategories = [
    {
      title: "Arenado Residencial",
      href: "/servicios/arenado-residencial",
      description: "Servicios de arenado para tu hogar",
      subServices: [
        {
          title: "Arenado de piletas",
          href: "/servicios/arenado-de-piletas",
          description: "Limpieza profunda y preparación de superficies para pintura o revestimiento."
        },
        {
          title: "Arenado de fachadas domiciliarias",
          href: "/servicios/arenado-de-fachadas-domiciliarias",
          description: "Restauración de fachadas de viviendas y edificios."
        },
        {
          title: "Arenado de pisos",
          href: "/servicios/arenado-de-pisos",
          description: "Limpieza y preparación de pisos de hormigón, cemento y otros materiales."
        },
        {
          title: "Arenado de muebles",
          href: "/servicios/arenado-de-muebles",
          description: "Restauración y despintado de muebles con acabado fino."
        }
      ]
    },
    {
      title: "Arenado Industrial",
      href: "/servicios/arenado-industrial",
      description: "Servicios de arenado para la industria",
      subServices: [
        {
          title: "Arenado de tanques",
          href: "/servicios/arenado-de-tanques",
          description: "Limpieza y preparación de tanques industriales."
        },
        {
          title: "Arenado de estructuras metálicas",
          href: "/servicios/arenado-de-estructuras-metalicas",
          description: "Limpieza y preparación de estructuras metálicas industriales para pintura."
        },
        {
          title: "Arenado de edificios antiguos",
          href: "/servicios/arenado-de-edificios-antiguos",
          description: "Restauración y limpieza de edificios antiguos y fachadas históricas."
        },
        {
          title: "Arenado en fábrica",
          href: "/servicios/arenado-en-fabrica",
          description: "Servicio de arenado industrial y limpieza de superficies en fábricas."
        }
      ]
    },
    {
      title: "Arenado de Vehículos",
      href: "/servicios/arenado-de-vehiculos",
      description: "Servicios de arenado para vehículos",
      subServices: [
        {
          title: "Arenado de camiones",
          href: "/servicios/arenado-de-camiones",
          description: "Limpieza y preparación de camiones industriales para pintura."
        },
        {
          title: "Arenado de autos",
          href: "/servicios/arenado-de-autos",
          description: "Limpieza y preparación de autos para pintura."
        },
        {
          title: "Arenado de barcos",
          href: "/servicios/arenado-de-barcos",
          description: "Despintado y tratamiento de cascos, cubiertas y estructuras navales."
        }
      ]
    },
    {
      title: "Arenado de Superficies",
      href: "/servicios/arenado-de-superficies",
      description: "Servicios de arenado para diferentes tipos de superficies",
      subServices: [
        {
          title: "Arenado de superficies metálicas",
          href: "/servicios/arenado-de-piezas-metalicas",
          description: "Servicio fino en cabina para piezas mecánicas, ornamentales o industriales."
        },
        {
          title: "Arenado de superficies de madera",
          href: "/servicios/arenado-de-muebles",
          description: "Restauración y despintado de muebles con acabado fino."
        }
      ]
    }
  ]

  const navItems = [
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
              <div className="p-4 lg:w-[800px]">
                <div className="mb-4">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex select-none flex-col rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md hover:bg-muted/80 transition-colors"
                      href="/servicios"
                    >
                      <div className="text-base font-semibold mb-1">
                        Todos los Servicios
                      </div>
                      <p className="text-xs leading-tight text-muted-foreground">
                        Servicios profesionales de arenado y sandblasting
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {serviceCategories.map((category) => {
                    const isExpanded = expandedCategory === category.href
                    return (
                      <div key={category.href} className="space-y-1">
                        <div className="flex items-center gap-1">
                          <NavigationMenuLink asChild>
                            <Link 
                              href={category.href} 
                              className="flex-1 text-sm font-semibold leading-none text-primary hover:underline"
                            >
                              {category.title}
                            </Link>
                          </NavigationMenuLink>
                          <button
                            onClick={() => setExpandedCategory(isExpanded ? null : category.href)}
                            className="p-1 rounded hover:bg-accent transition-colors"
                            aria-label={isExpanded ? "Contraer" : "Expandir"}
                          >
                            <ChevronDown
                              className={`h-4 w-4 transition-transform ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>
                        {isExpanded && (
                          <div className="space-y-0.5 mt-1">
                            {category.subServices.map((subService) => (
                              <NavigationMenuLink key={subService.href} asChild>
                                <Link 
                                  href={subService.href} 
                                  className="block select-none rounded-md px-2 py-1.5 text-xs leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  {subService.title}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
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
