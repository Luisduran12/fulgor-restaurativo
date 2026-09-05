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
