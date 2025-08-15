'use client';

import { useEffect, useCallback, useRef } from 'react';
import { useUI } from '@/contexts/UIContext';

interface UseNavigationOptions {
  threshold?: number;
  offset?: number;
}

export function useNavigation(options: UseNavigationOptions = {}) {
  const { threshold = 0.2, offset = 80 } = options;
  const { state: { isHeaderVisible }, toggleHeader, setActiveSection } = useUI();
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        
        // Control de visibilidad del header
        if (currentScrollY > lastScrollY.current && currentScrollY > offset) {
          // Scrolling down
          if (isHeaderVisible) {
            toggleHeader(false);
          }
        } else {
          // Scrolling up
          if (!isHeaderVisible) {
            toggleHeader(true);
          }
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });

      ticking.current = true;
    }
  }, [isHeaderVisible, offset, toggleHeader]);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const top = section.offsetTop - offset;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  }, [offset]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold,
        rootMargin: `-${offset}px 0px 0px 0px`
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      sections.forEach(section => observer.unobserve(section));
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, offset, setActiveSection, threshold]);

  return {
    scrollToSection,
    isHeaderVisible
  };
}
