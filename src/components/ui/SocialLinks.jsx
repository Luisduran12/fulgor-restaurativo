import { SOCIAL_LINKS } from '../../config/site.config'
import { cn } from '../../utils/cn'
import { FacebookIcon, InstagramIcon } from './SocialIcons'

const ICONS = { instagram: InstagramIcon, facebook: FacebookIcon }

/** Íconos de redes sociales; se ocultan si el enlace real aún no fue entregado. */
function SocialLinks({ className, iconClassName }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {Object.entries(SOCIAL_LINKS).map(([key, { label, url }]) => {
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
