"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Project } from "@/types";
import ProjectCard from "./ProjectCard";
import CarouselControls from "./CarouselControls";
import ProjectGalleryModal from "./ProjectGalleryModal";
import IframeViewer from "./IframeViewer";

interface PortfolioCarouselProps {
  projects: Project[];
}

/**
 * Componente principal que organiza el carrusel de proyectos y maneja el estado
 */
const PortfolioCarousel: React.FC<PortfolioCarouselProps> = ({ projects }) => {
  // Estados para manejar la interactividad
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIframeId, setActiveIframeId] = useState<string | null>(null);
  
  const currentProject = projects[currentIndex];

  // Manejadores para la navegación del carrusel
  const handleNext = useCallback(() => {
    setActiveIframeId(null); // Cerrar iframe al cambiar de proyecto
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  }, [projects.length]);

  const handlePrev = useCallback(() => {
    setActiveIframeId(null); // Cerrar iframe al cambiar de proyecto
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  }, [projects.length]);

  const handleDotClick = useCallback((index: number) => {
    setActiveIframeId(null); // Cerrar iframe al cambiar de proyecto
    setCurrentIndex(index);
  }, []);

  const handleOpenModal = useCallback(() => {
    setModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const handleToggleIframe = useCallback(() => {
    setActiveIframeId((prev) => 
      prev === currentProject.id ? null : currentProject.id
    );
  }, [currentProject.id]);

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Container con overflow oculto para el carrusel */}
      <div className="relative w-full overflow-hidden">        {/* Pista del carrusel */}
        <motion.div
          className="flex w-full"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ 
            type: "tween", 
            ease: "easeInOut",
            duration: 0.5
          }}
        >
          {/* Tarjetas de proyectos */}
          {projects.map((project, index) => (
            <div key={project.id} className="w-full flex-shrink-0">
              <ProjectCard
                project={project}
                isActive={currentIndex === index}
                onOpenModal={handleOpenModal}
                onShowLiveDemo={handleToggleIframe}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Componente para mostrar el iframe cuando está activo */}
      <IframeViewer
        url={currentProject?.liveUrl || ""}
        isActive={activeIframeId === currentProject?.id}
        onClose={() => setActiveIframeId(null)}
      />

      {/* Controles del carrusel */}
      <CarouselControls
        currentIndex={currentIndex}
        projectCount={projects.length}
        onPrev={handlePrev}
        onNext={handleNext}
        onDotClick={handleDotClick}
      />

      {/* Modal de galería de imágenes */}
      <ProjectGalleryModal
        isOpen={modalOpen}
        images={currentProject?.galleryImages || []}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default PortfolioCarousel;
