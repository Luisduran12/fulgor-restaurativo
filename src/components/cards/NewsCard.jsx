import { CalendarClock } from 'lucide-react'
import { formatDate } from '../../utils/formatters'
import Badge from '../ui/Badge'
import Card from '../ui/Card'
import PlaceholderImage from '../ui/PlaceholderImage'

const TYPE_LABELS = {
  noticia: 'Noticia',
  actividad: 'Actividad',
  evento: 'Evento',
  campaña: 'Campaña',
  convocatoria: 'Convocatoria',
  'historia-de-impacto': 'Historia de impacto',
  comunicado: 'Comunicado',
}

/** Tarjeta de noticia/actividad/evento. */
function NewsCard({ item }) {
  const { title, excerpt, type, date, image } = item

  return (
    <Card interactive className="p-6 h-full flex flex-col">
      <PlaceholderImage src={image} alt={title} aspectRatio="16 / 9" className="mb-4" />
      {type && (
        <Badge variant="accent" className="mb-2 self-start">
          {TYPE_LABELS[type] ?? type}
        </Badge>
      )}
      <h3 className="font-display text-lg text-primary-900 mb-2">{title}</h3>
      <p className="text-sm text-text-muted leading-relaxed flex-1">{excerpt}</p>
      {date && (
        <div className="mt-4 pt-4 border-t border-border flex items-center gap-1 text-xs text-text-muted">
          <CalendarClock size={14} aria-hidden="true" />
          {formatDate(date)}
        </div>
      )}
    </Card>
  )
}

export default NewsCard
