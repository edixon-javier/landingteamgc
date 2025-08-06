"use client";

import Image, { ImageProps } from 'next/image';
import { getImagePath } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string; // Hacemos que alt sea obligatorio
}

export function OptimizedImage({ src, ...props }: OptimizedImageProps) {
  // Normaliza y aplica el prefijo correcto a la ruta de la imagen
  const optimizedSrc = getImagePath(src);
  
  const { alt, ...restProps } = props;
  return (
    <Image
      src={optimizedSrc}
      alt={alt}
      {...restProps}
    />
  );
}
