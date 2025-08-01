import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function getBasePath() {
  return process.env.NODE_ENV === 'production' ? '/landingteamgc' : '';
}

export function getImagePath(path: string) {
  const basePath = getBasePath();
  // Asegurarse de que la ruta comience con '/'
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
