"use client";

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
    
    // Construir número dividido en partes
    const part1 = '549';
    const part2 = '11';
    const part3 = '23787750';
    const phoneNumber = part1 + part2 + part3;
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    // Redirigir a WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
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

