// components/pages/PrhLanding.tsx

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Database, FileText, Truck, FileX2, Clock, EyeOff } from "lucide-react";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { getImagePath } from "@/lib/utils";
import { useAgendaDemoScroll } from "@/hooks/useAgendaDemoScroll";

import { fadeIn } from '@/animations/variants';

import { AnimatedSection } from '@/components/ui/AnimatedSection';

// --- Landing Page Principal ---

type TabId = "campaigns" | "pdf" | "deliveries";
const tabContent: Record<TabId, {
  icon: React.ReactElement;
  title: string;
  description: string;
  image: string;
}> = {
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

const PrhLanding = () => {
  const [activeTab, setActiveTab] = useState<TabId>("campaigns");
  const tabIds: TabId[] = ["campaigns", "pdf", "deliveries"];
  

  const handleAgendaDemoClick = useAgendaDemoScroll('contacto');

  return (
    <div className="bg-[#F9FAFB] font-sans text-slate-800">
      <Header />
      {/* 1. Hero Principal */}
      {/* 1. Hero Principal (Nuevo Diseño) */}
      <section className="min-h-screen flex items-center bg-[#101828] text-white relative overflow-hidden">
        {/* Fondo decorativo de rejilla */}
        <div className="absolute inset-0 bg-grid-slate-700/20 [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>

        <div className="container mx-auto px-6 py-20 lg:py-0 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Columna de Texto */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-100 leading-tight">
                Tu Centro de Mando para la <br />
                <span className="text-indigo-400">Gestión Comercial</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0">
                Desde la campaña inicial hasta la entrega final, nuestra
                plataforma integra tus procesos para darte control, eficiencia y
                precisión.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-4 bg-indigo-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300"
                onClick={handleAgendaDemoClick}
              >
                Agenda una Demo Estratégica
              </motion.button>
            </motion.div>

            {/* Columna de la Imagen */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex justify-center items-center"
            >
              <Image
                src={getImagePath(
                  "/images/rg7_prh/dashboard.png"
                )}
                alt="Dashboard de Gestión Comercial"
                width={1200}
                height={850}
                className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                priority
              />
            </motion.div>

          </div>
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

    {/* 3. Capacidades Clave (Diseño con Acordeón) */}
      <section className="py-20 lg:py-28 bg-white">
        <AnimatedSection>
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold text-slate-900"
              >
                Capacidades que transforman tu flujo de trabajo
              </motion.h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Columna de la Imagen */}
              <motion.div variants={fadeIn} className="mt-2">
                <Image
                  src={getImagePath(
                    "/images/rg7_prh/entregas.webp"
                  )}
                  alt="Dashboard de Gestión Comercial"
                  width={1200}
                  height={850}
                  className=""
                  priority
                />
              </motion.div>

              {/* Columna del Acordeón */}
              <motion.div variants={fadeIn} className="space-y-4">
                {tabIds.map((tabId) => {
                  const feature = tabContent[tabId];
                  const isActive = activeTab === tabId;
                  return (
                    <div key={tabId} className="border-b border-slate-200 last:border-b-0">
                      <button
                        onClick={() => setActiveTab(tabId)}
                        className="w-full text-left py-4 flex justify-between items-center"
                      >
                        <div className="flex items-center">
                          {feature.icon}
                          <h3 className="text-xl font-bold text-slate-800">
                            {feature.title}
                          </h3>
                        </div>
                        <motion.div animate={{ rotate: isActive ? 180 : 0 }}>
                          <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="pb-5 pr-8 text-lg text-slate-600">
                              {feature.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
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
                  onClick={handleAgendaDemoClick}
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
