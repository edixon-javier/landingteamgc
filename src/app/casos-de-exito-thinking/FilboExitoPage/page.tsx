"use client";

import React, { useEffect, ReactNode } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";
import {
  Store,
  Users,
  BrainCircuit,
  CheckCircle,
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
}: {
  children: ReactNode;
  className?: string;
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
    >
      {children}
    </motion.div>
  );
};

// --- Componente de Tarjeta de Proceso ---
const FeatureCard = ({
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
    className="bg-white p-8 rounded-lg shadow-md hover:shadow-yellow-500/20 hover:shadow-lg transition-shadow duration-300 border border-gray-100 h-full"
  >
    <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-yellow-400 text-black mb-5">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </motion.div>
);

// --- Componente principal de la página del proyecto FILBO Éxito ---
const FilboExitoPage = () => {
  return (
    <div className="bg-gray-100 font-sans">
        <Header />
      <main className="text-gray-800">
        {/* 1. Hero Principal */}
        <section className="min-h-screen relative flex items-center bg-yellow-400 text-black overflow-hidden">
            <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-black/5 rounded-full"></div>
            <div className="absolute -top-1/4 -left-1/4 w-2/3 h-2/3 bg-black/5 rounded-full"></div>
            <div className="container mx-auto px-6 py-12 z-10">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <motion.div variants={fadeInLeft}>
                    <p className="text-lg font-semibold text-gray-800">
                      FILBO EN ALMACENES ÉXITO
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-2">
                      La Feria del Libro se vive en Éxito
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-xl">
                      Un ambicioso proyecto en alianza con las tres principales editoriales de Colombia para transformar espacios comerciales en puntos de encuentro cultural.
                    </p>
                  </motion.div>
                  <motion.div variants={scaleIn}>
                      <Image
                        src={getImagePath("/images/filbo/filbo3.png")}
                        alt="Stand de FILBO en Almacenes Éxito"
                        width={800}
                        height={600}
                        className="relative rounded-xl shadow-2xl w-full mx-auto"
                        priority
                      />
                  </motion.div>
                </motion.div>
            </div>
        </section>

        {/* 2. De la Visión Digital a la Experiencia Real (MODIFICADO) */}
        <AnimatedSection className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold">
                    De la Visión Digital a la Experiencia Real
                </motion.h2>
                <motion.p variants={fadeIn} className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
                    Nuestro proceso evidencia la habilidad para transformar ideas creativas en estructuras impresionantes, desde el primer modelo hasta la instalación final.
                </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <motion.div variants={fadeIn}>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-500">1. Modelo Conceptual</h3>
                <div className="relative rounded-xl overflow-hidden shadow-lg border-4 border-gray-100 p-2 bg-gray-100">
                  <Image
                    src={getImagePath("/images/filbo/filbov1.png")}
                    alt="Modelo 3D conceptual del stand"
                    width={800}
                    height={600}
                    className="w-full rounded-lg"
                  />
                </div>
              </motion.div>
              <motion.div variants={fadeIn}>
                 <h3 className="text-xl font-bold text-center mb-4 text-gray-700">2. Render Fotorrealista</h3>
                <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-gray-200 p-2 bg-gray-200">
                  <Image
                    src={getImagePath("/images/filbo/filbov2.png")}
                    alt="Render 3D fotorrealista del stand"
                    width={800}
                    height={600}
                    className="w-full rounded-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* 3. Galería del Stand en Contexto */}
        <AnimatedSection className="py-20 lg:py-28 bg-gray-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold">
                        Un Punto Cultural en el Corazón del Retail
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
                        Implementados en Bogotá y Antioquia, los stands atrajeron a entusiastas literarios y curiosos por igual, recreando la atmósfera de una feria del libro.
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 h-[500px]">
                    <motion.div variants={scaleIn} className="md:col-span-3 md:row-span-2 rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={getImagePath("/images/filbo/filbo3.png")}
                          alt="Vista frontal del stand de FILBO en Éxito"
                          width={800}
                          height={600}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </motion.div>
                    <motion.div variants={scaleIn} className="md:col-span-2 rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={getImagePath("/images/filbo/filbo4.png")}
                          alt="Vista lateral del stand con exhibición de libros"
                          width={800}
                          height={600}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </motion.div>
                    <motion.div variants={scaleIn} className="md:col-span-2 rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={getImagePath("/images/filbo/filbo1.png")}
                          alt="Vista panorámica del stand en el almacén"
                          width={800}
                          height={600}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </motion.div>
                </div>
            </div>
        </AnimatedSection>

        {/* 4. Estrategia y Ejecución */}
        <AnimatedSection className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold"
              >
                Un Reto, Tres Aliados
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto"
              >
                Apoyados en nuestra planta de producción y experticia en design thinking, desarrollamos stands que recrean la atmósfera de una feria del libro en un ambiente de retail.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Users size={32} />}
                title="Alianza Estratégica"
              >
                Colaboramos con Penguin Random House, Planeta y Sin Fronteras para unificar su presencia y potenciar su impacto.
              </FeatureCard>
              <FeatureCard
                icon={<Store size={32} />}
                title="Integración al Retail"
              >
                Diseñamos stands que no solo armonizan con el ambiente de la tienda, sino que lo transforman en un destino cultural.
              </FeatureCard>
              <FeatureCard
                icon={<BrainCircuit size={32} />}
                title="Design Thinking Aplicado"
              >
                Cada detalle fue pensado para maximizar la visibilidad y las ventas, culminando en un éxito notable para nuestros clientes.
              </FeatureCard>
            </div>
          </div>
        </AnimatedSection>
        
        {/* 5. Conclusión del Proyecto (MODIFICADO) */}
        <section className="bg-gray-800">
          <div className="container mx-auto px-6 py-20 text-center">
            <AnimatedSection>
              <motion.div variants={fadeIn}>
                <CheckCircle className="mx-auto h-16 w-16 text-yellow-400" />
              </motion.div>
              <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold text-white mt-6"
              >
                Éxito Literario y Comercial
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
              >
                Implementados en Bogotá y Antioquia, los stands atrajeron a entusiastas y curiosos, generando una experiencia enriquecedora para los visitantes y un éxito de ventas para las editoriales.
              </motion.p>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default FilboExitoPage;
