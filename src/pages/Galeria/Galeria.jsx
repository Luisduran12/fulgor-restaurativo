import ImageGallery from '../../components/gallery/ImageGallery'
import Seo from '../../components/seo/Seo'
import PageHeader from '../../components/sections/PageHeader'
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../../data/gallery'

function Galeria() {
  return (
    <>
      <Seo
        title="Galería"
        description="Galería de actividades, proyectos y comunidad de la Fundación ONG Fulgor Restaurativo."
        path="/galeria"
      />

      <PageHeader
        eyebrow="Galería"
        title="Momentos de nuestro trabajo"
        description="Estas fotografías son ejemplos de diseño mientras se publican las imágenes reales de nuestras actividades."
      />

      <section className="bg-bg">
        <div className="max-w-[var(--fulgor-container-max)] mx-auto px-6 py-20">
          <ImageGallery items={GALLERY_ITEMS} categories={GALLERY_CATEGORIES} />
        </div>
      </section>
    </>
  )
}

export default Galeria
