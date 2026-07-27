export interface Faq {
  question: string
  answer: string
}

// Fuente única de las FAQs. La consume el acordeón (FaqAccordion.tsx) y el
// JSON-LD FAQPage del Server Component (preguntas-frecuentes/page.tsx).
export const faqs: Faq[] = [
  { question: "¿Qué es el arenado y para qué sirve?", answer: "Es la forma más rápida de sacar óxido, pintura vieja y suciedad de una superficie. Lanzamos arena a presión y dejamos el material limpio y parejo, listo para pintar o revestir." },
  { question: "¿Vienen a domicilio o tengo que llevar algo a un taller?", answer: "Trabajamos in situ: vamos con nuestro equipo a tu casa, obra, galpón o fábrica. No hace falta que traslades nada; llevamos compresores propios." },
  { question: "¿Cuánto tardan?", answer: "Depende del tamaño y el estado de la superficie. Cada equipo avanza alrededor de 100 m² por día y podemos sumar equipos para acortar los tiempos. En la visita te damos un plazo estimado." },
  { question: "¿Hacen mucho polvo? ¿Molesta a los vecinos?", answer: "En galpones, obras y terrenos amplios no es un problema. En domicilios coordinamos horarios y trabajamos por zonas, conteniendo el polvo e interviniendo un sector a la vez para liberarlo rápido." },
  { question: "¿Queda lista para pintar o revestir?", answer: "Sí, ese es el objetivo. Te entregamos la superficie limpia y pareja, lista para que apliques pintura, antióxido o revestimiento." },
  { question: "¿Hacen piletas? ¿La pintan ustedes también?", answer: "Sí, arenamos piletas para sacar toda la pintura o el revestimiento viejo y dejarlas listas para repintar o revestir. El pintado o revestimiento final no lo hacemos nosotros: te la entregamos preparada." },
  { question: "¿Cómo saco la pintura vieja de la pileta?", answer: "El arenado es la forma más rápida y prolija: saca toda la pintura descascarada de una sola vez y deja el hormigón listo para repintar o revestir, sin lijar a mano." },
  { question: "¿Arenan camiones, tanques o estructuras en mi galpón?", answer: "Sí, es de los trabajos que más hacemos. Vamos con el equipo a tu galpón o predio y arenamos hierros, tanques, acoplados y estructuras grandes en el lugar." },
  { question: "¿Trabajan dentro de una obra en marcha?", answer: "Sí. Coordinamos con el encargado de obra, trabajamos por sectores y liberamos cada zona lo antes posible para no frenar el resto de las tareas." },
  { question: "¿Cuánto cuesta?", answer: "El precio depende de la superficie, el estado y el acceso. Hacemos una visita sin costo, lo vemos en persona y te pasamos un presupuesto claro." },
  { question: "¿Hacen visita antes de presupuestar?", answer: "Sí, la visita y el presupuesto son sin costo. Vamos, lo evaluamos y te enviamos el presupuesto en 1 a 2 días." },
  { question: "¿Cuánta experiencia tienen?", answer: "Años arenando estructuras industriales, obras, restauraciones, galpones y piletas, con dos equipos propios completos." },
  { question: "¿Pueden trabajar fines de semana o turnos extendidos?", answer: "Sí. Si el plazo es ajustado coordinamos turnos fuera del horario habitual, respetando los permisos de obra y municipales." },
  { question: "¿Hacen granallado o arenado certificado con normas?", answer: "No. Hacemos arenado sin vueltas para dejar la superficie lista para pintar o revestir. No trabajamos con granallado ni con arenado certificado bajo normas o mediciones técnicas." },
]
