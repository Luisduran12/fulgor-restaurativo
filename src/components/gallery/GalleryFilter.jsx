import { cn } from '../../utils/cn'

/** Filtro por categoría de la galería. */
function GalleryFilter({ categories, activeCategory, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filtrar galería por categoría">
      <button
        type="button"
        onClick={() => onChange(null)}
        className={cn(
          'rounded-full px-4 py-2 text-sm font-medium transition-colors',
          activeCategory === null
            ? 'bg-primary-600 text-white'
            : 'bg-bg-alt text-text-muted hover:bg-primary-50',
        )}
        aria-pressed={activeCategory === null}
      >
        Todas
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => onChange(category.id)}
          className={cn(
            'rounded-full px-4 py-2 text-sm font-medium transition-colors',
            activeCategory === category.id
              ? 'bg-primary-600 text-white'
              : 'bg-bg-alt text-text-muted hover:bg-primary-50',
          )}
          aria-pressed={activeCategory === category.id}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}

export default GalleryFilter
