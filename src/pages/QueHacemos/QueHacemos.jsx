import Seo from '../../components/seo/Seo'
import PageHeader from '../../components/sections/PageHeader'
import Card from '../../components/ui/Card'
import PlaceholderImage from '../../components/ui/PlaceholderImage'
import Reveal from '../../components/ui/Reveal'
import { ACTION_AREAS } from '../../data/actionAreas'

function QueHacemos() {
  return (
    <>
      <Seo
        title="Qué hacemos"
        description="Líneas de acción de la Fundación ONG Fulgor Restaurativo: desarrollo humano, protección integral, procesos restaurativos y más."
        path="/que-hacemos"
      />

      <PageHeader
        eyebrow="Qué hacemos"
        title="Líneas de acción integrales"
        description="Cada línea de acción se articula con las demás para acompañar procesos de transformación real en las comunidades donde trabajamos."
      />

      <section className="bg-bg">
        <div className="max-w-[var(--fulgor-container-max)] mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ACTION_AREAS.map(({ id, icon: Icon, title, description, image }, index) => (
              <Reveal key={id} delay={(index % 3) * 0.08}>
                <Card className="overflow-hidden h-full flex flex-col">
                  <PlaceholderImage
                    src={image}
                    alt={title}
                    aspectRatio="16 / 9"
                    rounded="rounded-t-lg"
                  />
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="-mt-12 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-500 text-primary-900 shadow-md self-start">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <h2 className="font-display text-xl text-primary-900 mb-2">{title}</h2>
                    <p className="text-sm text-text-muted leading-relaxed">{description}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default QueHacemos
