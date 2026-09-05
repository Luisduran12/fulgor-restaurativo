import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ROUTES } from '../../config/routes.config'
import { SITE } from '../../config/site.config'
import Button from '../ui/Button'

/** Sección hero con halo ámbar de marca y movimiento sutil (parallax). */
function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-primary-900 text-white">
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: 'var(--fulgor-gradient-halo)' }}
        initial={{ opacity: 0.8, scale: 1 }}
        animate={
          prefersReducedMotion ? {} : { opacity: [0.8, 1, 0.8], scale: [1, 1.05, 1] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-[var(--fulgor-container-max)] mx-auto px-6 py-24 md:py-32">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent-400 mb-4">
          {SITE.legal.nature} · {SITE.location.city}, {SITE.location.department}
        </p>
        <h1 className="font-display text-4xl md:text-5xl max-w-3xl leading-tight">
          Un resplandor que restaura vidas y comunidades
        </h1>
        <p className="mt-6 text-lg text-primary-100/90 max-w-2xl leading-relaxed">
          Trabajamos por la {SITE.tagline.toLowerCase()}, acompañando procesos de reparación,
          dignidad y nueva oportunidad para las personas y comunidades de{' '}
          {SITE.location.city}, {SITE.location.department}.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button variant="accent" size="lg" to={ROUTES.programas.path} icon={ArrowRight}>
            Conoce nuestros programas
          </Button>
          <Button variant="outline-inverse" size="lg" to={ROUTES.contacto.path}>
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
