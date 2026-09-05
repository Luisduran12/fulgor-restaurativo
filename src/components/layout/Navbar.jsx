import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES, NAV_LINKS } from '../../config/routes.config'
import Button from '../ui/Button'
import SocialLinks from '../ui/SocialLinks'
import Logo from './Logo'

const NAV_LINK_CLASSES = ({ isActive }) =>
  `text-sm font-medium whitespace-nowrap transition-colors duration-150 ${
    isActive ? 'text-accent-400' : 'text-primary-100/80 hover:text-white'
  }`

/** Encabezado sticky, fondo azul de marca: se compacta y gana sombra al hacer scroll. */
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 12)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return undefined
    function handleKeyDown(event) {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  return (
    <header
      className={`sticky top-0 z-40 bg-primary-900/97 backdrop-blur transition-shadow duration-250 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div
        className={`max-w-[var(--fulgor-container-max)] mx-auto flex items-center justify-between px-6 transition-[padding] duration-250 ${
          isScrolled ? 'py-2' : 'py-3'
        }`}
      >
        <Logo theme="dark" />

        <nav aria-label="Navegación principal" className="hidden xl:flex items-center gap-5">
          {NAV_LINKS.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              end={route.path === '/'}
              className={NAV_LINK_CLASSES}
            >
              {route.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-4">
          <SocialLinks className="text-primary-100" />
          <Button to={ROUTES.contacto.path} variant="accent" size="sm">
            Contáctanos
          </Button>
        </div>

        <button
          type="button"
          className="xl:hidden p-2 text-white"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Navegación móvil"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
            className="xl:hidden overflow-hidden border-t border-primary-800 bg-primary-900"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((route) => (
                <NavLink
                  key={route.path}
                  to={route.path}
                  end={route.path === '/'}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2.5 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-primary-800 text-accent-400'
                        : 'text-primary-100/80 hover:bg-primary-800'
                    }`
                  }
                >
                  {route.label}
                </NavLink>
              ))}
              <div className="flex items-center justify-between px-3 pt-4">
                <SocialLinks className="text-primary-100" />
                <Button
                  to={ROUTES.contacto.path}
                  variant="accent"
                  size="sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contáctanos
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
