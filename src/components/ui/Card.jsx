import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../../utils/cn'

/**
 * Contenedor base de tarjeta. `interactive` añade elevación + halo ámbar
 * en hover, pensado para tarjetas de programas/noticias/galería clicables.
 */
function Card({ children, as: Tag = 'div', interactive = false, className, ...rest }) {
  const prefersReducedMotion = useReducedMotion()

  const classes = cn(
    'bg-surface border border-border rounded-lg shadow-sm',
    interactive && 'transition-shadow duration-250',
    interactive && !prefersReducedMotion && 'hover:shadow-hover',
    className,
  )

  if (interactive && !prefersReducedMotion) {
    const MotionTag = motion[Tag] ?? motion.div
    return (
      <MotionTag whileHover={{ y: -4 }} className={classes} {...rest}>
        {children}
      </MotionTag>
    )
  }

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  )
}

export default Card
