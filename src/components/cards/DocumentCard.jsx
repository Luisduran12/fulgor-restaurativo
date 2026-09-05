import { Download, FileText } from 'lucide-react'

/** Fila de descarga de un documento de transparencia. */
function DocumentCard({ document }) {
  const { title, date, file } = document

  return (
    <a
      href={file}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 rounded-md border border-border bg-surface px-5 py-4 hover:border-primary-300 hover:bg-primary-50 transition-colors"
    >
      <FileText className="text-primary-600 shrink-0" size={22} aria-hidden="true" />
      <div className="flex-1">
        <p className="text-sm font-medium text-primary-900">{title}</p>
        {date && <p className="text-xs text-text-muted">{date}</p>}
      </div>
      <Download className="text-text-muted shrink-0" size={18} aria-hidden="true" />
    </a>
  )
}

export default DocumentCard
