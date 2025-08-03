"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { caseStudiesData } from '@/lib/content';
import { Button } from '@/components/ui/button';

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

export function CaseStudies() {
  // Mostramos solo los primeros 3 casos en la página de inicio
  const featuredStudies = caseStudiesData.slice(0, 3);

  return (
    <section className="bg-gray-50  py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="text-center"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900"
          >
            Resultados, no solo promesas
          </motion.h2>
          <motion.p 
            variants={itemVariants} 
            className="mt-4 max-w-2xl mx-auto text-lg text-gray-600"
          >
            Explora cómo hemos transformado los desafíos de nuestros clientes en historias de éxito medibles y visualmente impactantes.
          </motion.p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStudies.map((study) => (
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
          </div>

          <motion.div variants={itemVariants} className="mt-16">
            <Link href="/casos-de-exito">
              <Button size="lg" variant="outline" className="text-white border-gray-800 hover:bg-gray-800 hover:text-white">
                Ver todos los proyectos
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
