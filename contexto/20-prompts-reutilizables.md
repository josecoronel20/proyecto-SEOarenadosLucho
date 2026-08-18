# Prompts reutilizables

Plantillas listas para copiar en **Cursor** o **ChatGPT**. Ajustá el texto entre `[corchetes]`.

**Reglas:** adjuntar 1–3 archivos `@contexto/` · un objetivo por prompt · decir qué **no** tocar.

---

## Cursor — cambio de código (genérico)

```
@contexto/13-workflow-cursor.md
@contexto/[archivo-relevante].md

## Objetivo
[Una frase clara]

## Alcance
- Archivos: [ej. solo src/components/home/HeroSection.tsx]
- No tocar: GTM, layout.tsx, WppBtn/WhatsAppCTA, otros componentes

## Criterio de listo
- npm run build sin errores
- Mobile-first, tokens primary-400/600
- CTA principal sigue a /contacto
```

---

## Cursor — nueva sección en página

```
@contexto/00-proyecto-general.md
@contexto/04-componentes-ui.md
@contexto/10-estilos-y-design-system.md
@contexto/03-rutas-y-paginas.md

Agregar sección "[nombre]" en [ruta, ej. /servicios] debajo de [sección existente].

Requisitos:
- Tono industrial B2B, reducir objeción sobre [plazos/polvo/norma]
- Usar H2 o mismo patrón que BloqueDiferencial
- CTA a /contacto
- Server Component si no hay estado
- No refactorizar otras secciones
```

---

## Cursor — corregir enlaces 404

```
@contexto/15-bugs-conocidos.md
@contexto/03-rutas-y-paginas.md
@contexto/18-decisiones-tecnicas.md

Corregir enlaces rotos listados en 15-bugs (arenado-industrial, términos, projectsInfo.json).
Destinos: /servicios, /contacto, /casos-de-exito/{slug} según corresponda.
Cambio mínimo. npm run build al final.
Actualizar 15-bugs marcando corregidos.
```

---

## Cursor — conversión (WhatsApp)

```
@contexto/05-formularios-y-conversion.md
@contexto/12-seguridad-y-validaciones.md

[ej. Sumar un WhatsAppCTA al cierre de /servicios con mensaje pre-cargado de obra]

No cambiar:
- El evento contact_whatsapp ni el momento en que dispara (solo tras confirmar el AlertDialog)
- El número armado en runtime con `urlWpp()` ni el window.open (nunca un <a href>)
- La cantidad de botones flotantes (hay UNO solo: WppBtn en el layout)

Prohibido: reintroducir un formulario o un endpoint de contacto (ADR-019).
```

---

## Cursor — tracking / GTM

```
@contexto/06-tracking-y-analytics.md
@contexto/05-formularios-y-conversion.md

Necesito [describir cambio].

IMPORTANTE:
- Listar eventos dataLayer afectados antes de editar
- No renombrar contact_whatsapp (evento único) sin plan de migración GTM
- No cambiar GTM-W63ZV9D9 sin aviso
- Nunca mandar PII (nombre/teléfono/email) en el dataLayer

Si solo es documentación GTM (panel), decir qué tags/triggers configurar sin tocar código.
```

---

## Cursor — performance / LCP

```
@contexto/11-performance.md
@contexto/10-estilos-y-design-system.md

Optimizar LCP en [home / servicios]:
- [ej. hero video: preload metadata, poster estático]
- Quitar unoptimized en ProjectsSection si aplica

No cambiar copy ni rutas. npm run build. Resumir impacto esperado.
```

---

## ChatGPT — estrategia / copy (sin código)

```
Contexto: sitio de arenado "sin vueltas" en Buenos Aires (Arenados Lucho): obra,
restauración, PYMEs con galpón (in situ), piletas. NO arenado certificado ni granallado.
Audiencia: arquitectos, encargados de PYMEs, constructoras, dueños de casa.
Tono: directo, simple y concreto, sin "somos líderes".

Tarea: [ej. reescribir subtítulo hero / 3 bullets de objeciones / FAQ nueva]

Restricciones:
- PROHIBIDO mencionar Sa3 / ISO 8501 / metal blanco / granallado (decisión 26/07/2026)
- Usar solo datos verdaderos: 2 equipos propios, ~100 m²/día, in situ, visita sin costo
- CTA implícito hacia contacto o WhatsApp
- Español Argentina
- Máximo [N] palabras
```

---

## ChatGPT — revisar propuesta de IA antes de implementar

```
Te paso una propuesta de cambio para un sitio Next.js de arenado industrial.
Evaluá si:
1) Aumenta conversión B2B
2) Rompe algún ADR: sin CMS ni backend, canal único WhatsApp (sin formularios), GTM + dataLayer, copy sin promesas técnicas
3) Introduce deuda innecesaria

Propuesta:
[pegar]

Respondé: Aprobar / Aprobar con cambios / Rechazar + motivo breve.
```

---

## Debugging — build falla

```
@contexto/01-stack-y-arquitectura.md
@contexto/14-reglas-de-implementacion.md

El build falla con este error:
[pegar log completo]

Ejecutá diagnóstico, fix mínimo, sin refactors.
Al final: npm run build debe pasar.
```

---

## Debugging — el CTA de WhatsApp no abre / no convierte

```
@contexto/05-formularios-y-conversion.md
@contexto/06-tracking-y-analytics.md

Problema: [no abre WhatsApp / abre sin mensaje / no aparece el evento]

Revisar WppBtn.tsx y WhatsAppCTA.tsx:
- El AlertDialog confirma antes de abrir
- El número se arma en runtime desde un array de dígitos (`src/lib/wppNumero.ts`)
- window.open(url, '_blank', 'noopener,noreferrer')
- dataLayer.push('contact_whatsapp') SOLO en handleConfirm

No cambiar el nombre del evento ni exponer el número contiguo.
Indicar causa y fix concreto.
```

---

## Debugging — evento no aparece en GA4

```
@contexto/06-tracking-y-analytics.md

El evento contact_whatsapp no se ve en GA4.

Checklist:
1) ¿dataLayer.push en código con nombre exacto?
2) ¿GTM Preview en la misma URL (prod vs preview)?
3) ¿Trigger Custom Event en GTM?
4) ¿Tag GA4 y mapeo a generate_lead?

Separar: problema de código vs configuración GTM.
No renombrar eventos en código sin confirmar.
```

---

## Landing pages — alinear con Google Ads

```
@contexto/08-google-ads-y-landings.md
@contexto/00-proyecto-general.md
@contexto/03-rutas-y-paginas.md

Campaña: [Search industrial BA]
URL final: https://www.arenadoslucho.com/servicios
Keywords: [arenado industrial buenos aires, arenado en obra, arenado a domicilio — ver marketing/03-keywords-maestro.md; NUNCA sa3/iso/granallado]

Revisar que la landing cumpla message match:
- H1 y primer párrafo
- Prueba (caso o métrica)
- CTA /contacto visible above the fold en mobile

Proponer solo cambios de copy/orden de secciones, sin nuevas rutas.
```

---

## Landing pages — nueva sección objeciones

```
@contexto/00-proyecto-general.md
@contexto/03-rutas-y-paginas.md
@contexto/04-componentes-ui.md

En /preguntas-frecuentes o /servicios, agregar respuesta a objeción:
"[ej. miedo al polvo en obra activa]"

Formato: bloque corto + bullet de mitigación + link a /contacto.
Implementar en código con patrón MitigacionRiesgo o FAQ.
Cambio acotado, build OK.
```

---

## SEO — metadata de ruta

```
@contexto/07-seo-tecnico.md
@contexto/03-rutas-y-paginas.md

Actualizar metadata de [ruta]:
- title (segmento corto, industrial, Buenos Aires)
- description 150-160 caracteres
- Alineado a intención: [keyword principal]

Solo el page.tsx o layout de esa ruta. No tocar layout raíz salvo metadataBase.
```

---

## SEO — sitemap y robots

```
@contexto/07-seo-tecnico.md
@contexto/03-rutas-y-paginas.md

Implementar app/sitemap.ts y app/robots.ts para:
- Rutas estáticas listadas en 03-rutas
- Slugs de getAllSlugs() para casos

Dominio: https://www.arenadoslucho.com
npm run build al final.
```

---

## SEO — arreglar schema JSON-LD

```
@contexto/07-seo-tecnico.md
@contexto/18-decisiones-tecnicas.md

Actualizar generateStructuredData() en layout.tsx:
- Description Organization/LocalBusiness: arenado in situ para obra, restauración,
  PYMEs y piletas — SIN normas técnicas (prohibido Sa3/ISO — decisión 26/07/2026)
- Piletas SÍ puede mencionarse (es servicio core)
- Mantener email y área Buenos Aires

No cambiar GTM ni SITE_URL.
```

---

## Tracking — documentar evento nuevo

```
@contexto/06-tracking-y-analytics.md
@contexto/13-workflow-cursor.md

Antes de implementar:
1) Proponer nombre de evento dataLayer (snake_case)
2) Payload (campos, sin PII)
3) Triggers GTM sugeridos
4) Impacto en generate_lead / Ads

Luego implementar en [archivo] si apruebo.
Actualizar 06-tracking-y-analytics.md.
```

---

## Tracking — checklist post-cambio

```
@contexto/06-tracking-y-analytics.md

Generar checklist manual para validar en producción:
- GTM Preview pasos
- contact_whatsapp SOLO tras confirmar el modal (no en el click)
- El número no aparece contiguo en el HTML servido
- Qué ver en GA4 DebugView
- Qué no romper en la importación a Google Ads
```

---

## Deploy — pre-merge

```
@contexto/19-deploy-y-entornos.md
@contexto/17-roadmap-tecnico.md

Voy a mergear [branch] a main.

Lista de verificación:
- build local
- assets en public/
- CTAs de WhatsApp (flotante + inline)
- enlaces 404 y 301 legacy
- preview vs producción GTM

Resumir riesgos en 5 bullets.
```

---

## Documentación — actualizar contexto

```
@contexto/README.md

Cambié [describir: rutas / eventos / componente].

Actualizar solo los archivos de contexto afectados (máx. 2), sin duplicar texto entre ellos.
Mantener formato y enlaces relativos.
```

---

## Índice rápido

| Necesidad | Prompt |
|-----------|--------|
| Código genérico Cursor | Cursor — cambio genérico |
| Sección nueva | Cursor — nueva sección |
| 404 | Cursor — corregir enlaces |
| Formulario | Cursor — formulario |
| GTM | Cursor — tracking |
| LCP | Cursor — performance |
| Copy sin código | ChatGPT — estrategia |
| `npm run build` error | Debugging — build |
| Form no envía | Debugging — formulario |
| GA4 vacío | Debugging — evento |
| Ads + landing | Landing — Ads |
| title/description | SEO — metadata |
| sitemap | SEO — sitemap |
| JSON-LD | SEO — schema |
| Nuevo evento | Tracking — documentar |
| Merge prod | Deploy — pre-merge |

---

## Relacionado

- Workflow: `13-workflow-cursor.md`
- Índice contexto: `README.md`
