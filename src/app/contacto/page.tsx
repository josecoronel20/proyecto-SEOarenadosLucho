"use client"

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MessageSquare, Send, CheckCircle2 } from 'lucide-react'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    description: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    const now = Date.now()
    const eventId = `form_submit_${now}_${Math.random().toString(36).substr(2, 9)}`

    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'form_submit',
        event_category: 'Contact',
        event_label: 'Contacto Form Submit',
        event_id: eventId,
        value: 1,
        timestamp: now,
        form_name: 'contacto'
      })
    }

    try {
      const response = await fetch('https://formspree.io/f/xrgnqbod', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          contact: formData.contact || '(no indicado)',
          description: formData.description,
          _subject: 'Nueva solicitud de contacto - Arenados Lucho'
        }),
      })

      if (response.ok) {
        if (typeof window !== 'undefined' && window.dataLayer) {
          window.dataLayer.push({
            event: 'form_submit_success',
            event_category: 'Contact',
            event_label: 'Contacto Form Success',
            event_id: `form_success_${now}_${Math.random().toString(36).substr(2, 9)}`,
            value: 1,
            timestamp: Date.now(),
            form_name: 'contacto'
          })
        }
        setIsSubmitted(true)
        setFormData({ name: '', contact: '', description: '' })
      } else {
        throw new Error('Error al enviar el formulario')
      }
    } catch (err) {
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'form_submit_error',
          event_category: 'Contact',
          event_label: 'Contacto Form Error',
          event_id: `form_error_${now}_${Math.random().toString(36).substr(2, 9)}`,
          value: 0,
          timestamp: Date.now(),
          form_name: 'contacto'
        })
      }
      setError('Hubo un error al enviar el formulario. Por favor, intentá nuevamente.')
      console.error('Form submission error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="shadow-xl">
            <CardContent className="pt-12 pb-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Solicitud enviada
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Recibimos tu mensaje. Nos pondremos en contacto contigo a la brevedad.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-primary-400 hover:bg-primary-500"
                >
                  Enviar otra solicitud
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <Card className="shadow-xl">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-primary-600" />
              </div>
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Contacto
            </CardTitle>
            <CardDescription className="text-base md:text-lg text-gray-600">
              Enviá tu solicitud con los datos del proyecto. Nos contactaremos a la brevedad.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Nombre <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Contacto <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="Ej: 11 2345-6789 o email@ejemplo.com"
                />
              </div>

             

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Descripción del proyecto <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Describí tu proyecto: tipo de superficie, dimensiones, ubicación, plazos, etc."
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.description || !formData.contact}
                  className="w-full bg-primary-400 hover:bg-primary-500 text-white font-semibold py-6 text-lg rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block animate-spin mr-2">⏳</span>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar solicitud
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
