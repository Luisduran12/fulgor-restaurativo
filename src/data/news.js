/**
 * Noticias, actividades, eventos, campañas, convocatorias, historias de
 * impacto y comunicados de la Fundación.
 * NO agregar noticias inventadas. Cada entrada sigue esta forma:
 * { id, title, excerpt, type, date, image, featured }
 * type ∈ 'noticia' | 'actividad' | 'evento' | 'campaña' | 'convocatoria' |
 *        'historia-de-impacto' | 'comunicado'
 * `featured: true` la muestra primero en /noticias.
 */
export const NEWS_ITEMS = [
  {
    id: 'apertura-oficial',
    title: 'Apertura oficial de Fundación ONG Fulgor Restaurativo',
    excerpt:
      'Con alegría anunciamos la apertura oficial de nuestra fundación, comprometida con el desarrollo humano integral, la protección de derechos y la transformación social en Cúcuta y Norte de Santander.',
    type: 'noticia',
    date: '2026-09-04',
    image: 'fulgor-restaurativo/noticias/noticias-apertura',
    featured: true,
  },
]
