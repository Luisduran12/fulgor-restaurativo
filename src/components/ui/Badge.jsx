import { cn } from '../../utils/cn'

const VARIANT_CLASSES = {
  primary: 'bg-primary-50 text-primary-700',
  accent: 'bg-accent-100 text-accent-600',
  neutral: 'bg-bg-alt text-text-muted',
  success: 'bg-success/10 text-success',
  error: 'bg-error/10 text-error',
}

/** Etiqueta pequeña tipo píldora — estado de proyecto, categoría de galería, etc. */
function Badge({ children, variant = 'neutral', className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        VARIANT_CLASSES[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}

export default Badge
