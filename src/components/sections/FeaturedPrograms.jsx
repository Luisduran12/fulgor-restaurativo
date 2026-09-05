import { FolderHeart } from 'lucide-react'
import ProgramCard from '../cards/ProgramCard'
import { ROUTES } from '../../config/routes.config'
import { PROGRAMS } from '../../data/programs'
import Button from '../ui/Button'
import EmptyState from '../ui/EmptyState'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

/** Programas destacados en Inicio. Muestra un estado vacío hasta que la
 * Fundación entregue proyectos reales — nunca se inventan aquí. */
function FeaturedPrograms() {
  const featured = PROGRAMS.slice(0, 3)

  return (
    <section className="bg-bg-alt">
      <div className="max-w-[var(--fulgor-container-max)] mx-auto px-6 py-20">
        <SectionTitle
          eyebrow="Programas y proyectos"
          title="Iniciativas en marcha"
          description="Estos son algunos de los programas y proyectos que lideramos junto a las comunidades."
          align="center"
          className="mx-auto mb-12"
        />

        {featured.length === 0 ? (
          <Reveal>
            <EmptyState
              icon={FolderHeart}
              title="Aún no hay programas publicados"
              description="Muy pronto compartiremos aquí los proyectos en marcha de la Fundación."
            />
          </Reveal>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((program, index) => (
              <Reveal key={program.id} delay={index * 0.08}>
                <ProgramCard program={program} compact />
              </Reveal>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <Button variant="outline" to={ROUTES.programas.path}>
            Ver todos los programas
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPrograms
