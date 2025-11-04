import { Link, MapPin } from "lucide-react";

export function CoverageAreasSection() {
  // Zonas optimizadas para SEO local, priorizadas según PROJECT_INFO.md y AI_CONTEXT.md

  const areas = [
    { name: "Zona Norte", href: "/zonas-de-cobertura/zona-norte" },
    { name: "Zona Oeste", href: "/zonas-de-cobertura/zona-oeste" },
    { name: "CABA", href: "/zonas-de-cobertura/caba" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Zonas de Cobertura</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Brindamos servicio de pintura profesional en Pilar, Zona Norte, Zona
            Oeste y CABA
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {areas.map((area, index) => (
            <a
              href={area.href}
              key={index}
              className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <MapPin className="h-5 w-5 text-blue-600" />
              <span className="font-medium">{area.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
