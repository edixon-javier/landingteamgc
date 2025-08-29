import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { CaseStudy } from '@/types';
import { getLinkPath } from '@/lib/utils';

interface MobileDropdownProps {
  isOpen: boolean;
  projects: CaseStudy[];
  onToggle: () => void;
  activeSection: string;
}

const menuItemVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { 
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.3,
      staggerChildren: 0.05
    }
  }
};

export function MobileDropdown({
  isOpen,
  projects,
  onToggle,
  activeSection
}: MobileDropdownProps) {
  const getProjectRoute = (slug: string) => {
    let path;
    switch (slug) {
      case 'suvey_cibersegurity':
        path = '/casos-de-exito/cyber-security-landing';
        break;
      case 'dultos-consultans-platform':
        path = '/casos-de-exito/crm-insurance-landing';
        break;
      case 'prh-content-management':
        path = '/casos-de-exito/prh-landing';
        break;
      case 'legrand-digital-transformation':
        path = '/casos-de-exito/legrand-landing';
        break;
      case 'nazca-restaurant-management':
        path = '/casos-de-exito/restaurant-landing';
        break;
      case 'qr-event-management':
        path = '/casos-de-exito/qr-event-landing';
        break;
      case 'showroom-wiz':
        path = '/casos-de-exito-thinking/ShowroomWizPage';
        break;
      case 'librero-toysmart':
        path = '/casos-de-exito-thinking/LibreroToysmartPage';
        break;
      case 'stand-tannic':
        path = '/casos-de-exito-thinking/StandTannicPage';
        break;
      case 'punto-experiencia-wiz':
        path = '/casos-de-exito-thinking/PuntoExperienciaWizPage';
        break;
      case 'columna-philips-exito':
        path = '/casos-de-exito-thinking/ColumnaPhilipsPage';
        break;
      case 'filbo-exito':
        path = '/casos-de-exito-thinking/FilboExitoPage';
        break;
      default:
        path = `/casos-de-exito/${slug}`;
    }
    return getLinkPath(path);
  };

  return (
    <div className="pl-4">
      <button
        onClick={onToggle}
        className="flex items-center w-full py-2 text-left"
      >
        <ChevronDown
          className={`w-5 h-5 mr-2 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
        <span className={`text-lg font-semibold ${
          activeSection === 'casos-de-exito' ? 'text-blue-600' : 'text-gray-700'
        }`}>
          Ver proyectos
        </span>
      </button>

      <motion.div
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={menuItemVariants}
        className="overflow-hidden"
      >
        <ul className="pl-7 space-y-2 py-2">
          {projects.map((project) => (
            <motion.li
              key={project.slug}
              variants={menuItemVariants}
            >
              <Link
                href={getProjectRoute(project.slug)}
                className="block py-1 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                {project.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
