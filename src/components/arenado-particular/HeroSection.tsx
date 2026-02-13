"use client"

import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import WppBtn from "../common/WppBtn";
import { Button } from "../ui/button";

export function HeroSection() {

  return (
    <section className="h-screen bg-white px-4 pb-4 pt-24">
      <div className="relative flex items-end h-full p-4">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/services/arenadoParticular.JPG" 
            alt="Arenado Particular " 
            fill 
            className="object-cover rounded-lg object-top" 
          />
        </div>

        {/* Overlay Gradient - De abajo hacia arriba */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary-900 via-primary-900/80  to-transparent rounded-lg"></div>

        {/* Content - Compactado en la parte inferior */}
        <div className="container mx-auto relative z-20 w-full pb-8 md:pb-12">
          <div className="max-w-4xl mx-auto flex flex-col gap-4 md:gap-6 items-center text-center">
            {/* Title */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              Arenado Particular
            </h1>

            

            <ul className="flex flex-wrap gap-1 justify-center text-white/95 text-sm md:text-base font-medium">
            <li>• Piletas de hormigón para repintado o cambio de revestimiento.</li>
  <li>• Chasis y estructuras vehiculares.</li>
  <li>• Piezas metálicas para restauración o reutilización.</li>
  <li>• Rejas, portones y estructuras domésticas.</li>
</ul>

<Button                   className="border border-white/50 px-4 md:px-6 py-2 md:py-2.5 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 text-white text-sm md:text-base lg:text-lg shadow-md hover:shadow-lg"
><Link href="arenado-particular#proyectos">ver proyectos</Link></Button>

              {/* CTA Primaria - Email */}
              <WppBtn  type="CTASection" />


          </div>
        </div>
      </div>
    </section>
  );
}
