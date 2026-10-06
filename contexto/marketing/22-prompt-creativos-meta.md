# Prompt para diseñar los creativos de Meta

> Para pegar en Claude Design. Diseña las piezas de los **8 anuncios de
> [`21-meta-ads.md`](./21-meta-ads.md) §4**. El copy que va en el aviso ya está
> escrito ahí y **no se toca**: esto es solo la imagen.

---

## 1. El criterio del titular — leé esto antes del prompt

Lo que va **sobre la imagen** y el campo **"Título"** de Meta son dos cosas
distintas, y confundirlas es el error más común:

| | Dónde se ve | Qué tiene que hacer |
|---|---|---|
| **Texto sobre la imagen** | Dentro de la foto | **Frenar el scroll.** Se lee en menos de un segundo, sin sonido, de costado |
| **"Título" de Meta** | Línea bajo la imagen, ~40 caracteres | Lo lee alguien **que ya frenó**. Confirma, no engancha |

Tres reglas para el texto sobre la imagen:

**1. Nombrá el problema, no el servicio.** *"¿Así está tu pileta?"* frena; *"Arenado
de piletas"* no frena a nadie que no sepa qué es el arenado — y el comprador de
piletas **no lo sabe**. La palabra "arenado" puede aparecer, pero nunca primero.

**2. Si hay antes/después, el texto sobra.** La foto ya dice todo. Van etiquetas
(*ANTES* / *DESPUÉS*), no titulares. Un titular ingenioso arriba de un buen
antes/después le resta: compite con lo único que importa.

**3. Lo que suena a que nos cuesta algo, frena.** *"El arenado hace polvo"* y
*"queda limpio, pero picado"* se leen como verdad, no como publicidad. Es
exactamente lo que hace fuertes a O2 y O3. **No suavizar esas frases.**

---

## 2. El prompt

```
Sos diseñador gráfico y vas a crear los creativos de 8 anuncios de Meta Ads para
Arenados Lucho, una empresa de arenado de Buenos Aires. Arenado es sacar pintura
vieja y óxido con un chorro de arena a presión, en el lugar donde está la cosa.

El copy de cada aviso ya está escrito y no lo tenés que tocar. Tu trabajo es la
IMAGEN: qué muestra, qué texto va encima y con qué jerarquía.

## Sistema visual — no lo inventes, ya existe

Mundo: catálogo de repuestos / manual de mantenimiento industrial. Papel técnico
frío, dos tintas, todo tabulado. Nada de estética "servicio para el hogar".

Colores exactos:
- tinta        #141719  (texto y titulares)
- tinta-70     #4A5054  (texto secundario)
- papel        #F7F8F8  (fondo claro)
- maquina-500  #E8500F  (el naranja de la marca)
- maquina-400  #FF7A3D  (naranja SOLO sobre fondos oscuros)

⛔ REGLA QUE NO SE NEGOCIA: sobre naranja va texto TINTA, nunca blanco. Blanco
sobre #E8500F da 3,75:1 y no pasa accesibilidad. Tinta encima da 4,85:1.

Tipografía: Archivo (Omnibus-Type). Titulares en Bold o Black, muy apretados
(tracking negativo), en caja baja salvo las etiquetas, que van en mayúsculas.

Reglas de composición:
- Se separa con FILETES, no con cajas. Filete de marca: 2 px.
- Prohibido: tarjetas con ícono + título + texto, cajas con sombra, bordes
  redondeados grandes, degradados decorativos, cualquier caja dentro de otra caja.
- Prohibido el copete: nada de un renglón chiquito arriba del titular.
- Sin sombras. Sin stock photos. Sin ilustraciones. Sin imágenes generadas.

Sobre las fotos: si hace falta oscurecer para que se lea el texto, usá un velo
plano de tinta al 55-65% sobre la MITAD donde va el texto, no sobre toda la foto.
El trabajo tiene que verse. Un degradado que tape la foto entera es un error que
este proyecto ya cometió una vez.

## Formatos

- 1080 × 1350 px (4:5) — el principal, es el que más pantalla gana en el feed
- 1080 × 1920 px (9:16) — stories y reels
- 1080 × 1080 px (1:1) — solo si hace falta

Pensá PRIMERO en celular: el texto más chico legible es 40 px a 1080 de ancho.
Si el titular no se lee en una miniatura, no sirve.

## Las 8 piezas

### P1 — Pileta, "el tercer camino" ⭐ la principal
Carrusel de 2. Tarjeta 1: foto de pileta con la pintura celeste descascarada,
primer plano, que se vea el daño. Tarjeta 2: la misma pileta con el hormigón gris,
limpio y parejo.
Texto tarjeta 1: "¿Así está tu pileta?"
Texto tarjeta 2: "Lista para pintar"
Etiquetas chicas en mayúsculas: ANTES / DESPUÉS.
Nada más. La foto hace el trabajo.

### P2 — Pileta, el reloj de la temporada
Carrusel de 3. Tarjetas 1 y 2: otro par antes/después. Tarjeta 3: solo tipografía,
fondo tinta, texto en papel y el dato en maquina-400.
Texto tarjeta 3: "Para tenerla lista en diciembre, el trabajo se hace ahora"
Sobre las fotos, nada o apenas ANTES / DESPUÉS.

### P3 — Piletero, tercerizá
Imagen única 4:5. Foto del hormigón ya arenado, limpio: es el producto terminado
que el piletero revende. Tiene que verse a OBRA, no a casa linda con pileta.
Texto grande: "Vos seguís con la obra"
Debajo, más chico, sobre filete: "Nosotros hacemos la parte pesada"
Sello chico en maquina-500 con texto tinta: "Precio cerrado por pileta"

### O1 — Obra, "no hace falta moverlas" ⭐ la principal de empresas
Carrusel de 2 o imagen única. Cabriada metálica oxidada → la misma gris y limpia.
O el acoplado oxidado → gris.
Texto dominante, ocupando mucho: "NO TRASLADÁS NADA"
Debajo: "Vamos a tu galpón con el equipo"

### O2 — "El polvo, dicho antes" ⭐ la que ningún competidor escribe
Imagen única 4:5. Foto del arenador trabajando en altura CON EL POLVO A LA VISTA.
No la escondas: el polvo es el tema.
Texto grande: "El arenado hace polvo"
Debajo, más chico: "Te decimos qué tapar antes de ir, no después"
No suavices esa frase. Su fuerza es que suena a que nos cuesta algo.

### O3 — "El resultado real"
Imagen única 4:5. Tanque o estructura metálica exterior, con el arenador.
Texto: "Saca el óxido. No rellena el metal."
Debajo: "Si estaba picado, queda limpio y parejo, pero picado"
Tono de ficha técnica, no de aviso.

### M1 — Marca, remarketing
Carrusel de 3, un rubro por tarjeta, cada una con su antes/después: pileta ·
fachada o muro de ladrillo · estructura metálica.
Texto sobre cada foto: solo la etiqueta del rubro, en mayúsculas y chica.
Última tarjeta: logo de Arenados Lucho sobre fondo tinta, con "Buenos Aires y AMBA".

### M2 — Marca, prueba
Carrusel de 4 con los 4 pares de fachada antes/después.
Texto primera tarjeta: "Así queda una pared después de arenarla"
En las demás: solo ANTES / DESPUÉS.
Esta es la pieza donde MENOS texto va. Son fotos que se explican solas.

## Lo que nunca aparece en una pieza

- Sa3, ISO 8501, metal blanco, granallado, normas, certificados, mediciones,
  micras, rugosidad, "garantizamos"
- "Protegemos la zona", "contenemos el polvo", "sin ensuciar" — no se arma
  ningún cerramiento, decirlo sería falso
- "+20 años de experiencia" — se dice "20 años de oficio", nunca otra cosa
- Un número de teléfono visible
- Personas identificables sin el rostro cubierto

## Entregá

Para cada pieza: el 4:5 y el 9:16. Decime qué foto usaste y por qué, y si el
titular se lee en miniatura.
```

---

## 3. Qué fotos del sitio usar

Todas están en `public/images/`. **Son las únicas que se pueden usar:**
`21-realidad-operativa.md`:157-165 dice *"solo fotos reales de trabajos propios,
nunca una imagen generada por IA ni de banco"* — si falta una foto, **se pide, no
se genera**.

| Anuncio | Carpeta | Archivos | Qué se ve |
|---|---|---|---|
| **P1** | `services/arenadoParticular/Piletas` | `IMG_2454` → `IMG_2455` | Pintura celeste descascarada → hormigón gris limpio |
| **P2** | ídem | `IMG_2456` → `IMG_2457` | Otro par del mismo tipo |
| **P3** | ídem | `IMG_2479` | Solo el "después": el producto terminado |
| **O1** | `services/arenadoParticular/Piezas` | cabriadas antes/después | Estructura de galpón — es exactamente el público |
| **O1** *(alt)* | `services/arenadoParticular/Vehículos` | `IMG_2472` → `IMG_2473` | Acoplado oxidado → gris |
| **O2** | `services/arenadoFachadas` | `arenando-fachada-altura` | ⭐ Arenador en altura **con el polvo a la vista** |
| **O2** *(alt)* | `services/arenadoIndustrial/Nave` | `IMG_2419` | Arenador en andamio, casco y máscara |
| **O3** | `services/arenadoIndustrial/Tanque` | los 6 | Tanque/silo oxidado al aire libre, con arenador |
| **M1** | las tres carpetas | un par de cada rubro | Pileta · fachada · estructura |
| **M2** | `services/arenadoFachadas` | los **4 pares etiquetados**: `frente-casa`, `muro-ladrillo`, `ladrillo-visto`, `esquina` | Los únicos pares etiquetados del repo |
| **Logo** | `public/images` | `logo-solo-blanco.png` (sobre tinta) · `logo-solo-azul.png` (sobre papel) | 423×226 |

### 🔴 Dos problemas con las fotos, y hay que resolverlos antes

**1. Están chicas.** Casi todas miden **828×828**; las de fachada rondan 720. Meta
pide **1080 mínimo** y 1080×1350 para ganar pantalla. Escalar 828 → 1350 queda
blando, y en Meta una foto blanda es plata tirada: **el creativo es la
segmentación**.
→ **Hacen falta los originales del celular.** Los del repo se achicaron para la
web; en el teléfono están a 3000 px o más.

**2. Los pares de pileta no están etiquetados.** `2454→2455`, `2456→2457`,
`2478→2479` son pares *probables*, deducidos por número de archivo. **Hay que
confirmar cuál es antes y cuál después antes de publicar.** Publicarlos al revés
sería ridículo y nadie lo notaría hasta que lo note un cliente.

**3. No hay foto de galpón como sujeto**, ni del compresor y la tolva. Si se
quieren, hay que sacarlas.

### ⭐ Y el pedido más barato de todos

**Filmar 20-30 segundos en vertical** del chorro sacando pintura. Plano fijo,
cerrado, sin hablar. Hay 2 equipos trabajando todos los días y se hace con un
celular.

El video de la transformación es **el idioma nativo de Reels**: una foto fija
compite contra todo lo que hay en el feed; un chorro de arena comiendo pintura en
tiempo real, no. Y resuelve de taquito el problema de fondo de este plan — que el
comprador de piletas **no sabe que esto se llama arenado**.
