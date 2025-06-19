"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectGrid from "@/components/portfolio/ProjectGrid";
import { projects } from "@/lib/data";

export default function HomeClient() {
  const [isViewingProject, setIsViewingProject] = useState(false);
  return (
    <div
      className="flex flex-col h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
      suppressHydrationWarning
    >
      {/* Encabezado */}
      <header className="w-full max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div suppressHydrationWarning>
          <Image
            src="/LogoGc.svg"
            alt="Logo"
            width={160}
            height={50}
            className="dark:invert"
          />
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li className="text-sm font-medium hover:text-blue-600 transition-colors">
              <a href="#portfolio">Gestores y Cocreadores de Soluciones Digitales.</a>
            </li>
          </ul>
        </nav>{" "}
      </header>
      {/* Sección principal de portafolio */}{" "}
      <section
        id="portfolio"
        className="w-full py-8 flex-1 bg-gray-50 dark:bg-gray-900 flex flex-col"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col flex-1"
          suppressHydrationWarning
        >
          {/* Cabecera del portafolio - Solo se muestra cuando no se está viendo un proyecto específico */}
          {!isViewingProject && (
            <div className="text-center mb-16" suppressHydrationWarning>
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-3">
                PORTAFOLIO
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Nuestros Proyectos
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Explora nuestra colección de proyectos y descubre cómo
                transformamos desafíos en soluciones efectivas.
              </p>
            </div>
          )}
          <ProjectGrid projects={projects} onViewChange={setIsViewingProject} />
        </div>
      </section>
    </div>
  );
}
