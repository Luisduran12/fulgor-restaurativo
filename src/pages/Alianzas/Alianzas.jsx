import { Handshake } from 'lucide-react'
import AllyCard from '../../components/cards/AllyCard'
import Seo from '../../components/seo/Seo'
import PageHeader from '../../components/sections/PageHeader'
import EmptyState from '../../components/ui/EmptyState'
import Reveal from '../../components/ui/Reveal'
import { ALLIANCES } from '../../data/alliances'

function Alianzas() {
  return (
    <>
      <Seo
        title="Alianzas"
        description="Organizaciones aliadas de la Fundación ONG Fulgor Restaurativo."
        path="/alianzas"
      />

      <PageHeader
        eyebrow="Alianzas"
        title="Con quiénes trabajamos"
        description="Construimos juntos con organizaciones, instituciones y comunidades que comparten nuestro propósito."
      />

      <section className="bg-bg">
        <div className="max-w-[var(--fulgor-container-max)] mx-auto px-6 py-20">
          {ALLIANCES.length === 0 ? (
            <Reveal>
              <EmptyState
                icon={Handshake}
                title="Aún no hay alianzas publicadas"
                description="Estamos formalizando la publicación oficial de nuestras alianzas y organizaciones colaboradoras."
              />
            </Reveal>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {ALLIANCES.map((ally, index) => (
                <Reveal key={ally.id} delay={(index % 4) * 0.06}>
                  <AllyCard ally={ally} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Alianzas
