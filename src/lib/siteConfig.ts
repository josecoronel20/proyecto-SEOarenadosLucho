// Fuente única de datos del negocio para SEO / structured data (JSON-LD).
// Antes SITE_URL estaba hardcodeado en layout.tsx, sitemap.ts y robots.ts; ahora
// esos tres (y el schema de servicios/casos) lo importan de acá. Si cambia el
// dominio, se toca SOLO este archivo.

export const SITE_URL = "https://www.arenadoslucho.com"

/** @id estable de la entidad de negocio dentro del @graph JSON-LD. */
export const BUSINESS_ID = `${SITE_URL}/#business`

export const BUSINESS = {
  name: "Arenados Lucho",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-solo-azul.png`,
  email: "arenadoslucho@hotmail.com",
  // Mismo número que WppBtn.tsx (evento contact_whatsapp). No cambiar sin actualizar WppBtn.
  telephone: "+5491123787750",
  openingHours: "Mo-Sa 08:00-18:00",
  description:
    "Arenado industrial y particular in situ en Buenos Aires y AMBA: dejamos la superficie lista para pintar o revestir. Equipos propios, coordinación en obra y presupuesto sin costo.",
  // Fotos reales de trabajos (existen en /public y se usan en los casos).
  images: [
    `${SITE_URL}/images/services/arenadoIndustrial/Nave/IMG_2419.PNG`,
    `${SITE_URL}/images/services/arenadoParticular/Piletas/IMG_2454.PNG`,
    `${SITE_URL}/images/services/arenadoIndustrial/Tanque/IMG_2438.PNG`,
  ],
  // PENDIENTES de dato real del dueño (NO inventar): geo (lat/long), sameAs (Google
  // Business Profile / redes), priceRange, aggregateRating (solo con reseñas reales).
}
