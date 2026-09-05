/**
 * Categorías y elementos de la galería. Cada foto es una entrada
 * independiente con su `category` — una categoría puede tener varias
 * fotos, o ninguna (aparecerá vacía en el filtro hasta que se suba algo).
 * No sustituir por fotografías de stock haciéndolas pasar por actividades
 * reales.
 *
 * Nota: "proyectos" y "campañas" aún no tienen fotos propias de galería
 * (el prefijo `proyectos-` va a la página Programas, no a Galería) — quedan
 * sin elementos hasta que se suba algo con un prefijo dedicado.
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

const CATEGORY_LABELS = Object.fromEntries(
  GALLERY_CATEGORIES.map((category) => [category.id, category.label]),
)

function item(id, category, src) {
  return { id, category, src, alt: `${CATEGORY_LABELS[category]} — Fundación ONG Fulgor Restaurativo` }
}

export const GALLERY_ITEMS = [
  item(
    'galeria-actividades-jornada',
    'actividades',
    'fulgor-restaurativo/galeria/actividades/galeria-actividades-jornada',
  ),
  item(
    'galeria-actividades-01',
    'actividades',
    'fulgor-restaurativo/galeria/actividades/galeria-actividades-01',
  ),
  item(
    'galeria-comunidad-barrio',
    'comunidad',
    'fulgor-restaurativo/galeria/comunidad/galeria-comunidad-barrio',
  ),
  item(
    'galeria-comunidad-01',
    'comunidad',
    'fulgor-restaurativo/galeria/comunidad/galeria-comunidad-01',
  ),
  item(
    'galeria-comunidad-02',
    'comunidad',
    'fulgor-restaurativo/galeria/comunidad/galeria-comunidad-02',
  ),
  item(
    'galeria-educacion-taller',
    'educacion',
    'fulgor-restaurativo/galeria/educacion/galeria-educacion-taller',
  ),
  item(
    'galeria-cultura-evento',
    'cultura',
    'fulgor-restaurativo/galeria/cultura/galeria-cultura-evento',
  ),
  item(
    'galeria-eventos-mayo',
    'eventos',
    'fulgor-restaurativo/galeria/eventos/galeria-eventos-mayo',
  ),
  item(
    'galeria-jornadas-01',
    'jornadas',
    'fulgor-restaurativo/galeria/jornadas/galeria-jornadas-01',
  ),
]
