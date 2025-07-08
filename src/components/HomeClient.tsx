"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectGrid from "@/components/portfolio/ProjectGrid";
import { projects } from "@/lib/data";

export default function HomeClient() {
  const [isViewingProject, setIsViewingProject] = useState(false);
  return (
    <div
      className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
      suppressHydrationWarning
    >
      {/* Encabezado */}
      <header className="w-full max-w-[90rem] mx-auto py-3 px-6 sm:px-8 lg:px-12 flex justify-between items-center border-b dark:border-gray-800">
        <div suppressHydrationWarning>
          <Image
            src="/LogoGc.svg"
            alt="Logo"
            width={180}
            height={60}
            className="dark:invert"
          />
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li className="text-lg font-medium hover:text-blue-600 transition-colors">
              <a href="#portfolio">Gestores y Cocreadores de Soluciones Digitales.</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Sección principal de portafolio */}
      <section
        id="portfolio"
        className="w-full py-12 bg-gray-50 dark:bg-gray-900"
      >
        <div
          className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12"
          suppressHydrationWarning
        >
          {/* Cabecera del portafolio - Solo se muestra cuando no se está viendo un proyecto específico */}
          {!isViewingProject && (
            <div className="text-center mb-20" suppressHydrationWarning>
              <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-base font-medium mb-4">
                PORTAFOLIO
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Nuestros Proyectos
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Explora nuestra colección de proyectos y descubre cómo
                transformamos desafíos en soluciones efectivas.
              </p>
            </div>
          )}
          <div className="w-full">
            <ProjectGrid projects={projects} onViewChange={setIsViewingProject} />
          </div>
        </div>
      </section>
    </div>
  );
}
