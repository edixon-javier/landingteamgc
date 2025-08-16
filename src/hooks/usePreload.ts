import { useEffect, useCallback, useRef } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

interface PreloadOptions {
  threshold?: number;
  rootMargin?: string;
  enabled?: boolean;
}

export function usePreload(
  resourceUrls: string[],
  { threshold = 0.1, rootMargin = '50px', enabled = true }: PreloadOptions = {}
) {
  const loadedUrls = useRef(new Set<string>());
  
  const preloadResource = useCallback((url: string) => {
    if (loadedUrls.current.has(url)) return;

    const fileExtension = url.split('.').pop()?.toLowerCase();
    
    if (fileExtension === 'js') {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'script';
      link.href = url;
      document.head.appendChild(link);
    } else if (fileExtension === 'css') {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = url;
      document.head.appendChild(link);
    } else if (['jpg', 'jpeg', 'png', 'webp', 'avif'].includes(fileExtension || '')) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    } else if (['woff', 'woff2', 'ttf'].includes(fileExtension || '')) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.href = url;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }

    loadedUrls.current.add(url);
  }, []);

  const { ref } = useIntersectionObserver({
    onIntersect: useCallback(
      (entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting && enabled) {
          resourceUrls.forEach(preloadResource);
        }
      },
      [enabled, preloadResource, resourceUrls]
    ),
    threshold,
    rootMargin,
  });

  // Limpieza al desmontar
  useEffect(() => {
    return () => {
      loadedUrls.current.clear();
    };
  }, []);

  return { ref };
}
