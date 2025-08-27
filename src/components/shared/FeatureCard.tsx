"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
  iconClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
}

/**
 * Componente reutilizable para tarjetas de características o soluciones
 * Incluye ícono, título y contenido con animación fadeIn
 */
export const FeatureCard = ({
  icon,
  title,
  children,
  className = "bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 h-full",
  iconClassName = "flex items-center justify-center h-14 w-14 rounded-lg bg-primary-600 text-white mb-5",
  titleClassName = "text-xl font-bold text-gray-900 mb-2",
  contentClassName = "text-gray-600",
}: FeatureCardProps) => {
  return (
    <motion.div variants={fadeIn} className={className}>
      <div className={iconClassName}>{icon}</div>
      <h3 className={titleClassName}>{title}</h3>
      <p className={contentClassName}>{children}</p>
    </motion.div>
  );
};

export default FeatureCard;
