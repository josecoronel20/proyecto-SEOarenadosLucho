import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-tinta mb-3">
        Página no encontrada
      </h1>
      <p className="mb-6 text-tinta-70 max-w-md">
        La página que buscás no existe o cambió de dirección. Podemos ayudarte a
        encontrar lo que necesitás.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/servicios"
          className="inline-flex items-center justify-center px-6 py-3 bg-tinta text-papel font-semibold rounded-full hover:bg-tinta transition-colors"
        >
          Ver servicios
        </Link>
        <Link
          href="/contacto"
          className="inline-flex items-center justify-center px-6 py-3 border-2 border-tinta text-tinta font-semibold rounded-full hover:bg-papel-alt transition-colors"
        >
          Contactanos
        </Link>
      </div>
    </div>
  );
}
