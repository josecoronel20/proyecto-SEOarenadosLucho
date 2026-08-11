export interface Faq {
  question: string
  answer: string
}

// Fuente única de las FAQs. La consume el acordeón (FaqAccordion.tsx) y el
// JSON-LD FAQPage del Server Component (preguntas-frecuentes/page.tsx).
export const faqs: Faq[] = [
  { question: "¿Qué es el arenado y para qué sirve?", answer: "Es la forma más rápida de sacar óxido, pintura vieja y suciedad de una superficie. Lanzamos arena a presión y dejamos el material limpio y parejo, listo para pintar o revestir." },
  { question: "¿Vienen a domicilio o tengo que llevar algo a un taller?", answer: "Trabajamos in situ: vamos con nuestro equipo a tu casa, obra, galpón o fábrica. No hace falta que traslades nada; llevamos compresores propios." },
  { question: "¿Cuánto tardan?", answer: "Depende del tamaño, el estado y la forma de la superficie. En superficies cómodas y planas —paredes, fachadas, piletas— cada equipo cubre alrededor de 100 m² por día. En estructuras metálicas complejas o con revestimientos muy resistentes lleva más tiempo. Si el trabajo es grande sumamos equipos, y en la visita te damos el plazo concreto." },
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

/**
 * Selecciona un subconjunto de `faqs` respetando el orden pedido.
 *
 * Lanza si una pregunta no existe: si alguien edita el texto de una FAQ, el build
 * falla ruidosamente en vez de renderizar 4 de 6 en silencio — y, sobre todo, en
 * vez de dejar el JSON-LD `FAQPage` desalineado con lo visible (Google penaliza
 * el schema que no coincide con la página).
 */
function pick(questions: string[]): Faq[] {
  return questions.map((q) => {
    const found = faqs.find((f) => f.question === q)
    if (!found) throw new Error(`FAQ inexistente: "${q}" (ver src/lib/faqs.ts)`)
    return found
  })
}

/** FAQ de la home: las 6 dudas de entrada, en el orden en que aparecen en la cabeza. */
export const faqsHome: Faq[] = pick([
  "¿Qué es el arenado y para qué sirve?",
  "¿Vienen a domicilio o tengo que llevar algo a un taller?",
  "¿Cuánto cuesta?",
  "¿Cuánto tardan?",
  "¿Queda lista para pintar o revestir?",
  "¿Hacen granallado o arenado certificado con normas?",
])

/** FAQ de /servicios: las objeciones de PYME con galpón y de obra en marcha. */
export const faqsServicios: Faq[] = pick([
  "¿Arenan camiones, tanques o estructuras en mi galpón?",
  "¿Trabajan dentro de una obra en marcha?",
  "¿Cuánto tardan?",
  "¿Hacen mucho polvo? ¿Molesta a los vecinos?",
  "¿Pueden trabajar fines de semana o turnos extendidos?",
  "¿Hacen granallado o arenado certificado con normas?",
])

// FAQs específicas de la landing /arenado-de-piletas (dueño de casa + contratista).
// Alimentan el acordeón y el JSON-LD FAQPage de esa página.
export const faqsPiletas: Faq[] = [
  { question: "¿Cómo saco la pintura vieja de la pileta?", answer: "Con arenado: es la forma más rápida de sacar toda la pintura vieja y descascarada de una pileta o piscina de hormigón y dejarla lista para repintar o revestir, sin rascar ni lijar a mano." },
  { question: "¿Qué es el arenado de una pileta o piscina?", answer: "Es como pasarle una lija potente: lanzamos arena a presión que barre la pintura y el revestimiento viejo, y deja el hormigón limpio y parejo, listo para la mano siguiente." },
  { question: "¿Ustedes pintan o revisten la pileta después?", answer: "No. Nosotros la dejamos lista; el pintado o revestimiento lo hacés vos, tu pintor o tu piletero, con el material que elijas. Si no tenés a quién, te orientamos." },
  { question: "¿Cuánto tarda arenar una pileta?", answer: "Una pileta familiar estándar suele quedar lista en el día; las más grandes o muy descascaradas pueden llevar más. Te lo confirmamos en la visita, antes de arrancar." },
  { question: "¿Hacen mucho polvo? ¿Molesta a los vecinos?", answer: "El arenado genera polvo, somos honestos. En domicilios coordinamos el horario y lo contenemos lo más posible para molestar poco, y al terminar dejamos todo limpio." },
  { question: "¿Queda bien para pintar o revestir después?", answer: "Sí, ese es el punto. Al sacar todas las capas viejas, el hormigón queda parejo y limpio, que es justo lo que la pintura o el revestimiento nuevo necesita para agarrar y durar." },
  { question: "¿Cuánto sale arenar una pileta?", answer: "Depende del tamaño de la pileta y de cuánta pintura hay que sacar. Por eso la visita y el presupuesto son sin costo: vamos, la vemos y te pasamos un precio cerrado." },
  { question: "¿Conviene arenar la pileta en invierno?", answer: "Sí. En invierno hay turno inmediato, trabajás sin el apuro del verano y llegás a la temporada con la pileta lista para pintar o revestir." },
  { question: "¿Van a domicilio o tengo que llevar algo?", answer: "Vamos a tu casa u obra con nuestros equipos y compresores; no tenés que trasladar ni preparar nada. Vos solo coordinás el día y el acceso." },
  { question: "¿Trabajan con contratistas o pileteros?", answer: "Sí, es de lo que más hacemos. Precio por obra, turnos rápidos y capacidad para varias piletas por temporada. Escribinos y armamos un acuerdo." },
  { question: "¿Sirve para piscinas de hormigón pintadas o revestidas?", answer: "Sí, mientras sean de hormigón: sacamos tanto la pintura como el revestimiento viejo y las dejamos listas para la nueva terminación." },
]
