import { Eye, HeartPulse, Layers, RefreshCw, Scale, Sprout, Target, Users2 } from 'lucide-react'
import Seo from '../../components/seo/Seo'
import PageHeader from '../../components/sections/PageHeader'
import Card from '../../components/ui/Card'
import Reveal from '../../components/ui/Reveal'
import SectionTitle from '../../components/ui/SectionTitle'

/** Enfoques de trabajo oficiales de la Fundación (Sección 1.5). */
const ENFOQUES = [
  {
    id: 'diferencial',
    icon: Layers,
    title: 'Enfoque diferencial',
    description:
      'Reconocimiento de las particularidades de cada población (niñez, adolescencia, juventud, mujeres, personas mayores, personas con discapacidad, comunidades étnicas).',
  },
  {
    id: 'derechos',
    icon: Scale,
    title: 'Enfoque de derechos',
    description: 'Las personas son sujetos de derechos, no objetos de asistencia.',
  },
  {
    id: 'psicosocial',
    icon: HeartPulse,
    title: 'Enfoque psicosocial',
    description:
      'Atención integral que reconoce la dimensión emocional, relacional y comunitaria.',
  },
  {
    id: 'restaurativo',
    icon: RefreshCw,
    title: 'Enfoque restaurativo',
    description:
      'Procesos que reparan el daño, reconstruyen vínculos y generan nuevas oportunidades.',
  },
  {
    id: 'desarrollo-humano',
    icon: Sprout,
    title: 'Enfoque de desarrollo humano',
    description: 'Fortalecimiento de capacidades, autonomía y proyección de vida.',
  },
  {
    id: 'comunitario',
    icon: Users2,
    title: 'Enfoque comunitario',
    description: 'Intervención con y desde las comunidades, no solo para ellas.',
  },
]

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
              <p className="text-text-muted leading-relaxed">
                La Fundación ONG Fulgor Restaurativo tiene como misión promover el desarrollo
                humano integral, la garantía y protección de los derechos y la transformación
                social mediante alternativas de atención, intervención e incidencia social y
                comunitaria.
              </p>
              <p className="mt-4 text-text-muted leading-relaxed">
                Desarrollamos programas, proyectos, actividades colectivas, culturales,
                educativas, institucionales y comunitarias, orientados al acompañamiento
                integral de procesos psicosociales, restaurativos, preventivos y de atención
                humanitaria, fortaleciendo a las personas, las familias y las comunidades.
              </p>
              <p className="mt-4 text-text-muted leading-relaxed">
                Nuestra labor está dirigida a la población en general, con enfoque diferencial
                y especial atención a niños, niñas, adolescentes, jóvenes, sus familias y
                personas en situación de vulnerabilidad, contribuyendo a la convivencia, la
                inclusión, la paz integral, el desarrollo sostenible y la construcción de
                nuevas oportunidades de vida.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="p-8 h-full">
              <Eye className="text-primary-600 mb-4" size={32} aria-hidden="true" />
              <h2 className="font-display text-2xl text-primary-900 mb-4">Visión 2030</h2>
              <p className="text-text-muted leading-relaxed">
                Para el año 2030, la Fundación ONG Fulgor Restaurativo será una organización
                reconocida en Colombia y con proyección internacional por su liderazgo en la
                intervención social, el desarrollo comunitario, la protección integral, la
                garantía de derechos y la implementación de procesos restaurativos.
              </p>
              <p className="mt-4 text-text-muted leading-relaxed">
                Buscamos consolidarnos como una organización capaz de generar respuestas
                integrales e innovadoras para las personas, familias y comunidades, mediante
                programas y proyectos orientados a la prevención, la inclusión social, el
                desarrollo humano, la educación, la participación comunitaria, la construcción
                de paz y la generación de oportunidades, contribuyendo a una sociedad más
                justa, incluyente, solidaria y restaurativa.
              </p>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-alt">
        <div className="max-w-[var(--fulgor-container-max)] mx-auto px-6 py-20">
          <SectionTitle
            eyebrow="Enfoques de trabajo"
            title="Cómo entendemos nuestro trabajo"
            align="center"
            className="mx-auto mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENFOQUES.map(({ id, icon: Icon, title, description }, index) => (
              <Reveal key={id} delay={(index % 3) * 0.08}>
                <Card className="p-6 h-full">
                  <Icon className="text-primary-600 mb-4" size={26} aria-hidden="true" />
                  <h3 className="font-display text-base text-primary-900 mb-2">{title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default MisionVision
