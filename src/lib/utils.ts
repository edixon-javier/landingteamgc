import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Devuelve la ruta base - para dominio personalizado siempre vacía
 */
export function getBasePath() {
  return '';
}

/**
 * Genera una URL para enlaces internos - limpia referencias a landingteamgc
 */
export function getLinkPath(path: string) {
  // Limpiar cualquier basePath existente (landingteamgc)
  const cleanPath = path.replace('/landingteamgc', '');
  
  // Normalizar la ruta
  const normalizedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
  
  // Asegurar que no hay dobles barras
  return normalizedPath.replace(/\/+/g, '/');
}

/**
 * Genera una ruta para imágenes - limpia referencias a landingteamgc
 */
export function getImagePath(path: string) {
  // Limpiar cualquier basePath existente (landingteamgc)
  const cleanPath = path.replace('/landingteamgc', '');
  
  // Normalizar la ruta
  const normalizedPath = cleanPath.startsWith('/') 
    ? cleanPath 
    : `/${cleanPath}`;
  
  // Limpiar espacios y barras dobles
  const formattedPath = normalizedPath
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .replace(/\/+/g, '/');
  
  return formattedPath;
}

/**
 * Función para recursos de video - limpia referencias a landingteamgc
 */
export function getVideoPath(path: string) {
  return getImagePath(path);
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}