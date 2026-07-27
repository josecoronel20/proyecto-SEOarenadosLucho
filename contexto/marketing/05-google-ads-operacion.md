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

## Fase 2 — Estructura de relanzamiento (corregida 26/07/2026 al negocio real)

> ⚠️ Reemplaza la estructura anterior: se **elimina el grupo `norma-sa3-iso`** (no hacemos arenado certificado — decisión del dueño) y **piletas gana campaña propia** (el lead más barato del historial). El detalle del análisis: `10-cuenta-ads-auditoria.md` §6.

**Presupuesto de arranque (decisión 26/07): ~5.000/día (≈150.000/mes)** — la caja está justa hasta que entren trabajos cobrados. Escalar hacia el tope de 10.000/día (≈300.000/mes) recién cuando los primeros leads se conviertan en trabajos facturados, de a 20-30% por vez y con registro en bitácora. ⚠️ Al relanzar, ajustar el presupuesto diario nativo (hoy la campaña vieja quedó en 10.000/día — bajarlo o repartirlo).

Reparto de los 5.000/día iniciales (proporcional al plan de 3 campañas; **dentro de Obra-Industrial, favorecer al grupo `pymes-in-situ` con pujas**, porque el galpón PYME es el trabajo más rentable por día según el dueño):

```
AR-Search-Obra-Industrial  ~3.000/día   (pymes-in-situ con prioridad de puja)
AR-Search-Piletas          ~1.250/día
AR-Search-General-Marca      ~750/día
```

**Geografía:** AMBA por presencia como base. El dueño viaja más lejos (La Plata, interior cercano) **si la plata lo vale** → en los grupos de ticket alto (obra, pymes-in-situ) se puede ampliar el radio o sumar zonas puntuales si aparecen consultas buenas de afuera; en piletas y genéricos, AMBA estricto (el viaje mata el margen de un trabajo chico).

Estructura completa a plena escala (tope 10.000/día ≈ 300.000/mes):

```
1) AR-Search-Obra-Industrial      ~6.000/día  (la transición: tickets altos)
   ├─ obra-restauracion       → /servicios   (arenado en obra, paredes, fachada, restauración)
   ├─ industrial-limpieza     → /servicios   (arenado industrial ⭐frase, arenado de metal, limpieza industrial)
   ├─ estructuras-tanques     → /servicios   (estructuras metálicas, tanques, vigas)
   └─ pymes-in-situ           → /servicios   (arenado a domicilio, arenado in situ, quitar/sacar
        óxido, restaurar metal, arenado de camiones [prueba, puja baja], arenado de galpón)
        — el aliado #1 hoy: PYME con galpón y terreno grande; RSA propio:
        "Vamos con nuestro equipo a tu galpón. Camiones, tanques, estructuras:
        el metal queda listo para el nuevo revestimiento." (⚠️ chasis/carrocería
        siguen como negativas: intención de detailing de autos, 0 conv histórico)
   Negativa DE CAMPAÑA: pileta/piscina/alberca (el tráfico de piletas va a su campaña)

2) AR-Search-Piletas             ~2.500/día  (el pan de hoy; estacional)
   ├─ pileta-arenado          → /arenado-de-piletas (cuando exista; mientras: /)
   │    (arenado de pileta(s), limpieza pileta para pintar, restaurar pileta — frase/exacta)
   └─ pileta-sin-jerga        → /arenado-de-piletas
        (remover/sacar/quitar pintura de pileta, decapar pileta — el dueño que
         no sabe qué es "arenado"; gap sin competencia directa)
   RSA en DOS variantes: (a) dueño de casa — "Sacamos la pintura vieja de tu
   pileta. Queda lista para repintar o revestir"; (b) contratistas — "¿Renovás
   piletas? Tercerizá el arenado: precio por obra y turno rápido".
   ESTACIONALIDAD: invierno = mantener encendida con mensaje de anticipación
   ("lista antes del verano, turno inmediato") y pujas moderadas; desde ago-sep
   subir presupuesto/pujas hacia el pico (rebalancear contra la campaña 1 según
   demanda real, registrando el cambio en bitácora).

3) AR-Search-General-Marca       ~1.500/día
   ├─ genericos-exacta        → /servicios   (arenado [exacta, CPC topeado], arenados [exacta ⭐])
   └─ marca                   → /            (arenados lucho, arenado lucho)
```

Configuración común: solo Red de Búsqueda (sin Display ni partners) · AMBA por presencia · español · **frase/exacta, amplia prohibida** · "Maximizar clics" con tope de CPC → "Maximizar conversiones" recién con ≥15–30 conversiones/mes **limpias** · negativas de `03-keywords-maestro.md` cargadas ANTES de encender (técnicas a nivel cuenta: granallado, sa3, iso 8501, etc.) · recomendaciones automáticas de Google OFF · UTMs en URLs finales.

Anuncios (RSA) — mensajes permitidos: superficie lista para pintar/revestir · ~100 m²/día · 2 equipos propios · coordinación en obra · contención de polvo · visita y presupuesto sin costo. **PROHIBIDO: Sa3, ISO 8501, metal blanco, granallado.** Extensiones: sitelinks (/servicios, /arenado-de-piletas, /casos-de-exito, /preguntas-frecuentes, /contacto), texto destacado, ubicación (cuando exista GBP). **❌ Extensión/asset de LLAMADA: NO usar** (ver ⚠️ abajo).

> ⚠️ **Llamadas por trabajo = extensión de llamada (diagnóstico 27/07/2026).** Síntoma: cuando la campaña **gasta**, llegan muchas **llamadas pidiendo empleo**, aunque el número esté blindado en el sitio. Causa probable: la campaña vieja muestra el número vía **extensión/asset de llamada** a búsquedas de empleo (amplia, sin negativas de empleo) → el que busca laburo ve el aviso con botón de "Llamar". **Fix:** (1) **quitar la extensión de llamada** y rutear todo a WhatsApp/formulario del sitio; (2) concordancia **frase/exacta**; (3) cargar las **negativas de empleo** de `03-keywords-maestro.md`. Registrar en `08-bitacora.md` al aplicarlo.

**Expansión posterior** (solo con CPA limpio validado): campaña por tipo de obra → slugs de casos; remarketing; grupo de trabajos chicos (Cluster 5) en exacta con puja mínima.

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
