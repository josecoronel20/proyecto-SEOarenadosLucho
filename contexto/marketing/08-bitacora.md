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
