"use client";

import { useCallback } from "react";

/**
 * Hook para manejar la lógica de navegación y scroll suave a cualquier sección
 * desde cualquier página. Si no está en la landing, redirige a la página principal
 * con el hash de la sección. Si ya está en la landing, hace scroll suave a la sección.
 * 
 * @param sectionId - El ID de la sección a la que se quiere navegar (inicio, metodologia, soluciones, etc.)
 */
export function useAgendaDemoScroll(sectionId: string) {
  return useCallback((e?: React.MouseEvent | React.TouchEvent) => {
    if (e) e.preventDefault();
    if (typeof window === "undefined") return;

    // Obtener el basePath de forma dinámica desde la configuración de Next.js
    const basePath = process.env.NODE_ENV === 'production' ? '/landingteamgc' : '';
    
    // Obtener la ruta actual sin el basePath
    const pathname = window.location.pathname.replace(basePath, '');
    const isLanding = pathname === '/' || pathname === '';

    const scrollToSection = () => {
      const headerOffset = 90;
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
      // Si estamos en la landing, hacemos scroll suave
      setTimeout(scrollToSection, 80);
    } else {
      // Si no estamos en la landing, redirigimos a la landing con el hash
      const targetUrl = `${basePath}/#${sectionId}`;
      window.location.href = targetUrl;
    }
  }, [sectionId]);
}
