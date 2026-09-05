/**
 * Configuración de Cloudinary.
 *
 * El cloud name queda hardcodeado como valor por defecto: es un dato
 * público (aparece en cada URL de imagen servida a cualquier visitante),
 * no un secreto, y depender de VITE_CLOUDINARY_CLOUD_NAME en el entorno
 * de build causó que las imágenes no cargaran en producción cuando esa
 * variable no estaba configurada en Vercel. Si en el futuro se cambia de
 * cuenta de Cloudinary, VITE_CLOUDINARY_CLOUD_NAME sigue pudiendo
 * sobreescribir este valor sin tocar código.
 *
 * Estructura de carpetas esperada en la cuenta de Cloudinary (ver README):
 *   logo/          — logo oficial e isotipos (ya no se usa vía Cloudinary, ver Logo.jsx)
 *   institucional/ — fotos institucionales, equipo, sede
 *   actividades/   — fotos de actividades y jornadas
 *   proyectos/     — fotos de programas y proyectos
 *   banners/       — imágenes de hero/banners
 *   noticias/      — imágenes de noticias y comunicados
 *   galeria/       — galería pública, organizada por las categorías de data/gallery.js
 */
const DEFAULT_CLOUDINARY_CLOUD_NAME = 'dibjbl4zp'

export const CLOUDINARY_CLOUD_NAME =
  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || DEFAULT_CLOUDINARY_CLOUD_NAME

export const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload`
