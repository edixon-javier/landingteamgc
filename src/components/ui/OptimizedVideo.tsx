"use client";

import { getImagePath } from '@/lib/utils';

interface OptimizedVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
}

export function OptimizedVideo({ src, poster, ...props }: OptimizedVideoProps) {
  // Normaliza y aplica el prefijo correcto a las rutas
  const optimizedSrc = getImagePath(src);
  const optimizedPoster = poster ? getImagePath(poster) : undefined;
  
  return (
    <video
      src={optimizedSrc}
      poster={optimizedPoster}
      {...props}
    />
  );
}
