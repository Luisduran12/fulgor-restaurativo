import { ACTION_AREAS, FEATURED_ACTION_AREA_IDS } from '../../data/actionAreas'
import { ROUTES } from '../../config/routes.config'
import Button from '../ui/Button'
import Card from '../ui/Card'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

const FEATURED_AREAS = FEATURED_ACTION_AREA_IDS.map((id) =>
  ACTION_AREAS.find((area) => area.id === id),
)

/** Grilla de las líneas de acción destacadas de la Fundación (versión completa en Qué hacemos). */
function ActionAreas() {
  return (
    <section className="bg-bg">
      <div className="max-w-[var(--fulgor-container-max)] mx-auto px-6 py-20">
        <SectionTitle
          eyebrow="Qué hacemos"
          title="Nuestras líneas de acción"
          description="Trabajamos de forma integral a través de estas líneas, articuladas entre sí para acompañar procesos de transformación real."
          align="center"
          className="mx-auto mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_AREAS.map(({ id, icon: Icon, title, description }, index) => (
            <Reveal key={id} delay={(index % 3) * 0.08}>
              <Card className="p-6 h-full">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent-500 text-primary-900">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg text-primary-900 mb-2">{title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{description}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" to={ROUTES.queHacemos.path}>
            Ver todas nuestras líneas de acción
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ActionAreas
