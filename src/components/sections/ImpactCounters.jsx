import { ROUTES } from '../../config/routes.config'
import { IMPACT_STATS } from '../../data/impact'
import StatCard from '../cards/StatCard'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

/** Resumen de impacto en Inicio — versión completa en la página Impacto. */
function ImpactCounters() {
  const featured = IMPACT_STATS.slice(0, 6)

  return (
    <section className="bg-primary-900 text-white">
      <div className="max-w-[var(--fulgor-container-max)] mx-auto px-6 py-20">
        <SectionTitle
          eyebrow="Nuestro impacto"
          title="Cifras que iremos construyendo juntos"
          description="Estas cifras se actualizarán a medida que la Fundación consolide sus datos oficiales de impacto."
          align="center"
          theme="dark"
          className="mx-auto mb-12"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {featured.map((stat, index) => (
            <Reveal key={stat.id} delay={index * 0.06}>
              <StatCard label={stat.label} value={stat.value} theme="dark" />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline-inverse" to={ROUTES.impacto.path}>
            Ver más sobre nuestro impacto
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ImpactCounters
