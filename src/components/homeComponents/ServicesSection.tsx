import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { getAllServices } from "@/data/services";
import { PROJECT } from "@/config/project";

// Componente reutilizable para servicios
function ServiceCard({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
  features,
}: {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  features: string[];
}) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-1">
        <div className="flex-1 mb-4">
          <ul className="text-sm text-gray-600 space-y-1">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <Button
          variant="outline"
          asChild
          className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors"
        >
          <Link href={href} aria-label={`Ver detalles de ${title}`}>
            Ver servicio: {title}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export function ServicesSection() {
  const allServices = getAllServices();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Servicios de limpieza profunda y preparación de superficies en Pilar y Zona Norte
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Ofrecemos{" "}
            <strong>servicios profesionales de arenado y sandblasting</strong>{" "}
            para diferentes industrias y aplicaciones en <strong>Pilar y Zona Norte</strong>. Trabajamos con{" "}
            <strong>equipos profesionales y técnicas especializadas de granallado</strong> en{" "}
            <Link href="/zonas-de-cobertura" className="text-primary hover:underline font-semibold">
              Zona Norte, Zona Oeste y CABA
            </Link>. Nuestro <strong>arenado profesional</strong> garantiza la mejor <strong>limpieza profunda de superficies</strong>.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.slice(0, 6).map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              href={service.href}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
              features={service.features}
            />
          ))}
        </div>
        {/* Ver todos los servicios */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white shadow-lg transition-all duration-200 hover:scale-105"
            asChild
          >
            <Link href="/servicios" className="flex items-center gap-2">
              Ver todos los servicios de arenado profesional
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
