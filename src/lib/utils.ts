import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Devuelve la ruta base según el entorno
 */
export function getBasePath() {
  return process.env.NODE_ENV === 'production' ? '/landingteamgc' : '';
}

/**
 * Genera una URL completa con el basePath correcto para enlaces internos
 * Usar esta función para todos los enlaces de navegación
 */
export function getLinkPath(path: string) {
  const basePath = getBasePath();
  
  // Normalizar la ruta para asegurar que comienza con /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Construir URL completa con basePath si estamos en producción
  const fullPath = `${basePath}${normalizedPath}`;
  
  // Para depuración en desarrollo
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Original link path: ${path}, Full path: ${fullPath}`);
  }
  
  return fullPath;
}

/**
 * Genera una ruta completa para imágenes estáticas
 */
export function getImagePath(path: string) {
  const basePath = getBasePath();
  
  // Asegurar que la ruta no comience con '/' cuando hay un basePath
  const normalizedPath = path.startsWith('/') 
    ? path.substring(1) 
    : path;
  
  // Verificar si la ruta existe y corregir el nombre de carpeta si es necesario
  let correctedPath = normalizedPath;
  
  // Corregir referencias específicas conocidas que están dando problemas
  if (correctedPath.includes('tanic/')) {
    correctedPath = correctedPath.replace('tanic/', 'tanic/');
  }
  
  // Mantener las mayúsculas/minúsculas originales y solo normalizar los separadores
  const formattedPath = `/${correctedPath}`
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .replace(/\/+/g, '/');
  
  // Asegurar que no haya doble slash entre basePath y la ruta
  // Para evitar duplicación en producción, usamos directamente el formattedPath
  // ya que basePath ya está añadido en next.config.ts
  const finalPath = process.env.NODE_ENV === 'production'
    ? formattedPath  // En producción, solo la ruta normalizada
    : (basePath ? `${basePath}${formattedPath}` : formattedPath);  // En desarrollo
    
  // Para depuración en desarrollo
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Original path: ${path}, Final path: ${finalPath}`);
  }
  
  return finalPath;
}

/**
 * Función específica para recursos de video con las mismas normalizaciones
 */
export function getVideoPath(path: string) {
  const basePath = getBasePath();
  
  // Asegurar que la ruta no comience con '/' cuando hay un basePath
  const normalizedPath = path.startsWith('/') 
    ? path.substring(1) 
    : path;
  
  // Normalizar la ruta y asegurar que comience con /
  const formattedPath = `/${normalizedPath}`
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .replace(/\/+/g, '/');
  
  // En producción, evitamos añadir basePath para prevenir duplicación
  return process.env.NODE_ENV === 'production'
    ? formattedPath
    : `${basePath}${formattedPath}`;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
