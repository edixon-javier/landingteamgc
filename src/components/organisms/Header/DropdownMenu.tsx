import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';
import { CaseStudy } from '@/types';

interface DropdownMenuProps {
  isOpen: boolean;
  projects: CaseStudy[];
  isScrolled: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClose?: () => void;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

// Variantes de animación mejoradas
const menuVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -8,
    scale: 0.96,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.04,
      delayChildren: 0.05
    }
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.96,
    transition: {
      duration: 0.15,
      ease: "easeInOut"
    }
  }
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: -4,
    x: -2
  },
  visible: { 
    opacity: 1, 
    y: 0,
    x: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

// Estilos de tema mejorados
const getThemeStyles = (isScrolled: boolean) => {
  if (isScrolled) {
    return {
      container: 'bg-white border-gray-200 shadow-xl',
      item: {
        base: 'text-gray-700',
        hover: 'hover:bg-blue-50 hover:text-blue-700',
        active: 'active:bg-blue-100',
        focus: 'focus:bg-blue-50 focus:text-blue-700 focus:ring-blue-500'
      },
      separator: 'border-gray-100'
    };
  } else {
    return {
      container: 'bg-gray-900/95 backdrop-blur-md border-gray-700/30 shadow-2xl',
      item: {
        base: 'text-gray-200',
        hover: 'hover:bg-gray-700/60 hover:text-white',
        active: 'active:bg-gray-600/60',
        focus: 'focus:bg-gray-700/60 focus:text-white focus:ring-blue-400'
      },
      separator: 'border-gray-700/30'
    };
  }
};

export function DropdownMenu({ 
  isOpen, 
  projects, 
  isScrolled,
  onMouseEnter,
  onMouseLeave,
  onClose,
  triggerRef
}: DropdownMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);
  
  const themeStyles = getThemeStyles(isScrolled);
  
  // Mapeo de rutas mejorado con validación
  const getProjectRoute = useCallback((slug: string): string => {
    const routeMap: Record<string, string> = {
      'suvey_cibersegurity': '/casos-de-exito/cyber-security-landing',
      'dultos-consultans-platform': '/casos-de-exito/crm-insurance-landing',
      'prh-content-management': '/casos-de-exito/prh-landing',
      'legrand-digital-transformation': '/casos-de-exito/legrand-landing',
      'nazca-restaurant-management': '/casos-de-exito/restaurant-landing',
      'qr-event-management': '/casos-de-exito/qr-event-landing',
      'showroom-wiz': '/casos-de-exito-thinking/ShowroomWizPage',
      'librero-toysmart': '/casos-de-exito-thinking/LibreroToysmartPage',
      'stand-tannic': '/casos-de-exito-thinking/StandTannicPage',
      'punto-experiencia-wiz': '/casos-de-exito-thinking/PuntoExperienciaWizPage',
      'columna-philips-exito': '/casos-de-exito-thinking/ColumnaPhilipsPage',
      'filbo-exito': '/casos-de-exito-thinking/FilboExitoPage',
    };
    
    return routeMap[slug] || `/casos-de-exito/${slug}`  ;
  }, []);

  // Manejo de navegación por teclado
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!isOpen) return;

    setIsKeyboardNavigation(true);

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        onClose?.();
        triggerRef?.current?.focus();
        break;
        
      case 'ArrowDown':
        event.preventDefault();
        setFocusedIndex(prev => 
          prev < projects.length - 1 ? prev + 1 : 0
        );
        break;
        
      case 'ArrowUp':
        event.preventDefault();
        setFocusedIndex(prev => 
          prev > 0 ? prev - 1 : projects.length - 1
        );
        break;
        
      case 'Home':
        event.preventDefault();
        setFocusedIndex(0);
        break;
        
      case 'End':
        event.preventDefault();
        setFocusedIndex(projects.length - 1);
        break;
        
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (focusedIndex >= 0) {
          const link = menuRef.current?.querySelector(
            `[data-index="${focusedIndex}"] a`
          ) as HTMLAnchorElement;
          link?.click();
        }
        break;
    }
  }, [isOpen, focusedIndex, projects.length, onClose, triggerRef]);

  // Manejo del mouse
  const handleMouseMove = useCallback(() => {
    if (isKeyboardNavigation) {
      setIsKeyboardNavigation(false);
      setFocusedIndex(-1);
    }
  }, [isKeyboardNavigation]);

  // Event listeners
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  // Reset focused index when opening
  useEffect(() => {
    if (isOpen) {
      setFocusedIndex(-1);
      setIsKeyboardNavigation(false);
    }
  }, [isOpen]);

  // Focus management
  useEffect(() => {
    if (isKeyboardNavigation && focusedIndex >= 0) {
      const focusedElement = menuRef.current?.querySelector(
        `[data-index="${focusedIndex}"] a`
      ) as HTMLAnchorElement;
      focusedElement?.focus();
    }
  }, [focusedIndex, isKeyboardNavigation]);

  if (!isOpen) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={menuRef}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={menuVariants}
        className={`
          absolute left-1/2 -translate-x-1/2 mt-3 py-2 w-80 rounded-xl
          ${themeStyles.container}
          border z-50 transform-gpu will-change-transform
        `}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseMove={handleMouseMove}
        role="menu"
        aria-label="Menú de casos de éxito"
        aria-orientation="vertical"
      >
        {/* Indicador visual del menú */}
        <div 
          className={`absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 
            ${isScrolled ? 'bg-white border-l border-t border-gray-200' : 'bg-gray-900/95 border-l border-t border-gray-700/30'}
          `} 
        />
        
        <div className="relative">
          {/* Lista de proyectos */}
          <ul className="py-2" role="none">
            {projects.map((project, index) => (
              <motion.li 
                key={project.slug}
                variants={itemVariants}
                role="none"
                data-index={index}
                className={`
                  ${focusedIndex === index && isKeyboardNavigation ? 'ring-2 ring-inset ' + (isScrolled ? 'ring-blue-500' : 'ring-blue-400') : ''}
                `}
              >
                <Link
                  href={getProjectRoute(project.slug)}
                  className={`
                    group relative flex items-center px-4 py-3 text-sm font-medium
                    transition-all duration-200 ease-out
                    ${themeStyles.item.base}
                    ${themeStyles.item.hover}
                    ${themeStyles.item.active}
                    focus:outline-none focus:ring-2 focus:ring-inset
                    ${themeStyles.item.focus}
                    rounded-none first:rounded-t-lg last:rounded-b-lg
                  `}
                  role="menuitem"
                  tabIndex={isKeyboardNavigation && focusedIndex === index ? 0 : -1}
                  onMouseEnter={() => !isKeyboardNavigation && setFocusedIndex(index)}
                  onFocus={() => setFocusedIndex(index)}
                >
                  {/* Indicador de hover/focus */}
                  <div 
                    className={`
                      absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full
                      transition-all duration-200 ease-out
                      ${isScrolled ? 'bg-blue-500' : 'bg-blue-400'}
                      ${focusedIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
                    `} 
                  />
                  
                  {/* Contenido del proyecto */}
                  <div className="flex-1 min-w-0 ml-2">
                    <div className="flex items-center justify-between">
                      <span className="truncate pr-2">
                        {project.name}
                      </span>
                      
                      {/* Icono de flecha */}
                      <svg 
                        className={`
                          w-4 h-4 transition-transform duration-200 ease-out
                          ${focusedIndex === index ? 'translate-x-1' : 'translate-x-0'}
                          ${themeStyles.item.base} opacity-60 group-hover:opacity-100
                        `}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    
                    {/* Descripción opcional si está disponible */}
                    {project.description && (
                      <p className={`text-xs ${themeStyles.item.base} opacity-60 mt-1 truncate`}>
                        {project.description}
                      </p>
                    )}
                  </div>
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Footer informativo */}
          <div className={`px-4 py-2 border-t ${themeStyles.separator}`}>
            <p className={`text-xs ${themeStyles.item.base} opacity-60 text-center`}>
              Usa ↑↓ para navegar • Enter para seleccionar • Esc para cerrar
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}