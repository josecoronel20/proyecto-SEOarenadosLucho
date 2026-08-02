# Configuración objetivo de Google Ads — el mapa completo

> **Diseñado desde cero el 29/07/2026** como si la cuenta estuviera vacía, con criterio de paid media manager 2026. **NO es un parche de la configuración vieja**: es el estado final al que hay que llegar, y el camino para construirlo a mano, parte por parte.
>
> Base: investigación del estado del arte de Google Ads 2026 (6 frentes) + los objetivos y datos reales del negocio (`contexto/marketing/`) + la auditoría real de la cuenta `953-841-6905` (`10-cuenta-ads-auditoria.md`) + el código real del sitio.
>
> **Método de trabajo:** `13-modo-experto-ads.md`. **Ejecución:** guiada — el dueño hace los clics, Claude dirige y verifica.

## Las 8 partes (una sesión de trabajo cada una)

| # | Parte | Qué resuelve | Líneas |
|---|-------|--------------|--------|
| 1 | [Fundaciones de la cuenta](./ads-config/01-fundaciones.md) | Qué se configura **antes** de la primera campaña: cuenta a usar, modo experto, moneda/zona horaria, facturación, accesos, vinculaciones, orden correcto de setup | 291 |
| 2 | [**Conversiones y medición**](./ads-config/02-conversiones.md) ⭐ | La sección que gobierna todo: una sola acción limpia (`contact_whatsapp`), categoría, primaria/secundaria, objetivos por campaña, ventana, atribución, cómo verificar | 444 |
| 3 | [Estructura: campañas y grupos](./ads-config/03-estructura.md) | Las 3 campañas, sus grupos por intención, nombres, presupuestos y ruteo entre campañas | 335 |
| 4 | [Palabras clave y negativas](./ads-config/04-keywords-negativas.md) | Keywords por grupo con concordancia, listas para pegar + negativas de cuenta organizadas por bloques | 681 |
| 5 | [Configuración de campaña, opción por opción](./ads-config/05-configuracion-campanas.md) | El estado final de **cada** setting y las trampas del default de Google (IA Max, redes, presencia vs interés…) | 465 |
| 6 | [Anuncios (RSA) y recursos](./ads-config/06-anuncios-recursos.md) | **105 titulares y 28 descripciones listos para pegar** (caracteres verificados), pinning, y cómo apagar la generación automática de texto | 522 |
| 7 | [Pujas, presupuesto y fases](./ads-config/07-pujas-presupuesto.md) | Qué estrategia usar sin datos, con qué CPC tope, y los umbrales medibles para migrar a puja automática | 368 |
| 8 | [Controles, operación e implementación](./ads-config/08-controles-implementacion.md) | Auto-apply OFF, cadencia de optimización, señales de alarma, **el plan paso a paso** y el checklist pre-flight | 601 |

## Decisiones de diseño que rigen todo el mapa

1. **Un solo canal, una sola conversión.** WhatsApp es el único contacto (decisión 28/07). La cuenta optimiza hacia `contact_whatsapp` y nada más. Sin formularios de Google, sin extensión de llamada, sin conversiones de "acciones locales".
2. **La medición se configura ANTES que las campañas.** Al revés obliga a rehacer los objetivos campaña por campaña y resetea el aprendizaje.
3. **La cuenta no tiene línea base de CPA.** Las 182 "conversiones" históricas mezclan visitas, engagements y llamadas: el CPA de ~8.790 ARS y el tCPA de 8.204 cargado **no sirven**. Se construye la línea base desde el día que quede una sola primaria limpia.
4. **Se conserva la cuenta `953-841-6905`** (moneda y zona horaria ya correctas = los únicos parámetros irreversibles) y se **reconstruye toda la estructura adentro**. Las campañas viejas quedan pausadas como archivo, nunca se editan.
5. **Control del copy por encima de la automatización.** Con términos prohibidos (Sa3/ISO/metal blanco/granallado) no se puede dejar que Google escriba: IA Max, personalización de texto y recursos automáticos van **apagados**, con pinning selectivo para garantizar la promesa y el límite ("no pintamos").
6. **Frase y exacta; amplia prohibida.** El historial lo condena y el volumen de conversiones es bajo.
7. **Solo campañas de Búsqueda.** Nada de PMax, Display, Demand Gen ni campañas inteligentes.

## Qué necesito de vos antes de implementar (bloqueantes reales)

Están marcados en cada parte, pero estos condicionan decisiones grandes:

| Tema | Qué falta |
|------|-----------|
| **Medición** | ID de la propiedad GA4 y si está vinculada a Ads · si `contact_whatsapp` es *evento clave* en GA4 · si el **etiquetado automático** está activo (sin `gclid` no hay atribución) · acceso de publicación al contenedor GTM |
| **Geo** | Lista real de partidos del GBA que se atienden y hasta dónde se viaja en ticket alto (¿La Plata?) · dirección de la base si se usa radio |
| **Negativas** | ⚠️ Verificar si la cuenta arrastra `pileta/piscina` como negativa vieja (bloquearía el core del negocio) |
| **Servicio** | ¿Se arenan piletas de **fibra de vidrio** o solo hormigón? · ¿el arenado saca **venecitas/revestimiento** o solo pintura? |
| **Datos para el copy** | Confirmar los ~**100 m²/día** por equipo (aparece en 3 titulares) y el plazo real de una pileta |
| **Negocio** | Ticket promedio por tipo de trabajo y tasa de cierre WhatsApp→trabajo cobrado (define si conviene asignar valor a la conversión) |
| **Cuenta** | Método de pago actual · si hay un MCC vinculado · con qué usuario están autorizados los 4 scripts |

## Cómo vamos a implementarlo

Parte por parte, en el orden 1 → 8 (el orden importa: medición antes que campañas). Cada parte trae sus rutas de UI, sus valores exactos y su verificación. **La mayor parte se puede construir sin saldo cargado** — de hecho es lo ideal: con la cuenta sin saldo, un error de configuración no cuesta plata.

Cuando arranquemos cada parte: abrimos el archivo correspondiente, ejecutás guiado, y cerramos con verificación + entrada en `08-bitacora.md`.

## Relacionado

Método de trabajo: `13-modo-experto-ads.md` · Dossier de la cuenta: `10-cuenta-ads-auditoria.md` · Keywords: `03-keywords-maestro.md` · Plan de negocio de Ads: `05-google-ads-operacion.md` · Scripts: `06-google-ads-scripts.md` · Automatizaciones vigentes: `09-automatizaciones.md` · KPIs: `07-medicion-y-kpis.md`
