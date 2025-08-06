"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface BrowserMockupProps {
  imageUrl: string;
  onClick: () => void;
  alt?: string;
}

/**
 * Componente que muestra una imagen dentro de una maqueta visual de un navegador web
 */
const BrowserMockup: React.FC<BrowserMockupProps> = ({ imageUrl, onClick, alt = "Captura de proyecto" }) => {
  return (    <motion.div 
      className="w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
      transition={{ 
        duration: 0.4, 
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {/* Barra superior del navegador */}
      <div className="flex items-center h-8 bg-gray-200  px-3">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-grow mx-4">
          <div className="w-full max-w-xs mx-auto h-5 bg-gray-100  rounded-full"></div>
        </div>
      </div>
      
      {/* Contenido del navegador (imagen) */}
      <div className="relative w-full h-0 pb-[60%]">
        <Image 
          src={imageUrl}
          alt={alt}
          fill
          className="object-cover"
        />
          {/* Overlay con efecto hover */}
        <motion.div 
          className="absolute   flex items-center justify-center"
          whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          transition={{
            duration: 0.3,
            ease: "easeOut"
          }}
        >
          <motion.span 
            className="text-white text-lg font-medium opacity-0"
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 }
            }}
          >
            View Gallery
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BrowserMockup;
