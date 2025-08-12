"use client";

import React, { useEffect, ReactNode } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { QrCode, ClipboardEdit, BarChartBig, CheckCircle } from 'lucide-react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';

// --- Animación y Componentes Auxiliares ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.7, 
      ease: [0.43, 0.13, 0.23, 0.96] 
    } 
  }
} as const;
const staggerContainer = {
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
const QrEventLanding: React.FC = () => {
  return (
    <div className="bg-[#F9FAFB] font-sans text-slate-800">
      <Header />
      {/* 1. Hero Principal */}
      <section className="min-h-screen flex items-center bg-[#101828] text-white py-20 lg:py-0">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Convierte cada Interacción en <span className="text-blue-400">Inteligencia de Negocio</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0">
                Nuestra plataforma usa códigos QR para capturar datos de tus campañas en tiempo real y transformarlos en análisis accionables.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-4 bg-[#1447E6] text-white font-bold text-lg rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
              >
                Optimiza mis Campañas
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <Image 
                src="/images/qr-hero-mockup.png"
                alt="Plataforma de análisis de datos con QR"
                width={500} height={500}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Cómo Funciona (Proceso de 3 pasos) */}
      <section className="py-20 lg:py-28 bg-[#F9FAFB]">
        <AnimatedSection>
          <div className="container mx-auto px-6 text-center">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-slate-900">De la Interacción al Insight en 3 Simples Pasos</motion.h2>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
              <motion.div variants={fadeIn} className="p-8">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-[#1447E6] mx-auto mb-4">
                    <QrCode className="w-8 h-8"/>
                </div>
                <h3 className="mt-4 text-xl font-bold">1. Crea y Despliega</h3>
                <p className="mt-2 text-slate-600">Genera un QR único para tu campaña y compártelo en tus eventos, productos o material de marketing.</p>
              </motion.div>
              <motion.div variants={fadeIn} className="p-8">
                 <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-[#1447E6] mx-auto mb-4">
                    <ClipboardEdit className="w-8 h-8"/>
                </div>
                <h3 className="mt-4 text-xl font-bold">2. Captura Datos</h3>
                <p className="mt-2 text-slate-600">Los participantes escanean el código y completan un formulario digital optimizado para cualquier dispositivo.</p>
              </motion.div>
              <motion.div variants={fadeIn} className="p-8">
                 <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-[#1447E6] mx-auto mb-4">
                    <BarChartBig className="w-8 h-8"/>
                </div>
                <h3 className="mt-4 text-xl font-bold">3. Analiza y Actúa</h3>
                <p className="mt-2 text-slate-600">Visualiza los datos en tiempo real, descubre tendencias y toma decisiones informadas para optimizar el ROI.</p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </section>
      
      {/* 3. Capacidades Clave */}
      <section className="py-20 lg:py-28 bg-white">
        <AnimatedSection>
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn}>
              <Image src="/images/qr-dashboard-map.png" alt="Dashboard de análisis de campañas" width={1000} height={800} className="rounded-xl shadow-lg border border-slate-200" />
            </motion.div>
            <motion.div variants={fadeIn}>
                <h2 className="text-3xl font-bold text-slate-900">Una Plataforma con Todo lo que Necesitas</h2>
                <p className="mt-4 text-lg text-slate-600">Hemos diseñado cada función para maximizar la eficiencia y el impacto de tus campañas.</p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-[#1447E6] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">QR Dinámicos y Gestionables</h3>
                      <p className="text-slate-600">Actualiza formularios y enlaces sin reimprimir códigos.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-[#1447E6] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">Formularios Personalizables</h3>
                      <p className="text-slate-600">Adapta cada formulario a los datos que necesitas recolectar.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-[#1447E6] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">Dashboard de Análisis Visual</h3>
                      <p className="text-slate-600">Monitorea el rendimiento con gráficos y mapas interactivos.</p>
                    </div>
                  </li>
                </ul>
            </motion.div>
          </div>
        </AnimatedSection>
      </section>

      {/* 4. Llamado a la acción final */}
      <section className="bg-[#101828] text-white">
        <div className="container mx-auto px-6 py-20 lg:py-24">
          <AnimatedSection>
            <div className="text-center">
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold">
                Deja de adivinar. Empieza a medir.
              </motion.h2>
              <motion.p variants={fadeIn} className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
                Lleva tus campañas al siguiente nivel con datos precisos y en tiempo real.
              </motion.p>
              <motion.div variants={fadeIn}>
                <motion.button
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="mt-8 px-10 py-4 bg-[#1447E6] text-white font-bold text-lg rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
                >
                  Contactar con un experto
                </motion.button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default QrEventLanding;