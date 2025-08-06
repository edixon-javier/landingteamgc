"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Project } from "@/types";
import BrowserMockup from "./BrowserMockup";

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  onOpenModal: () => void;
  onShowLiveDemo: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
      duration: 0.4,
      ease: [0.42, 0, 1, 1], // "easeOut" como cubic-bezier
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.4,
      ease: [0.42, 0, 1, 1], // "easeOut" corregido
    },
  },
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isActive,
  onOpenModal,
  onShowLiveDemo,
}) => {
  return (
    <div className="w-full mx-auto px-6 py-8 flex flex-col md:flex-row gap-8 h-full min-h-[600px]">
      {/* Columna izquierda */}
      <motion.div
        className="w-full md:w-1/2 space-y-6"
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl font-bold text-gray-900"
          variants={itemVariants}
        >
          {project.title}
        </motion.h2>

        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold text-gray-800  mb-2">
            The Challenge
          </h3>
          <p className="text-gray-600">{project.challenge}</p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Our Solution
          </h3>
          <p className="text-gray-600">{project.solution}</p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold text-gray-800  mb-2">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 pt-4"
          variants={itemVariants}
        >
          <button
            onClick={onShowLiveDemo}
            className="inline-flex items-center justify-center px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors gap-2"
          >
            <ExternalLink size={18} /> Live Demo
          </button>
        </motion.div>
      </motion.div>

      {/* Columna derecha */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: 20 }}
        animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{
          type: "tween",
          duration: 0.5,
          ease: [0.42, 0, 1, 1], // corregido
          delay: 0.1,
        }}
      >
        <BrowserMockup
          imageUrl={project.galleryImages[0]}
          onClick={onOpenModal}
          alt={`Vista previa del proyecto ${project.title}`}
        />
      </motion.div>
    </div>
  );
};

export default ProjectCard;
