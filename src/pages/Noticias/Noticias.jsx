import { Newspaper } from 'lucide-react'
import NewsCard from '../../components/cards/NewsCard'
import Seo from '../../components/seo/Seo'
import PageHeader from '../../components/sections/PageHeader'
import EmptyState from '../../components/ui/EmptyState'
import Reveal from '../../components/ui/Reveal'
import { NEWS_ITEMS } from '../../data/news'

function Noticias() {
  return (
    <>
      <Seo
        title="Noticias"
        description="Noticias, actividades, eventos y comunicados de la Fundación ONG Fulgor Restaurativo."
        path="/noticias"
      />

      <PageHeader
        eyebrow="Noticias / Actualidad"
        title="Lo que compartimos con la comunidad"
        description="Noticias, actividades, eventos, campañas, convocatorias e historias de impacto de la Fundación."
      />

      <section className="bg-bg">
        <div className="max-w-[var(--fulgor-container-max)] mx-auto px-6 py-20">
          {NEWS_ITEMS.length === 0 ? (
            <Reveal>
              <EmptyState
                icon={Newspaper}
                title="Aún no hay noticias publicadas"
                description="Muy pronto compartiremos aquí novedades, eventos y comunicados de la Fundación."
              />
            </Reveal>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {NEWS_ITEMS.map((item, index) => (
                <Reveal key={item.id} delay={(index % 3) * 0.08}>
                  <NewsCard item={item} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Noticias
