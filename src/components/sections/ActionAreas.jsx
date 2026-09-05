import { ACTION_AREAS } from '../../data/actionAreas'
import Card from '../ui/Card'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

/** Grilla de las líneas de acción de la Fundación. */
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
          {ACTION_AREAS.map(({ id, icon: Icon, title, description }, index) => (
            <Reveal key={id} delay={(index % 3) * 0.08}>
              <Card className="p-6 h-full">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg text-primary-900 mb-2">{title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ActionAreas
