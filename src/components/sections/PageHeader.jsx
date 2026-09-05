/**
 * Encabezado compacto para páginas internas (no-Inicio): mismo lenguaje
 * visual del hero (fondo oscuro + halo fulgor) pero más bajo y sin CTAs.
 */
function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-primary-900 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: 'var(--fulgor-gradient-halo)' }}
      />
      <div className="relative max-w-[var(--fulgor-container-max)] mx-auto px-6 py-16 md:py-20">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-400 mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-3xl md:text-4xl max-w-2xl">{title}</h1>
        {description && (
          <p className="mt-4 text-primary-100/85 max-w-2xl leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  )
}

export default PageHeader
