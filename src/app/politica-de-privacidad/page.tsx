import Link from "next/link"
import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Política de Privacidad | Arenados Lucho",
  description:
    "Conoce cómo Arenados Lucho recopila, utiliza y protege tus datos personales. Información sobre derechos, finalidades y contacto de privacidad.",
  alternates: {
    canonical: "/politica-de-privacidad"
  },
  openGraph: {
    title: "Política de Privacidad | Arenados Lucho",
    description:
      "Transparencia en el tratamiento de tus datos personales por parte de Arenados Lucho. Conoce tus derechos y cómo proteger tu información.",
    type: "website",
    locale: "es_AR"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
}

const lastUpdate = "7 de noviembre de 2025"

export default function PoliticaDePrivacidadPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumbs segments={[{ label: "Política de privacidad" }]} />

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Política de Privacidad</h1>
            <p className="text-muted-foreground text-lg">
              En Arenados Lucho valoramos tu confianza. Esta política explica qué datos recopilamos, para qué los
              usamos, cómo los protegemos y qué derechos podés ejercer conforme a la normativa vigente en Argentina.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Identificación del Responsable</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>
                  <strong>Razón social:</strong> Arenados Lucho
                </p>
                <p>
                  <strong>Correo electrónico:</strong> <Link href="mailto:arenadoslucho@hotmail.com" className="text-primary">arenadoslucho@hotmail.com</Link>
                </p>
                <p>
                  <strong>Teléfono:</strong> <Link href="tel:+5491123787750" className="text-primary">+54 9 11 2378-7750</Link>
                </p>
                <p>
                  <strong>Dirección comercial:</strong> Pilar, Provincia de Buenos Aires, Argentina.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Datos que Recopilamos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>Recopilamos los siguientes datos personales a través de formularios y canales de contacto:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Nombre y apellido.</li>
                  <li>Teléfono de contacto.</li>
                  <li>Correo electrónico.</li>
                  <li>Localidad y zona de cobertura.</li>
                  <li>Tipo de proyecto y detalles relacionados con el servicio solicitado.</li>
                </ul>
                <p>
                  Además, utilizamos cookies y tecnologías de seguimiento para obtener datos de navegación agregados,
                  como páginas visitadas, tiempo de permanencia y formularios completados. Estas herramientas se usan con
                  fines estadísticos y pueden incluir servicios de terceros como Google Analytics y plataformas de
                  formularios.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Finalidad del Uso de los Datos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>Utilizamos la información personal para:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Responder consultas y solicitudes enviadas por potenciales clientes.</li>
                  <li>Elaborar y enviar cotizaciones personalizadas.</li>
                  <li>Realizar seguimiento comercial y brindar asesoramiento sobre nuestros servicios.</li>
                </ul>
                <p>
                  No vendemos ni compartimos tus datos con terceros. Solo podemos compartirlos con proveedores técnicos
                  que nos brindan servicios de infraestructura (alojamiento web, formularios, analítica) bajo acuerdos de
                  confidencialidad y políticas de seguridad equivalentes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Derechos de los Usuarios</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>
                  Tenés derecho a acceder, actualizar, rectificar y eliminar tus datos personales. Podés ejercer estos
                  derechos enviando un correo a <Link href="mailto:arenadoslucho@hotmail.com" className="text-primary">arenadoslucho@hotmail.com</Link>.
                </p>
                <p>
                  Si considerás que tus derechos no han sido atendidos, podés presentar un reclamo ante la Agencia de
                  Acceso a la Información Pública (AAIP), autoridad de control en Argentina. Más información en
                  <Link href="https://www.argentina.gob.ar/aaip" className="text-primary" target="_blank" rel="noopener noreferrer"> argentina.gob.ar/aaip</Link>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Seguridad de la Información</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>
                  Implementamos medidas técnicas y organizativas razonables para proteger tus datos personales. El
                  acceso a la información está restringido al personal autorizado y a proveedores tecnológicos que la
                  necesitan para operar nuestros servicios. Todos ellos se comprometen a mantener la confidencialidad y
                  proteger la información con estándares adecuados.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Actualizaciones de la Política</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>
                  Podemos modificar esta política para reflejar cambios en la normativa o en nuestros procesos
                  internos. Las actualizaciones se publicarán en esta página y entrarán en vigencia desde su
                  publicación.
                </p>
                <p>
                  <strong>Fecha de última revisión:</strong> {lastUpdate}.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

