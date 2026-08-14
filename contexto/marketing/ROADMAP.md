# ROADMAP — el paso a paso del proyecto

Orden de ejecución de todo lo decidido. **Este archivo es el "¿qué sigue?"**: al completar un paso, tildarlo, anotar la fecha y registrar en `08-bitacora.md`. Cada paso dice QUIÉN lo hace: 🤖 Claude Code (sesión sobre el repo) · 🖥️ Sesión de Chrome (Claude maneja, dueño mira) · 👤 Dueño solo.

## ✅ Fase 0 — Base (COMPLETADA, jul 2026)

- [x] Dominio migrado a Vercel (`www.arenadoslucho.com`), Framer dado de baja.
- [x] `SITE_URL` corregido; `/robots.txt` y `/sitemap.xml` en 200 (PR #1).
- [x] Cuenta de Ads auditada (dossier `10-…`); gasto topeado (10.000/día nativo + guardián); scripts de monitoreo instalados.
- [x] Sistema de contexto completo y alineado al negocio real (pivote documentado).

## ✅ Fase 1 — Sitio alineado al negocio (COMPLETADA, jul 2026 — 🤖 Claude Code)

> Era bloqueante de todo lo demás: no se relanzan campañas contra un sitio que promete lo que no hacemos.

1. [x] **Pivote de copy** (`02-estrategia-seo.md` Fase 1): `/servicios`, FAQ, hero de home, JSON-LD y metadata **sin Sa3/ISO/granallado**; entra PYMEs/in situ, piletas y "listo para pintar o revestir". Incluye **reescribir los 4 casos de `projectsInfo.json`** (hoy dicen ISO 8501/Sa 2/Sa 3 en `parametrosTecnicos`) y el componente que muestra esos campos. Respetar `.cursorrules` y los eventos GTM intocables. — ✅ **Hecho 26/07/2026** y mergeado en PR #2 (build limpio, tracking intacto — ver bitácora 26/07 (7)).
2. [x] **Publicar los casos que faltan** con fotos YA presentes en el repo (`public/images/services/arenadoParticular/`): caso **pileta** (6 fotos, sin publicar — prioridad) y opcional piezas. Inventario completo en `04-plan-de-contenidos.md`. — ✅ **Hecho 26/07/2026**: caso `arenado-pileta` publicado (6 fotos). Piezas sigue opcional/pendiente.
3. [x] **Landing `/arenado-de-piletas`** — ✅ **27/07/2026**: creada y luego **reconstruida al mapa ideal** (`11-landing-piletas-ideal.md`), con FAQ propia, galería antes/después y sección de contratistas.
4. [x] **Redirects 301** de las rutas legacy — ✅ **27/07/2026** en `next.config.js` (`/arenado-industrial`→`/servicios`, `/arenado-particular`→`/arenado-de-piletas`, `/presupuesto-rapido`→`/contacto`). ⚠️ El **apex→www** es config de dominio en Vercel, no código: sigue pendiente 👤.
5. [x] `npm run build` limpio → commit + push → verificar — ✅ mergeado vía **PR #2** y **PR #3**.
6. [x] **Canal único WhatsApp** (decisión del dueño 28/07): formulario, Formspree y `EmailBtn` eliminados; `/contacto` pasa a WhatsApp-first. Única conversión: `contact_whatsapp`.

## 🟠 Fase 2 — Medición y presencia (AHORA)

7. [ ] **Google Search Console** 👤/🖥️: verificar propiedad del dominio + enviar `sitemap.xml` + pedir indexación de las URLs principales.
8. [ ] **Limpiar conversiones de Ads** 🖥️: **una sola primaria, `contact_whatsapp`**; degradar todo el resto (visitas/engagements/map/`form_submit` obsoleta); verificar en GTM Preview. Detalle: `ads-config/02-conversiones.md`.
9. [ ] **Google Business Profile** 👤/🖥️: reclamar y optimizar la ficha (guía completa en `12-google-business-profile.md`), fotos reales, zona AMBA; pedir reseña a cada cliente. Al tenerla, **avisar la URL** para sumar `sameAs` en `siteConfig.ts`.
10. [ ] 👤 **Apex → www** en Vercel (config de dominio).

## 🟡 Fase 3 — Construcción de la cuenta de Ads (🖥️ sesión guiada)

> **Fuente única del orden: [`16-roadmap-implementacion-ads.md`](./16-roadmap-implementacion-ads.md)** — 11 fases con estado, dependencias y puertas duras. El detalle paso a paso está en `ads-config/08-controles-implementacion.md` y el diseño completo en `14-configuracion-objetivo-ads.md`. La construcción entera (≈5 h) se hace **sin saldo cargado**.

11. [ ] **Fase 1** — responder los **10 datos bloqueantes** (GA4, GTM, geo real, negativas heredadas, datos del copy, ticket promedio).
12. [ ] **Fase 2** — Sesión de profundidad #1: 7 capturas → diagnóstico del estado actual (el dossier es del 26/07 y la cuenta cambió el 28/07).
13. [ ] **Fase 3** — decidir qué pasa con la campaña vieja `busqueda-arenadoIndustrial` (recomendación: pausarla como archivo).
14. [ ] **Fases 4–8** — las 8 sesiones: fundaciones · blindaje · **la conversión única ⭐** · recursos · campañas · grupos y RSA · pre-flight.
15. [ ] **Fase 9** — 👤 recargar saldo → encender **General-Marca primero** → validar la medición a D+1 → activar el resto.
16. [ ] **Fase 10** — **no tocar 14 días** (se fija el CPA base real); a la semana 4–5, evaluar Maximizar conversiones si hay ≥15 conversiones limpias.
17. [ ] Instalar el **autopilot (05)** — recién con conversiones limpias fluyendo; ahí el círculo autónomo queda cerrado.

## 🟢 Fase 4 — Rutina de crecimiento (permanente)

18. [ ] **Semanal:** llegan los emails de los scripts (lunes) → pegarlos en un chat de Claude → aplicar lo acordado. El informe SEO de los lunes marca la prioridad técnica de la semana.
19. [ ] **Mensual:** completar KPIs en `07-medicion-y-kpis.md` (la línea base del primer mes es sagrada), cruzar los **chats reales de WhatsApp** (% obra/PYME = la métrica de la transición), publicar 1–2 casos nuevos, revisar Search Console → mapa de keywords.
20. [ ] **Escalar:** con CPA estable y trabajos cobrados → subir presupuesto 20–30% por vez hacia el tope de 300.000/mes; ago–sep subir piletas por estacionalidad.
21. [ ] **Estacional:** rotar el bloque de invierno de `/arenado-de-piletas` a primavera/verano (~ago-sep) y registrarlo en la bitácora.
22. [ ] **Trimestral:** revisar la transición (¿más obra/PYME en el mix?), el Cluster 5 (¿trabajos chicos rentables?) y las landings candidatas del backlog.

---

**¿Perdido?** → `README.md` de esta carpeta es el router. **¿Por qué se decidió algo?** → `08-bitacora.md`. **Regla de oro:** un cambio grande por vez, y todo a la bitácora.
