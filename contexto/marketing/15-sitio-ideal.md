# El sitio ideal — blueprint desde cero

> Diseñado el **10/08/2026** ignorando deliberadamente el sitio actual: qué sitio construiríamos hoy, con la hoja en blanco, sabiendo lo que sabemos del negocio. La §3 compara este ideal contra lo que hay y la §4 es el plan de ejecución.
>
> Fuentes: `00-vision-y-objetivos.md` · `contexto/00-proyecto-general.md` · `03-keywords-maestro.md` · `11-landing-piletas-ideal.md` (el mismo método aplicado a una sola página) · `.cursorrules`.

---

## 1. El trabajo que tiene que hacer el sitio

**Una sola frase:** lograr que alguien abra WhatsApp con contexto suficiente para presupuestar.

No informar, no impresionar, no "posicionar la marca". La única conversión del proyecto es `contact_whatsapp`, y el lead sirve solo si el dueño puede cotizar sin diez preguntas de ida y vuelta.

De ahí salen las cinco decisiones que gobiernan todo el diseño:

**1. El sitio le habla a tres personas que usan palabras distintas.**

| Quién | Cómo busca | Qué necesita ver |
|---|---|---|
| **PYME con galpón** (el más rentable por día) | "arenado industrial", "arenado de camiones", "sacar óxido" | Que vamos a su galpón con equipo propio y no traslada nada |
| **Obra y restauración** (el norte del negocio) | "arenado en obra", "arenado de fachada", "ladrillo a la vista" | Que no le frenamos la obra y que coordinamos con el encargado |
| **Dueño de casa con pileta** (el lead más barato) | **no sabe la palabra "arenado"** — busca "sacar la pintura de la pileta" | Que existe una solución y que no tiene que entender nada técnico |

La consecuencia de diseño más importante del proyecto: **el sitio no puede asumir que el visitante conoce la palabra "arenado".** Explicarla, temprano y en criollo, no es contenido de relleno: es la puerta de entrada de un segmento entero.

**2. Se rutea por TRABAJO, no por tipo de comprador.** "Industrial vs particular" es cómo el dueño piensa su negocio, no cómo el cliente piensa su problema. El contratista que remodela piletas es una empresa buscando un servicio "particular"; el dueño de un galpón es un particular comprando algo "industrial". Rotular por comprador manda a la mitad de la gente a la página equivocada.

**3. Decir que NO es una herramienta de conversión.** No hacemos granallado ni arenado certificado, no pintamos, no arenamos muebles ni autos. Declararlo fuerte y temprano filtra al comprador equivocado (que cuesta plata en Ads y tiempo en WhatsApp) y le da credibilidad al que sí sirve. Un proveedor que aclara sus límites parece más confiable, no menos.

**4. El teléfono no existe para el sitio.** Nunca contiguo en el HTML, nunca en un `href`, nunca en el schema. No es paranoia: la vía por la que entraban las llamadas pidiendo trabajo fue exponer el número en Ads. Todo contacto pasa por el modal → `window.open` a WhatsApp.

**5. Sin promesas técnicas.** Prohibido Sa3, ISO 8501, metal blanco, perfil de anclaje, granallado, mediciones, "certificado", "garantizamos". No es una preferencia de estilo: es lo que el negocio **no vende**.

---

## 2. La arquitectura ideal

### 2.1 Rutas

| Ruta | Rol único | Público | Keyword cabeza |
|---|---|---|---|
| `/` | **Hub de ruteo + prueba.** Explica qué es el arenado y manda a cada uno a su lugar | Todos | `arenado buenos aires` |
| `/servicios` | Obra, industria y galpones | PYME + obra | `arenado industrial` |
| `/arenado-de-piletas` | Piletas, incluido el gap sin jerga | Dueño de casa + contratista | `arenado de piletas` |
| `/casos-de-exito` + `/[slug]` | Prueba social, long-tail por tipo de obra | Todos | `casos de arenado` |
| `/preguntas-frecuentes` | Objeciones y long-tail de preguntas | Todos | preguntas sin jerga |
| `/contacto` | Landing de Ads WhatsApp-first | Tráfico pago | `presupuesto arenado` |
| Legales | Cumplimiento | — | (no indexable como objetivo) |

**Decisión: NO se crean más rutas.** Evaluadas y descartadas:

- **`/zonas-de-cobertura` o una landing por partido** — sin contenido real y distinto por zona serían *doorway pages* delgadas: Google las trata como spam y diluyen la autoridad de las 3 páginas que sí importan. La cobertura se cubre con **una sección de zonas con los partidos en texto** en la home y en `/servicios`, más el `areaServed` del schema y el Google Business Profile (que es la palanca real de SEO local).
- **`/arenado-industrial`, `/arenado-de-camiones`, `/arenado-de-fachadas`** — canibalizarían `/servicios`, que ya cubre esas intenciones. Se parten solo si Search Console muestra volumen propio sostenido.
- **Blog** — no hay quién lo sostenga. Las FAQs hacen el mismo trabajo de long-tail con una fracción del esfuerzo.

**El hallazgo:** la arquitectura del sitio actual **ya es la correcta**. El problema no es dónde están las páginas — es qué hacen cuando llegás.

### 2.2 Reglas transversales (valen en TODA página)

1. **Un CTA de WhatsApp visible sin scrollear**, en cada página, siempre. No un link a `/contacto`: el CTA que abre WhatsApp.
2. **El bloque "qué nos ayuda saber"** (qué arenar · tamaño · zona · plazo) cerca de cada CTA fuerte. Es lo que reemplaza al formulario: le dice a la persona qué escribir para que el primer mensaje ya sirva para cotizar.
3. **Mensaje de WhatsApp pre-cargado por contexto.** El que viene de piletas no manda el mismo texto que el de un galpón. Es gratis y sube muchísimo la calidad del lead.
4. **Un solo `<h1>` por página**, con la keyword cabeza y la zona.
5. **Prueba real arriba, no al final.** Las fotos de antes/después son el activo más persuasivo que tiene el negocio y hoy están enterradas.
6. **Mobile-first estricto.** El dueño de casa scrollea con la foto de la pileta en la mano; el encargado de obra mira desde el celular en la obra.
7. **Nada de jerga de licitación.** "Mitigación de riesgo", "alcance operativo", "relevamiento del sustrato" son palabras de pliego. El cliente objetivo es un tipo que quiere que algo deje de estar descascarado.

### 2.3 La home ideal, sección por sección

| # | Sección | Qué hace | Por qué está |
|---|---|---|---|
| 1 | **Hero** | `<h1>` con keyword + zona · una línea que explica el arenado · **CTA WhatsApp** + "ver trabajos" | Es el 100% de lo que ve el que rebota. Tiene que caber en una pantalla de celular |
| 2 | **Barra de confianza** | 4 hechos concretos: equipos propios · vamos a tu obra/galpón/casa · visita y presupuesto sin costo · Buenos Aires y AMBA | Responde las 4 objeciones de entrada antes de que se formulen |
| 3 | **¿Qué necesitás arenar?** | **El corazón de la home.** 3 destinos: obra/industria/galpón → `/servicios` · pileta → `/arenado-de-piletas` · otra cosa → **WhatsApp directo** | Es el ruteo por trabajo. La tercera opción captura todo lo que no entra en las otras dos sin crearle una página |
| 4 | **¿Qué es el arenado?** | La analogía de la lija potente + qué queda después + qué NO hacemos | La puerta de entrada del que no conoce la palabra. Y el filtro honesto |
| 5 | **Prueba: antes y después** | Galería de fotos reales con link a los casos | Lo único que convence de verdad. Va arriba |
| 6 | **Cómo trabajamos** | 3 pasos: visita sin costo → vamos con el equipo → te lo entregamos listo | Baja la fricción: la gente no sabe cómo se contrata esto |
| 7 | **Zonas** | Partidos del AMBA en texto | SEO local sin páginas delgadas |
| 8 | **FAQ corta** | 5–6 preguntas + link a la completa, con **schema FAQPage** | Rich results y objeciones sin salir de la home |
| 9 | **CTA final** | WhatsApp + "qué nos ayuda saber" | El cierre |

### 2.4 `/servicios` ideal

Mismo esqueleto, otro foco. `<h1>`: arenado industrial + zona. Después: **ruteo por trabajo** (PYME con galpón / obra y restauración, con la derivación a piletas), **prueba específica**, **capacidad real** (2 equipos, ~100 m²/día, sumamos equipos), **cómo coordinamos** (accesos, permisos, por sectores), **objeciones** con el título en criollo, **FAQ propia con schema**, y CTA de WhatsApp con mensaje pre-cargado de obra.

### 2.5 `/arenado-de-piletas`

Ya está construida contra su propio blueprint (`11-landing-piletas-ideal.md`) y **es el estándar de calidad del sitio**: hero por el problema, banda estacional, selector de público, el gap sin jerga, galería, 3 pasos, qué incluye/qué no, bloque de contratistas, zonas, FAQ con schema, CTA. No se toca salvo consistencia.

**Es la referencia: el resto del sitio tiene que llegar a este nivel.**

---

## 3. Gap: ideal vs. sitio actual

Auditado el 10/08/2026. Ordenado por impacto en conversión.

### 🔴 Bloqueantes de conversión

| # | Qué pasa | Dónde | Por qué duele |
|---|---|---|---|
| 1 | **El CTA final promete WhatsApp y no abre WhatsApp.** El botón dice "Contactanos" con ícono de **documento**, va a `/contacto`, y el texto debajo dice "Escribinos por WhatsApp" | `CTASection` (home + servicios + casos) | Es el cierre de 3 páginas. Promete una cosa y hace otra, y mete un salto de página entre la intención y la conversión |
| 2 | **Ninguna página fuera de piletas y contacto tiene un CTA de WhatsApp.** Todo rutea a `/contacto` | Home, `/servicios`, casos, FAQ | La única conversión del proyecto queda dependiendo del botón flotante |
| 3 | **La home no explica qué es el arenado antes del fold** y el hero ocupa `100vh` | `HeroSection` | El segmento que no conoce la palabra rebota sin llegar a la explicación |
| 4 | **Ruteo pobre:** 2 cards en el medio de la home, sin salida para "lo mío no es ninguna de las dos" | `ServicesSection` | Todo lo que no es galpón ni pileta se pierde |
| 5 | **La prueba está enterrada** y los casos usan lenguaje de pliego | `ProjectsSection`, `projectsInfo.json` | El activo más persuasivo, desperdiciado |

### 🟠 SEO y estructura

| # | Qué pasa | Dónde |
|---|---|---|
| 6 | **El `<h1>` de la home es un subtítulo en `text-base`** mientras "Arenados Lucho" es un `<p>` en `text-7xl` | `HeroSection` — jerarquía invertida, el h1 no lidera con la keyword |
| 7 | `/servicios` **no tiene FAQ ni schema FAQPage** | Es la página que tiene que ganar obra/PYME; piletas sí lo tiene |
| 8 | **`<h1>` de `/servicios` = "Arenado industrial"**, sin zona | Pierde "buenos aires"/"amba" en el elemento más pesado |
| 9 | **Cero cobertura de zonas en texto** | Sin señal local fuera del schema |
| 10 | Secciones sin `<h2>` (`AutoridadRapida`, `TrustBar`, `ValueBullets`) | Bloques invisibles para el rastreo |

### 🟡 Performance

| # | Qué pasa | Impacto |
|---|---|---|
| 11 | **El video del hero pesa 24,3 MB**, sin `poster`, en autoplay | En 4G la home es una pantalla en blanco durante segundos. Es tráfico pago rebotando antes de ver nada |
| 12 | `arenadoParticular.JPG` pesa **4,5 MB** y se sirve en una card de la home | Ídem, en menor escala |
| 13 | 10 componentes son `"use client"` sin estado ni handlers | JS hidratado de más |

### 🟢 Copy y coherencia

| # | Qué pasa |
|---|---|
| 14 | **"Mitigación de riesgo"** como título visible de sección — jerga de pliego |
| 15 | **TrustBar dice "Documentación vigente", "Equipo seguro", "Adaptabilidad a tu cronograma", "Equipos Móviles"** — vacío, no diferencia, y no es lo que el cliente pregunta |
| 16 | Un `<span class="text-gray-400">` suelto sobre el video del hero — gris sobre oscuro, ilegible |
| 17 | El Footer no tiene zonas, ni contacto, ni CTA — solo navegación duplicada |
| 18 | El Header no tiene CTA de WhatsApp |
| 19 | `HeroSecondaryCTA` huérfano; `Footer` es client solo por `getFullYear()` |

**Diagnóstico de una línea:** el sitio está construido como un **folleto institucional** —hero grande, secciones informativas, "contactanos" al final— cuando el negocio necesita una **máquina de abrir WhatsApp**. La arquitectura está bien; la ejecución le habla al comprador equivocado con el vocabulario equivocado y esconde la conversión.

---

## 4. Ejecución — ✅ COMPLETA (10/08/2026)

Los 19 gaps de la §3 quedaron cerrados. Qué se hizo:

### Transversales

- **`CTASection` ahora abre WhatsApp** con mensaje pre-cargado por página, y suma el bloque **"qué nos ayuda saber"** (los 4 datos que convierten un "hola" en un presupuesto). Es el arreglo de mayor impacto: era el cierre de 3 páginas prometiendo WhatsApp con un botón que iba a otra página.
- **Header** con CTA de WhatsApp en desktop **y en mobile** (visible sin abrir el menú), más un CTA ancho dentro del menú.
- **Footer** reescrito: zonas de cobertura, CTA de WhatsApp, promesa del servicio. Y pasó a **Server Component** (era client solo por `getFullYear()`).
- **`src/lib/wpp.ts` nuevo** — fuente única de estilos de CTA y de los **6 mensajes pre-cargados por intención** (general, obra, galpón, pileta, contratista, otro).

### Home

Reordenada al recorrido mental del visitante: promesa → confianza → ruteo → qué es el arenado → prueba → cómo se contrata → dónde → objeciones → conversión.

- **Hero:** `<h1>` real con keyword + zona (antes el h1 era una frase en `text-base` y la marca un `<p>` de `text-7xl`), sin `100vh`, con CTA de WhatsApp.
- **`QueNecesitasArenar` (nuevo):** el ruteo por trabajo, con la tercera salida —"¿es otra cosa?"— **directo a WhatsApp**. Antes todo lo que no era galpón ni pileta se perdía.
- **`TrustBar`** reescrita con hechos concretos en vez de "Documentación vigente / Equipo seguro".
- **`IntroductionSection`** convertida en "¿Qué es el arenado?", con la explicación en criollo y el límite honesto (incluido "no pintamos").
- **Prueba subida** antes de los pasos; `ComoTrabajamos`, `ZonasCobertura` y `FaqCorta` **nuevos y reutilizables**; **schema `FAQPage`** en la home.
- Eliminados `ServicesSection`, `ValueBullets` y `HeroSecondaryCTA` (superados o muertos).

### `/servicios`

`<h1>` con keyword + zona, breadcrumbs, CTA de WhatsApp en el hero y **uno por grupo** (obra / galpón) con su mensaje propio, `ComoTrabajamos`, `ZonasCobertura`, **FAQ propia con `FAQPage`**, y "Mitigación de riesgo" → **"Lo que siempre nos preguntan"** con una objeción nueva (precio).

### Otras páginas

`/preguntas-frecuentes` y `/casos-de-exito` tenían el mismo CTA roto (ícono de documento → `/contacto`): ahora abren WhatsApp. `<h1>` de casos reescrito.

### Deuda

7 componentes pasados a Server Component; 3 archivos muertos eliminados.

### Verificación

`npm run build` limpio (17 rutas) · **un solo `<h1>` por página**, todos con keyword · `contact_whatsapp` y GTM intactos · **el número no aparece contiguo en ningún HTML generado** · `FAQPage` en home, servicios, FAQ y piletas.

---

## 5. Lo que sigue pendiente (requiere al dueño)

| Qué | Por qué no se hizo |
|---|---|
| **Comprimir `heroVideo.mp4`** (24,3 MB) | Mientras tanto **se sacó del hero**: el fondo ahora es una foto real con `priority`. Era el peor problema de performance del sitio y afectaba directo al tráfico pago. El video vuelve cuando pese < 3 MB |
| **Comprimir `arenadoParticular.JPG`** (4,5 MB) | Ya no se sirve en la home, pero sigue en el repo |
| **Reescribir los casos** de `projectsInfo.json` | Siguen en lenguaje de pliego ("relevamiento del sustrato", "procedimientos operativos"). Son textos largos sobre trabajos reales: conviene que los valide quien los hizo |
| **Fotos antes/después emparejadas** | Hay 60+ fotos reales pero no está marcado cuál es el "antes" de cuál |
| **Lista fina de partidos** | Hoy se nombran agrupaciones (CABA, Zona Norte/Oeste/Sur, GBA) a propósito: prometer partidos que después se rechazan quema leads |
| **Reseñas** | La palanca #1 de confianza; depende del Google Business Profile, aún sin reclamar |

### Fuera de alcance (requiere al dueño)

- **Comprimir `heroVideo.mp4`** (24,3 MB → objetivo < 3 MB). Necesita el asset original y una pasada de compresión; mitigado con `poster` + `preload` mientras tanto.
- **Reescribir los casos** de `projectsInfo.json` al lenguaje llano: son textos largos sobre trabajos reales y conviene que los valide quien los hizo.
- **Fotos de antes/después emparejadas.** Hay 60+ fotos reales pero no está marcado cuál es el "antes" de cuál.
- **Reseñas.** La palanca #1 de confianza y depende del Google Business Profile, que sigue sin reclamar.
