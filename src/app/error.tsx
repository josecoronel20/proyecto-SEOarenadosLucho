'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            ¡Oops! Algo salió mal
          </h1>
          <p className="text-gray-600">
            Ha ocurrido un error inesperado. Por favor, intenta nuevamente.
          </p>
        </div>
        
        <div className="space-y-3">
          <button 
            onClick={reset}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Intentar nuevamente
          </button>
          
          <a 
            href="/"
            className="block w-full bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 text-center"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  )
}
