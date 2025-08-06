"use client";

import { useState } from "react";
import ProjectGrid from "@/components/portfolio/ProjectGrid";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";

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

export default function HomeClient() {
  const [isViewingProject, setIsViewingProject] = useState(false);


  return (
    <div
      className="min-h-screen bg-white  text-gray-900"
      suppressHydrationWarning
    >
      {/* Main portfolio section */}
      <section
        id="portfolio"
        className="w-full py-12 pt-32 bg-gray-50 text-gray-900"
      >
        <div
          className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12"
          suppressHydrationWarning
        >
          {/* Portfolio header - Only shown when not viewing a specific project */}
          {isViewingProject ? (
            <div className="flex justify-start mb-8"></div>
          ) : (
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
                    Explora cómo hemos transformado los desafíos de nuestros
                    clientes en historias de éxito medibles y visualmente
                    impactantes.
                  </motion.p>

                </motion.div>
              </div>
            </section>
          )}
          <div className="w-full">
            <ProjectGrid
              projects={projects}
              onViewChange={setIsViewingProject}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
