import { useReducedMotion } from 'framer-motion'
import { useCountUp } from '../../hooks/useCountUp'
import { useScrollReveal } from '../../hooks/useScrollReveal'

/**
 * Tarjeta de cifra de impacto. Anima 0 → valor cuando entra en viewport.
 * Si `value` es null (dato aún no entregado por la Fundación), muestra
 * "—" y "(en actualización)" en vez de inventar una cifra.
 */
function StatCard({ label, value, theme = 'dark' }) {
  const [ref, isVisible] = useScrollReveal()
  const prefersReducedMotion = useReducedMotion()
  const shouldAnimate = typeof value === 'number' && !prefersReducedMotion
  const animatedValue = useCountUp(value, { start: shouldAnimate && isVisible })
  const displayValue = typeof value !== 'number' ? null : prefersReducedMotion ? value : animatedValue
  const isDark = theme === 'dark'

  return (
    <div ref={ref} className="text-center">
      {displayValue === null ? (
        <p className={`font-display text-4xl ${isDark ? 'text-primary-300' : 'text-primary-200'}`}>
          —
        </p>
      ) : (
        <p className={`font-display text-4xl ${isDark ? 'text-accent-500' : 'text-accent-600'}`}>
          {displayValue.toLocaleString('es-CO')}
          <span className="text-primary-300">+</span>
        </p>
      )}
      <p className={`mt-2 text-sm ${isDark ? 'text-primary-100/80' : 'text-text-muted'}`}>{label}</p>
      {displayValue === null && (
        <p className={`text-xs italic ${isDark ? 'text-primary-100/50' : 'text-text-muted/70'}`}>
          (en actualización)
        </p>
      )}
    </div>
  )
}

export default StatCard
