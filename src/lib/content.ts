import { ClientLogo, Solution, MethodologyStep } from "@/types";
import { getImagePath } from "./utils";

export const solutionsData: Solution[] = [
  {
    title: "Estrategia y Design Thinking",
    description:
      "Transformamos desafíos de negocio en oportunidades de crecimiento. Aplicamos Design Thinking para crear estrategias que resuenan con tus clientes y generan resultados medibles.",
    href: "/casos-de-exito-thinking/",
  },
   {
    title: "Desarrollo y Tecnología a Medida",
    description:
      "Creamos las herramientas digitales que tu negocio necesita para escalar. Desde CRMs y aplicaciones logísticas hasta plataformas web, construimos soluciones robustas y centradas en el usuario.",
    href: "/casos-de-exito",
  },
  {
    title: "Operaciones y Logística Inteligente",
    description:
      "Optimizamos tu cadena de suministro de principio a fin. Integramos tecnología y procesos eficientes para reducir costos, agilizar operaciones y superar las expectativas de tus clientes.",
    href: "/casos-de-exito/",
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
    title:
      "Nuestra plataforma automatiza documentos, organiza la información y agiliza procesos comerciales y logísticos en tiempo real.",
    subtitle:
      "Administra campañas comerciales, productos, entregas y remisiones de forma centralizada y segura.",
    imageUrl: getImagePath("/images/suvey_cibersegurity/logo.webp"),
    description:
      "Plataforma para la clasificación y búsqueda semántica de documentos de ciberseguridad utilizando inteligencia artificial.",
  },
  {
    slug: "dultos-consultans-platform",
    name: "CRM para el Sector Asegurador",
    title:
      "Nuestro CRM especializado para el sector asegurador centraliza la información, agiliza procesos y genera reportes en tiempo real.",
    subtitle:
      "Gestiona pólizas, clientes y renovaciones de forma automática y segura.",
    imageUrl: getImagePath("/images/dultos-consultans/logo.webp"),
    description:
      "Sistema CRM para la gestión automatizada de pólizas y clientes en el sector de seguros.",
  },
  {
    slug: "nazca-restaurant-management",
    name: "Gestión Integral para Restaurantes",
    title:
      "Digitaliza tu restaurante con menús QR, pedidos en línea y administración centralizada.",
    subtitle: "Menú Digital y Gestión de Pedidos para Restaurantes",
    imageUrl: getImagePath("/images/restaurant/elegant.webp"),
    description:
      "Sistema integral de gestión para restaurantes que optimiza operaciones, inventario y experiencia del cliente.",
  },
  {
    slug: "prh-content-management",
    name: "Plataforma de Gestión de RRHH",
    title:
      "Nuestra plataforma automatiza documentos, organiza la información y agiliza procesos comerciales y logísticos en tiempo real.",
    subtitle:
      "Administra campañas comerciales, productos, entregas y remisiones de forma centralizada y segura.",
    imageUrl: getImagePath("/images/rg7_prh/logo.webp"),
    description:
      "Plataforma para la gestión eficiente de procesos de recursos humanos y generación de reportes en Penguin Random House.",
  },
  {
    slug: "qr-event-management",
    name: "Gestión de Eventos con Códigos QR",
    title:
      "Nuestra plataforma centraliza y automatiza el registro de datos y facilita el análisis de resultados en tiempo real.",
    subtitle:
      "Gestiona campañas comerciales y capta información en campo mediante formularios inteligentes con códigos QR.",
    imageUrl: getImagePath("/images/QrEvent/profesional_form.webp"),
    description:
      "Sistema innovador de gestión de eventos que utiliza códigos QR para optimizar el registro y seguimiento de asistentes.",
  },
];

export const caseStudiesDataThinking = [
  {
    slug: "showroom-wiz",
    name: "Showroom WiZ: El Hogar Inteligente",
    title:
      "Diseñamos un showroom inmersivo que simula un apartamento minimalista, demostrando cómo la tecnología WiZ transforma por completo un hogar.",
    subtitle:
      "Permite a los visitantes controlar y personalizar la iluminación por voz o app, experimentando en tiempo real la creación de atmósferas únicas.",
    imageUrl: getImagePath("/images/wiz/wizv1.png"),
    description:
      "Creación de un showroom experiencial para WiZ en Homecenter, diseñado para simular un hogar inteligente y permitir a los usuarios interactuar con la tecnología de iluminación.",
  },
  {
    slug: "librero-toysmart",
    name: "Librero TOYSMART",
    title:
      "Reimaginamos espacios infantiles a través del design thinking, creando un mueble librero más funcional y atractivo para Penguin Random House.",
    subtitle:
      "Una experiencia innovadora para los más pequeños, combinando estética, practicidad y branding.",
    imageUrl: getImagePath("/images/toysmart/frame4.png"),
    description:
      "Proyecto desarrollado en conjunto con Penguin Random House y la cadena TOYSMART. Mediante un enfoque de design thinking, rediseñamos un librero 360° para hacerlo más ligero, funcional y adaptado al público infantil, manteniendo la identidad de marca y mejorando la experiencia de acceso a los libros.",
  },
  {
    slug: "stand-tannic",
    name: "Stand Tannic - Vino al Parque",
    title:
      "Diseñamos y ejecutamos un stand elegante y versátil para Grupo Nazca y Tannic en la Feria del Vino 2023 en Bogotá.",
    subtitle:
      "Un espacio sofisticado de degustación que elevó la experiencia del vino para aficionados y expertos.",
    imageUrl: getImagePath("/images/tanic/tannicv1.png"),
    description:
      "Proyecto realizado en la Feria del Vino 2023 en Bogotá para Grupo Nazca y Tannic. A través de bocetos, renders 3D y planificación logística, creamos un stand funcional y elegante que combinó practicidad y una atmósfera inmersiva, consolidándose como un punto de encuentro destacado para los amantes del vino.",
  },
  {
    slug: "punto-experiencia-wiz",
    name: "Punto de Experiencia WiZ - Philips",
    title:
      "Creamos espacios interactivos para democratizar la iluminación inteligente en Colombia y Centroamérica.",
    subtitle:
      "Un proyecto innovador que transformó la manera en que las personas perciben y viven la iluminación.",
    imageUrl: getImagePath("/images/puntowiz/wizv2.png"),
    description:
      "Desde 2018 acompañamos a Philips con la implementación de puntos de experiencia WiZ en Colombia y Centroamérica. Estos espacios invitan a los usuarios a explorar la iluminación inteligente mediante diseños a escala real y renders 3D integrados al entorno comercial, convirtiéndose en escenarios de aprendizaje e innovación.",
  },
  {
    slug: "columna-philips-exito",
    name: "Columna Philips Éxito - Campestre",
    title:
      "Transformamos una columna convencional en un punto de atracción innovador para Philips en Éxito Campestre.",
    subtitle:
      "Un proyecto de instalación P.O.P. que convirtió un espacio cotidiano en una experiencia inmersiva para los clientes.",
    imageUrl: getImagePath("/images/philips/philips1.png"),
    description:
      "En 2017 rediseñamos una columna en Éxito Campestre para Philips, transformándola en un soporte visual atractivo y funcional. Con materiales de calidad y una disposición estratégica, logramos una instalación P.O.P. que resaltó la marca y mejoró la experiencia de compra de los clientes.",
  },
  {
    slug: "filbo-exito",
    name: "FILBO en Almacenes Éxito",
    title:
      "Transformamos espacios comerciales en escenarios culturales para las principales editoriales de Colombia.",
    subtitle:
      "Un proyecto que llevó la atmósfera de la Feria Internacional del Libro a los pasillos de Almacenes Éxito.",
  imageUrl: getImagePath("/images/filbo/filbov2.png"),
    description:
      "En abril de 2024 llevamos la experiencia de la FILBO a Almacenes Éxito con Penguin Random House, Editorial Planeta y Editorial Sin Fronteras. Implementamos stands en Bogotá y Antioquia que recrearon el ambiente de feria del libro, combinando diseño, producción y montaje para atraer lectores y generar un impacto cultural y comercial.",
  },
];
