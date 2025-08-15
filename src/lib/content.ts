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
    src: getImagePath("/images/logo-penguin-random-house-1.png"),
    width: 170,
    height: 170,
    yearStart: 2009,
  },
  {
    name: "Philips",
    src: getImagePath("/images/logo-philips-1.png"),
    width: 150,
    height: 60,
    yearStart: 2008,
  },
  {
    name: "Corteva",
    src: getImagePath("/images/logo-corteva-1.png"),
    width: 160,
    height: 65,
    yearStart: 2021,
  },
  {
    name: "Legrand",
    src: getImagePath("/images/logo-legrand-1.png"),
    width: 150,
    height: 60,
    yearStart: 2019,
  },
  {
    name: "Astara",
    src: getImagePath("/images/astara.png"),
    width: 140,
    height: 65,
    yearStart: 2018,
  },
  {
    name: "Sin Fronteras",
    src: getImagePath("/images/logo-sin-fronteras-1.png"),
    width: 150,
    height: 65,
    yearStart: 2022,
  },
  {
    name: "Cobag",
    src: getImagePath("/images/logo-cobag-1.png"),
    width: 50,
    height: 50,
    yearStart: 2018,
  },
  // {
  //   name: "Farmacol",
  //   src: getImagePath("/images/farmacol.png"),
  //   width: 50,
  //   height: 50,
  //   yearStart: 2011,
  //   yearEnd: 2018,
  // },
  // {
  //   name: "Menarini",
  //   src: getImagePath("/images/menarini.png"),
  //   width: 160,
  //   height: 70,
  //   yearStart: 2024,
  // },
  {
    name: "Inkas",
    src: getImagePath("/images/logo-14-inkas-1.png"),
    width: 140,
    height: 60,
    yearStart: 2017,
  },
  {
    name: "Restaurante Nazca",
    src: getImagePath("/images/logo-restaurante-nazca-1.png"),
    width: 155,
    height: 65,
    yearStart: 2017,
  },
  {
    name: "Tannic",
    src: getImagePath("/images/logo-tannic-1.png"),
    width: 145,
    height: 60,
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
    name: "Plataforma de Ciberseguridad con IA", // Modificado
    client:
      "Administra campañas comerciales, productos, entregas y remisiones de forma centralizada y segura.",
    title:
      "Nuestra plataforma automatiza documentos, organiza la información y agiliza procesos comerciales y logísticos en tiempo real, para que tu empresa crezca con confianza y control.",
    imageUrl: getImagePath("/images/suvey_cibersegurity/logo.webp"),
    description:
      "Plataforma para la clasificación y búsqueda semántica de documentos de ciberseguridad utilizando inteligencia artificial.",
    challenge:
      "Las organizaciones de ciberseguridad enfrentaban problemas con grandes volúmenes de documentos no estructurados, lo que hacía que las búsquedas manuales fueran lentas y propensas a errores.",
    solution:
      "Desarrollamos RDI Document Processor, una solución que automatiza el procesamiento y segmentación de documentos, almacenándolos en bases de datos vectoriales para búsquedas semánticas rápidas con LangChain, ChromaDB y Pinecone.",
    results:
      "Reducción del 70% en el tiempo de búsqueda de documentos, disminución del 50% en errores manuales y mejora del 40% en la eficiencia de respuesta a incidentes.",
    technologies: [
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "LangChain",
      "OpenAI",
      "Pinecone",
      "ChromaDB",
    ],
    year: "2024",
    duration: "5 meses",
    projectUrl: "https://app.rdishield.com/",
  },
  {
    slug: "dultos-consultans-platform",
    name: "CRM para el Sector Asegurador", // Modificado
    client:
      "Gestiona pólizas, clientes y renovaciones de forma automática y segura.",
    title:
      "Nuestro CRM especializado para el sector asegurador centraliza la información, agiliza procesos y genera reportes en tiempo real, para que tu negocio crezca con confianza.",
    imageUrl: getImagePath("/images/dultos-consultans/logo.webp"),
    description:
      "Sistema CRM para la gestión automatizada de pólizas y clientes en el sector de seguros.",
    challenge:
      "Las compañías de seguros manejaban pólizas y clientes con sistemas fragmentados como hojas de cálculo y correos, lo que causaba demoras, errores y dificultades en el seguimiento de oportunidades.",
    solution:
      "Creamos una plataforma que centraliza datos de pólizas y clientes, automatiza renovaciones y notificaciones, y genera reportes en un entorno unificado, mejorando la precisión y la eficiencia.",
    results:
      "Reducción del 45% en errores de gestión, aumento del 25% en la velocidad de procesamiento de renovaciones y mejora del 35% en la satisfacción del cliente.",
    technologies: [
      "TypeScript",
      "Vue.js",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "LangChain",
    ],
    year: "2024",
    duration: "6 meses",
    projectUrl: "https://appdulton.com",
  },
  {
    slug: "nazca-restaurant-management",
    name: "Gestión Integral para Restaurantes", // Modificado
    client: "Menú Digital y Gestión de Pedidos para Restaurantes",
    title:
      "Digitaliza tu restaurante con menús QR, pedidos en línea y administración centralizada. Optimiza la experiencia de tus clientes y simplifica la gestión de mesas, productos y órdenes en tiempo real.",
    imageUrl: getImagePath(
      "/images/restaurant/elegant.webp"
    ),
    description:
      "Sistema integral de gestión para restaurantes que optimiza operaciones, inventario y experiencia del cliente.",
    challenge:
      "El restaurante necesitaba un sistema unificado para gestionar reservas, inventario, personal y pedidos. Los procesos manuales causaban errores y retrasos.",
    solution:
      "Desarrollamos una plataforma personalizada que integra todas las operaciones del restaurante, desde reservas hasta gestión de inventario, con análisis en tiempo real.",
    results:
      "Reducción del 40% en tiempo de espera, mejora del 30% en rotación de mesas y reducción del 25% en desperdicio de alimentos.",
    technologies: ["Next.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    year: "2024",
    duration: "6 meses",
    projectUrl: "https://nazca.resto.app",
  },
  {
    slug: "prh-content-management",
    name: "Plataforma de Gestión de RRHH", // Modificado
    client:
      "Administra campañas comerciales, productos, entregas y remisiones de forma centralizada y segura.",
    title:
      "Nuestra plataforma automatiza documentos, organiza la información y agiliza procesos comerciales y logísticos en tiempo real, para que tu empresa crezca con confianza y control.",
    imageUrl: getImagePath("/images/rg7_prh/logo.webp"),
    description:
      "Plataforma para la gestión eficiente de procesos de recursos humanos y generación de reportes en Penguin Random House.",
    challenge:
      "La gestión de procesos de recursos humanos con múltiples herramientas y hojas de cálculo generaba errores, datos dispersos y demoras en la generación de reportes críticos.",
    solution:
      "Desarrollamos RG7 PRH Frontend, una plataforma que unifica flujos de trabajo de recursos humanos, incluyendo autenticación segura, gestión de datos y generación de reportes en formatos CSV, PDF y Excel.",
    results:
      "Reducción del 50% en errores de datos, mejora del 40% en el tiempo de generación de reportes y aumento del 30% en la satisfacción de los usuarios administrativos.",
    technologies: [
      "React",
      "Vite",
      "Ant Design",
      "Tailwind CSS",
      "Auth0",
      "Axios",
      "jsPDF",
      "react-csv",
      "xlsx",
    ],
    year: "2024",
    duration: "7 meses",
    projectUrl: "https://front-prh.equipogctrade.com/",
  },
  {
    slug: "qr-event-management",
    name: "Gestión de Eventos con Códigos QR", // Modificado
    client: "Gestiona campañas comerciales y capta información en campo mediante formularios inteligentes con códigos QR.",
    title: "Nuestra plataforma centraliza y automatiza el registro de datos, facilita el análisis de resultados en tiempo real y potencia el crecimiento de tu empresa con eficiencia, control y seguridad.",
    imageUrl: getImagePath("/images/QrEvent/profesional_form.webp"),
    description:
      "Sistema innovador de gestión de eventos que utiliza códigos QR para optimizar el registro y seguimiento de asistentes.",
    challenge:
      "La gestión manual de eventos generaba largas filas en el registro y dificultaba el seguimiento de asistentes. Se necesitaba una solución más eficiente.",
    solution:
      "Implementamos un sistema basado en QR que permite registro instantáneo, tracking en tiempo real y análisis post-evento detallado.",
    results:
      "Reducción del 90% en tiempo de registro, eliminación de filas y mejora del 75% en la satisfacción de los asistentes.",
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "AWS Lambda",
      "QR API",
    ],
    year: "2024",
    duration: "4 meses",
    projectUrl: "https://qrevent.app",
  },
    // {
  //   slug: "legrand-digital-transformation",
  //   name: "Legrand Digital Transformation",
  //   client: "Legrand",
  //   title: "Transformación Digital del Proceso de Ventas",
  //   imageUrl: getImagePath("/images/legrand/screenshot-2025-07-08-144638.png"),
  //   description:
  //     "Transformación integral del proceso de ventas de Legrand mediante la implementación de herramientas digitales y automatización.",
  //   challenge:
  //     "Legrand necesitaba modernizar su proceso de ventas, que era principalmente manual y consumía mucho tiempo. Los vendedores dedicaban demasiadas horas a tareas administrativas en lugar de enfocarse en las relaciones con los clientes.",
  //   solution:
  //     "Desarrollamos una plataforma digital integral que automatiza el proceso de ventas, desde la generación de cotizaciones hasta el seguimiento post-venta. Implementamos un CRM personalizado y herramientas de análisis de datos en tiempo real.",
  //   results:
  //     "Reducción del 60% en tiempo dedicado a tareas administrativas, aumento del 35% en conversión de leads y mejora del 45% en satisfacción del cliente.",
  //   technologies: ["React", "Node.js", "MongoDB", "AWS", "Salesforce API"],
  //   year: "2024",
  //   duration: "8 meses",
  //   projectUrl: "https://ventas.legrand.com.co",
  // },
];
