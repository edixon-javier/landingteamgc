"use client";

import React, { useEffect, ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { useAgendaDemoScroll } from "@/hooks/useAgendaDemoScroll";

import {
  CheckCircle,
  BarChart3,
  Users,
  Zap,
  Bot,
  Clock,
  ThumbsUp,
  TrendingUp,
  Target,
} from "lucide-react";

// --- Variantes de Animación para Framer Motion ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
  },
} as const;

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// --- Componente Auxiliar para controlar animaciones en Scroll ---
const AnimatedSection = ({ children }: { children: ReactNode }) => {
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
    >
      {children}
    </motion.div>
  );
};

// --- Componente de Tarjeta de Beneficio reutilizable ---
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
    className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
  >
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </motion.div>
);

// --- Componente principal de la Landing Page ---
const CrmInsuranceLanding = () => {
  const handleAgendaDemoClick = useAgendaDemoScroll('contacto');
  return (
    <div className="bg-black">
      <Header />
      <main className="bg-white text-gray-800">
        {/* 1. Hero Principal */}
        {/* 1. Hero Principal (MODIFICADO) */}
        <section className="min-h-screen flex items-center bg-[#101828] text-white">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  Transforma tu gestión de seguros con{" "}
                  <span className="text-blue-400">
                    automatización inteligente
                  </span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
                  Un CRM diseñado para aseguradoras: automatiza renovaciones,
                  centraliza clientes y gana control total sobre tus
                  operaciones.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
                >
                  <button onClick={handleAgendaDemoClick}>
                    Agenda una Demo Estratégica
                  </button>
                </motion.button>
              </motion.div>
              <Image
                src={getImagePath(
                  "/images/dultos-consultans/dulto_dashboard_aspects.webp"
                )}
                alt="Estado anterior del proceso"
                width={800}
                height={600}
                className="rounded-lg mb-4 opacity-80"
              />
            </div>
          </div>
        </section>

        {/* 2. Sección de Beneficios Clave */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Características destacadas
                </h2>
                <p className="text-gray-600 mt-4 text-lg">
                  Todo lo que necesitas en una sola plataforma.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <FeatureCard
                  icon={<Users size={28} />}
                  title="Centralización de pólizas y clientes"
                >
                  Gestiona todas tus pólizas, clientes y documentos en un único
                  lugar accesible.
                </FeatureCard>
                <FeatureCard
                  icon={<Bot size={28} />}
                  title="Automatización de renovaciones"
                >
                  Configura alertas y procesos automáticos para no perder
                  ninguna renovación.
                </FeatureCard>
                <FeatureCard
                  icon={<Target size={28} />}
                  title="Seguimiento comercial por etapas"
                >
                  Visualiza el embudo de ventas por etapas y optimiza tu proceso
                  comercial.
                </FeatureCard>
                <FeatureCard
                  icon={<BarChart3 size={28} />}
                  title="Reportes y alertas en tiempo real"
                >
                  Obtén informes detallados y métricas clave para tomar
                  decisiones informadas.
                </FeatureCard>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* 3. Sección tipo historia o caso de uso */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">
                  ¿Cómo ayuda este CRM en el día a día?
                </h2>
                <p className="text-gray-600 mt-4 text-lg">
                  De la complejidad a la simplicidad, del caos al control.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                {/* Card: Antes */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 flex flex-col"
                >
                  <h3 className="text-2xl font-bold text-red-500 mb-4">
                    El Antes: Desorden y Retrasos
                  </h3>
                  <Image
                    src={getImagePath("/images/dultos-consultans/antes.webp")}
                    alt="Estado anterior del proceso"
                    width={800}
                    height={600}
                    className="rounded-lg mb-4 opacity-80"
                  />
                  <ul className="space-y-3 text-gray-600 mt-auto">
                    <li className="flex items-start">
                      <Clock className="w-5 h-5 mr-3 mt-1 text-red-400 flex-shrink-0" />
                      <span>
                        Hojas de cálculo interminables y desactualizadas.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="w-5 h-5 mr-3 mt-1 text-red-400 flex-shrink-0" />
                      <span>
                        Renovaciones perdidas por falta de seguimiento
                        proactivo.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 mr-3 mt-1 text-red-400 flex-shrink-0" />
                      <span>
                        Información de clientes dispersa y difícil de encontrar.
                      </span>
                    </li>
                  </ul>
                </motion.div>
                {/* Card: Después */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-500 flex flex-col"
                >
                  <h3 className="text-2xl font-bold text-green-500 mb-4">
                    El Después: Control y Cierres
                  </h3>
                  <Image
                    src={getImagePath("/images/dultos-consultans/despues.webp")}
                    alt="Estado actual optimizado"
                    width={800}
                    height={600}
                    className="rounded-lg mb-4"
                  />
                  <ul className="space-y-3 text-gray-600 mt-auto">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0" />
                      <span>
                        Control total con alertas automáticas y recordatorios.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0" />
                      <span>
                        Más cierres gracias a un seguimiento comercial efectivo.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ThumbsUp className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0" />
                      <span>
                        Equipo enfocado en vender y no en tareas
                        administrativas.
                      </span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* 4. Dashboard Preview (MODIFICADO) */}
        <section className="py-20 lg:py-28 bg-[#101828]">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Image
                    src={getImagePath(
                      "/images/dultos-consultans/dulto_dashboard_aspects.webp"
                    )}
                    alt="Dashboard con aspectos destacados"
                    width={1200}
                    height={850}
                    className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </motion.div>
                <motion.div variants={fadeIn} className="lg:order-first">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Un dashboard diseñado para la acción
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    Visualiza toda la información crítica de un vistazo. Nuestra
                    interfaz intuitiva te permite pasar menos tiempo buscando y
                    más tiempo actuando.
                  </p>
                  <ul className="mt-8 space-y-4">
                    <li className="flex items-start text-lg">
                      <CheckCircle className="w-6 h-6 mr-3 text-blue-400 mt-1 flex-shrink-0" />
                      <div className="text-gray-300">
                        <span className="font-semibold text-white">
                          Formularios inteligentes
                        </span>
                        <br />
                        Captura datos de pólizas y clientes sin esfuerzo.
                      </div>
                    </li>
                    <li className="flex items-start text-lg">
                      <CheckCircle className="w-6 h-6 mr-3 text-blue-400 mt-1 flex-shrink-0" />
                      <div className="text-gray-300">
                        <span className="font-semibold text-white">
                          Visualización por etapas comerciales
                        </span>
                        <br />
                        Arrastra y suelta oportunidades en tu embudo.
                      </div>
                    </li>
                    <li className="flex items-start text-lg">
                      <CheckCircle className="w-6 h-6 mr-3 text-blue-400 mt-1 flex-shrink-0" />
                      <div className="text-gray-300">
                        <span className="font-semibold text-white">
                          Integración con bases de datos y agentes
                        </span>
                        <br />
                        Conecta tus sistemas actuales fácilmente.
                      </div>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* 5. Testimonios o resultados esperados (MODIFICADO) */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Resultados que transforman negocios
              </h2>
              <p className="text-gray-600 mt-4 text-lg">
                Nuestros clientes experimentan mejoras medibles desde el primer
                día.
              </p>
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  variants={fadeIn}
                  className="bg-white p-8 rounded-xl shadow-lg"
                >
                  <span
                    className="text-5xl"
                    role="img"
                    aria-label="Cohete espacial"
                  >
                    🚀
                  </span>
                  <p className="text-4xl lg:text-5xl font-extrabold text-blue-600 mt-4">
                    +30%
                  </p>
                  <p className="text-xl font-semibold text-gray-700 mt-2">
                    eficiencia operativa
                  </p>
                </motion.div>
                <motion.div
                  variants={fadeIn}
                  className="bg-white p-8 rounded-xl shadow-lg"
                >
                  <span
                    className="text-5xl"
                    role="img"
                    aria-label="Maletín de negocios"
                  >
                    💼
                  </span>
                  <p className="text-4xl lg:text-5xl font-extrabold text-blue-600 mt-4">
                    +45%
                  </p>
                  <p className="text-xl font-semibold text-gray-700 mt-2">
                    de cierres comerciales
                  </p>
                </motion.div>
                <motion.div
                  variants={fadeIn}
                  className="bg-white p-8 rounded-xl shadow-lg"
                >
                  <span
                    className="text-5xl"
                    role="img"
                    aria-label="Escudo de seguridad"
                  >
                    🛡️
                  </span>
                  <p className="text-4xl lg:text-5xl font-extrabold text-blue-600 mt-4">
                    100%
                  </p>
                  <p className="text-xl font-semibold text-gray-700 mt-2">
                    trazabilidad en auditorías
                  </p>
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
      </main>
      <Footer />
    </div>
  );
};

export default CrmInsuranceLanding;
