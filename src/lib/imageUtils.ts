interface ImageConfig {
  basePath: string;
  formats: string[];
  defaultFormat: string;
  quality: number;
}

const imageConfig: ImageConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  formats: ['webp', 'avif', 'png', 'jpg', 'jpeg'],
  defaultFormat: 'webp',
  quality: 75,
};

export function getOptimizedImagePath(path: string, format?: string): string {
  // Si la ruta es una URL externa, devuélvela sin cambios
  if (path.startsWith('http')) {
    return path;
  }

  // Elimina la barra inicial si existe
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;

  // Si se especifica un formato, intenta convertir la imagen a ese formato
  if (format && imageConfig.formats.includes(format)) {
    const pathWithoutExt = normalizedPath.replace(/\.[^/.]+$/, '');
    return `${imageConfig.basePath}/${pathWithoutExt}.${format}`;
  }

  // Si no se especifica formato, mantén el formato original
  return `${imageConfig.basePath}/${normalizedPath}`;
}

export function getSrcSet(path: string): string {
  const pathWithoutExt = path.replace(/\.[^/.]+$/, '');
  
  return imageConfig.formats
    .map(format => `${getOptimizedImagePath(pathWithoutExt, format)} 1x`)
    .join(', ');
}

export function getImageDimensions(src: string): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
    };
    img.onerror = reject;
    img.src = src;
  });
}

export async function preloadImage(src: string): Promise<void> {
  try {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = getOptimizedImagePath(src);
    document.head.appendChild(link);
  } catch (error) {
    console.warn('Error preloading image:', error);
  }
}

export function getAspectRatio(width: number, height: number): string {
  return `aspect-[${width}/${height}]`;
}

// Configuración de breakpoints para responsive images
export const imageBreakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

// Generar el atributo sizes basado en los breakpoints
export function generateSizes(config: {
  mobile?: string;
  tablet?: string;
  desktop?: string;
  default: string;
}): string {
  return Object.entries(imageBreakpoints)
    .reverse()
    .reduce((acc, [breakpoint, width]) => {
      if (breakpoint === '2xl' && config.desktop) {
        return `(min-width: ${width}px) ${config.desktop}, ${acc}`;
      }
      if (breakpoint === 'md' && config.tablet) {
        return `(min-width: ${width}px) ${config.tablet}, ${acc}`;
      }
      if (breakpoint === 'sm' && config.mobile) {
        return `(min-width: ${width}px) ${config.mobile}, ${acc}`;
      }
      return acc;
    }, config.default);
}
