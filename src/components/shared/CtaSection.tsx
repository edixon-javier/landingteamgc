"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";
import { AnimatedSection } from "./AnimatedSection";

interface CtaSectionProps {
  title: string;
  description?: string;
  children?: ReactNode;
  bgClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

/**
 * Componente para secciones de llamada a la acción (CTA)
 * Proporciona estructura y animaciones consistentes
 */
export const CtaSection = ({
  title,
  description,
  children,
  bgClassName = "bg-gray-800",
  titleClassName = "text-3xl md:text-4xl font-bold text-white",
  descriptionClassName = "mt-4 text-lg text-gray-300 max-w-3xl mx-auto",
}: CtaSectionProps) => {
  return (
    <section className={bgClassName}>
      <div className="container mx-auto px-6 py-20 text-center">
        <AnimatedSection>
          <motion.h2 variants={fadeIn} className={titleClassName}>
            {title}
          </motion.h2>
          {description && (
            <motion.p variants={fadeIn} className={descriptionClassName}>
              {description}
            </motion.p>
          )}
          {children && <motion.div variants={fadeIn}>{children}</motion.div>}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CtaSection;
