"use client"

import Link from 'next/link'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import WppBtn from './WppBtn'
import EmailBtn from './EmailBtn'

export function Footer() {

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
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
              Servicios profesionales de arenado para proyectos industriales y particulares en Zona Norte, Oeste y CABA.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Servicios</h4>
            <div className="space-y-2 text-primary-200">
              <Link 
                href="/arenado-industrial" 
                className="block hover:text-white transition-colors"
              >
                Arenado Industrial
              </Link>
              <Link 
                href="/arenado-particular" 
                className="block hover:text-white transition-colors"
              >
                Arenado Particular
              </Link>
              <Link 
                href="/presupuesto-rapido" 
                className="block hover:text-white transition-colors"
              >
                Presupuesto Rápido
              </Link>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contacto</h4>
            <div className="space-y-3 text-primary-200">
              <WppBtn type="footer" />
              <EmailBtn type="footer" />
                
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Zona Norte, Oeste y CABA</span>
              </div>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Navegación</h4>
            <div className="space-y-2 text-primary-200">
              <Link 
                href="/" 
                className="block hover:text-white transition-colors"
              >
                Inicio
              </Link>
              <Link 
                href="/arenado-industrial" 
                className="block hover:text-white transition-colors"
              >
                Arenado Industrial
              </Link>
              <Link 
                href="/arenado-particular" 
                className="block hover:text-white transition-colors"
              >
                Arenado Particular
              </Link>
              <Link 
                href="/presupuesto-rapido" 
                className="block hover:text-white transition-colors"
              >
                Presupuesto Rápido
              </Link>
             
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-300 text-center md:text-left">
              © {currentYear} Arenados Lucho. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 text-sm text-primary-300">
              <Link href="/contacto" className="hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <span>|</span>
              <Link href="/contacto" className="hover:text-white transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
