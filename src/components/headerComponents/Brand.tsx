"use client"

import Link from "next/link"
import Image from "next/image"
import { poppins } from "@/lib/fonts"

export function Brand() {
  return (
    <Link href="/" className="flex gap-2 " aria-label="Logo Arenados Lucho">
      <Image 
        src="/images/logo-solo-azul.svg" 
        alt="Logo Arenados Lucho" 
        width={64} 
        height={32}
        className="h-8 w-16"
        priority={false}
        quality={75}
      />
      <span className={`text-3xl font-bold text-primary hidden xl:block ${poppins.className}`}>Arenados Lucho</span>
    </Link>
  )
}


