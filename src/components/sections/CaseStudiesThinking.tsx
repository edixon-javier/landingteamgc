"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { caseStudiesDataThinking } from '@/lib/content';

// --- Variantes de Animación ---
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

// --- Componente Mejorado ---
export function CaseStudiesThinking() {
  const featuredStudies = caseStudiesDataThinking.slice(0, 3);

  const getComponentRoute = (slug: string) => {
    switch (slug) {
      case 'showroom-wiz':
        return '/casos-de-exito-thinking/ShowroomWizPage';
      case 'librero-toysmart':
        return '/casos-de-exito-thinking/LibreroToysmartPage';
      case 'stand-tannic':
        return '/casos-de-exito-thinking/StandTannicPage';
      case 'punto-experiencia-wiz':
        return '/casos-de-exito-thinking/PuntoExperienciaWizPage';
      case 'columna-philips-exito':
        return '/casos-de-exito-thinking/ColumnaPhilipsPage';
      case 'filbo-exito':
        return '/casos-de-exito-thinking/FilboExitoPage';
      default:
        return `/casos-de-exito-thinking/${slug}`;
    }
  };

  return (
    <section className="bg-[#111827] text-white py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
          className="text-center"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter"
          >
            Del Concepto a la Experiencia Inmersiva
          </motion.h2>
          
          <motion.p 
            variants={itemVariants} 
            className="mt-4 max-w-3xl mx-auto text-lg text-gray-300"
          >
            Creamos espacios que cuentan historias, inspirados en la metodología Design Thinking y diseñados para transformar la interacción entre marcas y personas. Cada proyecto es un viaje que conecta innovación, emoción y resultados.
          </motion.p>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStudies.map((study) => (
              <motion.div key={study.slug} variants={itemVariants}>
                <Link 
                  href={getComponentRoute(study.slug)}
                  className="group text-left bg-[#1F2937] rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="relative overflow-hidden h-56">
                    <Image
                      src={study.imageUrl}
                      alt={`Caso de éxito de ${study.name}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white">{study.name}</h3>
                    <p className="mt-2 text-base text-gray-400 flex-grow">{study.title}</p>
                    <div className="mt-4 text-blue-500 font-semibold flex items-center group-hover:text-blue-400 transition-colors">
                      Ver proyecto
                      <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16">
            <Link href="/casos-de-exito-thinking" className="inline-block">
              <button className="px-8 py-3 bg-transparent border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
                Ver todos los proyectos
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
