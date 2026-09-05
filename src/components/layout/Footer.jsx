import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { NAV_LINKS } from '../../config/routes.config'
import { CONTACT, SITE } from '../../config/site.config'
import SocialLinks from '../ui/SocialLinks'

function ContactLine({ icon: Icon, value, href }) {
  const isConfigured = value && value !== '[POR COMPLETAR]'

  return (
    <li className="flex items-start gap-2">
      <Icon size={16} className="mt-0.5 shrink-0 text-accent-400" aria-hidden="true" />
      {isConfigured && href ? (
        <a href={href} className="hover:text-accent-400 transition-colors">
          {value}
        </a>
      ) : (
        <span className={!isConfigured ? 'italic opacity-70' : ''}>{value}</span>
      )}
    </li>
  )
}

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary-900 text-primary-50">
      <div className="max-w-[var(--fulgor-container-max)] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="font-display text-xl mb-3">{SITE.shortName}</p>
          <p className="text-sm text-primary-100/80 max-w-xs mb-6">
            {SITE.legal.nature} dedicada a la {SITE.tagline.toLowerCase()} en{' '}
            {SITE.location.city}, {SITE.location.department}.
          </p>
          <SocialLinks className="text-primary-100" />
        </div>

        <nav aria-label="Enlaces de navegación del pie de página">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-400 mb-4">
            Navegación
          </p>
          <ul className="space-y-2 text-sm text-primary-100/80">
            {NAV_LINKS.map((route) => (
              <li key={route.path}>
                <Link to={route.path} className="hover:text-accent-400 transition-colors">
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-400 mb-4">
            Contacto
          </p>
          <ul className="space-y-2 text-sm text-primary-100/80">
            <ContactLine icon={MapPin} value={CONTACT.address} />
            <ContactLine icon={Mail} value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
            <ContactLine icon={Phone} value={CONTACT.phone} href={`tel:${CONTACT.phone}`} />
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-800">
        <div className="max-w-[var(--fulgor-container-max)] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-100/60">
          <p>
            © {year} {SITE.legalName} · {SITE.location.city}, {SITE.location.department},{' '}
            {SITE.location.country}
          </p>
          <span className="italic opacity-70">Política de privacidad (próximamente)</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
