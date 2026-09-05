import { ShieldCheck } from 'lucide-react'
import DocumentCard from '../../components/cards/DocumentCard'
import Seo from '../../components/seo/Seo'
import PageHeader from '../../components/sections/PageHeader'
import EmptyState from '../../components/ui/EmptyState'
import Reveal from '../../components/ui/Reveal'
import { DOCUMENT_CATEGORIES, DOCUMENTS } from '../../data/documents'

function Transparencia() {
  return (
    <>
      <Seo
        title="Transparencia"
        description="Informes de gestión, estados financieros y certificados de la Fundación ONG Fulgor Restaurativo."
        path="/transparencia"
      />

      <PageHeader
        eyebrow="Transparencia"
        title="Rendición de cuentas"
        description="Publicamos aquí nuestros informes de gestión, estados financieros y certificados a medida que son aprobados."
      />

      <section className="bg-bg">
        <div className="max-w-[var(--fulgor-container-max)] mx-auto px-6 py-20">
          {DOCUMENTS.length === 0 ? (
            <Reveal>
              <EmptyState
                icon={ShieldCheck}
                title="Aún no hay documentos publicados"
                description="Estamos preparando la publicación de nuestros informes de gestión, estados financieros y certificados."
              />
            </Reveal>
          ) : (
            <div className="space-y-12">
              {DOCUMENT_CATEGORIES.map((category) => {
                const items = DOCUMENTS.filter((doc) => doc.category === category.id)
                if (items.length === 0) return null

                return (
                  <Reveal key={category.id}>
                    <h2 className="font-display text-xl text-primary-900 mb-4">
                      {category.label}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {items.map((doc) => (
                        <DocumentCard key={doc.id} document={doc} />
                      ))}
                    </div>
                  </Reveal>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Transparencia
