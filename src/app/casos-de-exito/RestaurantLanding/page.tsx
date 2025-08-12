'use client';

import React, { useEffect, ReactNode } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { QrCode, Smartphone, ChefHat, CheckCircle } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/organisms/Header';
import { getImagePath } from '@/lib/utils';
import { useAgendaDemoScroll } from "@/hooks/useAgendaDemoScroll";


// --- Animación y Componentes Auxiliares ---
import { Variants } from 'framer-motion';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

const AnimatedSection = ({ children }: { children: ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);
  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={staggerContainer}>
      {children}
    </motion.div>
  );
};

// --- Landing Page Principal ---
const RestaurantLanding = () => {
  const handleAgendaDemoClick = useAgendaDemoScroll('contacto');
  return (
    // Nota: Para la mejor experiencia, considera cargar una fuente Serif como 'Playfair Display' o 'Lora' en tu layout.
    <div className="bg-rose-900 font-sans text-slate-800">
      <Header/>
      {/* 1. Hero Principal */}
      <section className="min-h-screen flex items-center py-20 lg:py-0">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Columna de Texto */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                La Experiencia de Cenar, <br /> <span className="text-amber-400">Reinventada</span>.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-rose-100 max-w-xl mx-auto lg:mx-0">
                Transforma tus mesas en una experiencia digital. Con ElegantDine, tus clientes ordenan desde un menú interactivo mediante un código QR.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#F5F5F4" /* bg-stone-100 */ }} whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-4 bg-white text-rose-800 font-bold text-lg rounded-lg shadow-lg transition-colors duration-300"
              >
                <button onClick={handleAgendaDemoClick} >
                  Agenda una Demo Estratégica
                </button>
              </motion.button>
            </motion.div>

            {/* Columna de Imagen */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
               <Image
                src={getImagePath(
                  "/images/restaurant/pedidos.webp"
                )}
                alt="Estado anterior del proceso"
                width={800}
                height={600}
                className="rounded-lg mb-4 opacity-80"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Cómo Funciona (Proceso de 3 pasos) */}
      <section className="py-20 lg:py-28 bg-white">
        <AnimatedSection>
          <div className="container mx-auto px-6 text-center">
            <motion.h2 variants={fadeIn} className="font-serif text-3xl md:text-4xl font-bold text-slate-900">Una experiencia fluida para todos</motion.h2>
            <motion.p variants={fadeIn} className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">Digitalizar tu servicio nunca fue tan sencillo.</motion.p>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
              <motion.div variants={fadeIn} className="p-8">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-rose-100 text-rose-800 mx-auto mb-4">
                    <QrCode className="w-8 h-8"/>
                </div>
                <h3 className="mt-4 text-xl font-bold">1. Escanea el QR</h3>
                <p className="mt-2 text-slate-600">El cliente llega a la mesa y escanea un código QR único con su teléfono.</p>
              </motion.div>
              <motion.div variants={fadeIn} className="p-8">
                 <div className="flex items-center justify-center h-16 w-16 rounded-full bg-rose-100 text-rose-800 mx-auto mb-4">
                    <Smartphone className="w-8 h-8"/>
                </div>
                <h3 className="mt-4 text-xl font-bold">2. Explora y Ordena</h3>
                <p className="mt-2 text-slate-600">Navega por tu menú visual, personaliza su pedido y lo envía directamente a cocina.</p>
              </motion.div>
              <motion.div variants={fadeIn} className="p-8">
                 <div className="flex items-center justify-center h-16 w-16 rounded-full bg-rose-100 text-rose-800 mx-auto mb-4">
                    <ChefHat className="w-8 h-8"/>
                </div>
                <h3 className="mt-4 text-xl font-bold">3. Prepara y Disfruta</h3>
                <p className="mt-2 text-slate-600">Tu cocina recibe la orden al instante, sin errores. El cliente disfruta más rápido.</p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </section>
      
      {/* 3. Feature Showcase (Diseño Alternado) */}
      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="container mx-auto px-6">
          {/* Feature 1 */}
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              <motion.div variants={fadeIn}>
               <Image
                src={getImagePath(
                  "/images/restaurant/menu.webp"
                )}
                alt="Estado anterior del proceso"
                width={800}
                height={600}
                className="rounded-lg mb-4 opacity-80"
              />
              </motion.div>
              <motion.div variants={fadeIn}>
                <h2 className="font-serif text-3xl font-bold text-slate-900">Un menú que enamora a tus clientes</h2>
                <p className="mt-4 text-lg text-slate-600">Crea un menú visualmente irresistible. Sube fotos de alta calidad, organiza por categorías y actualiza precios o platillos en tiempo real, sin reimprimir una sola carta.</p>
                <ul className="mt-6 space-y-3">
                    <li className="flex items-center text-slate-700"><CheckCircle className="w-5 h-5 mr-3 text-rose-600" /><span>Fotos y descripciones atractivas.</span></li>
                    <li className="flex items-center text-slate-700"><CheckCircle className="w-5 h-5 mr-3 text-rose-600" /><span>Categorías ilimitadas (Entradas, Platos Fuertes, Vinos).</span></li>
                    <li className="flex items-center text-slate-700"><CheckCircle className="w-5 h-5 mr-3 text-rose-600" /><span>Actualizaciones instantáneas desde tu panel.</span></li>
                </ul>
              </motion.div>
            </div>
          </AnimatedSection>
          {/* Feature 2 */}
          <AnimatedSection>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeIn} className="lg:order-last">
                <Image
                src={getImagePath(
                  "/images/restaurant/ordenes.webp"
                )}
                alt="Estado anterior del proceso"
                width={800}
                height={600}
                className="rounded-lg mb-4 opacity-80"
              />
              </motion.div>
              <motion.div variants={fadeIn}>
                <h2 className="font-serif text-3xl font-bold text-slate-900">Control total de tu operación en tiempo real</h2>
                <p className="mt-4 text-lg text-slate-600">Los pedidos llegan a tu panel de control al instante, con el número de mesa y los detalles exactos. Reduce errores, agiliza la cocina y gestiona el estado de cada orden con un clic.</p>
                <ul className="mt-6 space-y-3">
                    <li className="flex items-center text-slate-700"><CheckCircle className="w-5 h-5 mr-3 text-rose-600" /><span>Notificaciones de nuevos pedidos.</span></li>
                    <li className="flex items-center text-slate-700"><CheckCircle className="w-5 h-5 mr-3 text-rose-600" /><span>Filtra pedidos por mesa, fecha o estado.</span></li>
                    <li className="flex items-center text-slate-700"><CheckCircle className="w-5 h-5 mr-3 text-rose-600" /><span>Cero errores de comunicación entre salón y cocina.</span></li>
                </ul>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
{/* 6. Llamado a la acción final */}
      <section className="bg-emerald-900/20">
        <div className="bg-[#111827]">
          <div className="container mx-auto px-6 py-20 text-center">
            <AnimatedSection>
              <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold text-white"
              >
                Deja de reaccionar. Empieza a anticipar.
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto"
              >
                Descubre tu verdadera postura de seguridad y obtén un plan de
                acción claro en tu primera demo.
              </motion.p>
              <motion.div variants={fadeIn}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 px-10 py-4 bg-emerald-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-emerald-700 transition-all duration-300"
                >
                  <button onClick={handleAgendaDemoClick} >
                    Agenda una Demo Estratégica
                  </button>
                </motion.button>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RestaurantLanding;