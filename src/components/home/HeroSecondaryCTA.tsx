"use client"

import Link from "next/link"
import { FileText } from "lucide-react"

export default function HeroSecondaryCTA() {
  return (
    <section className="py-10 md:py-12 bg-white">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <p className="text-gray-600 mb-4">¿Preferís que te respondamos por escrito?</p>
        <Link
          href="/contacto"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-500 text-primary-700 font-semibold rounded-full hover:bg-primary-50 transition-colors"
        >
          <FileText className="w-5 h-5" />
          Solicitar presupuesto
        </Link>
      </div>
    </section>
  )
}
