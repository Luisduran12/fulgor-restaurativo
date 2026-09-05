import { CalendarDays, MapPin } from 'lucide-react'
import Badge from '../ui/Badge'
import Card from '../ui/Card'
import PlaceholderImage from '../ui/PlaceholderImage'

/**
 * Tarjeta de programa/proyecto. `compact` oculta el detalle de lugar/fecha
 * (usado en la vista destacada de Inicio); la vista completa (Programas)
 * muestra todos los metadatos disponibles.
 */
function ProgramCard({ program, compact = false }) {
  const { name, description, place, date, status, image } = program

  return (
    <Card interactive className="p-6 h-full flex flex-col">
      <PlaceholderImage src={image} alt={name} className="mb-4" />
      {status && (
        <Badge variant="primary" className="mb-2 self-start">
          {status}
        </Badge>
      )}
      <h3 className="font-display text-lg text-primary-900 mb-2">{name}</h3>
      <p className="text-sm text-text-muted leading-relaxed flex-1">{description}</p>

      {!compact && (place || date) && (
        <div className="mt-4 pt-4 border-t border-border flex flex-wrap gap-4 text-xs text-text-muted">
          {place && (
            <span className="flex items-center gap-1">
              <MapPin size={14} aria-hidden="true" />
              {place}
            </span>
          )}
          {date && (
            <span className="flex items-center gap-1">
              <CalendarDays size={14} aria-hidden="true" />
              {date}
            </span>
          )}
        </div>
      )}
    </Card>
  )
}

export default ProgramCard
