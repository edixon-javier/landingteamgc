import { Project } from "../types";

/**
 * Datos de los proyectos que se muestran en el portafolio
 */
export const projects: Project[] = [
  {
    id: "qr-event",
    title: "QREventProject",
    challenge: "Crear un sistema de gestión de eventos que facilite el registro y seguimiento de asistentes mediante códigos QR",
    solution: "Desarrollamos una aplicación web responsiva que permite a los organizadores generar códigos QR únicos para cada asistente, validarlos en tiempo real y obtener estadísticas detalladas sobre la asistencia.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "QR API"],
    liveUrl: "https://formularios.equipogctrade.com/",
    repoUrl: "https://github.com/example/qrevent",
    galleryImages: [
      "/projects/qrevent/dashboard.svg",
      "/projects/qrevent/mobile-view.svg",
      "/projects/qrevent/analytics.svg",
      "/projects/qrevent/qr-generator.svg"
    ]
  },
  {
    id: "analytica-crm",
    title: "Analytica CRM",
    challenge: "Diseñar un CRM que integre análisis avanzado de datos y permita a las empresas tomar decisiones basadas en información real",
    solution: "Implementamos un sistema CRM con dashboards personalizables, integración con múltiples fuentes de datos y algoritmos de machine learning para predicción de comportamiento de clientes.",
    tech: ["Vue.js", "Python", "Django", "PostgreSQL", "TensorFlow", "D3.js"],
    liveUrl: "https://analytica-crm.example.com",
    repoUrl: "https://github.com/example/analytica-crm",
    galleryImages: [
      "/projects/analytica/customers-view.svg",
      "/projects/analytica/predictive-dashboard.svg",
      "/projects/analytica/integrations.svg",
      "/projects/analytica/reports.svg"
    ]
  },
  {
    id: "fintech-pro",
    title: "FintechPro",
    challenge: "Desarrollar una plataforma financiera que simplifique la gestión de inversiones para usuarios no expertos",
    solution: "Creamos una interfaz intuitiva que permite visualizar carteras de inversión, realizar simulaciones y acceder a recomendaciones personalizadas basadas en el perfil de riesgo del usuario.",
    tech: ["React Native", "TypeScript", "Firebase", "GraphQL", "Stripe API", "AWS Lambda"],
    liveUrl: "https://fintechpro.example.com",
    repoUrl: "https://github.com/example/fintechpro",
    galleryImages: [
      "/projects/fintechpro/portfolio-view.svg",
      "/projects/fintechpro/investment-simulator.svg",
      "/projects/fintechpro/risk-profile.svg",
      "/projects/fintechpro/performance-tracking.svg"
    ]
  }
];
