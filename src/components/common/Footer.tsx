"use client"

import Link from 'next/link'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import WppBtn from './WppBtn'
import EmailBtn from './EmailBtn'

export function Footer() {

  const currentYear = new Date().getFullYear()
  const address = 'Buenos Aires'
  const navigation = [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Casos de éxito', href: '/casos-de-exito' },
    { label: 'Preguntas frecuentes', href: '/preguntas-frecuentes' },
    { label: 'Contactanos', href: '/contacto' },
  ]

  const privacyPolicy = [
    { label: 'Política de Privacidad', href: '/politica-de-privacidad' },
    { label: 'Términos y Condiciones', href: '/terminos-y-condiciones' },
  ]

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/images/logo-solo-blanco.png" 
                alt="Arenados Lucho" 
                width={60} 
                height={60}
                className="object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Arenados Lucho</h3>
                <p className="text-xs text-primary-200">Preparación y Limpieza de Superficies</p>
              </div>
            </div>
            <p className="text-sm text-primary-200">
              Servicios profesionales de arenado para proyectos industriales en Buenos Aires.
            </p>
          </div>

          {/* Navegación - Ocupa todo el ancho disponible en desktop */}
          <div className="lg:col-span-3 flex flex-col h-full">
            <h4 className="font-semibold mb-4 text-lg">Navegación</h4>
            <nav className="flex-1 flex">
              <ul className="flex flex-col gap-y-2 w-full 
                  lg:flex-row lg:gap-x-6 lg:gap-y-0 lg:w-full lg:justify-between">
                {navigation.map((item, idx) => (
                  <li 
                    key={item.label}
                    className="w-full lg:w-auto flex-1 text-center"
                  >
                    <Link
                      href={item.href}
                      className="inline-block w-full px-0 md:px-1 lg:px-2 py-1 md:py-1.5 rounded
                        lg:text-base text-primary-200 hover:text-white hover:bg-primary-800/40 
                        transition-colors font-medium lg:tracking-wide lg:w-auto
                      "
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-300 text-center md:text-left">
              © {currentYear} Arenados Lucho. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 text-sm text-primary-300">
              {privacyPolicy.map((item) => (
                <Link key={item.label} href={item.href} className="block hover:text-white transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
