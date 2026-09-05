/**
 * Configuración de Cloudinary a partir de variables de entorno.
 * Ver .env.example para las variables requeridas.
 *
 * Estructura de carpetas esperada en la cuenta de Cloudinary (ver README):
 *   logo/          — logo oficial e isotipos
 *   institucional/ — fotos institucionales, equipo, sede
 *   actividades/   — fotos de actividades y jornadas
 *   proyectos/     — fotos de programas y proyectos
 *   banners/       — imágenes de hero/banners
 *   noticias/      — imágenes de noticias y comunicados
 *   galeria/       — galería pública, organizada por las categorías de data/gallery.js
 *
 * Mientras VITE_CLOUDINARY_CLOUD_NAME no esté configurado, CLOUDINARY_BASE_URL
 * es null y buildImageUrl() devuelve null — los componentes deben volver a
 * mostrar su placeholder en ese caso (ver PlaceholderImage.jsx).
 */
export const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || ''

export const CLOUDINARY_BASE_URL = CLOUDINARY_CLOUD_NAME
  ? `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload`
  : null
