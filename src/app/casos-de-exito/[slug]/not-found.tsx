import Link from "next/link"

export default function CasoNotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Caso no encontrado</h1>
      <p className="text-gray-600 mb-6 text-center">
        El proyecto que buscas no existe o fue movido.
      </p>
      <Link
        href="/casos-de-exito"
        className="text-primary-600 hover:text-primary-700 font-semibold"
      >
        ← Volver a casos de éxito
      </Link>
    </main>
  )
}
