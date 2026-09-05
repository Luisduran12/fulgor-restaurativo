import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ROUTES } from '../../config/routes.config'
import { SITE } from '../../config/site.config'
import { resolveImageSrc } from '../../services/cloudinary/buildImageUrl'
import Button from '../ui/Button'

/** public_id de Cloudinary del banner del hero (prefijo `banner-` en fotos-fulgor/). */
const HERO_IMAGE = 'fulgor-restaurativo/banners/banner-hero'

/** Sección hero con foto real, overlay oscuro para contraste y halo ámbar de marca. */
function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const heroImageSrc = resolveImageSrc(HERO_IMAGE, { width: 1920 })

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background: 'linear-gradient(135deg, var(--fulgor-primary-900), var(--fulgor-primary-500))',
      }}
    >
      {heroImageSrc && (
        // Emblema de marca en la esquina derecha, centrado verticalmente,
        // como watermark de baja opacidad detrás del texto.
        <img
          src={heroImageSrc}
          alt=""
          aria-hidden="true"
          className="object-contain"
          style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
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
