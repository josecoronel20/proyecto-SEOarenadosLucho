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
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="shadow-xl">
          <CardHeader className="text-center pb-6 border-b">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                <FileText className="w-8 h-8 text-primary-600" />
              </div>
            </div>
            <CardTitle asChild className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              <h1>Términos y Condiciones</h1>
            </CardTitle>
            <p className="text-base md:text-lg text-gray-600">
              Condiciones generales de uso de este sitio y de las consultas enviadas a Arenados Lucho.
            </p>
          </CardHeader>

          <CardContent className="pt-8 space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">1. Objeto</h2>
              <p>
                El sitio <strong>arenadoslucho.com</strong> tiene fines informativos y de contacto
                comercial. No constituye oferta vinculante hasta que exista presupuesto o acuerdo
                escrito entre las partes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">2. Servicios</h2>
              <p>
                Arenados Lucho presta servicios de preparación de superficies por arenado
                (industrial y proyectos acordados). El alcance, plazos y condiciones se definen en
                cada propuesta técnica o presupuesto.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">3. Consultas y formulario</h2>
              <p>
                Los datos enviados por formulario o correo se usan para responder consultas y
                elaborar cotizaciones. Ver{" "}
                <Link href="/politica-de-privacidad" className="text-primary-600 hover:underline font-semibold">
                  Política de Privacidad
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">4. Propiedad intelectual</h2>
              <p>
                Textos, imágenes y marcas del sitio son de Arenados Lucho o se usan con autorización.
                No se permite reproducción sin consentimiento previo.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">5. Limitación de responsabilidad</h2>
              <p>
                El contenido del sitio puede actualizarse sin previo aviso. No garantizamos
                disponibilidad ininterrumpida del sitio. Las decisiones de contratación deben basarse
                en documentación técnica acordada en cada proyecto.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">6. Contacto</h2>
              <p>
                Para consultas:{" "}
                <Link href="/contacto" className="text-primary-600 hover:underline font-semibold">
                  formulario de contacto
                </Link>{" "}
                o el correo indicado en el sitio.
              </p>
            </section>

            <p className="text-sm text-gray-500 pt-4 border-t">
              Última actualización: mayo 2026. Arenados Lucho — Buenos Aires, Argentina.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
