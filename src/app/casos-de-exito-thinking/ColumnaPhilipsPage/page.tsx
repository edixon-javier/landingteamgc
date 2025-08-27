"use client";

import React, { useEffect, ReactNode } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";
import { Lightbulb, Sparkles, Eye, Target } from "lucide-react";
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

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
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

// --- Componente de Tarjeta de Características ---
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
    variants={fadeInUp}
    className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full text-left"
  >
    <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 text-white mb-5 shadow-lg">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </motion.div>
);

// --- Componente principal de la página del proyecto Columna Philips ---
const ColumnaPhilipsPage = () => {
  return (
    <div className="bg-gray-50 font-sans">
      <Header />
      <main className="text-gray-800">
        {/* 1. Hero Principal (Fondo Morado) */}
        <section className="min-h-screen relative flex items-center bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
          <div className="container mx-auto px-6 py-12 z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInUp}>
                <p className="text-lg font-semibold text-purple-200">
                  COLUMNA PHILIPS ÉXITO - CAMPESTRE
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-2">
                  Destellos de Creatividad: Iluminando Cada Rincón
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-xl">
                  Transformamos una columna común en un punto de atracción que
                  no solo destaca la marca, sino que también encanta a los
                  clientes con una experiencia inmersiva.
                </p>
              </motion.div>
              <motion.div
                variants={scaleIn}
                className="relative flex justify-center items-center"
              >
                <div className="absolute w-full h-full bg-white rounded-full blur-3xl opacity-10"></div>
                <Image
                  src={getImagePath("/images/philips/philips1.png")}
                  alt="Columna de exhibición de Philips en tienda Éxito"
                  width={800}
                  height={600}
                  className="relative rounded-xl shadow-2xl w-full max-w-sm mx-auto"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 2. La Misión */}
        <AnimatedSection className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={scaleIn}
                className="w-full h-auto rounded-xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={getImagePath("/images/philips/philips2.png")}
                  alt="Vista de la columna Philips en el pasillo de la tienda"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Una Experiencia Inmersiva
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Nuestra misión fue clara: transformar un elemento estructural
                  en una instalación P.O.P. que sirviera como un soporte visual
                  y una experiencia inmersiva, iluminando la curiosidad del
                  cliente y resaltando la innovación de Philips.
                </p>
                <p className="text-lg text-gray-600">
                  Cada detalle, desde los materiales hasta la disposición de los
                  productos, fue cuidadosamente diseñado para crear un espacio
                  funcional y profesional que guía al cliente sin ser invasivo.
                </p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* 3. Estrategia Creativa */}
        <AnimatedSection className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold"
              >
                Ingenio que Conecta
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto"
              >
                Nuestras soluciones actúan como guías que orientan a los
                clientes, mejorando su percepción y conexión con la marca de una
                manera sutil y efectiva.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Sparkles size={32} />}
                title="Punto de Atracción"
              >
                Convertimos una columna ordinaria en un foco de atención que
                encanta a los clientes y resalta la presencia de la marca en el
                pasillo.
              </FeatureCard>
              <FeatureCard
                icon={<Eye size={32} />}
                title="Guía Visual No Invasiva"
              >
                El diseño orienta a los clientes de forma natural, mejorando su
                recorrido de compra y fortaleciendo la simpatía por la marca.
              </FeatureCard>
              <FeatureCard
                icon={<Target size={32} />}
                title="Diseño Estratégico"
              >
                Cada componente y detalle refleja nuestro compromiso con la
                creación de elementos que se dinamizan con el entorno y cumplen
                objetivos comerciales.
              </FeatureCard>
            </div>
          </div>
        </AnimatedSection>

        {/* 4. Conclusión del Proyecto */}
        <section className="bg-gradient-to-r from-purple-700 to-blue-600">
          <div className="container mx-auto px-6 py-20 text-center">
            <AnimatedSection>
              <motion.div variants={fadeIn}>
                <Lightbulb className="mx-auto h-16 w-16 text-yellow-300" />
              </motion.div>
              <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold text-white mt-6"
              >
                Creatividad que Ilumina
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto"
              >
                Este proyecto demuestra cómo el ingenio y la creatividad se
                fusionan para crear soluciones P.O.P. que no solo decoran, sino
                que interactúan con el entorno y potencian la experiencia del
                cliente.
              </motion.p>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ColumnaPhilipsPage;
