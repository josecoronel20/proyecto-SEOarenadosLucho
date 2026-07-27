"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Algo salió mal
      </h1>
      <p className="mb-6 text-gray-600 max-w-md">
        Ocurrió un error inesperado. Probá de nuevo; si el problema sigue,
        escribinos por WhatsApp.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-600 transition-colors"
      >
        Reintentar
      </button>
    </div>
  );
}
