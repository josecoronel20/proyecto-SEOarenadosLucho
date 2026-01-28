import { CTAActionButtons } from "@/components/common/CTAActionButtons";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Proyectos de <span className="text-primary">Arenado</span> - Antes/Después
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Conoce el acabado del arenado en diferentes proyectos realizados con éxito en más de 20 años de
            experiencia.
          </p>
<CTAActionButtons />  
        </div>
      </div>
    </section>
  );
}
