import StatCard from '../../components/cards/StatCard'
import Seo from '../../components/seo/Seo'
import PageHeader from '../../components/sections/PageHeader'
import Button from '../../components/ui/Button'
import Reveal from '../../components/ui/Reveal'
import { ROUTES } from '../../config/routes.config'
import { IMPACT_STATS } from '../../data/impact'

function Impacto() {
  return (
    <>
      <Seo
        title="Nuestro Impacto"
        description="Cifras de impacto de la Fundación ONG Fulgor Restaurativo en Cúcuta, Norte de Santander."
        path="/impacto"
      />

      <PageHeader
        eyebrow="Nuestro impacto"
        title="Cifras que reflejan nuestro trabajo"
        description="Estamos consolidando la medición oficial de nuestro impacto. Estas cifras se irán publicando a medida que la Fundación las verifique."
      />

      <section className="bg-bg">
        <div className="max-w-[var(--fulgor-container-max)] mx-auto px-6 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-14">
            {IMPACT_STATS.map((stat, index) => (
              <Reveal key={stat.id} delay={(index % 4) * 0.06}>
                <StatCard label={stat.label} value={stat.value} theme="light" />
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" to={ROUTES.programas.path}>
              Conoce los programas que generan este impacto
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Impacto
