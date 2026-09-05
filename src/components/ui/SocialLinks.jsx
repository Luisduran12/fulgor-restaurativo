import { CONTACT, SOCIAL_LINKS } from '../../config/site.config'
import { cn } from '../../utils/cn'
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons'

const ICONS = { instagram: InstagramIcon, facebook: FacebookIcon, whatsapp: WhatsAppIcon }

/**
 * Íconos de redes sociales (+ WhatsApp); se ocultan si el enlace real aún
 * no fue entregado. `withWhatsapp={false}` lo omite (ej. si ya hay un botón
 * de WhatsApp dedicado en la misma vista, como en la página de Contacto).
 */
function SocialLinks({ className, iconClassName, withWhatsapp = true }) {
  const links = {
    ...SOCIAL_LINKS,
    ...(withWhatsapp
      ? { whatsapp: { label: 'WhatsApp', url: CONTACT.whatsappUrl } }
      : {}),
  }

  return (
    <div className={cn('flex items-center gap-3', className)}>
      {Object.entries(links).map(([key, { label, url }]) => {
        const Icon = ICONS[key]
        const isConfigured = url && url !== '[POR COMPLETAR]'

        return (
          <a
            key={key}
            href={isConfigured ? url : undefined}
            target={isConfigured ? '_blank' : undefined}
            rel={isConfigured ? 'noopener noreferrer' : undefined}
            aria-label={label}
            aria-disabled={!isConfigured}
            title={isConfigured ? label : `${label} — [POR COMPLETAR]`}
            className={cn(
              'transition-colors duration-150',
              isConfigured
                ? 'hover:text-accent-500'
                : 'pointer-events-none opacity-40',
              iconClassName,
            )}
          >
            <Icon size={20} />
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks
