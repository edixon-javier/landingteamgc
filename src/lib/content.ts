import {
  ClientLogo,
  Solution,
  MethodologyStep,
} from "@/types";
import { getImagePath } from "./utils";

export const solutionsData: Solution[] = [
  {
    title: "Consultoría Estratégica",
    description:
      "Desarrollamos estrategias de innovación y transformación basadas en Design Thinking para ayudar a tu organización a alcanzar sus objetivos de negocio de manera efectiva.",
    href: "/soluciones/consultoria-estrategica",
  },
  {
    title: "Gestión de Operaciones y Logística",
    description:
      "Optimizamos tus cadenas de suministro y flujos de trabajo para mejorar la eficiencia operativa, reducir costos y aumentar la satisfacción del cliente.",
    href: "/soluciones/operaciones-logistica",
  },
  {
    title: "Desarrollo Tecnológico",
    description:
      "Creamos soluciones digitales a medida que potencian tu negocio, desde aplicaciones web y móviles hasta sistemas de automatización e integración.",
    href: "/soluciones/desarrollo-tecnologico",
  },
];

export const clientLogos: ClientLogo = [
  {
    name: "Penguin Random House",
    src: getImagePath("/images/logos/logo-penguin-random-house-1.png"),
    width: 170,
    height: 170,
    yearStart: 2009,
  },
  {
    name: "Philips",
    src: getImagePath("/images/logos/logo-philips-1.png"),
    width: 150,
    height: 60,
    yearStart: 2008,
  },
  {
    name: "Corteva",
    src: getImagePath("/images/logos/logo-corteva-1.png"),
    width: 160,
    height: 65,
    yearStart: 2021,
  },
  {
    name: "Legrand",
    src: getImagePath("/images/logos/logo-legrand-1.png"),
    width: 150,
    height: 60,
    yearStart: 2019,
  },
  {
    name: "Astara",
    src: getImagePath("/images/logos/logo-astara.png"),
    width: 140,
    height: 65,
    yearStart: 2018,
  },
  {
    name: "Sin Fronteras",
    src: getImagePath("/images/logos/logo-sin-fronteras-1.png"),
    width: 150,
    height: 65,
    yearStart: 2022,
  },
  {
    name: "Cobag",
    src: getImagePath("/images/logos/logo-cobag-1.png"),
    width: 50,
    height: 50,
    yearStart: 2018,
  },
  {
    name: "Farmacol",
    src: getImagePath("/images/logos/logo-farmacol.png"),
    width: 50,
    height: 50,
    yearStart: 2011,
    yearEnd: 2018,
  },
  {
    name: "Menarini",
    src: getImagePath("/images/logos/logo-menarini.png"),
    width: 160,
    height: 70,
    yearStart: 2024,
  },
  {
    name: "Inkas",
    src: getImagePath("/images/logos/logo-14-inkas-1.png"),
    width: 140,
    height: 60,
    yearStart: 2017,
  },
  {
    name: "Restaurante Nazca",
    src: getImagePath("/images/logos/logo-restaurante-nazca-1.png"),
    width: 155,
    height: 65,
    yearStart: 2017,
  },
  {
    name: "Tannic",
    src: getImagePath("/images/logos/logo-tannic-1.png"),
    width: 145,
    height: 50,
    yearStart: 2022,
  },
];

export const methodologySteps: MethodologyStep[] = [
  {
    id: "01",
    title: "Empatizar",
    description:
      "Nos sumergimos en el mundo de tus usuarios y stakeholders para entender sus necesidades, motivaciones y frustraciones. Utilizamos entrevistas, observación y análisis de datos para descubrir insights valiosos.",
  },
  {
    id: "02",
    title: "Definir",
    description:
      "Sintetizamos toda la información recopilada para identificar el problema central a resolver. Formulamos un enunciado claro que guiará todo el proceso creativo hacia soluciones realmente impactantes.",
  },
  {
    id: "03",
    title: "Idear",
    description:
      "Generamos una amplia variedad de ideas innovadoras mediante técnicas de pensamiento divergente. Fomentamos la creatividad sin límites antes de seleccionar las soluciones más prometedoras.",
  },
  {
    id: "04",
    title: "Prototipar",
    description:
      "Convertimos las ideas en representaciones tangibles de baja fidelidad. Estos prototipos nos permiten visualizar la solución, identificar fallos y refinar conceptos rápidamente y a bajo costo.",
  },
  {
    id: "05",
    title: "Evaluar",
    description:
      "Ponemos a prueba los prototipos con usuarios reales para obtener feedback directo. Este proceso iterativo nos permite perfeccionar la solución hasta que cumpla con todas las expectativas.",
  },
];

export const caseStudiesData = [
  {
    slug: "suvey_cibersegurity",
    name: "Plataforma de Ciberseguridad con IA",
    title: "Nuestra plataforma automatiza documentos, organiza la información y agiliza procesos comerciales y logísticos en tiempo real.",
    subtitle: "Administra campañas comerciales, productos, entregas y remisiones de forma centralizada y segura.",
    imageUrl: getImagePath("/images/suvey_cibersegurity/logo.webp"),
    description: "Plataforma para la clasificación y búsqueda semántica de documentos de ciberseguridad utilizando inteligencia artificial."
  },
  {
    slug: "dultos-consultans-platform",
    name: "CRM para el Sector Asegurador",
    title: "Nuestro CRM especializado para el sector asegurador centraliza la información, agiliza procesos y genera reportes en tiempo real.",
    subtitle: "Gestiona pólizas, clientes y renovaciones de forma automática y segura.",
    imageUrl: getImagePath("/images/dultos-consultans/logo.webp"),
    description: "Sistema CRM para la gestión automatizada de pólizas y clientes en el sector de seguros."
  },
  {
    slug: "nazca-restaurant-management",
    name: "Gestión Integral para Restaurantes",
    title: "Digitaliza tu restaurante con menús QR, pedidos en línea y administración centralizada.",
    subtitle: "Menú Digital y Gestión de Pedidos para Restaurantes",
    imageUrl: getImagePath("/images/restaurant/elegant.webp"),
    description: "Sistema integral de gestión para restaurantes que optimiza operaciones, inventario y experiencia del cliente."
  },
  {
    slug: "prh-content-management", 
    name: "Plataforma de Gestión de RRHH",
    title: "Nuestra plataforma automatiza documentos, organiza la información y agiliza procesos comerciales y logísticos en tiempo real.",
    subtitle: "Administra campañas comerciales, productos, entregas y remisiones de forma centralizada y segura.",
    imageUrl: getImagePath("/images/rg7_prh/logo.webp"),
    description: "Plataforma para la gestión eficiente de procesos de recursos humanos y generación de reportes en Penguin Random House."
  },
  {
    slug: "qr-event-management",
    name: "Gestión de Eventos con Códigos QR",
    title: "Nuestra plataforma centraliza y automatiza el registro de datos y facilita el análisis de resultados en tiempo real.",
    subtitle: "Gestiona campañas comerciales y capta información en campo mediante formularios inteligentes con códigos QR.",
    imageUrl: getImagePath("/images/QrEvent/profesional_form.webp"),
    description: "Sistema innovador de gestión de eventos que utiliza códigos QR para optimizar el registro y seguimiento de asistentes."
  }
];
