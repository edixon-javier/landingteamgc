'use client';

import { Suspense } from 'react';
import { Header } from '@/components/organisms/Header';
import { caseStudiesDataThinking } from '@/lib/content';
import { CaseStudyCard } from '@/components/portfolio/CaseStudyCard';
import { Footer } from "@/components/organisms/Footer";
import { motion } from 'framer-motion';
import { useAgendaDemoScroll } from '@/hooks/useAgendaDemoScroll';

export default function CasosDeExitoThinkingPage() {
  const handleAgendaDemoClick = useAgendaDemoScroll("contacto");
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden"
      >
        {/* Fondo decorativo de rejilla */}
        <div className="absolute inset-0 bg-grid-slate-700/20 [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-4xl"
          >
            Transformando Ideas en{' '}
            <span className="text-indigo-400">naa mni cosas Digitales</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-xl text-gray-300 max-w-3xl"
          >
            Explora cómo hemos transformado los desafíos de nuestros clientes en historias de éxito medibles y visualmente impactantes.
          </motion.p>
        </div>
      </motion.div>
      
      {/* Casos de Éxito */}
      <main className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={
            <div className="space-y-12">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i} 
                  className="animate-pulse flex flex-col lg:flex-row gap-8 items-center mb-24"
                >
                  <div className="w-full lg:w-1/2 h-[300px] bg-gray-200 rounded-xl"></div>
                  <div className="w-full lg:w-1/2">
                    <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded w-full mb-6"></div>
                    <div className="h-24 bg-gray-200 rounded w-full mb-8"></div>
                    <div className="h-12 bg-gray-200 rounded w-48"></div>
                  </div>
                </div>
              ))}
            </div>
          }>
            <div className="space-y-12">
              {caseStudiesDataThinking.map((caseStudy, index) => (
                <CaseStudyCard
                  key={caseStudy.slug}
                  caseStudy={caseStudy}
                  isReversed={index % 2 === 1}
                  priority={index < 2} // Dar prioridad a los primeros dos casos
                />
              ))}
            </div>
          </Suspense>
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Descubre cómo podemos ayudarte a alcanzar tus objetivos digitales
            </p>
            <a
              href="#contacto"
              onClick={handleAgendaDemoClick}
              className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium transition-colors duration-200 hover:bg-indigo-700"
            >
              Conversemos sobre tu proyecto
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
