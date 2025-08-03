import { Metadata } from "next";
import { Header } from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { caseStudiesData } from '@/lib/content';
import { projects } from '@/lib/data';

export const metadata: Metadata = {
  title: "Casos de Éxito | Equipo GC",
  description: "Explora nuestros casos de éxito y descubre cómo hemos transformado los desafíos de nuestros clientes en soluciones innovadoras.",
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
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
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {caseStudiesData.map((study) => (
                <motion.div key={study.slug} variants={itemVariants}>
                  <Link href={`/casos-de-exito/${study.slug}`} className="block group text-left">
                    <div className="overflow-hidden rounded-lg shadow-md">
                      <Image
                        src={study.imageUrl}
                        alt={`Caso de éxito de ${study.client}`}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-gray-900">{study.client}</h3>
                    <p className="mt-1 text-base text-gray-600">{study.title}</p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Proyectos detallados</h2>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12"
            >
              {projects.map((project) => (
                <motion.div 
                  key={project.id} 
                  variants={itemVariants} 
                  className="flex flex-col border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="overflow-hidden h-64 relative">
                    <Image
                      src={project.galleryImages[0]}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    
                    <div className="mb-4">
                      <h4 className="text-md font-semibold text-gray-800">Desafío:</h4>
                      <p className="text-gray-600">{project.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-md font-semibold text-gray-800">Solución:</h4>
                      <p className="text-gray-600">{project.solution}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-md font-semibold text-gray-800">Tecnologías:</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {project.tech.slice(0, 5).map((tech, index) => (
                          <span 
                            key={index} 
                            className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 5 && (
                          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                            +{project.tech.length - 5} más
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-between">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Ver sitio
                      </a>
                    )}
                    
                    <Link 
                      href={`/casos-de-exito/proyecto/${project.id}`}
                      className="text-gray-700 hover:text-gray-900 font-medium text-sm flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Más detalles
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
