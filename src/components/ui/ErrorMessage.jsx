import { AlertCircle } from 'lucide-react'
import { cn } from '../../utils/cn'

/** Aviso de error inline (ej. fallo al enviar el formulario de contacto). */
function ErrorMessage({ children, className }) {
  if (!children) return null

  return (
    <div
      role="alert"
      className={cn(
        'flex items-start gap-2 rounded-md bg-error/10 text-error px-4 py-3 text-sm',
        className,
      )}
    >
      <AlertCircle size={18} className="shrink-0 mt-0.5" aria-hidden="true" />
      <span>{children}</span>
    </div>
  )
}

export default ErrorMessage
