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
    const part1 = '5491123'
    const part2 = '787750'
    const phoneNumber = part1 + part2;
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    // Enviar evento a GTM / GA4
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ 
        event: 'contact_whatsapp',
        event_category: 'Contact',
        event_label: 'WhatsApp Button Click',
        value: 1
      });
    }

    // Redirigir a WhatsApp usando location.href (más confiable que window.open)
    window.location.href = whatsappUrl;

  }, []);

  return (
    <Button 
      type="button"
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
