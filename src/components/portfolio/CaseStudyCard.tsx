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
  priority?: boolean;
}

export function CaseStudyCard({ caseStudy, priority = false }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group"
    >
      <Link href={getComponentRoute(caseStudy.slug)}>
        <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
          {/* Imagen superior */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={caseStudy.imageUrl}
              alt={`${caseStudy.name} - ${caseStudy.subtitle}`}
              width={400}
              height={300}
              priority={priority}
              loading={priority ? 'eager' : 'lazy'}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay con gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Contenido */}
          <div className="p-6 flex flex-col flex-grow">
            {/* Badge del nombre */}
            <span className="inline-block text-sky-500 font-semibold text-sm mb-2">
              {caseStudy.name}
            </span>

            {/* Título */}
            <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-sky-600 transition-colors duration-300">
              {caseStudy.subtitle}
            </h3>

            {/* Descripción */}
            <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
              {caseStudy.description}
            </p>

            {/* Botón */}
            <Button
              variant="ghost"
              className="w-full group/btn bg-gray-50 hover:bg-sky-500 hover:text-white text-gray-900 font-medium transition-all duration-300"
            >
              Ver proyecto
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"
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
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// Componente para Grid de Cards (opcional - para usar con múltiples cards)
export function CaseStudyGrid({ caseStudies }: { caseStudies: CaseStudyCardProps['caseStudy'][] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {caseStudies.map((caseStudy, index) => (
        <CaseStudyCard
          key={caseStudy.slug}
          caseStudy={caseStudy}
          priority={index < 3}
        />
      ))}
    </div>
  );
}