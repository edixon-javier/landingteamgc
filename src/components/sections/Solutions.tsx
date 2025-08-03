"use client";

import { motion } from 'framer-motion';
import { solutionsData } from '@/lib/content';
import { Card } from '@/components/ui/Card';

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

export function Solutions() {
  return (
    <section className="bg-white py-16 sm:py-24">
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
            Un enfoque integrado para un impacto real
          </motion.h2>
          <motion.p 
            variants={itemVariants} 
            className="mt-4 max-w-2xl mx-auto text-lg text-gray-600"
          >
            Nuestras capacidades no operan en silos. Las integramos bajo un enfoque estratégico de Design Thinking para crear soluciones completas que abordan tus objetivos desde todos los ángulos.
          </motion.p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {solutionsData.map((solution) => (
              <motion.div key={solution.title} variants={itemVariants} className="h-full">
                <Card
                  title={solution.title}
                  description={solution.description}
                  href={solution.href}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
