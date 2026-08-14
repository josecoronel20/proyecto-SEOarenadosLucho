import { FranjaDatos } from "@/components/common/system"

/**
 * Los 4 hechos que responden las objeciones de entrada antes de que se formulen.
 *
 * Antes decía "Documentación vigente", "Equipo seguro", "Adaptabilidad a tu
 * cronograma" y "Equipos Móviles": lenguaje de pliego que no diferencia y que
 * nadie está buscando. Estos 4 son cosas concretas que el cliente sí pregunta.
 *
 * Pasa a franja tabulada: dato corto arriba, detalle abajo, filete entre celdas.
 * Los cuatro íconos en cuadradito redondeado se fueron —no agregaban información
 * y eran la mitad del alto de la franja—; ahora los cuatro datos entran de un
 * vistazo, que es todo lo que esta barra tiene que hacer.
 */
const items = [
  { dato: "A domicilio", detalle: "Vamos a tu obra, galpón o casa: no trasladás nada" },
  { dato: "2 equipos", detalle: "Propios, con sus compresores" },
  { dato: "Sin costo", detalle: "La visita y el presupuesto, sin compromiso" },
  { dato: "AMBA", detalle: "CABA y Gran Buenos Aires" },
]

export default function TrustBar() {
  return (
    <section className="bg-papel" aria-label="Por qué trabajar con nosotros">
      <div className="container mx-auto px-5 lg:px-8 py-12 md:py-16">
        <FranjaDatos items={items} />
      </div>
    </section>
  )
}
