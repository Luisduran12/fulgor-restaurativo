import { cn } from '../../utils/cn'

/**
 * Encabezado de sección: eyebrow (etiqueta corta en ámbar) + título display
 * + descripción opcional. Usar al inicio de cada sección de página.
 * `theme="dark"` ajusta los colores para fondos oscuros (ej. hero, impacto).
 */
function SectionTitle({ eyebrow, title, description, align = 'left', theme = 'light', className }) {
  const isCentered = align === 'center'
  const isDark = theme === 'dark'

  return (
    <div
      className={cn(
        'max-w-2xl',
        isCentered && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'text-sm font-semibold tracking-wide uppercase mb-2',
            isDark ? 'text-accent-400' : 'text-accent-600',
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'font-display text-3xl md:text-4xl',
          isDark ? 'text-white' : 'text-primary-900',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed',
            isDark ? 'text-primary-100/80' : 'text-text-muted',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionTitle
