import {
  AlertTriangle,
  BookOpen,
  Briefcase,
  Brain,
  Handshake,
  Heart,
  HeartHandshake,
  Home,
  Leaf,
  LifeBuoy,
  Lightbulb,
  Link as LinkIcon,
  MapPin,
  Palette,
  RefreshCw,
  Shield,
  Star,
  Users,
} from 'lucide-react'

/**
 * Líneas de acción de la Fundación — texto e íconos oficiales entregados
 * por la Fundación. No modificar sin confirmación oficial.
 */
export const ACTION_AREAS = [
  {
    id: 1,
    icon: Shield,
    title: 'Garantía y protección de derechos',
    description:
      'Promovemos el acceso a derechos fundamentales y acompañamos procesos de restitución y protección.',
    image: 'fulgor-restaurativo/que-hacemos/que-hacemos-derechos-01',
  },
  {
    id: 2,
    icon: RefreshCw,
    title: 'Procesos restaurativos',
    description:
      'Facilitamos espacios de diálogo, reparación del daño y reconstrucción de vínculos sociales y familiares.',
    image: 'fulgor-restaurativo/que-hacemos/que-hacemos-restaurativos-01',
  },
  {
    id: 3,
    icon: Users,
    title: 'Intervención social y comunitaria',
    description:
      'Desarrollamos programas con enfoque territorial para el fortalecimiento de comunidades.',
    image: 'fulgor-restaurativo/que-hacemos/que-hacemos-comunidad-01',
  },
  {
    id: 4,
    icon: Heart,
    title: 'Protección integral de niñez y adolescencia',
    description:
      'Acompañamos a niños, niñas y adolescentes en el ejercicio pleno de sus derechos.',
  },
  {
    id: 5,
    icon: Star,
    title: 'Atención a jóvenes',
    description:
      'Generamos oportunidades de desarrollo, participación y proyección de vida para la juventud.',
  },
  {
    id: 6,
    icon: Home,
    title: 'Acompañamiento a familias',
    description: 'Fortalecemos los vínculos familiares y capacidades de cuidado y protección.',
  },
  {
    id: 7,
    icon: HeartHandshake,
    title: 'Atención a población vulnerable',
    description: 'Brindamos acompañamiento integral a personas en situación de vulnerabilidad.',
  },
  {
    id: 8,
    icon: Brain,
    title: 'Atención psicosocial',
    description: 'Ofrecemos acompañamiento emocional y psicosocial a personas y comunidades.',
  },
  {
    id: 9,
    icon: AlertTriangle,
    title: 'Prevención de riesgos sociales',
    description:
      'Desarrollamos acciones preventivas frente a violencias, consumos y situaciones de riesgo.',
  },
  {
    id: 10,
    icon: Handshake,
    title: 'Convivencia y paz integral',
    description: 'Promovemos la cultura de paz, el diálogo y la resolución pacífica de conflictos.',
  },
  {
    id: 11,
    icon: BookOpen,
    title: 'Educación y desarrollo humano',
    description: 'Impulsamos procesos formativos orientados al crecimiento personal y colectivo.',
  },
  {
    id: 12,
    icon: Palette,
    title: 'Actividades culturales y artísticas',
    description: 'Usamos el arte y la cultura como herramientas de transformación social.',
  },
  {
    id: 13,
    icon: Briefcase,
    title: 'Inclusión social y laboral',
    description:
      'Generamos rutas de inclusión, orientación vocacional y oportunidades de desarrollo.',
  },
  {
    id: 14,
    icon: MapPin,
    title: 'Desarrollo comunitario',
    description:
      'Acompañamos procesos de organización, participación y desarrollo en los territorios.',
  },
  {
    id: 15,
    icon: Leaf,
    title: 'Seguridad alimentaria',
    description: 'Promovemos el acceso a alimentación adecuada y soberanía alimentaria.',
  },
  {
    id: 16,
    icon: LifeBuoy,
    title: 'Atención humanitaria',
    description: 'Respondemos a situaciones de emergencia y crisis con atención oportuna.',
  },
  {
    id: 17,
    icon: Lightbulb,
    title: 'Innovación social',
    description:
      'Exploramos nuevas metodologías y enfoques para responder a los desafíos sociales.',
  },
  {
    id: 18,
    icon: LinkIcon,
    title: 'Alianzas y desarrollo sostenible',
    description: 'Construimos redes de cooperación para ampliar el impacto de nuestros programas.',
  },
]

/** Áreas destacadas en Inicio (por id, en este orden). */
export const FEATURED_ACTION_AREA_IDS = [1, 2, 3, 4, 11, 10]
