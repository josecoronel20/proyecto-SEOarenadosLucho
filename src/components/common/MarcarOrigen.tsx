"use client"

import { useEffect } from "react"
import { marcarOrigen } from "@/lib/origenTrafico"

/**
 * Marca el origen de la visita al entrar al sitio. No renderiza nada.
 *
 * Va montado una sola vez en el layout: el `gclid` solo existe en la URL de la
 * página de entrada, así que hay que capturarlo ahí. Después el App Router
 * navega del lado del cliente sin desmontar el layout, y la marca queda
 * disponible para cuando la persona finalmente abra WhatsApp — que puede ser
 * dos páginas más adelante.
 */
export function MarcarOrigen() {
  useEffect(() => {
    marcarOrigen()
  }, [])

  return null
}
