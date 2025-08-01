"use client";

import { useState, useRef, useEffect, memo } from 'react';
import Image from 'next/image';
import { motion, useAnimationControls, useInView } from 'framer-motion';
import { clientLogos } from '@/lib/content';

interface LogoCloudProps {
  speed?: number; // Velocidad del slider en segundos (duración de la animación)
  pauseOnHover?: boolean; // Si debe pausar cuando el mouse pasa sobre el slider
}

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

// Componente de logo individual para optimizar renderizado
const Logo = memo(({ logo, index }: { logo: typeof clientLogos[0], index: number }) => (
  <motion.div
    className="flex-shrink-0 flex items-center justify-center"
    whileHover={{ scale: 1.05 }}
  >
    <Image
      src={logo.src}
      alt={`${logo.name} logo`}
      width={logo.width || 158}
      height={logo.height || 48}
      className="grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
      priority={index < 6} // Prioriza la carga de los primeros logos
    />
  </motion.div>
));

Logo.displayName = 'Logo'; // Para depuración en React DevTools

export function LogoCloud({ speed = 20, pauseOnHover = true }: LogoCloudProps) {
  const [duplicatedLogos, setDuplicatedLogos] = useState([...clientLogos, ...clientLogos]);
  const [contentWidth, setContentWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  // Efecto para medir el ancho del contenedor y del contenido
  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      const container = containerRef.current.offsetWidth;
      const content = contentRef.current.offsetWidth;
      
      setContentWidth(content);
      
      // Si el contenido es menor que el contenedor, duplicamos más logos para llenar
      if (content < container * 2) {
        setDuplicatedLogos([...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos]);
      }
    }
    
    const handleResize = () => {
      if (containerRef.current && contentRef.current) {
        const newContentWidth = contentRef.current.offsetWidth;
        setContentWidth(newContentWidth);
        
        // Reiniciar la animación con las nuevas medidas
        if (isInView) {
          controls.start({
            x: [0, -newContentWidth / 2],
            transition: {
              duration: speed,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }
          });
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isInView, speed, controls]);
  
  // Iniciar la animación cuando el componente entra en vista
  useEffect(() => {
    if (isInView && contentWidth > 0) {
      // Configurar una animación continua para lograr un efecto de carrusel infinito
      controls.start({
        x: [-contentWidth / 4, -contentWidth / 2],
        transition: {
          duration: speed,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0
        }
      });
    } else if (!isInView) {
      controls.stop();
    }
  }, [isInView, contentWidth, controls, speed]);
  
  // Manejadores de eventos para pausar/continuar el slider
  const handleMouseEnter = () => {
    if (pauseOnHover) {
      controls.stop();
    }
  };
  
  const handleMouseLeave = () => {
    if (pauseOnHover && isInView) {
      controls.start({
        x: -contentWidth / 2,
        transition: {
          duration: speed,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    }
  };

  return (
    <section className="bg-gray-50 py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          className="text-center"
        >
          <h2 className="text-base font-semibold text-gray-600 tracking-wider uppercase">
            Marcas que confían en nuestra capacidad para generar valor
          </h2>
          
          <div 
            className="mt-10 relative overflow-hidden"
            aria-label="Logos de clientes en carrusel automático"
          >
            {pauseOnHover && (
              <div className="absolute bottom-0 left-0 right-0 flex justify-center py-2 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
                <span className="text-xs text-gray-500 bg-white/80 px-2 py-1 rounded-full shadow-sm">
                  Pausa al pasar el cursor
                </span>
              </div>
            )}
            <div
              ref={containerRef}
              className="w-full overflow-hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                ref={contentRef}
                className="flex items-center justify-start gap-8 sm:gap-12 md:gap-16"
                animate={controls}
              >
                {duplicatedLogos.map((logo, index) => (
                  <Logo key={`${logo.name}-${index}`} logo={logo} index={index} />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}