// src/data/isoft.ts

export type ServiceIcon = "cpu" | "zap" | "brain" | "shield" | "db" | "chart";

export interface Service {
  icon: ServiceIcon;
  title: string;
  subtitle?: string;
  description: string;
  slug: string;
}

export interface Pillar {
  number: string;
  label: string;
  desc: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export const services: Service[] = [
  {
    icon: "cpu",
    title: "Software Inteligente a Medida",
    subtitle: "Custom Apps",
    description:
      "No te adaptes al software, hacemos que el software se adapte a tí. Diseñamos plataformas web y móviles para resolver cuellos de botella operativos de tu negocio.",
    slug: "/services/software-development",
  },
  {
    icon: "zap",
    title: "Sincronización de sistemas",
    subtitle: "API Connect",
    description:
      'Conectamos tus "islas de información". Hacemos que tus sistemas hablen entre sí automáticamente, eliminando la doble digitación y los errores de traspaso.',
    slug: "#"
  },
  {
    icon: "brain",
    title: "Asistentes de negocio con IA",
    subtitle: "Smart Solutions",
    description:
      "Implementación de Inteligencia Artificial para tareas especificas: desde chatbots que resuelven dudas y generan acciones hasta algoritmos que predicen tu inventario óptimo.",
    slug: "#"
  },
  {
    icon: "shield",
    title: "Consultoría de estrategia TI",
    subtitle: "Tech Audit",
    description:
      "Evaluación profunda de tu salud tecnológica. No solo buscamos fallas, diseñamos una hoja de ruta para que cada peso invertido en tecnología genere rentabilidad.",
    slug: "#"
  },
  {
    icon: "db",
    title: "Ingeniería de datos en auto",
    subtitle: "Data Pipelines",
    description:
      "Creamos tuberías digitales que extraen, limpian y organizan grandes volúmenes de datos brutos en bases de datos estructuradas, dejandolos listos para el analisis.",
    slug: "#"
  },
  {
    icon: "chart",
    title: "Inteligencia de negocios Pyme",
    subtitle: "BI Express",
    description:
      "Implementación de tableros de control visual. Centralizamos ventas, finanzas u operaciones en una sola pantalla interactiva.",
    slug: "#"
  },
];

export const pillars: Pillar[] = [
  { number: "5+", label: "Años de Experiencia", desc: "Liderando transformación digital" },
  { number: "200+", label: "Proyectos Exitosos", desc: "En empresas Fortune 1000" },
  { number: "98%", label: "Satisfacción Cliente", desc: "Relaciones a largo plazo" },
  { number: "24/7", label: "Soporte Técnico", desc: "Disponibilidad continua" },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Descubrimiento",
    desc: "Análisis profundo de necesidades y objetivos estratégicos",
  },
  {
    step: "02",
    title: "Arquitectura",
    desc: "Diseño de soluciones escalables y resilientes",
  },
  {
    step: "03",
    title: "Implementación",
    desc: "Desarrollo ágil con metodologías probadas",
  },
  {
    step: "04",
    title: "Optimización",
    desc: "Monitoreo continuo y mejoras iterativas",
  },
];