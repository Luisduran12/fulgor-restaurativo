import { Heart } from 'lucide-react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Badge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import ErrorMessage from '../../components/ui/ErrorMessage'
import Loading from '../../components/ui/Loading'
import Modal from '../../components/ui/Modal'
import PlaceholderImage from '../../components/ui/PlaceholderImage'
import SectionTitle from '../../components/ui/SectionTitle'

/**
 * Catálogo interno de componentes UI — no forma parte de la navegación
 * pública. Referencia visual para el equipo mientras se construyen las
 * páginas reales.
 */
function StyleGuide() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="max-w-[var(--fulgor-container-max)] mx-auto px-6 py-16 space-y-16">
      <Helmet>
        <title>Catálogo de componentes (interno)</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <SectionTitle
        eyebrow="Sistema de diseño"
        title="Catálogo de componentes UI"
        description="Referencia interna — no es contenido público del sitio."
      />

      <section className="space-y-4">
        <h3 className="font-display text-xl text-primary-900">Botones</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primario</Button>
          <Button variant="accent">Acento</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="primary" icon={Heart}>Con ícono</Button>
          <Button variant="primary" loading>Cargando</Button>
          <Button variant="primary" disabled>Deshabilitado</Button>
          <Button variant="accent" to="/">Link interno</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-display text-xl text-primary-900">Badges</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="primary">Primario</Badge>
          <Badge variant="accent">Acento</Badge>
          <Badge variant="neutral">Neutral</Badge>
          <Badge variant="success">Activo</Badge>
          <Badge variant="error">Cerrado</Badge>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-display text-xl text-primary-900">Tarjetas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card interactive className="p-6">
            <PlaceholderImage className="mb-4" />
            <Badge variant="primary" className="mb-2">Programa</Badge>
            <h4 className="font-display text-lg text-primary-900 mb-2">
              Nombre del proyecto
            </h4>
            <p className="text-text-muted text-sm">
              Descripción breve del proyecto o programa de la Fundación.
            </p>
          </Card>
          <Card interactive className="p-6">
            <PlaceholderImage className="mb-4" aspectRatio="16 / 9" />
            <h4 className="font-display text-lg text-primary-900 mb-2">Noticia</h4>
            <p className="text-text-muted text-sm">Tarjeta de noticia/actividad.</p>
          </Card>
          <Card className="p-6">
            <h4 className="font-display text-lg text-primary-900 mb-2">No interactiva</h4>
            <p className="text-text-muted text-sm">Sin hover, para contenido estático.</p>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-display text-xl text-primary-900">Estados</h3>
        <Loading label="Cargando programas…" />
        <ErrorMessage>No se pudo enviar el formulario. Intenta de nuevo.</ErrorMessage>
      </section>

      <section className="space-y-4">
        <h3 className="font-display text-xl text-primary-900">Modal</h3>
        <Button variant="primary" onClick={() => setModalOpen(true)}>
          Abrir modal
        </Button>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Título del modal">
          <p className="text-text-muted">Contenido de ejemplo dentro del modal.</p>
        </Modal>
      </section>
    </div>
  )
}

export default StyleGuide
