import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { caseStudiesData } from '@/lib/content';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = caseStudiesData.find((project) => project.slug === params.slug);
  
  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }
  
  return {
    title: `${project.client} - ${project.title} | Equipo GC`,
    description: `Caso de éxito: ${project.title} para ${project.client}. Descubre cómo Equipo GC implementó soluciones innovadoras.`,
  };
}

export default function CaseStudyPage({ params }: Props) {
  const project = caseStudiesData.find((project) => project.slug === params.slug);
  
  if (!project) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-16 pb-8 md:pt-24 md:pb-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start">
            <Link 
              href="/casos-de-exito" 
              className="mb-4 flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver a casos de éxito
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
              {project.client}
            </h1>
            <p className="mt-2 text-xl md:text-2xl text-gray-300">
              {project.title}
            </p>
          </div>
        </div>
      </div>
      
      <main className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg mb-12">
              <Image
                src={project.imageUrl}
                alt={`Caso de éxito de ${project.client}`}
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              {/* Contenido detallado del proyecto - a implementar en futuras etapas */}
              <p className="text-lg text-gray-700">
                Estamos trabajando en el contenido detallado de este caso de éxito. ¡Vuelve pronto para descubrir más sobre esta historia!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
