import { Quote } from 'lucide-react'
import Reveal from '../ui/Reveal'

/** Frase institucional de Inicio (el texto completo de Misión/Visión vive en esa página). */
function MissionSummary() {
  return (
    <section className="bg-bg-alt">
      <div className="max-w-[var(--fulgor-container-max)] mx-auto px-6 py-20">
        <Reveal className="max-w-3xl mx-auto text-center">
          <Quote className="mx-auto mb-4 text-accent-500" size={32} aria-hidden="true" />
          <p className="font-display text-2xl md:text-3xl text-primary-900 leading-snug">
            Creemos en la capacidad de cada persona para superar sus circunstancias y construir
            un proyecto de vida digno. Ese es nuestro compromiso.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default MissionSummary
