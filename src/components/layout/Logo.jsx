import { NavLink } from 'react-router-dom'
import logoFulgor from '../../assets/logos/logo-fulgor.png'
import { ROUTES } from '../../config/routes.config'
import { SITE } from '../../config/site.config'

/**
 * Logo compartido por Navbar y Footer. Se sirve como archivo local
 * empaquetado (no vía Cloudinary): el logo es un asset de marca fijo,
 * no contenido que cambie con frecuencia, y así siempre se ve —
 * independientemente de si VITE_CLOUDINARY_CLOUD_NAME está configurada
 * en el entorno de build (ej. Vercel).
 *
 * `theme="dark"` ajusta el color del wordmark de texto (fallback) para
 * el fondo oscuro del Footer. El archivo de logo tiene fondo blanco
 * sólido (no transparente) — en tema oscuro se envuelve en un chip
 * blanco redondeado para que se vea intencional en vez de un recuadro
 * suelto.
 */
function Logo({ theme = 'light', className = '' }) {
  const isDark = theme === 'dark'

  const image = (
    <img
      src={logoFulgor}
      alt={SITE.shortName}
      className="h-[52px] w-auto object-contain"
    />
  )

  return (
    <NavLink to={ROUTES.home.path} className={`flex items-center gap-2 shrink-0 ${className}`} end>
      {isDark ? <span className="flex items-center rounded-md bg-white p-1.5">{image}</span> : image}
    </NavLink>
  )
}

export default Logo
