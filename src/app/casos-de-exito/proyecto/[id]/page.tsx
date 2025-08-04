import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { projects } from '@/lib/data';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

type Props = {
  params: Promise<{
    id: string;
  }>;
};


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // ✅ Resolver la promesa de params
  const { id } = await params;
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return {
    title: `${project.title} | Equipo GC`,
    description: `${project.challenge.substring(0, 150)}...`,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  // ✅ Resolver la promesa de params
  const { id } = await params;
  const project = projects.find((project) => project.id === id);

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
              {project.title}
            </h1>
          </div>
        </div>
      </div>
      
      <main className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Galería de imágenes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {project.galleryImages.slice(0, 4).map((image, index) => (
                <div 
                  key={index} 
                  className={`overflow-hidden rounded-lg shadow-md ${
                    index === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Imagen ${index + 1}`}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Detalles del proyecto */}
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Sobre el proyecto</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">El desafío</h3>
                  <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">La solución</h3>
                  <p className="text-gray-700 leading-relaxed">{project.solution}</p>
                </div>
                
                {project.liveUrl && (
                  <div className="mt-8">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Ver sitio en vivo
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
              
              {/* Tecnologías usadas */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Tecnologías</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index} 
                      className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.repoUrl && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Repositorio</h3>
                    <a 
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      Ver código
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
