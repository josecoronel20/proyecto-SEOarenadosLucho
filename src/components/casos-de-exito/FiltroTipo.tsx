"use client"

export type FiltroTipoValue =
  | "todos"
  | "restauracion-mantenimiento"
  | "obra-publica"
  | "obra-construccion"

interface FiltroTipoProps {
  value: FiltroTipoValue
  onChange: (v: FiltroTipoValue) => void
}

const options: { value: FiltroTipoValue; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "restauracion-mantenimiento", label: "Restauración y mantenimiento" },
  { value: "obra-publica", label: "Obra pública" },
  { value: "obra-construccion", label: "Obra en construcción" },
]

export function FiltroTipo({ value, onChange }: FiltroTipoProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
            value === opt.value
              ? "bg-primary-600 text-white"
              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
