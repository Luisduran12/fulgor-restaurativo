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
| `VITE_CLOUDINARY_CLOUD_NAME` | Opcional. El cloud name (`dibjbl4zp`) ya está hardcodeado como valor por defecto en `cloudinaryClient.js` porque es un dato público. Solo define esta variable si vas a usar una cuenta de Cloudinary distinta. |
| `CLOUDINARY_API_KEY` / `CLOUDINARY_API_SECRET` | Solo para `scripts/upload-fotos-fulgor.js` (Node) — nunca se exponen al navegador, por eso no llevan prefijo `VITE_`. |
| `VITE_CONTACT_FORM_ENDPOINT` | URL a la que se envía el formulario de Contacto (Formspree, backend propio, etc.). Sin esto, el formulario valida pero informa que aún no está conectado, en vez de simular un envío exitoso. |
| `VITE_EMAILJS_SERVICE_ID` / `VITE_EMAILJS_TEMPLATE_ID` / `VITE_EMAILJS_PUBLIC_KEY` | Documentadas para una futura integración con EmailJS — `ContactForm.jsx` todavía no las usa; hoy funciona solo con `VITE_CONTACT_FORM_ENDPOINT`. |
| `VITE_SITE_URL` | URL pública del sitio ya desplegado (ej. `https://fulgor-restaurativo.vercel.app`). Se usa para `<link rel="canonical">` y Open Graph. Sin esto, esas etiquetas simplemente se omiten. |

**Nunca subas `.env` al repositorio** — ya está excluido en `.gitignore`. Verifica siempre
`git status` antes de un commit si trabajaste con variables sensibles.

## Cómo subir fotos — carpeta única `fotos-fulgor/`

No hace falta subir fotos manualmente a Cloudinary. Todo el flujo está automatizado:

1. Nombra cada foto con el prefijo correcto (`logo-`, `banner-`, `institucional-`,
   `galeria-actividades-`, `galeria-educacion-`, `galeria-comunidad-`, `galeria-cultura-`,
   `galeria-eventos-`, `galeria-campanas-`, `proyectos-`, `noticias-`, `aliados-`) — ver la
   tabla completa en [`fotos-fulgor/README-FOTOS.md`](fotos-fulgor/README-FOTOS.md).
2. Copia las fotos a la carpeta `fotos-fulgor/` en la raíz del proyecto (no se sube al
   repositorio — está en `.gitignore`).
3. Ejecuta:
   ```bash
   npm run upload-fotos            # pregunta ante prefijos desconocidos o sobreescrituras
   npm run upload-fotos -- --auto  # modo silencioso: sin prefijo -> sin-clasificar/
   ```
4. El script sube cada foto a Cloudinary (`f_auto,q_auto` al servirla) y genera
   `scripts/resultado-subida.json` con la URL y el `public_id` de cada una.
5. Las fotos de galería aparecen automáticamente en el sitio. Para logo, programas,
   noticias o aliados, copia el `public_id` desde ese archivo y pégalo en el campo
   correspondiente de `src/config/site.config.js` (`SITE.logo`) o `src/data/*.js`.
   `PlaceholderImage` (y el logo del Navbar) detectan automáticamente si el valor es un
   `public_id` de Cloudinary o una URL directa, y sirven la imagen optimizada; si el campo
   queda vacío, siguen mostrando el placeholder.

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
fotos-fulgor/        carpeta única para subir fotos (no se versiona, ver su README-FOTOS.md)
scripts/
  upload-fotos-fulgor.js   clasifica y sube fotos-fulgor/ a Cloudinary por prefijo
```

## Guía rápida para el equipo

### Cómo agregar fotos nuevas
1. Renombra cada foto con el prefijo correcto (ver tabla en `fotos-fulgor/README-FOTOS.md`).
2. Cópiala a la carpeta `fotos-fulgor/` en el proyecto.
3. Ejecuta `npm run upload-fotos`.
4. El script sube, organiza y genera `scripts/resultado-subida.json` con las URLs.
5. Las fotos de galería aparecen automáticamente en el sitio.
6. Para logo/proyectos/noticias/aliados: copia el `public_id` del JSON y pégalo en
   `src/config/site.config.js` o `src/data/` según corresponda.

### Cómo agregar un proyecto nuevo
1. Abre `src/data/programs.js` y agrega un objeto siguiendo la forma documentada en el
   comentario del archivo (`id`, `name`, `description`, `objective`, `population`, `place`,
   `date`, `status`, `image`, `results`).
2. Sube las fotos del proyecto con prefijo `proyectos-`.
3. Copia el `public_id` desde `scripts/resultado-subida.json` y pégalo en el campo `image`.

### Cómo agregar una noticia
1. Abre `src/data/news.js` y agrega un objeto con `id`, `title`, `excerpt`, `type`, `date`
   e `image` (ver el comentario del archivo para los tipos válidos).
2. La noticia aparece automáticamente en `/noticias`.

## Estado del contenido

Este sitio evita inventar información institucional. Los datos oficiales de la Fundación
(misión, visión 2030, principios y valores, enfoques de trabajo, líneas de acción, datos de
contacto y redes sociales) ya están cargados. Lo que aún no ha sido entregado sigue marcado
explícitamente como `[POR COMPLETAR]` en la interfaz: la historia detallada de la Fundación,
las cifras de impacto, los programas/proyectos reales, las noticias, los aliados y los
documentos de transparencia. Reemplázalo a medida que la Fundación lo confirme.
