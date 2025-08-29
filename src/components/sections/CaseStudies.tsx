"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { caseStudiesData } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { staggerContainer as sectionVariants, fadeIn as itemVariants } from '@/animations/variants';

export function CaseStudies() {
  const featuredStudies = caseStudiesData.slice(0, 3);

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
      default:
        return `/casos-de-exito/${slug}`;
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent,white)] opacity-25" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="text-center"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6"
          >
            Resultados, no solo promesas
          </motion.h2>
          
          <motion.p 
            variants={itemVariants} 
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-16"
          >
            Explora cómo hemos transformado los desafíos de nuestros clientes en historias de éxito medibles y visualmente impactantes.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {featuredStudies.map((study) => (
              <motion.div 
                key={study.slug} 
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Link 
                  href={getComponentRoute(study.slug)}
                  className="block group text-left bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-sky-200/50 transition-all duration-300"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image
                      src={study.imageUrl}
                      alt={`Caso de éxito de ${study.title}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="text-sky-600 text-sm font-medium mb-2">{study.name}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">
                      {study.subtitle}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">{study.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={itemVariants} 
            className="mt-16"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/casos-de-exito">
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-lg font-medium border-2 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white transition-all duration-300"
              >
                Ver todos los proyectos
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
