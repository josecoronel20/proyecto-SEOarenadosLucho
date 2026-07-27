# Estrategia SEO

> **Reescrita el 26/07/2026** al posicionamiento real: arenado sin vueltas para obra, restauración, limpieza y piletas. Lo técnico (metadata, sitemap, schema) sigue en `contexto/07-seo-tecnico.md`.

## Tesis

Nicho local de baja competencia y alta intención. La ventaja ya no es "parecer los más técnicos" sino ser **los más claros y confiables para el comprador simple**: el arquitecto/encargado/dueño quiere saber tres cosas — ¿hacen esto?, ¿cuánto tardan/cuesta aproximadamente?, ¿queda bien? El sitio que responde eso sin jerga gana el clic y el contacto. Bonus: "arenado de piletas" tiene demanda probada (historial de Ads) y casi nadie tiene una landing dedicada decente.

## Fase 1 — PIVOTE DE COPY (bloqueante, decisión del dueño 26/07)

El sitio hoy promete Sa3/ISO 8501/metal blanco. Hay que **eliminar toda promesa técnica** y reposicionar. Tareas de código concretas (Claude Code):

1. `/servicios`: quitar Sa3, ISO 8501, metal blanco; nuevo eje: qué superficies preparamos (paredes, fachadas, piletas, vigas, tanques, estructuras), para qué queda listo (pintar/revestir/antióxido), cómo trabajamos (2 equipos propios, ~100 m²/día, contención de polvo, coordinación en obra).
2. FAQ: reemplazar preguntas de norma por preguntas reales del comprador simple: ¿cuánto tarda?, ¿hacen polvo?, ¿queda listo para pintar?, ¿hacen piletas?, ¿trabajan en obra?, ¿qué NO hacen? (granallado / arenado certificado — decirlo explícito filtra llamadas técnicas).
3. Home hero: mantener "arenado industrial" como término (lo busca también el comprador simple) pero bajar la promesa a rapidez/prolijidad/precio justo.
4. JSON-LD (`layout.tsx`): descriptions de Organization/LocalBusiness sin ISO.
5. Metadata descriptions de `/servicios` y FAQ (hoy mencionan Sa3/ISO): reescribir.
6. Casos de éxito: revisar textos; presentar como "limpieza y preparación", no como trabajo certificado.

**Qué SÍ se puede seguir diciendo (es verdad):** 2 equipos completos propios · ~100 m²/día por equipo · coordinación en obra · visita y presupuesto sin costo · años de experiencia.

## Fase 2 — Piletas + local

- **Crear `/arenado-de-piletas`** (decisión tomada — excepción documentada a la regla "no nuevas landings"): la keyword con mejor conversión histórica y volumen estable. Contenido: antes/después, proceso (vaciado→arenado→listo para pintar/revestir), plazos típicos, zona de cobertura, CTA WhatsApp. Recibe también la campaña de Ads de piletas.
- **Google Business Profile**: ficha con categoría de servicio de arenado/limpieza, fotos reales de obras Y piletas, zona AMBA. Pedir reseña a cada cliente.

## Fase 3 — Contenido por tipo de trabajo

Casos de éxito reales del negocio actual (no solo industriales): pared/fachada restaurada, pileta terminada, tanque limpiado, viga con antióxido. Cada caso = una página long-tail (`04-plan-de-contenidos.md`). FAQ crece con preguntas reales del WhatsApp.

## Fase 4 — Autoridad

Links de: proveedores de pintura/revestimientos (partner natural), corralones, directorios de construcción/arquitectura, grupos de arquitectos. Objetivo modesto: 5-10 links relevantes/año.

## Roadmap

| Fase | Criterio de salida |
|------|--------------------|
| 1. Pivote de copy | Cero menciones a Sa3/ISO/granallado en el sitio; FAQ del comprador simple |
| 2. Piletas + local | `/arenado-de-piletas` publicada e indexada; GBP activo con ≥5 reseñas |
| 3. Contenido | 1-2 casos/mes durante 3 meses, de los tres rubros |
| 4. Autoridad | 5-10 links relevantes |

## Reglas

1. Prohibido en copy/metadata: Sa3, ISO 8501, metal blanco, granallado, perfil de anclaje (ver `03-keywords-maestro.md`).
2. Nuevas landings: `/arenado-de-piletas` aprobada; cualquier otra requiere decisión + registro en bitácora.
3. Checklist técnico de publicación: `contexto/07-seo-tecnico.md`.
4. Search Console mensual → actualizar mapa de keywords.
