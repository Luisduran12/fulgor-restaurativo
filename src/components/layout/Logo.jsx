import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../config/routes.config'
import { SITE } from '../../config/site.config'
import { resolveImageSrc } from '../../services/cloudinary/buildImageUrl'

/**
 * Logo compartido por Navbar y Footer. Si SITE.logo (public_id de
 * Cloudinary) está configurado, muestra el logo real; si no, usa el
 * wordmark de texto + punto ámbar como marca temporal.
 *
 * La imagen se pide con `crop: 'fit'` (nunca 'fill') para que Cloudinary
 * la escale sin recortarla, y se renderiza con object-fit: contain +
 * height: auto + max-height, para que siempre se vea completa.
 *
 * `theme="dark"` ajusta el color del wordmark de texto para el fondo
 * oscuro del Footer. El archivo de logo actual tiene fondo blanco sólido
 * (no transparente) — en tema oscuro se envuelve en un chip blanco
 * redondeado para que se vea intencional en vez de un recuadro suelto.
 */
function Logo({ theme = 'light', className = '' }) {
  const logoSrc = resolveImageSrc(SITE.logo, { height: 140, crop: 'fit' })
  const isDark = theme === 'dark'

  const image = (
    <img
      src={logoSrc}
      alt={SITE.shortName}
      className="h-[52px] w-auto object-contain"
    />
  )

  return (
    <NavLink to={ROUTES.home.path} className={`flex items-center gap-2 shrink-0 ${className}`} end>
      {logoSrc ? (
        isDark ? (
          <span className="flex items-center rounded-md bg-white p-1.5">{image}</span>
        ) : (
          image
        )
      ) : (
        <>
          <span
            className="h-3 w-3 rounded-full bg-accent-500"
            style={{ boxShadow: '0 0 12px 2px rgba(242,168,59,0.6)' }}
            aria-hidden="true"
          />
          <span
            className={`font-display text-lg leading-tight ${isDark ? 'text-white' : 'text-primary-900'}`}
          >
            Fundación ONG
            <br />
            <span className={isDark ? 'text-primary-200' : 'text-primary-500'}>
              {SITE.shortName}
            </span>
          </span>
        </>
      )}
    </NavLink>
  )
}

export default Logo
