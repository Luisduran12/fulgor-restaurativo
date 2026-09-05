import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ROUTES } from '../config/routes.config'
import { SITE } from '../config/site.config'

function NotFound() {
  return (
    <section
      style={{
        padding: 'var(--fulgor-space-24) var(--fulgor-space-6)',
        textAlign: 'center',
      }}
    >
      <Helmet>
        <title>Página no encontrada | {SITE.shortName}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <h1>404 — Página no encontrada</h1>
      <p style={{ color: 'var(--fulgor-text-muted)' }}>
        La página que buscas no existe o fue movida.
      </p>
      <Link to={ROUTES.home.path} style={{ color: 'var(--fulgor-primary-600)' }}>
        Volver al inicio
      </Link>
    </section>
  )
}

export default NotFound
