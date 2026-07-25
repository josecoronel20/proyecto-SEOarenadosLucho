# Plan de contenidos

Qué contenido crear, en qué orden y con qué criterio. El objetivo NO es "tener un blog": es cubrir intenciones del mapa de keywords (`03-keywords-maestro.md`) con el mínimo de páginas de máxima calidad.

## Principios

1. **Casos de éxito > blog.** En este rubro, un caso con fotos reales y datos (m², plazo, norma) convence y posiciona más que diez artículos genéricos.
2. Cada pieza ataca **una** keyword/intención del mapa maestro y termina en CTA (`/contacto` o WhatsApp).
3. Nada de thin content (regla de `.cursorrules`): si no hay prueba técnica o social que aportar, no se publica.
4. Copy en español (Argentina), tono técnico-directo, como el resto del sitio.

## Motor principal: casos de éxito (1–2 por mes)

Flujo por cada obra terminada:

1. En obra: fotos antes/durante/después (horizontales, buena luz), datos: tipo de estructura, m², plazo, grado de limpieza (Sa2½/Sa3), desafío logístico.
2. Cargar en `src/lib/projectsInfo.json` (`idSection` = slug único; ver `contexto/03-rutas-y-paginas.md`).
3. Título del caso = keyword del Cluster 3 cuando sea posible (ej. "Arenado de tanque de 400 m² en planta alimenticia").
4. Verificar checklist SEO de `contexto/07-seo-tecnico.md` y registrar en `08-bitacora.md`.

**Backlog de casos** (completar con obras reales): silo agroindustrial · galpón/nave logística · estructura de puente · cañerías/piping · equipo pesado.

## Motor secundario: FAQ (crecimiento continuo)

Cada pregunta repetida por WhatsApp/formulario se convierte en entrada del FAQ (`FaqAccordion.tsx`). Prioridad inicial (Cluster 4): cuánto tarda un arenado · polvo y mitigación · qué es Sa3/ISO 8501 · arenado vs granallado vs hidrolavado · "¿cuánto cuesta?" respondida con los factores que definen el precio + CTA a visita técnica sin costo.

Al ampliar el FAQ, implementar **schema FAQPage** (pendiente listado en `contexto/07-seo-tecnico.md`).

## Backlog condicional (requiere decisión explícita — regla de CLAUDE.md)

| Idea | Condición para hacerla |
|------|------------------------|
| Landings por rubro (`/servicios/arenado-tanques`, etc.) | Si Search Console/Ads muestran volumen real por rubro que `/servicios` no captura |
| Landing "Arenado particular" dedicada | Si se decide invertir en la línea particular |
| Página "Zonas de cobertura" | Si aparecen búsquedas "arenado + {localidad}" con volumen (La Plata, Zona Norte, etc.) |
| Blog técnico | Solo tras agotar casos + FAQ; empezaría por comparativas de método |

## Calendario tipo (mes normal)

| Semana | Acción |
|--------|--------|
| 1 | Publicar caso de éxito del mes |
| 2 | Agregar 1–2 preguntas nuevas al FAQ desde consultas reales |
| 3 | Revisar Search Console → oportunidades para el mapa de keywords |
| 4 | Refrescar copy/metadata de UNA landing si los datos lo justifican |

Todo lo publicado se registra en `08-bitacora.md`.
