"use client";

import React, { useEffect, ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  Users,
  MapPin,
  CheckCircle,
  BrainCircuit,
  Construction,
} from "lucide-react";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { getImagePath } from "@/lib/utils";
import ReactCompareImage from "react-compare-image";

import {
  fadeIn,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer
} from '@/animations/variants';

// --- Componente Auxiliar para controlar animaciones en Scroll ---
const AnimatedSection = ({ children, className }: { children: ReactNode, className?: string }) => {
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
    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center"
  >
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 text-purple-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </motion.div>
);

// --- Componente principal de la página del proyecto Showroom WiZ ---
const ShowroomWizPage = () => {

  return (
    <div className="bg-gray-50 font-sans">
      <Header />
      <main className="text-gray-800">
        {/* 1. Hero Principal - MODIFICADO */}
        <section className="min-h-screen flex items-center bg-[#101828] text-white">
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
                <p className="text-lg font-semibold text-purple-300">
                  SHOWROOM WiZ - SIGNIFY
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-2">
                  El Hogar Ideal con <br />
                  <span className="text-purple-400">
                    Iluminación Inteligente
                  </span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
                  Un proyecto que transforma ideas en experiencias tangibles,
                  reinventando el espacio habitable a través de la luz y la
                  tecnología.
                </p>
              </motion.div>
              <motion.div variants={scaleIn}>
                <Image
                  src={getImagePath("/images/wiz/wizv1.png")}
                  alt="Showroom WiZ finalizado"
                  width={800}
                  height={600}
                  className="rounded-xl shadow-2xl"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 2. Introducción del Proyecto */}
        <AnimatedSection className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  De la Idea a la Realidad
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Este proyecto para WiZ, líder global en iluminación
                  inteligente, es testimonio de nuestra capacidad para convertir
                  un concepto en una experiencia inmersiva. Inspirados por la
                  metodología <strong>Design Thinking</strong>, nuestro equipo
                  diseñó un showroom que no solo muestra un producto, sino que
                  redefine la vida en el hogar.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center">
                    <Users className="w-8 h-8 mr-3 text-purple-500" />
                    <div>
                      <p className="font-bold">Cliente</p>
                      <p className="text-gray-600">Signify</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-8 h-8 mr-3 text-purple-500" />
                    <div>
                      <p className="font-bold">Ubicación</p>
                      <p className="text-gray-600">
                        Homecenter Calle 80, Bogotá
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={scaleIn}
                className="w-full h-auto rounded-xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={getImagePath("/images/wiz/showroom6.png")}
                  alt="Showroom WiZ en funcionamiento"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* 3. El Proceso Creativo */}
        <AnimatedSection className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold"
              >
                Nuestro Proceso Creativo
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto"
              >
                Cada gran proyecto comienza con una visión clara y un proceso
                meticuloso. Así es como lo hicimos realidad.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProcessCard
                icon={<BrainCircuit size={32} />}
                title="Conceptualización"
              >
                El proceso comenzó con bocetos detallados y la aplicación de
                Design Thinking para entender las necesidades y crear una
                solución impactante.
              </ProcessCard>
              <ProcessCard
                icon={<Construction size={32} />}
                title="Diseño y Construcción"
              >
                Evolucionamos a modelos 3D realistas y fotomontajes para afinar
                cada detalle antes de la construcción y la instalación final en
                el sitio.
              </ProcessCard>
              <ProcessCard
                icon={<CheckCircle size={32} />}
                title="Aprobación y Ejecución"
              >
                Tras un riguroso proceso de revisión por ejecutivos en Colombia
                y Holanda, el proyecto recibió luz verde para su implementación.
              </ProcessCard>
            </div>
          </div>
        </AnimatedSection>

        {/* 4. De Prototipo a Realidad */}
        <AnimatedSection className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold"
              >
                Del Prototipo a la Realidad
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto"
              >
                Visualizar el resultado final fue clave. Los prototipos 3D nos
                permitieron alinear la visión con el cliente y el equipo de
                construcción.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Prototipo */}
              <motion.div variants={fadeInLeft}>
                <h3 className="text-2xl font-bold text-center mb-4">
                  El Diseño 3D
                </h3>
                <div className="relative rounded-xl overflow-hidden shadow-lg h-[350px]">
                  <ReactCompareImage
                    leftImage={getImagePath("/images/wiz/wizv2.png")}
                    rightImage={getImagePath("/images/wiz/wizv1.png")}
                    leftImageLabel="Antes"
                    rightImageLabel="Después"
                    sliderLineWidth={3}
                    sliderPositionPercentage={0.3}
                    sliderLineColor="#7c3aed"
                    hover={true}
                  />
                </div>
                 <p className="text-center text-gray-500 mt-4 italic">
                  Desliza para comparar el boceto inicial con el modelo 3D
                  detallado.
                </p>
              </motion.div>
              {/* Realidad */}
              <motion.div variants={fadeInRight}>
                <h3 className="text-2xl font-bold text-center mb-4">
                  El Espacio Final
                </h3>
                <div className="relative rounded-xl overflow-hidden shadow-lg h-[350px]">
                  <ReactCompareImage
                    leftImage={getImagePath("/images/wiz/wizv1.png")}
                    rightImage={getImagePath("/images/wiz/showroom5.png")}
                    leftImageLabel="Antes"
                    rightImageLabel="Después"
                    sliderLineWidth={3}
                    sliderLineColor="#7c3aed"
                    hover={true}
                  />
                </div>
                 <p className="text-center text-gray-500 mt-4 italic">
                  Desliza para comparar el boceto inicial con el modelo 3D
                  detallado.
                </p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* 5. Galería del Proceso de Construcción */}
        <AnimatedSection className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold"
              >
                Construyendo la Experiencia
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto"
              >
                Visitas colaborativas al sitio aseguraron que cada idea se
                solidificara en soluciones viables e impactantes.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                variants={scaleIn}
                className="rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={getImagePath("/images/wiz/showroom1.png")}
                  alt="Construcción del showroom 1"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                variants={scaleIn}
                className="rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={getImagePath("/images/wiz/showroom2.png")}
                  alt="Construcción del showroom 2"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                variants={scaleIn}
                className="rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={getImagePath("/images/wiz/showroom3.png")}
                  alt="Construcción del showroom 3"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* 6. La Experiencia Final */}
        <AnimatedSection className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInRight} className="lg:order-last">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Un Viaje a Través de la Luz
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Este showroom no es una simple exhibición, sino una simulación
                  de un apartamento minimalista que demuestra cómo la tecnología
                  WiZ convierte un espacio ordinario en un ambiente vibrante y
                  acogedor.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-purple-500 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Control Total:</strong> La iluminación se
                      personaliza mediante comandos de voz y una aplicación
                      intuitiva.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-purple-500 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Ambientes Dinámicos:</strong> Los usuarios pueden
                      transformar su entorno al instante, adecuándolo a su
                      estado de ánimo o necesidad.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-purple-500 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Creador de Experiencias:</strong> Demostramos que
                      la luz es más que funcional; es una creadora de
                      atmósferas.
                    </span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                variants={scaleIn}
                className="w-full h-auto rounded-xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={getImagePath("/images/wiz/showroom6.png")}
                  alt="Detalle del showroom final"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer/>
    </div>
  );
};

export default ShowroomWizPage;
