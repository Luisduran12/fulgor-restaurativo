import { Component } from 'react'
import Button from './ui/Button'

/**
 * Error boundary de nivel de app. Los boundaries de error de React solo
 * pueden implementarse como clase (no hay equivalente en hooks).
 */
class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('Error no controlado en la aplicación:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
          <h1 className="font-display text-2xl text-primary-900">Algo salió mal</h1>
          <p className="text-text-muted max-w-md">
            Ocurrió un error inesperado al cargar esta página. Intenta recargar.
          </p>
          <Button variant="primary" onClick={() => window.location.reload()}>
            Recargar página
          </Button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
