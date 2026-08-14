"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <h1 className="text-2xl md:text-3xl font-bold text-tinta mb-3">
        Algo salió mal
      </h1>
      <p className="mb-6 text-tinta-70 max-w-md">
        Ocurrió un error inesperado. Probá de nuevo; si el problema sigue,
        escribinos por WhatsApp.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-tinta text-papel font-semibold rounded-full hover:bg-tinta transition-colors"
      >
        Reintentar
      </button>
    </div>
  );
}
