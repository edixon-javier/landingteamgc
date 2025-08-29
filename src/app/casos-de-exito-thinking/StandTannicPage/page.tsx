"use client";

import React, { useEffect, ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  Wine,
  DraftingCompass,
  Layers,
  Truck,
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
const AnimatedSection = ({ 
  children, 
  className 
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
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-800 text-amber-400 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </motion.div>
);

// --- Componente principal de la página del proyecto Stand Tannic ---
const StandTannicPage = () => {
  return (
    <div className="bg-gray-50 font-sans">
      <Header />
      <main className="text-gray-800">
        {/* 1. Hero Principal */}
        <section className="min-h-screen flex items-center bg-[#0A0907] text-white">
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
                <p className="text-lg font-semibold text-amber-300">
                  STAND TANNIC - VINO AL PARQUE
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-2">
                  Elevando la experiencia del vino: <br />
                  <span className="text-amber-400">
                    Un Reto Elegante
                  </span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-xl mx-auto lg:mx-0">
                  Un stand que no solo destacó por su diseño, sino por su funcionalidad y versatilidad, encarnando la pasión por el vino en la Feria del Vino 2023.
                </p>
              </motion.div>
              <motion.div variants={scaleIn}>
                <Image
                  src={getImagePath("/images/tanic/tannic3.png")}
                  alt="Stand Tannic diseño 3D"
                  width={800}
                  height={600}
                  className="rounded-xl shadow-2xl"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 2. De la Visión a la Realidad */}
        <AnimatedSection className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2 
                variants={fadeIn} 
                className="text-3xl md:text-4xl font-bold"
              >
                De la Visión a la Realidad
              </motion.h2>
              <motion.p 
                variants={fadeIn} 
                className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto"
              >
                Nuestro proceso nos permitió visualizar y perfeccionar el concepto, asegurando que el resultado final fuera fiel a la visión inicial de elegancia y sofisticación.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">De Maqueta a Realidad</h3>
                <div className="relative rounded-xl overflow-hidden shadow-lg w-full">
                  <ReactCompareImage
                    leftImage={getImagePath("/images/tanic/tannicv1.png")}
                    rightImage={getImagePath("/images/tanic/tannic1.png")}
                     leftImageLabel="Antes"
                    rightImageLabel="Después"
                    sliderPositionPercentage={0.3}
                    hover={true}
                    vertical={false}
                    sliderLineColor="#CD912A"
                    sliderLineWidth={3}
                    leftImageCss={{ objectFit: "contain" }}
                    rightImageCss={{ objectFit: "contain" }}
                  />
                </div>
                 <p className="text-center text-gray-500 mt-4 italic">
                  Desliza para comparar el boceto inicial con el modelo 3D
                  detallado.
                </p>
              </motion.div>
              <motion.div variants={fadeInRight}>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">El Resultado Final</h3>
                <p className="text-lg text-gray-600 mb-6">
                  El paso del diseño digital a la ejecución física se realizó con una fidelidad impresionante. Cada elemento, desde las texturas hasta la iluminación, fue recreado con precisión para lograr que el stand tuviera el mismo impacto visual que se visualizó en la fase de diseño.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-800 text-amber-400 mb-4">
                      <DraftingCompass size={32} />
                    </div>
                    <h4 className="font-bold mb-2">Precisión en el Diseño</h4>
                    <p className="text-gray-600">El modelo 3D sirvió como guía exacta para los constructores.</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-800 text-amber-400 mb-4">
                      <Layers size={32} />
                    </div>
                    <h4 className="font-bold mb-2">Materiales y Texturas</h4>
                    <p className="text-gray-600">Se seleccionaron materiales elegantes que reflejaran la identidad de la marca Tannic.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* 3. Proceso de Diseño Sofisticado */}
        <AnimatedSection className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold"
              >
                Un Proceso de Diseño Sofisticado
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto"
              >
                Cada etapa fue crucial para crear un espacio que no solo sirviera como punto de degustación, sino que también encarnara la elegancia que los entusiastas del vino esperan.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProcessCard
                icon={<DraftingCompass size={32} />}
                title="Ideación y Bocetos"
              >
                El proceso creativo comenzó con la consolidación de ideas y bocetos entre el equipo para definir la dirección del diseño.
              </ProcessCard>
              <ProcessCard
                icon={<Layers size={32} />}
                title="Render 3D y Materiales"
              >
                Creamos renders 3D y fotomontajes realistas, seleccionando cuidadosamente materiales estéticos, prácticos y reutilizables.
              </ProcessCard>
              <ProcessCard
                icon={<Truck size={32} />}
                title="Logística y Ejecución"
              >
                Se planificó minuciosamente la logística de instalación para asegurar una ejecución impecable y a tiempo para el evento.
              </ProcessCard>
            </div>
          </div>
        </AnimatedSection>

        {/* 4. Galería de la Experiencia */}
        <AnimatedSection className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2 
                variants={fadeIn} 
                className="text-3xl md:text-4xl font-bold"
              >
                Una Atmósfera para Disfrutar
              </motion.h2>
              <motion.p 
                variants={fadeIn} 
                className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto"
              >
                El stand se consolidó como un punto de encuentro para aficionados y expertos, demostrando que el buen diseño potencia la experiencia de los visitantes.
              </motion.p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <motion.div variants={scaleIn} className="col-span-2 row-span-2 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src={getImagePath("/images/tanic/tannic4.png")} 
                  alt="Vista lateral del stand Tannic en el evento" 
                  width={800}
                  height={600}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
              </motion.div>
              <motion.div variants={scaleIn} className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src={getImagePath("/images/tanic/tannic1.png")} 
                  alt="Vista frontal del stand Tannic" 
                  width={400}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
              </motion.div>
              <motion.div variants={scaleIn} className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src={getImagePath("/images/tanic/tannic3.png")} 
                  alt="Stand Tannic iluminado de noche" 
                  width={400}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
              </motion.div>
              <motion.div variants={scaleIn} className="col-span-2 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src={getImagePath("/images/tanic/tannic2.png")} 
                  alt="Vista amplia del stand Tannic en el parque" 
                  width={800}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* 5. Conclusión del Proyecto */}
        <AnimatedSection className="py-20 lg:py-28 bg-gray-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div variants={fadeIn}>
              <Wine className="mx-auto h-16 w-16 text-amber-400" />
            </motion.div>
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-white mt-6"
            >
              Un Brindis por el Buen Diseño
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
            >
              Con Tannic, cada sorbo de vino se acompañó de una atmósfera que invitaba a explorar y disfrutar, haciendo de esta feria un memorable encuentro con la cultura del vino.
            </motion.p>
          </div>
        </AnimatedSection>

      </main>
      <Footer />
    </div>
  );
};

export default StandTannicPage;
