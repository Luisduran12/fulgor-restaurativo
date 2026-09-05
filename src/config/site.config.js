/**
 * Configuración global del sitio: identidad, contacto y SEO base.
 * Valores marcados [POR COMPLETAR] son datos reales pendientes de entrega
 * por la Fundación — no deben reemplazarse por datos inventados.
 */
export const SITE = {
  legalName: 'FUNDACION ONG FULGOR RESTAURATIVO',
  shortName: 'Fulgor Restaurativo',
  tagline: 'Transformación Social y Desarrollo Humano',
  location: {
    city: 'Cúcuta',
    department: 'Norte de Santander',
    country: 'Colombia',
  },
  legal: {
    registryAuthority: 'Cámara de Comercio de Cúcuta',
    nature: 'Entidad sin ánimo de lucro',
  },
}

export const CONTACT = {
  email: '[POR COMPLETAR]',
  phone: '[POR COMPLETAR]',
  whatsapp: '[POR COMPLETAR]',
  address: 'Cúcuta, Norte de Santander, Colombia',
}

export const SOCIAL_LINKS = {
  instagram: { label: 'FULGOR RESTAURATIVO', url: '[POR COMPLETAR]' },
  facebook: { label: 'FUNDACIÓN ONG FULGOR RESTAURATIVO', url: '[POR COMPLETAR]' },
}

export const SEO_DEFAULTS = {
  titleTemplate: '%s | Fundación ONG Fulgor Restaurativo',
  defaultTitle:
    'Fundación ONG Fulgor Restaurativo | Transformación Social y Desarrollo Humano',
  description: '[POR COMPLETAR — meta description oficial entregada por la Fundación]',
  // Configurable vía VITE_SITE_URL una vez asignado el dominio de Vercel o uno propio,
  // sin necesidad de tocar código. Ver README → "Despliegue en Vercel".
  siteUrl: import.meta.env.VITE_SITE_URL || '[POR COMPLETAR — dominio de Vercel o dominio propio]',
}

/** Endpoint configurable para el envío del formulario de contacto (Fase 9). */
export const CONTACT_FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || ''
