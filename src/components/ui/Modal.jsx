import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../../utils/cn'

/**
 * Diálogo modal accesible: cierra con Escape o clic en el fondo, atrapa el
 * foco en el panel al abrir y lo devuelve al disparador al cerrar.
 */
function Modal({ isOpen, onClose, title, children, className }) {
  const panelRef = useRef(null)
  const previouslyFocused = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!isOpen) return undefined

    previouslyFocused.current = document.activeElement
    panelRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      previouslyFocused.current?.focus?.()
    }
  }, [isOpen, onClose])

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary-900/60 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose()
          }}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            tabIndex={-1}
            className={cn(
              'relative w-full max-w-lg rounded-lg bg-surface p-6 shadow-hover outline-none',
              className,
            )}
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.96, y: prefersReducedMotion ? 0 : 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.96, y: prefersReducedMotion ? 0 : 8 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-4 top-4 rounded-full p-1 text-text-muted hover:bg-bg-alt hover:text-text"
            >
              <X size={20} aria-hidden="true" />
            </button>
            {title && (
              <h2 className="font-display text-2xl text-primary-900 pr-8 mb-4">{title}</h2>
            )}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

export default Modal
