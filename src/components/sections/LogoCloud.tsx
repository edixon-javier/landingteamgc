"use client";

import { useState, useRef, useEffect, memo, useCallback } from 'react';
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

const formatYear = (logo: typeof clientLogos[0]) => {
  if (logo.yearEnd) {
    return `${logo.yearStart}-${logo.yearEnd}`;
  }
  return `${logo.yearStart}`;
};

// Componente de logo individual para optimizar renderizado
const Logo = memo(({ logo, index }: { logo: typeof clientLogos[0], index: number }) => (
  <motion.div
    className="flex-shrink-0 flex flex-col items-center justify-center group"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="relative mb-3 h-[70px] flex items-center justify-center">
      <Image
        src={logo.src}
        alt={`${logo.name} logo`}
        width={logo.width || 158}
        height={logo.height || 48}
        className="grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
        priority={index < 6} // Prioriza la carga de los primeros logos
      />
    </div>
    <motion.span 
      className="text-gray-500 text-sm font-light tracking-wide"
      initial={{ opacity: 0.6 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {formatYear(logo)}
    </motion.span>
  </motion.div>
));

Logo.displayName = 'Logo'; // Para depuración en React DevTools



export function LogoCloud({ 
  speed = 20, 
  pauseOnHover = true
}: LogoCloudProps = {}) {
  const [activeSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [visibleLogos, setVisibleLogos] = useState(5); // Default para desktop
  const [duplicatedLogos, setDuplicatedLogos] = useState([...clientLogos, ...clientLogos]);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const continuousControls = useAnimationControls();
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  // Calcular el número de logos visibles basado en el ancho de la ventana
  useEffect(() => {
    const handleResize = () => {
      // Determinar cuántos logos mostrar según el ancho
      if (window.innerWidth < 640) {
        setVisibleLogos(2); // Móvil
      } else if (window.innerWidth < 1024) {
        setVisibleLogos(3); // Tablet
      } else {
        setVisibleLogos(5); // Desktop
      }
      
      // Actualizar duplicatedLogos para asegurarnos de tener suficientes para el movimiento continuo
      setDuplicatedLogos([...clientLogos, ...clientLogos, ...clientLogos]);
    };
    
    // Llamar al inicio y en cada resize
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  // Manejar el movimiento continuo del slider
  useEffect(() => {
    // Duplicamos los logos para crear un efecto continuo
    setDuplicatedLogos([...clientLogos, ...clientLogos, ...clientLogos]);
    
    if (isInView && contentRef.current) {
      const startMovement = () => {
        // Calculamos el ancho total para la animación continua
        const totalWidth = contentRef.current?.scrollWidth || 0;
        const duration = speed; // Duración en segundos
        
        if (totalWidth > 0 && autoplay) {
          // Configurar animación continua
          continuousControls.start({
            x: [-totalWidth / 3, -totalWidth * 2/3], // Mover un tercio de los logos
            transition: {
              duration,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 0
            }
          });
        } else {
          continuousControls.stop();
        }
      };
      
      startMovement();
    }
  }, [isInView, autoplay, speed, continuousControls]);
  
  // Pausar/reanudar autoplay en hover
  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) {
      setAutoplay(false);
      continuousControls.stop();
    }
  }, [pauseOnHover, continuousControls]);
  
  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover && isInView && contentRef.current) {
      setAutoplay(true);
      
      // Reiniciar el movimiento continuo
      const totalWidth = contentRef.current?.scrollWidth || 0;
      if (totalWidth > 0) {
        continuousControls.start({
          x: [-totalWidth / 3, -totalWidth * 2/3],
          transition: {
            duration: speed,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }
        });
      }
    }
  }, [pauseOnHover, isInView, speed, continuousControls]);
  

  
  // Efecto de animación suave para cambiar de slide
  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.scrollWidth / clientLogos.length;
      
      controls.start({
        x: -activeSlide * slideWidth,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.5
        }
      });
      
      // También actualizar la posición del slider continuo al usar las flechas
      if (contentRef.current) {
        // Detener brevemente y reiniciar la animación continua para ajustar la posición
        if (autoplay && isInView) {
          const totalWidth = contentRef.current.scrollWidth || 0;
          continuousControls.start({
            x: [-totalWidth / 3, -totalWidth * 2/3],
            transition: {
              duration: speed,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }
          });
        }
      }
    }
  }, [activeSlide, controls, visibleLogos, autoplay, isInView, continuousControls, speed]);

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
            ref={containerRef}
            className="mt-12 relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-label="Clientes y años de colaboración"
          >
         
            
            {/* Contenedor del slider con movimiento continuo */}
            <div className="overflow-hidden rounded-lg">
              {/* Slider con movimiento continuo (automático) */}
              <motion.div
                ref={contentRef}
                className="flex items-center py-6"
                animate={continuousControls}
              >
                {duplicatedLogos.map((logo, index) => (
                  <motion.div 
                    key={`${logo.name}-continuous-${index}`}
                    className={`flex-shrink-0 px-4 sm:px-6 md:px-8`}
                    style={{ 
                      width: `${100 / (visibleLogos * 2)}%`,
                      minWidth: "180px" 
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.02, duration: 0.4 }}
                  >
                    <Logo logo={logo} index={index} />
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Slider con navegación manual (oculto pero funcional para los dots y flechas) */}
              <motion.div
                ref={sliderRef}
                className="hidden"
                animate={controls}
              >
                {clientLogos.map((logo, index) => (
                  <div 
                    key={`${logo.name}-manual-${index}`}
                    className="flex-shrink-0"
                    style={{ width: `${100 / visibleLogos}%` }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}