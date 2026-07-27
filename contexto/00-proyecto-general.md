# Proyecto general — Arenados Lucho

> **Reescrito el 26/07/2026 con el contexto real del dueño** — reemplaza la versión "técnica certificada" anterior.

## Resumen ejecutivo

**Arenados Lucho** es una empresa de **arenado (sandblasting) "sin vueltas"** en **Buenos Aires y AMBA**: limpieza y preparación de superficies rápida, prolija y a buen precio, con **2 equipos completos propios**. El sitio web es el canal de captación de consultas (formulario, WhatsApp, email).

**Importante — qué NO es el negocio:** no se hace arenado técnico con mediciones profesionales (grado Sa3 certificado, ISO 8501, perfil de anclaje, informes) **ni granallado**. Trabajos con esos requerimientos se rechazan (ej.: naves de estaciones de tren — pagaban mucho pero exigían calidad certificada). El sitio y las campañas **no deben prometer nada de eso**.

Dominio de producción: `https://www.arenadoslucho.com` (Vercel; migrado desde Framer el 25/07/2026 — el `.com.ar` nunca estuvo operativo, no usarlo).

> **Estrategia y operación de marketing (SEO + Google Ads):** carpeta [`marketing/`](./marketing/README.md) — es el norte del proyecto. Metas y KPIs: `marketing/00-vision-y-objetivos.md` y `marketing/07-medicion-y-kpis.md`.

---

## Objetivo comercial y transición

- **Hoy:** hay pocos trabajos → se toma casi cualquier arenado (piletas, paredes, piezas, trabajos chicos).
- **Transición (el norte):** crecer hacia **obras en construcción, restauración de edificios antiguos y limpieza industrial básica** — tickets más altos, sin requerimientos técnicos, pagan bien.
- Generar consultas de gente que quiere algo **sencillo, rápido y bien hecho**, y filtrar (con copy y negativas) al comprador técnico que pide certificaciones.

## Tipo de clientes

### El cliente ideal (hacia donde vamos)

- **Arquitectos** que remodelan casas o edificios y necesitan superficies listas para el revestimiento que van a aplicar — sin especificación técnica.
- **Encargados / responsables de empresas** que quieren restaurar y repintar una zona de la fábrica o depósito por estética o mantenimiento simple.
- **Constructoras y obras** en ejecución: arenar superficies, coordinar accesos, cumplir plazos.

### Lo que trae trabajo hoy (bienvenido)

- **PYMEs con galpón — el mejor aliado actual:** tienen terreno grande (trabajo in situ **sin quejas de vecinos**, la queja frecuente en lo doméstico), muchas estructuras metálicas, y piden restaurar camiones, carros, tanques y hierros grandes. Trabajos medianos que se cobran bien, cero técnica: quitar óxido/pintura y dejar el metal listo para revestir.
- **Piletas domésticas** para repintar o revestir — históricamente el lead más barato y frecuente (estacional: pico en verano; en invierno, anticipación y contratistas).
- Paredes y fachadas de casas para repintar; vigas para antióxido básico; tanques como limpieza.
- Trabajos chicos y piezas puntuales: se aceptan mientras haga falta trabajo (revisar cada trimestre).

### Restricción operativa clave: NO hay taller

Las piezas sueltas hay que recibirlas en el domicilio y conseguir terreno prestado para arenarlas — logística incómoda. Por eso **todo el marketing empuja el trabajo IN SITU** (casa, obra, galpón): "vamos con nuestro equipo a tu lugar". El sitio no debe invitar a "traer piezas al taller" (no existe). Mentalidad de copy: *el arenado es una lija potente — lo que se estropeó con el tiempo se arena in situ y queda listo para el nuevo revestimiento*.

### El cliente que NO buscamos

- El que pide **granallado** o **arenado certificado/medido** (Sa3, ISO 8501, anclaje, informes técnicos). Existir en esas búsquedas cuesta plata y termina en rechazo mutuo.

## Servicios

| Línea | Descripción |
|-------|-------------|
| **Obra / restauración** | Arenado de paredes, ladrillos, fachadas y estructuras en obras y edificios antiguos; queda listo para pintar o revestir |
| **PYMEs / galpones (in situ)** | Camiones, carros, tanques, estructuras y hierros grandes en el galpón del cliente — quitar óxido/pintura, metal listo para revestir |
| **Limpieza industrial básica** | Tanques, vigas, estructuras metálicas — limpieza y preparación para antióxido/recubrimiento simple, sin certificación |
| **Piletas** | Arenado de piletas para repintar o revestir |
| **Trabajos puntuales** | Piezas, superficies chicas — se aceptan, pero sin taller propio son la excepción (preferir in situ) |

**Incluye:** arenado, limpieza profunda, superficie lista para el paso siguiente, logística con equipos propios, coordinación en obra, contención de polvo razonable.
**No incluye:** pintado/revestimiento final, granallado, mediciones o certificaciones técnicas, reparaciones estructurales.

## Propuesta de valor

1. **Rapidez y cumplimiento** — ~100 m²/día por equipo; 2 equipos completos propios; coordinación con la obra.
2. **Prolijidad** — la superficie queda pareja y lista para pintar/revestir; contención de polvo.
3. **Sin vueltas** — presupuesto simple y visita sin costo; no pedimos especificaciones ni papeles.
4. **Precio justo** — competitivo justamente porque no cargamos estructura de certificación.
5. **Claridad de alcance** — decimos explícito qué no hacemos (granallado/certificado): menos fricción, mejores leads.

## Objetivo del sitio

| Objetivo | Detalle |
|----------|---------|
| SEO | Posicionar arenado industrial/obra/restauración + piletas en Buenos Aires (clusters en `marketing/03-keywords-maestro.md`) |
| Conversión | `/contacto`, WhatsApp flotante, CTAs coherentes |
| Credibilidad | Casos reales con fotos antes/después; FAQ del comprador simple |
| Filtro | El copy y el FAQ dicen explícito qué NO se hace → menos consultas técnicas perdidas |

⚠️ **Estado (26/07/2026):** el copy actual del sitio todavía promete Sa3/ISO 8501 — decisión tomada de **reescribirlo todo** (plan en `marketing/02-estrategia-seo.md`, Fase 1).

## KPIs importantes

Leads/mes (form + WhatsApp + email vía `dataLayer`) · **% de leads de obra/restauración** (la métrica de la transición) · CPA por campaña de Ads · tráfico orgánico por cluster. Detalle y rutinas: `marketing/07-medicion-y-kpis.md`.

## Datos operativos (aportados por el dueño, 26/07/2026)

- **Zona:** Buenos Aires / AMBA como base; **viajan más lejos (La Plata, interior cercano) si el trabajo lo justifica económicamente**. Copy: "trabajamos en todo Buenos Aires; consultanos por otras zonas".
- **Rentabilidad por día de trabajo:** 1º galpón PYME (camiones, tanques, hierros — el mejor negocio por día) · después obra/fachada y piletas. El presupuesto de Ads favorece a PYMEs por esto.
- **Fotos:** HAY MUCHAS fotos reales de trabajos (antes/después) → la galería de casos se puede armar YA, sin esperar trabajos nuevos.
- **Caja para Ads:** arranque a ~150.000/mes (5.000/día); escalar al tope de 300.000 cuando los leads se conviertan en trabajos cobrados.

## Contacto de negocio

- **Email:** arenadoslucho@hotmail.com
- **Horario referencia:** Lun–Sáb 08:00–18:00 (schema en layout)
- **Google Ads:** cuenta 953-841-6905 (login `josemaaria20@gmail.com`)
