"use client";

import { useCallback } from "react";

/**
 * Hook para manejar la lógica de navegación y scroll suave a cualquier sección
 * desde cualquier página. Si no está en la landing, redirige a /#sectionId.
 * Si ya está en la landing, hace scroll suave a la sección.
 * @param sectionId - El ID de la sección a la que se quiere navegar (inicio, metodologia, soluciones, etc.)
 */
export function useAgendaDemoScroll(sectionId: string) {
  return useCallback((e?: React.MouseEvent | React.TouchEvent) => {
    if (e) e.preventDefault();
    if (typeof window === "undefined") return;
    const pathname = window.location.pathname;
    const isLanding = pathname === "/";
    const scrollToSection = () => {
      const headerOffset = 90; // un poco más de espacio
      const element = document.getElementById(sectionId);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };
    if (isLanding) {
      // Espera un poco para asegurar que el DOM esté listo
      setTimeout(scrollToSection, 80);
    } else {
      window.location.href = `/#${sectionId}`;
    }
  }, [sectionId]);
}
