"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectGalleryModalProps {
  isOpen: boolean;
  images: string[];
  onClose: () => void;
}

/**
 * Modal para mostrar una galería de imágenes del proyecto
 */
const ProjectGalleryModal: React.FC<ProjectGalleryModalProps> = ({
  isOpen,
  images,
  onClose,
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Cerrar al presionar la tecla Escape
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowRight") handleNextImage();
    if (e.key === "ArrowLeft") handlePrevImage();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 md:p-6"
          onClick={onClose}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Contenedor del modal (evita que los clics internos cierren el modal) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative w-full max-w-5xl max-h-[85vh] bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cierre */}
            <button
              className="absolute top-4 right-4 z-10 p-1 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-white"
              onClick={onClose}
              aria-label="Cerrar galería"
            >
              <X size={24} />
            </button>
            
            {/* Navegación de imágenes */}
            <div className="relative w-full h-[70vh]">
              {/* Imagen actual */}
              <Image
                src={images[currentImage]}
                alt={`Imagen de proyecto ${currentImage + 1}`}
                fill
                className="object-contain"
              />
              
              {/* Controles de navegación */}
              <div className="absolute inset-0 flex justify-between items-center px-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevImage();
                  }}
                  className="p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage();
                  }}
                  className="p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Imagen siguiente"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
            
            {/* Miniaturas de imágenes */}
            <div className="flex overflow-x-auto p-2 bg-gray-100 dark:bg-gray-800">
              {images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`relative w-20 h-16 flex-shrink-0 mx-1 cursor-pointer ${
                    index === currentImage
                      ? "ring-2 ring-blue-500"
                      : "opacity-70 hover:opacity-100"
                  } rounded overflow-hidden transition-all duration-200`}
                >
                  <Image
                    src={image}
                    alt={`Miniatura ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectGalleryModal;
