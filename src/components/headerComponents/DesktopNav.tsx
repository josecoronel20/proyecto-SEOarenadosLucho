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
  Layers, 
  MapPin, 
  FileText, 
  HelpCircle, 
  FolderKanban
} from "lucide-react"

export function DesktopNav() {


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

          {/* Servicios */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/servicios"
                className="group inline-flex h-10 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
              >
                <Layers className="mr-2 h-4 w-4" />
                Servicios
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
            <NavigationMenuLink asChild>
              <Link
                href="/zonas-de-cobertura"
                className="group inline-flex h-10 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
              >
                <MapPin className="mr-2 h-4 w-4" />
                Zonas
              </Link>
            </NavigationMenuLink>
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
