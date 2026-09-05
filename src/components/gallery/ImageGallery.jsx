import { Images } from 'lucide-react'
import { useMemo, useState } from 'react'
import GalleryCard from '../cards/GalleryCard'
import EmptyState from '../ui/EmptyState'
import Reveal from '../ui/Reveal'
import GalleryFilter from './GalleryFilter'
import Lightbox from './Lightbox'

/** Galería filtrable por categoría con lightbox de navegación. */
function ImageGallery({ items, categories }) {
  const [activeCategory, setActiveCategory] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filteredItems = useMemo(
    () => (activeCategory ? items.filter((item) => item.category === activeCategory) : items),
    [items, activeCategory],
  )

  const categoryLabel = (categoryId) =>
    categories.find((category) => category.id === categoryId)?.label ?? categoryId

  return (
    <div>
      <GalleryFilter
        categories={categories}
        activeCategory={activeCategory}
        onChange={(category) => {
          setActiveCategory(category)
          setLightboxIndex(null)
        }}
      />

      {filteredItems.length === 0 ? (
        <div className="mt-10">
          <EmptyState
            icon={Images}
            title="Aún no hay fotos en esta categoría"
            description="Muy pronto subiremos imágenes reales aquí."
          />
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <Reveal key={item.id} delay={(index % 8) * 0.04}>
              <GalleryCard
                item={item}
                categoryLabel={categoryLabel(item.category)}
                onOpen={() => setLightboxIndex(index)}
              />
            </Reveal>
          ))}
        </div>
      )}

      <Lightbox
        items={filteredItems}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  )
}

export default ImageGallery
