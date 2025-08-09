// components/pages/PrhLanding.tsx

"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Database, FileText, Truck, FileX2, Clock, EyeOff } from "lucide-react";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { getImagePath } from "@/lib/utils";

// --- Animación y Componentes Auxiliares ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

const AnimatedSection = ({ children }: { children: ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  useEffect(() => {
    if (inView) controls.start("visible");
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

// --- Landing Page Principal ---
const PrhLanding = () => {
  const [activeTab, setActiveTab] = useState("campaigns");

  const tabContent = {
    campaigns: {
      icon: <Database className="w-8 h-8 mr-4 text-indigo-600" />,
      title: "Gestión de Campañas y Productos",
      description:
        "Crea y administra tus campañas comerciales desde un solo lugar. Asocia productos, clientes, zonas y asesores con facilidad, manteniendo una base de datos centralizada y libre de errores.",
      image: "/images/prh-tab-campaigns.png",
    },
    pdf: {
      icon: <FileText className="w-8 h-8 mr-4 text-indigo-600" />,
      title: "Generación de Documentos PDF",
      description:
        "Automatiza la creación de remisiones, cotizaciones y rótulos. Nuestra plataforma toma los datos de tus campañas y genera documentos profesionales y estandarizados en segundos.",
      image: "/images/prh-tab-pdf.png",
    },
    deliveries: {
      icon: <Truck className="w-8 h-8 mr-4 text-indigo-600" />,
      title: "Control de Entregas y Remisiones",
      description:
        "Lleva un seguimiento preciso del estado de cada entrega. Registra la recepción, gestiona las remisiones asociadas y mantén una trazabilidad completa de tu operación logística.",
      image: "/images/prh-tab-deliveries.png",
    },
  };

  return (
    <div className="bg-[#F9FAFB] font-sans text-slate-800">
      <Header />
      {/* 1. Hero Principal */}
      <section className="text-center py-20 lg:py-32 bg-[#101828] text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-100 leading-tight"
            >
              Tu Centro de Mando para la <br />
              <span className="text-indigo-400">Gestión Comercial</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto"
            >
              Desde la campaña inicial hasta la entrega final, nuestra
              plataforma integra tus procesos para darte control, eficiencia y
              precisión.
            </motion.p>
            <motion.div variants={fadeIn}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-4 bg-indigo-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300"
              >
                Solicita una Demostración
              </motion.button>
            </motion.div>
            
          </motion.div>
        </div>
      </section>

      {/* 2. Sección de Problemas */}
      <section className="py-20 lg:py-28 bg-[#F9FAFB]">
        <AnimatedSection>
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-slate-900"
            >
              Di adiós a los dolores de cabeza operativos
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto"
            >
              La gestión manual es el enemigo silencioso de la productividad.
              Nuestra plataforma ataca los problemas de raíz.
            </motion.p>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div variants={fadeIn} className="p-8">
                <FileX2 className="w-12 h-12 mx-auto text-slate-400" />
                <h3 className="mt-4 text-xl font-bold">Errores Costosos</h3>
                <p className="mt-2 text-slate-600">
                  Documentos con datos incorrectos, órdenes mal generadas y
                  falta de consistencia que impactan tu rentabilidad.
                </p>
              </motion.div>
              <motion.div variants={fadeIn} className="p-8">
                <Clock className="w-12 h-12 mx-auto text-slate-400" />
                <h3 className="mt-4 text-xl font-bold">Tiempo Perdido</h3>
                <p className="mt-2 text-slate-600">
                  Horas de trabajo manual en tareas repetitivas como crear PDFs,
                  verificar datos y consolidar reportes.
                </p>
              </motion.div>
              <motion.div variants={fadeIn} className="p-8">
                <EyeOff className="w-12 h-12 mx-auto text-slate-400" />
                <h3 className="mt-4 text-xl font-bold">Falta de Visibilidad</h3>
                <p className="mt-2 text-slate-600">
                  Desconocimiento del estado real de las entregas, campañas y el
                  rendimiento general de tu equipo.
                </p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 3. Feature Tabs */}
      <section className="py-20 lg:py-28 bg-white">
        <AnimatedSection>
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold text-slate-900"
              >
                Capacidades que transforman tu flujo de trabajo
              </motion.h2>
            </div>
            <motion.div
              variants={fadeIn}
              className="flex justify-center border-b border-slate-200"
            >
              {Object.keys(tabContent).map((tabId) => (
                <button
                  key={tabId}
                  onClick={() => setActiveTab(tabId)}
                  className={`px-4 py-3 text-lg font-semibold transition-colors duration-300 ${
                    activeTab === tabId
                      ? "border-b-2 border-indigo-600 text-indigo-600"
                      : "text-slate-500 hover:text-indigo-600"
                  }`}
                >
                  {tabContent[tabId].title.split(" y ")[0]}
                </button>
              ))}
            </motion.div>
            <div className="mt-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        {tabContent[activeTab].icon}
                        <h3 className="text-2xl font-bold text-slate-900">
                          {tabContent[activeTab].title}
                        </h3>
                      </div>
                      <p className="text-lg text-slate-600">
                        {tabContent[activeTab].description}
                      </p>
                    </div>
                    <div>
                     <Image
                                  src={getImagePath(
                                    "/images/rg7_prh/screenshot-2025-07-08-115104.png"
                                  )}
                                  alt="Dashboard con aspectos destacados"
                                  width={1200}
                                  height={850}
                                  className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                                  priority
                                />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </AnimatedSection>
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
                  Agenda una Demo Estratégica
                </motion.button>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrhLanding;
