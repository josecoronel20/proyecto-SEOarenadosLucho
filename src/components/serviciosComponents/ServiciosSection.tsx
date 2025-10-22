import { ServiceCard } from "./ServiceCard";
import { getAllServices } from "@/data/services";

export function ServiciosSection() {
  const services = getAllServices();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Servicios de limpieza profunda y preparación de superficies en Pilar
            y Zona Norte
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrecemos{" "}
            <strong>
              servicios profesionales de arenado, granallado y limpieza
              industrial
            </strong>{" "}
            para diferentes industrias y aplicaciones. Trabajamos con{" "}
            <strong>equipos profesionales y técnicas especializadas</strong> en
            Pilar, Zona Norte, Zona Oeste y CABA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} id={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
