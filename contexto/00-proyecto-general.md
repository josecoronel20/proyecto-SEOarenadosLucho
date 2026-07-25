# Proyecto general — Arenados Lucho

## Resumen ejecutivo

**Arenados Lucho** es una empresa de **preparación de superficies por arenado** (sandblasting) en **Buenos Aires y AMBA**. El sitio web es el canal principal de **captación B2B industrial** y, en menor medida, de consultas particulares. No vende pintura ni revestimientos finales: el core es **limpiar y preparar** la superficie para que otro proceso (pintura, recubrimiento) adhiera bien.

Dominio de producción: `https://www.arenadoslucho.com` (Vercel; migrado desde Framer el 25/07/2026 — el `.com.ar` nunca estuvo operativo, no usarlo).

> **Estrategia y operación de marketing (SEO + Google Ads):** carpeta [`marketing/`](./marketing/README.md) — es el norte del proyecto. Metas y KPIs operativos: `marketing/00-vision-y-objetivos.md` y `marketing/07-medicion-y-kpis.md`.

---

## Objetivo comercial

- Generar **consultas calificadas** (formulario, WhatsApp, mail) de empresas y obras que necesitan arenado industrial o de gran escala.
- Transmitir **capacidad operativa real** (equipos propios, m²/día, normas, logística en obra) para cerrar presupuestos con confianza.
- Filtrar leads poco alineados (trabajos chicos, domésticos fuera de alcance) con mensajes claros de qué sí y qué no se hace.

---

## Tipo de clientes

### Prioridad alta (industrial / B2B)

- Plantas industriales, depósitos, naves.
- Constructoras y mantenimiento de **estructuras metálicas**.
- Tanques, silos, infraestructura.
- Obras en ejecución con plazos y coordinación logística.

### Secundario (particular / menor escala)

- Personas o PYMEs que necesitan restaurar **piezas metálicas, piletas, fachadas** (línea “Arenado Particular” en comunicación).
- No es el foco principal del posicionamiento actual del sitio (hero y copy industrial).

### Clientes que se desalientan explícitamente

- Muebles, portones domiciliarios, rejas hogareñas.
- Vehículos o llantas.
- Trabajos artesanales o de muy bajo volumen.

---

## Servicios

| Línea | Descripción breve |
|-------|-------------------|
| **Arenado industrial** | Preparación de superficies metálicas en planta/obra; metal blanco (Sa3), ISO 8501; alto volumen. |
| **Arenado particular** | Limpieza/restauración para particulares (piezas, piletas, fachadas) — comunicado en home; landing dedicada en evolución. |

**Qué incluye el servicio:** arenado, limpieza profunda, preparación para pintura/recubrimiento, logística con equipos propios, coordinación de accesos y turnos.

**Qué no incluye:** pintura final, revestimientos, reparaciones estructurales, lavado a presión superficial como sustituto del arenado.

---

## Propuesta de valor

1. **Especialización industrial** — Procesos, plazos y estándares pensados para obra y mantenimiento, no solo “limpieza”.
2. **Equipos y personal propios** — Sin subcontratar la operación crítica; control de calidad y agenda.
3. **Capacidad medible** — Referencia operativa (~100 m²/día por equipo en estructura estándar; posibilidad de sumar equipos).
4. **Respuesta rápida** — Presupuesto y contacto por WhatsApp / formulario / mail.
5. **Claridad de alcance** — Listas explícitas de proyectos que sí y no se realizan (reduce fricción y leads incorrectos).

---

## Objetivo del sitio

| Objetivo | Detalle |
|----------|---------|
| **SEO** | Posicionar búsquedas de arenado industrial / preparación de superficies en Buenos Aires. |
| **Conversión** | Llevar a `/contacto`, WhatsApp flotante y CTAs en home y `/servicios`. |
| **Credibilidad** | Casos de éxito (`/casos-de-exito`), FAQ, copy técnico (normas, logística, mitigación de riesgo). |
| **Educación** | Explicar proceso, requisitos del cliente y límites del servicio antes del contacto. |

---

## KPIs importantes

- **Leads:** envíos de formulario (Formspree), clics WhatsApp, clics mail (eventos en `dataLayer`).
- **Tráfico orgánico / Ads:** sesiones en landings clave (`/`, `/servicios`, `/contacto`).
- **Calidad de lead:** consultas alineadas a industrial y volumen (menos consultas fuera de alcance).
- **Técnicos (web):** Core Web Vitals, indexación, errores de build/deploy.

Eventos de referencia en código: `contact_whatsapp`, `contact_email`, eventos de envío de formulario en `/contacto`.

---

## Prioridad actual

1. **Consolidar mensaje industrial** en home y `/servicios` (una landing de servicios con toda la info, sin micro-sitios por rubro salvo que se definan).
2. **Optimizar conversión:** formulario, botón WhatsApp (`WppBtn`), CTAs coherentes.
3. **Casos de éxito** como prueba social (`/casos-de-exito` + detalle por slug).
4. **Mantener stack simple:** sitio estático/SSR con JSON local, sin CMS ni base de datos hasta que haga falta.
5. **Tracking:** GTM (`GTM-W63ZV9D9`) y eventos en `dataLayer` para medir contactos.

---

## Contacto de negocio

- **Email:** arenadoslucho@hotmail.com  
- **Horario referencia:** Lun–Sáb 08:00–18:00 (schema en layout)
