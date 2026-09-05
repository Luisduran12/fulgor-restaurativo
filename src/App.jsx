import { lazy, Suspense } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import PageLayout from './components/layout/PageLayout'
import Loading from './components/ui/Loading'
import { ROUTES } from './config/routes.config'

const Home = lazy(() => import('./pages/Home/Home'))
const Nosotros = lazy(() => import('./pages/Nosotros/Nosotros'))
const MisionVision = lazy(() => import('./pages/MisionVision/MisionVision'))
const QueHacemos = lazy(() => import('./pages/QueHacemos/QueHacemos'))
const Programas = lazy(() => import('./pages/Programas/Programas'))
const Impacto = lazy(() => import('./pages/Impacto/Impacto'))
const Galeria = lazy(() => import('./pages/Galeria/Galeria'))
const Noticias = lazy(() => import('./pages/Noticias/Noticias'))
const Alianzas = lazy(() => import('./pages/Alianzas/Alianzas'))
const Transparencia = lazy(() => import('./pages/Transparencia/Transparencia'))
const Contacto = lazy(() => import('./pages/Contacto/Contacto'))
const NotFound = lazy(() => import('./pages/NotFound'))
const StyleGuide = lazy(() => import('./pages/StyleGuide/StyleGuide'))

/** Fallback de carga para el code splitting por ruta. */
function RouteFallback() {
  return <Loading label="Cargando página…" className="min-h-[50vh]" />
}

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <BrowserRouter>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route element={<PageLayout />}>
                <Route path={ROUTES.home.path} element={<Home />} />
                <Route path={ROUTES.nosotros.path} element={<Nosotros />} />
                <Route path={ROUTES.misionVision.path} element={<MisionVision />} />
                <Route path={ROUTES.queHacemos.path} element={<QueHacemos />} />
                <Route path={ROUTES.programas.path} element={<Programas />} />
                <Route path={ROUTES.impacto.path} element={<Impacto />} />
                <Route path={ROUTES.galeria.path} element={<Galeria />} />
                <Route path={ROUTES.noticias.path} element={<Noticias />} />
                <Route path={ROUTES.alianzas.path} element={<Alianzas />} />
                <Route path={ROUTES.transparencia.path} element={<Transparencia />} />
                <Route path={ROUTES.contacto.path} element={<Contacto />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="/dev/style-guide" element={<StyleGuide />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App
