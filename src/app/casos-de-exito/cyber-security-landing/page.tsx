"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BrainCircuit,
  FileCheck2,
  ClipboardList,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { useAgendaDemoScroll } from "@/hooks/useAgendaDemoScroll";
import {
  fadeIn,
  fadeInLeft,
  scaleIn,
  staggerContainer
} from '@/animations/variants';
import { 
  AnimatedSection, 
  OptimizedImage
} from '@/components/shared';

// --- Tarjeta de Solución ---
const SolutionCard = ({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) => (
  <motion.div variants={fadeIn}>
    <div className="flex items-center text-emerald-600 mb-3">
      {icon}
      <h3 className="ml-3 text-xl font-bold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600">{children}</p>
  </motion.div>
);

// --- Landing Page Principal ---
const CyberSecurityLanding = () => {
  const handleAgendaDemoClick = useAgendaDemoScroll("contacto");

  return (
    <div className="bg-gray-900 font-sans">
      <Header />

      {/* 1. Hero Principal (Fondo oscuro principal) */}
      <section className="min-h-screen flex items-center bg-[#101828] text-white relative overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 bg-grid-gray-700/20 [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
        <div className="container mx-auto px-6 py-12 z-10">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Mide, Visualiza y Domina tu Postura de{" "}
                <span className="text-emerald-400">Ciberseguridad</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
                Nuestra plataforma automatiza la evaluación de defensas contra
                ransomware, transformando datos en una hoja de ruta estratégica
                y clara.
              </p>
              <motion.button
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAgendaDemoClick}
                className="mt-8 px-8 py-4 bg-emerald-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-emerald-700 transition-all duration-300"
              >
                Agenda una Demo Estratégica
              </motion.button>
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="flex justify-center items-center"
            >
              <OptimizedImage
                src="/images/suvey_cibersegurity/screenshot-2025-07-08-093506.png"
                alt="Dashboard con aspectos destacados"
                width={1200}
                height={850}
                className="rounded-xl"
                priority
                hoverEffect="scale"
                withShadow
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Problema / Solución (Fondo gris claro para contraste) */}
      <section className="py-20 lg:py-28 bg-slate-50 text-gray-900">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold"
              >
                ¿Tu estrategia de seguridad es proactiva o reactiva?
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-gray-600 mt-4 text-lg"
              >
                Dejamos atrás las suposiciones para dar paso a la inteligencia
                accionable.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <SolutionCard
                icon={<BrainCircuit size={28} />}
                title="Análisis Inteligente"
              >
                Evaluamos la madurez real de tus controles basándonos en el
                marco RDI y MITRE ATT&CK.
              </SolutionCard>
              <SolutionCard
                icon={<ShieldCheck size={28} />}
                title="Defensa Predictiva"
              >
                Identificamos brechas y vulnerabilidades antes de que sean
                explotadas, no después.
              </SolutionCard>
              <SolutionCard
                icon={<FileCheck2 size={28} />}
                title="Reportes Estratégicos"
              >
                Generamos informes claros para C-Levels y equipos técnicos,
                alineando a toda la organización.
              </SolutionCard>
              <SolutionCard
                icon={<ClipboardList size={28} />}
                title="Priorización Basada en Riesgo"
              >
                Te decimos exactamente dónde invertir tus recursos para el
                máximo impacto en seguridad.
              </SolutionCard>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. Cómo Funciona: Antes y Después (Fondo blanco para nueva separación) */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold text-gray-900"
              >
                Del Caos de Datos a la Claridad Estratégica
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-gray-600 mt-4 text-lg"
              >
                Así transformamos la gestión de ciberseguridad.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-amber-500 h-full"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Auditorías Tradicionales
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 mr-3 mt-1 text-amber-500 flex-shrink-0" />
                    <span>
                      Procesos manuales, lentos y propensos a errores.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 mr-3 mt-1 text-amber-500 flex-shrink-0" />
                    <span>
                      Falta de contexto sobre el impacto real de las amenazas.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 mr-3 mt-1 text-amber-500 flex-shrink-0" />
                    <span>
                      Resultados estáticos que quedan obsoletos rápidamente.
                    </span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="hidden lg:flex justify-center items-center text-gray-300"
              >
                <ArrowRight size={60} />
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-xl shadow-xl p-8 border-l-4 border-emerald-500 h-full"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Plataforma Inteligente
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-1 text-emerald-500 flex-shrink-0" />
                    <span>
                      Visibilidad continua y automatizada de tu postura
                      defensiva.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-1 text-emerald-500 flex-shrink-0" />
                    <span>
                      Acciones priorizadas basadas en datos y riesgo real.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-1 text-emerald-500 flex-shrink-0" />
                    <span>
                      Decisiones ágiles y estratégicas para anticipar ataques.
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. Dashboard Preview (Vuelve a fondo oscuro) */}
      <section className="py-20 lg:py-28 bg-[#101828]">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeIn} className="lg:order-last">
                <OptimizedImage
                  src="/images/suvey_cibersegurity/screenshot-2025-07-08-093603.png"
                  alt="Dashboard con aspectos destacados"
                  width={1200}
                  height={850}
                  className="rounded-xl"
                  hoverEffect="scale"
                  withShadow
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Visualiza el Campo de Batalla Digital
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  Nuestra interfaz convierte la complejidad en claridad,
                  permitiéndote ver exactamente dónde eres fuerte y dónde eres
                  vulnerable.
                </p>
                <ul className="mt-8 space-y-4 text-gray-300">
                  <li className="flex items-start text-lg">
                    <CheckCircle className="w-6 h-6 mr-3 text-emerald-400 mt-1 flex-shrink-0" />
                    <span>
                      Mapeo de madurez dinámico por cada técnica de ataque.
                    </span>
                  </li>
                  <li className="flex items-start text-lg">
                    <CheckCircle className="w-6 h-6 mr-3 text-emerald-400 mt-1 flex-shrink-0" />
                    <span>
                      Análisis de brechas que te muestra el siguiente paso
                      lógico.
                    </span>
                  </li>
                  <li className="flex items-start text-lg">
                    <CheckCircle className="w-6 h-6 mr-3 text-emerald-400 mt-1 flex-shrink-0" />
                    <span>
                      Simulaciones de impacto para justificar inversiones.
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 5. Diferenciadores Clave */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Una Ventaja Estratégica, No Solo una Herramienta Más
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
              Combinamos inteligencia de amenazas, automatización y un enfoque
              especializado para darte una defensa sin precedentes.
            </p>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <motion.div
                variants={fadeIn}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Integración de Frameworks
                </h3>
                <p className="text-gray-600">
                  Conectamos los puntos entre los controles internos, el marco
                  RDI y las tácticas de MITRE ATT&CK.
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Automatización Completa
                </h3>
                <p className="text-gray-600">
                  Desde la recolección de datos hasta la generación del informe
                  ejecutivo, eliminamos el trabajo manual.
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Enfoque Especializado
                </h3>
                <p className="text-gray-600">
                  No somos una plataforma de riesgo genérica. Estamos 100%
                  enfocados en la amenaza del ransomware.
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 6. Llamado a la acción final */}
      <section className="bg-gradient-to-b from-slate-50 to-[#101828]">
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
                onClick={handleAgendaDemoClick}
                className="mt-8 px-10 py-4 bg-emerald-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-emerald-700 transition-all duration-300"
              >
                Agenda una Demo Estratégica
              </motion.button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CyberSecurityLanding;