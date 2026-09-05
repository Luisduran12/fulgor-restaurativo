/**
 * Documentos de transparencia (informes de gestión, estados financieros,
 * certificados, etc.), servidos desde public/documents/.
 * Vacío hasta que la Fundación entregue los documentos oficiales — NO
 * inventar documentos ni cifras. Cada entrada futura sigue esta forma:
 * { id, title, category, file, date }
 * category ∈ 'informes-de-gestion' | 'estados-financieros' | 'certificados' | 'otros'
 */
export const DOCUMENT_CATEGORIES = [
  { id: 'informes-de-gestion', label: 'Informes de gestión' },
  { id: 'estados-financieros', label: 'Estados financieros' },
  { id: 'certificados', label: 'Certificados' },
  { id: 'otros', label: 'Otros documentos' },
]

export const DOCUMENTS = []
