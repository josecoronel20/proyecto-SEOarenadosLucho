import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Mail, MapPin, FileText, Lock, RefreshCw, MessageCircle } from 'lucide-react'
import { Metadata } from 'next'
import { BUSINESS } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de Privacidad de Arenados Lucho. Protección de datos personales en Buenos Aires.",
  alternates: { canonical: "/politica-de-privacidad" },
}

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-papel py-16 md:py-24 px-5 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <Card className="">
          <CardHeader className="text-center pb-6 border-b">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-papel-alt flex items-center justify-center">
                <Shield className="w-8 h-8 text-tinta" />
              </div>
            </div>
            <CardTitle asChild className="text-3xl md:text-4xl font-bold text-tinta mb-3">
              <h1>Política de Privacidad</h1>
            </CardTitle>
            <p className="text-base md:text-lg text-tinta-70">
              En Arenados Lucho valoramos tu confianza. Esta política explica qué datos recopilamos, para qué los usamos, cómo los protegemos y qué derechos podés ejercer conforme a la normativa vigente en Argentina.
            </p>
          </CardHeader>

          <CardContent className="pt-8 space-y-8">
            {/* Identificación del Responsable */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-tinta" />
                <h2 className="text-2xl md:text-3xl font-bold text-tinta">
                  Identificación del Responsable
                </h2>
              </div>
              <div className="bg-papel-alt rounded-sm p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-tinta min-w-[140px]">Razón social:</span>
                  <span className="text-tinta-70">Arenados Lucho</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-tinta mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-tinta">Correo electrónico:</span>
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="text-tinta hover:text-tinta underline ml-2"
                    >
                      {BUSINESS.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-tinta mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-tinta">Dirección comercial:</span>
                    <span className="text-tinta-70 ml-2">Pilar, Provincia de Buenos Aires, Argentina.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Datos que Recopilamos */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-tinta" />
                <h2 className="text-2xl md:text-3xl font-bold text-tinta">
                  Datos que Recopilamos
                </h2>
              </div>
              <div className="space-y-4">
                <div className="bg-papel-alt border border-papel-linea rounded-sm p-5 flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-tinta mt-0.5 flex-shrink-0" />
                  <p className="text-tinta-70 leading-relaxed">
                    <span className="font-semibold text-tinta">Este sitio no tiene formularios y no te pide datos.</span>{' '}
                    No hay campos que completar ni información que se envíe desde estas páginas. El contacto ocurre por WhatsApp, y los datos que nos compartas son los que decidas escribirnos en esa conversación.
                  </p>
                </div>
                <p className="text-tinta-70 leading-relaxed">
                  En esa conversación solemos recibir, según lo que nos cuentes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-tinta-70 ml-4">
                  <li>Tu nombre.</li>
                  <li>El número de teléfono asociado a tu cuenta de WhatsApp.</li>
                  <li>La localidad o zona donde está el trabajo.</li>
                  <li>El tipo de trabajo, sus detalles y las fotos que nos mandes.</li>
                </ul>
                <p className="text-tinta-70 leading-relaxed mt-4">
                  El intercambio por WhatsApp se realiza dentro de esa aplicación y se rige también por las políticas de privacidad de Meta.
                </p>
                <p className="text-tinta-70 leading-relaxed">
                  Por separado, utilizamos cookies y tecnologías de medición para obtener datos de navegación agregados, como páginas visitadas y tiempo de permanencia, con fines estadísticos y publicitarios. Esto se implementa mediante Google Tag Manager y puede incluir servicios de terceros como Google Analytics y Google Ads.{' '}
                  <span className="font-semibold text-tinta">Esas herramientas de medición no reciben tu nombre, tu teléfono ni tu correo electrónico:</span>{' '}
                  registran que alguien inició una conversación de WhatsApp, no quién.
                </p>
              </div>
            </section>

            {/* Finalidad del Uso de los Datos */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-tinta" />
                <h2 className="text-2xl md:text-3xl font-bold text-tinta">
                  Finalidad del Uso de los Datos
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-tinta-70 leading-relaxed">
                  Utilizamos la información que nos compartís para:
                </p>
                <ul className="list-disc list-inside space-y-2 text-tinta-70 ml-4">
                  <li>Responder tu consulta y coordinar la visita.</li>
                  <li>Elaborar y enviarte el presupuesto.</li>
                  <li>Hacer el seguimiento del trabajo y responder dudas posteriores.</li>
                </ul>
                <p className="text-tinta-70 leading-relaxed mt-4">
                  No vendemos tus datos ni los cedemos a terceros con fines comerciales. Solo intervienen los proveedores técnicos necesarios para operar: el alojamiento del sitio (Vercel), las herramientas de medición y publicidad (Google) y la mensajería (WhatsApp, de Meta), cada uno bajo sus propias políticas de privacidad.
                </p>
              </div>
            </section>

            {/* Derechos de los Usuarios */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-tinta" />
                <h2 className="text-2xl md:text-3xl font-bold text-tinta">
                  Derechos de los Usuarios
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-tinta-70 leading-relaxed">
                  Tenés derecho a acceder, actualizar, rectificar y eliminar tus datos personales. Podés ejercer estos derechos escribiéndonos por WhatsApp o enviando un correo a{' '}
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="text-tinta hover:text-tinta font-semibold underline"
                  >
                    {BUSINESS.email}
                  </a>
                  . Si querés que borremos la conversación y los datos que nos hayas compartido, pedínoslo y lo hacemos.
                </p>
                <p className="text-tinta-70 leading-relaxed">
                  Si considerás que tus derechos no han sido atendidos, podés presentar un reclamo ante la Agencia de Acceso a la Información Pública (AAIP), autoridad de control en Argentina. Más información en{' '}
                  <a 
                    href="https://argentina.gob.ar/aaip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-tinta hover:text-tinta font-semibold underline"
                  >
                    argentina.gob.ar/aaip
                  </a>.
                </p>
              </div>
            </section>

            {/* Seguridad de la Información */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-tinta" />
                <h2 className="text-2xl md:text-3xl font-bold text-tinta">
                  Seguridad de la Información
                </h2>
              </div>
              <p className="text-tinta-70 leading-relaxed">
                El sitio se sirve íntegramente por HTTPS y no almacena datos personales: no hay formularios, base de datos ni servidor propio donde guardarlos. Las conversaciones de WhatsApp quedan en el teléfono del negocio, con acceso restringido a las personas que atienden las consultas, y viajan cifradas de extremo a extremo por la propia aplicación.
              </p>
            </section>

            {/* Actualizaciones de la Política */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <RefreshCw className="w-6 h-6 text-tinta" />
                <h2 className="text-2xl md:text-3xl font-bold text-tinta">
                  Actualizaciones de la Política
                </h2>
              </div>
              <p className="text-tinta-70 leading-relaxed">
                Podemos modificar esta política para reflejar cambios en la normativa o en nuestros procesos internos. Las actualizaciones se publicarán en esta página y entrarán en vigencia desde su publicación.
              </p>
              <div className="mt-4 pt-4 border-t border-papel-linea">
                <p className="text-sm text-tinta-70">
                  <strong>Fecha de última revisión:</strong> 2 de agosto de 2026.
                </p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
