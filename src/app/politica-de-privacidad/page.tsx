import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Mail, MapPin, FileText, Lock, RefreshCw } from 'lucide-react'
import Link from 'next/link'

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="shadow-xl">
          <CardHeader className="text-center pb-6 border-b">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Política de Privacidad
            </CardTitle>
            <p className="text-base md:text-lg text-gray-600">
              En Arenados Lucho valoramos tu confianza. Esta política explica qué datos recopilamos, para qué los usamos, cómo los protegemos y qué derechos podés ejercer conforme a la normativa vigente en Argentina.
            </p>
          </CardHeader>

          <CardContent className="pt-8 space-y-8">
            {/* Identificación del Responsable */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Identificación del Responsable
                </h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-gray-900 min-w-[140px]">Razón social:</span>
                  <span className="text-gray-700">Arenados Lucho</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Correo electrónico</span>
                      
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Dirección comercial:</span>
                    <span className="text-gray-700 ml-2">Pilar, Provincia de Buenos Aires, Argentina.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Datos que Recopilamos */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Datos que Recopilamos
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Recopilamos los siguientes datos personales a través de formularios y canales de contacto:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Nombre y apellido.</li>
                  <li>Teléfono de contacto.</li>
                  <li>Correo electrónico.</li>
                  <li>Localidad y zona de cobertura.</li>
                  <li>Tipo de proyecto y detalles relacionados con el servicio solicitado.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Además, utilizamos cookies y tecnologías de seguimiento para obtener datos de navegación agregados, como páginas visitadas, tiempo de permanencia y formularios completados. Estas herramientas se usan con fines estadísticos y pueden incluir servicios de terceros como Google Analytics y plataformas de formularios.
                </p>
              </div>
            </section>

            {/* Finalidad del Uso de los Datos */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Finalidad del Uso de los Datos
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Utilizamos la información personal para:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Responder consultas y solicitudes enviadas por potenciales clientes.</li>
                  <li>Elaborar y enviar cotizaciones personalizadas.</li>
                  <li>Realizar seguimiento comercial y brindar asesoramiento sobre nuestros servicios.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  No vendemos ni compartimos tus datos con terceros. Solo podemos compartirlos con proveedores técnicos que nos brindan servicios de infraestructura (alojamiento web, formularios, analítica) bajo acuerdos de confidencialidad y políticas de seguridad equivalentes.
                </p>
              </div>
            </section>

            {/* Derechos de los Usuarios */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Derechos de los Usuarios
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Tenés derecho a acceder, actualizar, rectificar y eliminar tus datos personales. Podés ejercer estos derechos enviando un correo a nuestros email.{' '}
                  
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Si considerás que tus derechos no han sido atendidos, podés presentar un reclamo ante la Agencia de Acceso a la Información Pública (AAIP), autoridad de control en Argentina. Más información en{' '}
                  <a 
                    href="https://argentina.gob.ar/aaip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-semibold underline"
                  >
                    argentina.gob.ar/aaip
                  </a>.
                </p>
              </div>
            </section>

            {/* Seguridad de la Información */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Seguridad de la Información
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Implementamos medidas técnicas y organizativas razonables para proteger tus datos personales. El acceso a la información está restringido al personal autorizado y a proveedores tecnológicos que la necesitan para operar nuestros servicios. Todos ellos se comprometen a mantener la confidencialidad y proteger la información con estándares adecuados.
              </p>
            </section>

            {/* Actualizaciones de la Política */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <RefreshCw className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Actualizaciones de la Política
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Podemos modificar esta política para reflejar cambios en la normativa o en nuestros procesos internos. Las actualizaciones se publicarán en esta página y entrarán en vigencia desde su publicación.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Fecha de última revisión:</strong> 7 de noviembre de 2025.
                </p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
