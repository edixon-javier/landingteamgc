"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselControlsProps {
  currentIndex: number;
  projectCount: number;
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
}

/**
 * Componente que muestra los controles de navegación del carrusel
 */
const CarouselControls: React.FC<CarouselControlsProps> = ({
  currentIndex,
  projectCount,
  onPrev,
  onNext,
  onDotClick,
}) => {
  return (
    <div className="flex flex-col items-center gap-6 my-8">
      {/* Flechas de navegación */}
      <div className="flex items-center justify-center gap-6">
        {" "}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "#364153",
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
          onClick={onPrev}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Proyecto anterior"
        >
          <ChevronLeft size={24} />
        </motion.button>
        {/* Indicadores de diapositivas */}
        <div className="flex items-center justify-center gap-3">
          {Array.from({ length: projectCount }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => onDotClick(index)}
              className={`w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                currentIndex === index
                  ? "bg-blue-600"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Ir al proyecto ${index + 1}`}
              aria-current={currentIndex === index ? "true" : "false"}
            />
          ))}
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "#364153",
            dark: { backgroundColor: "#374151" },
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
          onClick={onNext}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Proyecto siguiente"
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>
    </div>
  );
};

export default CarouselControls;
