import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ROUTES } from '../../config/routes.config'
import { SITE } from '../../config/site.config'
import { CLOUDINARY_BASE_URL } from '../../services/cloudinary/cloudinaryClient'
import Button from '../ui/Button'

/**
 * Emblema del Hero: el mismo logo oficial, pero con `e_background_removal`
 * (add-on de IA de Cloudinary, verificado en esta cuenta) para quitar el
 * fondo blanco cuadrado del PNG y dejar solo la figura, en PNG con alpha real.
 */
const HERO_EMBLEM_URL = `${CLOUDINARY_BASE_URL}/e_background_removal,f_png,q_auto,w_900/fulgor-restaurativo/logo/logo-fulgor`

/** Sección hero con foto real, overlay oscuro para contraste y halo ámbar de marca. */
function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const heroImageSrc = HERO_EMBLEM_URL

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background: 'linear-gradient(135deg, var(--fulgor-primary-900), var(--fulgor-primary-500))',
      }}
    >
      {heroImageSrc && (
        // Emblema de marca centrado en el hero, como watermark de baja
        // opacidad detrás del texto (sin fondo blanco, gracias a e_background_removal).
        <img
          src={heroImageSrc}
          alt=""
          aria-hidden="true"
          className="object-contain"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            opacity: 0.15,
          }}
        />
      )}

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
          Transformando vidas, restaurando comunidades, construyendo paz.
        </h1>
        <p className="mt-6 text-lg text-primary-100/90 max-w-2xl leading-relaxed">
          Somos una organización sin ánimo de lucro comprometida con el desarrollo humano
          integral, la protección de derechos y la transformación social en {SITE.location.city}{' '}
          y {SITE.location.department}.
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
