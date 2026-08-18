# DESIGN.md — Arenados Lucho

Sistema visual del sitio, reemplazado por completo el **14/08/2026**. Este
archivo es la fuente de verdad: si algo que vas a escribir lo contradice, está
mal el código, no el documento.

El contrato de dirección (tesis, mundo, historia, primer viewport, forma) vive al
inicio de `<body>` en [layout.tsx](src/app/layout.tsx). **Es un comentario JSX:
React no lo emite al HTML**, así que se lee en el código y no en el navegador.
Fue deliberado — mandarlo al HTML costaría ~2,5 KB en cada carga de cada página,
para cero valor del visitante, en un sitio del que justo se acaban de sacar
1,1 MB de video decorativo. Quien lo necesita es quien edita el layout, y ahí
está. Acá está la parte operativa.

---

## El mundo: catálogo de repuestos

El sitio se ve como el papel que este oficio de verdad genera: **un catálogo de
repuestos, un manual de mantenimiento industrial**. Papel técnico frío, dos
tintas, todo tabulado con filetes.

**Por qué, en términos de negocio.** Antes convivían tres lenguajes visuales y
el denominador común eran tarjetas de ícono + título + texto en cuadrícula. Ese
patrón es el que sale de cualquier generador: un negocio que vende **oficio** no
puede leerse como hecho a máquina. Un catálogo impreso, además, entra más
información en la misma pantalla.

**Anti-referencia:** el sitio anterior (azul corporativo, tarjetas redondeadas
con sombra, íconos en cuadraditos, texto centrado). Está en el historial de git
hasta `f36ec09`. No volver ahí ni "a medias".

---

## La regla de forma

> **Se separa con filetes, no con cajas.**

Una tarjeta es el contenedor perezoso. Un catálogo resuelve lo mismo con una
línea de 1px. Si estás por escribir `border ... rounded ... p-6` alrededor de un
bloque de contenido, la respuesta casi siempre es una fila de
[`FichaLista`](src/components/common/system.tsx).

**Prohibido:**

- Tarjetas de ícono + título + texto repetidas en cuadrícula como estructura de página
- Una caja dentro de otra caja (incluye: el ícono en un cuadradito con fondo, dentro de una tarjeta)
- Un renglón chico (copete/eyebrow) arriba de un titular
- Filete de color de **4px o más** de un solo lado: es el tell más reconocible de UI generada. El filete de marca es de **2px**
- Sombras (`shadow-*`, `drop-shadow-*`). Las capas se separan con línea
- Íconos que repiten lo que la palabra ya dice (un alfiler al lado de "Zona norte", un calendario al lado de "¿me frenan la obra?")
- Numerar por numerar. El número va solo cuando la secuencia informa (un proceso, una orden de trabajo)

---

## Color — contrastes medidos, no estimados

Definidos en [tailwind.config.ts](tailwind.config.ts). Los números están
**medidos**; cualquier color nuevo entra con su contraste medido o no entra.

| Token | Hex | Uso | Contraste |
|---|---|---|---|
| `papel` | `#F7F8F8` | Fondo base | tinta encima: **17,0:1** |
| `papel-alt` | `#EDEFEF` | Franja alterna (ritmo entre secciones) | — |
| `papel-linea` | `#D8DCDC` | El filete divisor | — |
| `tinta` | `#141719` | Texto y titulares; fondo de heros y cierres | **17,0:1** sobre papel |
| `tinta-70` | `#4A5054` | Texto secundario | **7,6:1** sobre papel ✅ |
| `tinta-50` | `#767C80` | Solo texto grande o no textual | 4,0:1 ❌ no usar en cuerpo |
| `tinta-20` | `#C9CED1` | Texto secundario sobre fondo tinta | **11,4:1** sobre tinta |
| `maquina-400` | `#FF7A3D` | Naranja sobre fondo oscuro | **7,0:1** sobre tinta |
| `maquina-500` | `#E8500F` | El naranja de marca, como **fondo** | tinta encima: **4,85:1** ✅ |
| `maquina-700` | `#8F2D05` | El naranja como **texto** sobre papel | **6,6:1** ✅ |

### Las dos reglas que no se negocian

1. **Sobre naranja va texto tinta, nunca blanco.** Blanco sobre `maquina-500` da
   **3,75:1** y AA pide 4,5:1. Negro sobre naranja además es lo que hace la
   señalética industrial de verdad.
2. **El verde de WhatsApp es el único color ajeno al sistema, y es a propósito.**
   `green-700` (#15803d), **5,0:1** con blanco. El naranja es el mundo, el verde
   es la acción. No pasar el CTA a `green-600`: da 3,3:1 y no pasa AA.

La escala `primary-*` (azul) sigue definida por compatibilidad pero **está
muerta**. No usarla en código nuevo.

---

## Tipografía

**Archivo**, de [Omnibus-Type](https://www.omnibus-type.com/) — una fundición de
Buenos Aires. Auto-alojada con `next/font` en el layout: no sale un pedido a
Google, no hay salto de texto al cargar, no se paga latencia de tercero. Tres
pesos (400, 500, 700).

La razón no es estética: el piso de calidad prohíbe que la **cara del sistema**
sea la voz de display de una página de marca, y ninguna otra cara junta las dos
cosas que hacían falta acá — venir de la misma ciudad que el negocio y estar
dibujada para impresos densos como este.

Escala única, en [`system.tsx`](src/components/common/system.tsx):

```
H1     text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]
H2     text-3xl md:text-[2.5rem] font-bold tracking-tight leading-[1.1]
H3     text-lg md:text-xl font-semibold leading-snug
rótulo ficha-num text-xs font-semibold uppercase tracking-wider   (encabezado de columna/tabla)
MEDIDA max-w-[68ch]   ← medida de lectura. Más de ~70 caracteres y el ojo pierde el renglón
```

`.ficha-num` (en `globals.css`) da `tabular-nums` + tracking: es para números de
ítem, cifras y rótulos. **No** es "monoespaciada como disfraz de técnico" — se
usa donde hay dato o medición real.

---

## Ritmo y retícula

**Dos alturas de sección, no siete.** Antes convivían seis.

```
normal    py-16 md:py-24    ← la mayoría
compacto  py-12 md:py-16    ← franjas de datos
```

**Un solo margen lateral:** `container mx-auto px-5 lg:px-8`.

**El fondo alterna** `papel` / `papel-alt` para dar ritmo. Esa alternancia es la
única señal de separación entre secciones: nada de bordes ad-hoc por página.

**Aire:** más espacio arriba de un titular que abajo. El título pertenece a lo
que sigue, no flota entre dos bloques por igual. Lo resuelve `SectionHead`.

---

## Primitivos — [`src/components/common/system.tsx`](src/components/common/system.tsx)

Una página **compone**, no inventa. Si necesitás algo que no está acá, agregalo
acá.

| Primitivo | Qué es |
|---|---|
| `Section` | Envoltorio con ritmo y fondo. Props: `fondo` (`papel`/`alt`/`tinta`/`maquina`), `ritmo` |
| `SectionHead` | Título + intro, con el aire correcto. Sin copete |
| `FichaLista` / `Ficha` | **El renglón tabulado que reemplaza a la tarjeta.** Número opcional al margen, título, texto, y columna de dato a la derecha |
| `FranjaDatos` | La franja de cifras duras, celdas separadas por filete |
| `H1` `H2` `H3` `MEDIDA` | Constantes de la escala |

Estilos de CTA de WhatsApp: fuente única en [`src/lib/wpp.ts`](src/lib/wpp.ts).
No duplicar clases de botón en las páginas — así se coló el `green-600` que no
pasaba contraste.

---

## Lo que el rediseño NO puede tocar

Estos invariantes son la razón de ser del sitio. Romperlos **no falla el build**
pero rompe conversiones en silencio. Detalle en
[`contexto/06-tracking-y-analytics.md`](contexto/06-tracking-y-analytics.md).

- `contact_whatsapp` es el **único** evento, y se dispara **solo tras confirmar
  el `AlertDialog`** — nunca al click
- GTM `GTM-W63ZV9D9`; el `dataLayer` se inicializa antes del snippet
- **Nunca PII** dentro de un evento
- El número de WhatsApp vive como **array de dígitos** en `src/lib/wppNumero.ts`
  y se une en runtime (concatenar dos strings no servía: el minificador lo
  plegaba en build). Se abre con `window.open`. Nunca en un `href`, nunca en el
  JSON-LD, nunca como texto
- **Un solo** `WppBtn` flotante, global en el layout
- Copy sin promesas técnicas: prohibido Sa3, ISO 8501, metal blanco,
  granallado, mediciones, "certificado", "garantizamos"
- Los límites validados con el dueño: piletas solo **hormigón pintado** (no
  venecitas/mosaico, no fibra de vidrio), ~100 m²/día **siempre con su
  condición**, "20 años de oficio" (no de empresa)

---

## Verificación

El escaneo estático **no alcanza** — da cero y no significa nada (verificado con
un archivo de control: detectó 1 de 5 defectos puestos a propósito). Siempre con
motor de navegador, escritorio y celular:

```bash
node .claude/skills/impeccable/scripts/detect.mjs http://localhost:3000 http://localhost:3000/servicios
```

Estado al 14/08/2026: **116 → 8 hallazgos reales** en escritorio.

### Falsos positivos evaluados (no son deuda)

- **`cramped-padding` en el acordeón de FAQ (37).** El detector marca cada ítem
  como "texto pegado al filete". Medido en el navegador, el disparador tiene
  `padding: 20px 0`: el aire está. La regla mira el padding del contenedor y no
  el del hijo.
- **`clipped-overflow-container` en el carrusel de la home (1).** Es el
  `overflow-hidden` que necesita Embla para funcionar.
