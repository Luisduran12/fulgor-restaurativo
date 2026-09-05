/**
 * Rutas centralizadas del sitio. Navbar, Footer y el Router
 * consumen esta lista única para no duplicar paths ni labels.
 */
export const ROUTES = {
  home: { path: '/', label: 'Inicio' },
  nosotros: { path: '/nosotros', label: 'Nosotros' },
  misionVision: { path: '/mision-y-vision', label: 'Misión y Visión' },
  queHacemos: { path: '/que-hacemos', label: 'Qué hacemos' },
  programas: { path: '/programas', label: 'Programas' },
  impacto: { path: '/impacto', label: 'Impacto' },
  galeria: { path: '/galeria', label: 'Galería' },
  noticias: { path: '/noticias', label: 'Noticias' },
  alianzas: { path: '/alianzas', label: 'Alianzas' },
  transparencia: { path: '/transparencia', label: 'Transparencia' },
  contacto: { path: '/contacto', label: 'Contacto' },
}

/** Rutas mostradas en la navegación principal (header/footer). */
export const NAV_LINKS = [
  ROUTES.home,
  ROUTES.nosotros,
  ROUTES.queHacemos,
  ROUTES.programas,
  ROUTES.impacto,
  ROUTES.galeria,
  ROUTES.noticias,
  ROUTES.transparencia,
  ROUTES.contacto,
]
