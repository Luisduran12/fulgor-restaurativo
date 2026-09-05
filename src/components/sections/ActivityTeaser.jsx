import { ROUTES } from '../../config/routes.config'
import Button from '../ui/Button'
import PlaceholderImage from '../ui/PlaceholderImage'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

/** Vista previa de actividades — fotos reales llegan vía Cloudinary (Fase 10). */
function ActivityTeaser() {
  return (
    <section className="bg-bg">
      <div className="max-w-[var(--fulgor-container-max)] mx-auto px-6 py-20">
        <SectionTitle
          eyebrow="Nuestras actividades"
          title="Momentos de nuestro trabajo en comunidad"
          align="center"
          className="mx-auto mb-10"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[0, 1, 2, 3].map((index) => (
            <Reveal key={index} delay={index * 0.06}>
              <PlaceholderImage aspectRatio="1 / 1" />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" to={ROUTES.galeria.path}>
            Ver galería completa
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ActivityTeaser
