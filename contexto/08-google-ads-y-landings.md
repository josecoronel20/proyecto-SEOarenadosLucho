# Google Ads y landings

Conecta **campañas de marketing** con **URLs y código** del repo. Usar antes de cambiar copy, CTAs o rutas que afecten anuncios pagos.

**Producción:** `https://www.arenadoslucho.com`  
**Medición:** GTM `GTM-W63ZV9D9` → GA4 / Google Ads (ver `06-tracking-y-analytics.md`)

---

## Cómo se conecta Ads con el repo

```
Google Ads (URL final + UTMs)
        ↓
Landing en Next.js (src/app/...)
        ↓
CTA → /contacto | WppBtn (global) | mailto
        ↓
dataLayer (eventos exactos) → GTM → Conversión en Ads
```

| Capa | Dónde vive |
|------|------------|
| URL de destino | Rutas en `src/app/` |
| Mensaje / prueba social | Componentes por página (`home/`, `servicios/`, etc.) |
| Conversión primaria | `/contacto` + `form_submit_success` |
| Conversión secundaria | `contact_whatsapp`, `contact_email` |
| Importación a Ads | GA4 `generate_lead` o tag de conversión en GTM (no en código) |

**No hay** campañas ni keywords guardadas en el repositorio. La tabla de campañas abajo es **plantilla operativa** — completar nombres reales desde Google Ads y mantener sincronizada.

---

## Inventario de landing pages (activas)

### Landings principales (usar en Ads)

| URL final | Archivo | Rol para Ads | CTA principal | Eventos conversión |
|-----------|---------|--------------|---------------|-------------------|
| `/` | `app/page.tsx` | **Genérica / marca** — hero industrial, servicios, casos | `Contactanos` → `/contacto` | Navegación + `contact_whatsapp` (flotante) |
| `/servicios` | `app/servicios/page.tsx` | **B2B / intención alta** — Sa3, ISO 8501, logística, riesgo | `Contactanos` → `/contacto` | Igual + `CTASection` |
| `/contacto` | `app/contacto/page.tsx` | **Conversión directa** — formulario corto | Enviar solicitud | `form_submit` → `form_submit_success` |
| `/preguntas-frecuentes` | `app/preguntas-frecuentes/page.tsx` | **Objeciones** — plazos, polvo, norma | `Contactanos` al pie | Indirecta → contacto/WA |
| `/casos-de-exito` | `app/casos-de-exito/page.tsx` | **Prueba social** — remarketing / consideración | Cards → detalle; `CTASection` | Indirecta |
| `/casos-de-exito/{slug}` | `app/casos-de-exito/[slug]/page.tsx` | **Long-tail por obra** (nave, tanque, etc.) | `CTASection` | Indirecta |

### Landings secundarias / legales

| URL | Uso en Ads |
|-----|------------|
| `/politica-de-privacidad` | No usar como destino de anuncio |

### Rutas **eliminadas** en refactor (no usar en Ads)

| URL antigua | Estado | Acción en Ads |
|-------------|--------|---------------|
| `/precios-arenados` | Sin página | Pausar anuncios; redirigir a `/servicios` o `/contacto` |
| `/zonas-de-cobertura/*` | Sin página | Actualizar URLs finales |
| `/servicios/arenado-*` (micro) | Consolidado en `/servicios` | Una sola landing servicios |
| `/blog/*` | Sin blog en repo actual | No enlazar |

### Rutas legacy (no usar en campañas nuevas)

| URL antigua | Usar en su lugar |
|-------------|------------------|
| `/arenado-industrial` | `/servicios` o `/casos-de-exito/{slug}` |
| `/arenado-particular` | `/contacto` o `/servicios` |
| `/presupuesto-rapido` | `/contacto` |

Enlaces internos corregidos en mayo 2026. Configurar **301** en hosting si Ads antiguos aún apuntan a URLs legacy.

---

## Campañas y estrategia → `marketing/`

La estructura de campañas, presupuesto (tope ARS 300.000/mes), fases de reactivación y reglas de operación viven en **`marketing/05-google-ads-operacion.md`** (fuente única). La automatización (scripts autopilot y guardián) en **`marketing/06-google-ads-scripts.md`**. Este archivo solo mantiene el mapeo técnico URLs ↔ eventos ↔ conversiones.

---

## Intención por landing

| Landing | Intención del usuario | Qué debe ver en 5 s | Objeción que resuelve |
|---------|----------------------|---------------------|------------------------|
| `/` | “¿Hacen arenado industrial en BA?” | Especialización planta/obra, CTA claro | ¿Son serios / escala? |
| `/servicios` | “¿Cumplen norma, plazos, volumen?” | Sa3, ISO 8501, logística, mitigación riesgo | Retrasos, polvo, calidad |
| `/contacto` | “Quiero presupuesto / consulta” | Formulario corto (3 campos) | Fricción al contactar |
| `/casos-de-exito` | “¿Tienen experiencia en mi tipo de obra?” | Proyectos reales medibles | Riesgo del proveedor |
| `/casos-de-exito/{slug}` | “¿Hicieron algo como mi proyecto?” | Detalle técnico del caso | Prueba específica |
| `/preguntas-frecuentes` | “¿Plazos, polvo, permisos?” | Respuestas técnicas + CTA | Dudas sin llamar aún |

---

## Keywords y negativas → `marketing/03-keywords-maestro.md`

Fuente única de keywords por cluster, mapeo keyword ↔ URL y lista de negativas: **`marketing/03-keywords-maestro.md`**. No duplicar listas acá; al cambiar keywords o negativas, actualizar aquel archivo.

---

## Conversiones (Google Ads ↔ código)

### Acciones recomendadas en la cuenta Ads

| Acción en Ads | Origen técnico | Evento / trigger |
|---------------|----------------|------------------|
| **Lead - Formulario** (primaria) | Importar desde GA4 o GTM | `form_submit_success` → mapear a **`generate_lead`** en GA4 |
| **Lead - WhatsApp** (primaria o secundaria) | GA4 / GTM | `contact_whatsapp` |
| **Contacto - Email** (secundaria) | GA4 / GTM | `contact_email` |
| **Envío formulario (intento)** (opcional, funnel) | GA4 | `form_submit` |
| **Error formulario** (diagnóstico) | No optimizar | `form_submit_error` |

### Nombres exactos en `dataLayer` (no renombrar sin actualizar Ads)

`form_submit` · `form_submit_success` · `form_submit_error` · `contact_whatsapp` · `contact_email`

Detalle de payloads: `06-tracking-y-analytics.md`.

### URL de conversión “destino”

Si se usa conversión por **página de destino** en Ads (menos recomendado que eventos):

- Destino: `https://www.arenadoslucho.com/contacto`
- Solo cuenta si el usuario llega tras enviar — preferir **evento** `form_submit_success`.

---

## UTMs y parámetros (no en código; obligatorio en Ads)

El repo **no** lee `utm_*` ni `gclid` en la app. Usar en URLs finales de anuncios:

```
https://www.arenadoslucho.com/servicios?utm_source=google&utm_medium=cpc&utm_campaign={campaign}&utm_content={adgroup}&utm_term={keyword}
```

| Parámetro | Uso |
|-----------|-----|
| `utm_campaign` | Nombre campaña (ej. `search-industrial-ba`) |
| `utm_content` | Grupo de anuncios |
| `utm_term` | Keyword (Search) |
| `gclid` | Automático en clic de Google |

GA4 atribuye vía GTM/GA4 linker; mantener **un solo dominio** (`www`).

---

## Mensajes clave alineados al repo (para anuncios)

Usar en titulares/descripciones para coincidir con la landing:

| Mensaje | Dónde está en sitio |
|---------|---------------------|
| Arenado industrial / planta u obra | Hero home, `/servicios` |
| Metal blanco Sa3, ISO 8501 | `/servicios`, FAQ |
| ~100 m²/día por equipo | FAQ, bloques servicios |
| Equipos propios, coordinación en obra | Introduction, servicios |
| Visita técnica sin costo | FAQ |
| Presupuesto / contacto rápido | Metadata layout, `/contacto` |

Evitar en Ads promesas que el sitio no respalda (precios fijos, “todas las zonas” sin página de cobertura).

---

## Checklist: cambio en repo que afecta Ads

- [ ] ¿La URL final del anuncio sigue existiendo (200)?
- [ ] ¿El CTA del anuncio coincide con el botón de la landing (ej. “Contactanos” → `/contacto`)?
- [ ] ¿Los eventos GTM siguen disparando en Preview?
- [ ] ¿Conversiones en Ads sin caída 48–72 h post-deploy?
- [ ] ¿Enlaces rotos (`/arenado-industrial`, etc.) corregidos o redirigidos 301?
- [ ] ¿UTMs actualizados si cambió nombre de campaña?

---

## Flujo recomendado por tipo de campaña

```
Search industrial  →  /servicios  →  /contacto  (form)  →  form_submit_success
Search marca       →  /           →  /contacto o WhatsApp
Remarketing        →  /casos-de-exito  →  /contacto
Duda técnica       →  /preguntas-frecuentes  →  /contacto
```

---

## Relacionado

- Eventos y GA4: `06-tracking-y-analytics.md`
- Formulario: `05-formularios-y-conversion.md`
- Rutas y CTAs: `03-rutas-y-paginas.md`
- SEO metadata: `07-seo-tecnico.md`
