import { Metadata } from "next";
import { Header } from '@/components/organisms/Header';
import { caseStudiesData } from '@/lib/content';
import { projects } from '@/lib/data';
import { FeaturedCases, DetailedProjects } from '@/components/portfolio/AnimatedSection';

export const metadata: Metadata = {
  title: "Casos de Éxito | Equipo GC",
  description: "Explora nuestros casos de éxito y descubre cómo hemos transformado los desafíos de nuestros clientes en soluciones innovadoras.",
};

export default function CasosDeExitoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16 pb-8 md:pt-24 md:pb-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Casos de Éxito
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl">
            Explora cómo hemos transformado los desafíos de nuestros clientes en historias de éxito medibles y visualmente impactantes.
          </p>
        </div>
      </div>
      
      <main className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Casos destacados</h2>
            <FeaturedCases caseStudies={caseStudiesData} />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Proyectos detallados</h2>
            <DetailedProjects projects={projects} />
          </div>
        </div>
      </main>
    </div>
  );
}
