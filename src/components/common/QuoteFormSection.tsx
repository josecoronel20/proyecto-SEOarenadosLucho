"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle, ArrowRight, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { PROJECT } from "@/config/project"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function QuoteFormSection() {
  // Replace YOUR_FORM_ID with your actual Formspree form ID
  const [state, handleSubmit] = useForm("xrgnqbod")
  
  // Fire conversion when succeeded
  useEffect(() => {
    if (state.succeeded) {
      try {
        // Prefer global helper if present
        // @ts-ignore
        if (typeof window.gtag_report_conversion === 'function') {
          // Do not redirect anywhere, just fire event
          // @ts-ignore
          window.gtag_report_conversion();
        } else if (window.gtag) {
          // Fallback direct event
          // @ts-ignore
          window.gtag('event', 'conversion', { send_to: 'AW-11151875862/_Vc5CP7J7bYbEJa-0MUp' });
        }
      } catch {}
    }
  }, [state.succeeded])

  // Show success message when form is submitted successfully
  if (state.succeeded) {
    return (
      <section id="presupuesto" className="py-16 bg-white">
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
    <section id="presupuesto" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Presupuesto rápido
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Completá el formulario y te respondemos con cotización preliminar via email.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-center">Solicitar cotización</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                </div>
                
                <div>
                  <Label htmlFor="email">Email (opcional)</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="tu@email.com"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email" 
                    errors={state.errors} 
                  />
                </div>
                
                <div>
                  <Label htmlFor="servicio">Tipo de servicio *</Label>
                  <select 
                    id="servicio" 
                    name="servicio" 
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Seleccionar servicio</option>
                    {PROJECT.services.map(service => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                  <ValidationError 
                    prefix="Servicio" 
                    field="servicio" 
                    errors={state.errors} 
                  />
                </div>
                
                <div>
                  <Label htmlFor="ubicacion">Ubicación / partido *</Label>
                  <Input 
                    id="ubicacion" 
                    name="ubicacion"
                    placeholder="Ej. Pilar, San Isidro, Tigre"
                    required
                  />
                  <ValidationError 
                    prefix="Ubicación" 
                    field="ubicacion" 
                    errors={state.errors} 
                  />
                </div>
                
                <div>
                  <Label htmlFor="metros">Metros aproximados / descripción *</Label>
                  <Textarea 
                    id="metros" 
                    name="metros"
                    placeholder="Ej. 40 m2 / pileta de 8x4"
                    required
                  />
                  <ValidationError 
                    prefix="Descripción" 
                    field="metros" 
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
            <WhatsAppButton
              
            />
            <p className="text-sm text-gray-500 mt-4">
              Respondemos en 24 horas hábiles.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
