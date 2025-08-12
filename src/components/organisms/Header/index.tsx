"use client";

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { getImagePath } from '@/lib/utils';
import { useAgendaDemoScroll } from '@/hooks/useAgendaDemoScroll';

type NavSection = 'inicio' | 'metodologia' | 'soluciones' | 'casos-de-exito' | 'contacto';

interface NavLink {
  name: string;
  id: NavSection;
}

const navLinks: NavLink[] = [
  { name: 'Inicio', id: 'inicio' },
  { name: 'Metodología', id: 'metodologia' },
  { name: 'Soluciones', id: 'soluciones' },
  { name: 'Casos de Éxito', id: 'casos-de-exito' },
  { name: 'Contacto', id: 'contacto' }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<NavSection>('inicio');

  // Crear instancias de los hooks de scroll para cada sección
  const scrollToInicio = useAgendaDemoScroll('inicio');
  const scrollToMetodologia = useAgendaDemoScroll('metodologia');
  const scrollToSoluciones = useAgendaDemoScroll('soluciones');
  const scrollToCasosExito = useAgendaDemoScroll('casos-de-exito');
  const scrollToContacto = useAgendaDemoScroll('contacto');

  // Mapear las secciones a sus funciones de scroll usando useMemo
  const scrollFunctions = useMemo(() => ({
    'inicio': scrollToInicio,
    'metodologia': scrollToMetodologia,
    'soluciones': scrollToSoluciones,
    'casos-de-exito': scrollToCasosExito,
    'contacto': scrollToContacto
  }), [scrollToInicio, scrollToMetodologia, scrollToSoluciones, scrollToCasosExito, scrollToContacto]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Scroll Spy
      const current = navLinks.find(link => {
        const element = document.getElementById(link.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: NavSection) => {
    e.preventDefault();
    const scrollFn = scrollFunctions[sectionId];
    if (scrollFn) {
      scrollFn(e);
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                className={`h-10 w-auto transition-all duration-300 ${isScrolled? 'filter-none' : 'brightness-0 invert'}`}
                src={getImagePath("/images/logogc.svg")}
                alt="Equipo GC Logo"
                width={120}
                height={40}
                priority
              />
            </motion.div>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex md:space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-sm font-semibold transition-colors duration-300 ${
                    isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-white/80'
                  } ${activeSection === link.id ? 'text-blue-600' : ''}`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Botón Menú Móvil */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
            >
              <Menu className={`h-6 w-6 ${isScrolled? 'text-gray-800' : 'text-white'}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Panel Menú Móvil */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-50"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-8">
              <Image 
                src={getImagePath("/images/logogc.svg")} 
                alt="Equipo GC Logo" 
                width={120} 
                height={40} 
                className="h-10 w-auto" 
              />
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
              >
                <X className="h-6 w-6 text-gray-800" />
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={`#${link.id}`}
                  className={`text-xl font-semibold transition-colors duration-200 ${
                    activeSection === link.id
                    ? 'text-blue-600' 
                    : 'text-gray-800 hover:text-blue-600'
                  }`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
}
