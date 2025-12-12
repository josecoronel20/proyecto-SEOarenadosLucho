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
import { Home, Factory, Car, Layers, MapPin, FileText, HelpCircle, FolderKanban } from "lucide-react"
import { cn } from "@/lib/utils"

export function DesktopNav() {
  const serviceCategories = [
    {
      title: "Arenado Residencial",
      href: "/servicios/arenado-residencial",
      description: "Servicios de arenado para tu hogar",
      icon: Home,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      subServices: [
        {
          title: "Arenado de piletas",
          href: "/servicios/arenado-residencial/arenado-de-piletas",
          description: "Limpieza profunda y preparación de superficies para pintura o revestimiento."
        },
        {
          title: "Arenado de fachadas domiciliarias",
          href: "/servicios/arenado-residencial/arenado-de-fachadas-domiciliarias",
          description: "Restauración de fachadas de viviendas y edificios."
        },
        {
          title: "Arenado de pisos",
          href: "/servicios/arenado-residencial/arenado-de-pisos",
          description: "Limpieza y preparación de pisos de hormigón, cemento y otros materiales."
        },
        {
          title: "Arenado de muebles",
          href: "/servicios/arenado-residencial/arenado-de-muebles",
          description: "Restauración y despintado de muebles con acabado fino."
        }
      ]
    },
    {
      title: "Arenado Industrial",
      href: "/servicios/arenado-industrial",
      description: "Servicios de arenado para la industria",
      icon: Factory,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      subServices: [
        {
          title: "Arenado de tanques",
          href: "/servicios/arenado-industrial/arenado-de-tanques",
          description: "Limpieza y preparación de tanques industriales."
        },
        {
          title: "Arenado de estructuras metálicas",
          href: "/servicios/arenado-industrial/arenado-de-estructuras-metalicas",
          description: "Limpieza y preparación de estructuras metálicas industriales para pintura."
        },
        {
          title: "Arenado de edificios antiguos",
          href: "/servicios/arenado-industrial/arenado-de-edificios-antiguos",
          description: "Restauración y limpieza de edificios antiguos y fachadas históricas."
        },
        {
          title: "Arenado en fábrica",
          href: "/servicios/arenado-industrial/arenado-en-fabrica",
          description: "Servicio de arenado industrial y limpieza de superficies en fábricas."
        }
      ]
    },
    {
      title: "Arenado de Vehículos",
      href: "/servicios/arenado-de-vehiculos",
      description: "Servicios de arenado para vehículos",
      icon: Car,
      color: "text-green-600",
      bgColor: "bg-green-50",
      subServices: [
        {
          title: "Arenado de camiones",
          href: "/servicios/arenado-de-vehiculos/arenado-de-camiones",
          description: "Limpieza y preparación de camiones industriales para pintura."
        },
        {
          title: "Arenado de autos",
          href: "/servicios/arenado-de-vehiculos/arenado-de-autos",
          description: "Limpieza y preparación de autos para pintura."
        },
        {
          title: "Arenado de barcos",
          href: "/servicios/arenado-de-vehiculos/arenado-de-barcos",
          description: "Despintado y tratamiento de cascos, cubiertas y estructuras navales."
        }
      ]
    },
    {
      title: "Arenado de Superficies",
      href: "/servicios/arenado-de-superficies",
      description: "Servicios de arenado para diferentes tipos de superficies",
      icon: Layers,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      subServices: [
        {
          title: "Arenado de superficies metálicas",
          href: "/servicios/arenado-de-superficies/arenado-de-superficies-metalicas",
          description: "Servicio fino en cabina para piezas mecánicas, ornamentales o industriales."
        },
        {
          title: "Arenado de superficies de madera",
          href: "/servicios/arenado-de-superficies/arenado-de-superficies-de-madera",
          description: "Restauración y despintado de superficies de madera con acabado fino."
        }
      ]
    }
  ]

  const coverageZones = [
    {
      title: "Zona Norte",
      href: "/zonas-de-cobertura/zona-norte",
      description: "Pilar, San Isidro, Tigre y más"
    },
    {
      title: "Zona Oeste",
      href: "/zonas-de-cobertura/zona-oeste",
      description: "Moreno, Morón, Hurlingham y más"
    },
    {
      title: "CABA",
      href: "/zonas-de-cobertura/caba",
      description: "Palermo, Recoleta, Belgrano y más"
    }
  ]

  return (
    <div className="hidden lg:flex items-center gap-6">
      <NavigationMenu>
        <NavigationMenuList className="gap-2">
          {/* Servicios Mega Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-sm font-medium">
              Servicios
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[800px] p-6" onClick={(e) => e.stopPropagation()}>
                <div className="mb-6">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/servicios"
                      className={cn(
                        "flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-br from-blue-50 to-blue-100 p-6 no-underline outline-none transition-colors hover:bg-gradient-to-br hover:from-blue-100 hover:to-blue-200 focus:shadow-md cursor-pointer"
                      )}
                      onClick={(e) => {
                        e.stopPropagation()
                      }}
                    >
                      <div className="mb-2 mt-4 text-lg font-semibold text-blue-900">
                        Todos los Servicios
                      </div>
                      <p className="text-sm leading-tight text-blue-700">
                        Explora nuestra gama completa de servicios profesionales de arenado y sandblasting
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
                
                <div className="grid grid-cols-4 gap-4">
                  {serviceCategories.map((category) => {
                    const Icon = category.icon
                    return (
                      <div key={category.href} className="space-y-3">
                        <NavigationMenuLink asChild>
                          <Link
                            href={category.href}
                            className={cn(
                              "group flex flex-col space-y-2 rounded-lg p-4 transition-colors hover:bg-accent cursor-pointer",
                              category.bgColor
                            )}
                            onClick={(e) => {
                              e.stopPropagation()
                            }}
                          >
                            <div className="flex items-center gap-3">
                              <Icon className={cn("h-5 w-5", category.color)} />
                              <span className="text-sm font-semibold leading-none text-foreground group-hover:text-primary">
                                {category.title}
                              </span>
                            </div>
                            <p className="text-xs leading-tight text-muted-foreground">
                              {category.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        
                        <div className="space-y-1">
                          {category.subServices.map((subService) => (
                            <NavigationMenuLink key={subService.href} asChild>
                              <Link
                                href={subService.href}
                                className="block select-none rounded-md px-3 py-2 text-xs leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation()
                                }}
                              >
                                <div className="font-medium">{subService.title}</div>
                                <p className="line-clamp-2 text-[10px] leading-snug text-muted-foreground mt-1">
                                  {subService.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Proyectos */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/proyectos"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
              >
                <FolderKanban className="mr-2 h-4 w-4" />
                Proyectos
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Zonas de Cobertura */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-sm font-medium">
              Zonas de Cobertura
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[400px] p-4" onClick={(e) => e.stopPropagation()}>
                <div className="mb-4">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/zonas-de-cobertura"
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-br from-muted/50 to-muted p-4 no-underline outline-none transition-colors hover:bg-muted focus:shadow-md cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation()
                      }}
                    >
                      <div className="mb-2 mt-4 text-base font-semibold">
                        Todas las Zonas
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Conoce todas nuestras zonas de cobertura
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
                
                <div className="grid gap-2">
                  {coverageZones.map((zone) => (
                    <NavigationMenuLink key={zone.href} asChild>
                      <Link
                        href={zone.href}
                        className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation()
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <div>
                            <div className="text-sm font-medium">{zone.title}</div>
                            <p className="text-xs text-muted-foreground">{zone.description}</p>
                          </div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Blog */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/blog"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
              >
                <FileText className="mr-2 h-4 w-4" />
                Blog
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* FAQ */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/preguntas-frecuentes"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
              >
                <HelpCircle className="mr-2 h-4 w-4" />
                FAQ
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
        <Link href="/presupuesto-rapido">Presupuesto Rápido</Link>
      </Button>
    </div>
  )
}
