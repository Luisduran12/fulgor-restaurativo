import Card from './Card'

/** Estado vacío reutilizable — para secciones cuyo contenido real aún no existe. */
function EmptyState({ icon: Icon, title, description, className }) {
  return (
    <Card className={`max-w-xl mx-auto p-10 text-center ${className ?? ''}`}>
      {Icon && <Icon className="mx-auto mb-4 text-primary-400" size={36} aria-hidden="true" />}
      <h3 className="font-display text-xl text-primary-900 mb-2">{title}</h3>
      {description && <p className="text-text-muted text-sm">{description}</p>}
    </Card>
  )
}

export default EmptyState
