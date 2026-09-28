export interface Faq {
  question: string
  answer: string
}

// Fuente única de las FAQs. La consume el acordeón (FaqAccordion.tsx) y el
// JSON-LD FAQPage del Server Component (preguntas-frecuentes/page.tsx).
export const faqs: Faq[] = [
  { question: "¿Qué es el arenado y para qué sirve?", answer: "Es la forma más rápida de sacar óxido, pintura vieja y suciedad de una superficie. Lanzamos arena a presión y dejamos el material limpio y parejo, listo para pintar o revestir." },
  { question: "¿Vienen a domicilio o tengo que llevar algo a un taller?", answer: "Trabajamos in situ: vamos con nuestro equipo a tu casa, obra, galpón o fábrica. No hace falta que traslades nada; llevamos compresores propios." },
  { question: "¿Cuánto tardan?", answer: "Depende del tamaño, el estado y la forma de la superficie. En superficies cómodas y planas —paredes, fachadas, piletas— cada equipo cubre alrededor de 100 m² por día. En estructuras metálicas complejas o con revestimientos muy resistentes lleva más tiempo. Si el plazo aprieta podemos ir con los dos equipos —son dos, no más—, y en la visita te damos el plazo concreto." },
  { question: "¿Qué espacio necesitan para el equipo?", answer: "Un equipo son un compresor y una tolva, que llegan remolcados o en la camioneta. Necesitamos poder ubicarlos medianamente cerca del lugar de trabajo, porque la arena se carga al hombro desde el equipo hasta donde se arena: cuanto más lejos, más lento y más pesado. En la visita miramos dónde conviene ponerlos." },
  { question: "¿Hacen mucho polvo? ¿Molesta a los vecinos?", answer: "Sí, bastante: es parte del trabajo y no se puede evitar. Por eso conviene un lugar amplio y, si se puede, techado y ventilado. No armamos cerramientos: si hay máquinas, autos, ventanas o un vecino que no pueden recibir polvo, el cerramiento lo ponés vos, y en la visita te decimos exactamente qué tapar. Al terminar retiramos la arena gruesa; el polvillo fino no se saca del todo y durante unos días vuelve a aparecer un poco." },
  { question: "¿Queda lista para pintar o revestir?", answer: "Sí, ese es el objetivo. Te entregamos la superficie limpia y pareja, lista para que apliques pintura, antióxido o revestimiento." },
  { question: "¿Hacen piletas? ¿La pintan ustedes también?", answer: "Sí, arenamos piletas de hormigón para sacarles toda la pintura vieja y dejarlas listas para repintar o revestir. El pintado o el revestimiento no vienen incluidos: lo normal es que los haga tu pintor o tu piletero. Si preferís que lo hagamos nosotros, se presupuesta aparte." },
  { question: "¿Cómo saco la pintura vieja de la pileta?", answer: "El arenado es la forma más rápida y prolija: saca toda la pintura descascarada de una sola vez y deja el hormigón listo para repintar o revestir, sin lijar a mano." },
  { question: "¿Arenan camiones, tanques o estructuras en mi galpón?", answer: "Sí, es de los trabajos que más hacemos. Vamos con el equipo a tu galpón o predio y arenamos hierros, tanques, acoplados y estructuras grandes en el lugar." },
  { question: "¿Trabajan dentro de una obra en marcha?", answer: "Sí. Coordinamos con el encargado de obra, trabajamos por sectores y liberamos cada zona lo antes posible para no frenar el resto de las tareas." },
  { question: "¿Cuánto cuesta?", answer: "El precio depende de la superficie, el estado y el acceso. Hacemos una visita sin costo, lo vemos en persona y te pasamos un presupuesto claro." },
  { question: "¿Hacen visita antes de presupuestar?", answer: "Sí, la visita y el presupuesto son sin costo. Vamos, lo evaluamos y te enviamos el presupuesto en 1 a 2 días." },
  { question: "¿Cuánta experiencia tienen?", answer: "El oficio viene de familia: se aprendió trabajando, no en un curso. Uno de los arenadores del equipo lleva más de 20 años haciendo esto. Hoy trabajamos con dos equipos propios completos en obras, restauraciones, galpones, estructuras industriales y piletas." },
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
  "¿Qué espacio necesitan para el equipo?",
  "¿Pueden trabajar fines de semana o turnos extendidos?",
  "¿Hacen granallado o arenado certificado con normas?",
])

// FAQs específicas de la landing /arenado-de-fachadas (obra y restauración de
// edificios). Motor de cola larga: preguntas reales de un arquitecto, encargado
// de obra o dueño de un frente, no keywords disfrazadas de pregunta.
export const faqsFachadas: Faq[] = [
  { question: "¿Qué es el arenado de una fachada?", answer: "Lanzamos arena a presión sobre la pared o el frente para sacar la pintura vieja, la cal suelta o el revoque flojo de una sola pasada. Debajo queda la superficie limpia y pareja, lista para pintar o revestir de nuevo." },
  { question: "¿Sirve para sacar años de pintura vieja de un frente?", answer: "Sí, es uno de los usos más comunes: capas de pintura descascarada o mal adherida que a mano llevarían semanas, con arenado salen en una sola pasada." },
  { question: "¿Pueden recuperar ladrillo a la vista que quedó tapado con pintura o revoque?", answer: "Sí. El arenado saca la pintura o el revoque suelto del ladrillo sin romperlo. Cómo queda depende del estado del ladrillo debajo: en la visita lo vemos y te decimos qué esperar." },
  { question: "¿Cuánto tarda arenar una fachada?", answer: "Con paredes y fachadas —superficies planas y cómodas— cada equipo cubre alrededor de 100 m² por día. Si hay molduras, revestimientos duros o zonas de difícil acceso, se dilata. El plazo concreto te lo damos en la visita, con el frente a la vista." },
  { question: "¿Hacen mucho polvo? ¿Tenemos que tapar algo?", answer: "Sí, el arenado hace polvo y no se puede evitar. Nosotros no armamos ningún cerramiento: el cerramiento lo ponés vos o la obra, y en la visita te decimos exactamente qué conviene tapar y hasta dónde llega el polvo. Al terminar retiramos la arena gruesa; el polvillo fino no se saca del todo y durante unos días vuelve a aparecer un poco." },
  { question: "¿Pueden trabajar con la obra en marcha, sin frenar a las otras cuadrillas?", answer: "Sí, es como solemos trabajar: por sectores, coordinando con el encargado de obra qué zona liberamos primero para que el resto de las tareas siga sin esperarnos." },
  { question: "¿Necesitamos algún permiso si el frente da a la calle?", answer: "Puede hacer falta, sobre todo si el polvo puede llegar a la vereda o la calle. Es algo que resuelve quien contrata; nosotros coordinamos los horarios y los sectores según lo que se acuerde." },
  { question: "¿Ustedes pintan la fachada después?", answer: "No es lo que lideramos: te dejamos la superficie lista y lo normal es que la pinte tu pintor o tu contratista. Si no tenés a quién, lo podemos hacer nosotros, pero se presupuesta aparte del arenado." },
  { question: "¿Qué necesitan para trabajar en el frente?", answer: "Un lugar para dejar el compresor y la tolva, medianamente cerca de donde arenamos: la arena se carga al hombro desde el equipo, así que cuanto más lejos, más lento. También acceso al sector y alguien con quien coordinar los horarios." },
  { question: "¿Cuántos equipos tienen? ¿Pueden avanzar rápido en un edificio grande?", answer: "Tenemos 2 equipos propios completos —compresor, tolva y arenador con ayudantes— y ese es el tope: no prometemos más. En un frente grande, dos equipos trabajando por sectores en paralelo acortan bastante el plazo." },
  { question: "¿Y si el frente tiene rejas, balcones o estructuras metálicas con óxido?", answer: "También se arenan. El resultado en metal es igual que en cualquier hierro: queda limpio y parejo, pero donde el óxido comió se ve picado —el arenado saca el óxido, no rellena el metal. Lo coordinamos junto con el resto del frente." },
  { question: "¿Hacen visita y presupuesto antes de arrancar?", answer: "Sí, sin costo. Vamos, vemos el frente o la fachada y te pasamos un presupuesto claro antes de que decidas." },
]

// FAQs específicas de la landing /arenado-de-piletas (dueño de casa + contratista).
// Alimentan el acordeón y el JSON-LD FAQPage de esa página.
export const faqsPiletas: Faq[] = [
  { question: "¿Cómo saco la pintura vieja de la pileta?", answer: "Con arenado: es la forma más rápida de sacar toda la pintura vieja y descascarada de una pileta o piscina de hormigón y dejarla lista para repintar o revestir, sin rascar ni lijar a mano." },
  { question: "¿Qué es el arenado de una pileta o piscina?", answer: "Es como pasarle una lija potente: lanzamos arena a presión que barre la pintura vieja y todo lo que esté flojo, y deja el hormigón limpio y parejo, listo para la mano siguiente." },
  { question: "¿Ustedes pintan o revisten la pileta después?", answer: "Lo normal es que no: te la dejamos lista y el pintado o revestimiento lo hace tu pintor o tu piletero, con el material que elijas. Nuestro trabajo es el arenado. Ahora, si no tenés a quién, lo podemos hacer nosotros: se presupuesta aparte y la pintura la ponés vos o la compramos nosotros." },
  { question: "¿Cuánto tarda arenar una pileta?", answer: "Una pileta familiar estándar suele quedar lista en el día; las más grandes o muy descascaradas pueden llevar más. Te lo confirmamos en la visita, antes de arrancar." },
  { question: "¿Hacen mucho polvo? ¿Molesta a los vecinos?", answer: "Sí, el arenado genera polvo. En una pileta la mayor parte de la arena queda adentro del vaso, así que en la práctica casi nadie tapa nada. La regla igual es simple: tapá vos lo que no quieras que se ensucie, y en la visita te decimos qué conviene. Al terminar soplamos y retiramos la arena gruesa; el polvillo fino se sigue asentando unos días y después se va." },
  { question: "¿Queda bien para pintar o revestir después?", answer: "Sí, ese es el punto. Al sacar toda la pintura vieja, el hormigón queda parejo y limpio, que es justo lo que la pintura o el revestimiento nuevo necesita para agarrar y durar." },
  { question: "¿Cuánto sale arenar una pileta?", answer: "Depende del tamaño de la pileta y de cuánta pintura hay que sacar. Por eso la visita y el presupuesto son sin costo: vamos, la vemos y te pasamos un precio cerrado." },
  { question: "¿Conviene arenar la pileta en invierno?", answer: "Sí. En invierno hay turno inmediato, trabajás sin el apuro del verano y llegás a la temporada con la pileta lista para pintar o revestir." },
  { question: "¿Van a domicilio o tengo que llevar algo?", answer: "Vamos a tu casa u obra con nuestros equipos y compresores: no tenés que trasladar nada. De tu lado hace falta el acceso al lugar y un espacio para dejar el compresor y la tolva cerca de la pileta, porque la arena se carga al hombro desde el equipo hasta donde se trabaja." },
  { question: "¿Trabajan con contratistas o pileteros?", answer: "Sí, es de lo que más hacemos. Precio por obra, turnos rápidos y capacidad para varias piletas por temporada. Escribinos y armamos un acuerdo." },
  { question: "¿Sirve para cualquier pileta?", answer: "Trabajamos piletas y piscinas de hormigón pintadas: les sacamos la pintura y las dejamos listas para la nueva terminación. No sacamos revestimientos pegados como venecitas o mosaico, y no trabajamos piletas de fibra de vidrio. Si no estás seguro de cuál es la tuya, mandanos una foto y te lo decimos." },
]
