# 10 · Estilos y design system

> ⚠️ **Este archivo ya no describe el sistema visual.** Desde el **14/08/2026** el
> sistema vive en **[`DESIGN.md`](../DESIGN.md)**, en la raíz del proyecto: es la
> fuente de verdad de color, tipografía, ritmo y primitivos.
>
> Lo que queda acá es lo específico del stack (dónde está cada cosa) y la
> historia de por qué se reemplazó — que importa, porque este archivo llegó a
> documentar como correcto un patrón que no pasaba contraste.

## Dónde está cada cosa

| Qué | Archivo |
|---|---|
| **El sistema visual completo** | [`DESIGN.md`](../DESIGN.md) |
| Contrato de dirección (tesis, mundo, forma) | comentario al inicio de `<body>` en `src/app/layout.tsx` |
| Tokens de color, con contrastes medidos | `tailwind.config.ts` |
| Primitivos (`Section`, `SectionHead`, `Ficha`, `FranjaDatos`) | `src/components/common/system.tsx` |
| Utilidades `.ficha-lista` / `.ficha-num` | `src/app/globals.css` |
| Estilos y mensajes de los CTA de WhatsApp | `src/lib/wpp.ts` |
| Tipografía (Archivo, auto-alojada) | `src/app/layout.tsx` (`next/font/google`) |

## Qué se reemplazó y por qué (14/08/2026)

Una auditoría de las 9 páginas con motor de navegador encontró **tres lenguajes
visuales conviviendo**: seis alturas de sección distintas, tres escalas de
titular y tres formas de tarjeta. El denominador común eran tarjetas de
ícono + título + texto en cuadrícula — el patrón que sale de cualquier
generador. Para un negocio que vende **oficio**, leerse como hecho a máquina
resta.

Se reemplazó por un solo sistema —**catálogo de repuestos / manual de
mantenimiento industrial**: papel técnico frío, dos tintas, todo tabulado con
filetes— aplicado a las 9 páginas. El detector pasó de **116 hallazgos a 8**.

### Lo que ya no es cierto de este archivo

- **La escala `primary-*` (azul) está muerta.** Sigue definida en
  `tailwind.config.ts` por compatibilidad, pero no se usa, y no se usa en código
  nuevo. La reemplazan `tinta`, `papel` y `maquina`.
- **`primary-400` como fondo de CTA era un error documentado como patrón.** Daba
  **3,8:1** con texto blanco y AA pide 4,5:1: la guía producía botones que no
  pasaban contraste. Ese error es la razón por la que ahora **todo color entra
  con su contraste medido**, no estimado.
- **La pila de sistema como tipografía se fue.** La voz de display de una página
  de marca no puede ser la fuente del sistema. Ahora es Archivo (Omnibus-Type,
  Buenos Aires), auto-alojada con `next/font`: sin pedido a Google y sin salto
  de texto al cargar.
- **Las sombras y los radios grandes se fueron.** Las capas se separan con
  filete de 1px, no con elevación difusa.

## Lo que sigue vigente

- **Mobile-first.** Breakpoints usados: `md:` / `lg:` / `xl:` (no `sm:` sistemático).
- **Imágenes con `next/image`**; íconos solo `lucide-react`; clases combinadas con `cn()`.
- **`darkMode: ["class"]` existe pero no hay toggle** — no agregar variantes `dark:`.
- **Nunca cargar fuentes web sin evaluar el LCP.** Archivo entra porque
  `next/font` la auto-aloja y la precarga; una `<link>` a Google Fonts no.
- **El doble sistema `primary` sigue siendo un gotcha**: `text-primary`/`bg-primary`
  (tokens HSL de shadcn) apuntan a casi negro y siguen usados dentro de
  `components/ui/`. No confundir con la escala hex, que está muerta.
