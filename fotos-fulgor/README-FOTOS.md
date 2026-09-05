# Cómo subir fotos — carpeta única `fotos-fulgor/`

Esta carpeta es la **única** que necesitas para subir fotos al sitio. Mete aquí todas tus
fotos, con el nombre correcto, y ejecuta el script de subida — él las organiza solo.

Esta carpeta **no se sube al repositorio** (está en `.gitignore`): las fotos viven en
Cloudinary, no en git.

## 1. Nombra cada foto con el prefijo correcto

El nombre del archivo decide a dónde va. Usa minúsculas, guiones, sin espacios, sin tildes
ni ñ.

| Prefijo del nombre | Carpeta en Cloudinary | Aparece en el sitio |
| --- | --- | --- |
| `logo-` | `fulgor-restaurativo/logo/` | Header, footer, toda la app |
| `banner-` | `fulgor-restaurativo/banners/` | Hero de inicio y secciones grandes |
| `institucional-` | `fulgor-restaurativo/institucional/` | Página Nosotros |
| `galeria-actividades-` | `fulgor-restaurativo/galeria/actividades/` | Galería — filtro Actividades |
| `galeria-educacion-` | `fulgor-restaurativo/galeria/educacion/` | Galería — filtro Educación |
| `galeria-comunidad-` | `fulgor-restaurativo/galeria/comunidad/` | Galería — filtro Comunidad |
| `galeria-cultura-` | `fulgor-restaurativo/galeria/cultura/` | Galería — filtro Cultura |
| `galeria-eventos-` | `fulgor-restaurativo/galeria/eventos/` | Galería — filtro Eventos |
| `galeria-campanas-` | `fulgor-restaurativo/galeria/campanas/` | Galería — filtro Campañas |
| `proyectos-` | `fulgor-restaurativo/proyectos/` | Página Programas y Proyectos |
| `noticias-` | `fulgor-restaurativo/noticias/` | Página Noticias |
| `aliados-` | `fulgor-restaurativo/aliados/` | Página Alianzas |

**Ejemplos correctos:**

```
logo-fulgor.png
banner-hero-principal.jpg
institucional-equipo-directivo.jpg
galeria-actividades-jornada-mayo.jpg
galeria-educacion-taller-jovenes.jpg
galeria-comunidad-barrio-centro.jpg
proyectos-intervencion-social-01.jpg
noticias-apertura-fundacion.jpg
```

```
❌ Jornada Actividades Niños.JPG   (espacios, mayúsculas, sin prefijo)
```

Si el nombre no tiene un prefijo reconocido, el script te pregunta a qué sección
pertenece antes de subirla (o la manda a `sin-clasificar/` si usas `--auto`).

## 2. Ejecuta el script

Desde la raíz del proyecto:

```bash
# Solo la primera vez
npm install cloudinary dotenv

# Con todas las fotos ya en fotos-fulgor/
node scripts/upload-fotos-fulgor.js

# Modo silencioso: sube todo sin preguntar (sin prefijo → sin-clasificar/)
node scripts/upload-fotos-fulgor.js --auto
```

El script necesita `CLOUDINARY_API_KEY` y `CLOUDINARY_API_SECRET` en tu `.env` local
(ver `.env.example` en la raíz del proyecto).

## 3. Usa el resultado

Al terminar, el script genera `scripts/resultado-subida.json` con la URL y el `public_id`
de cada foto subida.

- **Fotos de galería:** aparecen automáticamente en el sitio (no hace falta tocar código).
- **Logo:** copia el `public_id` en `src/config/site.config.js` → `SITE.logo`.
- **Proyectos:** copia el `public_id` en el campo `image` de la entrada correspondiente en
  `src/data/programs.js`.
- **Noticias:** igual, en `src/data/news.js`.
- **Aliados:** igual, en `src/data/alliances.js`.
- **Banners/institucional:** úsalo como `src` en el componente donde corresponda
  (`Hero.jsx`, la página Nosotros, etc.).

## Recomendaciones

- **Formato:** JPG o PNG. Cloudinary convierte a WebP automáticamente al servir.
- **Resolución:** mínimo 1200px de ancho para banners y hero, 800px para galería.
- **No subas** fotos borrosas, muy oscuras, o con menores sin autorización de uso de imagen.
- **Logo:** PNG con fondo transparente es ideal.
- **Fotos del celular:** pásalas al computador, renómbralas con el prefijo correcto y
  luego cópialas aquí.
