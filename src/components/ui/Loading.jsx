import { Loader2 } from 'lucide-react'
import { cn } from '../../utils/cn'

const SIZE_PX = { sm: 18, md: 28, lg: 40 }

/** Indicador de carga accesible (aria-live) para estados async de la UI. */
function Loading({ label = 'Cargando…', size = 'md', className }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn('flex flex-col items-center justify-center gap-3 py-8 text-text-muted', className)}
    >
      <Loader2 className="animate-spin text-primary-500" size={SIZE_PX[size]} aria-hidden="true" />
      <span className="text-sm">{label}</span>
    </div>
  )
}

export default Loading
