import { CheckCircle2, Send } from 'lucide-react'
import { useState } from 'react'
import { CONTACT_FORM_ENDPOINT } from '../../config/site.config'
import Button from '../ui/Button'
import ErrorMessage from '../ui/ErrorMessage'
import Input from '../ui/Input'
import Textarea from '../ui/Textarea'

const EMPTY_FORM = { name: '', email: '', phone: '', subject: '', message: '' }
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(formData) {
  const errors = {}
  if (!formData.name.trim()) errors.name = 'Ingresa tu nombre.'
  if (!formData.email.trim()) errors.email = 'Ingresa tu correo.'
  else if (!EMAIL_PATTERN.test(formData.email)) errors.email = 'Ingresa un correo válido.'
  if (!formData.subject.trim()) errors.subject = 'Ingresa un asunto.'
  if (!formData.message.trim()) errors.message = 'Escribe tu mensaje.'
  return errors
}

/**
 * Formulario de contacto. Envía a `VITE_CONTACT_FORM_ENDPOINT` cuando está
 * configurado; si no lo está, informa honestamente que el envío aún no
 * está conectado en vez de simular un éxito falso.
 */
function ContactForm() {
  const [formData, setFormData] = useState(EMPTY_FORM)
  const [fieldErrors, setFieldErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')

  function updateField(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const errors = validate(formData)
    setFieldErrors(errors)
    if (Object.keys(errors).length > 0) return

    if (!CONTACT_FORM_ENDPOINT) {
      setStatus('error')
      setStatusMessage(
        'Este formulario aún no está conectado a un servicio de envío. Mientras lo configuramos, escríbenos por nuestras redes sociales o a los datos de contacto de esta página.',
      )
      return
    }

    setStatus('loading')
    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!response.ok) throw new Error('Request failed')
      setStatus('success')
      setFormData(EMPTY_FORM)
    } catch {
      setStatus('error')
      setStatusMessage('No se pudo enviar el mensaje. Intenta de nuevo más tarde.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-primary-200 bg-primary-50 p-8 text-center">
        <CheckCircle2 className="mx-auto mb-3 text-primary-600" size={32} aria-hidden="true" />
        <h3 className="font-display text-xl text-primary-900 mb-2">¡Mensaje enviado!</h3>
        <p className="text-text-muted text-sm">
          Gracias por escribirnos. Te responderemos lo antes posible.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus('idle')}>
          Enviar otro mensaje
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          label="Nombre"
          required
          value={formData.name}
          onChange={(e) => updateField('name', e.target.value)}
          error={fieldErrors.name}
          autoComplete="name"
        />
        <Input
          label="Correo electrónico"
          type="email"
          required
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          error={fieldErrors.email}
          autoComplete="email"
        />
      </div>

      <Input
        label="Teléfono (opcional)"
        type="tel"
        value={formData.phone}
        onChange={(e) => updateField('phone', e.target.value)}
        autoComplete="tel"
      />

      <Input
        label="Asunto"
        required
        value={formData.subject}
        onChange={(e) => updateField('subject', e.target.value)}
        error={fieldErrors.subject}
      />

      <Textarea
        label="Mensaje"
        required
        value={formData.message}
        onChange={(e) => updateField('message', e.target.value)}
        error={fieldErrors.message}
      />

      {status === 'error' && <ErrorMessage>{statusMessage}</ErrorMessage>}

      <Button type="submit" variant="primary" size="lg" icon={Send} loading={status === 'loading'}>
        Enviar mensaje
      </Button>
    </form>
  )
}

export default ContactForm
