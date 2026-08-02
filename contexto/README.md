# Sistema de contexto del proyecto

## Objetivo

Centralizar información para asistentes de IA — **Claude Code** como agente principal (entra por `CLAUDE.md`), también Cursor u otros — y para el desarrollo técnico del sitio Arenados Lucho. Cada archivo cubre un tema acotado para que el asistente entienda el proyecto sin releer todo el código.

> **Marketing:** la estrategia y operación de SEO + Google Ads vive en la subcarpeta [`marketing/`](./marketing/README.md) (visión, migración de dominio, keywords, operación de Ads, scripts). Los archivos `00-20` de esta carpeta son la capa técnica del sitio.

## Reglas generales

- Mantener archivos **cortos** (ideal: 1–3 pantallas).
- **Actualizar** después de cambios importantes (rutas nuevas, landings eliminadas, decisiones de nav, etc.).
- **Evitar duplicación**: si algo ya está en otro archivo, enlazarlo en lugar de copiarlo.
- Usar **lenguaje concreto** (rutas reales, nombres de componentes, URLs).
- No guardar secretos ni credenciales (usar referencias a variables de entorno).

---

## Cómo usar `/contexto`

### En Claude Code (principal)

Pedí la tarea y nombrá el archivo: *"leé `contexto/07-seo-tecnico.md` y agregá canonical a /servicios"*. `CLAUDE.md` ya enruta a esta carpeta automáticamente; para marketing, el punto de entrada es `marketing/README.md`.

### En Cursor

1. Adjuntá el archivo relevante con `@contexto/NN-nombre.md` (ej. `@contexto/07-seo-tecnico.md`).
2. Para cambios amplios, adjuntá **2–3 archivos** como máximo (ej. `03-rutas` + `04-componentes` + `14-reglas`).
3. Si no existe documentación del tema, creá o completá el archivo correspondiente y volvé a pedir el cambio.

### En ChatGPT u otros

Copiá el contenido del archivo que aplique o pegá el índice + el archivo necesario al inicio del chat.

### Flujo recomendado

1. Identificá el tipo de tarea (ver tabla abajo).
2. Abrí el archivo indicado y verificá que esté actualizado.
3. Pedí el cambio referenciando ese contexto.
4. Tras merge o deploy, actualizá el archivo si cambió algo estructural.

---

## Qué archivo consultar según el problema

| Si necesitás… | Archivo |
|---------------|---------|
| Entender el negocio, tono, zonas, servicios | `00-proyecto-general.md` |
| Versiones, Next.js, dependencias, patrones | `01-stack-y-arquitectura.md` |
| Dónde va cada cosa en el repo | `02-estructura-del-repo.md` |
| Rutas activas, páginas eliminadas, App Router | `03-rutas-y-paginas.md` |
| Header, footer, secciones, shadcn | `04-componentes-ui.md` |
| Presupuesto, WhatsApp, CTAs, conversión | `05-formularios-y-conversion.md` |
| GTM, GA4, `dataLayer`, eventos | `06-tracking-y-analytics.md` |
| Metadata, sitemap, canonical, schema | `07-seo-tecnico.md` |
| Landings de Ads, mensajes de campaña | `08-google-ads-y-landings.md` |
| JSON de datos, servicios externos, integraciones | `09-api-y-servicios.md` |
| Tailwind, colores, fuentes, UI | `10-estilos-y-design-system.md` |
| Imágenes, LCP, build, velocidad | `11-performance.md` |
| Validación, env, buenas prácticas | `12-seguridad-y-validaciones.md` |
| Cómo pedirle cosas al agente en Cursor | `13-workflow-cursor.md` |
| Estándares al escribir código | `14-reglas-de-implementacion.md` |
| Error conocido o regresión | `15-bugs-conocidos.md` |
| Refactors pendientes, legacy | `16-deuda-tecnica.md` |
| Próximos pasos del producto/técnico | `17-roadmap-tecnico.md` |
| Por qué se decidió X (ADRs) | `18-decisiones-tecnicas.md` |
| Producción, Vercel, variables | `19-deploy-y-entornos.md` |
| Plantillas de prompts repetibles | `20-prompts-reutilizables.md` |
| **Visión, metas, KPIs de marketing** | `marketing/00-vision-y-objetivos.md` |
| **Keywords y negativas (fuente única)** | `marketing/03-keywords-maestro.md` |
| **Operación Google Ads / autopilot** | `marketing/05-…` y `marketing/06-…` |
| **Automatizaciones vigentes y cómo frenarlas** | `marketing/09-automatizaciones.md` |
| **Qué se hizo y por qué (historial marketing)** | `marketing/08-bitacora.md` |

### Ejemplos rápidos

- **“Cambiar el menú”** → `03-rutas-y-paginas` + `04-componentes-ui` + `18-decisiones-tecnicas`
- **“Nueva sección en home”** → `04-componentes-ui` + `10-estilos-y-design-system`
- **“El build falla”** → `01-stack-y-arquitectura` + `15-bugs-conocidos`
- **“Actualizar landing de servicios”** → `03-rutas-y-paginas` + `00-proyecto-general` + `07-seo-tecnico`

---

## Índice de archivos

| Archivo | Tema |
|---------|------|
| [00-proyecto-general.md](./00-proyecto-general.md) | Negocio, objetivos, audiencia |
| [01-stack-y-arquitectura.md](./01-stack-y-arquitectura.md) | Next.js, dependencias, patrones |
| [02-estructura-del-repo.md](./02-estructura-del-repo.md) | Carpetas, convenciones de nombres |
| [03-rutas-y-paginas.md](./03-rutas-y-paginas.md) | App Router, landings activas |
| [04-componentes-ui.md](./04-componentes-ui.md) | Componentes, shadcn, layouts |
| [05-formularios-y-conversion.md](./05-formularios-y-conversion.md) | CTAs, presupuesto, WhatsApp |
| [06-tracking-y-analytics.md](./06-tracking-y-analytics.md) | GTM, GA4, eventos |
| [07-seo-tecnico.md](./07-seo-tecnico.md) | Metadata, sitemap, schema |
| [08-google-ads-y-landings.md](./08-google-ads-y-landings.md) | Campañas, páginas de aterrizaje |
| [09-api-y-servicios.md](./09-api-y-servicios.md) | APIs, datos, integraciones |
| [10-estilos-y-design-system.md](./10-estilos-y-design-system.md) | Tailwind, tokens, tipografía |
| [11-performance.md](./11-performance.md) | Core Web Vitals, imágenes |
| [12-seguridad-y-validaciones.md](./12-seguridad-y-validaciones.md) | Validación, env, buenas prácticas |
| [13-workflow-cursor.md](./13-workflow-cursor.md) | Cómo trabajar con el agente |
| [14-reglas-de-implementacion.md](./14-reglas-de-implementacion.md) | Estándares de código |
| [15-bugs-conocidos.md](./15-bugs-conocidos.md) | Issues abiertos |
| [16-deuda-tecnica.md](./16-deuda-tecnica.md) | Refactors pendientes |
| [17-roadmap-tecnico.md](./17-roadmap-tecnico.md) | Próximos pasos |
| [18-decisiones-tecnicas.md](./18-decisiones-tecnicas.md) | ADRs / decisiones |
| [19-deploy-y-entornos.md](./19-deploy-y-entornos.md) | Producción, variables |
| [20-prompts-reutilizables.md](./20-prompts-reutilizables.md) | Prompts para tareas recurrentes |
| [marketing/](./marketing/README.md) | **Estrategia y operación SEO + Google Ads (norte del proyecto)** |
