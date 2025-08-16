'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { usePreload } from '@/hooks/usePreload';

interface BlurredImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  preloadSizes?: string[];
  priority?: boolean;
  quality?: number;
}

export function BlurredImage({
  src,
  alt,
  width,
  height,
  className,
  preloadSizes = ['640w', '750w', '828w', '1080w', '1200w', '1920w', '2048w', '3840w'],
  priority = false,
  quality = 75,
}: BlurredImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  
  // Generar URLs para diferentes tamaños
  const imageSizes = preloadSizes.map(size => {
    const sizeNum = parseInt(size);
    return `${src}?w=${sizeNum}&q=${quality}`;
  });

  // Precargar imágenes cuando el componente está cerca del viewport
  const { ref } = usePreload(imageSizes, {
    enabled: !priority, // No precargar si la imagen es prioritaria
    rootMargin: '50%', // Comenzar a precargar cuando la imagen está a 50% del viewport
  });

  // Restablecer el estado de carga cuando cambia la fuente
  useEffect(() => {
    setIsLoading(true);
  }, [src]);

  return (
    <div
      ref={ref}
      className={cn(
        'overflow-hidden relative',
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        priority={priority}
        className={cn(
          'duration-700 ease-in-out',
          isLoading ? 'scale-110 blur-2xl' : 'scale-100 blur-0'
        )}
        onLoadingComplete={() => setIsLoading(false)}
        sizes={preloadSizes.join(', ')}
      />
      
      {isLoading && (
        <div className="absolute inset-0 backdrop-blur-md bg-gray-200/30 animate-pulse" />
      )}
    </div>
  );
}
