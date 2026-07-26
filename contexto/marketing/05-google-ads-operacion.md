# Google Ads — reactivación y operación

La cuenta **tiene historial pero está abandonada**. Este archivo define cómo reactivarla con seguridad y cómo operarla después. El mapeo técnico campañas ↔ landings ↔ eventos vive en `contexto/08-google-ads-y-landings.md`; los scripts de automatización en `06-google-ads-scripts.md`.

## Datos de la cuenta (completar en la primera sesión)

| Dato | Valor |
|------|-------|
| ID de cuenta (formato 000-000-0000) | _completar_ |
| Acceso | _email admin_ |
| Facturación activa | _sí/no_ |
| Última actividad real | _fecha_ |
| Conversiones configuradas hoy | _listar_ |
| Presupuesto mensual objetivo | **ARS 300.000/mes** (tope duro del guardián — decisión 25/07/2026) |

---

## Fase 1 — Auditoría (antes de gastar $1)

Con la cuenta abierta (o con el CSV del script de auditoría, ver `06-google-ads-scripts.md`):

- [ ] **Campañas**: cuáles existen, estado, últimas fechas con tráfico, gasto histórico, conversiones históricas.
- [ ] **URLs finales**: ¿apuntan al sitio Framer o a rutas legacy muertas? (lista de rutas prohibidas en `contexto/08-google-ads-y-landings.md`). Nada se activa hasta que toda URL final responda 200 en el sitio nuevo.
- [ ] **Conversiones**: qué acciones existen, cuáles son primarias, si siguen recibiendo pings. Objetivo final: primarias = `form_submit_success` (como `generate_lead` de GA4) y `contact_whatsapp`; secundaria = `contact_email`.
- [ ] **Vinculaciones**: GA4 vinculado; Search Console vinculado; etiquetado automático (gclid) activo.
- [ ] **Términos de búsqueda históricos**: exportar y correr n-gram → primera lista de negativas real.
- [ ] **Keywords**: concordancias usadas (¿amplia sin negativas? = plata quemada), QS histórico.
- [ ] Registrar TODO en `08-bitacora.md` como línea base.

**Regla:** no "arreglar" las campañas viejas por partes. Auditar, aprender del historial, y armar la estructura nueva limpia (pausar lo viejo, no borrarlo: el historial de datos vale).

## Fase 2 — Estructura de relanzamiento (mínima y medible)

Arrancar chico: **una sola campaña Search** hasta validar medición y calidad de leads.

```
Campaña: AR-Search-Industrial          (presupuesto: 100% del disponible inicial)
├─ Grupo: arenado-industrial     → /servicios   (kws Cluster 1 core)
├─ Grupo: estructuras-metalicas  → /servicios   (kws por tipo de superficie)
├─ Grupo: norma-sa3-iso          → /servicios   (kws técnicas, lead premium)
└─ Grupo: marca                  → /            (arenados lucho — barato, defensivo)
```

Configuración: solo Red de Búsqueda (sin Display ni partners) · zona: AMBA + radio que cubra las zonas de trabajo reales · idioma español · concordancia de frase y exacta (amplia solo más adelante y con negativas maduras) · puja inicial "Maximizar clics" con tope de CPC → pasar a "Maximizar conversiones" cuando haya ≥15–30 conversiones/mes · lista de negativas del `03-keywords-maestro.md` aplicada desde el día 1.

Anuncios (RSA): titulares desde los "mensajes clave" de `contexto/08-google-ads-y-landings.md` (Sa3/ISO 8501 · ~100 m²/día · equipos propios · visita técnica sin costo · presupuesto rápido). Extensiones: enlaces de sitio (/servicios, /casos-de-exito, /preguntas-frecuentes, /contacto), texto destacado, ubicación (cuando exista GBP). URLs finales con UTMs según plantilla de `contexto/08-google-ads-y-landings.md`.

**Expansión posterior** (solo con CPA validado): campaña casos/tipos de obra → slugs; remarketing; particular con presupuesto acotado.

## Fase 3 — Operación continua

| Frecuencia | Tarea | Con qué |
|------------|-------|---------|
| Semanal | Revisar términos de búsqueda → negativas nuevas | Script n-gram + Claude |
| Semanal | Reporte de rendimiento (gasto, CPA, QS, URLs rotas) | Script auditoría + Claude |
| Quincenal | Pausar keywords sin impresiones/conversiones; ajustar pujas | Datos del script |
| Mensual | Revisar RSAs (fuerza del anuncio, combinaciones), probar titulares | Claude redacta variantes |
| Mensual | Cruzar Ads vs GA4 vs inbox real (¿los leads son calificados?) | `07-medicion-y-kpis.md` |

## Reglas duras

1. **Nunca** activar campañas con URLs finales que no respondan 200.
2. No optimizar hacia `form_submit` (intento) — solo `form_submit_success` y `contact_whatsapp` son leads.
3. Un cambio estructural por vez, con 1–2 semanas de datos antes del siguiente. Todo a `08-bitacora.md`.
4. Presupuesto: subir máximo 20–30% por vez y solo con CPA estable.
5. Ignorar las "recomendaciones automáticas" de Google (y la aplicación automática de recomendaciones debe estar **desactivada**) salvo análisis propio.
