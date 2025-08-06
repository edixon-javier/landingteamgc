import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function getBasePath() {
  return process.env.NODE_ENV === 'production' ? '/landingteamgc' : '';
}

export function getImagePath(path: string) {
  const basePath = getBasePath();
  
  // Asegurar que la ruta no comience con '/' cuando hay un basePath
  const normalizedPath = path.startsWith('/') 
    ? path.substring(1) 
    : path;
  
  // Normalizar la ruta
  const formattedPath = normalizedPath.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-');
  
  return `${basePath}/${formattedPath}`;
}

/**
 * Función específica para recursos de video con las mismas normalizaciones
 */
export function getVideoPath(path: string) {
  return getImagePath(path);
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
