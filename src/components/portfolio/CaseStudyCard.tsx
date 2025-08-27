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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 lg:gap-8 items-center mb-16`}
    >
      {/* Imagen */}
      <div className="w-full lg:w-1/2">
        <Link href={getComponentRoute(caseStudy.slug)} className="block">
          <div className="relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02] group">
            <Image
              src={caseStudy.imageUrl}
              alt={`${caseStudy.title} - ${caseStudy.title}`}
              width={600}
              height={400}
              priority={priority}
              loading={priority ? 'eager' : 'lazy'}
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101828]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </Link>
      </div>

      {/* Contenido */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl lg:text-2xl font-bold text-[#101828] mb-2">{caseStudy.subtitle}</h3>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm lg:text-base max-w-xl">
            {caseStudy.description}
          </p>
          <Button
            asChild
            variant="default"
            className="text-base font-semibold bg-[#101828] hover:bg-[#1D2939] text-white shadow-lg transform hover:scale-105 transition-all duration-300 px-8 py-6 rounded-lg"
          >
            <Link href={getComponentRoute(caseStudy.slug)} className="flex items-center justify-center gap-2">
              Ver caso de éxito
              <svg
                className="w-8 h-8 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
