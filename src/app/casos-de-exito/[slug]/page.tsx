import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { caseStudiesData } from '@/lib/content';

// Generar rutas estáticas basadas en los slugs
export async function generateStaticParams() {
  return caseStudiesData.map((project) => ({
    slug: project.slug,
  }));
}

type Props = {
  params: {
    slug: string;
  };
};

// Generar metadata dinámica para SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = caseStudiesData.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado | Equipo GC",
      description: "Lo sentimos, el proyecto que buscas no existe.",
    };
  }

  return {
    title: `${project.title} | Casos de Éxito | Equipo GC`,
    description: project.description || `Descubre cómo ayudamos a ${project.client} a alcanzar sus objetivos empresariales a través de soluciones innovadoras.`,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.imageUrl }],
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = caseStudiesData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-20 pb-12 md:pt-28 md:pb-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Link 
              href="/casos-de-exito" 
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver a casos de éxito
            </Link>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-400">
              Cliente: {project.client}
            </p>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <main className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Imagen Principal */}
            <div className="mb-12 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={1200}
                height={675}
                className="w-full h-auto"
                priority
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contenido Principal */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Sobre el Proyecto
                  </h2>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      El Desafío
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.challenge || "Descripción del desafío pendiente de agregar."}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Nuestra Solución
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.solution || "Descripción de la solución pendiente de agregar."}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Resultados
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.results || "Resultados pendientes de agregar."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Detalles del Proyecto
                  </h3>

                  <div className="space-y-4">
                    {project.technologies && (
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Tecnologías</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span 
                              key={index}
                              className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.year && (
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Año</h4>
                        <p className="text-gray-600">{project.year}</p>
                      </div>
                    )}

                    {project.duration && (
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Duración</h4>
                        <p className="text-gray-600">{project.duration}</p>
                      </div>
                    )}
                  </div>

                  {project.projectUrl && (
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Ver Proyecto
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
