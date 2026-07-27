# Rutas y páginas

Sitio: **https://www.arenadoslucho.com**

> ⚠️ **Pivote de copy en curso (26/07/2026):** las descripciones de objetivo/metadata de este archivo reflejan el sitio ACTUAL, que aún promete Sa3/ISO 8501. Por decisión del dueño ese copy se reescribe (sin promesas técnicas; piletas y PYMEs in situ visibles) — plan en `marketing/02-estrategia-seo.md` Fase 1. Al pivotar cada página, actualizar acá su descripción.  
Nav principal (Header/Footer): Inicio, Servicios, Casos de éxito, Preguntas frecuentes, Contactanos.

---

## Resumen de rutas activas

| Ruta | Tipo | En nav |
|------|------|--------|
| `/` | Estática | Sí |
| `/servicios` | Estática | Sí |
| `/casos-de-exito` | Estática | Sí |
| `/casos-de-exito/[slug]` | SSG (`generateStaticParams`) | No (detalle) |
| `/preguntas-frecuentes` | Estática | Sí |
| `/contacto` | Client (formulario) | Sí (destacado) |
| `/politica-de-privacidad` | Estática | Footer |
| `/terminos-y-condiciones` | Estática | Footer |

### Rutas legacy (no usar en Ads; redirigir si hay tráfico externo)

| Ruta | Estado |
|------|--------|
| `/arenado-industrial` | **Eliminada** — usar `/servicios` o `/casos-de-exito/[slug]` |
| `/arenado-particular` | **Eliminada** — usar `/contacto` o `/servicios` |
| `/presupuesto-rapido` | **Eliminada** — usar `/contacto` |

---

## `/` — Home

| Campo | Detalle |
|-------|---------|
| **Objetivo** | Posicionar marca industrial, filtrar alcance (qué sí / qué no), mostrar casos y llevar a contacto. |
| **CTA principal** | Botón **「Contactanos」** → `/contacto` (hero). |
| **CTAs secundarios** | `CTASection` al final; `ServicesSection` → `/servicios` y `/contacto`; `ProjectsSection` → casos. |
| **Intención SEO** | Arenado industrial / preparación de superficies Buenos Aires; empresa especializada planta y obra. |
| **Conversiones** | Click `/contacto`; scroll hasta CTA final; WhatsApp flotante (`WppBtn` global); posible click casos. |

**Secciones:** Hero (video), TrustBar, IntroductionSection, ProjectsSection, ValueBullets, ServicesSection, CTASection.

---

## `/servicios` — Servicios (landing única)

| Campo | Detalle |
|-------|---------|
| **Objetivo** | Convencer al decisor B2B con capacidad operativa, normas (ISO 8501), logística y mitigación de riesgos. |
| **CTA principal** | `CTASection` → **Contactanos** (`/contacto`). |
| **CTAs secundarios** | Enlaces internos a bloques; caso destacado puede enlazar detalle de caso. |
| **Intención SEO** | `Servicios de arenado industrial`; metal blanco Sa3, m²/día, Buenos Aires. |
| **Conversiones** | Misma que home: formulario, WhatsApp, mail (`EmailBtn` si aparece en CTA). |

**Metadata:** title `Servicios de arenado industrial`; description con Sa3, 100 m²/día, ISO 8501.

**Secciones:** ServiciosHero, BloqueDiferencial, CasoDestacado, AlcanceOperativo, LogisticaCoordinacion, AutoridadRapida, RequisitosCliente, MitigacionRiesgo, CTASection.

---

## `/arenado-industrial` y `/arenado-particular`

| Campo | Detalle |
|-------|---------|
| **Estado** | **No implementadas** en `src/app/`. Solo existen como `href` en cards de la home. |
| **Objetivo previsto** | Landings por línea de negocio (B2B vs particular). |
| **Recomendación** | Redirigir a `/servicios` o anclas en `/servicios` hasta tener página propia. |

---

## `/casos-de-exito` — Listado de casos

| Campo | Detalle |
|-------|---------|
| **Objetivo** | Prueba social: proyectos reales (naves, estructuras, tanques) con filtro por tipo. |
| **CTA principal** | Cards → detalle `/casos-de-exito/{slug}`; al final suele repetirse conversión vía layout global + CTA en detalle. |
| **CTAs secundarios** | Filtro por tipo (`FiltroTipo`); volver desde detalle. |
| **Intención SEO** | Casos de éxito arenado industrial Buenos Aires; credibilidad técnica. |
| **Conversiones** | Indirecta: confianza → `/contacto` o WhatsApp después de leer caso. |

**Metadata (layout):** title `Casos de éxito`; description con resumen ejecutivo y resultado medible.

---

## `/casos-de-exito/[slug]` — Detalle de caso

Slugs generados desde `projectsInfo.json` (`idSection`):

| Slug | Título (referencia) |
|------|---------------------|
| `nave-ferroviaria` | Arenado de Nave Ferroviaria |
| `estructura-naval` | Estructura naval (ver JSON) |
| `pasarela-urbana` | Pasarela urbana |
| `tanque-industrial` | Tanque industrial |

| Campo | Detalle |
|-------|---------|
| **Objetivo** | Profundizar en un proyecto: contexto, alcance, desafíos, metodología, resultados. |
| **CTA principal** | `CTASection` al pie del detalle. |
| **CTAs secundarios** | Link «volver» a `/casos-de-exito`. |
| **Intención SEO** | Long-tail por tipo de obra (nave, tanque, pasarela); title = nombre del caso. |
| **Conversiones** | Post-lectura → `/contacto` o WhatsApp. |

**Build:** `generateStaticParams` + `generateMetadata` por proyecto.

---

## `/preguntas-frecuentes` — FAQ

| Campo | Detalle |
|-------|---------|
| **Objetivo** | Resolver objeciones (plazos, ISO 8501, polvo, coordinación en obra) sin llamada inicial. |
| **CTA principal** | Bloque al final con link a **Contactanos** / formulario (ver `page.tsx`). |
| **CTAs secundarios** | Accordion solo informativo. |
| **Intención SEO** | Preguntas frecuentes arenado industrial Buenos Aires; plazos, normativa, capacidad. |
| **Conversiones** | Usuario informado → `/contacto` o WhatsApp. |

**Metadata:** plazos, ISO 8501, polvo, coordinación en obra.

---

## `/contacto` — Contacto

| Campo | Detalle |
|-------|---------|
| **Objetivo** | Capturar lead: nombre, contacto, descripción del proyecto. |
| **CTA principal** | **Enviar formulario** → Formspree (`https://formspree.io/f/...`). |
| **CTAs secundarios** | WhatsApp y mail vía botones globales / página. |
| **Intención SEO** | Contacto arenado industrial; solicitud de presupuesto/consulta. |
| **Conversiones** | **Principal:** `form_submit` + envío Formspree. **GTM:** eventos en `dataLayer` al enviar. WhatsApp/email en paralelo. |

**Nota:** Página `"use client"`; validación básica en cliente.

---

## `/politica-de-privacidad`

| Campo | Detalle |
|-------|---------|
| **Objetivo** | Cumplimiento legal; confianza. |
| **CTA principal** | Ninguno comercial. |
| **Intención SEO** | Baja prioridad; `noindex` opcional si se desea. |
| **Conversiones** | Ninguna. |

---

## Páginas de sistema

| Ruta | Objetivo |
|------|----------|
| `not-found.tsx` | 404 amigable |
| `error.tsx` | Error de runtime |
| `loading.tsx` | Estado de carga |

---

## Conversiones globales (todas las páginas)

| Mecanismo | Ubicación | Evento / acción |
|-----------|-----------|-----------------|
| **WhatsApp flotante** | `layout.tsx` → `WppBtn` | `contact_whatsapp` en `dataLayer` |
| **Header** | Link **Contactanos** → `/contacto` | Navegación |
| **Footer** | Links + legal | Navegación |

---

## Flujo de conversión recomendado

```
Ads / SEO → / o /servicios
    → Confianza (casos, FAQ)
    → /contacto (formulario)  OR  WhatsApp (WppBtn)
```

Prioridad de negocio (`.cursorrules`): maximizar contacto calificado (llamada / WhatsApp / formulario con contexto de obra).
