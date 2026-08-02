# Cuenta de Google Ads — Auditoría, análisis y plan de relanzamiento

> **Dossier autocontenido** (fecha de corte **26/07/2026**) para analizar la cuenta de Google Ads de **Arenados Lucho** en cualquier chat, sin depender de la conversación donde se generó. Reúne: estado de la cuenta, radiografía cruda de 365 días, análisis de performance, y el plan de relanzamiento industrial (ya corregido con crítica adversarial).
>
> Fuentes: script `ads-scripts/01-auditoria-cuenta.js` (corrido 26/07) + análisis multi-agente. Reglas de negocio en `.cursorrules`; keywords/negativas en `03-keywords-maestro.md`; operación en `05-google-ads-operacion.md`; estado de automatizaciones en `09-automatizaciones.md`.

> ⚠️ **ACTUALIZACIÓN 26/07/2026 (tarde) — LEER ANTES DE EJECUTAR EL PLAN:** el dueño aportó el contexto real del negocio y **partes del §4 quedaron superadas**. Cambios vinculantes en **§6** (al final): se ELIMINA el grupo `norma-sa3-iso` y toda keyword técnica/granallado (no hacemos ese servicio), y **piletas pasa a campaña propia** con ~25% del presupuesto. Estructura vigente: `05-google-ads-operacion.md` Fase 2 · keywords/negativas vigentes: `03-keywords-maestro.md`.

---

## 1. Estado de la cuenta

| Dato | Valor |
|------|-------|
| Cuenta | **Arenados Lucho — 953-841-6905** |
| Login Google | `josemaaria20@gmail.com` · reportes de scripts a `impruvagencia@hotmail.com` |
| Moneda / zona | ARS / America/Buenos_Aires |
| Saldo | **SIN SALDO** (banner "Se agotó el saldo") → hoy no gasta |
| Campañas | Casi todas **REMOVED**; **1 sola ENABLED** (`busqueda-arenadoIndustrial`) + 1 PAUSED (`Leads-Performance Max-3`) |
| Gasto histórico | ~**2,9M ARS** en 365 días (la campaña ENABLED sola: 1,6M) |

**Cambios ya aplicados el 26/07/2026:**
- ✅ Presupuesto de `busqueda-arenadoIndustrial` bajado de **25.000 → 10.000/día** (freno de gasto real).
- ✅ Conversión "Lead form - Submit" pasada a **secundaria**. Las "Local actions" (Website visits, Other engagements) NO se pueden pasar a secundaria una por una (son "Alojada en Google") → se excluyen a nivel campaña al relanzar.
- ✅ Scripts instalados/programados: **guardián de presupuesto (06)** + lectura (**02** reporte, **03** n-gram, **04** URLs).
- ⏸️ **Autopilot (05) NO instalado** todavía (a propósito, hasta tener medición limpia + URLs 200 + data).

---

## 2. Radiografía cruda (auditoría, ventana 365 días)

### 2.1 Campañas
`campaña | estado | tipo | presupuesto/día | costo | clics | impr | conv | valorConv`

```
Arenado de Piletas | REMOVED | SEARCH | 5000 | 41631.23 | 119 | 1779 | 0 | 0
que es el arenado? | REMOVED | SEARCH | 6200 | 9092.29 | 13 | 331 | 1 | 1467.79
Arenado | REMOVED | SEARCH | 6200 | 196426.9 | 1184 | 26577 | 148 | 211222.93
Arenado industrial | REMOVED | SEARCH | 33823.66 | 0 | 0 | 0 | 0 | 0
maximo rendimiento | REMOVED | PERFORMANCE_MAX | 19000 | 23456.76 | 1600 | 22812 | 97 | 140391.74
constructora | REMOVED | SEARCH | 37649.39 | 66752.81 | 187 | 9128 | 24 | 34899.92
Arenado de Fachadas Domesticas viejo | REMOVED | SEARCH | 2500 | 17865.45 | 73 | 1051 | 8 | 11505.34
Arenado gral | REMOVED | SEARCH | 2500 | 17644.71 | 81 | 919 | 17 | 24453.28
Arenado de Piletas viejo | REMOVED | SEARCH | 2500 | 16192.11 | 92 | 1293 | 14 | 20148.25
Arenado Industrial / Construccion | REMOVED | SEARCH | 2500 | 9740.51 | 72 | 1035 | 12 | 17263.24
Arenado de Materiales y Piezas | REMOVED | SEARCH | 2500 | 16000.11 | 121 | 2752 | 14 | 20140.19
arenado residencial | REMOVED | SEARCH | 1500 | 3471.95 | 35 | 1712 | 0 | 0
Arenado Industrial | REMOVED | SEARCH | 2000 | 3716.56 | 24 | 308 | 2 | 2894.50
Arenado de Vehiculos | REMOVED | SEARCH | 1500 | 3340.62 | 8 | 436 | 0 | 0
Arenado de superficies | REMOVED | SEARCH | 1500 | 3340.81 | 13 | 335 | 1 | 1449.97
Tipos de arenado | REMOVED | SEARCH | 2500 | 113104.74 | 289 | 3475 | 12 | 17433.36
Arenado | REMOVED | SEARCH | 2500 | 116393.73 | 328 | 3927 | 15 | 21859.71
busqueda-arenadoDePiletas | REMOVED | SEARCH | 2000 | 27072.41 | 155 | 4702 | 4 | 4
busqueda-superficiesMetalicas | REMOVED | SEARCH | 2000 | 38500.66 | 125 | 1570 | 7 | 7
busqueda-arenadoMadera | REMOVED | SEARCH | 1000 | 12849.93 | 92 | 1519 | 7 | 7
busqueda-arenadoGeneral | REMOVED | SEARCH | 2000 | 100856.26 | 412 | 7356 | 27 | 27
busqueda-arenadoIndustrial | ENABLED | SEARCH | 25000→10000 (26/07) | 1599825.51 | 5859 | 132547 | 182 | 182
Leads-Performance Max | REMOVED | PERFORMANCE_MAX | 2000 | 20707.61 | 997 | 16178 | 72 | 72
busqueda-superficiesMetalicas #2 | REMOVED | SEARCH | 2000 | 0 | 0 | 0 | 0 | 0
Leads-Performance Max-3 | PAUSED | PERFORMANCE_MAX | 5000 | 30971.03 | 1008 | 14432 | 29 | 29
```

### 2.2 Top keywords por costo
`campaña | grupo | keyword | concordancia | estado | QS | costo | clics | conv`

```
busqueda-arenadoIndustrial | intencion "arenado industrial" | arenado | PHRASE | ENABLED | 5 | 208331.69 | 622 | 21
busqueda-arenadoIndustrial | intencion "arenado industrial" | arenado industrial | EXACT | ENABLED | 5 | 65106.42 | 122 | 6
busqueda-arenadoIndustrial | intencion "arenado industrial" | arenado | EXACT | ENABLED | 5 | 64754.02 | 131 | 9
busqueda-arenadoIndustrial | intencion "arenado metal" | arenado de metal | PHRASE | ENABLED |  | 55143.5 | 166 | 8.5
Arenado | Arenado General | arenado | PHRASE | ENABLED |  | 40356.87 | 104 | 0
Tipos de arenado | Arenado de Pileta | arenado pintura | PHRASE | ENABLED |  | 32246.82 | 75 | 1
busqueda-arenadoGeneral | intencion "arenado" | arenados | EXACT | ENABLED |  | 28134.64 | 87 | 10
busqueda-arenadoIndustrial | intencion "arenado metal" | arenado de metal | EXACT | ENABLED |  | 20947.94 | 32 | 1.5
busqueda-arenadoIndustrial | intencion "arenado industrial" | arenado industrial | PHRASE | ENABLED | 5 | 19636.81 | 45 | 6
Arenado | Arenado General | arenado y granallado | PHRASE | PAUSED |  | 18007.18 | 65 | 7
Arenado | Arenado en general | arenado | PHRASE | ENABLED |  | 17319.9 | 161 | 32
Tipos de arenado | Arenado industrial | arenado industrial | PHRASE | ENABLED |  | 13397.52 | 22 | 0
busqueda-arenadoIndustrial | intencion "arenado industrial" | arenados industriales | PHRASE | REMOVED |  | 12504.97 | 28 | 2
Arenado de Piletas | Grupo de anuncios 1 | arenado de metales | BROAD | ENABLED |  | 12356.53 | 42 | 0
Arenado | Arenado General | arenado | EXACT | ENABLED |  | 11393.51 | 26 | 3
Arenado | Arenado General | arenados | PHRASE | ENABLED |  | 11350.85 | 35 | 0
busqueda-arenadoGeneral | intencion "arenado" | arenado | PHRASE | REMOVED |  | 10237.59 | 48 | 3
Arenado | Arenado General | taller de arenado | EXACT | ENABLED |  | 9160.64 | 15 | 0
Arenado | Arenado de pileta | mantenimiento piletas | EXACT | REMOVED |  | 8847.35 | 12 | 3
Tipos de arenado | Arenado de Vehiculos | limpieza chasis | EXACT | ENABLED |  | 8840.96 | 16 | 0
Arenado | Arenado de pileta | limpieza piletas | PHRASE | ENABLED |  | 8229.93 | 30 | 1
Arenado | Arenado de pileta | mantenimiento piletas | PHRASE | ENABLED |  | 8221.61 | 19 | 1
busqueda-superficiesMetalicas | intencion "arenado metal" | arenado de metal | PHRASE | ENABLED |  | 7681.12 | 17 | 1
Arenado | Precios Arenados | precio de arenado | PHRASE | ENABLED |  | 6524.79 | 17 | 0
busqueda-superficiesMetalicas | intencion "arenado metal" | arenado de metales | PHRASE | REMOVED |  | 6506.61 | 26 | 1
Arenado gral | Limpieza profesional | limpieza profesional | EXACT | ENABLED |  | 6267.69 | 21 | 4
Arenado de Piletas | Grupo de anuncios 1 | zona norte | BROAD | ENABLED |  | 6180.63 | 4 | 0
Tipos de arenado | Arenado de Metales | arenado de metal | EXACT | ENABLED |  | 6168.84 | 6 | 0
Arenado de Piletas | Grupo de anuncios 1 | granallado | BROAD | ENABLED |  | 6138.68 | 19 | 0
Arenado | Arenado en general | servicio limpieza industrial | EXACT | ENABLED |  | 6080.42 | 17 | 8
Tipos de arenado | Arenado de Pileta | arenado de piletas | EXACT | ENABLED |  | 6068.85 | 8 | 1
Arenado | Arenado en general | servicio de limpieza industrial | BROAD | ENABLED |  | 5675.83 | 23 | 7
busqueda-arenadoGeneral | intencion "precio de arenado" | valor arenado | PHRASE | ENABLED |  | 5381.12 | 23 | 0
busqueda-arenadoGeneral | intencion "precio de arenado" | precio arenado | EXACT | ENABLED |  | 4983.75 | 16 | 0
constructora | Constructora gral | servicios hogar | BROAD | ENABLED |  | 4935.48 | 13 | 4
Arenado | Arenado en general | limpieza profunda | PHRASE | ENABLED |  | 4837.38 | 18 | 6
Arenado | Arenado de pileta | pileta pintura | PHRASE | ENABLED |  | 4607.32 | 22 | 0
Arenado | Arenado de pileta | piscina mantenimiento | PHRASE | ENABLED |  | 4591.66 | 14 | 1
Arenado | Arenado en general | limpieza industrial | PHRASE | ENABLED |  | 4426.16 | 7 | 3
Arenado | Arenado de pileta | limpieza de piletas | EXACT | ENABLED |  | 4238.24 | 8 | 3
Arenado | Arenado de pileta | restaurar piscina | PHRASE | ENABLED |  | 4189.75 | 18 | 1
Tipos de arenado | Arenado de Vehiculos | limpieza de chasis | EXACT | ENABLED |  | 4154.75 | 11 | 0
Arenado de Piletas | Grupo de anuncios 1 | arenado de piletas | BROAD | ENABLED |  | 4053.28 | 11 | 0
Tipos de arenado | Arenado de Vehiculos | limpieza de chasis y carroceria | EXACT | ENABLED |  | 3849.45 | 12 | 0
Tipos de arenado | Arenado de Metales | arenar metal | PHRASE | ENABLED |  | 3837.99 | 5 | 0
Arenado | Arenado de vehiculos | limpieza de chasis | PHRASE | ENABLED |  | 3716.33 | 43 | 1
constructora | Electricidad | electricista | BROAD | ENABLED |  | 3696.13 | 6 | 2
Tipos de arenado | Arenado de Metales | arenado de piezas metalicas | EXACT | ENABLED |  | 3384.27 | 8 | 0
busqueda-arenadoGeneral | intencion "arenado" | arenado | EXACT | REMOVED |  | 3305.84 | 8 | 0
Arenado de Piletas | Grupo de anuncios 1 | empresa de arenado | BROAD | ENABLED |  | 3107.8 | 6 | 0
Arenado | Arenado de pileta (repintar) | pintar pileta | EXACT | ENABLED |  | 2718.12 | 3 | 0
Arenado | Arenado de pileta | pintura de piscina | PHRASE | REMOVED |  | 2715.26 | 10 | 1
busqueda-arenadoDePiletas | intencion "arenado de pileta" | arenado de pileta | EXACT | ENABLED |  | 2519.48 | 4 | 0
constructora | Electricidad | electricista matriculado | BROAD | ENABLED |  | 2395.47 | 4 | 0
busqueda-arenadoMadera | Arenado de madera | arenado de madera | PHRASE | ENABLED |  | 2335.7 | 10 | 0
constructora | Constructora gral | servicios constructora | BROAD | ENABLED |  | 2332.53 | 2 | 1
busqueda-superficiesMetalicas | intencion "arenado metal" | arenado metal | PHRASE | REMOVED |  | 2317.17 | 5 | 1
busqueda-arenadoGeneral | intencion "arenado" | arenados | PHRASE | REMOVED |  | 2256.45 | 16 | 0
Arenado Industrial / Construccion | Preparacion para obra / recubrimientos | arenados industriales | BROAD | ENABLED |  | 2240.66 | 19 | 3
Arenado | Arenado de pileta | arenado de piletas | EXACT | ENABLED |  | 2156.07 | 8 | 4
constructora | Constructora gral | servicios tecnicos | BROAD | ENABLED |  | 2077.03 | 2 | 1
Arenado de Materiales y Piezas | Metales grandes | arenado de metales | BROAD | ENABLED |  | 2050.58 | 11 | 2
Arenado | Arenado de pileta (repintar) | limpieza piscina | PHRASE | ENABLED |  | 1999.85 | 4 | 1
Arenado | Arenado en general | arenadora | EXACT | ENABLED |  | 1999.35 | 14 | 3
Arenado | Arenado industrial | mantenimiento industrial | PHRASE | ENABLED |  | 1998.96 | 3 | 0
Tipos de arenado | Arenado de Madera | arenado de madera | EXACT | ENABLED |  | 1960.18 | 9 | 1
busqueda-arenadoIndustrial | intencion "arenado industrial" | precio de arenado por m2 | PHRASE | ENABLED | 3 | 1902.99 | 4 | 0
Arenado gral | Limpieza profesional | empresas de limpieza domicilios particulares | BROAD | ENABLED |  | 1901.23 | 9 | 2
Arenado | Arenado de pileta | limpieza de albercas | PHRASE | ENABLED |  | 1888.32 | 11 | 1
Arenado de Piletas | Grupo de anuncios 1 | arenado de superficies | BROAD | ENABLED |  | 1820.41 | 8 | 0
Arenado | Arenado de pileta | limpieza piletas | EXACT | ENABLED |  | 1729.79 | 5 | 1
que es el arenado? | Que es arenado | arenado metal | BROAD | ENABLED |  | 1728.97 | 3 | 0
constructora | Electricidad | servicio electricista | BROAD | ENABLED |  | 1708.84 | 2 | 1
Arenado de Piletas viejo | Preparar para repintar | arenado de piletas precio | BROAD | ENABLED |  | 1660.29 | 6 | 1
Arenado | arenado de piletas (generico) | limpieza de piscinas | EXACT | ENABLED |  | 1652.99 | 1 | 0
Arenado | Arenado de pileta | arenado piletas | EXACT | ENABLED |  | 1609.91 | 14 | 3
constructora | Constructora gral | reparaciones hogar | BROAD | ENABLED |  | 1589.6 | 4 | 2
busqueda-arenadoMadera | Arenado de madera | arenado de madera | EXACT | REMOVED |  | 1588.6 | 8 | 1
Arenado | Arenado General | arenado a domicilio | EXACT | ENABLED |  | 1571.09 | 7 | 0
busqueda-arenadoMadera | Arenado de madera | arenado de muebles de madera | PHRASE | ENABLED |  | 1569.22 | 9 | 0
Tipos de arenado | Arenado de Metales | arenado de piezas | EXACT | ENABLED |  | 1545.43 | 4 | 0
Arenado | Precios Arenados | precio de arenado por m2 | PHRASE | ENABLED |  | 1544 | 4 | 0
Arenado de Materiales y Piezas | Madera y piezas sensibles | restauracion de muebles | BROAD | ENABLED |  | 1508.04 | 11 | 2
Arenado gral | Limpieza profesional | limpieza profesional | BROAD | ENABLED |  | 1467.86 | 7 | 1
Arenado de Piletas | Grupo de anuncios 1 | arenado | EXACT | ENABLED |  | 1438.4 | 4 | 0
busqueda-arenadoDePiletas | intencion "arenado de pileta" | arenado piletas | EXACT | REMOVED |  | 1417.47 | 1 | 0
busqueda-superficiesMetalicas | intencion "arenado metal" | arenado de metal | EXACT | ENABLED |  | 1393.89 | 3 | 0
constructora | Constructora gral | trabajos de construccion disponibles | BROAD | ENABLED |  | 1379.62 | 5 | 2
Arenado de Piletas | Grupo de anuncios 1 | arenado de piletas | EXACT | REMOVED |  | 1354.04 | 3 | 0
Arenado gral | Limpieza profesional | limpieza casas particulares | BROAD | ENABLED |  | 1303.36 | 6 | 0
Tipos de arenado | Arenado de Vehiculos | limpieza de chasis auto | EXACT | ENABLED |  | 1303.11 | 1 | 0
Arenado | Arenado de pileta | arenado de piletas | PHRASE | ENABLED |  | 1300.19 | 5 | 2
Arenado de Materiales y Piezas | Madera y piezas sensibles | reparacion de muebles | BROAD | ENABLED |  | 1262.65 | 4 | 1
busqueda-arenadoGeneral | intencion "precio de arenado" | chorro de arena precio | PHRASE | REMOVED |  | 1241.18 | 2 | 0
Tipos de arenado | Arenado de Metales | arenado de metales precio | EXACT | ENABLED |  | 1240.43 | 4 | 0
Arenado de Piletas viejo | Preparar para repintar | arenados de piletas | BROAD | ENABLED |  | 1226.04 | 6 | 3
que es el arenado? | Que es arenado | limpieza con arenado | PHRASE | ENABLED |  | 1209.12 | 2 | 1
constructora | Constructora gral | reformas | BROAD | ENABLED |  | 1189.58 | 3 | 0
busqueda-arenadoIndustrial | intencion "arenado metal" | arenado de metal | PHRASE | ENABLED |  | 1173.66 | 3 | 0
Arenado gral | Limpieza profesional | limpieza profesional | PHRASE | ENABLED |  | 1112 | 3 | 0
```

### 2.3 Acciones de conversión (medición) — ⚠️ el problema central
`nombre | estado | fuente | categoría | primaria`

```
Clicks to call | ENABLED | GOOGLE_HOSTED | CONTACT | primaria=true
Smart campaign map directions | ENABLED | SMART_CAMPAIGN_MAP_DIRECTIONS | GET_DIRECTIONS | primaria=true
Smart campaign map clicks to call | ENABLED | ... CONTACT | primaria=true
Smart campaign ad clicks to call | ENABLED | ... CONTACT | primaria=true
Calls from Smart Campaign Ads | ENABLED | ... PHONE_CALL_LEAD | primaria=true
Local actions - Other engagements | ENABLED | GOOGLE_HOSTED | ENGAGEMENT | primaria=true  ← BASURA (no editable individual)
Local actions - Website visits | ENABLED | GOOGLE_HOSTED | PAGE_VIEW | primaria=true      ← BASURA (no editable individual)
Lead form - Submit | (26/07 → SECUNDARIA) | LEAD_FORM_SUBMIT | SUBMIT_LEAD_FORM
Arenados Lucho SEO (web) contact_whatsapp | ENABLED | GA4_CUSTOM | CONTACT | primaria=true  ← LEAD REAL
Arenados Lucho SEO (web) form_submit | ENABLED | GA4_CUSTOM | SUBMIT_LEAD_FORM | primaria=true ← verificar si es éxito o intento
(+ varias GA4 HIDDEN: purchase, qualify_lead, close_convert_lead — no cuentan)
```

**Diagnóstico de medición:** las conversiones primarias incluyen **basura** (`Website visits` = PAGE_VIEW, `Other engagements` = ENGAGEMENT, map directions). Por eso los **182 "conv"** de la campaña activa y todos los conteos por keyword están **inflados**: una "conversión" histórica NO equivale a un lead real. **Leads reales = `form_submit_success` (GA4, solo tras response.ok de Formspree) + `contact_whatsapp` (GA4).** El CPA histórico (~8.790 ARS en la campaña ENABLED) **no es línea base válida**.

### 2.4 URLs finales
```
https://www.arenadoslucho.com/  (x2 anuncios)  ← dominio correcto .com, responde 200
```

---

## 3. Análisis de performance

### 3.1 Ganadoras (recuperar / escalar)
| Keyword | Concordancia | CPA aprox | Nota |
|---------|--------------|-----------|------|
| `arenado industrial` | **frase** (mejor que exacta) | ~3.273 | Core Cluster 1. La variante frase es la más eficiente. |
| `arenado de metal` | frase | ~6.487 | In-scope (estructuras/metal). La exacta rinde peor. |
| `arenados` | exacta | ~2.813 | Mejor CPA del histórico core. |
| `servicio limpieza industrial` | exacta | ~784 (a validar) | Muy barato pero CPA sospechosamente bajo → puede ser conversión basura. |
| `arenados industriales` | frase | ~747 | In-scope, volumen bajo pero relevante. |

### 3.2 Sangradoras (cortar / negativar)
| Keyword | Gastó | Conv | Motivo |
|---------|-------|------|--------|
| `arenado` (frase, genérico) | 40.356 | 0 | Head term sin acotar; el mayor sumidero. |
| `arenado pintura` (pileta) | 32.246 | ~0 | **Fuera de rubro** (pileta + pintado). |
| `limpieza chasis` (vehículos) | ~18.148 | 0 | **Fuera de rubro** (vehículos/chasis). |
| `arenado de metales` (amplia en camp. piletas) | 12.356 | 0 | In-scope pero en amplia + mal ubicada = basura. |
| `zona norte` (amplia) | 6.180 | 0 | CPC absurdo (~1.545); geo sin intención. |
| términos de precio (`valor/precio arenado`) | ~10.364 | 0 | Curiosos/comparadores (Cluster 4). |

### 3.3 Observaciones clave
1. **Medición no confiable** (lo más importante): conversiones primarias infladas por basura → no hay CPA base válido.
2. **QS clavado en 5** en el core (`arenado`, `arenado industrial`, `arenado de metal`), y **3** en `precio por m2`. QS bajo en términos relevantes = problema de anuncio/landing, no de keyword. Alinear RSA por grupo con `/servicios`.
3. **La concordancia AMPLIA trae basura sistemáticamente**: casi todo lo de 0 conv y gasto alto es amplia fuera de foco (zona norte, servicios hogar, electricista, reformas, muebles, etc.). → **frase/exacta desde el día 1**.
4. **El genérico "arenado" devora presupuesto** (una sola variante frase gastó 208k). → acotar a exacta + modificadores de intención.
5. **Rubros out-of-scope drenaron gasto histórico**: campañas enteras de Piletas, Vehículos/chasis, Madera/muebles, Constructora/electricista. → aplicar negativas base desde el arranque.

---

## 4. Plan de relanzamiento (corregido — crítica adversarial aplicada)

> **Veredicto:** arquitectura alineada al negocio, pero se corrigieron defectos concretos antes de ejecutar (ver §4.6).

### 4.1 Estructura
**UNA campaña `AR-Search-Industrial`** — solo Red de Búsqueda (sin Display ni socios), geo AMBA por presencia, español, **10.000/día (100% del presupuesto)**, concordancia frase/exacta desde el día 1, recomendaciones automáticas de Google **OFF**, UTMs en URLs finales. La campaña particular arranca **pausada**.

| Grupo | → URL | Keywords (frase/exacta) |
|-------|-------|-------------------------|
| **arenado-industrial** | `/servicios` | arenado industrial, arenados industriales, empresa de arenado, arenado en obra, arenado in situ ~~arenado y granallado~~ (§6) |
| **estructuras-metalicas** | `/servicios` | arenado de metal, arenado de metales, arenado metal, arenar metal, arenado de piezas metálicas, arenado de estructuras metálicas, arenado de tanques industriales, arenado de superficies ~~granallado~~ (§6) |
| **marca** | `/` | arenados lucho, arenado lucho, taller de arenado |

### 4.2 Keywords nuevas a sumar (gap del mapa maestro, no están en la cuenta)
`sandblasting`, `arenado de estructuras metálicas`, `arenado de tanques`, `arenado in situ`, `arenado en obra`, y (⭐ nuevo por §6) el cluster **obra/restauración**: `arenado de paredes`, `arenado de ladrillos`, `arenado de fachada`, `arenado para repintar`, `arenado restauración edificio`. ~~granallado in situ y grupo norma-sa3-iso~~ **eliminados** (§6: no ofrecemos granallado ni arenado certificado).
*Para expansión posterior (con CPA validado):* `arenado de nave industrial`, `arenado estructura naval` → slugs de casos de éxito.

### 4.3 Negativas
- **Nivel cuenta (en FRASE):** auto, autos, vehículo(s), moto, autopartes, llantas, chasis, carrocería, madera, mueble(s), silla, portón, reja(s), electricista, reformas, servicios/reparaciones hogar, servicios constructora, casas particulares, limpieza doméstica, limpieza profunda, limpieza profesional, servicios técnicos, mantenimiento industrial, trabajos disponibles/empleo, alquiler/venta de arenadora (NO negativizar "arenadora" sola), compresor, arena para arenado, curso(s), casero, como hacer, barato, precio barato + **agregar** `granalla`, `venta de granalla`, `hidrolavado`.
- **Solo campaña industrial:** pileta, piletas, piscina, piscinas, alberca, albercas — **NUNCA a nivel cuenta** (rompería la línea particular).
- ⚠️ **NO** negativizar `zona norte` (bloquearía queries geo-calificadas válidas tipo "arenado industrial zona norte").

### 4.4 Puja y presupuesto
- **Arranque:** "Maximizar clics" **con tope de CPC manual** (no descontrolar sin data limpia). NO usar "Maximizar conversiones" todavía (la medición está inflada).
- **Presupuesto:** 10.000/día = ARS ~300.000/mes (borde del tope). ⚠️ El **tope duro de 300.000 NO está vigente** hasta verificar el guardián instalado en la UI → el control real de arranque es el **presupuesto diario nativo**.
- **Migrar a "Maximizar conversiones"** solo con **≥15-30 conversiones/mes limpias**. Escalar presupuesto máx 20-30% por vez, un cambio cada 1-2 semanas, con CPA estable, todo en `08-bitacora.md`.
- **Atacar el QS** del core (RSA alineado a `/servicios`: superficie lista para pintar/revestir, ~100 m²/día, 2 equipos propios, visita sin costo, contención de polvo — **sin Sa3/ISO, ver §6**) para bajar CPC antes de escalar.

### 4.5 Conversiones (medición limpia — bloqueante)
Dejar como **PRIMARIAS solo los leads reales**: `form_submit_success` + `contact_whatsapp` (evaluar `contact_email`). Degradar a **secundarias** todo lo que infla: Website visits, Other engagements, map directions y `form_submit` (intento). **Nunca** optimizar hacia `form_submit`. `clicks-to-call` **no** marcarla primaria hasta verificar call tracking real (hoy el sitio no tiene evento de llamada en el tracking). Verificar en GTM que los eventos exactos disparan y que no viaja PII en el dataLayer.

### 4.6 Correcciones que aplicó la crítica adversarial
1. ❌ Quitado `pintura de piscina` (es pintado, no arenado — servicio que no se presta).
2. ❌ Quitado el grupo `limpieza industrial` del core (fuera de rubro, ensucia el CPA base). Si se testea, aparte y pausado, solo en exacta.
3. 💰 Presupuesto **100% a la industrial** (10.000/día), particular **pausada** — no dividir apoyándose exacto en el tope sin el guardián verificado.
4. ❌ Quitada la negativa `zona norte`; negativas amplias → frase; + `granalla`/`hidrolavado`.
5. 📞 `clicks-to-call` NO primaria hasta verificar call tracking.
6. 🏷️ Considerar mover genéricos exactos (`arenado`, `arenados`) a `/servicios` (mejor página de conversión) en vez de la home.

### 4.7 Pasos ordenados del relanzamiento

> ⚠️ **Superado.** El plan de implementación vigente es el de **8 sesiones** en `ads-config/08-controles-implementacion.md` (29/07/2026). Esta lista se conserva como registro del análisis del 26/07; **el paso 6 (grupo Sa3/ISO) quedó anulado por §6**.

1. Verificar que TODA URL final responda **200** (`/servicios`, `/`, `/contacto`, `/arenado-de-piletas`, `/preguntas-frecuentes`).
2. **Limpiar la medición** (bloqueante): **una sola primaria, `contact_whatsapp`**; degradar todo el resto; confirmar el evento en GTM.
3. Desactivar "Aplicación automática de recomendaciones" de Google.
4. Cargar la **lista de negativas** (cuenta + bloque pileta solo en industrial) **antes** de encender.
5. Crear `AR-Search-Industrial` con los grupos, RSA por grupo (mensajes clave) y extensiones (sitelinks, texto destacado, ubicación).
6. Sumar las **keywords nuevas** (incl. grupo Sa3/ISO 8501).
7. Encender y **no tocar 1-2 semanas** para fijar el CPA base real.
8. Monitorear términos de búsqueda (SQR) 2-3×/semana; sumar negativas nuevas.
9. Atacar el QS del core.
10. Con ≥15-30 conv limpias → migrar a "Maximizar conversiones".
11. Escalar 20-30% por vez, con CPA estable, todo en bitácora.
12. Instalar/verificar el autopilot (05) en la UI; recién ahí el "tope duro" es real.
13. Expansión posterior (con CPA validado): campaña por tipo de obra → slugs de casos.

---

## 6. Corrección definitiva (26/07/2026) — contexto real del dueño

El dueño aclaró el negocio real y **esto manda sobre cualquier análisis anterior**:

1. **NO hacemos arenado técnico medido ni granallado.** Nada de Sa3, ISO 8501, metal blanco, perfil de anclaje, informes. Los trabajos con esos requisitos se rechazan (pasó con naves ferroviarias). → Se **elimina** el grupo `norma-sa3-iso` del plan, se quita `granallado` de las keywords y **todo lo técnico pasa a NEGATIVA de cuenta** (`granallado`, `granalla`, `sa3`, `iso 8501`, `metal blanco`, `perfil de anclaje`, `rugosidad`). El comprador que busca así pide lo que no vendemos: ese clic es pérdida segura.
2. **El comprador objetivo es el simple:** arquitecto en remodelación, encargado de fábrica que quiere repintar por estética, constructora. Busca "arenado industrial" sin ser técnico — por eso esa keyword fue la mejor del historial (frase, ~3.273/conv). El grupo core queda intacto.
3. **Piletas deja de estar pausada → campaña propia (~25%).** Es el lead más barato del historial (exacta: 4 conv/2.156; campañas viejas: 14 conv/16.192) y el dueño confirma que es el pan de hoy. La negativa `pileta/piscina` va **solo dentro de la campaña industrial** (para rutear el tráfico), **jamás a nivel cuenta**.
4. **Estrategia de transición:** hoy se toma casi todo (trabajos chicos incluidos — sin comprarles tráfico: chasis/madera tuvieron ROI malo); el norte es obra en construcción y restauración de edificios. La campaña de obra/industrial se lleva ~60% del presupuesto por eso.
5. **Estructura vigente** (reemplaza §4.1): 3 campañas — `AR-Search-Obra-Industrial` ~6.000/día · `AR-Search-Piletas` ~2.500/día · `AR-Search-General-Marca` ~1.500/día. Detalle completo: `05-google-ads-operacion.md` Fase 2.
6. **El sitio se reescribe** (decisión del dueño): fuera Sa3/ISO del copy, FAQ y schema; entra piletas y obra/restauración + landing `/arenado-de-piletas`. Hasta que el copy esté pivotado, los RSA nuevos NO deben prometer nada técnico aunque la landing todavía lo diga.

---

## 5. Pendiente antes de reactivar gasto (checklist)
- [ ] Medición limpia: **una sola acción primaria, `contact_whatsapp`** (canal único desde el 28/07/2026).
- [ ] Degradar a secundaria la acción histórica `form_submit` — **obsoleta**: el formulario ya no existe en el sitio.
- [ ] URLs finales 200 (verificado home; chequear `/servicios`, `/contacto`, `/arenado-de-piletas`, `/preguntas-frecuentes`).
- [ ] Negativas cargadas.
- [ ] Campaña + grupos + RSA armados (frase/exacta).
- [ ] Instalar autopilot (05) para el tope duro real.
- [ ] Copy del sitio pivotado (mínimo /servicios y FAQ sin Sa3/ISO) — evita message mismatch con los RSA nuevos.
- [ ] Landing `/arenado-de-piletas` publicada (o campaña piletas apuntando a `/` mientras tanto).
- [ ] Recargar saldo (último paso).
