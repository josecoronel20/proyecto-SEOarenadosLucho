# Rutas y páginas

Sitio: **https://www.arenadoslucho.com**

Nav principal (Header/Footer): Inicio, Servicios, **Piletas**, Casos de éxito, Preguntas frecuentes, Contactanos.

> **Estado (28/07/2026):** el **pivote de copy está ejecutado** — ninguna página promete Sa3/ISO 8501/metal blanco/granallado. El posicionamiento vigente es "arenado sin vueltas, in situ, listo para pintar o revestir" con obra/PYMEs y piletas visibles. Y desde el 28/07 el sitio tiene **canal único WhatsApp**: no hay formulario en ninguna ruta.

---

## Resumen de rutas activas

| Ruta | Tipo | En nav |
|------|------|--------|
| `/` | Estática | Sí |
| `/servicios` | Estática | Sí |
| `/arenado-de-piletas` | Estática | Sí |
| `/casos-de-exito` | Estática | Sí |
| `/casos-de-exito/[slug]` | SSG (`generateStaticParams`) | No (detalle) |
| `/preguntas-frecuentes` | Estática | Sí |
| `/contacto` | **Estática (Server Component)** | Sí (destacado) |
| `/politica-de-privacidad` | Estática | Footer |
| `/terminos-y-condiciones` | Estática | Footer |

Build de referencia: **17 rutas** (incluye `robots.txt`, `sitemap.xml`, `_not-found` y los 5 casos SSG).

### Rutas legacy — **301 activos** en `next.config.js`

| Ruta legacy | Redirige a |
|-------------|-----------|
| `/arenado-industrial` | `/servicios` |
| `/arenado-particular` | `/arenado-de-piletas` |
| `/presupuesto-rapido` | `/contacto` |

⛔ **No usarlas en anuncios ni en assets de Ads**: un asset nunca debe apuntar a un redirect. Enlazar siempre el destino final.

---

## `/` — Home

| Campo | Detalle |
|-------|---------|
| **Objetivo** | Explicar qué es el arenado a quien no conoce el término, mostrar prueba real y rutear **por tipo de trabajo**. |
| **CTA principal** | **Contactanos** → `/contacto` (hero). |
| **CTAs secundarios** | `ServicesSection` (2 cards: obra/industria/galpones → `/servicios`; piletas → `/arenado-de-piletas`); `ProjectsSection` → casos; `CTASection` al final. |
| **Intención SEO** | Arenado Buenos Aires / AMBA; in situ; quitar óxido y pintura; listo para pintar o revestir. |
| **Conversiones** | WhatsApp flotante (`WppBtn`) desde cualquier scroll; clicks a `/contacto`. |

**Secciones (en orden):** `HeroSection`, `TrustBar`, `QueNecesitasArenar`, `IntroductionSection`, `ProjectsSection`, `ComoTrabajamos`, `ZonasCobertura`, `FaqCorta`, `CTASection`. Declara **schema `FAQPage`** con `faqsHome`.

**El orden sigue el recorrido mental del visitante** (rediseño 10/08/2026, ver `marketing/15-sitio-ideal.md`): promesa → confianza → "esto es lo mío" (ruteo) → "ah, eso es el arenado" → prueba → cómo se contrata → dónde → objeciones → conversión.

⚠️ **`QueNecesitasArenar` rutea por TRABAJO, no por tipo de comprador** (decisión 27/07): rotular "Industrial vs Particular" enterraba restauración y le ocultaba las piletas al contratista. Su **tercera opción ("¿es otra cosa?") va directo a WhatsApp**, no a una página: captura todo lo que no encaja sin crearle una landing.

⚠️ **El hero no usa el video.** `heroVideo.mp4` pesa 24,3 MB sin comprimir y dejaba la home en blanco varios segundos en 4G. El fondo es una foto real con `priority`. Vuelve cuando el video pese < 3 MB.

---

## `/servicios` — Obra, industria y galpones

| Campo | Detalle |
|-------|---------|
| **Objetivo** | Captar el **aliado #1** (PYME con galpón: estructuras, tanques, camiones, acoplados, hierros) y el cluster de obra/restauración, en lenguaje llano. |
| **CTA principal** | `CTASection` → `/contacto`. |
| **CTAs secundarios** | `CasoDestacado` → detalle de caso; link a `/arenado-de-piletas` para derivar la intención de piletas. |
| **Intención SEO** | `Servicios de arenado industrial`, arenado in situ / a domicilio, galpón, camiones, fachada, ladrillo a la vista. |
| **Conversiones** | WhatsApp flotante; navegación a `/contacto`. |

**Metadata:** title `Servicios de arenado industrial`; description con galpón/camiones/PYME e in situ. **Sin** Sa3/ISO/metal blanco.

**Secciones (en orden):** `ServiciosHero`, `QueArenamos`, `CasoDestacado`, `AlcanceOperativo`, `ComoTrabajamos`, `LogisticaCoordinacion`, `BloqueDiferencial`, `AutoridadRapida`, `ZonasCobertura`, `MitigacionRiesgo`, `FaqCorta`, `CTASection`. Declara **schema `FAQPage`** con `faqsServicios`.

⚠️ `QueArenamos` lleva un **CTA de WhatsApp por grupo** (obra / galpón) con su mensaje pre-cargado: el CTA está donde la persona se reconoce. `MitigacionRiesgo` se muestra como **"Lo que siempre nos preguntan"** — el título anterior, "Mitigación de riesgo", era jerga de pliego.

⚠️ **Sin canibalización:** la metadata y el schema de `/servicios` **no ofrecen piletas** — esa consulta la gana la landing dedicada.

---

## `/arenado-de-piletas` — Landing de piletas

| Campo | Detalle |
|-------|---------|
| **Objetivo** | Ganar la mejor keyword de conversión del historial, cubriendo también el **gap sin jerga** (el dueño de casa no sabe qué es "arenado": busca "sacar la pintura de la pileta"). |
| **CTA principal** | **`WhatsAppCTA` inline** en varios bloques, con mensaje pre-cargado distinto según público. |
| **CTAs secundarios** | Link al caso `arenado-pileta`; galería antes/después. |
| **Intención SEO** | `arenado de piletas/piscinas`, + variantes sin jerga (sacar/quitar/despintar/decapar pintura de pileta). |
| **Conversiones** | `contact_whatsapp` desde los CTAs inline y desde el flotante. |

**Metadata:** title `Arenado de piletas y piscinas en Buenos Aires`.

**Bloques:** hero por el problema · **banda estacional rotable** · selector de público · "¿qué es el arenado?" · gap sin jerga · galería antes/después (6 fotos) · 3 pasos in situ · qué incluye / qué no · **sección de contratistas y pileteros** · por qué confiar · zonas AMBA · **FAQ con schema `FAQPage` (11 Q)** · CTA final.

🔄 **Rotación estacional:** el bloque con ícono `CalendarClock` arranca en **modo INVIERNO** (desde 27/07/2026: "Anticipate: llegá al verano con la pileta lista"). Próxima rotación → primavera/verano (~ago-sep). **Cada rotación se anota en `marketing/08-bitacora.md`.** Blueprint completo: `marketing/11-landing-piletas-ideal.md`.

---

## `/casos-de-exito` — Listado

| Campo | Detalle |
|-------|---------|
| **Objetivo** | Prueba social con trabajos reales y filtro por tipo. |
| **CTA principal** | Cards → detalle `/casos-de-exito/{slug}`. |
| **CTAs secundarios** | `FiltroTipo`; WhatsApp flotante. |
| **Intención SEO** | Casos de arenado en Buenos Aires y AMBA; credibilidad por prueba, no por norma. |
| **Conversiones** | Indirecta: confianza → `/contacto` o WhatsApp. |

**Metadata:** title `Casos de arenado en Buenos Aires y AMBA`.

---

## `/casos-de-exito/[slug]` — Detalle

Slugs generados desde `projectsInfo.json` (campo `idSection`):

| Slug | Referencia |
|------|------------|
| `nave-ferroviaria` | Nave ferroviaria |
| `estructura-naval` | Estructura naval |
| `pasarela-urbana` | Pasarela urbana |
| `tanque-industrial` | Tanque industrial |
| `arenado-pileta` | **Pileta** (publicado 26/07/2026, 6 fotos) |

| Campo | Detalle |
|-------|---------|
| **Objetivo** | Profundizar en un trabajo: contexto, alcance, cómo se hizo, resultado. |
| **CTA principal** | `CTASection` al pie. |
| **CTAs secundarios** | Breadcrumbs y bloque "Seguir viendo" (evita callejones sin salida). |
| **Conversiones** | Post-lectura → `/contacto` o WhatsApp. |

**Build:** `generateStaticParams` + `generateMetadata` por proyecto. Schema `CreativeWork` + `BreadcrumbList`.

⚠️ La sección del detalle se llama **"Ficha del trabajo"** (antes "Parámetros técnicos") y ya no incluye normas ni mediciones.

---

## `/preguntas-frecuentes` — FAQ

| Campo | Detalle |
|-------|---------|
| **Objetivo** | Resolver las objeciones del comprador simple: qué es el arenado, in situ, polvo, precio, piletas, "¿hacen granallado?" (no). |
| **CTA principal** | Bloque final con link a `/contacto`. |
| **CTAs secundarios** | Accordion informativo; WhatsApp flotante. |
| **Intención SEO** | Preguntas frecuentes de arenado en Buenos Aires; lenguaje sin jerga. |
| **Conversiones** | Usuario informado → `/contacto` o WhatsApp. |

**Contenido:** 14 preguntas en `src/lib/faqs.ts` + schema `FAQPage`. La landing de piletas usa un set aparte (`faqsPiletas`) sobre el mismo `FaqAccordion` parametrizable.

---

## `/contacto` — Landing WhatsApp-first

| Campo | Detalle |
|-------|---------|
| **Objetivo** | Convertir a WhatsApp. **Es landing de Google Ads** — por eso la ruta se mantiene aunque ya no haya formulario. |
| **CTA principal** | **`WhatsAppCTA`** grande ("Escribinos por WhatsApp"). |
| **CTAs secundarios** | Link a `/arenado-de-piletas`; WhatsApp flotante. |
| **Intención SEO** | Contacto / presupuesto de arenado. |
| **Conversiones** | `contact_whatsapp` (única conversión del sitio). |

**Metadata:** title `Contacto y presupuesto de arenado`.

**Contenido:** `<h1>` con keyword · promesa (visita y presupuesto sin costo) · CTA de WhatsApp · 3 puntos (foto / respuesta rápida / zona) · bloque "Qué nos ayuda saber".

⛔ **No borrar esta ruta** (está en el sitemap, la enlazan home, landing, Header y Footer, y es destino de anuncios) y **no reintroducir el formulario** sin decisión del dueño.

---

## `/politica-de-privacidad` y `/terminos-y-condiciones`

| Campo | Detalle |
|-------|---------|
| **Objetivo** | Cumplimiento legal y confianza. |
| **CTA principal** | Ninguno comercial. |
| **Conversiones** | Ninguna (solo el flotante global). |

✅ **Actualizadas el 02/08/2026** al canal único WhatsApp: declaran que el sitio no tiene formularios ni pide datos, que el contacto ocurre dentro de WhatsApp y que la medición no recibe PII. La política además tenía un **bug de render** (el bloque "Correo electrónico" del responsable mostraba la etiqueta sin valor) — corregido leyendo `BUSINESS.email` de `siteConfig.ts`.

---

## Páginas de sistema

| Archivo | Objetivo |
|---------|----------|
| `not-found.tsx` | 404 en español con `<h1>` y CTAs |
| `error.tsx` | Error de runtime en español |
| `loading.tsx` | Estado de carga |

---

## Conversiones globales (todas las páginas)

| Mecanismo | Ubicación | Evento / acción |
|-----------|-----------|-----------------|
| **WhatsApp flotante** | `layout.tsx` → `WppBtn` (**uno solo**) | `contact_whatsapp` tras confirmar el modal |
| **CTAs inline de WhatsApp** | `WhatsAppCTA` en `/contacto` y `/arenado-de-piletas` | `contact_whatsapp` tras confirmar el modal |
| **Header / Footer** | Link **Contactanos** → `/contacto` | Navegación |

---

## Flujo de conversión

```
Ads / SEO → / · /servicios · /arenado-de-piletas
    → Confianza (casos, FAQ, antes/después)
    → WhatsApp (WppBtn o WhatsAppCTA)   ← la conversión
       ó → /contacto → WhatsApp
```

Prioridad de negocio (`.cursorrules`): maximizar el contacto calificado por WhatsApp, con foco en obra/restauración y PYME con galpón (la transición) sin resignar piletas (el lead más barato del historial).

---

## Al agregar una ruta

1. `src/app/{ruta}/page.tsx` (Server Component por default).
2. Un solo `<h1>`; `H2` para el resto.
3. Metadata + `canonical` self-referente + OG/Twitter.
4. Alta en `sitemap.ts` si es indexable.
5. Enlazarla desde Header/Footer o desde una página relevante (nada huérfano).
6. **Actualizar este archivo.**

⚠️ Nuevas landings por rubro (`/servicios/arenado-*`) **no se crean sin decisión explícita** (`CLAUDE.md`). La excepción aprobada fue `/arenado-de-piletas`.
