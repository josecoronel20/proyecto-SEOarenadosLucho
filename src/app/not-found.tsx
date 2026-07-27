import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Página no encontrada
      </h1>
      <p className="mb-6 text-gray-600 max-w-md">
        La página que buscás no existe o cambió de dirección. Podemos ayudarte a
        encontrar lo que necesitás.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/servicios"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-600 transition-colors"
        >
          Ver servicios
        </Link>
        <Link
          href="/contacto"
          className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-500 text-primary-700 font-semibold rounded-full hover:bg-primary-50 transition-colors"
        >
          Contactanos
        </Link>
      </div>
    </div>
  );
}
