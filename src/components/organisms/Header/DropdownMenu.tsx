import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { CaseStudyPreview } from '@/types';

interface DropdownMenuProps {
  isOpen: boolean;
  projects: CaseStudyPreview[];
  isScrolled: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -5,
    transition: {
      duration: 0.2
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0 }
};

const focusStyles = `
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
  focus:bg-blue-50 dark:focus:bg-blue-900
`;

export function DropdownMenu({ 
  isOpen, 
  projects, 
  isScrolled,
  onMouseEnter,
  onMouseLeave 
}: DropdownMenuProps) {
  const getProjectRoute = (slug: string) => {
    switch (slug) {
      case 'suvey_cibersegurity':
        return '/casos-de-exito/CyberSecurityLanding';
      case 'dultos-consultans-platform':
        return '/casos-de-exito/crm-insurance-landing';
      case 'prh-content-management':
        return '/casos-de-exito/PrhLanding';
      case 'legrand-digital-transformation':
        return '/casos-de-exito/LegrandLanding';
      case 'nazca-restaurant-management':
        return '/casos-de-exito/RestaurantLanding';
      case 'qr-event-management':
        return '/casos-de-exito/QrEventLanding';
      default:
        return `/casos-de-exito/${slug}`;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
          className={`absolute left-1/2 -translate-x-1/2 mt-2 py-2 w-72 rounded-lg shadow-lg
            ${isScrolled ? 'bg-white' : 'bg-gray-900/90 backdrop-blur-sm'}
            border border-gray-200/20 transform-gpu`}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          aria-label="Menú de casos de éxito"
          role="menu"
        >
          <ul className="py-1" role="none">
            {projects.map((project) => (
              <motion.li 
                key={project.slug}
                variants={itemVariants}
                role="menuitem"
              >
                <Link
                  href={getProjectRoute(project.slug)}
                  className={`block px-4 py-2 text-sm transition-colors duration-200
                    ${isScrolled 
                      ? 'text-gray-700 hover:bg-gray-100 hover:text-gray-600' 
                      : 'text-gray-200 hover:bg-gray-800/50 hover:text-white'}
                    ${focusStyles}`}
                >
                  {project.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
