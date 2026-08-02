# Estructura del repositorio

Mapa de carpetas y responsabilidades. Usar antes de crear archivos nuevos para no duplicar ubicaciones.

```
proyecto-SEOarenadosLucho/
├── src/
│   ├── app/                    # Next.js App Router (rutas, layouts, metadata)
│   ├── components/             # UI React por dominio
│   └── lib/                    # Utilidades y datos estáticos
├── public/                     # Assets estáticos (sin procesar por bundler)
├── contexto/                   # Documentación para IA y equipo
├── .cursorrules                # Reglas de producto/conversión para Cursor
├── components.json             # Config shadcn/ui
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## `src/app/`

**Qué es:** Capa de rutas de Next.js (App Router). Cada carpeta con `page.tsx` = URL pública.

| Ruta en disco | URL |
|---------------|-----|
| `app/page.tsx` | `/` |
| `app/servicios/page.tsx` | `/servicios` |
| `app/casos-de-exito/page.tsx` | `/casos-de-exito` |
| `app/casos-de-exito/[slug]/page.tsx` | `/casos-de-exito/{slug}` |
| `app/preguntas-frecuentes/page.tsx` | `/preguntas-frecuentes` |
| `app/contacto/page.tsx` | `/contacto` |
| `app/politica-de-privacidad/page.tsx` | `/politica-de-privacidad` |

**Archivos globales:**

| Archivo | Para qué sirve |
|---------|----------------|
| `layout.tsx` | Layout raíz: Header, Footer, GTM, JSON-LD, `WppBtn` flotante |
| `globals.css` | Estilos globales + variables Tailwind |
| `loading.tsx` | UI de carga global |
| `error.tsx` | Error boundary |
| `not-found.tsx` | 404 global |

**Regla:** Metadata SEO (`export const metadata`) va en `page.tsx` o `layout.tsx` de la ruta.

---

## `src/components/`

**Qué es:** Componentes React reutilizables. **No** definir rutas aquí.

```
components/
├── common/           # Transversal: header, footer, CTAs, botones contacto
├── home/             # Solo secciones de la home (/)
├── servicios/        # Solo secciones de /servicios
├── casos-de-exito/   # Listado, filtros, detalle de casos
├── preguntas-frecuentes/
└── ui/               # Primitivos shadcn (Button, Card, Sheet, Accordion…)
```

### `components/common/`

| Archivo | Rol |
|---------|-----|
| `Header.tsx` | Nav desktop + menú móvil (Sheet) |
| `Footer.tsx` | Links, logo, legal |
| `CTASection.tsx` | Bloque final de conversión (video + link `/contacto`) |
| `WppBtn.tsx` | Botón flotante WhatsApp + evento GTM |
| `WhatsAppCTA.tsx` | CTA inline de WhatsApp + `dataLayer` (`EmailBtn.tsx` fue eliminado el 28/07/2026) |
| `H2.tsx` | Título de sección reutilizable |

### `components/home/`

Secciones de `/`: `HeroSection`, `TrustBar`, `IntroductionSection`, `ProjectsSection`, `ValueBullets`, `ServicesSection`, `HeroSecondaryCTA`, etc.

### `components/servicios/`

Secciones de `/servicios`: `ServiciosHero`, `BloqueDiferencial`, `AlcanceOperativo`, `LogisticaCoordinacion`, `AutoridadRapida`, `RequisitosCliente`, `MitigacionRiesgo`, `CasoDestacado`, …

### `components/casos-de-exito/`

`CasosHero`, `CasoCard`, `CasoDetalleContent`, `FiltroTipo` — consumen datos de `lib/projectsInfo.json`.

### `components/ui/`

Componentes base de **shadcn/ui** (Radix + Tailwind). Extender aquí antes de inventar variantes sueltas.

### `components/.gitkeep`

Placeholder; la carpeta es activa.

---

## `src/lib/`

**Qué es:** Lógica sin UI y datos estáticos.

| Archivo | Para qué sirve |
|---------|----------------|
| `utils.ts` | `cn()` — merge de clases Tailwind |
| `projectsInfo.json` | Casos de éxito (industrial): textos, imágenes, slugs |
| `getProjectBySlug.ts` | `getProjectBySlug`, `getAllSlugs`, tipos, `generateStaticParams` |
| `.gitkeep` | Mantiene carpeta en git |

**Regla:** Nuevo contenido tipo “listado JSON” → `lib/*.json` + helper en `lib/`.

---

## `hooks/` (no existe hoy)

Carpeta **recomendada** si aparecen hooks compartidos (`useMediaQuery`, etc.). Hoy el estado vive en Client Components locales.

---

## `contexto/`

**Qué es:** Documentación del proyecto para Cursor, ChatGPT y onboarding. **No** se importa en el build.

Ver `contexto/README.md` para índice y reglas de uso.

---

## `public/`

**Qué es:** Archivos servidos tal cual en `/nombre-archivo`.

```
public/
├── images/           # Logos, favicon, fotos de servicios y casos
│   └── services/     # arenadoIndustrial/, arenadoParticular/, subcarpetas por caso
├── videos/           # heroVideo.mp4, ctaVideo.mp4
└── favicon.png
```

**Regla:** Referenciar con rutas absolutas `/images/...`, `/videos/...` (no import desde `src` salvo `next/image` con path string).

---

## Raíz del proyecto (config)

| Archivo | Para qué sirve |
|---------|----------------|
| `.cursorrules` | Prioridad conversión, tono industrial, reglas de copy/CTA |
| `components.json` | Alias y paths para CLI shadcn |
| `tailwind.config.ts` | Colores `primary`, breakpoints, plugins |
| `next.config.js` | Config Next (images, strict mode) |
| `tsconfig.json` | Alias `@/*` → `src/*` |
| `.eslintrc.json` | Lint |
| `.gitignore` | Incluye `.vercel`, `node_modules` |

---

## Convenciones rápidas

| Quiero… | Dónde ponerlo |
|---------|----------------|
| Nueva página pública | `src/app/{ruta}/page.tsx` (+ `layout.tsx` si hace falta metadata compartida) |
| Sección de una página existente | `src/components/{dominio}/NombreSection.tsx` |
| Botón o card genérico | `src/components/ui/` |
| Datos estáticos (casos, listas) | `src/lib/*.json` + helper |
| Imagen o video fijo | `public/` |
| Doc para la IA | `contexto/` |
| Regla de negocio para Cursor | `.cursorrules` o `contexto/14-reglas-de-implementacion.md` |

---

## Rutas / enlaces pendientes (deuda)

Enlaces en UI **sin** `page.tsx` hoy:

| URL en código | Origen |
|-------------|--------|
| `/arenado-industrial` | `ServicesSection` (card) |
| `/arenado-particular` | `ServicesSection` (card) |
| `/terminos-y-condiciones` | `Footer` |

Corregir creando página, redirigiendo a `/servicios` o actualizando el `href`.
