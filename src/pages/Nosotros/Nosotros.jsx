import { BadgeCheck, Compass, HandHeart, Landmark, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import Seo from '../../components/seo/Seo'
import PageHeader from '../../components/sections/PageHeader'
import Card from '../../components/ui/Card'
import PlaceholderImage from '../../components/ui/PlaceholderImage'
import Reveal from '../../components/ui/Reveal'
import SectionTitle from '../../components/ui/SectionTitle'
import { ROUTES } from '../../config/routes.config'
import { SITE } from '../../config/site.config'

const VALUES_PLACEHOLDER = [1, 2, 3, 4]

function Nosotros() {
  return (
    <>
      <Seo
        title="Nosotros"
        description={`Conoce a ${SITE.legalName}, ${SITE.legal.nature.toLowerCase()} en ${SITE.location.city}, ${SITE.location.department}.`}
        path="/nosotros"
      />

      <PageHeader
        eyebrow="Nosotros"
        title="Quiénes somos"
        description="Una organización comprometida con la transformación social y el desarrollo humano en Cúcuta y Norte de Santander."
      />

      <section className="bg-bg">
        <div className="max-w-[var(--fulgor-container-max)] mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <SectionTitle
              eyebrow="Quiénes somos"
              title="Nuestra historia y propósito"
            />
            <p className="mt-6 text-text-muted leading-relaxed">
              {SITE.legalName} es una {SITE.legal.nature.toLowerCase()} con domicilio en{' '}
              {SITE.location.city}, {SITE.location.department}, registrada ante la{' '}
              {SITE.legal.registryAuthority}. Nuestro propósito es acompañar procesos de
              transformación social y desarrollo humano en las comunidades donde trabajamos.
            </p>
            <p className="mt-4 text-text-muted leading-relaxed italic">
              [POR COMPLETAR — historia detallada de la Fundación: origen, hitos y trayectoria]
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <PlaceholderImage aspectRatio="4 / 3" />
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-alt">
        <div className="max-w-[var(--fulgor-container-max)] mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal>
              <Card className="p-6 h-full">
                <Landmark className="text-primary-600 mb-4" size={28} aria-hidden="true" />
                <h3 className="font-display text-lg text-primary-900 mb-2">
                  Naturaleza jurídica
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {SITE.legal.nature}, con certificado de existencia y representación de la{' '}
                  {SITE.legal.registryAuthority}.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.08}>
              <Card className="p-6 h-full">
                <Compass className="text-primary-600 mb-4" size={28} aria-hidden="true" />
                <h3 className="font-display text-lg text-primary-900 mb-2">Cómo trabajamos</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  A través de líneas de acción articuladas — desarrollo humano, protección
                  integral, procesos restaurativos y más.{' '}
                  <Link
                    to={ROUTES.queHacemos.path}
                    className="text-primary-600 underline underline-offset-2"
                  >
                    Conoce qué hacemos
                  </Link>
                  .
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.16}>
              <Card className="p-6 h-full">
                <Users className="text-primary-600 mb-4" size={28} aria-hidden="true" />
                <h3 className="font-display text-lg text-primary-900 mb-2">
                  Poblaciones que acompañamos
                </h3>
                <p className="text-sm text-text-muted leading-relaxed italic">
                  [POR COMPLETAR — caracterización oficial de las poblaciones atendidas]
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="max-w-[var(--fulgor-container-max)] mx-auto px-6 py-20">
          <SectionTitle
            eyebrow="Principios y valores"
            title="Lo que guía nuestro trabajo"
            align="center"
            className="mx-auto mb-12"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {VALUES_PLACEHOLDER.map((n, index) => (
              <Reveal key={n} delay={index * 0.06}>
                <div className="text-center p-4">
                  <BadgeCheck className="mx-auto mb-3 text-accent-500" size={26} aria-hidden="true" />
                  <p className="text-sm text-text-muted italic">[POR COMPLETAR]</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-alt">
        <div className="max-w-[var(--fulgor-container-max)] mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <PlaceholderImage aspectRatio="4 / 3" />
          </Reveal>
          <Reveal delay={0.1}>
            <HandHeart className="text-primary-600 mb-4" size={28} aria-hidden="true" />
            <h2 className="font-display text-2xl text-primary-900 mb-4">
              Enfoque diferencial y compromiso social
            </h2>
            <p className="text-text-muted leading-relaxed italic">
              [POR COMPLETAR — descripción del enfoque diferencial y el compromiso social de la
              Fundación con las comunidades y poblaciones que acompaña]
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Nosotros
