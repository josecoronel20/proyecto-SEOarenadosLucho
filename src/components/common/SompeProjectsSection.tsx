import { ProjectCard } from "@/components/ui/project-card";
import { getAllProjects, type Project } from "@/data/projects";
import { Button } from "../ui/button";
import Link from "next/link";
import { WhatsAppButton } from "./WhatsAppButton";
import { ArrowRight } from "lucide-react";

export function SomeProjectsSection() {
  function getRandomProjects(data: Project[], n: number): Project[] {
    const shuffled = data.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  }

  const allProjects = getAllProjects();
  const projects = getRandomProjects(allProjects, 3);

  return (
    <section className="py-16" aria-labelledby="some-projects-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-10 text-center">
          <h2 id="some-projects-heading" className="text-3xl font-bold mb-3">
            Algunos Proyectos Realizados
          </h2>
          <p className="text-muted-foreground text-lg">
            Mirá ejemplos reales de trabajos de arenado en diferentes rubros: piletas, vehículos e industrias.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className="text-center mt-16 flex flex-col md:flex-row items-center justify-center gap-6 rounded-2xl p-8 mx-auto max-w-2xl w-full ">
        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-blue-600 text-blue-700 hover:bg-blue-50 hover:border-blue-700 transition-all px-8 py-4 rounded-full font-semibold text-base shadow-md"
        >
          <Link href="/proyectos" aria-label="Ver más proyectos realizados de arenado" className="flex items-center justify-center gap-2 w-full">
            Ver más proyectos
            <svg aria-hidden="true" focusable="false" width="20" height="20" className="inline-block ml-2 text-blue-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
          </Link>
        </Button>
        <Button asChild className="w-full">
          <Link href="/presupuesto-rapido" aria-label="Solicitar presupuesto para arenado">
            Presupuesto Rápido
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
        <WhatsAppButton />

      </div>
    </section>
  );
}

export default SomeProjectsSection;