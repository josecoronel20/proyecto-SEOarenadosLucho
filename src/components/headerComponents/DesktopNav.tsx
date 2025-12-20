"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { 
  Home, 
  Factory, 
  Car, 
  Layers, 
  MapPin, 
  FileText, 
  HelpCircle, 
  FolderKanban, 
  Droplet, 
  Wrench, 
  TreePine,
  Calculator,
  Sparkles
} from "lucide-react"
import { cn } from "@/lib/utils"

export function DesktopNav() {
  const services = [
    {
      title: "Arenado de Piletas",
      href: "/servicios/arenado-de-piletas",
      description: "Restauración profesional de piletas y piscinas",
      icon: Droplet,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Arenado de Vehículos",
      href: "/servicios/arenado-de-vehiculos",
      description: "Autos, camiones, barcos y chasis",
      icon: Car,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Arenado Industrial",
      href: "/servicios/arenado-industrial",
      description: "Estructuras metálicas y maquinaria pesada",
      icon: Factory,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "Arenado de Metales",
      href: "/servicios/arenado-de-metales",
      description: "Piezas metálicas, rejas y estructuras",
      icon: Wrench,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Arenado de Madera",
      href: "/servicios/arenado-de-madera",
      description: "Muebles y superficies de madera",
      icon: TreePine,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
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
      description: "Morón, Ituzaingó, Hurlingham y más"
    },
    {
      title: "CABA",
      href: "/zonas-de-cobertura/caba",
      description: "Palermo, Recoleta, Belgrano y más"
    }
  ]

  return (
    <nav className="w-full flex items-center justify-center">
      <NavigationMenu className="relative z-50 w-full">
        <NavigationMenuList className="gap-1 w-full justify-center flex-wrap">
          {/* Inicio */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/"
                className="group inline-flex h-10 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
              >
                <Home className="mr-2 h-4 w-4" />
                Inicio
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Servicios - Mega Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="h-10 px-3 text-sm font-medium">
              <Layers className="mr-2 h-4 w-4" />
              Servicios
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[900px] max-w-[calc(100vw-4rem)] p-6" onClick={(e) => e.stopPropagation()}>
                {/* Header del mega menu */}
                <div className="mb-6 pb-4 border-b">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/servicios"
                      className={cn(
                        "flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-br from-primary/10 to-primary/5 p-4 no-underline outline-none transition-colors hover:from-primary/20 hover:to-primary/10 focus:shadow-md cursor-pointer"
                      )}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="mb-2 mt-4 text-lg font-semibold text-primary flex items-center gap-2">
                        <Sparkles className="h-5 w-5" />
                        Todos los Servicios
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Explora nuestra gama completa de servicios profesionales de arenado
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
                
                {/* Grid de servicios */}
                <div className="grid grid-cols-5 gap-3">
                  {services.map((service) => {
                    const Icon = service.icon
                    return (
                      <NavigationMenuLink key={service.href} asChild>
                        <Link
                          href={service.href}
                          className={cn(
                            "group flex flex-col space-y-2 rounded-lg p-4 transition-all hover:shadow-md cursor-pointer border border-transparent hover:border-primary/20",
                            service.bgColor
                          )}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="flex items-start gap-3">
                            <Icon className={cn("h-5 w-5 flex-shrink-0 mt-0.5", service.color)} />
                            <span className="text-sm font-semibold leading-tight text-foreground group-hover:text-primary transition-colors">
                              {service.title}
                            </span>
                          </div>
                          <p className="text-xs leading-relaxed text-muted-foreground pl-8">
                            {service.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    )
                  })}
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Precios */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/precios-arenados"
                className="group inline-flex h-10 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
              >
                <Calculator className="mr-2 h-4 w-4" />
                Precios
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Proyectos */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/proyectos"
                className="group inline-flex h-10 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
              >
                <FolderKanban className="mr-2 h-4 w-4" />
                Proyectos
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Zonas de Cobertura */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="h-10 px-3 text-sm font-medium">
              <MapPin className="mr-2 h-4 w-4" />
              Zonas
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[800px] max-w-[calc(100vw-4rem)] p-4" onClick={(e) => e.stopPropagation()}>
                <div className="mb-4 pb-4 border-b">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/zonas-de-cobertura"
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-br from-muted/50 to-muted p-4 no-underline outline-none transition-colors hover:bg-muted focus:shadow-md cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="mb-2 mt-4 text-base font-semibold flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        Todas las Zonas
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Conoce todas nuestras zonas de cobertura
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  {coverageZones.map((zone) => (
                    <NavigationMenuLink key={zone.href} asChild>
                      <Link
                        href={zone.href}
                        className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer border border-transparent hover:border-primary/20"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center gap-3">
                          <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                          <div>
                            <div className="text-sm font-medium">{zone.title}</div>
                            <p className="text-xs text-muted-foreground mt-0.5">{zone.description}</p>
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
                className="group inline-flex h-10 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
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
                className="group inline-flex h-10 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
              >
                <HelpCircle className="mr-2 h-4 w-4" />
                FAQ
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}
