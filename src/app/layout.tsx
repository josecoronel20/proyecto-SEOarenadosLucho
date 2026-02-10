import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Arenados Lucho - Preparación y Limpieza de Superficies en Zona Norte, Oeste y CABA",
  description: "Preparación y Limpieza de Superficies en Zona Norte, Oeste y CABA. Arenado Industrial y Arenado Particular.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
