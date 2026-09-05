import { motion, useReducedMotion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

const VARIANT_CLASSES = {
  primary:
    'bg-primary-500 text-white hover:bg-primary-600 focus-visible:outline-accent-500',
  accent:
    'bg-accent-500 text-primary-900 hover:bg-accent-400 focus-visible:outline-primary-700',
  outline:
    'bg-transparent text-primary-700 border border-primary-300 hover:bg-primary-50',
  'outline-inverse':
    'bg-transparent text-white border border-white/40 hover:bg-white/10',
  ghost: 'bg-transparent text-primary-700 hover:bg-primary-50',
  whatsapp: 'bg-[#25D366] text-white hover:bg-[#1ebe57] focus-visible:outline-primary-700',
}

const SIZE_CLASSES = {
  sm: 'text-sm px-4 py-2 gap-1.5',
  md: 'text-base px-6 py-3 gap-2',
  lg: 'text-lg px-8 py-4 gap-2.5',
}

/**
 * Botón de marca con estados default/hover/focus/active/disabled/loading.
 * Renderiza <Link> (ruta interna vía `to`), <a> (externa vía `href`) o <button>.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon: Icon,
  loading = false,
  disabled = false,
  fullWidth = false,
  className,
  ...rest
}) {
  const prefersReducedMotion = useReducedMotion()
  const isDisabled = disabled || loading

  const classes = cn(
    'inline-flex items-center justify-center rounded-full font-medium',
    'transition-colors duration-150 ease-out',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-none',
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    fullWidth && 'w-full',
    className,
  )
  const wrapperClasses = fullWidth ? 'block w-full' : 'inline-block'

  const content = (
    <>
      {loading && <Loader2 className="animate-spin" size={18} aria-hidden="true" />}
      {!loading && Icon && <Icon size={18} aria-hidden="true" />}
      <span>{children}</span>
    </>
  )

  const motionProps = prefersReducedMotion
    ? {}
    : { whileHover: isDisabled ? {} : { scale: 1.02 }, whileTap: isDisabled ? {} : { scale: 0.98 } }

  if (to && !isDisabled) {
    return (
      <motion.span {...motionProps} className={wrapperClasses}>
        <Link to={to} className={classes} {...rest}>
          {content}
        </Link>
      </motion.span>
    )
  }

  if (href && !isDisabled) {
    const isExternal = /^https?:\/\//.test(href)
    return (
      <motion.span {...motionProps} className={wrapperClasses}>
        <a
          href={href}
          className={classes}
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          {...rest}
        >
          {content}
        </a>
      </motion.span>
    )
  }

  return (
    <motion.button
      {...motionProps}
      type="button"
      className={classes}
      disabled={isDisabled}
      aria-busy={loading}
      {...rest}
    >
      {content}
    </motion.button>
  )
}

export default Button
