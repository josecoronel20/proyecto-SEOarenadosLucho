"use client"

import React from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { urlWpp } from "@/lib/wppNumero"

interface WhatsAppCTAProps {
  /** Mensaje pre-cargado en WhatsApp (ej. distinto para dueño vs contratista). */
  message?: string
  className?: string
  children: React.ReactNode
}

/**
 * CTA inline que abre WhatsApp, con el MISMO patrón que WppBtn:
 * - El número lo arma `urlWpp()` en runtime desde un array de dígitos, para que
 *   no quede contiguo en el bundle (ver el porqué en `src/lib/wppNumero.ts`).
 * - Dispara `contact_whatsapp` SOLO tras confirmar el AlertDialog (invariante de tracking).
 * - window.open, no un <a href> (para no dejar el número en el DOM).
 * NO es el botón flotante global: ese sigue siendo único (WppBtn en el layout).
 */
export function WhatsAppCTA({ message, className, children }: WhatsAppCTAProps) {
  const handleConfirm = React.useCallback(() => {
    const url = urlWpp(
      message ?? "Hola, quiero consultar por el arenado de mi pileta."
    )
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "contact_whatsapp",
        event_category: "Contact",
        event_label: "WhatsApp CTA Click",
        value: 1,
        timestamp: Date.now(),
      })
    }
    window.open(url, "_blank", "noopener,noreferrer")
  }, [message])

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button type="button" className={className}>
          {children}
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Se abrirá WhatsApp</AlertDialogTitle>
          <AlertDialogDescription>
            Al continuar, te llevamos a WhatsApp para iniciar la conversación.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm}>Continuar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
