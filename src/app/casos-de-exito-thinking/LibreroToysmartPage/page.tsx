"use client";

import React, { useEffect, useState, ReactNode } from "react";
import Image from "next/image";
import { motion, useAnimation, Variants, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BrainCircuit,
  Scaling,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { getImagePath } from "@/lib/utils";

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
const ProcessCard = ({
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
    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center h-full"
  >
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 text-amber-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </motion.div>
);

// --- Componente principal de la página del proyecto Librero Toysmart ---
const LibreroToysmartPage = () => {
    const carouselImages = [
        "/images/toysmart/frame1.png",
        "/images/toysmart/frame2.png",
        "/images/toysmart/frame3.png",
        "/images/toysmart/frame4.png",
        "/images/toysmart/frame5.png",
        "/images/toysmart/frame6.png",
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
        }, 3000); // Cambia la imagen cada 3 segundos
        return () => clearInterval(interval);
    }, [carouselImages.length]);


  return (
    <div className="bg-gray-50 font-sans">
      <Header />
      <main className="text-gray-800">
        {/* 1. Hero Principal */}
        <section className="min-h-screen flex items-center bg-[#FF7D00] text-white">
          <div className="container mx-auto px-6 py-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div
                variants={fadeInLeft}
                className="text-center lg:text-left"
              >
                <p className="text-lg font-semibold text-yellow-200">
                  LIBRERO TOYSMART - PENGUIN RANDOM HOUSE
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-2">
                  Reimaginando Espacios: <br />
                  <span className="text-white">
                    Experiencia para los más pequeños
                  </span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-yellow-50 max-w-xl mx-auto lg:mx-0">
                  Una demostración de ingenio y Design Thinking, donde optimizamos una idea para agregar valor y crear una nueva perspectiva sin alterar su esencia.
                </p>
              </motion.div>
              <motion.div variants={scaleIn}>
                <Image
                  src={getImagePath("/images/toysmart/frame7.png")}
                  alt="Librero Toysmart finalizado y con libros"
                  width={800}
                  height={600}
                  className="rounded-xl w-full h-auto"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
z
        {/* 2. El Desafío: Antes y Después */}
        <AnimatedSection className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold">
                    El Punto de Partida
                </motion.h2>
                <motion.p variants={fadeIn} className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
                    Analizamos la estructura existente en TOYSMART para entender sus limitaciones y proponer una solución práctica, viable y estéticamente superior.
                </motion.p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-500">El Mueble Anterior</h3>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={getImagePath("/images/toysmart/estanteantiguo2.png")}
                    alt="Mueble librero antiguo en la tienda"
                    width={800}
                    height={200}
                    className="w-full"
                  />
                </div>
              </motion.div>
              <motion.div variants={fadeInRight}>
                 <h3 className="text-2xl font-bold text-center mb-4 text-amber-600">Nuestra Propuesta</h3>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={getImagePath("/images/toysmart/estante2.png")}
                    alt="Nuevo diseño del librero, más ligero y funcional"
                    width={400}
                    height={200}
                    className="w-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* 3. Nuestro Proceso de Ingenio */}
        <AnimatedSection className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold"
              >
                Ingenio y Design Thinking en Acción
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto"
              >
                En lugar de desechar ideas, las optimizamos. Adaptamos el concepto inicial de un mueble 360° a una solución que cumpliera con la funcionalidad, el presupuesto y el contexto del cliente.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProcessCard
                icon={<BrainCircuit size={32} />}
                title="Análisis y Viabilidad"
              >
                Evidenciamos que un mueble 360° completamente cargado no era práctico. El análisis de campo fue clave para redefinir el enfoque.
              </ProcessCard>
              <ProcessCard
                icon={<Scaling size={32} />}
                title="Adaptación del Diseño"
              >
                Propusimos una estructura más ligera que destaca cada libro, manteniendo el tamaño y color de la marca pero mejorando el acceso y la visibilidad.
              </ProcessCard>
              <ProcessCard
                icon={<Sparkles size={32} />}
                title="Branding y Estética Infantil"
              >
                Introdujimos elementos de branding y colores más llamativos para el público infantil, haciendo la elección de un libro una experiencia práctica y atractiva.
              </ProcessCard>
            </div>
          </div>
        </AnimatedSection>

        {/* 4. Galería Dinámica del Producto Final */}
        <AnimatedSection className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold">
                        Un Diseño que Gira en la Mente
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
                        Aunque el mueble es estático, su diseño 360° invita a explorarlo desde todos los ángulos. Este carrusel muestra la versatilidad y el atractivo del producto final.
                    </motion.p>
                </div>
                <motion.div variants={scaleIn} className="relative w-full max-w-2xl mx-auto h-96 md:h-[500px] overflow-hidden rounded-xl shadow-2xl">
                    <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="relative w-full h-full"
                            >
                                <Image
                                    src={carouselImages[currentIndex]}
                                    alt={`Vista ${currentIndex + 1} del librero Toysmart`}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>
                </motion.div>
            </div>
        </AnimatedSection>

      </main>
      <Footer />
    </div>
  );
};

export default LibreroToysmartPage;
