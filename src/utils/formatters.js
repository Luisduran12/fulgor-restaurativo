/** Formatea una fecha ISO ("2026-09-04") como texto legible en español. */
export function formatDate(isoDate) {
  if (!isoDate) return ''
  const date = new Date(`${isoDate}T00:00:00`)
  if (Number.isNaN(date.getTime())) return isoDate

  return date.toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' })
}
