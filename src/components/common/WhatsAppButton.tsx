"use client";

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import * as React from "react";

export function WhatsAppButton() {
  const label = "Consultar por WhatsApp";
  const className = "bg-[#22bd5b] hover:bg-[#1d9e4e] text-white shadow-lg";
  const variant = "default";
  const size = "lg";

  const handleClick = React.useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Construir número de WhatsApp
    const part1 = '549';
    const part2 = '11';
    const part3 = '23787750';
    const phoneNumber = part1 + part2 + part3;
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    // Inicializar dataLayer si no existe
    window.dataLayer = window.dataLayer || [];
    
    // Enviar evento a GTM / GA4
    // Formato compatible con GA4 a través de GTM
    window.dataLayer.push({ 
      event: 'contact_whatsapp',
      event_category: 'Contact',
      event_label: 'WhatsApp Button Click',
      value: 1
    });

    // Forzar el envío del evento antes de abrir WhatsApp
    // Usamos múltiples estrategias para asegurar que GTM procese el evento:
    // 1. requestIdleCallback para cuando el navegador esté listo
    // 2. Fallback a setTimeout si requestIdleCallback no está disponible
    const openWhatsApp = () => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        setTimeout(openWhatsApp, 500);
      }, { timeout: 1000 });
    } else {
      // Fallback para navegadores sin requestIdleCallback
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTimeout(openWhatsApp, 500);
        });
      });
    }

  }, []);

  return (
    <Button 
      size={size} 
      variant={variant} 
      className={className}
      onClick={handleClick}
      aria-label={label}
      id="whatsapp-button"
    >
      <MessageCircle className="mr-2 h-5 w-5" aria-hidden />
      {label}
    </Button>
  );
}
