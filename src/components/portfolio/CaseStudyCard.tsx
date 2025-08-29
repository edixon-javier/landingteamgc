'use client';

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

// Función de mapeo de slug a ruta
const getComponentRoute = (slug: string) => {
  switch (slug) {
    case 'suvey_cibersegurity':
      return '/casos-de-exito/cyber-security-landing';
    case 'dultos-consultans-platform':
      return '/casos-de-exito/crm-insurance-landing';
    case 'prh-content-management':
      return '/casos-de-exito/prh-landing';
    case 'legrand-digital-transformation':
      return '/casos-de-exito/legrand-landing';
    case 'nazca-restaurant-management':
      return '/casos-de-exito/restaurant-landing';
    case 'qr-event-management':
      return '/casos-de-exito/qr-event-landing';
      case 'showroom-wiz':
        return '/casos-de-exito-thinking/ShowroomWizPage';
      case 'librero-toysmart':
        return '/casos-de-exito-thinking/LibreroToysmartPage';
      case 'stand-tannic':
        return '/casos-de-exito-thinking/StandTannicPage';
      case 'punto-experiencia-wiz':
        return '/casos-de-exito-thinking/PuntoExperienciaWizPage';
      case 'columna-philips-exito':
        return '/casos-de-exito-thinking/ColumnaPhilipsPage';
      case 'filbo-exito':
        return '/casos-de-exito-thinking/FilboExitoPage';
    default:
      return `/casos-de-exito/${slug}`;
  }
};

interface CaseStudyCardProps {
  caseStudy: {
    slug: string;
    name: string;
    title: string;
    subtitle: string;
    imageUrl: string;
    description: string;
    technologies?: string[];
    projectUrl?: string;
  };
  isReversed?: boolean;
  priority?: boolean;
}

export function CaseStudyCard({ caseStudy, isReversed = false, priority = false }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col ${
        isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } gap-8 lg:gap-16 items-center mb-20 lg:mb-28`}
    >
      {/* Imagen con efectos mejorados */}
      <motion.div 
        className="w-full lg:w-1/2"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Link href={getComponentRoute(caseStudy.slug)} className="block">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-sky-900/10 group">
            <Image
              src={caseStudy.imageUrl}
              alt={`${caseStudy.name} - ${caseStudy.subtitle}`}
              width={800}
              height={600}
              priority={priority}
              loading={priority ? 'eager' : 'lazy'}
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sky-900/80 via-sky-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute inset-0 flex items-end p-8">
              <div className="translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="inline-block px-4 py-2 bg-sky-500/90 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                  Ver proyecto
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Contenido con diseño mejorado */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <div>
            <span className="text-sky-500 font-semibold mb-2 block">{caseStudy.name}</span>
            <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
              {caseStudy.subtitle}
            </h3>
          </div>
          
          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            {caseStudy.description}
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              asChild
              variant="default"
              className="group bg-gray-900 hover:bg-sky-600 text-white text-lg font-medium shadow-xl shadow-sky-900/10 px-8 py-6 rounded-xl transition-all duration-300"
            >
              <Link href={getComponentRoute(caseStudy.slug)} className="flex items-center gap-3">
                Ver caso de éxito
                <svg
                  className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
