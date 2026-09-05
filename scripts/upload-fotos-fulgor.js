#!/usr/bin/env node
/**
 * Sube todas las fotos de fotos-fulgor/ a Cloudinary, clasificándolas por el
 * prefijo de su nombre de archivo. Ver fotos-fulgor/README-FOTOS.md para la
 * tabla de prefijos y las instrucciones de uso.
 *
 * Uso:
 *   node scripts/upload-fotos-fulgor.js          # pregunta ante prefijos desconocidos y sobreescrituras
 *   node scripts/upload-fotos-fulgor.js --auto    # no pregunta: sin prefijo -> sin-clasificar/, siempre sobreescribe
 */
import 'dotenv/config'
import { v2 as cloudinary } from 'cloudinary'
import { readdir, writeFile } from 'node:fs/promises'
import { extname, join } from 'node:path'
import { createInterface } from 'node:readline/promises'

const PHOTOS_DIR = new URL('../fotos-fulgor/', import.meta.url)
const RESULT_PATH = new URL('./resultado-subida.json', import.meta.url)
const VALID_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif'])
const IS_AUTO = process.argv.includes('--auto')

/** Prefijo -> carpeta destino en Cloudinary. Orden: más específico primero. */
const PREFIX_MAP = [
  ['galeria-actividades-', 'fulgor-restaurativo/galeria/actividades'],
  ['galeria-educacion-', 'fulgor-restaurativo/galeria/educacion'],
  ['galeria-comunidad-', 'fulgor-restaurativo/galeria/comunidad'],
  ['galeria-cultura-', 'fulgor-restaurativo/galeria/cultura'],
  ['galeria-eventos-', 'fulgor-restaurativo/galeria/eventos'],
  ['galeria-campanas-', 'fulgor-restaurativo/galeria/campanas'],
  ['galeria-jornadas-', 'fulgor-restaurativo/galeria/jornadas'],
  ['que-hacemos-', 'fulgor-restaurativo/que-hacemos'],
  ['institucional-', 'fulgor-restaurativo/institucional'],
  ['proyectos-', 'fulgor-restaurativo/proyectos'],
  ['noticias-', 'fulgor-restaurativo/noticias'],
  ['aliados-', 'fulgor-restaurativo/aliados'],
  ['banner-', 'fulgor-restaurativo/banners'],
  ['logo-', 'fulgor-restaurativo/logo'],
]

/** Categorías ofrecidas en el prompt interactivo para prefijos no reconocidos. */
const CATEGORY_OPTIONS = [
  ['logo', 'fulgor-restaurativo/logo'],
  ['banner', 'fulgor-restaurativo/banners'],
  ['institucional', 'fulgor-restaurativo/institucional'],
  ['galeria-actividades', 'fulgor-restaurativo/galeria/actividades'],
  ['galeria-educacion', 'fulgor-restaurativo/galeria/educacion'],
  ['galeria-comunidad', 'fulgor-restaurativo/galeria/comunidad'],
  ['galeria-cultura', 'fulgor-restaurativo/galeria/cultura'],
  ['galeria-eventos', 'fulgor-restaurativo/galeria/eventos'],
  ['galeria-campanas', 'fulgor-restaurativo/galeria/campanas'],
  ['galeria-jornadas', 'fulgor-restaurativo/galeria/jornadas'],
  ['que-hacemos', 'fulgor-restaurativo/que-hacemos'],
  ['proyectos', 'fulgor-restaurativo/proyectos'],
  ['noticias', 'fulgor-restaurativo/noticias'],
  ['aliados', 'fulgor-restaurativo/aliados'],
  ['omitir', null],
]

const USO_HINTS = {
  'fulgor-restaurativo/logo': 'src/config/site.config.js → SITE.logo',
  'fulgor-restaurativo/banners': 'Usar como src en Hero.jsx u otra sección grande',
  'fulgor-restaurativo/institucional': 'Página Nosotros — usar como src en sus PlaceholderImage',
  'fulgor-restaurativo/proyectos': 'src/data/programs.js → campo image de la entrada correspondiente',
  'fulgor-restaurativo/noticias': 'src/data/news.js → campo image de la entrada correspondiente',
  'fulgor-restaurativo/aliados': 'src/data/alliances.js → campo logo de la entrada correspondiente',
  'fulgor-restaurativo/que-hacemos': 'src/data/actionAreas.js → campo image de la línea de acción correspondiente',
  'fulgor-restaurativo/sin-clasificar': 'Sin uso asignado — revisar y mover manualmente en Cloudinary',
}

function usoHint(folder) {
  if (USO_HINTS[folder]) return USO_HINTS[folder]
  if (folder.startsWith('fulgor-restaurativo/galeria/')) {
    return 'Galería pública — aparece automáticamente en /galeria'
  }
  return 'Revisar manualmente'
}

function detectFolder(filename) {
  const lower = filename.toLowerCase()
  const match = PREFIX_MAP.find(([prefix]) => lower.startsWith(prefix))
  return match ? match[1] : null
}

async function resourceExists(publicId) {
  try {
    await cloudinary.api.resource(publicId)
    return true
  } catch {
    return false
  }
}

async function promptCategory(rl, filename) {
  if (IS_AUTO) return 'fulgor-restaurativo/sin-clasificar'

  const optionsLabel = CATEGORY_OPTIONS.map(([label]) => label).join(' / ')
  const answer = (
    await rl.question(`¿A qué sección pertenece "${filename}"? (${optionsLabel}) `)
  )
    .trim()
    .toLowerCase()

  const found = CATEGORY_OPTIONS.find(([label]) => label === answer)
  if (!found || found[1] === null) return null
  return found[1]
}

async function promptOverwrite(rl, filename) {
  if (IS_AUTO) return true
  const answer = await rl.question(
    `"${filename}" ya existe en Cloudinary. ¿Sobrescribir? (s/n) `,
  )
  return answer.trim().toLowerCase().startsWith('s')
}

async function main() {
  const cloudName = process.env.VITE_CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_API_SECRET

  if (!cloudName || !apiKey || !apiSecret) {
    console.error(
      '❌ Faltan credenciales de Cloudinary. Completa VITE_CLOUDINARY_CLOUD_NAME, ' +
        'CLOUDINARY_API_KEY y CLOUDINARY_API_SECRET en tu .env (ver .env.example).',
    )
    process.exitCode = 1
    return
  }

  cloudinary.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret })

  let entries
  try {
    entries = await readdir(PHOTOS_DIR)
  } catch {
    console.error(`❌ No se encontró la carpeta fotos-fulgor/. Créala en la raíz del proyecto.`)
    process.exitCode = 1
    return
  }

  const files = entries.filter((name) => VALID_EXTENSIONS.has(extname(name).toLowerCase()))

  if (files.length === 0) {
    console.log('No hay fotos en fotos-fulgor/. Agrega imágenes (jpg, jpeg, png, webp, gif) y vuelve a ejecutar.')
    return
  }

  const rl = createInterface({ input: process.stdin, output: process.stdout })
  const resultados = []
  let exitosas = 0
  let omitidas = 0
  let errores = 0

  for (const [index, filename] of files.entries()) {
    const progress = `[${index + 1}/${files.length}]`
    let folder = detectFolder(filename)

    if (!folder) {
      folder = await promptCategory(rl, filename)
      if (!folder) {
        console.log(`${progress} ⏭️  Omitida: ${filename}`)
        omitidas += 1
        continue
      }
    }

    const baseName = filename.slice(0, filename.length - extname(filename).length)
    const publicId = `${folder}/${baseName}`

    if (await resourceExists(publicId)) {
      const overwrite = await promptOverwrite(rl, filename)
      if (!overwrite) {
        console.log(`${progress} ⏭️  Omitida (ya existía): ${filename}`)
        omitidas += 1
        continue
      }
    }

    console.log(`${progress} Subiendo ${filename}...`)
    try {
      const filePath = join(PHOTOS_DIR.pathname, filename)
      const uploadResult = await cloudinary.uploader.upload(filePath, {
        public_id: publicId,
        overwrite: true,
        resource_type: 'image',
      })

      resultados.push({
        archivo_local: filename,
        carpeta_cloudinary: folder,
        url: `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${uploadResult.public_id}`,
        public_id: uploadResult.public_id,
        uso: usoHint(folder),
      })
      exitosas += 1
    } catch (error) {
      console.error(`${progress} ❌ Error subiendo ${filename}:`, error.message)
      errores += 1
    }
  }

  rl.close()

  const reporte = {
    timestamp: new Date().toISOString(),
    resumen: { exitosas, omitidas, errores },
    archivos: resultados,
  }

  await writeFile(RESULT_PATH, JSON.stringify(reporte, null, 2))

  console.log('')
  console.log(`✅ Subidas exitosas: ${exitosas}`)
  console.log(`⚠️  Omitidas: ${omitidas}`)
  console.log(`❌ Errores: ${errores}`)
  console.log('')
  console.log(`📋 Resultado guardado en: scripts/resultado-subida.json`)
  console.log(`📌 Copia las URLs desde ese archivo y pégalas en src/data/ donde corresponda.`)
}

main()
