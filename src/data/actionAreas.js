import {
  BookOpen,
  Handshake,
  HeartHandshake,
  HeartPulse,
  LifeBuoy,
  Palette,
  ShieldAlert,
  ShieldCheck,
  Sprout,
  Sunrise,
  Users,
  Wheat,
} from 'lucide-react'

/**
 * Líneas de acción de la Fundación — tal como fueron entregadas en el
 * documento de requisitos. Las descripciones son enunciados genéricos
 * derivados del nombre de cada línea, no logros ni cifras específicas.
 */
export const ACTION_AREAS = [
  {
    id: 'desarrollo-humano',
    icon: Sprout,
    title: 'Desarrollo Humano',
    description:
      'Procesos que fortalecen capacidades, autonomía y proyecto de vida de las personas.',
  },
  {
    id: 'proteccion-integral',
    icon: ShieldCheck,
    title: 'Protección Integral',
    description:
      'Garantía y restablecimiento de derechos para la protección integral de niños, niñas, adolescentes y familias.',
  },
  {
    id: 'procesos-restaurativos',
    icon: HeartHandshake,
    title: 'Procesos Restaurativos',
    description:
      'Prácticas restaurativas orientadas a la reparación, el diálogo y la reconciliación.',
  },
  {
    id: 'atencion-psicosocial',
    icon: HeartPulse,
    title: 'Atención Psicosocial',
    description:
      'Acompañamiento emocional y psicosocial para la recuperación y el bienestar integral.',
  },
  {
    id: 'prevencion',
    icon: ShieldAlert,
    title: 'Prevención',
    description:
      'Estrategias de prevención frente a riesgos sociales que afectan a comunidades vulnerables.',
  },
  {
    id: 'educacion',
    icon: BookOpen,
    title: 'Educación',
    description: 'Fortalecimiento de trayectorias educativas y oportunidades de aprendizaje.',
  },
  {
    id: 'cultura',
    icon: Palette,
    title: 'Cultura',
    description: 'Expresiones culturales y artísticas como herramienta de transformación social.',
  },
  {
    id: 'desarrollo-comunitario',
    icon: Users,
    title: 'Desarrollo Comunitario',
    description:
      'Fortalecimiento del tejido social y las capacidades organizativas de las comunidades.',
  },
  {
    id: 'inclusion-social',
    icon: Handshake,
    title: 'Inclusión Social',
    description:
      'Acciones que promueven la participación y la igualdad de oportunidades para todos.',
  },
  {
    id: 'construccion-de-paz',
    icon: Sunrise,
    title: 'Construcción de Paz',
    description:
      'Iniciativas que promueven la convivencia, la reconciliación y la paz territorial.',
  },
  {
    id: 'atencion-humanitaria',
    icon: LifeBuoy,
    title: 'Atención Humanitaria',
    description: 'Respuesta humanitaria a población en situación de vulnerabilidad o crisis.',
  },
  {
    id: 'seguridad-alimentaria',
    icon: Wheat,
    title: 'Seguridad Alimentaria',
    description: 'Acciones orientadas a garantizar el acceso a una alimentación digna y nutritiva.',
  },
]
