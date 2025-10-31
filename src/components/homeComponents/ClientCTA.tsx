"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle, FileText } from "lucide-react";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import * as React from "react";

export function ClientCTA({ waHref }: { waHref: string }) {
  const onClickWhatsapp = React.useCallback(() => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.gtag?.("event", "click_whatsapp", {
        service: "arenado",
      });
    } catch {}
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 px-4 sm:px-0">
      <WhatsAppButton href={waHref} label="Solicitar presupuesto por WhatsApp" className="bg-primary hover:bg-primary/90 text-white shadow-lg" variant="default" />

      <Button
        size="lg"
        variant="outline"
        className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
        asChild
      >
        <Link href="/presupuesto-rapido" aria-label="Solicitar presupuesto gratuito de arenado">
          <FileText className="mr-2 h-5 w-5 inline-block" aria-hidden />
          Solicitar presupuesto gratuito
        </Link>
      </Button>
    </div>
  );
}


