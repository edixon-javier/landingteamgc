/**
 * Define los tipos para los proyectos del portafolio
 */

/**
 * Tipo para representar un proyecto en el portafolio
 */
export type Project = {
  id: string;          // Identificador único del proyecto
  title: string;       // Título del proyecto
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
  yearEnd?: string | number;  // Año de finalización (opcional)
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
 * Tipo para representar un caso de éxito
 */
export type CaseStudy = {
  slug: string;        // Identificador único en la URL
  name: string;        // Nombre del proyecto o caso de éxito
  title: string;       // Título del proyecto o caso de éxito
  subtitle: string;      // Subtítulo del proyecto o caso de éxito
  imageUrl: string;    // URL de la imagen de vista previa
  description: string; // Descripción general del caso de éxito
};
