# Deploy y entornos

Cómo se publica el sitio, qué dominios usar y cómo configurar variables. El hosting de referencia es **Vercel** (Next.js App Router).

---

## Resumen

| Entorno | URL típica | Rama / trigger | Uso |
|---------|------------|----------------|-----|
| **Local** | `http://localhost:3000` | — | Desarrollo |
| **Preview (staging)** | `*.vercel.app` o alias preview | PR, branch ≠ `main` | Revisar antes de producción |
| **Producción** | `https://www.arenadoslucho.com` | `main` (o rama de prod configurada) | Tráfico real, Ads, GTM |

---

## Vercel

### Configuración del proyecto

| Aspecto | Valor en repo |
|---------|----------------|
| Framework | Next.js (auto-detectado) |
| Build command | `npm run build` |
| Output | `.next` (default Next) |
| Install | `npm install` |
| `vercel.json` | **No existe** — defaults de Vercel |
| Carpeta local link | `.vercel/` (en `.gitignore`) |

### Comandos locales (antes de push)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # obligatorio antes de merge importante
npm run start    # probar build de producción local
npm run lint
```

### Flujo de deploy recomendado

```
git push → branch
    → Vercel Preview URL (staging)
    → revisar CTAs de WhatsApp, mobile (375px) y desktop
    → merge a main
    → deploy producción automático
    → validar GTM (`contact_whatsapp`) en el dominio real
```

### Qué sube Vercel

- Código de `src/`, configs, `public/` (imágenes, videos, favicon)
- **No** sube: `node_modules`, `.env*.local`, `.next` (se genera en build)

**Nota:** En el repo local `public/` puede estar casi vacío; en producción deben existir `/videos/*.mp4`, `/images/*` en el deploy o el sitio fallará assets.

---

## Producción

| Campo | Valor |
|-------|--------|
| **Dominio principal** | `https://www.arenadoslucho.com` |
| **Definido en código** | `SITE_URL` en `src/app/layout.tsx` |
| **metadataBase** | Misma URL (canonical implícito Next) |
| **GTM** | `GTM-W63ZV9D9` (mismo en todos los entornos salvo que se cree contenedor staging) |

### Checklist post-deploy producción

- [ ] Home, `/servicios` y `/arenado-de-piletas` cargan video/imágenes
- [ ] `/contacto` muestra el CTA de WhatsApp y abre el chat correcto
- [ ] WhatsApp flotante abre el número correcto (y es **uno solo**)
- [ ] GTM Preview en la URL de **producción**: `contact_whatsapp` dispara **solo tras confirmar el modal**
- [ ] El número **no** aparece contiguo en el HTML servido
- [ ] `/robots.txt` y `/sitemap.xml` responden 200
- [ ] Los 301 legacy funcionan (`/arenado-industrial`, `/arenado-particular`, `/presupuesto-rapido`)
- [ ] Sin enlaces internos 404 críticos (ver `15-bugs-conocidos.md`)
- [ ] `npm run build` ya pasó en CI/Vercel

---

## Staging (Preview)

### Qué es

Cada **push a una branch** o **Pull Request** en Vercel genera una URL única:

- Formato: `proyecto-xxx-tenant.vercel.app` o dominio preview del equipo
- **No** es el dominio `arenadoslucho.com` salvo alias explícito

### Uso correcto

| Hacer en preview | No asumir en preview |
|------------------|----------------------|
| Probar UI, responsive, copy | Conversiones Ads atribuidas a preview |
| Probar build y rutas nuevas | GTM de producción sin filtro (puede ensuciar datos) |
| QA de los CTAs de WhatsApp | Indexación de la URL de preview en Google |

### GTM / analytics en staging

| Opción | Recomendación |
|--------|----------------|
| Mismo contenedor GTM | Aceptable con **filtro** en GA4 por hostname |
| Contenedor GTM staging | Ideal si hay muchas previews y mucho tráfico interno |
| Desactivar GTM en preview | Solo si se implementa `VERCEL_ENV === 'preview'` en layout (no está hoy) |

**Hoy:** GTM carga en **todos** los deploys (mismo snippet en `layout.tsx`).

### WhatsApp en preview

⚠️ El número es el mismo en preview y en producción. Confirmar el `AlertDialog` **dispara el evento y abre `wa.me`** con el mensaje pre-cargado — pero **no lo envía**: hay que apretar enviar en WhatsApp. Para QA: confirmar (así se valida el evento en GTM Preview) y **cerrar sin enviar**. Si se envía, le llega un chat real al dueño; avisarle antes.

---

## Dominios

| Dominio | Rol |
|---------|-----|
| `www.arenadoslucho.com` | **Canónico** — usar en metadata, Ads, enlaces |
| `arenadoslucho.com` | Redirigir 301 → `www` (configurar en Vercel/DNS) |
| `*.vercel.app` | Preview / staging |
| `localhost:3000` | Desarrollo |

### DNS (referencia, panel del registrador)

- Registros hacia Vercel según documentación del proyecto en dashboard Vercel (A/CNAME).
- SSL: automático con Vercel.

### Cambiar dominio

Actualizar en sync:

1. `SITE_URL` en `src/app/layout.tsx`
2. Vercel → Domains
3. Google Search Console / Ads URLs finales
4. `contexto/` (03, 07, 08)

---

## Variables de entorno

### Estado actual

| Variable | En código hoy | En Vercel |
|----------|---------------|-----------|
| GTM ID | Hardcodeado `GTM-W63ZV9D9` en `layout.tsx` | No requerida |
| `SITE_URL` | Hardcodeado en `layout.tsx`, `sitemap.ts` y `robots.ts` (**los tres**) | No requerida |
| `.env.local` | Ignorado por git (`.gitignore`) | — |

### Variables recomendadas (futuro)

Configurar en **Vercel → Project → Settings → Environment Variables**:

| Variable | Entornos | Público | Uso |
|----------|----------|---------|-----|
| `NEXT_PUBLIC_SITE_URL` | Production, Preview | Sí | Reemplazar el `SITE_URL` fijo de los 3 archivos |
| `NEXT_PUBLIC_GTM_ID` | Production, Preview | Sí | Opcional; hoy hardcodeado |

**Reglas:**

- Prefijo `NEXT_PUBLIC_` → visible en el bundle del navegador (no secrets).
- **Nunca** commitear `.env`, `.env.local` ni credenciales de ningún panel.
- En Preview y Production pueden usarse los mismos valores públicos; secrets solo Production si aplica.

### Archivo local (desarrolladores)

Crear `.env.local` (no subir a git):

```env
# .env.local — ejemplo, no commitear
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# NEXT_PUBLIC_GTM_ID=GTM-W63ZV9D9
```

Next.js carga `.env.local` solo en desarrollo.

### Variables de Vercel automáticas (referencia)

| Variable | Valor |
|----------|--------|
| `VERCEL` | `1` en deploy |
| `VERCEL_ENV` | `production` \| `preview` \| `development` |
| `VERCEL_URL` | Hostname del deployment actual |

No usadas en código hoy; útiles para condicionar GTM:

```ts
// Ejemplo futuro — no implementado
// if (process.env.VERCEL_ENV === 'production') { /* cargar GTM */ }
```

---

## Ramas y entornos

| Rama sugerida | Deploy Vercel | Notas |
|---------------|---------------|-------|
| `main` | **Producción** | Dominio custom |
| `develop` / feature branches | Preview | QA |
| Tags / releases | Opcional | Según flujo del equipo |

No hay `staging` permanente con dominio propio en repo — el staging es **Preview por deployment**.

---

## Rollback

1. Vercel → Deployments → deployment anterior → **Promote to Production**
2. O `git revert` en `main` + push
3. Verificar GTM y el CTA de WhatsApp tras el rollback (si el revert tocó `layout`, `WppBtn` o `WhatsAppCTA`)

---

## CI / checks

| Check | Dónde |
|-------|--------|
| Build | Vercel build log (equivale a `npm run build`) |
| Lint | Local `npm run lint` (no forzado en doc de Vercel por defecto) |

Recomendación: no mergear a `main` si `npm run build` falla localmente.

---

## Seguridad en deploy

- No exponer secrets en `NEXT_PUBLIC_*`
- Rotar credenciales en el panel del proveedor si hubo leak (no alcanza con cambiar el código)
- Restringir acceso al proyecto Vercel al equipo necesario
- Preview URLs son públicas si alguien tiene el link — no poner datos sensibles en copy de prueba

Ver: `12-seguridad-y-validaciones.md`

---

## Relacionado

- Stack: `01-stack-y-arquitectura.md`
- ADR Vercel: `18-decisiones-tecnicas.md` (ADR-015)
- Roadmap: `17-roadmap-tecnico.md`
- Workflow: `13-workflow-cursor.md`
