# Plan de contenidos

> Actualizado 26/07/2026 al posicionamiento real (obra/restauración + piletas + limpieza; sin promesas técnicas). Todo contenido ataca una keyword de `03-keywords-maestro.md` y termina en CTA (WhatsApp o `/contacto`).

## Prioridad #1 — Landing `/arenado-de-piletas` (aprobada)

La mejor keyword de conversión del historial de Ads y con búsqueda orgánica estable. Estructura sugerida: H1 "Arenado de piletas para repintar o revestir" · fotos antes/después reales · proceso en 3 pasos (llegamos con equipo propio → arenamos → queda lista para pintar/revestir) · plazos típicos (1 día para pileta estándar, si es verdad) · zonas (AMBA) · qué NO incluye (pintado) · CTA WhatsApp arriba y abajo. Recibe la campaña de Ads de piletas. Al publicarla: metadata propia, entrada en sitemap, caso de pileta enlazado.

Tres secciones obligatorias (contexto del dueño, 26/07):

1. **"¿Se te descascara la pintura de la pileta?"** — para el dueño que NO sabe qué es arenado: explicar en dos líneas que el arenado es la forma más rápida de sacar toda la pintura vieja y dejar la pileta lista para repintar o revestir. Captura las búsquedas "remover/sacar pintura de pileta" (Cluster 3b).
2. **"Trabajamos con contratistas"** — muchos clientes históricos remodelan piletas (quitan pintura → revisten/pintan): ofrecer tercerizar el arenado, precio por obra, turnos rápidos, varias piletas por temporada. Cliente recurrente = oro.
3. **Bloque estacional (rotar el copy 2 veces al año):** invierno/otoño → "Anticipate: pileta lista antes del verano, sin apuro y con turno inmediato"; primavera/verano → "Llegá con la pileta lista: turnos de esta semana". Registrar cada rotación en bitácora.

## Prioridad #2 — Pivote del contenido existente

Parte de la Fase 1 de `02-estrategia-seo.md` (reescritura sin Sa3/ISO). Incluye reencuadrar los casos de éxito actuales (nave, tanque, pasarela, estructura naval) como **limpieza y preparación** — cuidado: no presentarlos como trabajos certificados que sugieran que tomamos licitaciones técnicas.

## Acción inmediata — la galería ya se puede armar (inventario verificado 26/07)

**Las fotos ya están en el repo** (`public/images/services/`). Inventario real:

| Carpeta | Fotos | Estado |
|---------|-------|--------|
| `arenadoIndustrial/` Nave · EstructuraNaval · Pasarela · Tanque | 7+10+9+6 | ✅ Publicadas como los 4 casos actuales — pero con **texto técnico a reescribir** (ver abajo) |
| `arenadoParticular/Piletas/` | 6 | ⭐ **SIN PUBLICAR** — materia prima del caso de pileta Y de la landing `/arenado-de-piletas` |
| `arenadoParticular/Piezas/` | 10 | Sin publicar — posible caso "trabajos puntuales" (prioridad baja: no incentivar piezas sin taller) |
| `arenadoParticular/Vehículos/` | 10 | Sin publicar — usar solo si algún día se activa esa línea (hoy no se compra ese tráfico) |

⚠️ **Los 4 casos existentes en `src/lib/projectsInfo.json` están escritos en el lenguaje viejo**: campos `parametrosTecnicos` con "ISO 8501-1", "grado Sa 2/Sa 3", "normativaReferencia". La reescritura es parte del pivote de copy (Fase 1): reencuadrar como limpieza/preparación con resultado visible, eliminar los campos de norma (o reemplazarlos por datos simples: m², días, para qué quedó lista), y ajustar el componente de detalle de caso que renderiza esos campos. El dueño puede sumar fotos mejores del celular si las hay, pero **no hace falta esperar**: con lo que hay en el repo alcanza para arrancar.

## Motor continuo — Casos de éxito reales (1-2/mes)

Por cada trabajo terminado: fotos antes/durante/después + datos simples (tipo de superficie, m², días, para qué quedó lista). Backlog por rubro, en orden de la transición:

| Rubro | Ejemplos de casos a documentar | Keyword que ataca |
|-------|-------------------------------|-------------------|
| Obra/restauración | pared de ladrillo recuperada, fachada, edificio antiguo | arenado de paredes / fachada / restauración |
| **PYME / galpón (in situ)** | camión o acoplado restaurado, tanque, hierros grandes en el galpón del cliente | arenado a domicilio / quitar óxido / arenado de camiones |
| Piletas | pileta de hormigón lista para revestir | arenado de piletas |
| Limpieza industrial | tanque, vigas con antióxido básico, estructura | limpieza de tanques / arenado de vigas |
| Trabajos chicos | pieza o portón puntual (si sale uno lindo) | cola larga genérica |

Flujo técnico: `src/lib/projectsInfo.json` (slug único) → checklist `contexto/07-seo-tecnico.md` → bitácora.

## Motor continuo — FAQ del comprador simple

Cada pregunta repetida del WhatsApp entra al FAQ. Semilla (reemplaza a las de norma): ¿cuánto tarda? · ¿hacen mucho polvo? ¿molesta a los vecinos? (honesto: en domicilios coordinamos horarios y contención; en galpones/terrenos grandes no hay problema) · **¿vienen a domicilio? ¿tengo que llevar la pieza a un taller? → trabajamos IN SITU: vamos con el equipo a tu casa, obra o galpón** · ¿queda listo para pintar? · ¿hacen piletas? ¿la pintan también? (no — decir qué sigue después) · **¿cómo saco la pintura vieja de la pileta? / ¿qué es el arenado?** (la puerta de entrada del que no conoce la técnica — long-tail SEO puro) · ¿conviene arenar la pileta en invierno? (sí: turno inmediato y llegás al verano) · ¿arenan camiones/tanques/estructuras en mi galpón? (sí — el caso ideal) · ¿trabajan dentro de una obra en marcha? · ¿cuánto cuesta? (responder con factores + visita sin costo) · **¿hacen granallado o arenado certificado? → NO** (respuesta corta y amable: filtra al comprador técnico gratis, antes de que llame).

Al superar ~8 preguntas: schema `FAQPage` (pendiente en `contexto/07-seo-tecnico.md`).

## Backlog condicional (requiere decisión + bitácora)

| Idea | Condición |
|------|-----------|
| Landing "Arenado in situ / a domicilio" (PYMEs y galpones) | Si el grupo `pymes-in-situ` de Ads muestra demanda — candidata fuerte: es EL diferencial operativo (no hay taller, vamos nosotros) |
| Landing "Arenado para obras y constructoras" | Si la campaña de obra genera volumen y `/servicios` queda corta |
| Página "Zonas" | Si aparecen búsquedas "arenado + localidad" en SQR/Search Console |
| Landing trabajos chicos/piezas | Solo si el Cluster 5 muestra demanda rentable — ojo: sin taller, no incentivar piezas sueltas |

## Calendario tipo mensual

Semana 1: caso del mes · Semana 2: 1-2 FAQs nuevas del WhatsApp real · Semana 3: revisar Search Console y SQR → mapa de keywords · Semana 4: retocar UNA landing con datos. Todo a `08-bitacora.md`.
