"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types";
import PortfolioCarousel from "./PortfolioCarousel";

interface ProjectGridProps {
  projects: Project[];
  onViewChange?: (isViewingProject: boolean) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onViewChange }) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Variantes de animación para la entrada de la grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  // Efecto para notificar cuando cambia la vista
  const handleProjectSelect = (index: number | null) => {
    setSelectedProject(index);
    if (onViewChange) {
      onViewChange(index !== null);
    }
  };
  // Si hay un proyecto seleccionado, mostrar el carrusel en esa posición
  if (selectedProject !== null) {
    return (
      <div className="w-full h-full flex flex-col">
        <div className="mb-8">
          <button
            onClick={() => handleProjectSelect(null)}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
              Return to All Projects
          </button>        </div>
        <div className="flex-1">
          <PortfolioCarousel projects={projects} initialIndex={selectedProject} />
        </div>
      </div>
    );
  }  return (
    <motion.div
      className="w-full h-full max-w-7xl mx-auto px-4 flex flex-col"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      suppressHydrationWarning
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" suppressHydrationWarning>
        {projects.map((project, index) => (
          <motion.div            key={project.id}
            variants={itemVariants}
            className="relative h-80 rounded-xl overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]"
            onClick={() => handleProjectSelect(index)}
            suppressHydrationWarning
          >
            {/* Imagen de fondo con opacidad */}
            <div className="absolute inset-0 z-0" suppressHydrationWarning>
              <Image
                src={project.galleryImages[0]}
                alt={project.title}
                fill
                className="object-cover"
              />              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10" suppressHydrationWarning></div>
            </div>

            {/* Contenido de la tarjeta */}
            <div className="relative z-20 flex flex-col justify-end h-full p-6 text-white" suppressHydrationWarning>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-200 line-clamp-3 mb-4">
                {project.challenge}
              </p>
              <div className="flex flex-wrap gap-2" suppressHydrationWarning>
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-blue-600/70 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 text-xs bg-blue-600/70 rounded-full">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>            </div>

            {/* Efecto hover */}
             <div className="absolute inset-0 z-30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-black/40" suppressHydrationWarning>
              <span className="px-4 py-2 bg-white text-black rounded-md font-medium">
                View Details
              </span>
            </div>

            {/* Box shadow */}
            <div className="absolute inset-0 shadow-lg shadow-blue-500/10 rounded-xl" suppressHydrationWarning></div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectGrid;
