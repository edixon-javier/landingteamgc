"use client";

import Image, { ImageProps } from 'next/image';
import { getImagePath } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
}

export function OptimizedImage({ src, ...props }: OptimizedImageProps) {
  // Normaliza y aplica el prefijo correcto a la ruta de la imagen
  const optimizedSrc = getImagePath(src);
  
  return (
    <Image
      src={optimizedSrc}
      {...props}
    />
  );
}
