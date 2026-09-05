import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

/** Envoltorio de página pública: Navbar + contenido de la ruta + Footer. */
function PageLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default PageLayout
