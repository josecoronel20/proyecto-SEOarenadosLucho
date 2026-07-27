# ROADMAP — el paso a paso del proyecto

Orden de ejecución de todo lo decidido. **Este archivo es el "¿qué sigue?"**: al completar un paso, tildarlo, anotar la fecha y registrar en `08-bitacora.md`. Cada paso dice QUIÉN lo hace: 🤖 Claude Code (sesión sobre el repo) · 🖥️ Sesión de Chrome (Claude maneja, dueño mira) · 👤 Dueño solo.

## ✅ Fase 0 — Base (COMPLETADA, jul 2026)

- [x] Dominio migrado a Vercel (`www.arenadoslucho.com`), Framer dado de baja.
- [x] `SITE_URL` corregido; `/robots.txt` y `/sitemap.xml` en 200 (PR #1).
- [x] Cuenta de Ads auditada (dossier `10-…`); gasto topeado (10.000/día nativo + guardián); scripts de monitoreo instalados.
- [x] Sistema de contexto completo y alineado al negocio real (pivote documentado).

## 🔴 Fase 1 — Sitio alineado al negocio (AHORA — 🤖 Claude Code)

> Bloqueante de todo lo demás: no se relanzan campañas contra un sitio que promete lo que no hacemos.

1. [x] **Pivote de copy** (`02-estrategia-seo.md` Fase 1): `/servicios`, FAQ, hero de home, JSON-LD y metadata **sin Sa3/ISO/granallado**; entra PYMEs/in situ, piletas y "listo para pintar o revestir". Incluye **reescribir los 4 casos de `projectsInfo.json`** (hoy dicen ISO 8501/Sa 2/Sa 3 en `parametrosTecnicos`) y el componente que muestra esos campos. Respetar `.cursorrules` y los eventos GTM intocables. — ✅ **Hecho 26/07/2026** (en el código, **sin commit aún**; build limpio, GTM/Formspree intactos — ver bitácora 26/07 (7)).
2. [x] **Publicar los casos que faltan** con fotos YA presentes en el repo (`public/images/services/arenadoParticular/`): caso **pileta** (6 fotos, sin publicar — prioridad) y opcional piezas. Inventario completo en `04-plan-de-contenidos.md`. — ✅ **Hecho 26/07/2026**: caso `arenado-pileta` publicado (6 fotos). Piezas sigue opcional/pendiente.
3. [ ] **Landing `/arenado-de-piletas`** con las 3 secciones obligatorias (`04-plan-de-contenidos.md`).
4. [ ] **Redirects 301** del apex y rutas legacy en Vercel (`01-migracion-y-dominio.md` paso 2).
5. [ ] `npm run build` limpio → commit + push (con permiso del dueño) → verificar en producción.

## 🟠 Fase 2 — Medición y presencia (en paralelo al final de Fase 1)

6. [ ] **Google Search Console** 👤/🖥️: verificar propiedad del dominio + enviar `sitemap.xml` + pedir indexación de las URLs principales.
7. [ ] **Limpiar conversiones de Ads** 🖥️: primarias solo `form_submit_success` + `contact_whatsapp`; degradar la basura (visitas/engagements/map); verificar eventos en GTM Preview (`10-…` §4.5).
8. [ ] **Google Business Profile** 👤/🖥️: crear/reclamar ficha, fotos reales, zona AMBA; pedir reseña a cada cliente.

## 🟡 Fase 3 — Relanzamiento de Google Ads (🖥️ sesión de Chrome)

> Requisitos previos: Fase 1 pasos 1–3 + Fase 2 paso 7. Detalle completo: `05-google-ads-operacion.md` + `10-…` §6.

9. [ ] Cargar **negativas** (técnicas a nivel cuenta; pileta solo en campaña industrial) — `03-keywords-maestro.md`.
10. [ ] Crear las **3 campañas** (~5.000/día total: Obra-Industrial 3.000 con prioridad `pymes-in-situ` · Piletas 1.250 · General-Marca 750), RSAs por grupo (2 variantes en piletas), extensiones, recomendaciones automáticas OFF, UTMs.
11. [ ] Instalar el **autopilot (05)** — recién acá el círculo autónomo queda cerrado.
12. [ ] 👤 **Recargar saldo** → encender → **no tocar 1–2 semanas** (fijar CPA base real).

## 🟢 Fase 4 — Rutina de crecimiento (permanente)

13. [ ] **Semanal:** llegan los emails de los scripts (lunes) → pegarlos en un chat de Claude → aplicar lo acordado. El informe SEO de los lunes marca la prioridad técnica de la semana.
14. [ ] **Mensual:** completar KPIs en `07-medicion-y-kpis.md` (la línea base del primer mes es sagrada), cruzar leads del inbox (% obra/PYME = la métrica de la transición), publicar 1–2 casos nuevos, revisar Search Console → mapa de keywords.
15. [ ] **Escalar:** con CPA estable y trabajos cobrados → subir presupuesto 20–30% por vez hacia el tope de 300.000/mes; ago–sep subir piletas por estacionalidad.
16. [ ] **Trimestral:** revisar la transición (¿más obra/PYME en el mix?), el Cluster 5 (¿trabajos chicos rentables?) y las landings candidatas del backlog.

---

**¿Perdido?** → `README.md` de esta carpeta es el router. **¿Por qué se decidió algo?** → `08-bitacora.md`. **Regla de oro:** un cambio grande por vez, y todo a la bitácora.
