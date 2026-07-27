/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Rutas legacy eliminadas → destinos vigentes (evita 404 + preserva link equity).
      { source: "/arenado-industrial", destination: "/servicios", permanent: true },
      { source: "/arenado-particular", destination: "/arenado-de-piletas", permanent: true },
      { source: "/presupuesto-rapido", destination: "/contacto", permanent: true },
    ];
  },
};

module.exports = nextConfig;
