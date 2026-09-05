import { Quote } from 'lucide-react'
import Reveal from '../ui/Reveal'

/**
 * Extracto breve de la misión institucional. El texto oficial de Misión y
 * Visión 2030 está pendiente de entrega — se muestra como placeholder
 * explícito y se completa en la Fase 6 (página Misión y Visión).
 */
function MissionSummary() {
  return (
    <section className="bg-bg-alt">
      <div className="max-w-[var(--fulgor-container-max)] mx-auto px-6 py-20">
        <Reveal className="max-w-3xl mx-auto text-center">
          <Quote className="mx-auto mb-4 text-accent-500" size={32} aria-hidden="true" />
          <p className="font-display text-2xl md:text-3xl text-primary-900 leading-snug">
            [POR COMPLETAR — extracto oficial de la misión institucional]
          </p>
          <p className="mt-4 text-text-muted text-sm italic">
            El texto oficial de Misión y Visión 2030 se publicará aquí en cuanto sea entregado
            por la Fundación.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default MissionSummary
