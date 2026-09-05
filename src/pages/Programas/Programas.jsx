import { FolderHeart } from 'lucide-react'
import ProgramCard from '../../components/cards/ProgramCard'
import Seo from '../../components/seo/Seo'
import PageHeader from '../../components/sections/PageHeader'
import Button from '../../components/ui/Button'
import EmptyState from '../../components/ui/EmptyState'
import Reveal from '../../components/ui/Reveal'
import { ROUTES } from '../../config/routes.config'
import { SITE } from '../../config/site.config'
import { PROGRAMS } from '../../data/programs'

function Programas() {
  return (
    <>
      <Seo
        title="Programas y Proyectos"
        description={`Programas y proyectos de ${SITE.legalName} en ${SITE.location.city}, ${SITE.location.department}.`}
        path="/programas"
      />

      <PageHeader
        eyebrow="Programas y proyectos"
        title="Iniciativas que lideramos junto a las comunidades"
        description="Cada programa responde a una o varias de nuestras líneas de acción, con un objetivo, una población y un territorio concretos."
      />

      <section className="bg-bg">
        <div className="max-w-[var(--fulgor-container-max)] mx-auto px-6 py-20">
          {PROGRAMS.length === 0 ? (
            <Reveal>
              <EmptyState
                icon={FolderHeart}
                title="Aún no hay programas publicados"
                description="Estamos preparando la publicación oficial de nuestros programas y proyectos. Si quieres conocer más sobre nuestro trabajo mientras tanto, escríbenos."
              />
              <div className="mt-8 text-center">
                <Button variant="outline" to={ROUTES.contacto.path}>
                  Contáctanos
                </Button>
              </div>
            </Reveal>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROGRAMS.map((program, index) => (
                <Reveal key={program.id} delay={(index % 3) * 0.08}>
                  <ProgramCard program={program} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Programas
