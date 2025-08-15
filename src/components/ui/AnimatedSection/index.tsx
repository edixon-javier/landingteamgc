"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode, useEffect } from "react";
import { staggerContainer } from "@/animations/variants";

interface AnimatedSectionProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  threshold?: number;
}

export function AnimatedSection({
  children,
  variants = staggerContainer,
  className = "",
  threshold = 0.1,
}: AnimatedSectionProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
