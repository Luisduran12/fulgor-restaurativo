/**
 * Categorías y elementos de la galería. Los `src` quedan en null hasta que
 * se suban fotografías reales vía Cloudinary — PlaceholderImage muestra el
 * aviso "Imagen de ejemplo" mientras tanto. No sustituir por fotografías de
 * stock haciéndolas pasar por actividades reales.
 *
 * Nota: "proyectos" y "jornadas" no tienen un prefijo propio en
 * scripts/upload-fotos-fulgor.js (ver fotos-fulgor/README-FOTOS.md) —
 * quedan como placeholder hasta definir cómo clasificarlas.
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

/** public_id de Cloudinary por categoría — null mientras no haya foto real. */
const SRC_BY_CATEGORY = {
  actividades: 'fulgor-restaurativo/galeria/actividades/galeria-actividades-jornada',
  comunidad: 'fulgor-restaurativo/galeria/comunidad/galeria-comunidad-barrio',
  cultura: 'fulgor-restaurativo/galeria/cultura/galeria-cultura-evento',
  educacion: 'fulgor-restaurativo/galeria/educacion/galeria-educacion-taller',
  eventos: 'fulgor-restaurativo/galeria/eventos/galeria-eventos-mayo',
}

export const GALLERY_ITEMS = GALLERY_CATEGORIES.map((category) => ({
  id: category.id,
  category: category.id,
  src: SRC_BY_CATEGORY[category.id] ?? null,
  alt: `${category.label} — Fundación ONG Fulgor Restaurativo`,
}))
