"use client";

import React, { useEffect, ReactNode } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";
import {
  Lightbulb,
  Users,
  Box,
  MessageSquare,
} from "lucide-react";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

// --- Variantes de Animación para Framer Motion ---
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// --- Componente Auxiliar para controlar animaciones en Scroll ---
const AnimatedSection = ({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

// --- Componente de Tarjeta de Proceso ---
const StrategyCard = ({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) => (
  <motion.div
    variants={fadeIn}
    className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/20 h-full"
  >
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-5 shadow-lg">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </motion.div>
);

// --- Componente principal de la página del proyecto Punto de Experiencia WiZ ---
const PuntoExperienciaWizPage = () => {
  return (
    <div className="bg-gray-100 font-sans">
      <Header />
      <main className="text-gray-800">
        {/* 1. Hero Principal */}
        <section className="min-h-screen relative flex items-center justify-center text-white overflow-hidden bg-blue-700">
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
                style={{backgroundImage: `url(${getImagePath("/images/puntowiz/pwiz1.png")})`}}>
            </div>
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-blue-800 via-blue-700 to-transparent"></div>
            
            <div className="relative z-20 container mx-auto px-6 py-12">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <motion.div variants={fadeInLeft}>
                    <p className="text-lg font-semibold text-cyan-300 tracking-wider">
                      PUNTO DE EXPERIENCIA WiZ - PHILIPS
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-2">
                      Iluminando Mentes y Transformando Espacios
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-xl">
                      Una misión para democratizar la iluminación inteligente, convirtiendo cada hogar en un escenario de posibilidades infinitas a través de la educación y la tecnología.
                    </p>
                  </motion.div>
                  <motion.div variants={scaleIn} className="hidden lg:block">
                      <Image
                        src={getImagePath("/images/puntowiz/pwiz1.png")}
                        alt="Punto de experiencia WiZ en tienda"
                        width={800}
                        height={600}
                        className="rounded-xl shadow-2xl w-full max-w-md mx-auto"
                        priority
                      />
                  </motion.div>
                </motion.div>
            </div>
        </section>

        {/* 2. Del Render a la Realidad */}
        <AnimatedSection className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold">
                    El Poder de la Visualización
                </motion.h2>
                <motion.p variants={fadeIn} className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
                    Nuestras propuestas 3D fotorrealistas no son meras ilustraciones; son visiones anticipadas que permiten a los clientes sumergirse en el concepto antes de que el primer prototipo cobre vida.
                </motion.p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-500">El Diseño 3D</h3>
                <div className="relative rounded-xl overflow-hidden shadow-lg border-4 border-gray-100 p-4 bg-gray-100">
                  <Image
                    src={getImagePath("/images/puntowiz/wizv2.png")}
                    alt="Render 3D del punto de experiencia WiZ"
                    width={800}
                    height={600}
                    className="w-full rounded-lg"
                  />
                </div>
              </motion.div>
              <motion.div variants={fadeInRight}>
                 <h3 className="text-2xl font-bold text-center mb-4 text-blue-600">El Punto de Venta</h3>
                <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src={getImagePath("/images/puntowiz/pwiz2.png")}
                    alt="Foto real del punto de experiencia en la tienda"
                    width={800}
                    height={600}
                    className="w-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* 3. Nuestra Estrategia */}
        <AnimatedSection className="py-20 lg:py-28 bg-gray-100" style={{backgroundImage: `linear-gradient(180deg, #f3f4f6, #e5e7eb)`}}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold"
              >
                Una Estrategia Guiada por la Empatía
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto"
              >
                Este esfuerzo no solo educó sobre iluminación inteligente, sino que también encendió la curiosidad y la innovación, transformando la relación de las personas con sus espacios.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <StrategyCard
                icon={<Users size={32} />}
                title="Aulas Vivas"
              >
                Creamos puntos de experiencia que se convirtieron en aulas, impulsando a las comunidades a explorar las posibilidades de la tecnología.
              </StrategyCard>
              <StrategyCard
                icon={<Box size={32} />}
                title="Diseño 3D Fotorrealista"
              >
                Modelamos composiciones en escala real, ofreciendo una herramienta estratégica para cuantificar la interacción del producto en su hábitat natural.
              </StrategyCard>
              <StrategyCard
                icon={<MessageSquare size={32} />}
                title="Aprobación Colaborativa"
              >
                La integración de renders en fotos del espacio real facilitó un proceso de aprobación colaborativo entre cliente y distribuidor.
              </StrategyCard>
            </div>
          </div>
        </AnimatedSection>

        {/* 4. Galería de la Experiencia */}
        <AnimatedSection className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold">
                        Transformando el Punto de Venta
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
                        Cada display fue diseñado para educar, inspirar y encender la curiosidad de los consumidores en diferentes entornos comerciales.
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <motion.div variants={scaleIn} className="rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={getImagePath("/images/puntowiz/pwiz1.png")}
                          alt="Display de WiZ en pasillo de tienda"
                          width={800}
                          height={600}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </motion.div>
                    <motion.div variants={scaleIn} className="rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={getImagePath("/images/puntowiz/pwiz2.png")}
                          alt="Módulo de experiencia WiZ en sección de tecnología"
                          width={800}
                          height={600}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </motion.div>
                    <motion.div variants={scaleIn} className="rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={getImagePath("/images/puntowiz/pwiz3.png")}
                          alt="Otro ángulo del módulo de experiencia WiZ"
                          width={800}
                          height={600}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </motion.div>
                </div>
            </div>
        </AnimatedSection>
        
        {/* 5. Conclusión del Proyecto */}
        <section className="bg-gradient-to-r from-blue-800 to-purple-800">
          <div className="container mx-auto px-6 py-20 text-center">
            <AnimatedSection>
              <motion.div variants={fadeIn}>
                <Lightbulb className="mx-auto h-16 w-16 text-yellow-300" />
              </motion.div>
              <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold text-white mt-6"
              >
                Reimaginando Futuros, un Espacio a la Vez
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto"
              >
                Este proyecto es una muestra de cómo la creatividad y la tecnología, guiadas por la empatía, pueden iluminar y transformar vidas.
              </motion.p>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default PuntoExperienciaWizPage;
