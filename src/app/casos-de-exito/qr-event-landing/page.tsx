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
import { useAgendaDemoScroll } from "@/hooks/useAgendaDemoScroll";

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
    title: "Completa Formulario",
    desc: "Ingresa sus datos para registrar su participación y redimir su premio.",
  },
  {
    num: 3,
    title: "Escanea QR",
    desc: "Usa su celular para escanear el código y acceder al formulario.",
  },
    {
    num: 4,
    title: "Raspa",
    desc: 'Recibe una tarjeta "Raspa y Gana" para descubrir el código QR.',
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
   const handleAgendaDemoClick = useAgendaDemoScroll('contacto');


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
        <section id="resumen" className="bg-gradient-to-b from-[#101828] to-[#1E293B] py-20 sm:py-28 relative overflow-hidden">
          {/* Elementos decorativos de fondo */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -left-20 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-20 w-5 h-5 bg-blue-400/10 rounded-full"></div>
          <div className="absolute bottom-1/3 right-40 w-3 h-3 bg-blue-500/10 rounded-full"></div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
          >
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <div className="mb-2">
                <span className="bg-blue-900/30 text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full inline-block">
                  Visión Estratégica
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Pilares de una Ejecución Integral
              </h2>
              <p className="text-lg text-blue-100/70 mt-4 mb-6">
                Cada componente de nuestra solución fue diseñado para maximizar el impacto
                y garantizar resultados excepcionales.
              </p>
              <div className="w-24 h-1.5 bg-blue-500/30 mx-auto rounded-full"></div>
            </motion.div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillars.map((pillar) => (
                <motion.div
                  variants={fadeInUp}
                  key={pillar.title}
                  className="bg-[#1E293B]/70 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="bg-blue-900/50 w-16 h-16 rounded-xl flex items-center justify-center text-blue-400 mb-6">{pillar.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">
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
        <section id="metodologia" className="bg-gradient-to-b from-white to-slate-50 py-20 sm:py-28 relative overflow-hidden">
          {/* Elementos decorativos de fondo */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 -left-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-20 w-6 h-6 bg-blue-400/20 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-blue-500/20 rounded-full"></div>
          
          <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <div className="mb-2">
                <span className="bg-blue-600/10 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full inline-block">
                  Viaje del Proyecto
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                Metodología: De la Estrategia a la Ejecución
              </h2>
              <p className="text-lg text-slate-600 mt-4 mb-6">
                Un recorrido cronológico a través de las etapas clave que transformaron un concepto en resultados excepcionales.
              </p>
              <div className="w-24 h-1.5 bg-blue-200 mx-auto rounded-full"></div>
            </motion.div>
            
            {/* Línea temporal lateral */}
            <div className="relative right-16">
              {/* Línea lateral vertical - Con z-index bajo para que quede por debajo de los puntos */}
              
              {timelineData.map((item) => (
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
                key={item.phase}
                className="mb-20 relative ml-auto mr-0 lg:w-[80%]"
                >
                  {/* Indicador de punto en la línea temporal - Mayor z-index para asegurar que esté por encima */}
                <div className="absolute  top-0 bottom-0 w-1 bg-gradient-to-b from-[#1447E6] to-[#0A2A94]/30 z-0 rounded-full"></div>
                  <div className="absolute transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex z-30">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1447E6] to-[#0A2A94] text-white flex-shrink-0 flex items-center justify-center shadow-lg border-2 border-white">
                      <span className="font-bold text-xl">
                        {item.phase}
                      </span>
                    </div>
                  </div>
                  
                  {/* Contenido - Ahora todos a la derecha de la línea */}
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 shadow-xl lg:ml-16 relative z-10">
                    {/* Cabecera con título y fase */}
                    <div className="flex items-center justify-between mb-4">
                      {/* Indicador visible solo en móvil */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1447E6] to-[#0A2A94] text-white flex-shrink-0 flex items-center justify-center shadow-lg mb-0 lg:hidden">
                        <span className="font-bold">
                          {item.phase}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-slate-900 flex items-center">
                        <span className="mr-2">{item.title}</span>
                      </h3>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    
                    {/* Contenedor de imagen con altura ajustada al 80% */}
                    <div className="relative w-full h-[240px] md:h-[320px] rounded-xl overflow-hidden  mx-auto">
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
                      
                      {/* Etiqueta con metadata */}
                      <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm py-1 px-3 rounded-full text-blue-600 text-xs font-bold border border-blue-100 shadow-sm">
                        Etapa {item.phase}
                      </div>
                    </div>
                  </div>
                  
                  {/* Conector visual para escritorio - Ahora siempre desde la izquierda */}
                  <div className="hidden lg:block absolute top-0 left-[12%] h-2 bg-blue-200 w-14 z-10"></div>
                </motion.div>
              ))}
            </div>
            
            {/* Indicador de final de la línea de tiempo */}
            <div className="relative flex mb-12">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-700 text-white flex items-center justify-center shadow-lg absolute left-[15%] lg:left-[12%] transform -translate-x-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            
            {/* Resumen de resultados */}
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-2xl mx-auto"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Resultado: Una estrategia ejecutada con precisión</h3>
              <p className="text-slate-600">Cada fase de nuestra metodología contribuyó a construir una campaña coherente que superó las expectativas, estableciendo un nuevo estándar para activaciones de marca.</p>
            </motion.div>
          </div>
        </section>

        {/* 4. Case Study Sections */}
        <section id="galeria" className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
          {/* Elementos decorativos de fondo */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-0 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-40 w-4 h-4 bg-blue-400/20 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-blue-500/10 rounded-full"></div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
          >
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <div className="mb-2">
                <span className="bg-blue-600/10 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full inline-block">
                  Materiales Promocionales
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                Galería de Kits y Materiales
              </h2>
              <p className="text-lg text-slate-600 mt-4 mb-6">
                Una mirada de cerca a los elementos tangibles que dieron vida a
                la campaña en cada punto de venta.
              </p>
              <div className="w-24 h-1.5 bg-blue-200 mx-auto rounded-full"></div>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {galleryImages.map((image, index) => (
                <motion.div
                  variants={fadeInUp}
                  key={index}
                  className="relative overflow-hidden rounded-xl shadow-xl border border-blue-100 bg-white group cursor-pointer"
                  whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(20, 71, 230, 0.15)", transition: { duration: 0.3 } }}
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

        <section id="raspa-y-gana" className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
          {/* Elementos decorativos de fondo */}
          <div className="absolute -top-40 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -left-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-20 w-5 h-5 bg-blue-400/20 rounded-full"></div>
          <div className="absolute bottom-1/3 right-40 w-3 h-3 bg-blue-500/20 rounded-full"></div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
          >
            {/* Encabezado */}
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <div className="mb-2">
                <span className="bg-blue-600/10 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full inline-block">
                  Mecánica de Activación
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                El Corazón Interactivo: Raspa y Gana con Corteva
              </h2>
              <p className="text-lg text-slate-600 mt-4 mb-6">
                La mecánica que transformó una simple compra en una oportunidad
                de interacción y recolección de datos de alto valor.
              </p>
              <div className="w-24 h-1.5 bg-blue-200 mx-auto rounded-full mb-16"></div>
            </motion.div>

            {/* Contenido en dos columnas */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Columna izquierda: pasos */}
              <motion.div 
                variants={fadeInUp}
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  </span>
                  Flujo del Usuario:
                </h3>
                <div className="space-y-8">
                  {scratchSteps.map((step) => (
                    <motion.div
                      variants={fadeInUp}
                      key={step.num}
                      className="flex items-start gap-5"
                    >
                      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#1447E6] to-[#0A2A94] text-white font-bold text-xl flex-shrink-0 shadow-lg">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-slate-900 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Columna derecha: imagen */}
              <motion.div
                variants={fadeInUp}
                className="flex items-center justify-center h-full"
              >
                <div className="relative w-full">
                  <Image
                    src={getImagePath("/images/QrEvent/raspaygana.png")}
                    alt="Promoción Raspa y Gana"
                    className="object-contain w-full h-full rounded-2xl"
                    width={800}
                    height={600}
                    priority
                    style={{ maxHeight: "550px" }}
                  />
                  
                  {/* Etiqueta destacada */}
                  <div className="absolute -top-4 right-8 bg-white shadow-lg py-2 px-4 rounded-full text-blue-800 font-bold text-sm border border-blue-100">
                    Material promocional
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Indicadores de beneficio */}
            <motion.div 
              variants={fadeInUp}
              className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-blue-100 shadow-lg text-center">
                <div className="w-14 h-14 mx-auto bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2 text-slate-900">Aumento en participación</h4>
                <p className="text-slate-600">El mecanismo de &quot;raspa y gana&quot; generó hasta un 40% más de interacciones que otras mecánicas tradicionales.</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-blue-100 shadow-lg text-center">
                <div className="w-14 h-14 mx-auto bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2 text-slate-900">Verificación mejorada</h4>
                <p className="text-slate-600">El registro de datos y fotos de facturas permitió validar cada participación, garantizando la integridad del programa.</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-blue-100 shadow-lg text-center">
                <div className="w-14 h-14 mx-auto bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2 text-slate-900">Experiencia doble</h4>
                <p className="text-slate-600">La satisfacción fue dual: clientes con premios tangibles y asesores con incentivos por cada participación validada.</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section id="datos" className="py-20 md:py-32 bg-gradient-to-b from-slate-100 to-white relative overflow-hidden">
          {/* Elementos decorativos de fondo */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 -left-20 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 left-10 w-6 h-6 bg-blue-500/30 rounded-full"></div>
          <div className="absolute top-60 right-40 w-4 h-4 bg-blue-600/20 rounded-full"></div>
          <div className="absolute bottom-60 left-1/4 w-8 h-8 bg-blue-400/20 rounded-full"></div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
          >
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="mb-2">
                <span className="bg-blue-600/10 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full inline-block">
                  Analytics & Reportes
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                Datos que Impulsan Decisiones
              </h2>
              <p className="text-lg text-slate-700 mt-4 mb-6">
                La campaña generó un activo invaluable: data. Visualizamos los
                resultados clave para extraer insights estratégicos.
              </p>
              <div className="w-24 h-1.5 bg-blue-200 mx-auto rounded-full mb-16"></div>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="relative overflow-hidden bg-white/80 backdrop-blur-sm p-6 md:p-10 rounded-3xl border border-blue-100 shadow-xl"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(20, 71, 230, 0.15)" }}
            >
              {/* Indicador de navegación */}
              <div className="absolute top-6 right-6 z-30 bg-white/90 backdrop-blur-sm text-slate-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-blue-100">
                <span aria-live="polite" className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  <strong className="text-blue-600">{currentIndex + 1}</strong> / {dashboardImages.length}
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
              
              <div className="overflow-hidden relative h-[350px] sm:h-[450px] md:h-[550px] rounded-2xl group shadow-inner bg-white/30">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
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
                          : dashboardImages[currentIndex].objectFit === "scale-down"
                          ? "object-scale-down"
                          : "object-contain"
                      } ${
                        dashboardImages[currentIndex].objectPosition === "center"
                          ? "object-center"
                          : dashboardImages[currentIndex].objectPosition === "top"
                          ? "object-top"
                          : dashboardImages[currentIndex].objectPosition === "bottom"
                          ? "object-bottom"
                          : dashboardImages[currentIndex].objectPosition === "left"
                          ? "object-left"
                          : dashboardImages[currentIndex].objectPosition === "right"
                          ? "object-right"
                          : "object-center"
                      }`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      priority={dashboardImages[currentIndex].priority}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              <motion.div 
                variants={fadeInUp} 
                className="mt-8 px-4 mb-10 bg-white/80 backdrop-blur-sm rounded-xl   max-w-4xl mx-auto"
              >
                <p className="text-center text-slate-700 min-h-[4em] text-lg" aria-live="polite">
                  {dashboardImages[currentIndex].caption}
                </p>
              </motion.div>
              
              {/* Botones de navegación mejorados */}
              <button
                onClick={prevSlide}
                className="absolute top-2/5 left-2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-110 p-5 rounded-full transition-all duration-300 shadow-xl transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 z-20 border border-blue-100"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="h-8 w-8 text-blue-600" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-2/5 right-2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-110 p-5 rounded-full transition-all duration-300 shadow-xl transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 z-20 border border-blue-100"
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="h-8 w-8 text-blue-600" />
              </button>
              
              {/* Indicadores de navegación mejorados */}
              <div className="absolute -bottom-6 left-0 right-0 bg-gradient-to-t from-transparent to-transparent h-20 pointer-events-none z-10"></div>
              <div className="flex justify-center gap-3 mt-6">
                {dashboardImages.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentIndex === index 
                        ? "bg-blue-600 w-10 ring-4 ring-blue-100" 
                        : "bg-slate-300 hover:bg-blue-400"
                    }`}
                    aria-label={`Ir a la imagen ${index + 1} de ${dashboardImages.length}`}
                    aria-current={currentIndex === index ? "true" : "false"}
                  ></motion.button>
                ))}
              </div>
            </motion.div>
            
            {/* Botón CTA mejorado */}
            <motion.div 
              variants={fadeInUp}
              className="flex justify-center mt-16"
            >
              <a
                href="https://app.powerbi.com/view?r=eyJrIjoiMzVhMzJhYjgtN2UyMC00NWMxLTllNDQtOTZlYTg4ZWUwMzcwIiwidCI6ImFhN2IzZTUzLWU2NzUtNDU0Ni04Nzg4LTdkM2JjM2YxZDgwNCIsImMiOjR9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#1447E6] to-[#0A2A94] text-white px-10 py-5 rounded-full hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 flex items-center gap-4 shadow-xl font-bold text-lg transform hover:scale-105 group relative overflow-hidden"
                aria-label="Ver el dashboard completo en Power BI (se abre en una nueva ventana)"
              >
                {/* Efecto de brillo en hover */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                
                <LayoutDashboard className="w-6 h-6 group-hover:animate-pulse" />
                Ver Dashboard Completo
                <span className="ml-1 text-xs bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full group-hover:bg-white group-hover:text-blue-700 transition-colors duration-300 font-semibold">Power BI</span>
              </a>
            </motion.div>
            
            {/* Nota informativa */}
            <motion.div 
              variants={fadeInUp}
              className="max-w-xl mx-auto mt-8 text-center"
            >
              <p className="text-sm text-slate-500">
                Todos los datos presentados son actualizados en tiempo real y están disponibles 
                para análisis detallados. Las visualizaciones pueden personalizarse según necesidades específicas.
              </p>
            </motion.div>
          </motion.div>
        </section>

        <section
          id="impacto"
          className="py-20 md:py-32 bg-gradient-to-b from-[#1447E6] to-[#0A2A94] text-white"
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
              <div className="mb-2">
                <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full inline-block">
                  Resultados e Insights
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
                Impacto Real, Aprendizajes Clave y Oportunidades Futuras
              </h2>
              <div className="w-24 h-1.5 bg-white/30 mx-auto rounded-full mb-16"></div>
            </motion.div>
            
            {/* Cards Section with Improved Visual Hierarchy */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
              
              {/* Card 1: Insights Clave */}
              <motion.div
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 shadow-xl"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-blue-600 rounded-2xl shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-6 text-white">
                  Insights Clave
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center mt-1">
                      <span className="text-lg font-bold text-white">1</span>
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">Puente digital-físico</p>
                      <p className="text-blue-100 text-sm leading-relaxed">
                        El &quot;Raspa y Gana&quot; físico facilitó la transición al mundo digital, convirtiendo 
                        el escaneo QR y registro de datos en un paso natural para obtener premios.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center mt-1">
                      <span className="text-lg font-bold text-white">2</span>
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">Incentivos multinivel</p>
                      <p className="text-blue-100 text-sm leading-relaxed">
                        Motivar a gerentes y asesores comerciales aseguró su participación activa, 
                        mejorando tanto la entrega de premios como la calidad de los datos capturados.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center mt-1">
                      <span className="text-lg font-bold text-white">3</span>
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">Data como activo estratégico</p>
                      <p className="text-blue-100 text-sm leading-relaxed">
                        El análisis de facturas proporcionó inteligencia de negocio para validar compras, 
                        identificar patrones de consumo y medir el ticket promedio.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Card 2: Recomendaciones Futuras */}
              <motion.div
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 shadow-xl"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-blue-600 rounded-2xl shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-6 text-white">
                  Recomendaciones Futuras
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center mt-1">
                      <span className="text-lg font-bold text-white">1</span>
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">Hipersegmentación</p>
                      <p className="text-blue-100 text-sm leading-relaxed">
                        Diseñar activaciones con kits personalizados según los productos más vendidos 
                        en cada una de las 8 zonas para maximizar relevancia e impacto.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center mt-1">
                      <span className="text-lg font-bold text-white">2</span>
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">Análisis predictivo</p>
                      <p className="text-blue-100 text-sm leading-relaxed">
                        Evolucionar la plataforma para identificar tendencias de compra y sugerir 
                        proactivamente productos Corteva para oportunidades de cross-selling.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center mt-1">
                      <span className="text-lg font-bold text-white">3</span>
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">Lealtad digital</p>
                      <p className="text-blue-100 text-sm leading-relaxed">
                        Construir un programa de fidelización continuo con la base de datos de clientes, 
                        fortaleciendo la relación a largo plazo con la marca Corteva.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Card 3: Resultados Alcanzados */}
              <motion.div
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 shadow-xl"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-blue-600 rounded-2xl shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-6 text-white">
                  Resultados Alcanzados
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center mt-1">
                      <span className="text-lg font-bold text-white">1</span>
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-2xl font-bold text-white">100%</span>
                        <span className="text-white font-medium">de cobertura</span>
                      </div>
                      <p className="text-blue-100 text-sm leading-relaxed">
                        Distribución exitosa de kits a 280 almacenes en 8 zonas estratégicas del país, 
                        cumpliendo todos los objetivos logísticos planificados.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center mt-1">
                      <span className="text-lg font-bold text-white">2</span>
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-2xl font-bold text-white">5,600</span>
                        <span className="text-white font-medium">registros cualificados</span>
                      </div>
                      <p className="text-blue-100 text-sm leading-relaxed">
                        Base de datos de clientes finales donde cada entrada está vinculada a una 
                        compra real verificada con foto de factura.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center mt-1">
                      <span className="text-lg font-bold text-white">3</span>
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-2xl font-bold text-white">280</span>
                        <span className="text-white font-medium">puntos activados</span>
                      </div>
                      <p className="text-blue-100 text-sm leading-relaxed">
                        Impacto directo de marca en tiendas clave mediante kits de branding, reforzando 
                        la presencia de Territorio Corteva frente a la competencia.
                      </p>
                    </div>
                  </div>
                </div>
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
              <div className="w-24 h-1.5 bg-blue-200 mx-auto rounded-full mb-8"></div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  // href="mailto:contacto@example.com"
                  onClick={handleAgendaDemoClick}
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
