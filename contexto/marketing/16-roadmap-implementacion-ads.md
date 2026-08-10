# Roadmap de implementación de Google Ads — el secuenciador maestro

> Creado el **10/08/2026**. Es el **"¿qué sigue?" de la cuenta**: ordena todo el trabajo pendiente, dice qué bloquea qué y quién hace cada cosa.
>
> **No duplica el detalle.** El paso a paso con rutas de UI y valores exactos vive en `ads-config/08-controles-implementacion.md` (sesiones 1–8, pasos 1–51) y el diseño completo en `14-configuracion-objetivo-ads.md`. Este archivo los **secuencia contra el estado real de la cuenta**.
>
> Método obligatorio: `13-modo-experto-ads.md`. Ejecución **guiada**: el dueño clickea, Claude dirige y verifica por captura.

**Cuenta:** `953-841-6905` · ARS · America/Buenos_Aires · **sin saldo** (es la condición ideal para construir: un error de configuración no cuesta plata).

---

## Mapa de fases

| Fase | Qué | Quién | Estado |
|---|---|---|---|
| **0** | Reconciliación: qué ya está hecho | — | ✅ Cerrada |
| **1** | Destrabar los 10 datos bloqueantes | 👤 Dueño | 🔴 **AHORA** |
| **2** | Sesión de profundidad #1: capturas → diagnóstico | 🖥️ Guiada | 🔴 **AHORA** (en paralelo) |
| **3** | Decisión: qué pasa con la campaña vieja | 👤 + 🤖 | ⏸️ Depende de F2 |
| **4** | Sesiones 1–2: fundaciones + blindaje | 🖥️ Guiada | ⏸️ Depende de F1 |
| **5** | Sesión 3 ⭐: la conversión única | 🖥️ Guiada | ⏸️ Depende de F1 (GA4/GTM) |
| **6** | Sesión 4: recursos y copy | 🤖 + 🖥️ | ⏸️ Depende de F1 (datos del copy) |
| **7** | Sesiones 5–6: campañas, grupos, keywords, RSA | 🖥️ Guiada | ⏸️ Depende de F4, F5, F6 |
| **8** | Sesión 7: pre-flight | 🖥️ Guiada | ⏸️ Depende de F7 |
| **9** | Sesión 8: encendido escalonado | 👤 + 🖥️ | ⏸️ Depende de F8 |
| **10** | Primeras 4 semanas: validar y fijar la línea base | 🖥️ Guiada | ⏸️ |
| **11** | Cadencia permanente | 🖥️ + 👤 | ⏸️ |

**Tiempo de construcción (fases 4–8): ≈ 5 horas de sesión guiada**, todas **sin saldo cargado**.

---

## Fase 0 — Lo que YA está hecho (no repetir)

Verificado en la cuenta el 26 y 28/07/2026. Esto **no se vuelve a tocar** salvo que la Fase 2 muestre que se revirtió.

| Hecho | Detalle |
|---|---|
| ✅ **Tope de gasto real** | Presupuesto diario nativo bajado de 25.000 → **10.000/día** + guardián de **300.000/mes** instalado y programado, con heartbeat |
| ✅ **Scripts de lectura instalados** | `02-reporte-semanal`, `03-ngram-terminos`, `04-chequeo-urls` |
| ⏸️ **Autopilot (05) NO instalado** | **A propósito.** No se instala hasta tener conversiones limpias fluyendo |
| ✅ **Extensión/asset de LLAMADA quitada** | Era **la causa verificada** de las llamadas pidiendo trabajo. No se recrea nunca |
| ✅ **Negativas de empleo cargadas** | En concordancia de frase |
| ✅ **Socios de búsqueda y Display destildados** | Eran red de Display en una campaña de búsqueda |
| ✅ **AI Max apagado** | Incluida personalización de texto y expansión de URL final (mandaba clics a `/blog`, que no existe → 404) |
| ✅ **Idiomas corregidos** | Solo español (tenía inglés) |
| ✅ **`Lead form - Submit` a secundaria** | — |

### Lo que quedó pendiente del 28/07 y sigue abierto

| 🔴 | Pendiente | Por qué importa |
|---|---|---|
| 1 | **Objetivos de conversión de la campaña:** destildar "Clientes potenciales de llamada telefónica" **y** "Enviar formularios de clientes potenciales" → debe quedar **solo "Contactos"** | La campaña le sigue pidiendo llamadas a Google. Y el formulario **ya no existe** en el sitio |
| 2 | **Geo:** hoy es "Provincia de Buenos Aires" (27,5 M de alcance) con **"Presencia O interés"** | Excluye CABA, incluye Mar del Plata y Bahía Blanca, y suma gente de cualquier lado "interesada" en BA |
| 3 | **tCPA de 8.204** aprendiendo de conversiones sucias | Se **descarta**, no se ajusta (ver más abajo) |

⚠️ Los tres se resuelven dentro de las sesiones 3 y 5 — **no los toques sueltos ahora**: si la Fase 3 decide pausar la campaña vieja, arreglarlos ahí sería trabajo tirado.

---

## Fase 1 — Los 10 datos que destraban todo 🔴

Sin esto no se puede empezar. Están ordenados por lo que bloquean.

### Bloquean la Sesión 3 (medición) — los más urgentes

1. **ID de la propiedad de GA4** y si ya está vinculada a Google Ads.
2. **¿`contact_whatsapp` está marcado como evento clave en GA4?**
3. **¿El etiquetado automático está activo?** Sin `gclid` no hay atribución ni importación.
4. **¿Tenés acceso de publicación al contenedor GTM `GTM-W63ZV9D9`?** (usuario y permiso, no la contraseña).

### Bloquean la Sesión 5 (campañas)

5. **Lista real de partidos del GBA que atendés**, y hasta dónde viajás por un ticket alto (¿La Plata?).
6. **¿La cuenta arrastra `pileta`/`piscina` como negativa vieja?** Sería catastrófico e invisible: apagaría el servicio más rentable del historial. Se verifica en la Fase 2.

### Bloquean la Sesión 4 (copy de los anuncios)

7. **¿Se confirman los ~100 m²/día por equipo?** Aparece en 3 titulares. Si no es exacto, se cae de los tres.
8. **¿Arenás piletas de fibra de vidrio o solo de hormigón?** Y: ¿el arenado saca venecitas/revestimiento o solo pintura?

### Bloquean decisiones de puja (Fase 10)

9. **Ticket promedio por tipo de trabajo** y **tasa de cierre** WhatsApp → trabajo cobrado. Define si conviene asignar valor a la conversión.

### Administrativo

10. **Método de pago actual**, si hay algún **MCC** vinculado, y con qué usuario están autorizados los 4 scripts.

---

## Fase 2 — Sesión de profundidad #1 🔴

**El dossier `10-cuenta-ads-auditoria.md` es del 26/07 y la cuenta cambió el 28/07.** Antes de construir hace falta una foto actual. Son capturas que sacás vos y yo analizo.

| # | Captura | Qué voy a buscar |
|---|---|---|
| 1 | `Configuración` completa de `busqueda-arenadoIndustrial` | Que redes, AI Max e idiomas sigan como los dejamos, y el estado exacto de geo y objetivos de conversión |
| 2 | `Recomendaciones → Aplicación automática` (+ pestaña Historial) | Si Google aplicó algo solo desde el 28/07 |
| 3 | `Objetivos → Conversiones → Resumen`, con la columna "Optimización de la acción" | Las 11 acciones y cuáles siguen primarias |
| 4 | `Administrador → Config. de la cuenta → Palabras clave negativas` | **Si hay `pileta`/`piscina` ahí** (bloqueante #6) |
| 5 | Keywords con las **4 columnas de QS** | Qué componente falla en las keywords core |
| 6 | `Términos de búsqueda`, últimos 30 días | Si se coló empleo después de las negativas |
| 7 | `Herramientas → Acciones masivas → Scripts` | Última ejecución y errores de los 4 scripts |

**Salida:** diagnóstico priorizado por impacto × esfuerzo, y la confirmación de que la Fase 0 sigue en pie.

---

## Fase 3 — La decisión estructural que hay que tomar

**El plan de 29/07 dice: conservar la cuenta, pausar las campañas viejas como archivo y construir 3 campañas nuevas.** Pero el 28/07 le hicimos arreglos a `busqueda-arenadoIndustrial`, que sigue ENABLED. Hay una tensión real y conviene resolverla explícitamente.

| Opción | A favor | En contra |
|---|---|---|
| **A. Pausar la vieja y construir las 3 nuevas** *(recomendada)* | Estructura limpia por intención · presupuestos separados · sin herencia de keywords solapadas ni de un tCPA sucio · el historial de la cuenta (que es lo que importa para el QS) **se conserva igual** | Se "pierde" el trabajo de configuración del 28/07 — pero era corregir defaults, no construir |
| **B. Reciclar la vieja como Obra-Industrial** | Aprovecha lo ya configurado | Arrastra keywords en amplia, 3 variantes de `arenado` compitiendo entre sí, y una estrategia de puja aprendida sobre conversiones infladas. Se tarda más en limpiarla que en crearla |

**Mi recomendación: A.** El historial de calidad vive a nivel cuenta y dominio, no a nivel campaña: pausar la campaña vieja no quema señal. Y `busqueda-arenadoIndustrial` mezcla intenciones que el plan separa a propósito.

⚠️ **Pausar, nunca borrar.** El historial sirve de referencia.

---

## Fases 4–8 — La construcción (≈ 5 h, todo sin saldo)

Detalle exacto en `ads-config/08-controles-implementacion.md`. Acá va el orden y por qué es ese orden.

| Fase | Sesión | Duración | Qué deja listo | Puerta de salida |
|---|---|---|---|---|
| **4** | **1 — Fundaciones** | 45 min | Un solo administrador · cero MCC desconocidos · 2FA + passkey · **verificación de anunciante iniciada** (tarda semanas: se arranca ya) · moneda y zona horaria confirmadas | Captura de accesos y preferencias |
| **4** | **2 — Blindaje** | 45 min | Auto-apply **OFF en los 3 frentes** · etiquetado automático ON · informes de llamadas OFF · negativas de cuenta (empleo + técnicas) · 3 listas compartidas creadas | Capturas fechadas de cada OFF |
| **5** | **3 — Medición ⭐** | 60 min | **Una sola acción primaria:** `WhatsApp - contacto confirmado`, categoría Contacto, recuento **Una**, ventana 30 días · todo el historial sucio a Secundaria · un solo objetivo de cuenta (**Contactos**) · **exclusión de datos** del período sucio | En `Conversiones → Resumen` hay **exactamente una** primaria |
| **6** | **4 — Recursos** | 40 min | 6 sitelinks por campaña, 8–10 textos destacados, fragmentos estructurados, 4–6 imágenes. **Redactados y versionados en el repo**, pasados por la lista de bloqueo | Todo el copy auditable fuera de Google |
| **7** | **5 — Campañas** | 60 min | Las 3 campañas **en pausa**: redes OFF, ubicaciones explícitas en **Presencia**, AI Max OFF, amplia a nivel campaña OFF, presupuestos 3.000/1.250/750, **Maximizar clics con tope de CPC 350**, sufijo UTM, exclusiones de IP, listas de negativas aplicadas con su ruteo | Captura de cada campaña contra el checklist |
| **7** | **6 — Grupos y anuncios** | 60 min | **6 grupos** (no más), keywords solo **frase y exacta**, **1 RSA por grupo** con pinning en pools de 3 | Cero keywords en amplia en toda la cuenta |
| **8** | **7 — Pre-flight** | 30 min | El checklist completo de 7 bloques (URLs, conversión, blindaje, campañas, keywords, anuncios, scripts) | **No se enciende con un solo ítem en rojo** |

### Por qué este orden y no otro

- **La medición va antes que las campañas.** Al revés hay que rehacer los objetivos campaña por campaña y se resetea el aprendizaje.
- **El blindaje va antes que todo lo demás.** Si auto-apply está ON mientras construís, Google puede tocar lo que vas armando.
- **Los recursos se redactan antes de crear las campañas** para no dejar huecos de superficie en la SERP cuando arranquen.
- **La verificación de anunciante se inicia en la primera sesión** porque tarda semanas y bloquea el asset de nombre y logo.

---

## Fase 9 — Encendido escalonado (con saldo)

1. Cargar saldo. Activar **solo `AR-Search-General-Marca`** (750/día, el riesgo más bajo). Las otras dos siguen en pausa 24 h.
2. **D+1:** confirmar que la conversión aparece en la columna **"Conversiones"** —no solo en "Todas las conv."— y que el estado dice **"Registrando conversiones"**. Captura obligatoria a la bitácora.
   ⛔ Si aparece solo en "Todas las conv.", quedó como Secundaria: **corregir antes de activar el resto.**
3. **D+1:** conversión de prueba real (clic al CTA → confirmar el modal) y verificar que el chat le llegó al dueño.
4. Con la medición verificada, activar **Obra-Industrial** y **Piletas**.
5. **D+3:** Administrador de políticas (cero rechazos) + `Vista previa y diagnóstico`: una consulta de pileta debe disparar **Piletas** hacia `/arenado-de-piletas`; una consulta de empleo **no debe disparar nada**.
   ⛔ **Prohibido googlearse:** genera impresiones sin clic y baja el CTR esperado, que es uno de los 3 componentes del QS.

---

## Fase 10 — Las primeras 4 semanas

| Cuándo | Qué |
|---|---|
| **D+7** | Primer ciclo semanal completo: términos de búsqueda → negativas, y primer cálculo del **gasto ciego** |
| **D+14** | **No tocar nada hasta acá** salvo negativas y roturas. Se está fijando el CPA base real |
| **D+30** | Re-verificar auto-apply, AI Max y recursos automatizados **otra vez** · primer QS con los 3 componentes · primer cruce Ads ↔ GA4 ↔ chats reales |
| **Semana 4–5** | Si hay **≥15 conversiones limpias en 30 días**, recién ahí evaluar el pase a **Maximizar conversiones** (sin CPA objetivo), en cartera con Obra-Industrial + Piletas y **General-Marca afuera** |

> ⚠️ **CPA objetivo: descartado como destino de este año.** La regla es presupuesto diario ≥ 2× el CPA objetivo. Con 3.000/1.250/750, el tCPA máximo posible sería 1.500/625/375 y el CPA real esperado está entre 3.400 y 5.500. Cualquier target honesto sería 2–4× el presupuesto de su campaña.

**El tCPA de 8.204 que hay cargado se descarta, no se ajusta:** aprendió de 182 "conversiones" que mezclan visitas al sitio, engagements y llamadas. No hay línea base de CPA válida en esta cuenta; se construye desde el día que quede una sola primaria limpia.

---

## Fase 11 — Cadencia permanente

Definida en `ads-config/08-controles-implementacion.md` §8.3. En una línea cada una:

- **Diario (2 min):** ¿hubo gasto? ¿llegó el heartbeat? **No se toca nada** — es detección.
- **Semanal (30 min, lunes):** términos → negativas · historial de cambios (todo cambio necesita un responsable) · pacing · URLs en 200. **No se tocan pujas ni presupuestos.**
- **Quincenal (45 min):** keywords sin impresiones o sin conversiones · cuota de impresiones perdida · descartar recomendaciones · **re-verificar los 3 frentes de automatización**.
- **Mensual (1,5 h):** QS por componente · RSAs · políticas · **cruce Ads ↔ GA4 ↔ chats reales** (el único juez) · KPIs.
- **Trimestral:** estructura vs mapa de keywords · estacionalidad de piletas · % obra/PYME · revisar el tope por inflación.

**Regla dura:** un cambio estructural por vez, **14 días** de datos antes del siguiente, y todo a `08-bitacora.md` el mismo día.

---

## Puertas duras (lo que me frena y necesita al dueño)

| Puerta | Cuándo aparece |
|---|---|
| **Los clics los hacés vos.** La UI de Ads crashea la automatización y el harness bloquea tipear montos | Todas las sesiones |
| **Los 10 datos de la Fase 1** | Antes de las sesiones 3, 4 y 5 |
| **Cargar saldo y método de pago** | Fase 9 |
| **Acceso de publicación a GTM** | Sesión 3 — sin publicar el contenedor no hay conversión |
| **Verificación de anunciante** | Tarda semanas; solo la puede iniciar el titular |

---

## Relacionado

Diseño completo: `14-configuracion-objetivo-ads.md` + `ads-config/` · Método: `13-modo-experto-ads.md` · Dossier: `10-cuenta-ads-auditoria.md` · Keywords: `03-keywords-maestro.md` · Scripts: `06-google-ads-scripts.md` · KPIs: `07-medicion-y-kpis.md` · Bitácora: `08-bitacora.md`
