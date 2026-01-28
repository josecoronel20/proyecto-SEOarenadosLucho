import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, Mail } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { cn } from "@/lib/utils";

interface CTAActionButtonsProps {
  className?: string;
}

export function CTAActionButtons({ className }: CTAActionButtonsProps) {
  return (
      <div className={cn("flex flex-col gap-4", className)}>
      <Button 
        size="lg" 
        variant="default" 
        className="bg-primary hover:bg-primary/90 text-white shadow-lg"
        asChild
      >
        <Link href="/presupuesto-rapido" aria-label="Solicitar presupuesto arenado">
          <FileText className="mr-2 h-5 w-5" aria-hidden />
          Solicitar Presupuesto rápido
        </Link>
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <WhatsAppButton />
      <Button 
        size="lg" 
        variant="default" 
        className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg"
        asChild
      >
        <Link href="mailto:arenadoslucho@hotmail.com" aria-label="Contactar por mail">
          <Mail className="mr-2 h-5 w-5" aria-hidden />
          Contactar por Mail
        </Link>
      </Button>
      </div>
    </div>
  );
}
