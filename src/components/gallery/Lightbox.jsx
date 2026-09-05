import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

/**
 * Visor a pantalla completa con navegación anterior/siguiente.
 * `index` null cierra el lightbox; se navega con teclado (flechas, Escape).
 */
function Lightbox({ items, index, onClose, onNavigate }) {
  const panelRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const isOpen = index !== null
  const item = isOpen ? items[index] : null

  useEffect(() => {
    if (!isOpen) return undefined
    panelRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onNavigate((index + 1) % items.length)
      if (event.key === 'ArrowLeft') onNavigate((index - 1 + items.length) % items.length)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, index, items.length, onClose, onNavigate])

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary-900/95 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose()
          }}
        >
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Visor de imagen"
            tabIndex={-1}
            className="relative w-full max-w-3xl outline-none"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute -top-12 right-0 rounded-full p-2 text-white/80 hover:text-white"
            >
              <X size={24} aria-hidden="true" />
            </button>

            <div className="aspect-[4/3] w-full rounded-lg bg-bg-alt flex items-center justify-center overflow-hidden">
              {item.src ? (
                <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
              ) : (
                <p className="text-text-muted text-sm px-6 text-center">{item.alt}</p>
              )}
            </div>

            <div className="mt-4 flex items-center justify-between text-white/80 text-sm">
              <button
                type="button"
                onClick={() => onNavigate((index - 1 + items.length) % items.length)}
                className="flex items-center gap-1 hover:text-white"
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={20} aria-hidden="true" />
                Anterior
              </button>
              <span>
                {index + 1} / {items.length}
              </span>
              <button
                type="button"
                onClick={() => onNavigate((index + 1) % items.length)}
                className="flex items-center gap-1 hover:text-white"
                aria-label="Imagen siguiente"
              >
                Siguiente
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

export default Lightbox
