import { FranjaDatos } from "@/components/common/system"

/**
 * Los cuatro hechos que dan respaldo, en la misma franja tabulada que usa la
 * home. Antes eran cuatro cajas, cada una con su ícono en otro cuadradito
 * adentro: caja dentro de caja, y ningún ícono aportaba información.
 */
const items = [
  { dato: "Seguros", detalle: "Vigentes, para poder entrar a obra o planta" },
  { dato: "Obra pública", detalle: "Trabajos ejecutados para el Estado" },
  { dato: "Equipos propios", detalle: "Con sus compresores: no dependemos del lugar" },
  { dato: "Lista para pintar", detalle: "Te entregamos la superficie limpia y pareja" },
]

export function AutoridadRapida() {
  return (
    <section className="bg-papel-alt" aria-label="Autoridad técnica">
      <div className="container mx-auto px-5 lg:px-8 py-12 md:py-16">
        <FranjaDatos items={items} />
      </div>
    </section>
  )
}
