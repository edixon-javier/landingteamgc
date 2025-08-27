import { ClientLogo, Solution, MethodologyStep } from "@/types";
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
      "Proyecto realizado en la Feria del Vino 2023 en Bogotá para Grupo Nazca y Tannic. Mediante un proceso creativo que incluyó bocetos, renders 3D y planificación logística, se diseñó un stand funcional, estético y reutilizable. El resultado fue un espacio que combinó elegancia, practicidad y una atmósfera inmersiva, consolidándose como un punto de encuentro para los amantes del vino.",
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
      "Desde 2018, nuestra agencia acompaña a Philips en la implementación de puntos de experiencia WiZ, activos hasta hoy en día. Estos espacios fueron concebidos como aulas vivas donde los usuarios exploran de manera inmersiva el potencial de la iluminación inteligente. Mediante renders 3D fotorrealistas, modelado a escala real e integración de visuales en espacios comerciales, logramos que cada punto funcionara como un escenario de aprendizaje, conexión y transformación. El resultado ha sido un proyecto sostenible, adaptable y en constante evolución, que lleva más de 6 años inspirando a comunidades en Colombia y Centroamérica.",
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
      "En 2017, nuestro equipo asumió el reto de rediseñar una columna en Éxito Campestre para Philips, logrando que un elemento común se transformara en un soporte visual atractivo y funcional. Desde la conceptualización hasta la implementación final, cada detalle fue cuidadosamente planeado: materiales de calidad, disposición estratégica de productos y diseño inmersivo. Esta instalación P.O.P. no solo reforzó la visibilidad de la marca, sino que también generó una experiencia envolvente para los clientes, guiándolos de manera natural a través del espacio y fortaleciendo su conexión con Philips.",
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
    "En abril de 2024, Penguin Random House, Editorial Planeta y Editorial Sin Fronteras confiaron en nuestro equipo para llevar la magia de la FILBO a los almacenes Éxito. Implementamos stands en Éxito Colina (Bogotá) y Éxito Bello (Antioquia), diseñados para invitar a los visitantes a explorar el mundo literario dentro de un entorno comercial. A través de design thinking, bocetos iniciales, renders 3D y una producción de alto nivel, logramos recrear una atmósfera inspiradora y cultural. Cada stand no solo incrementó la visibilidad y las ventas, sino que también consolidó a los almacenes como puntos de encuentro cultural, ofreciendo una experiencia enriquecedora para lectores y curiosos por igual."
}

];
