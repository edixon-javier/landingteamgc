"use client";

import { motion } from 'framer-motion';
import { solutionsData } from '@/lib/content';
import { ArrowRight, BrainCircuit, Truck, Code } from 'lucide-react';
import { staggerContainer as sectionVariants, fadeIn as itemVariants } from '@/animations/variants';
import { getLinkPath } from '@/lib/utils';

// --- Componente de Tarjeta de Solución (Rediseñado) ---
const SolutionCard = ({ icon, title, description, href }: { icon: React.ReactNode; title: string; description: string; href: string; }) => {
  // Generar la URL completa usando la función de utilidad
  const fullHref = getLinkPath(href);
  
  return (
    <motion.div variants={itemVariants} className="h-full">
      <a href={fullHref} className="group p-8 bg-white rounded-2xl border border-gray-200/80 shadow-lg hover:shadow-2xl hover:border-sky-500 transition-all duration-300 h-full flex flex-col text-left">
        <div className="bg-sky-600 text-white w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:bg-gray-900 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900">
          {title}
        </h3>
        <p className="mt-3 text-base text-gray-600 flex-grow">
          {description}
        </p>
        <div className="mt-6 font-semibold text-sky-600 flex items-center group-hover:text-gray-900 transition-colors duration-300">
          <span>Descubrir solución</span>
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </a>
    </motion.div>
  );
};

export function Solutions() {
  // Mapeo de íconos basado en el título de la solución
  const getIconForSolution = (title: string) => {
    if (title.includes("Estratégica") || title.includes("Estrategia")) {
      return <BrainCircuit size={28} />;
    } else if (title.includes("Operaciones") || title.includes("Logística")) {
      return <Truck size={28} />;
    } else if (title.includes("Desarrollo") || title.includes("Tecnología")) {
      return <Code size={28} />;
    }
    return <Code size={28} />; // Ícono por defecto
  };

  return (
    <section className="bg-gray-50 py-20 lg:py-28">
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
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900"
          >
            Un Enfoque Integrado para un Impacto Real
          </motion.h2>
          <motion.p 
            variants={itemVariants} 
            className="mt-4 max-w-3xl mx-auto text-lg lg:text-xl text-gray-600"
          >
            Nuestras capacidades no operan en silos. Las integramos bajo una filosofía de Design Thinking para crear soluciones completas que abordan tus objetivos desde todos los ángulos.
          </motion.p>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsData.map((solution) => (
              <SolutionCard
                key={solution.title}
                icon={getIconForSolution(solution.title)}
                title={solution.title}
                description={solution.description}
                href={solution.href}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
