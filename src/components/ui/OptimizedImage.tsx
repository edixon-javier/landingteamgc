"use client";

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { getImagePath } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'src' | 'onError'> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  aspectRatio?: string;
  objectPosition?: string;
  containerClassName?: string;
  loadingClassName?: string;
  errorClassName?: string;
}

export function OptimizedImage({
  src,
  alt,
  fallbackSrc = '/images/placeholder.svg',
  aspectRatio = 'aspect-video',
  objectPosition = 'center',
  className,
  containerClassName,
  loadingClassName,
  errorClassName,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(getImagePath(src));

  // Reset estados cuando cambia la fuente
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    setImageSrc(getImagePath(src));
  }, [src]);

  // Manejar el error de carga
  const handleError = () => {
    setHasError(true);
    setImageSrc(getImagePath(fallbackSrc));
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-gray-100',
        aspectRatio,
        containerClassName
      )}
    >
      <Image
        src={imageSrc}
        alt={alt}
        className={cn(
          'object-cover transition-opacity duration-300',
          {
            'opacity-0': isLoading && !hasError,
            'opacity-100': !isLoading && !hasError,
          },
          isLoading && loadingClassName,
          hasError && errorClassName,
          className
        )}
        onLoadingComplete={() => setIsLoading(false)}
        onError={handleError}
        fill
        sizes={props.sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        quality={props.quality || 75}
        priority={props.priority}
        style={{
          objectPosition,
        }}
        {...props}
      />

      {/* Efecto de carga */}
      {isLoading && !hasError && (
        <div
          className={cn(
            'absolute inset-0 bg-gray-200 animate-pulse',
            loadingClassName
          )}
        />
      )}
    </div>
  );
}
