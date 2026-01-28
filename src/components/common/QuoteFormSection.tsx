"use client"
import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Loader2, CheckCircle, AlertCircle, Mail } from "lucide-react"
import Link from "next/link"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function QuoteFormSection() {
  const [state, handleSubmit] = useForm("xrgnqbod")

  // Show success message when form is submitted successfully
  if (state.succeeded) {
    return (
      <section id="cotizar" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="pt-6">
                <div className="text-center">
                  <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    ¡Solicitud enviada!
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Hemos recibido tu solicitud de presupuesto. Te responderemos en las próximas 24 horas hábiles.
                  </p>
                  <Button 
                    onClick={() => window.location.reload()} 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Enviar otra solicitud
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="cotizar" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Presupuesto rápido
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Completá el formulario y te respondemos con cotización preliminar.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-center">Solicitar cotización</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="nombre">Nombre *</Label>
                  <Input 
                    id="nombre" 
                    name="nombre"
                    placeholder="Tu nombre"
                    required
                  />
                  <ValidationError 
                    prefix="Nombre" 
                    field="nombre" 
                    errors={state.errors} 
                  />
                </div>
                
                <div>
                  <Label htmlFor="telefono">Teléfono *</Label>
                  <Input 
                    id="telefono" 
                    name="telefono"
                    placeholder="Ej. 11XXXXXXXX"
                    pattern="[0-9]*"
                    required
                  />
                  <ValidationError 
                    prefix="Teléfono" 
                    field="telefono" 
                    errors={state.errors} 
                  />
                </div>
                
                <div>
                  <Label htmlFor="detalles">Detalles del proyecto *</Label>
                  <Textarea 
                    id="detalles" 
                    name="detalles"
                    placeholder="Ej. Ubicación: Pilar. Pileta de 8x4 metros. Cantidad de piezas: 1. Tamaño aproximado: 32 m2"
                    required
                    rows={5}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Incluí: ubicación, cantidad de piezas, tamaño aproximado y cualquier detalle relevante.
                  </p>
                  <ValidationError 
                    prefix="Detalles" 
                    field="detalles" 
                    errors={state.errors} 
                  />
                </div>

                {state.errors && Object.keys(state.errors).length > 0 && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-4">
                    <div className="flex">
                      <AlertCircle className="h-5 w-5 text-red-400" />
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">
                          Error al enviar el formulario
                        </h3>
                        <div className="mt-2 text-sm text-red-700">
                          <ValidationError errors={state.errors} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 min-h-[48px] text-base font-semibold" 
                  disabled={state.submitting}
                  aria-label="Enviar formulario y recibir cotización"
                >
                  {state.submitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar y recibir cotización
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="text-center mt-6">
            <p className="text-gray-500 mb-4">O</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <WhatsAppButton />
      <Button 
        size="lg" 
        variant="default" 
        className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg"
        asChild
      >
        <Link href="mailto:arenadoslucho@hotmail.com" aria-label="Contactar por mail">
          <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
          Contactar por Mail
        </Link>
      </Button>
      </div>

            <p className="text-sm text-gray-500 mt-4">
              Respondemos en 24 horas hábiles.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
