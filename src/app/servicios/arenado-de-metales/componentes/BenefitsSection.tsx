import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, PaintBucket } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Quita óxido y contaminantes",
    description:
      "Remueve óxido, pintura vieja y otros contaminantes que métodos tradicionales no pueden eliminar completamente.",
  },
  {
    icon: Clock,
    title: "Ahorra tiempo y trabajo manual",
    description:
      "Proceso rápido que evita días de trabajo manual con lija o químicos. Tus piezas listas en menos tiempo.",
  },
  {
    icon: PaintBucket,
    title: "Preparación para pintura o galvanizado",
    description:
      "Deja la superficie nueva lista para pintura, galvanizado o cualquier otro recubrimiento, garantizando mejor adherencia y durabilidad.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
            Beneficios de <strong>arenado de metales</strong>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Solución profesional para restaurar piezas metálicas, rejas y
            superficies metálicas. Nuestro servicio permite{" "}
            <strong>arenar metal</strong> de forma eficiente, dejando el{" "}
            <strong>acero decapado</strong> y garantizando superficies
            perfectas. Especialistas en{" "}
            <strong>arenado acero inoxidable</strong> y otros metales.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow border-blue-100"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
