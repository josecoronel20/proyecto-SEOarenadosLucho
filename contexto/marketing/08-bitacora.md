# Bitácora de marketing

Registro cronológico (más reciente arriba) de todo cambio, experimento y decisión de marketing. Sin bitácora no se puede saber qué causó qué. Formato de entrada:

```
## AAAA-MM-DD — Título corto
- **Qué se hizo:**
- **Por qué / hipótesis:**
- **Resultado esperado y cuándo revisarlo:**
- **Resultado real:** (completar después)
```

---

## 2026-08-14 (5) — El anuncio prometía algo que la landing no decía

- **Qué se hizo:** antes de encender, se cruzó **cada promesa del copy de Ads contra lo que dicen hoy las landings en producción**. Nueve afirmaciones chequeadas en las 5 páginas de destino. Ocho coincidían. Dos no, y una de las dos caía justo en la campaña que se iba a encender primero.
- **🔴 El hallazgo:** el RSA del grupo `ag_marca` lleva el titular **"Oficio aprendido en familia"** y va a `/`. La home **no contaba esa historia en ninguna parte**. El texto destacado **"20 años de oficio"** tampoco estaba ni en `/` ni en `/servicios` — los destinos de las 3 campañas. El respaldo existía, pero publicado **solo en la FAQ**. Alguien que busca "arenados lucho" veía un aviso sobre oficio heredado y aterrizaba en una página que no lo mencionaba.
- **Por qué importa más de lo que parece:** el diagnóstico de la cuenta encontró el componente **"experiencia con la página de destino" en "Inferior al promedio" en el 100% de las keywords**. Un desajuste entre lo que promete el aviso y lo que dice la página es exactamente lo que ese componente mide. Y pasaba en el tráfico **más barato** de la cuenta, el de marca, que es gente que ya te busca por nombre y solo necesita confirmación de que sos confiable.
- **Segundo desajuste, autoinfligido ese mismo día:** al rehacer `/servicios` en el rediseño visual, la franja de datos pasó de **"2 equipos propios"** a **"Equipos propios"** — se perdió el número que el texto destacado del anuncio sí dice. Restaurado.
- **La solución:** nuevo componente `OficioFamilia` montado en **`/` y en `/servicios`**, con el **texto aprobado el 11/08, casi literal de la FAQ** — no se amplió ni se adornó. Incluye la cifra "20 años / de oficio" tabulada, que es la que hace juego con el texto destacado.
- ⛔ **Guardarraíl que queda en el código:** el componente lleva escrito por qué **nunca** se dice "20 años de experiencia", "en el mercado" ni "desde 200X". La cuenta tenía heredado "+20 años de experiencia", que es **falso** como antigüedad de la empresa (~8 años) y estuvo corriendo en todos los anuncios. "De oficio" habla de la gente que hace el trabajo y es verificable.
- **Verificación:** build limpio · el bloque renderiza en las dos páginas · detector con navegador en escritorio y celular sin hallazgos nuevos (los 13 que quedan son los dos falsos positivos ya evaluados) · confirmado en producción.
- ⚠️ **Nota de método:** el primer escaneo dio **0 hallazgos** y era mentira — el dev server se había caído y el detector leyó la nada. Se detectó porque 0 era sospechoso contra los 7 conocidos de la home. **Un cero siempre se contrasta con la corrida anterior antes de creerlo.**
- **Resultado esperado y cuándo revisarlo:** mejor "experiencia con la página de destino" en el componente de calidad, sobre todo en `ag_marca` y `ag_genericos`. **Revisar a los 30 días de encender**, en Calidad por componente. Ojo: el componente tarda en actualizarse y necesita volumen, así que antes de 30 días no dice nada.
- **Resultado real:** (completar)

## 2026-08-14 (4) — Rediseño visual completo: el sitio deja de parecer una plantilla

- **Qué se hizo:** se reemplazó **todo el sistema visual** del sitio, a pedido del dueño ("que el estilo en todo el sitio sea uniforme… auditoría completa por cada página"). Cuatro permisos dados de entrada: rediseño visual completo, tipografía a criterio, reescribir los textos de los casos, y mergear y desplegar al terminar.
- **El diagnóstico:** auditadas las 9 páginas con motor de navegador, escritorio y celular. **Convivían tres lenguajes visuales**: seis alturas de sección distintas, tres escalas de titular y tres formas de tarjeta. El denominador común eran **tarjetas de ícono + título + texto en cuadrícula** — el patrón que sale de cualquier generador. Para un negocio que vende **oficio**, leerse como hecho a máquina resta: es exactamente lo contrario de lo que se está vendiendo.
- **El mundo nuevo: catálogo de repuestos / manual de mantenimiento industrial.** Papel técnico frío, dos tintas y todo tabulado con filetes. La regla que lo gobierna: **se separa con filetes, no con cajas**. Entra más información en la misma pantalla y se lee como el papel que este oficio de verdad genera.
- **Tipografía: Archivo, de Omnibus-Type — una fundición de Buenos Aires.** Auto-alojada con `next/font`: sin pedido a Google, sin salto de texto y sin latencia de tercero. Antes la voz de display era la fuente del sistema, que para una página de marca es un default, no una decisión.
- **Color con contrastes MEDIDOS, no estimados** (la lección de la entrada anterior). La regla que no se negocia: **sobre naranja va texto tinta, nunca blanco** — blanco da 3,75:1 y AA pide 4,5:1; tinta sobre el mismo naranja da 4,85:1. El verde de WhatsApp queda como **único color ajeno al sistema, a propósito**: el naranja es el mundo, el verde es la acción.
- **Resultado del detector: de 116 hallazgos a 8 reales** (escritorio). Desaparecieron por completo `low-contrast` (26), `icon-tile-stack` (6), `side-tab` (4) y `nested-cards` (17).
- **Hallazgos que valían plata, no solo estética:**
  - El **header** tenía fondo semitransparente con desenfoque: el nombre de la marca medía **1,2:1** contra lo que pasara por detrás. Pasó a opaco.
  - El **carrusel de la home** tenía texto blanco sobre tarjeta blanca, legible solo gracias a la foto de fondo. Si la imagen tardaba o fallaba, quedaba invisible.
  - Se sacaron **1,1 MB de video decorativo** que se descargaban en el cierre de cada página.
  - Las **páginas legales** llegaban a **106 caracteres por renglón** — el hallazgo más repetido del sitio.
- **Copy: los cuatro casos industriales pasaron a criollo.** Estaban en lenguaje de pliego ("intervención de limpieza y preparación de superficie", "sustrato", "continuidad operativa"). Los casos son la prueba social que mira el que ya está decidiendo, y estaban escritos para un evaluador de licitación que no existe. **No se cambió ningún hecho**, y se verificó que no entraran promesas técnicas (cero menciones de sa3, iso 8501, metal blanco, granallado, certificado, garantizamos).
- **Invariantes intactos, verificados:** `contact_whatsapp` sigue siendo el único evento y sigue disparándose solo tras confirmar el diálogo; el número sigue partido en dos strings; un solo botón flotante; ninguna URL se movió (los slugs de los casos no cambiaron).
- **Documentación:** el sistema quedó en **`DESIGN.md`** en la raíz (fuente de verdad), el contrato de dirección como comentario en el `<body>` del layout (sobrevive en producción), y `CLAUDE.md` + `contexto/10` apuntando ahí. El `contexto/10` viejo quedó marcado como historia: **documentaba como patrón correcto un CTA que no pasaba contraste**.
- **Falsos positivos evaluados, no deuda:** 37 `cramped-padding` son todos el mismo caso — el detector marca cada ítem del acordeón de FAQ como texto pegado al filete; medido en el navegador, el disparador tiene **20px de padding arriba y abajo**. La regla mira el padding del contenedor y no el del hijo. Y 1 `clipped-overflow` es el `overflow-hidden` que Embla necesita para funcionar.
- **Resultado esperado y cuándo revisarlo:** el objetivo no es estético sino de conversión — que el sitio se lea como un oficio serio y que ninguna barrera de legibilidad frene el paso a WhatsApp. **Revisar a las 4 semanas de que las campañas estén encendidas**, comparando tasa de `contact_whatsapp` sobre sesiones contra el período previo. Ojo: no es un test limpio (las campañas arrancan en paralelo), así que la lectura es direccional.
- **Resultado real:** (completar)

## 2026-08-14 (3) — Escaneo de diseño: el botón de conversión no pasaba contraste

- **Herramienta:** detector de Impeccable con motor de navegador (puppeteer, `--save-dev`), sobre las páginas reales, en **escritorio y celular (390×844)**. Es el primer análisis del sitio **renderizado** de todo el proyecto: hasta ahora se había diseñado leyendo código.
- ⚠️ **El escaneo estático no alcanzaba:** sobre los archivos daba **cero hallazgos**. Verificado con un archivo de control con defectos a propósito: detectó 1 de 5. Sin navegador solo ve patrones de texto; contraste, jerarquía y render necesitan el motor real. **Un "cero" estático no es evidencia de nada.**
- **🔴 Hallazgo principal — el CTA de WhatsApp no pasaba WCAG AA.** Blanco sobre `green-600` (`#16a34a`) = **3,3:1**, y AA pide 4,5:1. Es **el botón de conversión del proyecto**, repetido en todas las páginas. → `green-700` (`#15803d`) = **5,0:1**.
- **🔴 Segundo contraste — el botón de los casos.** Blanco sobre `primary-400` (`#4787AF`) = **3,8:1**. → `primary-500` (`#18415A`) = **10,8:1**. ⚠️ `primary-400` como fondo de CTA **estaba documentado como el patrón correcto** en `contexto/10-estilos-y-design-system.md`: la guía producía botones que no pasaban. Corregida.
- **Otros arreglos:** el patrón *ícono en cuadradito arriba del título* (×5) — el detector lo marca como plantilla de generador de IA, y en un negocio que vende oficio leerse como hecho a máquina resta; pasó a **ícono al costado del título** · zoom en imágenes al pasar el mouse (×5), otra firma de UI generada, eliminado · medida de línea de hasta **96 caracteres** acotada a ~70 · aire en el acordeón de FAQ · degradado del hero reforzado (el píxel más claro pasó de 2,2:1 a 3,1:1, mediana 11,7).
- **Verificación (una tanda, una confirmación, y parar):** re-escaneo en escritorio y celular → **cero ocurrencias** de los cuatro problemas arreglados.
- **Lo que queda, evaluado y no tocado:** `#ffffff on #ffffff` (falsos positivos: texto sobre imagen, donde el análisis por píxel sí da bien) · `overused-font: roboto` (es el *system stack*, resuelve distinto por sistema operativo, y no cargar fuentes web es decisión tomada por LCP) · `nested-cards` (sin selector; sondeé el DOM y no encontré anidamiento real) · `cramped-padding` (el borde está en el contenedor y el aire lo ponen los hijos: sumar padding ahí duplicaría el espaciado).
- **Nota de entorno:** Impeccable pide **Node ≥22.18** y el entorno tiene **20.16**. Funcionó igual. `puppeteer` quedó como **devDependency** — no afecta el build de producción.

## 2026-08-14 (2) — Impeccable instalado + una tercera promesa falsa encontrada

- **Instalado `impeccable`** (npm, de Paul Bakaus, Apache-2.0): skills de diseño y detector de anti-patrones de UI para agentes. Quedó en `.claude/skills/impeccable/`. ⚠️ El paquete pide **Node ≥22.18** y el entorno tiene **20.16**; el instalador corrió igual, pero los scripts del detector pueden fallar.
- **Ejecutado `/impeccable init`** → **`PRODUCT.md` nuevo en la raíz**: la verdad de producto durable (usuarios, propósito, posicionamiento, contexto operativo, capacidades y límites, compromisos de marca, evidencia disponible, principios). Es la fuente que van a leer los comandos de diseño.
- **Tres datos confirmados por el dueño en la entrevista del init:**

| Pregunta | Respuesta | Consecuencia |
|---|---|---|
| ¿Qué saca el arenado en piletas? | **Solo pintura sobre hormigón** | 🔴 Ver abajo |
| ¿Hasta dónde viajan? | **CABA y GBA, radio ~60 km** | ✅ Confirma la geo que ya se cargó en las 3 campañas |
| ¿Quién contesta el WhatsApp? | **Hay alguien dedicado** | ✅ La promesa "respondemos rápido" se sostiene; es además un diferencial usable |

- **🔴 Tercera promesa falsa publicada, encontrada por la entrevista:** el sitio decía *"sacamos toda la pintura **o el revestimiento viejo**"*. **Falso**: no se remueven revestimientos adheridos (venecitas, mosaico) ni se trabajan piletas de **fibra de vidrio**. Estaba **en producción**, en 6 lugares del sitio, 2 del caso de éxito y 2 del copy de anuncios.
  - **Corregido** en `faqs.ts` (4), `arenado-de-piletas/page.tsx` (6, incluido el schema `Service`), `QueNecesitasArenar.tsx`, `projectsInfo.json` (3), `18-copy-ads.md` y `ads-config/06`.
  - **Se aprovechó para convertir el límite en filtro:** la sección "qué no hacemos" de la landing ahora declara los dos límites explícitos y cierra con *"si no sabés cuál es la tuya, mandanos una foto"* — el límite pasa a ser una invitación a escribir.
  - ⛔ **Regla:** nunca reintroducir "revestimiento viejo" como algo que se remueve. ✅ Sí es correcto "lista para pintar o revestir": describe lo que hace el cliente después.
- **Patrón, la tercera vez en esta cuenta:** una afirmación que nadie verificó, publicada, que el negocio no puede cumplir. Antes fueron las conversiones basura y los "+20 años de experiencia". **La entrevista de producto encontró en tres preguntas lo que ninguna auditoría de código iba a encontrar**, porque el código era coherente: decía consistentemente algo que era falso.
- **Verificación:** `npm run build` limpio. Los dos matches que quedan en `faqs.ts` son correctos ("el revestimiento **final** no lo hacemos", "el revestimiento **nuevo** necesita agarrar").
- ⚠️ **Pendiente de deploy:** estos cambios están en el branch, **no en producción**. Van con el próximo merge.

## 2026-08-14 — 🚀 TODO EL TRABAJO DESPLEGADO A PRODUCCIÓN (PR #4 mergeado)

- **🔴 Hallazgo del dueño, y grave:** *"quitamos el form pero en la página de contacto aún está el form"*. Tenía razón. **Ninguno de los 22 commits estaba publicado.** Producción seguía sirviendo el deploy del **27/07** (PR #3): formulario y Formspree activos, home vieja con el video de 24 MB, `/servicios` sin FAQ ni CTA de WhatsApp, y nada del copy nuevo.
- **Por qué era un bloqueante del encendido:** las 3 campañas apuntan a `/servicios` y `/arenado-de-piletas` esperando las páginas nuevas. Encender contra las viejas habría reproducido exactamente el problema que el diagnóstico marcó como **"experiencia con la página de destino: Inferior al promedio" en el 100% de las keywords** — el arreglo de mayor retorno de todo el trabajo.
- **Lección de método:** durante toda la sesión se verificó producción para el **tracking** (GTM, bundle, evento) y nunca se verificó que **los cambios propios estuvieran desplegados**. `npm run build` limpio y commits pusheados **no son** un deploy. **Verificar en producción lo que se cambió, no solo lo que se consulta.**
- **Ejecutado:** PR #4 mergeado a `main` (22 commits) → deploy de Vercel → **verificado en producción**:

| Verificación | Resultado |
|---|---|
| Formulario en `/contacto` | ✅ **eliminado** (sin `<form>`, sin honeypot, sin campos) |
| Bloque "Qué nos ayuda saber" | ✅ presente |
| Home: `<h1>` y orden de secciones | ✅ el h1 con keyword+zona y las 7 secciones en el orden del blueprint |
| `FAQPage` en home y `/servicios` | ✅ |
| `/servicios`: `<h1>` con keyword y zona | ✅ |
| Los ~100 m² con la condición | ✅ "En superficies planas y parejas…" en vivo |
| 11 rutas | ✅ todas **200** |
| 301 legacy | ✅ **308** a `/servicios`, `/arenado-de-piletas` y `/contacto`, **conservando la query string** (`gclid` intacto) |
| Número de WhatsApp contiguo | ✅ **no aparece en ninguna ruta** |

- **🔧 Corrección de fechas en el registro:** durante la sesión se "corrigieron" a 10/08 varias fechas que estaban bien en 02/08. El historial de git es la fuente: ese trabajo se hizo el **02/08**. Revertido en la bitácora, en los 4 archivos de `ads-config/`, en `contexto/03` y `12`, y en la fecha de revisión de la política de privacidad.
- **Estado:** el sitio en producción **es el que las campañas esperan**. Pre-flight de URLs y redirects ✅ cerrado.

## 2026-08-11 (7) — ✅ Medición verificada de punta a punta (el bloqueante del encendido)

- **Disparador:** la prueba manual de `contact_whatsapp` no aparecía en Tiempo real de GA4. Hipótesis inicial del dueño: *"el evento debe estar todavía atado a Framer"*.
- **Diagnóstico, paso por paso:**

| Eslabón | Cómo se verificó | Resultado |
|---|---|---|
| El sitio dispara el evento | `contact_whatsapp` y el número partido, encontrados **dentro del bundle JS publicado** en Vercel | ✅ |
| El sitio carga GTM | `GTM-W63ZV9D9` presente 4 veces + `dataLayer` inicializado, **y ningún otro analytics** (ni resto de Framer) | ✅ |
| El contenedor está publicado | Versión **5** (`form+emailConvertion`), publicada el **15/02/2026** | ✅ |
| El activador matchea | **Vista previa de GTM**: el evento llega y `GA4 – Evento contact_whatsapp` figura en *Etiquetas activadas — Activado 1 vez* | ✅ |
| La etiqueta apunta a la propiedad correcta | `Google Tag – GA4 Base` y la etiqueta de evento: ambas en **`G-3FPFJH0ZL3`**, que es el ID de medición del flujo de la propiedad **516818828** (la vinculada a Ads) | ✅ |
| GA4 lo registra como **evento clave** | Informe de eventos: `contact_whatsapp` = **2 eventos, 2 eventos clave (100%)** | ✅ |

- **Por qué no aparecía en Tiempo real:** con la **Vista previa de GTM activa, los eventos van a DebugView**, no a Tiempo real. Es una particularidad de GA4 que hace parecer rota una medición sana. La verificación correcta es DebugView (con vista previa) o `Informes → Interacción → Eventos` con rango "Hoy".
- **Dos hipótesis descartadas por el camino:** (1) que el contenedor nunca se hubiera publicado — el historial de actividades mostraba una sola línea, pero la pestaña Versiones probó que hay 5 versiones publicadas; (2) que el evento siguiera atado a Framer — el bundle publicado y la vista previa lo desmintieron.
- **🟠 Cabo suelto, no bloqueante:** la vista previa detectó **una segunda etiqueta de Google en la página, `G-S1N9PL0G40`**, que **no sale de ninguna de las dos etiquetas del contenedor**. Es una propiedad de GA4 recolectando en paralelo, probablemente resto de Framer. No afecta la medición de Ads (el evento va a `G-3FPFJH0ZL3`), pero hay que identificarla y sacarla en `GA4 → Administrador → Etiquetas de Google`.
- **Estado del pre-flight:** ✅ el bloqueante de medición queda **cerrado**. Falta el resto de la Parte B de `19-checklist-encendido.md` (URLs, cero amplia, nivel Cuenta vacío) y después el encendido escalonado.
- ⚠️ **Lo que esto todavía NO prueba:** que la conversión **llegue a Google Ads**. Eso solo se ve con tráfico pago, en el chequeo **D+1** — la conversión tiene que aparecer en la columna **"Conversiones"**, no solo en "Todas las conv.".

## 2026-08-11 (6) — ✅ Las 3 campañas construidas (ejecutado por el dueño)

- **Estructura completa, en pausa y sin saldo:**

| Campaña | Presup./día | Grupos | Keywords | Landing |
|---|---|---|---|---|
| `AR-Search-Obra-Industrial` | 3.000 | `ag_pymes-galpon-in-situ` · `ag_obra-restauracion-estructuras` | 42 | `/servicios` |
| `AR-Search-Piletas` | 1.250 | `ag_pileta-jerga` · `ag_pileta-sin-jerga` | 30 | `/arenado-de-piletas` |
| `AR-Search-General-Marca` | 750 | `ag_genericos` · `ag_marca` | 10 | `/servicios` y `/` |

- **6 RSA cargados** con el pinning por pools (3 titulares a posición 1, 3 a posición 2, 1 descripción fijada), copy de `18-copy-ads.md`.
- **Listas de negativas aplicadas con el ruteo correcto:** `NEG-EQUIPOS-DIY` y `NEG-DATA` a las 3 · **`RUTEO-PILETAS` solo a Obra-Industrial y General-Marca**. Verificado por la columna "Campañas" de la biblioteca compartida: **3 / 3 / 2**. El "2" es la prueba de que Piletas quedó afuera — aplicarla ahí habría apagado la campaña entera sin dar ningún error.
- **Cada grupo con su URL final explícita**, no heredando la home. Es el fix del componente "experiencia con la página de destino", que el diagnóstico encontró en **"Inferior al promedio" en el 100% de las keywords**.
- **Configuración de las 3:** redes destildadas · radio 60 km desde CABA en **Presencia** · solo español · AI Max OFF en campaña **y** en los 6 grupos · Maximizar clics con tope de CPC 350 · objetivos de la cuenta (solo Contactos) · sufijo UTM · exclusión de IP.
- **Decisión de puja registrada:** se arranca con **Maximizar clics + tope**, no con puja automática, porque no hay línea base de CPA válida. Se evalúa migrar a Maximizar conversiones recién con **≥15 conversiones limpias en 30 días**.
- **Estado:** las 3 **pausadas** y la cuenta **sin saldo**. Falta el pre-flight (`19-checklist-encendido.md` Parte B) y el encendido escalonado.
- **⭐ Bloqueante del encendido:** probar `contact_whatsapp` **de punta a punta**. Funciona en GA4 pero **nunca registró una conversión en Ads** por falta de tráfico pago. No se carga saldo sin esa prueba.

## 2026-08-11 (5) — Recursos heredados: una antigüedad falsa corriendo en todos los anuncios

- **Hallazgo:** la vista previa mostró texto que nadie del proyecto escribió — **"+20 años de experiencia"**, "Servicio de arenado móvil", "Limpieza profunda", "Resultado profesional" — más 5 sitelinks heredados, uno de ellos a **"Política de privacidad"**. Son **recursos a nivel CUENTA** heredados de la configuración anterior: se aplican solos a cualquier campaña, incluidas las nuevas.
- **🔴 El problema real: la antigüedad era falsa.** El dueño confirmó que **el negocio tiene ~8 años, no 20**. Estuvo corriendo en todos los anuncios sin que nadie lo supiera. ✅ **Verificado que el sitio nunca lo dijo:** la FAQ decía "años arenando…" sin número.
- **Contexto que aportó el dueño:** el oficio **viene del padre**, que trabajó de esto muchos años y hoy no está activo, y **uno de los arenadores del equipo trabajó con él y lleva más de 20 años en el rubro**. La experiencia existe; lo que no existe es la antigüedad de la empresa.
- **Decisión de copy:** se usa **"20 años de oficio"**, nunca "de experiencia" ni "en el mercado".
  - "+20 años de experiencia" **se lee como antigüedad de la empresa**: con 8 años de razón social hay que salir a explicarlo, y si un competidor lo reporta Google puede pedir respaldo.
  - **"20 años de oficio" habla de la gente que hace el trabajo** — verificable y cierto.
- **Se aprovecha la historia, que es mejor argumento que el número:** titular nuevo **"Oficio aprendido en familia"** en el RSA de marca (reemplaza a "Contestamos rápido"), y la FAQ del sitio "¿Cuánta experiencia tienen?" pasa de un genérico a contar el linaje: *"El oficio viene de familia: se aprendió trabajando, no en un curso. Uno de los arenadores del equipo lleva más de 20 años haciendo esto."* Ningún competidor puede copiar eso; "+20 años de experiencia" lo escribe cualquiera.
- **Acción pendiente:** borrar **todos** los recursos de nivel Cuenta (`Campañas → Recursos → filtro Nivel = Cuenta`).
- **Lección de método, la tercera del día:** un recurso heredado **no figura como algo que cargaste**, pero se publica igual. Es el mismo patrón que las conversiones basura y que la ficha vinculada: la cuenta arrastraba cosas que nadie puso a propósito y que **contradicen lo que el negocio hace**. **Auditar el nivel Cuenta es obligatorio antes de encender.**
- **Verificación:** `npm run build` limpio tras el cambio de la FAQ.

## 2026-08-11 (4) — Campaña 1 creada + la QUINTA puerta del teléfono

- **Ejecutado:** 3 listas de negativas compartidas creadas (`NEG-EQUIPOS-DIY`, `NEG-DATA`, `RUTEO-PILETAS` en frase) y **`AR-Search-Obra-Industrial` creada y pausada**, con el grupo `ag_pymes-galpon-in-situ` (18 keywords, frase y exacta), su RSA de 15 titulares y 4 descripciones con el pinning por pools, y la URL final en **`/servicios`** — no en la home, que era la causa raíz del "experiencia con la página de destino: inferior".
- **🔴🔴 Hallazgo — el teléfono tenía CINCO puertas.** La vista previa del anuncio mostró **botón "Llamar", botón "Ruta", la dirección "Del Viso · Abella Caprile 1246", el horario ("Open") y la categoría "Servicio de limpieza por chorro de arena"**. Nada de eso lo cargó nadie: **lo inyecta el Perfil de Empresa de Google vinculado a la cuenta de Ads**.
  - Es la puerta más difícil de ver porque **no es un asset propio**: no aparece en `Recursos` como algo que cargaste.
  - Apagar "Ubicaciones automáticas" en recursos automatizados (hecho el 11/08) **no la cierra**.
  - Contradice además el dossier del 26/07, que daba la ficha por **"sin reclamar"**: tiene dirección, horario y categoría cargadas.
  - **✅ Resuelto el 11/08 desde `Herramientas → Biblioteca compartida → Administrador de ubicaciones`** (la ruta `Administrador → Vinculación de datos` no existía en esta versión de la UI). La pestaña **Configuración** mostraba la fuente: *"Perfil de negocio: jossemaaria20@gmail.com — Se seleccionaron todos los lugares"*. **Ubicación quitada.**
  - ⚠️ **Corrección al dossier del 26/07:** decía que el Google Business Profile estaba **"sin reclamar"**. Es falso — está reclamado bajo `jossemaaria20@gmail.com`, con dirección (Del Viso, Abella Caprile 1246), horario y categoría cargadas, y **vinculado a Ads**. Esto cambia también el plan de `12-google-business-profile.md`, que arranca por "reclamar la ficha": ese paso ya está hecho.

- **🔴 Hallazgo extra en la misma pantalla — la SEXTA puerta: "Rich media propiedad de Google" estaba TILDADO.** Permite que Google **inserte fotos y videos de su propio banco de imágenes** en los anuncios de la cuenta.
  - Es especialmente dañino para **este** negocio: todo el argumento de venta es *"mirá cómo quedó, son fotos reales de trabajos que hicimos"*. Una foto de stock genérica destruye esa credibilidad y además genera una expectativa que el trabajo real no tiene por qué coincidir.
  - **Destildado el 11/08.** (La casilla vecina, "Fotos del comercio del Perfil de Negocio", ya estaba destildada.)
- **Trampas del asistente de creación, documentadas:** (a) la pantalla "Generación de palabras clave y recursos" (BETA) es **otra vía de generación automática de texto** — no usarla; si el campo de descripción es obligatorio, llenarlo con un texto que **declare los NO** (no pintamos, no granallado) para acotar lo que la IA pueda extrapolar; (b) las keywords sugeridas por Google incluían **"pintura industrial"** y "recubrimientos industriales", servicios que el negocio no presta; (c) la URL final venía por defecto en la **home** en las tres pantallas; (d) aparecen **5 sitelinks heredados a nivel cuenta** de la cuenta vieja, a auditar.
- **Sobre la "Calidad del anuncio: deficiente":** esperado y aceptado. No entra en el Ad Rank ni en el Nivel de calidad (documentado por Google), y baja por el pinning deliberado. **Además faltan cargar los recursos**, que suman al cálculo: debería subir al cargarlos. Se prefiere garantizar que el aviso diga "no pintamos" y "visita sin costo" antes que la barrita.
- **Resultado real:** _(completar al cerrar la vinculación del GBP)_

## 2026-08-11 (3) — Recursos automatizados apagados + DOS puertas nuevas descubiertas

- **Qué se ejecutó:** apagados 6 de los 10 recursos automatizados a nivel de cuenta.
- **🔴🔴 Hallazgo 1 — el teléfono tenía CUATRO puertas, no tres.** Al abrir la pantalla real apareció **"Llamadas dinámicas: Activado"**: Google **crea recursos de llamada por su cuenta**, además de la extensión (quitada el 28/07), los informes de llamadas (apagados el 10/08) y el recurso de ubicación. Teníamos el problema documentado como "cerrado" con tres puertas y faltaba una. **Apagada.**
- **🔴🔴 Hallazgo 2 — una vía de generación de texto fuera de AI Max.** **"Títulos de anuncio más extensos: Activado"**: Google **escribe y alarga titulares**. El proyecto tenía identificados tres lugares de generación automática (AI Max, recursos automatizados, auto-apply) y este vivía dentro del segundo sin estar enumerado. Era una vía real para que se colara "granallado" o "metal blanco". **Apagada.**
- **Apagadas también:** fragmentos estructurados dinámicos, imágenes dinámicas, ubicaciones automáticas y aplicaciones automáticas (no hay app).
- **Dejadas encendidas a propósito:** *Calificaciones del vendedor* (estrellas de reseñas verificadas por Google — no puede inventar nada y suma cuando haya reseñas) y *Nombres y logotipos de empresas dinámicos* (identidad, no copy; además el asset manual manda por encima). *Vínculos dinámicos a sitios* ya estaba en OFF.
- **Criterio que queda como regla:** se apaga **todo lo que pueda escribir texto, mostrar el teléfono o elegir imágenes**; se deja lo que solo muestra identidad o reseñas verificadas.
- **Lección de método:** la lista de recursos automatizados que teníamos documentada (del diseño de julio) **estaba incompleta** frente a la pantalla real. Corregido `ads-config/06-anuncios-recursos.md` §6.5 con los 10 tipos reales y el checklist mensual con las 4 puertas del teléfono. **No dar por buena una enumeración de la UI de Google sin verla en la cuenta.**
- **Resultado esperado:** Google no puede agregar botones de llamada, escribir titulares, elegir imágenes ni mostrar la dirección.

## 2026-08-11 (2) — Copy de Ads aprobado + los dos datos de plazo resueltos (Claude Code)

- **Qué se hizo:** `18-copy-ads.md` (nuevo) — fuente única del copy publicado, versionada fuera de Google. Consolida y **revisa** el borrador del 29/07 contra el sitio rediseñado y contra el informe de términos.
- **Bloqueantes resueltos midiendo los archivos del repo:**
  - **Logo:** `public/images/favicon.png` es el logo en **1906×1911** (supera el recomendado de 1200×1200). Los `logo-solo-*` son 423×226, apaisados, no servían. El recurso de nombre y logo queda desbloqueado.
  - **Fotos:** las de trabajo son **828×828** — por encima del mínimo de Google (300×300). Usables. Hay material de alta resolución (3148×3148 y 3472×4624) si hiciera falta recortar con calidad.
- **⭐ Dato del dueño que cambió una decisión — los ~100 m²/día son CONDICIONALES:** *"es un número en condiciones óptimas… una superficie plana y no estructuras metálicas complejas; tampoco revestimientos demasiado resistentes, en esos casos se dilata más."*
  - **Decisión: va en el SITIO con la condición, y NO en los anuncios.** En 30 caracteres no entra la aclaración, y **el segmento donde no aplica —estructuras metálicas complejas— es justo el más rentable** (PYME con galpón). Sería prometer velocidad a quien menos se le puede garantizar.
  - Aplicado en `AlcanceOperativo` de `/servicios` y en la FAQ "¿Cuánto tardan?", separando explícitamente superficie plana de estructura compleja.
  - **Beneficio lateral:** pre-califica. El que tiene una estructura compleja llega al WhatsApp con la expectativa correcta.
- **Pileta = un día: confirmado y SÍ va al anuncio.** Dato limpio, sin condición. Se suma el titular "Tu pileta lista en el día" a `ag_pileta-jerga`, **sin fijar**. No se suma a `ag_pileta-sin-jerga`: ahí el visitante no conoce la palabra "arenado" y el mensaje tiene que ser el problema, no el plazo.
- **Otras dos revisiones del copy:** se agregó un **titular de precio** en 3 RSA (el informe mostró 15 consultas de precio sin respuesta), y el grupo de **genéricos pasa a apuntar a `/servicios`** en vez de a la home — es exactamente lo que Google penalizaba como "experiencia con la página de destino inferior".
- **Verificación:** script sobre el archivo → **cero términos prohibidos** en el copy y conteo de caracteres correcto en las 90 filas. `npm run build` limpio tras los cambios del sitio.
- **Resultado esperado:** anuncios que prometen solo lo que el negocio sostiene, y una página que responde exactamente lo que el anuncio dice — el componente de calidad que estaba en "Inferior al promedio" en el 100% de las keywords.
- **Resultado real:** _(completar tras el encendido)_

## 2026-08-11 — Sesión 1: fundaciones de la cuenta (ejecutado por el dueño)

- **🟢 Hallazgo que acorta el plan: la verificación de anunciante YA ESTÁ COMPLETA.** Verificado por captura: las 4 tareas cerradas entre el 31/10 y el 07/11/2025, y el panel muestra **"Advertiser identity verified"**. Era **el único trámite del plan con semanas de espera** y bloqueaba el recurso de nombre y logo del negocio. **Deja de ser camino crítico.**
- **Detalle registrado:** el anunciante figura como **"Jose Coronel"** (persona física), ubicación AR — no como "Arenados Lucho". Quien toque "Acerca de este anunciante" en un aviso verá el nombre personal. **Se deja así a propósito:** cambiarlo exigiría rehacer la verificación como organización (semanas + documentación societaria) para un beneficio cosmético. ⛔ **Nunca tocar "Restablecer verificación".**
- **Resto de la sesión (reportado por el dueño, sin captura):** campaña `busqueda-arenadoIndustrial` **pausada**; moneda **ARS** y zona horaria **Buenos Aires** confirmadas (los dos únicos parámetros irreversibles); accesos sin usuarios ni MCC desconocidos; 2FA en la cuenta de Google.
- **Menor, abierto:** los **"2 borradores en curso"** que aparecían en la vista de Campañas siguen sin identificar. No bloquean nada; revisar antes de crear las campañas nuevas para no confundirlos con las nuevas.
- **Estado del plan tras esta sesión:** de las 8 sesiones de construcción, **quedan cerradas la 1 (fundaciones), la 2 parcialmente (blindaje) y la 3 (medición)**. La cuenta ya no puede gastar mal: sin campañas activas, sin permisos de Google sobre las pujas, con una sola conversión limpia y 37 negativas permanentes.
- **Resultado real:** _(completar al construir las campañas)_

## 2026-08-10 (6) — Sesión de medición: una sola conversión limpia (ejecutado por el dueño)

- **Datos confirmados:** propiedad GA4 `516818828` · **vinculada a Ads** ✅ · etiquetado automático ON ✅ · acceso de publicación a GTM ✅.
- **Decisión de diseño (reemplaza el paso 14 del plan):** **no se creó una acción de conversión nueva.** La cuenta ya tenía `Arenados Lucho SEO (web) contact_whatsapp` importada de GA4 y funcionando; crear una segunda etiqueta para el mismo clic habría producido **doble conteo** — la señal de alarma #13 del propio plan. Se conservó la existente y se le corrigieron los parámetros. Fundamento y contras en `17-diagnostico-cuenta-10-08.md`.
- **Qué se ejecutó:**
  1. Objetivo **"Clientes potenciales de llamada telefónica" → Cuenta predeterminada: Desactivado**.
  2. Objetivo **"Enviar formularios de clientes potenciales" → Desactivado**.
  3. Objetivo **"Contactos" → se mantiene Activado** (es donde vive el WhatsApp).
  4. `contact_whatsapp`: **ventana post-clic 90 → 30 días**; categoría Contacto.
  5. **GA4:** desmarcados como evento clave `form_submit`, `close_convert_lead` y `qualify_lead` — no existen en el código del sitio. Queda **`contact_whatsapp` como único evento clave con datos**.
- **🔧 Limitación de la UI, confirmada y documentada:** las acciones con fuente **"Alojada en Google"** y **"Llamadas desde anuncios"** (`Clicks to call`, `Smart campaign map clicks to call`, `Smart campaign ad clicks to call`) **no se pueden pasar a Secundaria**: el desplegable queda gris. Ya había pasado el 26/07 con las de "Local actions". **Tampoco se puede degradar la única acción de un objetivo** (Google exige ≥1 principal por objetivo) — de ahí que la salida sea **apagar el objetivo entero**, no la acción.
- **Por qué igual queda limpio:** el objetivo "Contactos" está acotado a *sitio web + llamadas desde anuncios*, y la columna "Incluida en los objetivos de cuenta" muestra **No** para las dos acciones "Alojada en Google". La única incluida además de `contact_whatsapp` es `Smart campaign ad clicks to call`, que **solo se dispara desde campañas inteligentes** — no hay ninguna y no se van a crear. Sumado a la extensión de llamada quitada y a Informes de llamadas en OFF, **no queda vía por la que entre una llamada**.
- **Protección definitiva:** las 3 campañas nuevas se crean **sin ningún recurso de llamada** (ya es regla del diseño).
- **Decisión: se descarta la exclusión de datos** (paso 19 del plan). Tenía sentido para reutilizar la campaña vieja; como se pausa y se construyen campañas nuevas —que arrancan sin historial y con *Maximizar clics*, no con puja automática— el aprendizaje sucio no se hereda. Agregarla solo sumaría superficie de error.
- **⚠️ Pendiente de verificación:** captura de la pestaña **Objetivos** completa.
- **Resultado esperado:** cuando entre saldo, Google optimiza hacia **gente que escribe por WhatsApp** y nada más.
- **Resultado real:** _(completar al verificar)_

## 2026-08-10 (5) — Sesión 0: blindaje de la cuenta (ejecutado por el dueño)

- **Verificado antes de ejecutar:** `Administrador → Config. de la cuenta → Palabras clave negativas` estaba **VACÍA**. ✅ `pileta`/`piscina` **nunca estuvieron bloqueadas** (peor escenario descartado). 🔴 Pero tampoco había ninguna protección permanente, y las 20 negativas de empleo del 28/07 viven **solo dentro de la campaña vieja** — se perderían al pausarla.
- **Qué se ejecutó (reportado por el dueño):**
  1. **37 negativas cargadas a nivel CUENTA**: bloque técnicas (granallado y familia, shot blasting, sa3, iso 8501, metal blanco, perfil de anclaje, rugosidad, st 2), bloque servicio equivocado (decapado químico/electrolítico/pasivado) y bloque empleo (16 términos).
  2. **Informes de llamadas → Desactivado.** Última de las tres puertas por las que podía volver a aparecer el teléfono.
  3. **Auto-apply de ofertas → 4 destildadas** (Maximizar conversiones · Max conv. con CPA objetivo · Establecer un CPA objetivo · Ajustar objetivos de CPA). Debe quedar 0 de 14 y 0 de 7.
- **Decisiones de criterio del listado:**
  - ⛔ **`pileta`/`piscina` jamás** a nivel cuenta.
  - ⛔ **`decapado` a secas, NO** — solo las frases de decapado químico. "Decapar la pileta" es parte del gap sin jerga del negocio.
  - ⛔ **`pintores` NO se bloqueó**, aunque aparecía en el informe de términos: un pintor que busca quién le arene antes de pintar es el mismo perfil de aliado recurrente que el piletero o el contratista. Bloquearlo cerraría una puerta buena.
  - `curso`, `tutorial`, `casero`, `arenadoras en venta` y familia van en la lista compartida `NEG-EQUIPOS-DIY` (Sesión 2), no a nivel cuenta.
- **⚠️ Pendiente de verificación por captura.** No se da por hecho hasta verlo: el 28/07 registramos "idiomas corregido a solo Español" y el 10/08 apareció en "Inglés y Español". Este es el modo de falla concreto de esta cuenta.
- **Resultado esperado:** ninguna campaña —presente o futura— puede volver a comprar tráfico de granallado, normas técnicas ni empleo; y Google pierde el permiso para tocar la estrategia de puja.
- **✅ Resultado real (verificado por captura el 10/08/2026):**
  - `Palabras clave negativas: **37 de 1.000**` — cargadas.
  - `Anuncios de llamada: **Informes de llamadas desactivados**` — cerrada la tercera puerta del teléfono.
  - `Aplicación automática → Ofertas`: **las 10 casillas de la familia Ofertas destildadas**, incluidas las 4 que estaban activas. Google ya no puede tocar la estrategia de puja ni el CPA.
  - Dato extra visible: `Condiciones de Clic para llamar: Rechazada` (correcto, no se habilita).

## 2026-08-10 (4) — Sesión de profundidad #1: diagnóstico de la cuenta (Claude Code)

- **Qué se hizo:** el dueño aportó **14 capturas + el informe de términos de búsqueda** (126 páginas, 10 dic 2025 – 10 ago 2026). Diagnóstico completo en **`17-diagnostico-cuenta-10-08.md`** (nuevo), que **reemplaza al dossier `10-…` como foto vigente** de la cuenta.
- **🔴 Hallazgo #1 — Auto-apply de OFERTAS está ENCENDIDO:** 4 recomendaciones tildadas en "Expande tu empresa", todas de la familia Ofertas (Maximizar conversiones, Max conv. con CPA objetivo, Establecer un CPA objetivo, Ajustar objetivos de CPA). **Google puede cambiar la estrategia de puja y el CPA solo.** Nunca habíamos auditado esta pantalla. Explica de dónde salió el tCPA de 8.204,88: lo puso Google, no el dueño — y lo va a volver a poner mientras sigan tildadas.
- **🔴 Hallazgo #2 — Medición podrida:** 9 de 10 acciones de conversión son **Principales**, con **3 objetivos predeterminados de cuenta** activos. **6 de las 7 conversiones del último mes son `Local actions - Other engagements`** (86% ruido). `contact_whatsapp` existe y está en Principal pero **nunca registró una conversión** — es la única conversión del proyecto y no hay evidencia de que dispare.
- **🔴 Hallazgo #3 — IA Max hizo el 45% de los términos:** 277 de 609 filas vinieron por "Coincidencias expandidas de IA Max" — concordancia amplia encubierta, con prueba empírica. Trajo **granallado (15 términos)**, **técnicos (metal blanco, ISO 8501, shot blasting)**, **pintura industrial** y **decapado químico**: todos servicios que el negocio NO presta. Está apagado desde el 28/07, pero **todo el aprendizaje de puja se construyó sobre ese tráfico**.
- **🔴 Correcciones a nuestra propia bitácora:** el 28/07 registramos "idiomas ✅ corregido a solo Español" — **está en "Inglés y Español"**, no se aplicó o se revirtió. Y el inglés + IA Max trajo consultas en inglés (`industrial coatings`, `industrial cleaning`). También sigue **ENCENDIDO** `Informes de llamadas` (tercera puerta del teléfono).
- **🟠 Hallazgo de calidad, el más accionable:** **"Experiencia con la página de destino: Inferior al promedio" en el 100% de las keywords**, mientras "Relevancia del anuncio" es "Superior" en casi todas. Los anuncios están bien; **el destino está mal**: todo hereda la URL de campaña, que apunta a la **home**. Con `/servicios` y `/arenado-de-piletas` ya construidas, **rutear por grupo es el fix de mayor retorno de todo el diagnóstico**.
- **🟢 Oportunidades encontradas:** hay **demanda real de piletas cayendo en la campaña industrial** (`arenado de piletas`, `arenado de piletas precio`) — y `pileta` no está bloqueada a nivel campaña. Y **15 términos de PRECIO** (`arenado precio`, `cuanto sale arenar`, `valor m2 de arenado`): la consulta más comercial que existe, sin ninguna respuesta en el sitio.
- **Nuance importante:** `decapado` **no se puede negativizar a secas** — el decapado químico/pasivado es servicio equivocado, pero "decapar la pileta" es parte del gap sin jerga. Van negativas de frase específicas.
- **Decisión que queda confirmada:** la campaña `busqueda-arenadoIndustrial` **se pausa** (Fase 3 del roadmap). Arrastra tCPA puesto por Google, idiomas mal, geo mal, negativas que no se heredan y aprendizaje construido sobre tráfico de IA Max. Limpiarla cuesta más que construir.
- **Pendiente:** 5 capturas (negativas de **cuenta** ← bloqueante, opciones de ubicación, fila de DSA, historial de auto-apply, los 2 borradores) y **reexportar los términos en CSV** para poder rankear por gasto.
- **Resultado real:** _(completar tras la sesión de correcciones)_

## 2026-08-10 (3) — Roadmap maestro de implementación de Ads (Claude Code)

- **Qué se hizo:** `16-roadmap-implementacion-ads.md` (nuevo) — el secuenciador de las **11 fases** de la cuenta. No duplica el detalle (que vive en `ads-config/08` y `14-…`): lo **ordena contra el estado real**, con estado, dependencias, duración y quién hace cada cosa.
- **Por qué hacía falta:** existían el diseño (8 partes) y el paso a paso (8 sesiones), pero **ninguno reconciliaba con lo ya hecho en la cuenta** el 26 y 28/07. Sin eso el riesgo era rehacer trabajo o, peor, tocar sueltos los 3 pendientes del 28/07 sobre una campaña que quizás se pause.
- **Reconciliación (Fase 0):** ya están hechos el tope de gasto, los 3 scripts de lectura + guardián, la extensión de llamada quitada, las negativas de empleo, Display/Socios OFF, AI Max OFF e idiomas. **Siguen abiertos:** los objetivos de conversión de la campaña (destildar llamadas **y** formularios), la geo ("Provincia de Buenos Aires" con "presencia **o interés**") y el tCPA sucio de 8.204.
- **Decisión que queda planteada (Fase 3):** qué pasa con `busqueda-arenadoIndustrial`, que sigue ENABLED y recibió arreglos el 28/07 aunque el plan del 29/07 dice construir 3 campañas nuevas. **Recomendación: pausarla como archivo** — el historial de calidad vive a nivel cuenta y dominio, no de campaña, y esa campaña mezcla intenciones que el plan separa a propósito. **A confirmar con el dueño.**
- **Camino crítico identificado:** los **10 datos bloqueantes** (Fase 1) y la **sesión de capturas** (Fase 2). El dossier es del 26/07 y la cuenta cambió el 28/07: se construye sobre una foto vieja si no se actualiza.
- **Contexto que cambió a favor:** el sitio se rediseñó el mismo día (entrada anterior). La **experiencia con la página de destino** —uno de los 3 componentes del Nivel de calidad— debería medir mejor que en el dossier: hay CTA de WhatsApp en todas las páginas, FAQ con schema en home y `/servicios`, y el video de 24 MB salió del camino crítico.
- **Resultado esperado:** construir la cuenta entera (≈5 h de sesión guiada) **sin saldo cargado**, para que ningún error de configuración cueste plata.
- **Resultado real:** _(completar a medida que se ejecute cada fase)_

## 2026-08-10 (2) — El sitio rediseñado desde cero y ejecutado (Claude Code)

- **Qué se pidió:** "creá la estructura perfecta del sitio perfecto en base a nuestro objetivo y contexto, olvidá el sitio actual; después compará y editalo por completo".
- **Método:** blueprint desde la hoja en blanco → auditoría del sitio actual contra él → ejecución. Todo en `15-sitio-ideal.md` (nuevo).
- **El hallazgo de fondo:** la **arquitectura de rutas ya era la correcta** — el problema era la ejecución. El sitio estaba construido como **folleto institucional** (hero gigante, secciones informativas, "contactanos" al final) cuando el negocio necesita una **máquina de abrir WhatsApp**.
- **Los 5 problemas que más costaban plata:**
  1. **El CTA de cierre de 3 páginas prometía WhatsApp y no abría WhatsApp**: botón "Contactanos" con ícono de documento que iba a `/contacto`, con el texto de abajo diciendo "Escribinos por WhatsApp". Mismo patrón roto en `/preguntas-frecuentes`.
  2. **Ninguna página fuera de piletas y contacto tenía un CTA de WhatsApp** — la única conversión del proyecto dependía del botón flotante.
  3. **La home no explicaba qué es el arenado antes del fold** (hero a `100vh`), justo el segmento que no conoce la palabra.
  4. **Ruteo sin salida:** todo lo que no era galpón ni pileta se perdía.
  5. **El `<h1>` de la home era un subtítulo en `text-base`** mientras la marca era un `<p>` de `text-7xl`.
- **Qué se ejecutó:** `CTASection` abre WhatsApp con mensaje por página + bloque "qué nos ayuda saber" · CTA de WhatsApp en Header (desktop y mobile) y Footer · **`src/lib/wpp.ts` nuevo** con 6 mensajes pre-cargados por intención · home reordenada al recorrido del visitante con `QueNecesitasArenar` (ruteo por trabajo, con salida a WhatsApp para "otra cosa") · `TrustBar` con hechos en vez de lenguaje de pliego · componentes nuevos reutilizables `ComoTrabajamos`, `ZonasCobertura`, `FaqCorta` · **`FAQPage` en home y `/servicios`** · `/servicios` con h1 con keyword+zona y CTA por grupo · "Mitigación de riesgo" → "Lo que siempre nos preguntan" · 7 componentes a Server Component · 3 archivos muertos eliminados.
- **Decisión de performance (reversible):** el **video del hero (24,3 MB, sin comprimir) salió del camino crítico** — el fondo ahora es una foto real con `priority`. En 4G la home quedaba en blanco varios segundos con tráfico pago rebotando antes de ver nada. **Vuelve cuando pese < 3 MB.**
- **Decisión de arquitectura:** **no se crearon rutas nuevas.** Una landing por partido sería un *doorway* delgado que diluye la autoridad de las 3 páginas que importan; la señal local se cubre con una sección de zonas en texto + el GBP. Se nombran **agrupaciones, no partidos**: prometer zonas que después se rechazan quema leads.
- **Verificación:** `npm run build` limpio (17 rutas) · un solo `<h1>` por página, todos con keyword · `contact_whatsapp` y GTM intactos · **el número no aparece contiguo en ningún HTML generado** · HTML servido revisado página por página.
- **Resultado esperado y cuándo revisarlo:** más `contact_whatsapp` por sesión (el CTA dejó de estar a un salto de página) y mejor calidad de lead (mensaje pre-cargado por intención). Medir a las 2–4 semanas post-deploy; con Ads encendido, mirar también la tasa de conversión de `/servicios`.
- **Resultado real:** _(completar)_

## 2026-08-02 — Higiene documental: el repo alineado al canal único WhatsApp (Claude Code)

- **Qué se hizo:** barrido completo de la deuda documental que dejó la decisión del 28/07 (canal único WhatsApp). El repo tenía **226 menciones a `form_submit*` / `contact_email` / Formspree / `EmailBtn` en 34 archivos**, muchas describiéndolos como **vigentes** — riesgo real de que un asistente futuro reconstruyera el formulario o reconfigurara Ads contra eventos muertos. Quedaron 48, todas marcadas como *eliminado/obsoleto* o dentro de registros históricos.
  - **Reescritos completos:** `contexto/05-formularios-y-conversion.md` (ahora "Conversión y canales de contacto"), `06-tracking-y-analytics.md`, `09-api-y-servicios.md`, `12-seguridad-y-validaciones.md` y `03-rutas-y-paginas.md` (documentaba 4 casos, sin `/arenado-de-piletas`, con el banner de "pivote en curso" ya cumplido).
  - **Correcciones puntuales** en `contexto/` 01, 02, 04, 07, 08, 10, 11, 13, 14, 15, 16, 17, 19, 20 y README; y en `marketing/` 01, 05, 07, 09, 10, 11, 13.
  - **ADR-019 nuevo** en `18-decisiones-tecnicas.md`: "Canal único WhatsApp — se elimina el formulario", que **anula ADR-007** (Formspree). Es la fuente única de la decisión.
  - **`ROADMAP.md` reconstruido:** Fase 1 estaba con los pasos 3, 4 y 5 sin tildar aunque ya estaban hechos y mergeados. Ahora Fase 1 = ✅ completa; Fase 2 (Search Console, conversiones limpias, GBP, apex→www) = AHORA; Fase 3 reescrita para apuntar a las **8 sesiones** de `ads-config/08-…` en vez del plan viejo.
  - **Notas de "deuda documental"** de `ads-config/` 01, 02 §2.18, 03 y 08 marcadas como resueltas.
- **Decisiones de criterio:** los **registros históricos no se reescriben** — las entradas viejas de esta bitácora y el volcado crudo de la cuenta en `10-cuenta-ads-auditoria.md` §4.5 conservan las menciones porque documentan lo que había, no lo que debe haber. §4.7 de ese dossier quedó marcada como superada por el plan de 8 sesiones.
- **Páginas legales actualizadas (mismo día):** `/politica-de-privacidad` y `/terminos-y-condiciones` describían la recolección de datos por formulario y la cesión a un procesador tercero — **falso desde el 28/07**. Ahora declaran que el sitio no tiene formularios ni pide datos, que el contacto ocurre dentro de WhatsApp (bajo las políticas de Meta), que la medición no recibe nombre/teléfono/email, y que se puede pedir el borrado de la conversación. De paso se corrigió un **bug de render**: el bloque "Correo electrónico" del responsable mostraba la etiqueta **sin ningún valor**, y en "Derechos" la frase cortaba en "enviando un correo a nuestros email." Ambos ahora leen `BUSINESS.email` de `siteConfig.ts`. Fechas de revisión actualizadas. ⚠️ **El dueño debería dar una lectura final**: es texto legal y lo escribió Claude.
- **Otros hallazgos del barrido:** `HeroSecondaryCTA` sigue huérfano (no se monta en ningún lado); el bug "validación servidor / spam" se cerró **por diseño** (sin formulario no hay input que validar); **`npm run lint` está roto** con Next 16 (`next lint` fue removido) — la verificación real hoy es `npm run build`.
- **Verificación:** `npm run build` limpio (17 rutas). Cambio 100% documental salvo lo que ya venía sin commitear.
- **Por qué / hipótesis:** el sistema de contexto es el que gobierna lo que hace cualquier asistente sobre este proyecto. Documentación que describe como vigente algo que se eliminó es peor que no tener documentación: dirige el trabajo en la dirección equivocada con confianza.
- **Resultado esperado:** que la próxima sesión de Ads (sesiones 1–8) y cualquier cambio de código arranquen desde un mapa que coincide con la realidad.

## 2026-07-29 — Mapa completo de la cuenta de Ads diseñada DESDE CERO (Claude Code)

- **Qué se hizo:** a pedido del dueño ("diseñá toda la configuración desde 0, como si la cuenta estuviera vacía, con criterio de paid media manager 2026"), se investigó el estado del arte de Google Ads 2026 (6 frentes: estructura, conversiones, pujas, configuración de campaña incl. **IA Max**, anuncios/recursos, controles) y se diseñó el **mapa completo de la cuenta objetivo**: `14-configuracion-objetivo-ads.md` (índice) + carpeta `ads-config/` con 8 partes (3.706 líneas).
- **Contenido destacado:** medición antes que campañas · una sola conversión primaria (`contact_whatsapp`) · **105 titulares + 28 descripciones listos para pegar** con caracteres verificados y sin términos prohibidos · política de pinning como control de compliance · IA Max/personalización de texto/recursos automáticos **apagados** (con copy prohibido no se puede dejar escribir a Google) · pujas por fases con umbrales medibles · plan de implementación paso a paso + checklist pre-flight.
- **Decisión de diseño:** se **conserva la cuenta 953-841-6905** (moneda ARS y zona horaria ya correctas = los únicos parámetros irreversibles) y se reconstruye toda la estructura adentro; las campañas viejas quedan pausadas como archivo. Se agrega **exclusión de datos** para el período de medición sucia.
- **Hallazgo que cambia el plan:** la cuenta arrastra **11 acciones de conversión, 7 marcadas como primarias** (visitas al sitio, engagements, 4 de llamadas). Por eso **no hay línea base de CPA válida**: el CPA histórico (~8.790) y el tCPA cargado (8.204) hay que descartarlos, no ajustarlos.
- **Verificación hecha:** conteo de caracteres de los 133 assets de anuncio (0 excesos), cero términos prohibidos en el copy (solo aparecen como negativa/advertencia), cero referencias a Formspree, y las acciones de conversión citadas contrastadas contra el dossier real.
- **Pendiente antes de implementar:** bloqueantes listados en el índice (ID de GA4 y vínculo con Ads, etiquetado automático, partidos reales del GBA, si la cuenta arrastra `pileta/piscina` como negativa vieja, piletas de fibra vs hormigón, confirmar los ~100 m²/día del copy, ticket promedio y tasa de cierre).
- **Resultado esperado:** construir la cuenta parte por parte (orden 1→8) con la mayor parte hecha **sin saldo cargado**, para que ningún error de configuración cueste plata.
- **Resultado real:** _(completar a medida que se implemente cada parte)_

## 2026-07-28 (2) — SOLO WhatsApp: formulario eliminado + auditoría de configuración de campaña

- **Decisión del dueño:** el único canal de contacto es **WhatsApp** → se quitó el formulario del sitio.
  - `/contacto` **se mantiene como ruta** (es landing de Ads, está en el sitemap y la enlazan home/landing/nav — borrarla sería 404 en los anuncios) y pasó a ser una **página WhatsApp-first**: CTA grande, "mandanos una foto", qué datos ayudan, sin formulario.
  - Eliminados: formulario + integración **Formspree** (`xrgnqbod`) y el componente **`EmailBtn`** (era código muerto, no se renderizaba).
  - **Eventos que dejan de existir:** `form_submit`, `form_submit_success`, `form_submit_error`, `contact_email`. **Único evento de conversión vigente: `contact_whatsapp`** (WppBtn + WhatsAppCTA). `CLAUDE.md` actualizado (los invariantes decían lo contrario).
  - CTAs secundarios "Dejanos tus datos" de la landing reemplazados (uno por "Ver un trabajo real", el del cierre eliminado para dejar un solo CTA fuerte).
- **⚠️ Impacto en Google Ads (a corregir en la cuenta):** en *Objetivos de conversión* de la campaña hay que **destildar también "Enviar formularios de clientes potenciales"** (ya no existe el form) además de "Clientes potenciales de llamada telefónica" → **debe quedar solo "Contactos"** (donde vive el WhatsApp). Y en *Objetivos → Conversiones*, la acción del formulario queda obsoleta.
- **Auditoría de configuración de campaña `busqueda-arenadoIndustrial` (capturas del dueño) — hallazgos y estado:**
  - 🔴 **Redes incluían Socios de búsqueda Y RED DE DISPLAY** en una campaña de búsqueda → ✅ **corregido** (destildadas).
  - 🔴 **IA Max ACTIVADO** con *personalización de texto* y *expansión de URL final* → concordancia amplia encubierta, Google reescribiendo anuncios y mandando tráfico a URLs arbitrarias (en la captura aparecía `/blog`, **que no existe** → clics a 404) → ✅ **apagado**.
  - 🔴 **Objetivo de conversión incluía "Clientes potenciales de llamada telefónica"** → la campaña le pedía llamadas a Google (la otra mitad del problema de las llamadas por trabajo, junto con la extensión ya quitada) → **a destildar**.
  - 🔴 **Ubicación = "Provincia de Buenos Aires" (27,5M de alcance) con "Presencia O INTERÉS"** → excluye CABA, incluye toda la provincia (Mar del Plata, Bahía Blanca) y suma gente de cualquier lado "interesada" en BA → **cambiar a Presencia + radio ~60 km sobre Buenos Aires**.
  - 🟠 **Puja tCPA $8.204** aprendiendo de conversiones sucias, ~3× el mejor CPA real histórico (`arenados` exacta ≈ $2.800) → revisar al final, con medición limpia.
  - 🟡 Idiomas incluían **Inglés** → ✅ corregido a solo Español. Rotación "Optimizar" ✅ correcta.
- **Por qué / hipótesis:** la campaña no solo tenía keywords caras — tenía **la configuración en contra**: Display + IA Max + objetivo de llamadas + geo mal armada. Corregido esto, el mismo presupuesto debería comprar tráfico mucho más calificado.
- **Resultado esperado y cuándo revisarlo:** al reactivar el saldo, CPA más bajo y cero llamadas de empleo; revisar términos de búsqueda a los 7 días.
- **Resultado real:** _(completar tras reactivar)_

## 2026-07-28 — Extensión de llamada QUITADA + negativas de empleo cargadas + modo experto de Ads

- **Qué se hizo (en la cuenta, ejecutado por el dueño con guía):**
  - ❌ **Quitada la extensión/asset de llamada** (`011 2378-7750`, nivel campaña, 77 impresiones/1 clic) — era la vía por la que el aviso mostraba el número con botón "Llamar" a búsquedas de empleo. **Esta era la causa de las "llamadas pidiendo trabajo"** que aparecían al meter presupuesto (no una fuga del número del sitio, que está blindado).
  - ✅ **Cargadas las negativas de empleo** en frase ("empleo", "trabajo de arenador", "busco trabajo/empleo", "vacante", "se busca personal", "oferta laboral/de trabajo", "changa(s)", "sueldo", "cv", "curriculum", "rrhh", "recursos humanos", "empleado", "curso", "tutorial", "como hacer", "casero").
- **Decisión de modo de trabajo (dueño):** los fixes básicos no alcanzan → **modo experto de Ads**: Claude trabaja la cuenta como consultor senior (datos, estructura, QS, configuraciones, pujas). Playbook nuevo: `13-modo-experto-ads.md`; instrucción persistida en `CLAUDE.md` + memoria de Claude. Próximo paso: **Sesión de profundidad #1** (capturas de configuración de campaña, QS con 3 componentes, conversiones, RSAs — lista exacta en el playbook §Sesión #1) — ideal hacerla AHORA que la cuenta está sin saldo, antes de recargar.
- **Resultado esperado y cuándo revisarlo:** llamadas por trabajo ≈ 0 en cuanto vuelva a gastar; revisar "Términos de búsqueda" a los 7 días de reactivar para cazar variantes de empleo que se cuelen.
- **Resultado real:** _(completar tras reactivar el gasto)_

## 2026-07-27 (4) — Guía de Google Business Profile (Claude Code)

- **Qué se hizo:** guía completa de setup/optimización del GBP (`12-google-business-profile.md`), a medida de las decisiones del dueño (27/07): ① la ficha **ya existe → reclamar + optimizar**; ② **negocio a domicilio (SAB)** → sin dirección pública, zonas del AMBA; ③ teléfono público = **WhatsApp del negocio**. Incluye: reclamo/verificación, categorías (con las **prohibidas a evitar**: mantenimiento de piscinas/pintura/granallado), descripción lista para pegar, servicios por cluster, fotos, el **motor de reseñas** (pedir a cada cliente + plantilla de WhatsApp), posts estacionales y la conexión con el sitio.
- **Pendiente (lo ejecuta el dueño / sesión de Chrome):** reclamar y optimizar la ficha; **avisar la URL** de la ficha para que Claude sume `sameAs` en `src/lib/siteConfig.ts` y conecte la entidad del sitio con el GBP.
- **Por qué / hipótesis:** GBP + reseñas es la palanca #1 de SEO local; hoy la ficha no está optimizada ni conectada al sitio.
- **Resultado esperado y cuándo revisarlo:** aparecer en Maps / paquete local por "arenado + zona"; llegar a **≥5 reseñas reales** (criterio de salida de la Fase 2 en `02-estrategia-seo.md`). Revisar en las Estadísticas del perfil (cruce mensual).
- **Resultado real:** _(completar)_

## 2026-07-27 (3) — Home y /servicios alineadas al criterio del ideal (Claude Code)

- **Qué se hizo:** se llevó home y /servicios al mismo criterio de la landing de piletas + los hallazgos de la auditoría (rutear por intención, lenguaje PYME no técnico, sin canibalización):
  - **Home — `ServicesSection`:** las 2 cards ahora se rotulan por **TRABAJO**, no por tipo de comprador: "Arenado en obra, industria y galpones" (→`/servicios`) y "Arenado de piletas" (→`/arenado-de-piletas`). Se sacó "fachadas/trabajos chicos" de la card de piletas (arreglaba el mismatch: el botón iba a piletas pero prometía fachada) y se sumó "piscina".
  - **Home — `IntroductionSection`:** el párrafo ahora **explica qué es el arenado** para el que no conoce el término ("es como una lija potente…"), arrancando por el problema (se descascara / óxido).
  - **/servicios — nueva sección `QueArenamos`:** cubre el **aliado #1** (PYME con galpón: estructuras, tanques, camiones, acoplados, hierros, quitar óxido, in situ) y el **Cluster 1** de obra/restauración (paredes, ladrillo a la vista, fachadas, vigas); además **deriva la intención de piletas** a su landing con un link.
  - **/servicios — sin canibalización:** metadata y schema ya **NO ofrecen piletas** (la landing dedicada gana esa consulta); se sumó galpón/camiones/PYME a la metadata.
  - **/servicios — menos "licitación":** se bajó el tono de obra-grande en `ServiciosHero` (glosa llana de "in situ"), `AlcanceOperativo` (de ficha técnica a beneficio + H2 con keyword), `LogisticaCoordinacion` (lenguaje del dueño/PYME, no solo "encargado de obra/permisos"), `AutoridadRapida` ("evaluación de acabado en base a objetivo" → "lista para pintar o revestir") y `BloqueDiferencial` ("encargado de proyecto" → "hablás directo con quien hace el trabajo"). Se **eliminó el duplicado `RequisitosCliente`** (sus requisitos ya viven en Logística).
- **Verificación:** `npm run build` limpio (17 rutas); 1 `<h1>` por página; /servicios con galpón/camiones/acoplados/fachada/ladrillo presentes; piletas fuera del schema de /servicios; cero jerga técnica.
- **Por qué / hipótesis:** la home ruteaba mal por "tipo de comprador" (enterraba restauración y ocultaba piletas al contratista) y /servicios le hablaba a una obra grande, no al aliado #1 (PYME con galpón, el trabajo más rentable). Alinear ambas debería mejorar la comprensión por intención y captar mejor obra/PYME.
- **Resultado esperado y cuándo revisarlo:** más leads de PYME/galpón y obra/restauración; medir en Search Console (impresiones de "arenado industrial / de camiones / de galpón / de fachada") y en el mix de leads a las 4-6 semanas.
- **Resultado real:** _(completar)_

## 2026-07-27 (2) — Landing /arenado-de-piletas reconstruida al mapa ideal + WhatsApp inline (Claude Code)

- **Qué se hizo:**
  - **Mapa de la landing IDEAL** (`11-landing-piletas-ideal.md`): blueprint de referencia diseñado DESDE CERO (síntesis de 3 diseños independientes: dueño de casa/conversión · SEO/gap sin jerga · B2B contratista). 13 secciones con copy propio, keywords por bloque, schema y reglas de conversión.
  - **Landing reconstruida** (`src/app/arenado-de-piletas/page.tsx`) alineada al mapa: hero por el problema · banda estacional (invierno, rotable) · selector de público · "¿qué es el arenado?" (analogía "lija potente") · bloque del **gap sin jerga** (sacar/quitar/despintar/decapar + "piscina") · galería antes/después (6 fotos) · 3 pasos in situ · qué incluye/qué no · **sección potente de contratistas** (precio por obra, turnos, varias/temporada) · "por qué confiar" · zonas AMBA · FAQ con schema **FAQPage (11 Q)** · CTA final.
  - **WhatsApp prominente SIN romper invariantes:** nuevo componente `WhatsAppCTA` (inline) que replica el patrón de WppBtn — número **partido en 2 strings** (anti-scraping: no aparece contiguo en el HTML), evento `contact_whatsapp` **solo tras confirmar el AlertDialog**, `window.open`. NO es un segundo botón flotante (sigue habiendo uno solo). Mensajes pre-cargados distintos por público (dueño/contratista).
  - **Nav:** se agregó **Piletas** al Header y al Footer (la landing estaba **huérfana** en el menú). Tagline del Footer a 3 focos (obra/industria/piletas).
  - **FAQ parametrizable:** `FaqAccordion` acepta `items`; nuevas `faqsPiletas` en `src/lib/faqs.ts` alimentan el acordeón y el FAQPage de la landing (la FAQ general sigue intacta con sus 14).
  - **Blindaje del número:** se sacó el `telephone` del schema JSON-LD (un cambio previo de Fase C lo exponía como texto plano en cada página). Verificado: el número ya NO aparece contiguo en el HTML de ninguna página.
- **Verificación:** `npm run build` limpio (17 rutas); 1 `<h1>` por página; schema FAQPage/Service/BreadcrumbList OK; `contact_whatsapp`/Formspree intactos; cero jerga técnica ("granallado" solo en negativo). Sin regresión en `/preguntas-frecuentes`.
- **⚠️ El tema Ads (aparte del sitio):** las **"llamadas por trabajo" cuando se mete plata en Ads NO son fuga del sitio** (el número no está expuesto). Casi seguro: la campaña vieja tiene **extensión de llamada** + concordancia amplia sin negativas de empleo → los que buscan "trabajo/empleo de arenado" ven el aviso con botón de llamar. Revisar en la cuenta (sesión guiada): sacar la extensión de llamada, pasar a frase/exacta, y **sumar negativas de empleo** (`vacante, personal, cv, curriculum, se busca, rrhh, empleado, puesto, changa, contratar`) a `03-keywords-maestro.md`.
- **A verificar antes de publicar:** plazo "en el día" de una pileta estándar; zonas reales de cobertura; pares antes/después de las fotos.
- **Resultado esperado y cuándo revisarlo:** más leads de piletas (dueño + contratista) y tráfico del gap sin jerga; medir en Search Console a las 4-6 semanas post-deploy.
- **Resultado real:** _(completar)_

## 2026-07-27 — Roadmap SEO + ejecución Fases A/C/E/D + landing de piletas (Claude Code)

- **Qué se hizo:** auditoría SEO del código (8 lentes) → **roadmap de optimización SEO** integrado en `contexto/07-seo-tecnico.md` (7 fases A→G). Ejecutadas y verificadas (build limpio 17 rutas, invariantes GTM/`dataLayer`/Formspree **intactos**):
  - **Fase A — fundaciones:** `canonical` self-referente por ruta, `next.config` (AVIF/WebP + headers de seguridad + `poweredByHeader:false`), `theme-color`, 404/error en español con `<h1>` y CTAs, sin `meta keywords` obsoleta.
  - **Fase C — schema:** JSON-LD refactor a `@graph` con `@id` (`LocalBusiness`+`HomeAndConstructionBusiness` completa: `telephone` = número de WppBtn, `areaServed` AMBA, fotos reales; `WebSite`), `FAQPage`, `Service`, `BreadcrumbList`, `CreativeWork` en casos. Fuente única `src/lib/siteConfig.ts` + `src/lib/faqs.ts`.
  - **Fase E — on-page:** `<h1>` semánticos (contacto/legales/home con keyword), `CardTitle` polimórfico, secciones de casos a `<h2>`, `<main>` landmark centralizado, OG/Twitter por página con imagen, alt text con zona.
  - **Fase D — arquitectura/URLs:** **landing `/arenado-de-piletas` creada** (las 3 secciones obligatorias del plan + proceso en 3 pasos + zonas + qué no incluye + caso enlazado + schema `Service`/`BreadcrumbList` + alta en sitemap); **redirects 301** de rutas legacy (`/arenado-industrial`→`/servicios`, `/arenado-particular`→`/arenado-de-piletas`, `/presupuesto-rapido`→`/contacto`); componente `Breadcrumbs` (visible + JSON-LD) y enlazado interno (fin de callejones: "Seguir viendo" en casos, home→casos, card Particular→landing).
  - Todo en el branch `seo/fase-a-fundaciones` → **[PR #2](https://github.com/josecoronel20/proyecto-SEOarenadosLucho/pull/2)** (3 commits). Preview de Vercel; sin mergear a `main` todavía.
- **🔄 ROTACIÓN ESTACIONAL de la landing (registrar cada cambio):** la sección estacional de `/arenado-de-piletas` arranca en **modo INVIERNO** (27/07/2026): *"Anticipate: llegá al verano con la pileta lista — en invierno hay turno inmediato"*. **Próxima rotación → primavera/verano (~ago-sep):** cambiar a *"Llegá con la pileta lista: turnos de esta semana"*. El copy vive en `src/app/arenado-de-piletas/page.tsx` (bloque con ícono `CalendarClock`). **Cada rotación se anota acá.**
- **Pendiente:** `apex→www` es config de dominio en **Vercel** (no código); **Fase B** = comprimir `heroVideo.mp4` (~25 MB, necesita el asset); **Fase G** = Search Console + Lighthouse post-merge; imagen social branded 1200×630 dedicada. El **copy de la landing lo generó Claude** → el dueño lo revisa/ajusta.
- **Por qué / hipótesis:** el sitio ya estaba alineado al negocio (pivote de copy), pero sin fundaciones SEO técnicas ni la landing de la mejor keyword de conversión (piletas). Con schema + IA + landing propia + on-page mejora la elegibilidad en búsqueda/local y le da destino propio a la campaña de Ads de piletas.
- **Resultado esperado y cuándo revisarlo:** tras merge + deploy, validar schema (Rich Results Test), redirects 301 activos y la landing indexada; medir en Search Console (impresiones "arenado de piletas", cobertura) en las primeras 4-6 semanas.
- **Resultado real:** _(completar tras merge/deploy)_

## 2026-07-26 (7) — Pivote de copy del sitio EJECUTADO en el código (Claude Code)

- **Qué se hizo:** ejecutados los **pasos 1 y 2 de Fase 1** del ROADMAP. Eliminada toda promesa técnica (Sa3, ISO 8501, metal blanco, perfil de anclaje, "normativa internacional") del sitio, metadata y JSON-LD, reencuadrando al mensaje **"arenado sin vueltas, in situ, listo para pintar o revestir"** con piletas y PYMEs/galpones visibles.
  - **Home:** hero, `IntroductionSection` (listas sí/no realizamos), `ValueBullets` (bullet ISO 8501/anclaje → in situ / rápido / listo para pintar), `ServicesSection` (2 cards reescritas; se quitó "vehículos/piezas" que contradecía la lista "no realizamos").
  - **/servicios:** metadata, hero y `MitigacionRiesgo` (objeción "Sa3/ISO" → "¿queda bien para pintar?").
  - **FAQ:** metadata, subtítulo y **14 preguntas nuevas** del comprador simple (in situ, piletas, polvo, precio, "¿qué es el arenado?", "¿granallado? no").
  - **Casos:** 4 casos reescritos en `projectsInfo.json` (fuera ISO 8501/Sa 2/Sa 3/normativa), tipo `parametrosTecnicos` + labels del detalle (sección "Parámetros técnicos" → **"Ficha del trabajo"**), `CasosHero` y metadata de casos.
  - **Caso nuevo publicado (paso 2):** `arenado-pileta` (id 5) con las **6 fotos** de `public/images/services/arenadoParticular/Piletas/` — texto simple (qué se hizo / tiempo / lista para repintar o revestir). Entra a sitemap, `/casos-de-exito`, filtro y home.
  - **Verificación:** auditoría multi-agente (términos prohibidos, coherencia, QA pileta, invariantes) → **GTM/dataLayer/Formspree INTACTOS**; 6 hallazgos menores corregidos. `npm run build` limpio (16/16, 5 casos SSG).
- **Por qué / hipótesis:** el sitio prometía lo que el negocio NO hace → leads no calificados y riesgo de reclamo. Alinear el copy es **bloqueante** del relanzamiento de Ads (Fase 3).
- **Pendiente:** aún **NO commiteado** (a pedido del dueño). Fase 1 pasos 3 (landing `/arenado-de-piletas`), 4 (redirects 301) y 5 (commit+push+verificar) siguen abiertos. Dato a confirmar por el dueño: **plazo real de una pileta estándar** (se dejó cualitativo, sin número, para no fabricar el dato).
- **Resultado esperado y cuándo revisarlo:** menos consultas técnicas/granallado, más obra/piletas; medir en el % de leads por rubro del cruce mensual.
- **Resultado real:** _(completar)_

## 2026-07-26 (6) — Auditoría de coherencia de TODA la carpeta contexto

- **Qué se hizo:** revisión exhaustiva de los 22 archivos técnicos + 12 de marketing + scripts buscando contradicciones con las decisiones de este chat. Corregido:
  - **Restos del posicionamiento técnico viejo:** `07-seo-tecnico` (regla "no diluir con piscinas/particular" ANULADA y reemplazada por la regla del pivote), `13-workflow` (prioridad "autoridad técnica ISO" → "confianza por prueba real"), `20-prompts` (3 plantillas pedían usar sa3/iso y quitar piletas — corregidas), `08-google-ads-y-landings` (2 filas con Sa3), `06-google-ads-scripts` (ejemplo con el grupo eliminado norma-sa3-iso).
  - **Banners de "copy en pivote"** en `03-rutas` y `07-seo-tecnico`: sus tablas documentan el sitio ACTUAL (aún con Sa3/ISO) y se actualizan al pivotar cada página.
  - **ADR-018 nuevo** en `18-decisiones-tecnicas`: registra el pivote y anula parcialmente ADR-002/ADR-013 (piletas ya no es "secundario"; `/arenado-de-piletas` aprobada).
  - **Datos vencidos:** `01-migracion` (push hecho, robots/sitemap 200 vía PR #1), pendiente de robots en `07-seo-tecnico` marcado resuelto, `17-roadmap` (fila de landings actualizada a piletas/in-situ), nota de arranque a 5.000/día en `06-scripts` y `09-automatizaciones`.
  - **KPI de transición:** `07-medicion` — "% calificados" redefinido como "% obra/PYME"; piletas y trabajos chicos son leads VÁLIDOS.
  - `09-automatizaciones`: llamadas NO como conversión primaria hasta verificar call tracking (coherente con dossier §4.5); READMEs de contexto y marketing actualizados como routers.
- **Decisión de estructura:** se MANTIENE el sistema de archivos por tema (no se fusionan) — cada archivo tiene un rol único y los asistentes navegan mejor así; el riesgo real era la incoherencia, no la cantidad. Los README de ambas carpetas quedan como routers.
- **Resultado real:** carpeta congruente al 26/07/2026; próxima revisión de coherencia recomendada tras el pivote de copy del sitio.

## 2026-07-26 (5) — Datos operativos finales: zona, fotos, rentabilidad y caja (respuestas del dueño)

- **Contexto aportado (Q&A):**
  - **Zona:** Buenos Aires/AMBA base; viajan lejos (La Plata, interior cercano) **si la plata lo vale** → geo de Ads: AMBA; radio ampliable solo en grupos de ticket alto (obra, pymes-in-situ).
  - **Fotos:** hay MUCHAS reales de trabajos → la galería de casos se arma ya con material existente (acción inmediata en `04-plan-de-contenidos.md`).
  - **Rentabilidad por día:** 1º galpón PYME (camiones/tanques/hierros) → el grupo `pymes-in-situ` recibe prioridad de puja dentro de la campaña 1.
  - **Caja:** arranque a **~5.000/día (≈150.000/mes)**, escalando al tope de 300.000 recién cuando los leads se conviertan en trabajos cobrados. Reparto inicial: Obra-Industrial 3.000 · Piletas 1.250 · General-Marca 750. ⚠️ Al relanzar, bajar el presupuesto nativo de la campaña vieja (quedó en 10.000/día).
- **Archivos tocados:** `00-proyecto-general` (datos operativos), `05-operacion` (presupuesto de arranque + geo + prioridad pymes), `04-plan-de-contenidos` (galería inmediata), `00-vision` (objetivos 90 días).
- **Resultado real:** _(completar)_

## 2026-07-26 (4) — PYMEs con galpón como aliado #1 + regla "todo in situ" (contexto del dueño)

- **Contexto aportado:** (1) **no hay taller** — las piezas chicas se reciben en el domicilio y hay que conseguir terreno prestado para arenarlas → el negocio sano es **in situ** (casa, obra, galpón); (2) las **PYMEs con galpón son el mejor aliado hoy**: terreno grande (sin quejas de vecinos — queja frecuente en domicilios), muchas estructuras metálicas, piden restaurar camiones, carros, tanques y hierros grandes — se cobra bien y no piden nada técnico; (3) mentalidad de copy: el arenado es una "lija potente" — lo que se estropeó con el tiempo se arena y se reviste de nuevo.
- **Qué se hizo:** Cluster 2 del mapa reescrito como "Industrial / PYMEs con galpón" con keywords nuevas (arenado a domicilio/in situ, quitar/sacar óxido, restaurar metal, arenado de camiones [prueba — chasis/carrocería siguen negativas], arenado de galpón); grupo nuevo `pymes-in-situ` en la campaña Obra-Industrial con RSA propio ("vamos con nuestro equipo a tu galpón"); `00-proyecto-general` con la restricción "no hay taller → todo in situ" y PYMEs como cliente prioritario de hoy; FAQ suma "¿vienen a domicilio?" y "¿arenan en mi galpón?"; backlog de contenidos suma landing "Arenado in situ / a domicilio" como candidata fuerte y caso PYME.
- **Resultado esperado y cuándo revisarlo:** leads de PYMEs (camiones/tanques/estructuras en galpón) vía el grupo nuevo y las búsquedas "sin jerga" de óxido; validar en SQR en las primeras 4-6 semanas; si el grupo trae volumen, crear la landing in situ.
- **Resultado real:** _(completar)_

## 2026-07-26 (3) — Piletas afinado: estacionalidad, "sin jerga" y contratistas (contexto del dueño)

- **Contexto aportado:** (1) es invierno y los trabajos de pileta son de verano → hoy hay poco trabajo, pero se puede **cazar la anticipación** (el previsor que la quiere lista antes de la temporada); (2) el dueño de casa muchas veces **no sabe qué es "arenado"** → busca el problema: "remover/sacar pintura de pileta"; (3) muchos contactos históricos de piletas eran **contratistas** que remodelan piletas (quitan pintura → revisten/pintan) — cliente recurrente.
- **Qué se hizo:** Cluster 3 del mapa de keywords dividido en 3a (con jerga) y **3b (sin jerga — gap sin explotar)** + nota de estacionalidad operativa; campaña `AR-Search-Piletas` ahora con 2 grupos (pileta-arenado / pileta-sin-jerga), RSA en dos variantes (dueño de casa / contratistas) y regla estacional (invierno encendida con mensaje de anticipación, escalar desde ago-sep); landing `/arenado-de-piletas` con 3 secciones obligatorias (¿se te descascara la pintura?, trabajamos con contratistas, bloque estacional rotativo); FAQ suma "¿cómo saco la pintura vieja de la pileta?" y "¿conviene arenar en invierno?".
- **Resultado esperado y cuándo revisarlo:** en invierno, leads de piletas de mejor calidad (previsores + contratistas) a CPC bajo; validar en el SQR que las búsquedas "sin jerga" existen y convierten (primeras 4-6 semanas de campaña).
- **Resultado real:** _(completar)_

## 2026-07-26 (2) — PIVOTE DE POSICIONAMIENTO: el negocio real (decisión del dueño)

- **Contexto aportado por el dueño:** NO hacemos arenado técnico medido (Sa3, ISO 8501, anclaje, informes) **ni granallado** — por eso se rechazó el trabajo de naves ferroviarias pese a la plata. Hacemos arenado "sin vueltas": paredes/fachadas para repintar, **muchas piletas**, tanques como limpieza, vigas para antióxido básico. Hoy hay pocos trabajos → se toma casi todo; la **transición** apunta a obras en construcción y restauración de edificios (tickets altos sin requisitos técnicos). Cliente objetivo: arquitecto/encargado/constructora que busca algo sencillo, rápido y bien hecho — y que también busca "arenado industrial" (hipótesis validada por el historial: mejor keyword de la cuenta).
- **Decisiones:**
  - ✂️ **Copy del sitio: reescribir TODO** quitando Sa3/ISO/metal blanco (plan en `02-estrategia-seo.md` Fase 1). Hasta entonces, RSA nuevos sin promesas técnicas.
  - 🏊 **Piletas: campaña propia (~25% del presupuesto)** + landing `/arenado-de-piletas` aprobada. `pileta/piscina` DEJA de ser negativa (solo se usa como negativa de campaña industrial para rutear).
  - ⛔ **Negativas técnicas a nivel cuenta:** granallado, granalla, sa3, iso 8501, metal blanco, perfil de anclaje, rugosidad (+ ya cargadas en la lista negra del autopilot).
  - 🔄 **Estructura Ads corregida:** 3 campañas (Obra-Industrial ~6.000/día · Piletas ~2.500 · General-Marca ~1.500) — se **elimina** el grupo `norma-sa3-iso` del plan del dossier (`10-…` §6).
  - 🚪 Trabajos chicos (madera, piezas, vehículos): se **aceptan** si llegan pero no se les compra tráfico (ROI histórico malo); revisar por trimestre.
- **Archivos realineados:** `00-proyecto-general`, `.cursorrules`, `marketing/00-vision`, `02-estrategia-seo`, `03-keywords-maestro` (reescrito con historial real), `04-plan-de-contenidos`, `05-operacion` (Fase 2 nueva), `10-auditoria` (§6), `08-google-ads-y-landings` (mensajes prohibidos), `ads-scripts/05-autopilot.js` (lista negra técnica).
- **Resultado esperado y cuándo revisarlo:** leads mejor calificados (menos consultas técnicas, más obra/piletas) tras el pivote de copy + relanzamiento; medir con el % de leads por rubro en el cruce mensual.
- **Resultado real:** _(completar)_

## 2026-07-26 — Sesión de Chrome: tope de gasto real + scripts instalados

- **Qué se hizo (sesión supervisada en la cuenta de Ads 953-841-6905):**
  - 🛡️ **Tope de gasto ACTIVADO:** presupuesto diario nativo de la campaña activa `busqueda-arenadoIndustrial` bajado de **25.000 → 10.000/día** (freno duro real). Antes estaba armada para ~750.000/mes (2,5× el tope).
  - ✅ **Guardián (06)** instalado + programado diario; Vista previa OK (heartbeat: `Mes ARS 12.237/300.000`).
  - ✅ **Scripts de lectura instalados:** `02-reporte-semanal`, `03-ngram-terminos`, `04-chequeo-urls`.
  - ⏸️ **Autopilot (05) NO instalado** a propósito (falta importar/limpiar conversiones + URLs 200 + data).
  - 🧹 **Conversiones:** "Lead form - Submit" pasada a secundaria. Las "Local actions" (Website visits, Other engagements) NO se pueden pasar a secundaria una por una (son "Alojada en Google") → se excluyen a nivel de campaña al relanzar.
  - 🐞 Corregido bug en `01-auditoria-cuenta.js` (`LAST_90_DAYS` no es literal válido de GAQL → se usa rango `BETWEEN`).
- **Auditoría de la cuenta (línea base):** cuenta con historial (la campaña activa gastó ~1,6M), casi todo REMOVED salvo `busqueda-arenadoIndustrial` (ENABLED) y `Leads-Performance Max-3` (PAUSED). Conversiones GA4→Ads YA existen (`contact_whatsapp`, `form_submit` primarias) pero conviven con basura primaria (visitas/engagements). URLs finales → `https://www.arenadoslucho.com/` (200, dominio correcto). Sin saldo actualmente.
- **Por qué:** dejar el gasto topeado y el monitoreo corriendo ANTES de recargar saldo; sin autopilot hasta tener conversiones limpias.
- **Pendiente antes de relanzar:** (1) limpiar conversiones a nivel campaña (optimizar solo hacia `form_submit_success` + WhatsApp + llamadas); (2) verificar que `form_submit` sea éxito y no intento (GTM/GA4); (3) recién ahí instalar autopilot (05) + recargar saldo.
- **Resultado esperado:** con presupuesto 10.000/día, aunque se recargue saldo el gasto no supera ~300.000/mes.
- **Resultado real:** _(completar tras relanzamiento)_

## 2026-07-25 (3) — Reconciliación de estado + endurecimiento del guardián (Claude Code)

- **Qué se hizo:**
  - 🔧 **Doc reconciliada con la realidad:** `09-automatizaciones.md`, `06-google-ads-scripts.md` y `CLAUDE.md` decían "piloto automático / tope duro vigente" cuando **ningún script está instalado**. Corregido a "creado, pendiente de instalar; sin autopilot ni tope real hasta verificar el trigger en la UI".
  - 🔧 Vigilancia SEO pasada de "✅ Activa desde 27/07" (fecha futura, hoy es 25/07) → "Programada, primera corrida pendiente de confirmar".
  - 🛡️ **Endurecido `ads-scripts/06-guardian-presupuesto.js`** (en el repo, sin instalar): `try/catch` en `costoPeriodo` (ante fallo NO asume gasto 0, avisa y aborta sin tocar nada), pausa al **95%** del tope (margen por latencia) en vez de 100%, **reactivación por mes guardado en la etiqueta** en vez de `getDate()<=2` (evita quedar apagado todo el mes si falla los días 1-2), **heartbeat** y **kill-switch** remoto (celda RUN/STOP con fail-safe: ante duda no reactiva). Aviso de 80% una sola vez por mes.
  - 🔧 Corregido un `.com.ar` perdido en `src/app/terminos-y-condiciones/page.tsx`.
  - 📌 Registrado que la política "piloto automático" (25/07) **reemplaza** la previa "solo lectura + cambios a mano" del mismo día.
- **Por qué / hipótesis:** operar creyendo que hay un tope de gasto que no existe es el mayor riesgo económico; antes de dar autonomía hay que arreglar la base y que la doc no sobrerreprese­nte el estado real.
- **Resultado esperado y cuándo revisarlo:** al instalar el guardián endurecido + fijar el presupuesto diario nativo, el tope se comporta como red real. Falta commit + push del fix de dominio para que `/robots.txt` y `/sitemap.xml` dejen de dar 404 en producción.
- **Resultado real (25/07/2026):** ✅ fix de dominio commiteado y mergeado a `main` vía **PR #1** (merge commit `9307485`); deploy de Vercel propagado y **verificado en producción**: `https://www.arenadoslucho.com/robots.txt` → **200** (`text/plain`, `Allow: /` + sitemap `.com`) y `/sitemap.xml` → **200** (11 URLs, todas `.com`, 0 `.com.ar`). Antes ambos daban 404 → bloqueante SEO #1 cerrado. **Sigue pendiente:** el guardián endurecido y el resto de los scripts de Ads están en el repo pero **sin instalar** (requiere sesión de Chrome); importación de conversiones GA4→Ads sin verificar.

## 2026-07-25 (2) — Migración completada + modo autopilot **preparado** (pendiente de instalar)

- **Qué se hizo:**
  - ✅ **Migración de dominio hecha por el dueño**: `www.arenadoslucho.com` ya apunta a Vercel y sirve el sitio Next.js (verificado por DNS: `vercel-dns-017.com`). Framer fuera.
  - ✅ Corregido `SITE_URL` `.com.ar` → `.com` en `layout.tsx`, `sitemap.ts` y `robots.ts` (falta commit + push para que Vercel lo despliegue).
  - ⚠️ **Pendiente urgente:** `/robots.txt` y `/sitemap.xml` devuelven **404 en producción** — el deploy parece anterior a esos archivos; el próximo push debería resolverlo. Verificar tras el deploy.
  - Creados scripts con escritura: `05-autopilot.js` y `06-guardian-presupuesto.js`.
  - Tarea programada semanal de vigilancia SEO creada en Claude (lunes a la mañana).
- **Decisiones del dueño:**
  - Google Ads en **piloto automático total** (negativas, pausas) con topes duros y aviso por email de cada cambio.
  - **Tope de gasto: ARS 300.000/mes** (guardián pausa todo al 100%).
  - Setup inicial de la cuenta (instalar scripts, auditar, campaña de relanzamiento) se hace con Claude manejando Chrome bajo supervisión.
  - Repo de GitHub privado → se creará un token para que Claude audite/corrija código en sesiones programadas.
- **Resultado esperado y cuándo revisarlo:** deploy con SITE_URL correcto + sitemap/robots vivos esta semana; primera corrida del autopilot tras la sesión de setup en Chrome.
- **Resultado real:** _(completar)_

## 2026-07-25 — Creación del sistema de contexto de marketing

- **Qué se hizo:** se creó `contexto/marketing/` (estrategia SEO + operación Google Ads + scripts) y se referenció desde `CLAUDE.md` y `contexto/README.md`.
- **Decisiones tomadas:**
  - El sitio Next.js del repo se publicará en **Vercel** bajo `www.arenadoslucho.com`; el sitio Framer actual se dará de baja.
  - Google Ads se gestionará con **Google Ads Scripts** (solo lectura) + análisis de Claude; cambios aplicados a mano.
  - La cuenta de Ads tiene historial pero está abandonada → plan de reactivación en `05-google-ads-operacion.md`.
- **Hallazgos de la auditoría inicial (25/07/2026):**
  - `www.arenadoslucho.com` → CNAME a `sites.framer.app` (el sitio vivo es Framer, no el repo).
  - `arenadoslucho.com.ar` (con y sin www) **no resuelve en DNS**, pero el código lo hardcodea como `SITE_URL` en `layout.tsx`, `sitemap.ts` y `robots.ts` → corregir a `.com` antes del deploy (checklist en `01-migracion-y-dominio.md`).
- **Próximos pasos:** (1) checklist pre-deploy de `01-migracion-y-dominio.md`; (2) instalar `ads-scripts/01-auditoria-cuenta.js` y traer el reporte a Claude; (3) capturar línea base de KPIs en `07-medicion-y-kpis.md`.
