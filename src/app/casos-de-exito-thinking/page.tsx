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
      
      {/* Hero Section Mejorado */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[90vh] flex items-center justify-center bg-[#111827] text-white overflow-hidden"
      >
        {/* Fondo decorativo con animación sutil */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-700/20 [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]">
            <motion.div
              animate={{
                backgroundPosition: ["0px 0px", "100px 100px"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-full h-full"
            />
          </div>
          {/* Gradiente superpuesto personalizado para Design Thinking */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-sky-900/30 mix-blend-multiply" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto text-center space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="inline-block"
            >
              <span className="px-6 py-2 bg-purple-500/10 text-purple-300 rounded-full text-sm font-medium tracking-wide">
                DESIGN THINKING
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight"
            >
              Diseño Centrado en el{' '}
              <span className="text-purple-400 relative">
                Usuario
                <motion.svg
                  width="100%"
                  height="8"
                  viewBox="0 0 300 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -bottom-2 left-0 w-full"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <path
                    d="M1 5.5C50 2.5 150 2.5 299 5.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Descubre cómo transformamos espacios y experiencias a través de soluciones creativas y centradas en las personas.
            </motion.p>
          </motion.div>
        </div>

        {/* Decorative bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </motion.div>
      
      {/* Casos de Éxito con Layout Mejorado */}
      <main className="py-20 md:py-32 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={
            <div className="space-y-16">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i} 
                  className="animate-pulse flex flex-col lg:flex-row gap-12 items-center mb-28"
                >
                  <div className="w-full lg:w-1/2 h-[400px] bg-gray-200 rounded-2xl"></div>
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="h-8 bg-gray-200 rounded-full w-32"></div>
                    <div className="h-12 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-24 bg-gray-200 rounded w-full"></div>
                    <div className="h-14 bg-gray-200 rounded-xl w-48"></div>
                  </div>
                </div>
              ))}
            </div>
          }>
            <div className="space-y-16 md:space-y-24">
              {caseStudiesDataThinking.map((caseStudy, index) => (
                <CaseStudyCard
                  key={caseStudy.slug}
                  caseStudy={caseStudy}
                  isReversed={index % 2 === 1}
                  priority={index < 2}
                />
              ))}
            </div>
          </Suspense>
        </div>
      </main>

      {/* CTA Section Mejorada */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-purple-50/50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200/40 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-6 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-8">
              COMIENZA TU PROYECTO
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              ¿Listo para crear experiencias{' '}
              <span className="text-purple-600">memorables</span>?
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Descubre cómo nuestro enfoque de Design Thinking puede transformar tus espacios y experiencias
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href="#contacto"
                onClick={handleAgendaDemoClick}
                className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-xl font-medium text-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-xl hover:shadow-purple-600/10 group"
              >
                Conversemos sobre tu proyecto
                <svg
                  className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
