"use client";

import React from "react";
import { motion } from "framer-motion";
import { Store, Users, BrainCircuit, CheckCircle } from "lucide-react";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import {
  fadeIn,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
} from "@/animations/variants";
import {
  AnimatedSection,
  OptimizedImage,
  FeatureCard,
  CtaSection,
} from "@/components/shared";
import ReactCompareImage from "react-compare-image";
import { getImagePath } from "@/lib/utils";

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
                  Un ambicioso proyecto en alianza con las tres principales
                  editoriales de Colombia para transformar espacios comerciales
                  en puntos de encuentro cultural.
                </p>
              </motion.div>
              <motion.div variants={scaleIn}>
                <OptimizedImage
                  src="/images/filbo/filbov2.png"
                  alt="Stand de FILBO en Almacenes Éxito"
                  width={800}
                  height={600}
                  className="relative rounded-xl w-full mx-auto"
                  priority
                  withShadow
                  useMotion
                  variants={scaleIn}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 2. De la Visión Digital a la Experiencia Real (REINVENTADA) */}
        <AnimatedSection className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold"
              >
                De la Visión Digital a la Experiencia Real
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto"
              >
                Nuestro proceso evidencia la habilidad para transformar ideas
                creativas en estructuras impresionantes, desde el primer modelo
                hasta la instalación final.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Columna Izquierda: Comparador de Imágenes */}
              <motion.div variants={fadeInLeft}>
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <ReactCompareImage
                    leftImage={getImagePath("/images/filbo/filbov1.png")}
                    rightImage={getImagePath("/images/filbo/filbov2.png")}
                    leftImageLabel="Concepto Inicial"
                    rightImageLabel="Modelo 3D Final"
                    sliderLineWidth={3}
                    sliderLineColor="#EAB308"
                    handle={
                      <div className="bg-yellow-400 w-10 h-10 rounded-full shadow-md grid place-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M8 3L12 7L16 3" />
                          <path d="M16 21L12 17L8 21" />
                        </svg>
                      </div>
                    }
                    hover={true}
                  />
                </div>
                <p className="text-center text-gray-500 mt-4 italic">
                  Desliza para comparar el boceto inicial con el modelo 3D
                  detallado.
                </p>
              </motion.div>

              {/* Columna Derecha: Características */}
              <motion.div variants={fadeInRight}>
                <div className="space-y-6">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 text-black rounded-lg flex items-center justify-center shadow-md">
                      <Store size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-gray-800 mb-1">
                        Diseño Adaptable
                      </h4>
                      <p className="text-gray-700">
                        Estructuras modulares que se ajustan a distintos
                        espacios comerciales, manteniendo la identidad visual en
                        cada ubicación.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 text-black rounded-lg flex items-center justify-center shadow-md">
                      <BrainCircuit size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-gray-800 mb-1">
                        Visibilidad Estratégica
                      </h4>
                      <p className="text-gray-700">
                        Señalética y estructuras diseñadas para captar la
                        atención desde cualquier punto del almacén.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 text-black rounded-lg flex items-center justify-center shadow-md">
                      <Users size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-gray-800 mb-1">
                        Experiencia Inmersiva
                      </h4>
                      <p className="text-gray-700">
                        Cada stand recrea la atmósfera de la Feria del Libro,
                        invitando a los clientes a explorar y descubrir nuevos
                        títulos.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* 3. Galería del Stand en Contexto */}
        <AnimatedSection className="py-20 lg:py-28 bg-gray-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold"
              >
                Un Punto Cultural en el Corazón del Retail
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto"
              >
                Implementados en Bogotá y Antioquia, los stands atrajeron a
                entusiastas literarios y curiosos por igual, recreando la
                atmósfera de una feria del libro.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 h-[500px]">
              <motion.div
                variants={scaleIn}
                className="md:col-span-3 md:row-span-2 rounded-xl overflow-hidden shadow-lg"
              >
                <OptimizedImage
                  src="/images/filbo/filbo3.png"
                  alt="Vista frontal del stand de FILBO en Éxito"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  hoverEffect="scale"
                  useMotion
                  variants={scaleIn}
                />
              </motion.div>
              <motion.div
                variants={scaleIn}
                className="md:col-span-2 rounded-xl overflow-hidden shadow-lg"
              >
                <OptimizedImage
                  src="/images/filbo/filbo4.png"
                  alt="Vista lateral del stand con exhibición de libros"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  hoverEffect="scale"
                  useMotion
                  variants={scaleIn}
                />
              </motion.div>
              <motion.div
                variants={scaleIn}
                className="md:col-span-2 rounded-xl overflow-hidden shadow-lg"
              >
                <OptimizedImage
                  src="/images/filbo/filbo1.png"
                  alt="Vista panorámica del stand en el almacén"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  hoverEffect="scale"
                  useMotion
                  variants={scaleIn}
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
                Apoyados en nuestra planta de producción y experticia en design
                thinking, desarrollamos stands que recrean la atmósfera de una
                feria del libro en un ambiente de retail.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Users size={32} />}
                title="Alianza Estratégica"
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-yellow-500/20 hover:shadow-lg transition-shadow duration-300 border border-gray-100 h-full"
                iconClassName="flex items-center justify-center h-14 w-14 rounded-lg bg-yellow-400 text-black mb-5"
              >
                Colaboramos con Penguin Random House, Planeta y Sin Fronteras
                para unificar su presencia y potenciar su impacto.
              </FeatureCard>
              <FeatureCard
                icon={<Store size={32} />}
                title="Integración al Retail"
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-yellow-500/20 hover:shadow-lg transition-shadow duration-300 border border-gray-100 h-full"
                iconClassName="flex items-center justify-center h-14 w-14 rounded-lg bg-yellow-400 text-black mb-5"
              >
                Diseñamos stands que no solo armonizan con el ambiente de la
                tienda, sino que lo transforman en un destino cultural.
              </FeatureCard>
              <FeatureCard
                icon={<BrainCircuit size={32} />}
                title="Design Thinking Aplicado"
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-yellow-500/20 hover:shadow-lg transition-shadow duration-300 border border-gray-100 h-full"
                iconClassName="flex items-center justify-center h-14 w-14 rounded-lg bg-yellow-400 text-black mb-5"
              >
                Cada detalle fue pensado para maximizar la visibilidad y las
                ventas, culminando en un éxito notable para nuestros clientes.
              </FeatureCard>
            </div>
          </div>
        </AnimatedSection>

        {/* 5. Conclusión del Proyecto */}
        <CtaSection
          title="Éxito Literario y Comercial"
          description="Implementados en Bogotá y Antioquia, los stands atrajeron a entusiastas y curiosos, generando una experiencia enriquecedora para los visitantes y un éxito de ventas para las editoriales."
          bgClassName="bg-gray-800"
          titleClassName="text-3xl md:text-4xl font-bold text-white mt-6"
          descriptionClassName="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
        >
          <motion.div variants={fadeIn}>
            <CheckCircle className="mx-auto h-16 w-16 text-yellow-400" />
          </motion.div>
        </CtaSection>
      </main>
      <Footer />
    </div>
  );
};

export default FilboExitoPage;
