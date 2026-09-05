/**
 * Categorías y elementos de la galería. Los `src` quedan en null hasta que
 * se suban fotografías reales vía Cloudinary (Fase 10) — PlaceholderImage
 * muestra el aviso "Imagen de ejemplo" mientras tanto. No sustituir por
 * fotografías de stock haciéndolas pasar por actividades reales.
 */
export const GALLERY_CATEGORIES = [
  { id: 'actividades', label: 'Actividades' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'comunidad', label: 'Comunidad' },
  { id: 'educacion', label: 'Educación' },
  { id: 'cultura', label: 'Cultura' },
  { id: 'eventos', label: 'Eventos' },
  { id: 'campanas', label: 'Campañas' },
  { id: 'jornadas', label: 'Jornadas' },
]

export const GALLERY_ITEMS = GALLERY_CATEGORIES.map((category) => ({
  id: category.id,
  category: category.id,
  src: null,
  alt: `${category.label} — imagen pendiente de reemplazo`,
}))
