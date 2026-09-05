import { ImageOff } from 'lucide-react'
import { buildImageUrl, isDirectUrl } from '../../services/cloudinary/buildImageUrl'
import { cn } from '../../utils/cn'

/**
 * Contenedor de imagen con relación de aspecto fija (evita saltos de layout).
 * Sin `src`: muestra un placeholder claramente etiquetado — nunca debe
 * confundirse con una foto real de actividades de la Fundación.
 * Con `src`: si es una URL directa (http(s)://, / o data:) se usa tal cual;
 * si no, se trata como un `public_id` de Cloudinary y se optimiza vía
 * buildImageUrl (f_auto,q_auto). Si Cloudinary aún no está configurado,
 * vuelve a mostrar el placeholder en vez de romper el layout.
 */
function PlaceholderImage({
  src,
  alt = '',
  aspectRatio = '4 / 3',
  label = 'Imagen de ejemplo — pendiente de reemplazo',
  rounded = 'rounded-lg',
  cloudinaryWidth = 1200,
  className,
}) {
  const resolvedSrc = src
    ? isDirectUrl(src)
      ? src
      : buildImageUrl(src, { width: cloudinaryWidth })
    : null

  return (
    <div
      className={cn('relative w-full overflow-hidden bg-bg-alt', rounded, className)}
      style={{ aspectRatio }}
    >
      {resolvedSrc ? (
        <img src={resolvedSrc} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 border-2 border-dashed border-border p-4 text-center">
          <ImageOff className="text-text-muted" size={28} aria-hidden="true" />
          <span className="text-xs font-medium text-text-muted">{label}</span>
        </div>
      )}
    </div>
  )
}

export default PlaceholderImage
