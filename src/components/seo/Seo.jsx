import { Helmet } from 'react-helmet-async'
import { SEO_DEFAULTS, SITE } from '../../config/site.config'

const SITE_URL_CONFIGURED =
  SEO_DEFAULTS.siteUrl && !SEO_DEFAULTS.siteUrl.startsWith('[POR COMPLETAR')

/**
 * SEO por página: título, meta description, Open Graph y Twitter Card.
 * Evita repetir estas etiquetas en cada página — pasar solo lo que cambia.
 */
function Seo({ title, description, path = '' }) {
  const fullTitle = title ? `${title} | ${SITE.shortName}` : SEO_DEFAULTS.defaultTitle
  const finalDescription = description || SEO_DEFAULTS.description
  const url = SITE_URL_CONFIGURED ? `${SEO_DEFAULTS.siteUrl}${path}` : undefined

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      {url && <link rel="canonical" href={url} />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.shortName} />
      <meta property="og:locale" content="es_CO" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      {url && <meta property="og:url" content={url} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
    </Helmet>
  )
}

export default Seo
