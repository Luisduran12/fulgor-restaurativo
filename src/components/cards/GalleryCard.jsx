import Badge from '../ui/Badge'
import PlaceholderImage from '../ui/PlaceholderImage'

/** Miniatura de galería clicable — abre el Lightbox en su índice. */
function GalleryCard({ item, categoryLabel, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative block w-full text-left rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-500"
      aria-label={`Ampliar imagen: ${categoryLabel}`}
    >
      <PlaceholderImage src={item.src} alt={item.alt} aspectRatio="1 / 1" />
      <Badge
        variant="primary"
        className="absolute left-3 top-3 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity"
      >
        {categoryLabel}
      </Badge>
    </button>
  )
}

export default GalleryCard
