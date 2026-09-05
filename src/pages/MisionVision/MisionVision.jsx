import { Compass, Eye, Gem, Target } from 'lucide-react'
import Seo from '../../components/seo/Seo'
import PageHeader from '../../components/sections/PageHeader'
import Card from '../../components/ui/Card'
import Reveal from '../../components/ui/Reveal'
import SectionTitle from '../../components/ui/SectionTitle'

const PRINCIPLES_PLACEHOLDER = [1, 2, 3, 4, 5, 6]

function MisionVision() {
  return (
    <>
      <Seo
        title="Misión y Visión"
        description="Misión, visión 2030, principios y valores de la Fundación ONG Fulgor Restaurativo."
        path="/mision-y-vision"
      />

      <PageHeader
        eyebrow="Misión y Visión"
        title="Hacia dónde vamos"
        description="El propósito que nos mueve y el futuro que queremos construir junto a las comunidades."
      />

      <section className="bg-bg">
        <div className="max-w-[var(--fulgor-container-max)] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal>
            <Card className="p-8 h-full">
              <Target className="text-primary-600 mb-4" size={32} aria-hidden="true" />
              <h2 className="font-display text-2xl text-primary-900 mb-4">Misión</h2>
              <p className="text-text-muted leading-relaxed italic">
                [POR COMPLETAR — texto oficial de la misión institucional]
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="p-8 h-full">
              <Eye className="text-primary-600 mb-4" size={32} aria-hidden="true" />
              <h2 className="font-display text-2xl text-primary-900 mb-4">Visión 2030</h2>
              <p className="text-text-muted leading-relaxed italic">
                [POR COMPLETAR — texto oficial de la visión 2030]
              </p>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-alt">
        <div className="max-w-[var(--fulgor-container-max)] mx-auto px-6 py-20">
          <SectionTitle
            eyebrow="Principios"
            title="Los principios que orientan nuestras decisiones"
            align="center"
            className="mx-auto mb-12"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {PRINCIPLES_PLACEHOLDER.map((n, index) => (
              <Reveal key={n} delay={index * 0.05}>
                <div className="text-center p-4">
                  <Gem className="mx-auto mb-3 text-accent-500" size={24} aria-hidden="true" />
                  <p className="text-sm text-text-muted italic">[POR COMPLETAR]</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="max-w-[var(--fulgor-container-max)] mx-auto px-6 py-20">
          <Reveal className="max-w-3xl mx-auto text-center">
            <Compass className="mx-auto mb-4 text-primary-600" size={32} aria-hidden="true" />
            <h2 className="font-display text-2xl text-primary-900 mb-4">Nuestro enfoque</h2>
            <p className="text-text-muted leading-relaxed italic">
              [POR COMPLETAR — enfoque diferencial, territorial y restaurativo que guía la
              implementación de nuestros programas]
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default MisionVision
