"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  { question: "¿Qué nivel de preparación de superficie realizan?", answer: "Trabajamos hasta grado metal blanco (Sa3), logrando la eliminación total de óxido, pintura y contaminantes visibles, dejando la superficie lista para recubrimiento." },
  { question: "¿Cumplen con la norma ISO 8501?", answer: "Ejecutamos la limpieza conforme a los criterios visuales establecidos en la norma ISO 8501, alcanzando grado Sa3 cuando el proyecto lo requiere." },
  { question: "¿Cuánta experiencia tienen en arenado industrial?", answer: "Contamos con años de experiencia realizando arenados en estructuras industriales, obras públicas y proyectos de restauración y mantenimiento." },
  { question: "¿Cuánto tardan en iniciar el trabajo?", answer: "En Zona Norte de Buenos Aires podemos comenzar en el día estipulado. En zonas más lejanas coordinamos movilización en 1 a 2 días desde la aprobación. En provincias limítrofes puede variar según ubicación y logística." },
  { question: "¿Pueden garantizar el cumplimiento del cronograma?", answer: "Sí. Presupuestamos considerando el plazo del proyecto y coordinamos directamente con el encargado de obra. Si es necesario, trabajamos turnos extendidos para cumplir tiempos." },
  { question: "¿Cuál es la capacidad de ejecución diaria?", answer: "Cada equipo puede ejecutar aproximadamente 100 m² por jornada de 8 horas en estructuras metálicas estándar. Operamos hasta dos equipos simultáneos, con posibilidad de sumar más si el proyecto lo requiere." },
  { question: "¿Trabajan en altura o espacios cerrados?", answer: "Sí. Tenemos experiencia en estructuras en altura y sectores interiores, coordinando accesos y condiciones de trabajo con el responsable de obra." },
  { question: "¿Cómo gestionan el polvo generado?", answer: "Aislamos el sector de trabajo para intervenir exclusivamente en esa área, ejecutando el arenado de forma organizada y liberando el espacio lo antes posible." },
  { question: "¿Qué necesitan para comenzar el trabajo?", answer: "Accesos definidos, permisos correspondientes y coordinación con el encargado de obra. Si se clausura un sector, debe estar previamente liberado." },
  { question: "¿Realizan visita técnica antes de presupuestar?", answer: "Sí. Realizamos visita técnica sin costo y enviamos plan de trabajo y cronograma estimado en 1 a 2 días." },
  { question: "¿Qué abrasivo utilizan?", answer: "Trabajamos con arena gruesa, adecuada para lograr limpieza profunda y preparación hasta grado Sa3." },
  { question: "¿Entregan algún tipo de garantía?", answer: "Antes de comenzar realizamos una muestra sobre la superficie para validar el resultado esperado con el cliente." },
  { question: "¿Pueden trabajar fines de semana o turnos extendidos?", answer: "Sí. En proyectos con plazos ajustados podemos coordinar intervenciones fuera del horario habitual, teniendo en cuenta los permisos públicos y de obra." },
  { question: "¿Quién gestiona los permisos necesarios?", answer: "Los permisos municipales o de obra deben ser gestionados por el cliente o responsable del proyecto." },
  { question: "¿Por qué elegir arenado en lugar de otros métodos de limpieza?", answer: "El arenado hasta Sa3 garantiza eliminación completa de contaminantes visibles y una preparación profunda del sustrato, fundamental cuando se requiere máxima adherencia del recubrimiento." },
]

export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border-gray-200 border-b px-0">
          <AccordionTrigger className="py-5 text-left font-semibold text-gray-900 hover:no-underline hover:text-primary-600">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-700 leading-relaxed pb-5">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
