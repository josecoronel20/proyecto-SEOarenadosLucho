# Workflow con el agente (Claude Code / Cursor)

**MUY importante:** cómo pedir cambios al agente para que el resultado sea predecible, pequeño y alineado al negocio (conversión industrial, no refactors infinitos).

Complementa `.cursorrules` (prioridad comercial) con **reglas operativas de desarrollo**.

**Agente principal: Claude Code** — lee `CLAUDE.md` automáticamente y desde ahí llega a `contexto/`; no hace falta adjuntar archivos, basta pedir "leé `contexto/NN-...md`". Las mismas reglas aplican a Cursor u otro asistente. Para tareas de marketing (SEO/Ads) el punto de entrada es `contexto/marketing/README.md`.

---

## Objetivo de este documento

Que cualquier sesión en Cursor:

1. Use el **contexto correcto** (`@contexto/...`).
2. Haga **cambios acotados** al pedido.
3. **No rompa** tracking, formulario ni rutas de Ads.
4. **Valide** con build antes de dar por terminado.
5. **Actualice** documentación solo cuando cambie algo estructural.

---

## Reglas para el agente (obligatorias)

### Alcance y tamaño de cambios

| Regla | Detalle |
|-------|---------|
| **No refactors grandes** | Sin “limpiar todo el repo”, renombrar masivo ni migrar stack salvo pedido explícito |
| **Cambios pequeños** | Un objetivo por tarea (ej. solo hero, solo footer, solo un evento) |
| **Solo archivos necesarios** | No tocar 20 archivos si bastan 2 |
| **Respetar patrones existentes** | Tailwind `primary-*`, `H2`, `Button`, `WppBtn`, estructura `app/` |
| **Sin features colaterales** | No añadir blog, CMS, API, precios, si no lo pidieron |

### Antes de codear

1. Leer **`@contexto/`** del tema (tabla abajo).
2. Si la tarea toca conversión → `05-formularios-y-conversion.md`.
3. Si toca URLs o nav → `03-rutas-y-paginas.md`.
4. Revisar código real (`Read` / búsqueda); no asumir rutas de branches viejos (`/zonas-de-cobertura`, `/precios-arenados`, `CTAActionButtons`).

### Después de codear

1. **`npm run build`** — obligatorio en cambios de código (salvo solo docs).
2. Si falla TypeScript o lint, **arreglar** antes de cerrar.
3. No commitear salvo que el usuario lo pida.
4. Si cambió rutas, eventos GTM, Formspree o diseño global → **avisar** qué actualizar en `contexto/`.

---

## Reglas sensibles (pedir confirmación o avisar)

| Área | Regla |
|------|--------|
| **Tracking** | **No tocar** `dataLayer`, nombres de eventos, GTM ID, orden de scripts en `layout.tsx` **sin avisar** al usuario. Si hay que cambiar, listar impacto en GA4/Ads/Meta |
| **Formspree** | No cambiar endpoint `xrgnqbod` ni nombres de campos sin aviso |
| **WhatsApp / email** | No cambiar número/mail sin aviso (afecta conversión y schema) |
| **Rutas públicas** | No eliminar `/servicios`, `/contacto`, etc. sin redirecciones y aviso Ads/SEO |
| **`.cursorrules`** | No reescribir sin pedido |
| **Secrets** | Nunca commitear `.env` ni pegar tokens en chat |

---

## Cómo usar `@contexto/`

### En cada prompt (recomendado)

```
@contexto/03-rutas-y-paginas.md
@contexto/04-componentes-ui.md

[Pedido concreto en 2-4 líneas]
```

### Cuántos archivos adjuntar

- **Ideal:** 1–3 archivos relacionados.
- **Máximo útil:** 3; más → ruido.
- **Siempre** incluir `00-proyecto-general.md` solo cuando el tono/negocio no esté claro.

### Tabla rápida (copiar según tarea)

| Tarea | Adjuntar |
|-------|----------|
| Menú, rutas, 404 | `03`, `04`, `18` |
| Nueva sección home | `04`, `10`, `00` |
| Formulario / WhatsApp | `05`, `12`, `06` |
| Evento analytics | `06`, `05` — **avisar antes** |
| SEO metadata | `07`, `03` |
| Google Ads landing | `08`, `03`, `07` |
| Estilos / colores | `10`, `04` |
| Performance / video | `11`, `10` |
| API / Formspree | `09`, `12` |
| Build roto | `01`, `15` |

Índice completo: `contexto/README.md`.

---

## Modos del agente

En **Claude Code**: modo normal para implementar; *plan mode* para cambios grandes (equivale a Plan de Cursor). En **Cursor**:

| Modo | Cuándo usarlo |
|------|----------------|
| **Agent** | Implementar: componentes, copy, fixes, docs en `contexto/` |
| **Ask** | Explorar “¿cómo funciona X?”, revisar opciones sin editar |
| **Plan** | Refactors grandes, arquitectura nueva, varias URLs — acordar antes de Agent |

Para este proyecto, **preferir Agent con pedidos chicos** antes que un Plan gigante no solicitado.

---

## Plantilla de prompt (copiar y adaptar)

```markdown
## Contexto
@contexto/XX-archivo.md
@contexto/YY-archivo.md

## Objetivo
[Una frase]

## Alcance
- Archivos permitidos: [ej. solo HeroSection.tsx]
- No tocar: tracking, layout GTM, Formspree

## Criterio de listo
- [ ] npm run build OK
- [ ] CTA sigue a /contacto
- [ ] Mobile OK
```

---

## Prioridad de negocio (recordatorio)

Orden de `.cursorrules` — el agente no debe invertirlo:

1. **Conversión** (contacto, WhatsApp, formulario).
2. **Autoridad técnica** (ISO 8501, plazos, casos).
3. **Reducción de riesgo** (objeciones).
4. **Claridad estructural**.
5. **Estética**.

Si un cambio es “más bonito” pero resta claridad del CTA o alarga el formulario → **rechazarlo**.

---

## Git y commits

| Regla | Detalle |
|-------|---------|
| Commits | **Solo si el usuario lo pide** |
| Mensajes | En español o inglés según repo; 1–2 frases al “por qué” |
| No force push | Salvo pedido explícito |
| No `--no-verify`** | Salvo pedido explícito |

---

## Documentación `contexto/`

| Cuándo actualizar | Qué archivo |
|-------------------|-------------|
| Nueva ruta o se eliminó una | `03`, `07`, `08` |
| Nuevo evento `dataLayer` | `06`, `05`, `08` |
| Cambio Formspree / API | `09`, `12`, `05` |
| Decisión de producto (“una sola landing servicios”) | `18` |
| Bug recurrente | `15` |
| Deuda aceptada | `16` |

**No** crear markdown extra fuera de `contexto/` salvo que lo pidan (README, etc.).

---

## Anti-patrones en prompts (evitar)

| ❌ Prompt vago | ✅ Mejor |
|---------------|---------|
| “Mejorá el sitio” | “En `ServiciosHero`, acortar subtítulo y mantener CTA a `/contacto`” |
| “Refactorizá components” | “Extraer CTA repetido a un componente en `common/` sin cambiar clases” |
| “Arreglá SEO” | “Añadir `metadata` en X según `07-seo-tecnico`” |
| “Agregá analytics” | “Documentar en GTM; en código solo si acordamos evento `foo`” |

---

## Checklist del agente al cerrar tarea

- [ ] Cambio alineado a conversión / reglas de negocio
- [ ] Solo archivos necesarios modificados
- [ ] `npm run build` ejecutado y OK (si hubo código)
- [ ] Tracking/form no tocados **o** usuario avisado explícitamente
- [ ] Rutas enlazadas existen (no nuevos 404 desde nav)
- [ ] Usuario informado de deuda si quedó (ej. honeypot pendiente)

---

## Checklist del humano al pedir

- [ ] Adjunté 1–3 archivos `@contexto/` correctos
- [ ] Pedí **un** objetivo claro
- [ ] Dije qué **no** tocar (si aplica)
- [ ] Si es Ads/tracking, mencioné “avisar antes de cambiar eventos”

---

## Ejemplos de pedidos buenos

1. *“En home, cambiar subtítulo del hero a [texto]. No tocar video ni GTM. @contexto/00 @contexto/10”*
2. *“Corregir link de ServicesSection de `/arenado-industrial` a `/servicios`. Build al final. @contexto/03 @contexto/15”*
3. *“Añadir honeypot al formulario contacto según 12-seguridad; avisar si cambia payload Formspree. @contexto/12 @contexto/05”*

---

## Relacionado

- Negocio y tono: `00-proyecto-general.md`
- Reglas de código: `14-reglas-de-implementacion.md` (si existe)
- Prompts listos: `20-prompts-reutilizables.md` (si existe)
- Índice: `README.md`
