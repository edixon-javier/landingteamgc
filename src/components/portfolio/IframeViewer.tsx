"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface IframeViewerProps {
  url: string;
  isActive: boolean;
  onClose: () => void;
}

/**
 * Componente que muestra un sitio web en un iframe desplegable
 */
const IframeViewer: React.FC<IframeViewerProps> = ({
  url,
  isActive,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="w-full bg-gray-100  rounded-lg overflow-hidden mt-4 mb-8"
        >
          <div className="flex justify-between items-center bg-gray-200 p-2 px-4">
            <p className="text-sm font-mono truncate">{url}</p>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-300  focus:outline-none"
              aria-label="Cerrar vista previa"
            >
              <X size={20} />
            </button>
          </div>
          <div className="w-full h-[500px] md:h-[600px]">
            <iframe
              src={url}
              className="w-full h-full border-0"
              title="Vista previa del proyecto en vivo"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms"
            ></iframe>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IframeViewer;
