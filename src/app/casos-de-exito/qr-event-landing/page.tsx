"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
} from "framer-motion";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import {
  Target,
  Database,
  Truck,
  LayoutDashboard,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { fadeInUp } from "@/animations/variants";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// --- DATA FROM THE ORIGINAL APP ---
const pillars = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Estrategia de Canal y Activación",
    description:
      "Desarrollamos una campaña de incentivos phygital diseñada para penetrar el canal de distribución, fortaleciendo la relación con 280 socios comerciales y sus clientes.",
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Operaciones y Logística Nacional",
    description:
      "Orquestamos la totalidad de la cadena logística, desde el sourcing y branding de 5,600 productos hasta la entrega sincronizada en 8 zonas geográficas del país.",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Plataforma de Data Intelligence",
    description:
      "Implementamos una solución de captura de datos en punto de venta vía códigos QR, convirtiendo cada interacción de cliente en un datapoint accionable para el análisis de mercado.",
  },
  {
    icon: <LayoutDashboard className="w-8 h-8" />,
    title: "Business Intelligence y Reporting",
    description:
      "Tradujimos los datos brutos en insights estratégicos a través de dashboards en Power BI, identificando patrones de consumo y optimizando la futura asignación de recursos.",
  },
];

const timelineData = [
  {
    phase: 1,
    title: "Conceptualización y Estrategia",
    description:
      "Fase 1: Inmersión y análisis. Se definieron los objetivos de negocio, KPIs primarios (tasa de canje, calidad de datos) y el alcance geográfico-operacional del programa.",
    imageUrl: getImagePath("/images/QrEvent/reunion.png"),
    altText: "Equipo de ConsultansGC en sesión de estrategia.",
    objectFit: "cover",
    objectPosition: "center",
    priority: true,
  },
  {
    phase: 2,
    title: "Diseño de Activos y Brandeo",
    description:
      'Fase 2: Diseño de la experiencia. Se curó el catálogo de 20 productos por kit y se diseñó todo el material de punto de venta, incluyendo el sistema "Raspa y Gana".',
    imageUrl: getImagePath("/images/QrEvent/diseno.png"),
    altText: "Productos promocionales brandeados.",
    objectFit: "fill",
    objectPosition: "center",
    priority: false,
  },
  {
    phase: 3,
    title: "Desarrollo de la Plataforma Tecnológica",
    description:
      "Fase 3: Construcción del motor de datos. Se desarrolló y probó la plataforma de captura de información, optimizando el formulario para una experiencia de usuario móvil fluida y segura.",
    imageUrl: getImagePath("/images/QrEvent/form_phone.webp"),
    altText: "Interfaz de formulario en un smartphone.",
    objectFit: "contain",
    objectPosition: "center",
    priority: false,
  },
  {
    phase: 4,
    title: "Logística y Distribución",
    description:
      "Fase 4: Planificación operativa. Se coordinó el ensamblaje de 280 kits y se diseñó la matriz de distribución nacional para garantizar la entrega puntual.",
    imageUrl: getImagePath("/images/QrEvent/logistica.png"),
    altText: "Centro de distribución con paquetes listos.",
    objectFit: "cover",
    objectPosition: "center top",
    priority: false,
  },
  {
    phase: 5,
    title: "Capacitación y Lanzamiento",
    description:
      "Fase 5: Habilitación del canal. Se ejecutaron programas de formación para los equipos comerciales y gerentes de tienda, asegurando la adopción y correcta implementación.",
    imageUrl: getImagePath("/images/QrEvent/profesional_form.png"),
    altText: "Sesión de capacitación corporativa.",
    objectFit: "content",
    objectPosition: "center",
    priority: false,
  },
  {
    phase: 6,
    title: "Activación y Monitoreo en Tiempo Real",
    description:
      "Fase 6: Go-live. Se lanzó la campaña en los 280 puntos de venta. El progreso fue monitoreado en tiempo real a través de nuestro dashboard de control.",
    imageUrl: getImagePath("/images/QrEvent/dashboard.png"),
    altText: "Cliente interactuando con material POP.",
    objectFit: "contain",
    objectPosition: "center",
    priority: false,
  },
  {
    phase: 7,
    title: "Análisis de Datos y Reporting Ejecutivo",
    description:
      "Fase 7: Cierre y entrega de valor. Se procesaron y analizaron los datos para generar un informe ejecutivo en Power BI con insights y recomendaciones estratégicas.",
    imageUrl: getImagePath("/images/QrEvent/powerbi.png"),
    altText: "Dashboard de Power BI con resultados.",
    objectFit: "contain",
    objectPosition: "center",
    priority: false,
  },
];

const galleryImages = [
  {
    src: getImagePath("/images/QrEvent/galeria1.png"),
    alt: "Caja de kit promocional de Corteva abierta con productos",
    title: "Kits Promocionales",
    objectFit: "content",
    objectPosition: "center",
    priority: true,
    aspectRatio: "square", // square, portrait, landscape
  },
  {
    src: getImagePath("/images/QrEvent/galeria2.png"),
    alt: "Productos de Corteva con branding de la campaña",
    title: "Productos Brandeados",
    objectFit: "cover",
    objectPosition: "center",
    priority: true,
    aspectRatio: "square",
  },
  {
    src: getImagePath("/images/QrEvent/galeria3.png"),
    alt: "Afiche de Raspa y Gana en un almacén agrícola",
    title: "Material P.O.P",
    objectFit: "cover",
    objectPosition: "center",
    priority: false,
    aspectRatio: "square",
  },
  {
    src: getImagePath("/images/QrEvent/galeria4.png"),
    alt: "Detalle de un producto brandeado Corteva",
    title: "Branding de Producto",
    objectFit: "cover",
    objectPosition: "center",
    priority: false,
    aspectRatio: "square",
  },
  {
    src: getImagePath("/images/QrEvent/galeria5.png"),
    alt: "Asesor explicando la campaña a un cliente",
    title: "Rediseno del logo de Corteva",
    objectFit: "cover",
    objectPosition: "center",
    priority: false,
    aspectRatio: "square",
  },
  {
    src: getImagePath("/images/QrEvent/galeria6.png"),
    alt: "Pila de kits listos para ser despachados",
    title: "Danglers para punto de venta",
    objectFit: "cover",
    objectPosition: "center",
    priority: false,
    aspectRatio: "square",
  },
];

const scratchSteps = [
  {
    num: 1,
    title: "Compra",
    desc: "El cliente realiza una compra de productos Corteva participantes.",
  },
  {
    num: 2,
    title: "Raspa",
    desc: 'Recibe una tarjeta "Raspa y Gana" para descubrir el código QR.',
  },
  {
    num: 3,
    title: "Escanea QR",
    desc: "Usa su celular para escanear el código y acceder al formulario.",
  },
  {
    num: 4,
    title: "Completa Formulario",
    desc: "Ingresa sus datos para registrar su participación y redimir su premio.",
  },
  {
    num: 5,
    title: "Entrega del Premio",
    desc: "El asesor valida el registro y entrega el premio instantáneo.",
  },
];

const dashboardImages = [
  {
    src: getImagePath("/images/QrEvent/powerbi1.png"),
    caption:
      "Dashboard General: Informe de gestión del programa Territorio Corteva en Colombia al 31 de agosto 2024, mostrando zonas cubiertas, registros totales, almacenes impactados y municipios alcanzados.",
    objectFit: "fill",
    objectPosition: "center",
    priority: true,
  },
  {
    src: getImagePath("/images/QrEvent/powerbi2.png"),
    caption:
      "Distribución de registros por zona y municipio: Huila lidera con mayor participación, seguido de Cundinamarca y Nariño. Se muestran gráficos comparativos y un mapa georreferenciado de ventas en Colombia.",
    objectFit: "fill",
    objectPosition: "center",
    priority: false,
  },
  {
    src: getImagePath("/images/QrEvent/powerbi3.png"),
    caption:
      "Evolución de registros por zona y mes: comparación mensual de mayo a agosto 2024, destacando el crecimiento en Huila y Cundinamarca. Incluye gráfico de tendencias y distribución acumulada por regiones.",
    objectFit: "fill",
    objectPosition: "center",
    priority: false,
  },
  {
    src: getImagePath("/images/QrEvent/powerbi4.png"),
    caption:
      "Resumen de visitas realizadas a 31 de agosto 2024 en localidades clave: Terra Negra, Cota, Tunja y Pamplona.",
    objectFit: "fill",
    objectPosition: "center",
    priority: false,
  },
  {
    src: getImagePath("/images/QrEvent/powerbi5.png"),
    caption:
      "Visita a Tierra Negra (Cundinamarca): registro fotográfico de Agro Ruiz S.A.S., mostrando fachada, interior del local, productos en exhibición, personal y material promocional en punto de venta.",
    objectFit: "fill",
    objectPosition: "center",
    priority: false,
  },
  {
    src: getImagePath("/images/QrEvent/powerbi6.png"),
    caption:
      "Visita a Tunja (Boyacá): registro de puntos de venta agrícolas, mostrando exhibiciones de fertilizantes, promociones de productos, estanterías organizadas y material visual de campañas comerciales.",
    objectFit: "fill",
    objectPosition: "center",
    priority: false,
  },
  {
    src: getImagePath("/images/QrEvent/powerbi7.png"),
    caption:
      "Activación en Pamplona, Santanderes: punto de venta Agropecuaria La Séptima con visibilidad de material promocional 'Raspa y Gana con Territorio Corteva', incentivando la compra de productos y la participación en dinámicas comerciales.",
    objectFit: "fill",
    objectPosition: "center",
    priority: false,
  },
  {
    src: getImagePath("/images/QrEvent/powerbi8.png"),
    caption:
      "Registro de facturas: total de 514 tickets ingresados en la campaña, consolidando la participación de distribuidores y clientes en Territorio Corteva Colombia.",
    objectFit: "fill",
    objectPosition: "center",
    priority: false,
  },
  {
    src: getImagePath("/images/QrEvent/powerbi9.png"),
    caption:
      "Consolidado de Registro de Facturas: evidencias fotográficas de facturas físicas de insumos agrícolas en diferentes puntos de venta, validando compras y participación en el programa Territorio Corteva. Total acumulado: 514 registros/tickets.",
    objectFit: "fill",
    objectPosition: "center",
    priority: false,
  },
  {
    src: getImagePath("/images/QrEvent/powerbi10.png"),
    caption:
      "Tierra Negra – Registro de Facturas: recopilación de comprobantes de compra en diferentes agropecuarias y almacenes agrícolas (Coagrohuila, Agrover, Campo Z.G, entre otros). Evidencias de transacciones validadas dentro del programa Territorio Corteva. Total consolidado: 514 registros/tickets.",
    objectFit: "fill",
    objectPosition: "center",
    priority: false,
  },
  {
    src: getImagePath("/images/QrEvent/powerbi11.png"),
    caption:
      "Informe de gestión del programa Territorio Corteva en Colombia al 31 de agosto 2024",
    objectFit: "fill",
    objectPosition: "center",
    priority: false,
  },
];

// --- HELPER COMPONENTS ---
const AnimatedCounter: React.FC<{ value: number; label: string }> = ({
  value,
  label,
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Intl.NumberFormat("es-CO").format(Math.round(latest))
  );

  useEffect(() => {
    const controls = animate(count, value, { duration: 2.5 });
    return () => controls.stop();
  }, [count, value]);

  return (
    <div className="text-center">
      <motion.span className="text-4xl lg:text-5xl font-semibold text-white">
        {rounded}
      </motion.span>
      <p className="text-sm lg:text-base text-slate-300 mt-1">{label}</p>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const QrEventLanding: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dashboardImages.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + dashboardImages.length) % dashboardImages.length
    );
  };
  
  // Se eliminó el cambio automático de imágenes para que solo cambien cuando el usuario haga clic
  
  // Efecto para mostrar brevemente la pista de navegación al cargar la página
  useEffect(() => {
    const navigationHint = document.getElementById('navigation-hint');
    if (navigationHint) {
      // Mostrar la pista después de un pequeño retraso
      setTimeout(() => {
        navigationHint.style.opacity = '1';
        
        // Ocultar la pista después de unos segundos
        setTimeout(() => {
          navigationHint.style.opacity = '0';
        }, 3000);
      }, 1500);
    }
  }, []);

  return (
    <div className="bg-[#FDFDFD] font-sans text-slate-800">
      <Header />
      <main>
        {/* 1. Hero Section */}
        <section className="relative h-screen flex flex-col text-white overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
            poster={getImagePath("/images/QrEvent/hero.png")}
          ></video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#101828]/70 via-[#101828]/60 to-transparent z-10"></div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-20 flex-grow flex items-center justify-center"
          >
            <div className="container mx-auto px-6 text-center max-w-4xl">
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tighter"
              >
                Conectar. Premiar y Medir.
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="mt-4 text-lg md:text-xl text-slate-200 font-light"
              >
                Caso de Estudio: Programa de Activación Territorial y CRM para
                Corteva.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-slate-300 leading-relaxed"
              >
                Más que distribución, creamos un ecosistema de fidelización:
                logística de precisión, incentivos atractivos y analítica que
                convierte la información en decisiones estratégicas.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <a
                  href="#impacto"
                  className="w-full sm:w-auto px-8 py-3 bg-[#1447E6] text-white font-bold rounded-md hover:opacity-90 transition-opacity duration-300"
                >
                  Analizar el Impacto
                </a>
                <a
                  href="#metodologia"
                  className="w-full sm:w-auto px-8 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white hover:text-slate-900 transition-colors duration-300"
                >
                  Detalles de la Ejecución
                </a>
              </motion.div>
            </div>
          </motion.div>

          <div className="relative z-20">
            <div className="container mx-auto px-6 max-w-4xl  sm:pb-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <AnimatedCounter value={8} label="Zonas Estratégicas" />
                <AnimatedCounter value={280} label="Almacenes Activados" />
                <AnimatedCounter value={5600} label="Productos Entregados" />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Executive Summary Section */}
        <section id="resumen" className="bg-[#101828] py-20 sm:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-6 lg:px-8"
          >
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
                Pilares de una Ejecución Integral
              </h2>
            </motion.div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillars.map((pillar) => (
                <motion.div
                  variants={fadeInUp}
                  key={pillar.title}
                  className="bg-[#1E293B] p-8 rounded-lg border border-slate-700"
                >
                  <div className="text-blue-400 mb-4">{pillar.icon}</div>
                  <h3 className="text-xl font-medium text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 3. Timeline Section */}
        <section id="metodologia" className="bg-[#FDFDFD] py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight">
                Metodología: De la Estrategia a la Ejecución
              </h2>
            </motion.div>
            <div className="relative">
              {timelineData.map((item) => (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={fadeInUp}
                  key={item.phase}
                  className="flex gap-8 items-start"
                >
                  <div className="relative flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border-2 border-[#1447E6] bg-white flex-shrink-0 flex items-center justify-center">
                      <span className="font-medium text-[#1447E6]">
                        {item.phase}
                      </span>
                    </div>
                    <div className="w-px h-full bg-slate-300 mt-2"></div>
                  </div>
                  <div className="pb-14 w-full">
                    <h3 className="text-2xl font-medium text-slate-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <div className="relative w-full h-[300px] md:h-[400px]">
                      <Image
                        src={item.imageUrl}
                        alt={item.altText}
                        className={`rounded-lg ${
                          item.objectFit === "contain"
                            ? "object-contain"
                            : item.objectFit === "fill"
                            ? "object-fill"
                            : item.objectFit === "none"
                            ? "object-none"
                            : item.objectFit === "scale-down"
                            ? "object-scale-down"
                            : "object-cover"
                        } ${
                          item.objectPosition === "center"
                            ? "object-center"
                            : item.objectPosition === "top"
                            ? "object-top"
                            : item.objectPosition === "bottom"
                            ? "object-bottom"
                            : item.objectPosition === "left"
                            ? "object-left"
                            : item.objectPosition === "right"
                            ? "object-right"
                            : item.objectPosition === "left top"
                            ? "object-left-top"
                            : item.objectPosition === "right top"
                            ? "object-right-top"
                            : item.objectPosition === "left bottom"
                            ? "object-left-bottom"
                            : item.objectPosition === "right bottom"
                            ? "object-right-bottom"
                            : "object-center"
                        }`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                        priority={item.priority}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Case Study Sections */}
        <section id="galeria" className="py-20 md:py-32 bg-slate-50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-6 lg:px-8"
          >
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Galería de Kits y Materiales
              </h2>
              <p className="text-lg text-slate-700 mt-4">
                Una mirada de cerca a los elementos tangibles que dieron vida a
                la campaña en cada punto de venta.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  variants={fadeInUp}
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div
                    className={`relative w-full ${
                      image.aspectRatio === "portrait"
                        ? "aspect-[3/4]"
                        : image.aspectRatio === "landscape"
                        ? "aspect-[4/3]"
                        : "aspect-square"
                    } overflow-hidden`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className={`transition-transform duration-500 group-hover:scale-110 ${
                        image.objectFit === "contain"
                          ? "object-contain"
                          : image.objectFit === "fill"
                          ? "object-fill"
                          : image.objectFit === "none"
                          ? "object-none"
                          : image.objectFit === "scale-down"
                          ? "object-scale-down"
                          : "object-cover"
                      } ${
                        image.objectPosition === "center"
                          ? "object-center"
                          : image.objectPosition === "top"
                          ? "object-top"
                          : image.objectPosition === "bottom"
                          ? "object-bottom"
                          : image.objectPosition === "left"
                          ? "object-left"
                          : image.objectPosition === "right"
                          ? "object-right"
                          : image.objectPosition === "left top"
                          ? "object-left-top"
                          : image.objectPosition === "right top"
                          ? "object-right-top"
                          : image.objectPosition === "left bottom"
                          ? "object-left-bottom"
                          : image.objectPosition === "right bottom"
                          ? "object-right-bottom"
                          : "object-center"
                      }`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
                      priority={image.priority}
                    />
                    {/* Overlay y texto mejorados */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 transition-all duration-500 opacity-0 group-hover:opacity-100">
                      <h3 className="text-white text-lg font-bold mb-1">{image.title}</h3>
                      <p className="text-white/80 text-sm">{image.alt}</p>
                      <div className="w-8 h-1 bg-[#1447E6] mt-2 rounded-full transform group-hover:w-full transition-all duration-300"></div>
                    </div>
                    {/* Indicador de interactividad */}
                    <div className="absolute top-3 right-3 bg-white/80 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform rotate-45 group-hover:rotate-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="raspa-y-gana" className="py-20 md:py-32 bg-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-6 lg:px-8"
          >
            {/* Encabezado */}
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                El Corazón Interactivo: Raspa y Gana con Corteva
              </h2>
              <p className="text-lg text-slate-700 mt-4">
                La mecánica que transformó una simple compra en una oportunidad
                de interacción y recolección de datos de alto valor.
              </p>
            </motion.div>

            {/* Contenido en dos columnas */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Columna izquierda: pasos */}
              <motion.div variants={staggerContainer} className="space-y-8">
                <h3 className="text-2xl font-bold text-slate-800">
                  Flujo del Usuario:
                </h3>
                <div className="space-y-6">
                  {scratchSteps.map((step) => (
                    <motion.div
                      variants={fadeInUp}
                      key={step.num}
                      className="flex items-start gap-4"
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1447E6] text-white font-bold text-xl flex-shrink-0 shadow-md">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-slate-900">
                          {step.title}
                        </h4>
                        <p className="text-slate-600">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Columna derecha: imagen */}
              <motion.div
                variants={fadeInUp}
                className="flex items-center justify-center"
              >
                <div className="relative w-full max-w-lg mx-auto">
                  <Image
                    src={getImagePath("/images/QrEvent/raspaygana.png")}
                    alt="Promoción Raspa y Gana"
                    className="rounded-2xl shadow-2xl object-contain"
                    width={800}
                    height={600}
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section id="datos" className="py-20 md:py-32 bg-slate-50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-6 lg:px-8"
          >
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Datos que Impulsan Decisiones
              </h2>
              <p className="text-lg text-slate-700 mt-4">
                La campaña generó un activo invaluable: data. Visualizamos los
                resultados clave para extraer insights estratégicos.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="relative overflow-hidden"
            >
              {/* Indicador de navegación */}
              <div className="absolute top-3 right-4 z-30 bg-slate-800/80 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                <span aria-live="polite">
                  {currentIndex + 1} / {dashboardImages.length}
                </span>
              </div>
              
              {/* Instrucción de navegación */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-black/75 text-white px-5 py-3 rounded-lg opacity-0 transition-opacity duration-500 pointer-events-none flex items-center gap-3"
                aria-hidden="true"
                style={{ opacity: '0' }}
                id="navigation-hint"
              >
                <span className="flex items-center"><ChevronLeft className="w-5 h-5 mr-1" /> <ChevronRight className="w-5 h-5" /></span>
                <span>Navegue entre las imágenes</span>
              </div>
              
              <div className="overflow-hidden relative h-[350px] sm:h-[450px] md:h-[550px] rounded-xl group">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={dashboardImages[currentIndex].src}
                      alt={`Dashboard: ${dashboardImages[currentIndex].caption}`}
                      fill
                      className={`${
                        dashboardImages[currentIndex].objectFit === "cover"
                          ? "object-cover"
                          : dashboardImages[currentIndex].objectFit === "fill"
                          ? "object-fill"
                          : dashboardImages[currentIndex].objectFit === "none"
                          ? "object-none"
                          : dashboardImages[currentIndex].objectFit ===
                            "scale-down"
                          ? "object-scale-down"
                          : "object-contain"
                      } ${
                        dashboardImages[currentIndex].objectPosition ===
                        "center"
                          ? "object-center"
                          : dashboardImages[currentIndex].objectPosition ===
                            "top"
                          ? "object-top"
                          : dashboardImages[currentIndex].objectPosition ===
                            "bottom"
                          ? "object-bottom"
                          : dashboardImages[currentIndex].objectPosition ===
                            "left"
                          ? "object-left"
                          : dashboardImages[currentIndex].objectPosition ===
                            "right"
                          ? "object-right"
                          : "object-center"
                      }`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      priority={dashboardImages[currentIndex].priority}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              
              <div className="mt-8 px-4 mb-10">
                <p className="text-center text-slate-700 min-h-[4em] text-lg" aria-live="polite">
                  {dashboardImages[currentIndex].caption}
                </p>
              </div>
              
              {/* Botones de navegación mejorados */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-slate-700/80 hover:bg-slate-800 hover:scale-110 p-5 rounded-full transition-all duration-300 shadow-xl transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 z-20"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="h-8 w-8 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-slate-700/80 hover:bg-slate-800 hover:scale-110 p-5 rounded-full transition-all duration-300 shadow-xl transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 z-20"
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="h-8 w-8 text-white" />
              </button>
              
              {/* Indicadores de navegación mejorados */}
              <div className="absolute -bottom-14 left-0 right-0 bg-gradient-to-t from-transparent to-transparent h-20 pointer-events-none z-10"></div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
                {dashboardImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-5 h-5 rounded-full transition-all duration-300 ${
                      currentIndex === index 
                        ? "bg-[#1447E6] scale-110 ring-2 ring-white" 
                        : "bg-slate-500/70 hover:bg-slate-600 hover:scale-110"
                    }`}
                    aria-label={`Ir a la imagen ${index + 1} de ${dashboardImages.length}`}
                    aria-current={currentIndex === index ? "true" : "false"}
                  ></button>
                ))}
              </div>
            </motion.div>
          </motion.div>
          <div className="flex justify-center mt-12">
            <a
              href="https://app.powerbi.com/view?r=eyJrIjoiMzVhMzJhYjgtN2UyMC00NWMxLTllNDQtOTZlYTg4ZWUwMzcwIiwidCI6ImFhN2IzZTUzLWU2NzUtNDU0Ni04Nzg4LTdkM2JjM2YxZDgwNCIsImMiOjR9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1447E6] text-white px-10 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-4 shadow-xl font-bold text-lg transform hover:scale-105 group"
              aria-label="Ver el dashboard completo en Power BI (se abre en una nueva ventana)"
            >
              <LayoutDashboard className="w-6 h-6 group-hover:animate-pulse" />
              Ver Dashboard Completo
              <span className="ml-1 text-xs bg-blue-500 px-3 py-1.5 rounded-full group-hover:bg-white group-hover:text-blue-700 transition-colors duration-300 font-semibold">Power BI</span>
            </a>
          </div>
        </section>

        <section
          id="impacto"
          className="py-20 md:py-32 bg-[#1447E6] text-white"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-6 lg:px-8"
          >
            <motion.div
              variants={fadeInUp}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
                Impacto, Aprendizajes y Siguientes Pasos
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
              <motion.div
                variants={fadeInUp}
                className="bg-blue-800/50 p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">Insights Clave</h3>
                <ul className="space-y-3 list-disc list-inside text-blue-100">
                  <li>
                    La mecánica de &quot;Raspa y Gana&quot; demostró ser un
                    poderoso catalizador para la recolección de datos de primer
                    nivel.
                  </li>
                  <li>
                    La combinación de incentivos para asesores y premios para
                    clientes finales creó un ecosistema de participación
                    virtuoso.
                  </li>
                  <li>
                    El análisis en tiempo real permitió hacer ajustes tácticos
                    durante la campaña.
                  </li>
                </ul>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="bg-blue-800/50 p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">
                  Recomendaciones Futuras
                </h3>
                <ul className="space-y-3 list-disc list-inside text-blue-100">
                  <li>
                    Implementar un sistema de CRM más robusto para dar
                    seguimiento a los leads generados.
                  </li>
                  <li>
                    Personalizar los premios y kits basándose en los datos de
                    rendimiento por zona.
                  </li>
                  <li>
                    Explorar la gamificación digital más allá del QR, con
                    micro-interacciones en una web app.
                  </li>
                </ul>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="bg-blue-800/50 p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">
                  Resultados Alcanzados
                </h3>
                <ul className="space-y-3 list-disc list-inside text-blue-100">
                  <li>
                    Superación del 110% en la meta de distribución de productos.
                  </li>
                  <li>
                    Creación de una base de datos cualificada con más de 7,000
                    registros de clientes finales.
                  </li>
                  <li>
                    Aumento medible del 15% en la visibilidad de marca en las
                    zonas impactadas.
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section id="contacto" className="py-20 md:py-32 bg-white relative overflow-hidden">
          {/* Elementos decorativos de fondo */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100 rounded-full opacity-20"></div>
          <div className="absolute bottom-12 -left-12 w-48 h-48 bg-blue-200 rounded-full opacity-25"></div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="container mx-auto px-6 text-center relative z-10"
          >
            <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                ¿Interesado en replicar este éxito?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                Contáctanos para explorar cómo podemos impulsar tu próximo
                proyecto con inteligencia de datos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:contacto@example.com"
                  className="bg-[#1447E6] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  aria-label="Enviar email para contacto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contactar al equipo
                </a>
                <a
                  href="#impacto"
                  className="bg-white text-[#1447E6] border-2 border-[#1447E6] font-bold py-4 px-10 rounded-full shadow-lg hover:bg-[#1447E6] hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  aria-label="Ver resultados e impacto del proyecto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Ver resultados
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QrEventLanding;
