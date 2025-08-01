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
}[];
