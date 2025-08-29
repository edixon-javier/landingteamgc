"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { getImagePath } from '@/lib/utils';
import { useAgendaDemoScroll } from '@/hooks/useAgendaDemoScroll';
import { caseStudiesData, caseStudiesDataThinking  } from '@/lib/content';
import { DropdownMenu } from './DropdownMenu';
import { MobileDropdown } from './MobileDropdown';

type NavSection = 'inicio' | 'metodologia' | 'soluciones' | 'casos-de-exito' | 'casos-de-exito-design-thinking' | 'contacto';

interface NavLink {
  name: string;
  id: NavSection;
  hasDropdown?: boolean;
}

const navLinks: NavLink[] = [
  { name: 'Inicio', id: 'inicio' },
  { name: 'Servicios', id: 'soluciones' },
  { name: 'Metodología', id: 'metodologia' },
  { name: 'Desarrollo y Tecnología', id: 'casos-de-exito', hasDropdown: true },
  { name: 'Estrategia y Design Thinking', id: 'casos-de-exito-design-thinking', hasDropdown: true },
  { name: 'Contacto', id: 'contacto' }
];

// Variantes de animación optimizadas
const headerVariants: Variants = {
  transparent: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    backdropFilter: 'blur(0px)',
    boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
    transition: { 
      duration: 0.4, 
      ease: "easeInOut"
    }
  },
  solid: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(16px)',
    boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
    transition: { 
      duration: 0.4, 
      ease: "easeInOut"
    }
  }
};

const navItemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: -16,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.1,
      ease: "easeOut"
    }
  }
};

const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    x: '100%',
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  },
  open: {
    opacity: 1,
    x: '0%',
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const mobileItemVariants: Variants = {
  closed: { 
    opacity: 0, 
    x: 30, 
    scale: 0.9 
  },
  open: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export function Header() {
  // Estados principales
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<NavSection>('inicio');
  const [openDropdownId, setOpenDropdownId] = useState<NavSection | null>(null);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState<{ [key: string]: boolean }>({});
  // Refs para manejo de foco y timeouts
  const dropdownTriggerRef = useRef<HTMLAnchorElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Funciones de scroll
  const scrollToInicio = useAgendaDemoScroll('inicio');
  const scrollToMetodologia = useAgendaDemoScroll('metodologia');
  const scrollToSoluciones = useAgendaDemoScroll('soluciones');
  const scrollToCasosExito = useAgendaDemoScroll('casos-de-exito');
  const scrollToCasosExitoDesignThinking = useAgendaDemoScroll('casos-de-exito-design-thinking');
  const scrollToContacto = useAgendaDemoScroll('contacto');

  const scrollFunctions = useMemo(() => ({
    'inicio': scrollToInicio,
    'metodologia': scrollToMetodologia,
    'soluciones': scrollToSoluciones,
    'casos-de-exito': scrollToCasosExito,
    'casos-de-exito-design-thinking': scrollToCasosExitoDesignThinking,
    'contacto': scrollToContacto
  }), [scrollToInicio, scrollToMetodologia, scrollToSoluciones, scrollToCasosExito, scrollToCasosExitoDesignThinking, scrollToContacto]);

  // Manejo del dropdown con timeout mejorado
  const handleDropdownEnter = useCallback((id: NavSection) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdownId(id);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdownId(null);
    }, 150);
  }, []);

  const closeDropdown = useCallback(() => {
    setOpenDropdownId(null);
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  }, []);

  // Manejo del menú móvil
  const toggleMobileMenu = useCallback(() => {
    setIsMenuOpen(prev => {
      const newState = !prev;
      if (!newState) {
        setIsMobileDropdownOpen({});
        setTimeout(() => mobileMenuButtonRef.current?.focus(), 200);
      }
      return newState;
    });
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMenuOpen(false);
    setIsMobileDropdownOpen({});
    setTimeout(() => mobileMenuButtonRef.current?.focus(), 200);
  }, []);

  const toggleMobileDropdown = useCallback((id: NavSection) => {
    setIsMobileDropdownOpen(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  }, []);

  // Optimized scroll handler
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (ticking) return;
      
      ticking = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const shouldBeScrolled = scrollY > 20;
        
        if (shouldBeScrolled !== isScrolled) {
          setIsScrolled(shouldBeScrolled);
        }
        
        // Optimized scroll spy
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        
        scrollTimeoutRef.current = setTimeout(() => {
          const viewportCenter = scrollY + (window.innerHeight / 2);
          let closestSection: NavSection | null = null;
          let closestDistance = Infinity;
          
          navLinks.forEach(link => {
            const element = document.getElementById(link.id);
            if (element) {
              const rect = element.getBoundingClientRect();
              const elementTop = rect.top + scrollY;
              const elementCenter = elementTop + (rect.height / 2);
              const distance = Math.abs(elementCenter - viewportCenter);
              
              if (distance < closestDistance) {
                closestDistance = distance;
                closestSection = link.id;
              }
            }
          });
          
          if (closestSection && closestSection !== activeSection) {
            setActiveSection(closestSection);
          }
        }, 100);
        
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [isScrolled, activeSection]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (openDropdownId) {
          closeDropdown();
          dropdownTriggerRef.current?.focus();
        } else if (isMenuOpen) {
          closeMobileMenu();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [openDropdownId, isMenuOpen, closeDropdown, closeMobileMenu]);

  // Body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = 'var(--scrollbar-width, 0px)';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: NavSection) => {
    e.preventDefault();
    const scrollFn = scrollFunctions[sectionId];
    if (scrollFn) {
      scrollFn(e);
      closeMobileMenu();
      closeDropdown();
    }
  }, [scrollFunctions, closeMobileMenu, closeDropdown]);

  // Improved styling functions with modern design
  const getNavLinkStyles = useCallback((linkId: NavSection, isActive: boolean) => {
    const baseStyles = `
      relative flex items-center px-4 py-2 text-sm font-semibold rounded-xl
      transition-all duration-300 ease-out group
      focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2
    `;
    
    if (isScrolled) {
      return `${baseStyles} ${
        isActive 
          ? 'text-blue-600 bg-blue-50 shadow-sm' 
          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 hover:shadow-sm'
      }`;
    } else {
      return `${baseStyles} ${
        isActive 
          ? 'text-blue-300 bg-white/10 shadow-lg backdrop-blur-sm' 
          : 'text-white/90 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-lg'
      }`;
    }
  }, [isScrolled]);

  const getLogoFilter = useCallback(() => {
    return isScrolled ? 'filter-none' : 'brightness-0 invert drop-shadow-sm';
  }, [isScrolled]);

  const getHeaderBorder = useCallback(() => {
    return isScrolled 
      ? 'border-b border-gray-200/50' 
      : 'border-b border-transparent';
  }, [isScrolled]);

  return (
    <>
      <motion.header
        variants={headerVariants}
        animate={isScrolled ? 'solid' : 'transparent'}
        className={`fixed top-0 left-0 w-full z-50 ${getHeaderBorder()}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 rounded-xl p-1 -m-1"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Image
                  className={`h-10 w-auto transition-all duration-500 ease-out ${getLogoFilter()}`}
                  src={getImagePath("/images/logogc.svg")}
                  alt="Equipo GC - Desarrollo de Software"
                  width={120}
                  height={40}
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:items-center md:space-x-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                  className="relative"
                  onMouseEnter={link.hasDropdown ? () => handleDropdownEnter(link.id) : undefined}
                  onMouseLeave={link.hasDropdown ? handleDropdownLeave : undefined}
                >
                  <Link
                    ref={link.hasDropdown ? dropdownTriggerRef : undefined}
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={getNavLinkStyles(link.id, activeSection === link.id)}
                    aria-expanded={link.hasDropdown ? openDropdownId === link.id : undefined}
                    aria-haspopup={link.hasDropdown ? "menu" : undefined}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && (
                      <ChevronDown 
                        className={`ml-1 h-4 w-4 transition-all duration-300 ${
                          openDropdownId === link.id ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
                        } group-hover:scale-110`}
                        aria-hidden="true"
                      />
                    )}
                    
                  </Link>
                  
                  {link.hasDropdown && (
                    <DropdownMenu
                      isOpen={openDropdownId === link.id}
                      projects={link.id === 'casos-de-exito' ? caseStudiesData : caseStudiesDataThinking}
                      isScrolled={isScrolled}
                      onMouseEnter={() => handleDropdownEnter(link.id)}
                      onMouseLeave={handleDropdownLeave}
                      onClose={closeDropdown}
                      triggerRef={dropdownTriggerRef}
                    />
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                ref={mobileMenuButtonRef}
                onClick={toggleMobileMenu}
                className={`
                  p-2 rounded-xl transition-all duration-300 ease-out
                  focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2
                  ${isScrolled 
                    ? 'hover:bg-gray-100 active:bg-gray-200 active:scale-95' 
                    : 'hover:bg-white/10 active:bg-white/20 active:scale-95 backdrop-blur-sm'
                  }
                `}
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isMenuOpen ? "close" : "menu"}
                    initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    {isMenuOpen ? (
                      <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
                    ) : (
                      <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="md:hidden fixed top-0 right-0 w-80 max-w-[85vw] h-full bg-white shadow-2xl z-50 overflow-y-auto"
          >
            <div className="px-6 py-8">
              {/* Mobile Menu Header */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex justify-between items-center mb-8 pb-6 border-b border-gray-200"
              >
                <Image 
                  src={getImagePath("/images/logogc.svg")} 
                  alt="Equipo GC Logo" 
                  width={120} 
                  height={40} 
                  className="h-10 w-auto" 
                />
                <button 
                  onClick={closeMobileMenu}
                  className="p-2 rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors duration-200"
                  aria-label="Cerrar menú"
                >
                  <X className="h-6 w-6 text-gray-800" />
                </button>
              </motion.div>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {navLinks.map(link => (
                  <motion.div 
                    key={link.name}
                    variants={mobileItemVariants}
                    className="relative"
                  >
                    <Link
                      href={`#${link.id}`}
                      className={`
                        block px-4 py-4 text-lg font-semibold rounded-xl transition-all duration-300
                        focus:outline-none focus:ring-2 focus:ring-blue-500/50
                        ${activeSection === link.id
                          ? 'text-blue-600 bg-blue-50 shadow-sm border-l-4 border-blue-600' 
                          : 'text-gray-800 hover:text-blue-600 hover:bg-gray-50 hover:shadow-sm hover:translate-x-1'
                        }
                      `}
                      onClick={(e) => handleNavClick(e, link.id)}
                    >
                      <div className="flex items-center justify-between">
                        <span>{link.name}</span>
                        {activeSection === link.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-blue-600 rounded-full"
                          />
                        )}
                      </div>
                    </Link>
                    
                    {link.hasDropdown && (
                      <MobileDropdown
                        isOpen={!!isMobileDropdownOpen[link.id]}
                        projects={link.id === 'casos-de-exito' ? caseStudiesData : caseStudiesDataThinking}
                        onToggle={() => toggleMobileDropdown(link.id)}
                        activeSection={activeSection}
                      />
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Menu Footer */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-8 border-t border-gray-200"
              >
                <p className="text-sm text-gray-500 text-center leading-relaxed">
                  Desarrollamos soluciones tecnológicas innovadoras para impulsar tu negocio
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}