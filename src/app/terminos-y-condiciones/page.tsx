import Link from "next/link"
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso del sitio web de Arenados Lucho. Buenos Aires.",
  alternates: { canonical: "/terminos-y-condiciones" },
}

export default function TerminosYCondicionesPage() {
  return (
    <div className="min-h-screen bg-papel py-16 md:py-24 px-5 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <Card className="">
          <CardHeader className="text-center pb-6 border-b">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-papel-alt flex items-center justify-center">
                <FileText className="w-8 h-8 text-tinta" />
              </div>
            </div>
            <CardTitle asChild className="text-3xl md:text-4xl font-bold text-tinta mb-3">
              <h1>Términos y Condiciones</h1>
            </CardTitle>
            <p className="text-base md:text-lg text-tinta-70">
              Condiciones generales de uso de este sitio y de las consultas enviadas a Arenados Lucho.
            </p>
          </CardHeader>

          <CardContent className="pt-8 space-y-6 text-tinta-70 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-tinta mb-2">1. Objeto</h2>
              <p>
                El sitio <strong>arenadoslucho.com</strong> tiene fines informativos y de contacto
                comercial. No constituye oferta vinculante hasta que exista presupuesto o acuerdo
                escrito entre las partes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-tinta mb-2">2. Servicios</h2>
              <p>
                Arenados Lucho presta servicios de preparación de superficies por arenado
                (industrial y proyectos acordados). El alcance, plazos y condiciones se definen en
                cada propuesta técnica o presupuesto.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-tinta mb-2">3. Consultas</h2>
              <p>
                Este sitio no tiene formularios. Las consultas se reciben por WhatsApp, y los datos
                que nos compartas en esa conversación se usan para responderte y elaborar el
                presupuesto. Ver{" "}
                <Link href="/politica-de-privacidad" className="text-tinta hover:underline font-semibold">
                  Política de Privacidad
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-tinta mb-2">4. Propiedad intelectual</h2>
              <p>
                Textos, imágenes y marcas del sitio son de Arenados Lucho o se usan con autorización.
                No se permite reproducción sin consentimiento previo.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-tinta mb-2">5. Limitación de responsabilidad</h2>
              <p>
                El contenido del sitio puede actualizarse sin previo aviso. No garantizamos
                disponibilidad ininterrumpida del sitio. Las decisiones de contratación deben basarse
                en documentación técnica acordada en cada proyecto.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-tinta mb-2">6. Contacto</h2>
              <p>
                Para consultas, escribinos por WhatsApp desde la{" "}
                <Link href="/contacto" className="text-tinta hover:underline font-semibold">
                  página de contacto
                </Link>{" "}
                o al correo indicado en la{" "}
                <Link href="/politica-de-privacidad" className="text-tinta hover:underline font-semibold">
                  Política de Privacidad
                </Link>
                .
              </p>
            </section>

            <p className="text-sm text-tinta-70 pt-4 border-t">
              Última actualización: agosto 2026. Arenados Lucho — Buenos Aires, Argentina.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
