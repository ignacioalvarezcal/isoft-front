// src/data/isoft.ts

export type ServiceIcon = "cpu" | "zap" | "brain" | "shield" | "db" | "chart";

export interface Service {
  icon: ServiceIcon;
  title: string;
  description: string;
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
    title: "Desarrollo de Software a Medida",
    description:
      "Soluciones personalizadas y automatizaciones que transforman sus procesos empresariales con tecnología de vanguardia.",
  },
  {
    icon: "zap",
    title: "Integración de Sistemas",
    description:
      "Conectamos sus plataformas empresariales para crear un ecosistema tecnológico unificado y eficiente.",
  },
  {
    icon: "brain",
    title: "Soluciones de IA",
    description:
      "Implementación de inteligencia artificial con profesionales especializados para optimizar decisiones estratégicas.",
  },
  {
    icon: "shield",
    title: "Auditorías Tecnológicas",
    description:
      "Evaluación exhaustiva de infraestructura y consultoría estratégica para maximizar su inversión tecnológica.",
  },
  {
    icon: "db",
    title: "Flujos ETL Avanzados",
    description:
      "Procesamiento eficiente de grandes volúmenes de datos con pipelines robustos y escalables.",
  },
  {
    icon: "chart",
    title: "Dashboards Interactivos",
    description:
      "Visualización inteligente de datos que convierte información compleja en insights accionables.",
  },
];

export const pillars: Pillar[] = [
  { number: "15+", label: "Años de Experiencia", desc: "Liderando transformación digital" },
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