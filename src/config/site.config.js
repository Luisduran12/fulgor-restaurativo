/**
 * Configuración global del sitio: identidad, contacto y SEO base.
 * Valores marcados [POR COMPLETAR] son datos reales pendientes de entrega
 * por la Fundación — no deben reemplazarse por datos inventados.
 */
export const SITE = {
  legalName: 'FUNDACIÓN ONG FULGOR RESTAURATIVO',
  shortName: 'Fulgor Restaurativo',
  tagline: 'Transformación Social y Desarrollo Humano',
  location: {
    city: 'Cúcuta',
    department: 'Norte de Santander',
    country: 'Colombia',
  },
  legal: {
    registryAuthority: 'Cámara de Comercio de Cúcuta',
    registryDate: 'mayo 2026',
    nature: 'Entidad sin ánimo de lucro',
  },
  /**
   * public_id de Cloudinary del logo oficial. Mientras sea null, el Navbar
   * y el Footer usan el wordmark de texto + punto ámbar. Se llena subiendo
   * el logo con scripts/upload-fotos-fulgor.js (prefijo `logo-`) y copiando
   * el public_id desde scripts/resultado-subida.json.
   */
  logo: 'fulgor-restaurativo/logo/logo-fulgor',
}

export const CONTACT = {
  email: 'fulgor.restaurativo@gmail.com',
  phone1: '3132284654',
  phone1Display: '313 228 4654',
  phone2: '3172611230',
  phone2Display: '317 261 1230',
  whatsapp: '573132284654',
  whatsappUrl: 'https://wa.me/573132284654',
  address: {
    line1: 'Av 5 Nro. 12-62, Edificio Colseguros, Oficina 206',
    line2: 'Segundo Piso, Barrio El Centro',
    cityLine: 'Cúcuta, Norte de Santander, Colombia',
  },
}

export const SOCIAL_LINKS = {
  instagram: {
    label: 'FULGOR RESTAURATIVO',
    url: 'https://www.instagram.com/fulgor_restaurativo?igsh=MW95N2p5ZGdqanNoNQ==',
  },
  facebook: {
    label: 'FUNDACIÓN ONG FULGOR RESTAURATIVO',
    url: 'https://www.facebook.com/share/1HdpP3DiuV/',
  },
}

export const SEO_DEFAULTS = {
  titleTemplate: '%s | Fundación ONG Fulgor Restaurativo',
  defaultTitle:
    'Fundación ONG Fulgor Restaurativo | Transformación Social y Desarrollo Humano',
  description:
    'Fundación ONG Fulgor Restaurativo: organización sin ánimo de lucro dedicada al desarrollo humano integral, protección de derechos, procesos restaurativos, intervención social y construcción de paz en Cúcuta, Colombia.',
  keywords:
    'fundación, ONG, Cúcuta, Norte de Santander, desarrollo humano, procesos restaurativos, protección de derechos, intervención social, construcción de paz, Colombia',
  // Configurable vía VITE_SITE_URL una vez asignado el dominio de Vercel o uno propio,
  // sin necesidad de tocar código. Ver README → "Despliegue en Vercel".
  siteUrl: import.meta.env.VITE_SITE_URL || '[POR COMPLETAR — dominio de Vercel o dominio propio]',
}

/** Endpoint configurable para el envío del formulario de contacto (Fase 9). */
export const CONTACT_FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || ''
