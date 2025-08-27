"use client";

import React, { useEffect, ReactNode } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { staggerContainer } from "@/animations/variants";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  variants?: Variants;
  threshold?: number;
  triggerOnce?: boolean;
}

/**
 * Componente reutilizable para animar secciones cuando entran en el viewport
 * Usa Framer Motion y react-intersection-observer para controlar las animaciones
 */
export const AnimatedSection = ({
  children,
  className = "",
  style,
  variants = staggerContainer,
  threshold = 0.1,
  triggerOnce = true,
}: AnimatedSectionProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
