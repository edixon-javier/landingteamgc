/**
 * Define los tipos para los proyectos del portafolio
 */

/**
 * Tipo para representar un proyecto en el portafolio
 */
export type Project = {
  id: string;          // Identificador único del proyecto
  title: string;       // Título del proyecto
  challenge: string;   // Descripción del desafío abordado
  solution: string;    // Descripción de la solución implementada
  tech: string[];      // Tecnologías utilizadas
  liveUrl: string;     // URL del sitio en vivo
  repoUrl: string;     // URL del repositorio de código
  galleryImages: string[]; // URLs de las imágenes para la galería
};

/**
 * Tipo para representar un logo de cliente
 */
export type ClientLogo = {
  name: string;        // Nombre del cliente
  src: string;         // Ruta a la imagen del logo
  width?: number;      // Ancho del logo en píxeles (opcional)
  height?: number;     // Alto del logo en píxeles (opcional)
  yearStart: string | number; // Año de inicio de la relación comercial
  yearEnd?: string | number;  // Año de finalización (opcional, para relaciones finalizadas)
}[];

/**
 * Tipo para representar un paso de la metodología
 */
export type MethodologyStep = {
  id: string;          // Identificador del paso (número o código)
  title: string;       // Título del paso
  description: string; // Descripción del paso
};

/**
 * Tipo para representar una solución ofrecida por la empresa
 */
export type Solution = {
  title: string;       // Título de la solución
  description: string; // Descripción de la solución
  href: string;        // Enlace a la página de detalle de la solución
};

/**
 * Tipo para representar una vista previa de caso de éxito
 */
export type CaseStudyPreview = {
  slug: string;        // Identificador único en la URL
  client: string;      // Nombre del cliente
  title: string;       // Título del proyecto o caso de éxito
  imageUrl: string;    // URL de la imagen de vista previa
  description?: string; // Descripción general del caso de éxito
  challenge?: string;   // Descripción del desafío abordado
  solution?: string;    // Descripción de la solución implementada
  results?: string;     // Resultados obtenidos
  technologies?: string[]; // Tecnologías utilizadas
  year?: string;        // Año del proyecto
  duration?: string;    // Duración del proyecto
  projectUrl?: string;  // URL del proyecto en vivo
};
