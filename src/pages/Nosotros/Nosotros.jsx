import {
  BadgeCheck,
  Compass,
  Eye,
  HandHeart,
  Handshake,
  Heart,
  HeartHandshake,
  RefreshCw,
  Users2,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Seo from '../../components/seo/Seo'
import PageHeader from '../../components/sections/PageHeader'
import Card from '../../components/ui/Card'
import PlaceholderImage from '../../components/ui/PlaceholderImage'
import Reveal from '../../components/ui/Reveal'
import SectionTitle from '../../components/ui/SectionTitle'
import { ROUTES } from '../../config/routes.config'
import { SITE } from '../../config/site.config'

/** Principios y valores oficiales de la Fundación (Sección 1.4). */
const VALUES = [
  {
    id: 'dignidad-humana',
    icon: Heart,
    title: 'Dignidad humana',
    description: 'Reconocemos y respetamos el valor intrínseco de cada persona.',
  },
  {
    id: 'solidaridad',
    icon: HeartHandshake,
    title: 'Solidaridad',
    description: 'Actuamos juntos para construir comunidad y bienestar colectivo.',
  },
  {
    id: 'transparencia',
    icon: Eye,
    title: 'Transparencia',
    description: 'Rendimos cuentas con honestidad ante la sociedad y nuestros aliados.',
  },
  {
    id: 'inclusion',
    icon: Users2,
    title: 'Inclusión',
    description: 'Trabajamos con enfoque diferencial, reconociendo la diversidad.',
  },
  {
    id: 'restauracion',
    icon: RefreshCw,
    title: 'Restauración',
    description:
      'Creemos en la capacidad de sanar, transformar y construir nuevas oportunidades.',
  },
  {
    id: 'responsabilidad-social',
    icon: BadgeCheck,
    title: 'Responsabilidad social',
    description: 'Asumimos compromisos concretos con las comunidades que acompañamos.',
  },
  {
    id: 'compromiso-con-la-paz',
    icon: Handshake,
    title: 'Compromiso con la paz',
    description: 'Contribuimos a la convivencia y la resolución pacífica de conflictos.',
  },
]

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
            <SectionTitle eyebrow="Quiénes somos" title="Nuestra identidad" />
            <p className="mt-6 text-text-muted leading-relaxed">
              La Fundación ONG Fulgor Restaurativo es una entidad sin ánimo de lucro constituida
              y registrada en la Cámara de Comercio de Cúcuta, Norte de Santander, Colombia.
              Somos una organización comprometida con el desarrollo humano integral, la garantía
              de derechos y la transformación social de personas, familias y comunidades.
            </p>
            <h3 className="font-display text-lg text-primary-900 mt-8 mb-2">Nuestra historia</h3>
            <p className="text-text-muted leading-relaxed italic">
              [POR COMPLETAR — historia de la Fundación: cómo nació, quiénes la fundaron,
              cuándo, cuál fue la motivación inicial.]
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <PlaceholderImage
              src="fulgor-restaurativo/institucional/institucional-equipo"
              alt={`Equipo de ${SITE.shortName}`}
              aspectRatio="4 / 3"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-alt">
        <div className="max-w-[var(--fulgor-container-max)] mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal>
              <Card className="p-6 h-full">
                <Compass className="text-primary-600 mb-4" size={28} aria-hidden="true" />
                <h3 className="font-display text-lg text-primary-900 mb-2">Nuestra naturaleza</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Somos una organización civil sin ánimo de lucro. No distribuimos utilidades
                  entre nuestros integrantes: todos los recursos se destinan al cumplimiento de
                  nuestra misión social.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.08}>
              <Card className="p-6 h-full">
                <RefreshCw className="text-primary-600 mb-4" size={28} aria-hidden="true" />
                <h3 className="font-display text-lg text-primary-900 mb-2">
                  Nuestra forma de trabajar
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Actuamos desde un enfoque territorial, comunitario y diferencial. Nos
                  acercamos a las realidades de cada persona y comunidad con respeto, escucha
                  activa y compromiso genuino.{' '}
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
                <Users2 className="text-primary-600 mb-4" size={28} aria-hidden="true" />
                <h3 className="font-display text-lg text-primary-900 mb-2">
                  Poblaciones con las que trabajamos
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Niños, niñas y adolescentes · Jóvenes · Familias · Personas en situación de
                  vulnerabilidad · Comunidades en general. Con enfoque diferencial hacia personas
                  con discapacidad, comunidades étnicas, víctimas del conflicto y población
                  migrante.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ id, icon: Icon, title, description }, index) => (
              <Reveal key={id} delay={(index % 4) * 0.06}>
                <div className="text-center p-4">
                  <Icon className="mx-auto mb-3 text-accent-500" size={26} aria-hidden="true" />
                  <h3 className="font-display text-base text-primary-900 mb-1">{title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{description}</p>
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
            <h2 className="font-display text-2xl text-primary-900 mb-4">Compromiso social</h2>
            <p className="text-text-muted leading-relaxed">
              Entendemos nuestro trabajo no como asistencia, sino como acompañamiento. Creemos
              que cada persona es sujeto de derechos y tiene la capacidad de transformar su
              propia realidad cuando cuenta con las condiciones y el apoyo adecuados.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Nosotros
