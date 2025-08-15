"use client";

import { motion } from 'framer-motion';
import { methodologySteps } from '@/lib/content';
import { staggerSlow as sectionVariants, fadeInLeft as itemVariants } from '@/animations/variants';

export function Methodology() {
  return (
    <section className="bg-gray-900 text-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Nuestra Metodología: Design Thinking
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Más que un proceso, es nuestra filosofía para resolver problemas complejos. Nos centramos en las personas para diseñar soluciones que sean deseables, viables y tecnológicamente factibles.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
          className="relative max-w-4xl mx-auto"
        >
          {/* Línea de tiempo vertical decorativa */}
          <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gray-700 hidden md:block" aria-hidden="true"></div>

          {methodologySteps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="relative pl-16 md:pl-20 py-6"
            >
              <div className="absolute left-0 top-6 flex items-center justify-center w-16 h-16">
                <span className="text-4xl font-bold text-blue-500">{step.id}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
