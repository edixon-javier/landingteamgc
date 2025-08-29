'use client';

import { useEffect, useState, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface DeferLoadProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  fallback?: ReactNode;
  enabled?: boolean;
}

export function DeferLoad({
  children,
  threshold = 0.1,
  rootMargin = '50px',
  fallback,
  enabled = true,
}: DeferLoadProps) {
  const [shouldRender, setShouldRender] = useState(false);

  const [ref, inView] = useInView({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  // Manejo de la intersección
  useEffect(() => {
    if (inView && enabled) {
      setShouldRender(true);
    }
  }, [inView, enabled]);

  // Manejo de SSR
  useEffect(() => {
    if (!enabled) {
      setShouldRender(true);
    }
  }, [enabled]);

  // Si no está habilitado o ya debería renderizarse, mostrar el contenido
  if (!enabled || shouldRender) {
    return <>{children}</>;
  }

  // Si hay un fallback, mostrarlo mientras se carga
  if (fallback) {
    return <div ref={ref}>{fallback}</div>;
  }

  // Si no hay fallback, mostrar un div vacío
  return <div ref={ref} className="min-h-[20px]" />;
}
