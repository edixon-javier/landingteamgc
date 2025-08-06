import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { caseStudiesData } from "@/lib/content";

// Generar rutas estáticas basadas en los slugs
export async function generateStaticParams() {
  return caseStudiesData.map((project) => ({
    slug: project.slug,
  }));
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// Generar metadata dinámica para SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudiesData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado | Equipo GC",
      description: "Lo sentimos, el proyecto que buscas no existe.",
    };
  }

  return {
    title: `${project.title} | Casos de Éxito | Equipo GC`,
    description:
      project.description ||
      `Descubre cómo ayudamos a ${project.client} a alcanzar sus objetivos empresariales a través de soluciones innovadoras.`,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.imageUrl }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = caseStudiesData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_60%)]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/casos-de-exito"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-6"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Volver a casos de éxito
          </Link>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-300">Cliente: {project.client}</p>
        </div>
      </div>

      {/* Contenido Principal */}
      <main className="flex-grow py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Imagen Principal */}
            <div className="mb-12 rounded-xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-[1.01]">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contenido Principal */}
              <div className="lg:col-span-2 space-y-12">
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Sobre el Proyecto
                  </h2>

                  <div className="space-y-8 text-gray-700 leading-relaxed">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        El Desafío
                      </h3>
                      <p>
                        {project.challenge ||
                          "Descripción del desafío pendiente de agregar."}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Nuestra Solución
                      </h3>
                      <p>
                        {project.solution ||
                          "Descripción de la solución pendiente de agregar."}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Resultados
                      </h3>
                      <p>
                        {project.results || "Resultados pendientes de agregar."}
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Detalles del Proyecto
                  </h3>

                  <div className="space-y-5">
                    {project.technologies && (
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">
                          Tecnologías
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="inline-block bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full font-medium border border-blue-100"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {project.projectUrl && (
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-5 py-3 rounded-lg font-medium shadow-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                      >
                        Ver Proyecto
                        <svg
                          className="w-5 h-5 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
