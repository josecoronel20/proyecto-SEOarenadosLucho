# Landing de obra y restauración — `/arenado-de-fachadas`

## Objetivo

Crear la landing que desbloquea las 5 keywords pausadas el 28/09/2026 y abre el canal hacia el trabajo de ticket alto (obra y restauración de edificios).

## Problema

Las keywords `arenado de paredes`, `arenado de fachadas`, `limpieza de ladrillo a la vista` y `restauración de fachada` acumularon **7.014 ARS con 22 clics y 0 conversiones** (~1 en 36 de ser casualidad) y se pausaron. La causa no es la keyword: mandan a `/servicios`, que le habla al galpón y a la industria. En la misma campaña y con la misma landing, `empresa de arenado` y `arenados industriales` sí convierten.

## Por qué ahora

Dato del dueño (28/09): un trabajo de obra deja **millones** contra ~800.000 de una pileta. Con esa economía, un contacto de obra vale mucho más de lo que se está pagando (CPA actual 1.891). El cuello de botella no es el presupuesto —Obra usa el 63% del suyo— sino que media campaña está apagada por falta de esta página.

## Alcance autorizado

- ✅ **Incluye:** fachadas, frentes, paredes, ladrillo a la vista, restauración de edificios.
- ⛔ **Fuera:** vigas, estructuras metálicas, tanques y silos → se quedan en `/servicios`, que ya les habla bien. Moverlos rompería un match que hoy convierte.
- **URL decidida:** `/arenado-de-fachadas` (paralela a `/arenado-de-piletas`; "fachada" es la palabra con historial: la campaña vieja convirtió 8 veces).
- **Decisión explícita del dueño (28/09/2026)** — cubre la restricción de `CLAUDE.md` sobre no crear landings nuevas por rubro sin aprobación.

## Restricciones duras (de `contexto/21-realidad-operativa.md`)

Ya se publicaron **4 afirmaciones falsas** en este proyecto. Ninguna era detectable leyendo el repo.

- ⛔ **Nunca "no pintamos" como absoluto** — es falso: 2 de 7 presupuestos reales facturan pintura. Se dice que no se lidera con pintura y que se presupuesta aparte si la piden.
- ⛔ Nada de granallado, Sa3, ISO 8501, metal blanco, perfil de anclaje, mediciones, "certificado" ni "garantizamos".
- ✅ **El cerramiento lo pone el cliente.** No se arma ninguno. El motivo económico no va al sitio.
- ✅ **El polvillo fino no se saca del todo.** Decirlo antes evita el reclamo después.
- ✅ **~100 m²/día por equipo, siempre con su condición** (vale para superficies planas y cómodas; en estructuras complejas se dilata).
- ✅ **El arenado saca el óxido, no rellena el metal** — queda picado donde el óxido comió. Es diferencial, no debilidad.
- ✅ **"20 años de oficio"**, nunca "de experiencia", "en el mercado" ni "desde 200X" (la empresa tiene ~8 años).
- ✅ **2 equipos es el tope.** Nunca "sumamos equipos" a secas.
- ✅ Solo fotos reales del repo. Prohibida cualquier imagen de IA o de banco.

## Invariantes de tracking (romperlos no falla el build)

- Único evento: `contact_whatsapp`, solo tras confirmar el `AlertDialog`.
- CTAs inline con `<WhatsAppCTA>`. **Un solo `WppBtn` flotante global** — no agregar otro.
- Número nunca contiguo en el bundle ni en JSON-LD.

## Tareas

- [x] T1 — `src/lib/faqs.ts`: set `faqsFachadas` (12 preguntas, motor de cola larga).
- [x] T2 — `src/app/arenado-de-fachadas/page.tsx`: la landing, siguiendo el patrón de `/arenado-de-piletas` y los primitivos de `system.tsx` (`EsquemaEquipo`, clases de `system.tsx`).
- [x] T3 — `src/app/sitemap.ts`: alta de la ruta (weekly, priority 0.9).
- [x] T4 — `contexto/03-rutas-y-paginas.md`: documentar la ruta nueva.
- [x] T5 — Enlace interno desde `/servicios` (`QueArenamos.tsx`, mismo patrón que la derivación a `/arenado-de-piletas`).
- [x] T6 — `npm run build` limpio (verificado) + auditoría de copy: sin términos prohibidos, sin "no pintamos" absoluto, imágenes verificadas contra disco.
- [x] T7 — Bitácora: decisión registrada en `contexto/marketing/08-bitacora.md` (28/09/2026). La reactivación de las 5 keywords en la cuenta de Ads queda pendiente y es modo guiado (no se toca la cuenta desde acá).

## Estado final

**Completo.** Las 5 keywords pausadas (`arenado de paredes`, `arenado de fachadas`,
`limpieza de ladrillo a la vista`, `restauración de fachada`) ya tienen dónde
aterrizar. Reactivarlas en Google Ads es una decisión y acción separada, guiada
con el dueño.

## Criterios de aceptación

1. `npm run build` pasa limpio.
2. Cero apariciones de: `Sa3`, `ISO 8501`, `metal blanco`, `granallado`, `perfil de anclaje`, `certificado`, `garantizamos`, y de `no pintamos` como absoluto.
3. Un solo `<h1>`. Metadata con canonical propio + OG. JSON-LD con `Service` + `BreadcrumbList` + `FAQPage`.
4. Todos los CTA pasan por `WhatsAppCTA`; ningún `href` al número.
5. Solo imágenes existentes en `public/images/`.

## ✅ El hueco de las fotos, resuelto el mismo día

Nació sin una sola foto de fachada — los 4 casos publicados son estructuras metálicas. **El dueño aportó 11 fotos reales de trabajos de fachada el 28/09**, que entraron en `public/images/services/arenadoFachadas/`: 4 pares antes/después (frente de dos plantas con hongo, muro perimetral de ladrillo, ladrillo a la vista, esquina con escurrimiento) y 3 tomas del trabajo en curso. Los dos PNG pesados se convirtieron a webp (388 KB → 23 KB y 466 KB → 32 KB).

Los 4 casos industriales **siguen en la página**, pero movidos a la sección de empresas y presentados por lo que sí prueban: trabajo dentro de un lugar en funcionamiento.

## 🔴 Corrección de estrategia (28/09) — la premisa inicial era falsa

Este documento arrancó diciendo que la landing "abre el canal hacia el trabajo de ticket alto". **Es falso y lo corrigió el dueño:** los trabajos de fachada son mayormente **particulares** (casas, muros perimetrales), no PYMEs. Un frente de casa deja **~400.000**; una obra deja millones.

Dos consecuencias:

1. **El ticket alto NO estaba bloqueado por falta de página.** `empresa de arenado` (3 conv), `arenados industriales` (3 conv) y `arenado a domicilio` (1 conv) ya convertían mandando a `/servicios`. Ese segmento no necesita una landing: necesita **pujar más**, porque se está comprando a 1.891 un contacto que vale millones.
2. **La landing se justifica igual, por otro motivo:** recupera 7.014 ARS de tráfico ya pagado que hoy da cero, con un ticket de ~400.000 y un trabajo de uno o dos días. Es plata que se estaba cayendo, no la jugada estratégica.

Por eso la página quedó con **dos puertas** (`#casa` y `#empresa`): el volumen está en la casa particular, y la puerta comercial evita perder la fachada de edificio o local, que es donde el ticket sube.

## Verificación hecha

- `npm run build` limpio (tras un falso fallo por contención del dev server con `.next` — se resolvió frenando el server y borrando `.next`).
- Auditoría de términos prohibidos sobre todo `src/`: limpio. Los únicos hits son declaraciones de lo que NO se hace y comentarios-guardarraíl.
- Las 15 imágenes referenciadas existen en disco (verificado una por una).
- Capturas headless con puppeteer en escritorio (1280) y celular (390). ⚠️ El panel del navegador **no pinta las imágenes** aunque devuelvan 200 — confirmado contra el registro de red. Para ver diseño en este proyecto hay que capturar headless.
- Ajustes que salieron de mirar la captura: recorte `4/5` → `square` (las fotos son todas 1:1 y se estaba cortando un 20%), degradado del hero aclarado (`opacity-40` → `55`) porque tapaba la foto, y H1 reescrito para que le hable también al dueño de casa.

## Pendiente, fuera de código

**Reactivar las 5 keywords en Google Ads apuntando a `/arenado-de-fachadas`** — modo guiado, con el dueño, después del deploy.

## Estado

Creado y completado el 28/09/2026. Ruta: delegado directo (writer bounded) + auditoría y ajuste visual del padre.
