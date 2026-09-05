import { CLOUDINARY_BASE_URL } from './cloudinaryClient'

/**
 * Construye una URL optimizada de Cloudinary a partir de un `publicId`
 * (ej. "institucional/sede-cucuta"), aplicando `f_auto,q_auto` y un ancho
 * responsive opcional. Devuelve null si Cloudinary no está configurado o
 * si no se recibió `publicId` — quien la use debe volver a su placeholder.
 */
export function buildImageUrl(publicId, { width, height, crop = 'fill' } = {}) {
  if (!CLOUDINARY_BASE_URL || !publicId) return null

  const transformations = ['f_auto', 'q_auto']
  if (width) transformations.push(`w_${width}`)
  if (height) transformations.push(`h_${height}`)
  if (width || height) transformations.push(`c_${crop}`)

  return `${CLOUDINARY_BASE_URL}/${transformations.join(',')}/${publicId}`
}

/** true si el valor ya es una URL utilizable directamente (no un public_id de Cloudinary). */
export function isDirectUrl(value) {
  return /^(https?:)?\/\//.test(value) || value.startsWith('/') || value.startsWith('data:')
}

/**
 * Resuelve cualquier valor de imagen (URL directa, public_id de Cloudinary,
 * o vacío) a una URL final utilizable en un <img src>. Devuelve null si no
 * hay nada que mostrar — el componente debe volver a su placeholder.
 * Usado por PlaceholderImage y por el logo del Navbar.
 */
export function resolveImageSrc(value, options) {
  if (!value) return null
  return isDirectUrl(value) ? value : buildImageUrl(value, options)
}

/**
 * Genera `src` + `srcSet` responsive para un public_id de Cloudinary, para
 * usar en <img srcSet> cuando se necesite servir distintos tamaños según
 * el viewport (ej. banners a todo el ancho).
 */
export function buildResponsiveImage(publicId, widths = [400, 800, 1200]) {
  if (!CLOUDINARY_BASE_URL || !publicId) return { src: null, srcSet: null }

  const srcSet = widths
    .map((width) => `${buildImageUrl(publicId, { width })} ${width}w`)
    .join(', ')

  return { src: buildImageUrl(publicId, { width: widths[widths.length - 1] }), srcSet }
}
