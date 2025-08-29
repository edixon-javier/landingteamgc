"use client";

import { motion } from 'framer-motion';
import { methodologySteps } from '@/lib/content';
import { staggerSlow as sectionVariants, fadeInLeft as itemVariants } from '@/animations/variants';

export function Methodology() {
  return (
    <section className="relative bg-[#111827] text-white py-20 sm:py-32 overflow-hidden">
      {/* Fondo decorativo con gradiente y patrón */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-slate-700/20 [mask-image:linear-gradient(to_bottom,white,transparent,white)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-sky-900/20 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="max-w-3xl mx-auto text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Nuestra Metodología:{' '}
            <span className="text-purple-400">Design Thinking</span>
          </h2>
          <p className="text-xl text-gray-300">
            Más que un proceso, es nuestra filosofía para resolver problemas complejos. Nos centramos en las personas para diseñar soluciones que sean deseables, viables y tecnológicamente factibles.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
          className="relative max-w-5xl mx-auto"
        >
          {/* Línea de tiempo decorativa con gradiente */}
          <div 
            className="absolute left-8 top-4 bottom-4 w-0.5 hidden md:block" 
            style={{
              background: "linear-gradient(to bottom, rgba(168, 85, 247, 0.4), rgba(56, 189, 248, 0.4))"
            }}
            aria-hidden="true"
          />

          {methodologySteps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
              className="relative pl-16 md:pl-24 py-8 group"
            >
              {/* Número de paso con efecto hover */}
              <div className="absolute left-0 top-8 flex items-center justify-center w-16 h-16">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-lg group-hover:bg-sky-500/20 transition-colors duration-300" />
                  <span className="relative text-4xl font-bold bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent">
                    {step.id}
                  </span>
                </div>
              </div>

              {/* Contenido del paso */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-purple-500/5 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
