# Fundación ONG Fulgor Restaurativo — Sitio web oficial

Sitio institucional de la **Fundación ONG Fulgor Restaurativo**, entidad sin ánimo de lucro
con domicilio en Cúcuta, Norte de Santander, Colombia, registrada ante la Cámara de Comercio
de Cúcuta.

Es una base profesional y escalable: arquitectura preparada para crecer con fotos reales,
programas, noticias, documentos de transparencia y un formulario de contacto funcional, sin
necesidad de reescribir el proyecto.

## Tecnologías

- **React 19 + Vite** — SPA
- **React Router** — enrutado, con `vercel.json` para que las rutas no den 404 al recargar
- **Tailwind CSS v4** — tokens de marca definidos en `src/styles/tokens.css` y mapeados a
  utilidades Tailwind en `src/styles/tailwind.css` (`@theme inline`)
- **Framer Motion** — micro-interacciones (reveal on scroll, halo del hero, menú móvil, modal, lightbox)
- **lucide-react** — íconos
- **react-helmet-async** — SEO por página (`src/components/seo/Seo.jsx`)
- **Cloudinary** — entrega optimizada de imágenes (`src/services/cloudinary/`)

## Requisitos

- Node.js 18 o superior
- npm

## Instalación y ejecución local

```bash
npm install
npm run dev       # http://localhost:5173
```

## Variables de entorno

Copia `.env.example` a `.env` y completa lo que corresponda:

```bash
cp .env.example .env
```

| Variable | Descripción |
| --- | --- |
| `VITE_CLOUDINARY_CLOUD_NAME` | Nombre del cloud de Cloudinary (Dashboard → Product Environment Credentials). Sin esto, todas las imágenes muestran el placeholder "Imagen de ejemplo". |
| `VITE_CONTACT_FORM_ENDPOINT` | URL a la que se envía el formulario de Contacto (Formspree, backend propio, etc.). Sin esto, el formulario valida pero informa que aún no está conectado, en vez de simular un envío exitoso. |
| `VITE_SITE_URL` | URL pública del sitio ya desplegado (ej. `https://fulgor-restaurativo.vercel.app`). Se usa para `<link rel="canonical">` y Open Graph. Sin esto, esas etiquetas simplemente se omiten. |

**Nunca subas `.env` al repositorio** — ya está excluido en `.gitignore`. Verifica siempre
`git status` antes de un commit si trabajaste con variables sensibles.

## Cloudinary — estructura de carpetas

En la cuenta de Cloudinary, organiza los assets así:

```
logo/          — logo oficial e isotipos
institucional/ — fotos institucionales, equipo, sede
actividades/   — fotos de actividades y jornadas
proyectos/     — fotos de programas y proyectos
banners/       — imágenes de hero/banners
noticias/      — imágenes de noticias y comunicados
galeria/       — galería pública (por las categorías de src/data/gallery.js)
```

Para usar una imagen real, sube el archivo a la carpeta correspondiente y coloca su
`public_id` (ej. `institucional/sede-cucuta`) en el campo `image`/`logo`/`src` de la entrada
correspondiente en `src/data/*.js`. `PlaceholderImage` la detecta automáticamente y la sirve
optimizada (`f_auto,q_auto`); si el campo queda vacío, sigue mostrando el placeholder.

## Contenido editable

Todo el contenido que crece con el tiempo vive en `src/data/`, desacoplado de los
componentes — para agregar un programa, noticia, aliado o documento, se edita el archivo de
datos correspondiente, sin tocar el JSX de las páginas:

| Archivo | Contenido |
| --- | --- |
| `programs.js` | Programas y proyectos |
| `news.js` | Noticias, actividades, eventos, comunicados |
| `gallery.js` | Categorías e imágenes de la galería |
| `alliances.js` | Organizaciones aliadas |
| `documents.js` | Documentos de transparencia (informes, estados financieros, certificados) |
| `impact.js` | Cifras de impacto (contadores animados) |
| `actionAreas.js` | Líneas de acción ("Qué hacemos") |

Los documentos de Transparencia se sirven como archivos estáticos desde `public/documents/`;
el campo `file` en `documents.js` debe apuntar a esa ruta (ej. `/documents/informe-2025.pdf`).

## Build de producción

```bash
npm run build      # genera dist/
npm run preview    # sirve dist/ localmente para verificar el build
```

## Despliegue en Vercel

1. Sube el repositorio a GitHub.
2. En Vercel, importa el repositorio (framework detectado: Vite).
3. Configura las variables de entorno del proyecto (mismas claves que `.env.example`).
4. Despliega — `vercel.json` ya incluye el rewrite necesario para que todas las rutas del
   SPA funcionen al recargar o compartir un enlace directo.
5. Primero usa el dominio gratuito `*.vercel.app`; cuando haya un dominio propio, se conecta
   desde el dashboard de Vercel sin tocar el código.

Tras el primer deploy, actualiza `public/robots.txt` y `public/sitemap.xml` (buscar
`TU-DOMINIO-VERCEL.vercel.app`) y configura `VITE_SITE_URL` con el dominio real, para que
`Seo` genere URLs canónicas y Open Graph correctas.

## Estructura del proyecto

```
src/
  assets/            imágenes, íconos y logos locales
  components/
    layout/          Navbar, Footer, PageLayout
    ui/              Button, Card, SectionTitle, Modal, Input, EmptyState, etc.
    sections/        Hero, ImpactCounters, ActionAreas, PageHeader, ContactForm, etc.
    cards/           ProgramCard, NewsCard, GalleryCard, AllyCard, DocumentCard, StatCard
    gallery/         ImageGallery, GalleryFilter, Lightbox
    seo/             Seo (título, meta description, Open Graph, Twitter Card)
  pages/             una carpeta por ruta (Home, Nosotros, Programas, Contacto, ...)
  data/              contenido editable, desacoplado de los componentes
  hooks/             useScrollReveal, useCountUp, useMediaQuery
  services/
    cloudinary/      cliente y helper de URLs optimizadas
  config/            site.config.js (identidad, contacto, SEO), routes.config.js
  styles/            tokens.css (fuente única de la marca), tailwind.css, base.css
public/
  documents/         documentos de transparencia (PDFs)
  robots.txt, sitemap.xml, favicon.svg
```

## Estado del contenido

Este sitio evita inventar información institucional. Todo lo que aún no ha sido entregado
por la Fundación aparece marcado explícitamente como `[POR COMPLETAR]` en la interfaz
(misión y visión oficiales, cifras de impacto, aliados, documentos de transparencia, correo y
teléfono de contacto, redes sociales). Reemplázalo a medida que la Fundación lo confirme.
