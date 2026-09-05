import { useId } from 'react'
import { cn } from '../../utils/cn'

/** Área de texto con label y error accesibles, estilo de marca consistente. */
function Textarea({ label, error, required, className, id, rows = 5, ...rest }) {
  const generatedId = useId()
  const fieldId = id ?? generatedId

  return (
    <div className={className}>
      <label htmlFor={fieldId} className="block text-sm font-medium text-primary-900 mb-1.5">
        {label}
        {required && <span className="text-error"> *</span>}
      </label>
      <textarea
        id={fieldId}
        rows={rows}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        className={cn(
          'w-full rounded-md border bg-surface px-4 py-2.5 text-sm text-text resize-y',
          'placeholder:text-text-muted/60 transition-colors',
          error ? 'border-error' : 'border-border focus:border-primary-400',
        )}
        {...rest}
      />
      {error && (
        <p id={`${fieldId}-error`} className="mt-1 text-xs text-error">
          {error}
        </p>
      )}
    </div>
  )
}

export default Textarea
