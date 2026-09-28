import type { IconName } from '../components/atoms/Icon'

/* Contenido del sitio, separado de la presentación.
   Para añadir un proyecto, un servicio o un canal basta con editar este archivo. */

export const navItems = [
  { label: 'Inicio', href: '#home' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Proceso', href: '#process' },
]

// TODO: reemplazar por los datos reales de contacto de Dacax.
export const contact = {
  whatsapp: 'https://wa.me/',
  email: 'mailto:',
  linkedin: 'https://www.linkedin.com/',
  instagram: 'https://www.instagram.com/',
}

export interface ContactChannel {
  label: string
  href: string
  icon: IconName
}

export const contactChannels: ContactChannel[] = [
  { label: 'WhatsApp', href: contact.whatsapp, icon: 'message' },
  { label: 'Correo', href: contact.email, icon: 'mail' },
  { label: 'LinkedIn', href: contact.linkedin, icon: 'linkedin' },
  { label: 'Instagram', href: contact.instagram, icon: 'instagram' },
]

export const about = {
  statement:
    'Somos Dacax, un estudio que transforma ideas en productos digitales. Unimos diseño, ingeniería y tecnología de vanguardia con un enfoque centrado en las personas, para crear soluciones tan intuitivas como potentes.',
  pillars: [
    {
      title: 'Centrado en el usuario',
      description: 'Diseñamos cada interacción pensando en quienes la usarán todos los días.',
    },
    {
      title: 'Tecnología de vanguardia',
      description: 'Elegimos herramientas modernas y probadas para construir productos rápidos, seguros y escalables.',
    },
    {
      title: 'Acompañamiento continuo',
      description: 'Seguimos a tu lado después del lanzamiento, con soporte y mejoras constantes.',
    },
  ],
}

export interface Service {
  icon: IconName
  title: string
  description: string
}

export const services: Service[] = [
  {
    icon: 'smartphone',
    title: 'App Móvil',
    description:
      'Llevamos tu idea a la palma de la mano con aplicaciones móviles intuitivas, rápidas y diseñadas para brindar la mejor experiencia.',
  },
  {
    icon: 'layout',
    title: 'Landing Pages',
    description:
      'Creamos landing pages atractivas y optimizadas para captar la atención de tus clientes y convertir visitas en oportunidades reales.',
  },
  {
    icon: 'code',
    title: 'Software a Medida',
    description:
      'Desarrollamos soluciones personalizadas que se adaptan a tu negocio, optimizan procesos y resuelven problemas específicos.',
  },
  {
    icon: 'cloud',
    title: 'SaaS',
    description:
      'Ofrecemos aplicaciones en la nube listas para usar, con escalabilidad, seguridad y sin la complejidad de la instalación tradicional.',
  },
  {
    icon: 'workflow',
    title: 'Automatización de Procesos',
    description:
      'Implementamos herramientas inteligentes que eliminan tareas repetitivas, ahorran tiempo y aumentan la eficiencia.',
  },
  {
    icon: 'shield',
    title: 'Mantenimiento y Soporte',
    description:
      'Nos aseguramos de que tus sistemas funcionen siempre al 100%, con actualizaciones y soporte técnico cuando lo necesites.',
  },
]

export interface Project {
  id: string
  title: string
  category: string
  description: string
  features: string[]
  image: { src: string; srcSet: string; width: number; height: number; alt: string }
}

// El showcase muestra controles para cambiar de proyecto en cuanto haya más de uno.
export const projects: Project[] = [
  {
    id: 'auditai',
    title: 'AuditAI',
    category: 'Inteligencia artificial · Auditoría',
    description:
      'Proyecto impulsado por inteligencia artificial que analiza documentos y genera reportes de auditoría detallados con total precisión.',
    features: ['Auditorías rápidas con IA', 'Exportación de reportes en un clic', 'Ahorro de tiempo en revisiones'],
    image: {
      src: '/images/projects/auditai-1200.webp',
      srcSet: '/images/projects/auditai-1200.webp 1200w, /images/projects/auditai-2400.webp 2400w',
      width: 2400,
      height: 1377,
      alt: 'Pantalla principal de AuditAI: «Optimize your Audit with AI», con el botón Start Audit y las tarjetas Fast, Precision y Security.',
    },
  },
]

export const processSteps = [
  {
    title: 'Descubrimos',
    description: 'Entendemos tu negocio, a tus usuarios y el problema que hay que resolver.',
  },
  {
    title: 'Diseñamos',
    description: 'Prototipamos la experiencia y definimos la arquitectura antes de escribir código.',
  },
  {
    title: 'Desarrollamos',
    description: 'Construimos en ciclos cortos, con entregas frecuentes y siempre visibles.',
  },
  {
    title: 'Evolucionamos',
    description: 'Lanzamos, medimos y damos soporte continuo para que tu producto siga creciendo.',
  },
]
