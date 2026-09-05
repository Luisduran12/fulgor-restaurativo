import { ArrowRight } from 'lucide-react'
import { ROUTES } from '../../config/routes.config'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

/** Cierre de página: invitación a conocer proyectos o ponerse en contacto. */
function CTA() {
  return (
    <section className="bg-bg-alt">
      <div className="max-w-[var(--fulgor-container-max)] mx-auto px-6 py-20">
        <Reveal
          className="relative overflow-hidden rounded-lg bg-primary-900 px-8 py-14 text-center text-white"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: 'var(--fulgor-gradient-halo)' }}
          />
          <div className="relative max-w-2xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl mb-4">
              Súmate a construir un resplandor restaurativo
            </h2>
            <p className="text-primary-100/80 mb-8">
              Conoce nuestros proyectos en marcha o escríbenos para explorar cómo aliarnos por
              la transformación social en nuestra región.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="accent" size="lg" to={ROUTES.programas.path} icon={ArrowRight}>
                Ver proyectos
              </Button>
              <Button variant="outline-inverse" size="lg" to={ROUTES.contacto.path}>
                Contáctanos
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default CTA
