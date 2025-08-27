"use client";

import React from "react";
import Image, { ImageProps } from "next/image";
import { getImagePath } from "@/lib/utils";
import { motion, Variants } from "framer-motion";

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  useMotion?: boolean;
  variants?: Variants;
  hoverEffect?: "scale" | "zoom" | "none";
  withShadow?: boolean;
}

/**
 * Componente para optimizar imágenes con soporte para animaciones y efectos hover
 */
export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  useMotion = false,
  variants,
  hoverEffect = "none",
  withShadow = false,
  ...props
}: OptimizedImageProps) => {
  // Prepara la clase CSS en función de los parámetros
  let composedClassName = className;
  
  if (hoverEffect === "scale") {
    composedClassName += " transform hover:scale-105 transition-transform duration-300";
  } else if (hoverEffect === "zoom") {
    composedClassName += " transform hover:scale-110 transition-transform duration-500";
  }
  
  if (withShadow) {
    composedClassName += " shadow-xl";
  }

  // Normaliza la ruta de la imagen
  const imagePath = src.startsWith("http") ? src : getImagePath(src);

  // Renderiza con o sin motion
  if (useMotion) {
    return (
      <motion.div variants={variants} className="overflow-hidden">
        <Image
          src={imagePath}
          alt={alt}
          width={width}
          height={height}
          className={composedClassName}
          priority={priority}
          {...props}
        />
      </motion.div>
    );
  }

  return (
    <Image
      src={imagePath}
      alt={alt}
      width={width}
      height={height}
      className={composedClassName}
      priority={priority}
      {...props}
    />
  );
};

export default OptimizedImage;
