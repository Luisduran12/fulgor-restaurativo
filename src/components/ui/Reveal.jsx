import { motion, useReducedMotion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'

/** Envuelve contenido con un fade/slide sutil al entrar en el viewport. */
function Reveal({ children, as = 'div', delay = 0, y = 24, className }) {
  const [ref, isVisible] = useScrollReveal()
  const prefersReducedMotion = useReducedMotion()
  const MotionTag = motion[as] ?? motion.div

  if (prefersReducedMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </MotionTag>
  )
}

export default Reveal
