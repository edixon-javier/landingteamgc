"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Sparkles, Eye, Target } from "lucide-react";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import {
  fadeIn,
  fadeInUp,
  scaleIn,
  staggerContainer
} from '@/animations/variants';
import { 
  AnimatedSection, 
  OptimizedImage, 
  FeatureCard,
  CtaSection
} from '@/components/shared';

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
                <OptimizedImage
                  src="/images/philips/philips1.png"
                  alt="Columna de exhibición de Philips en tienda Éxito"
                  width={800}
                  height={600}
                  className="relative rounded-xl w-full max-w-sm mx-auto"
                  priority
                  withShadow
                  useMotion
                  variants={scaleIn}
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
                <OptimizedImage
                  src="/images/philips/philips2.png"
                  alt="Vista de la columna Philips en el pasillo de la tienda"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                  withShadow
                  useMotion
                  variants={scaleIn}
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
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full text-left"
                iconClassName="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 text-white mb-5 shadow-lg"
              >
                Convertimos una columna ordinaria en un foco de atención que
                encanta a los clientes y resalta la presencia de la marca en el
                pasillo.
              </FeatureCard>
              <FeatureCard
                icon={<Eye size={32} />}
                title="Guía Visual No Invasiva"
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full text-left"
                iconClassName="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 text-white mb-5 shadow-lg"
              >
                El diseño orienta a los clientes de forma natural, mejorando su
                recorrido de compra y fortaleciendo la simpatía por la marca.
              </FeatureCard>
              <FeatureCard
                icon={<Target size={32} />}
                title="Diseño Estratégico"
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full text-left"
                iconClassName="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 text-white mb-5 shadow-lg"
              >
                Cada componente y detalle refleja nuestro compromiso con la
                creación de elementos que se dinamizan con el entorno y cumplen
                objetivos comerciales.
              </FeatureCard>
            </div>
          </div>
        </AnimatedSection>

        {/* 4. Conclusión del Proyecto */}
        <CtaSection
          title="Creatividad que Ilumina"
          description="Este proyecto demuestra cómo el ingenio y la creatividad se fusionan para crear soluciones P.O.P. que no solo decoran, sino que interactúan con el entorno y potencian la experiencia del cliente."
          bgClassName="bg-gradient-to-r from-purple-700 to-blue-600"
          titleClassName="text-3xl md:text-4xl font-bold text-white mt-6"
          descriptionClassName="mt-4 text-lg text-gray-200 max-w-3xl mx-auto"
        >
          <motion.div variants={fadeIn}>
            <Lightbulb className="mx-auto h-16 w-16 text-yellow-300" />
          </motion.div>
        </CtaSection>
      </main>
      <Footer />
    </div>
  );
};

export default ColumnaPhilipsPage;
