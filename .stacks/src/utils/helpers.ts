import ezSpawn from '@jsdevtools/ez-spawn'
import { resolve } from 'pathe'
import { isFile, readTextFile } from './fs'

export async function isInitialized() {
  if (isFile('.env'))
    return await checkIfAppKeyIsSet()

  if (isFile('.env.example'))
    await ezSpawn.async('cp .env.example .env', { stdio: 'inherit', cwd: projectPath() })

  return await checkIfAppKeyIsSet()
}

export async function checkIfAppKeyIsSet() {
  const env = await readTextFile('.env', projectPath())
  const lines = env.data.split('\n')
  const appKey = lines.find(line => line.startsWith('APP_KEY='))

  if (appKey && appKey.length > 16)
    return true

  return false
}

/**
 * @url https://www.npmjs.com/package/@unocss/reset
 * @param preset
 */
export function determineResetPreset(preset?: string) {
  if (reset)
    preset = reset

  if (preset === 'tailwind')
    return ['import \'@unocss/reset/tailwind.css\'']
  else if (preset === 'normalize')
    return ['import \'@unocss/reset/normalize.css\'']
  else if (preset === 'sanitize')
    return ['import \'@unocss/reset/sanitize/sanitize.css\'', 'import \'@unocss/reset/sanitize/assets.css']
  else if (preset === 'eric-meyer')
    return ['import \'@unocss/reset/eric-meyer.css\'']
  else if (preset === 'antfu')
    return ['import \'@unocss/reset/antfu.css\'']
  else return []
}

export function libraryEntryPath(type: 'vue-components' | 'web-components' | 'functions') {
  return resolve(buildEntriesPath(), `./${type}.ts`)
}

export function buildEntriesPath(path?: string) {
  return resolve(frameworkPath(), `./src/build/entries/${path || ''}`)
}

export function customElementsDataPath() {
  return resolve(frameworkPath(), './custom-elements.json')
}

export function componentsPath(path?: string) {
  return resolve(projectPath(), `./components/${path || ''}`)
}

export function pagesPath(path?: string) {
  return resolve(projectPath(), `./pages/${path || ''}`)
}

export function functionsPath(path?: string) {
  return resolve(projectPath(), `./functions/${path || ''}`)
}

export function configPath(path?: string) {
  return resolve(projectPath(), `./config/${path || ''}`)
}

export function routesPath(path?: string) {
  return resolve(projectPath(), `./routes/${path || ''}`)
}

export function langPath(path?: string) {
  return resolve(projectPath(), `./lang/${path || ''}`)
}

export function frameworkPath(path?: string) {
  return resolve(projectPath(), `./.stacks/${path || ''}`)
}

export function projectPath(filePath = '') {
  const path = process.cwd()

  if (path.includes('.stacks'))
    return resolve(path, '..', filePath)

  return resolve(path, '.', filePath)
}

export function examplesPath(type: 'vue-components' | 'web-components') {
  return resolve(frameworkPath(), `./examples/${type || ''}`)
}

export function packageJsonPath(type: 'vue-components' | 'web-components' | 'functions') {
  return resolve(frameworkPath(), `./${type}/package.json`)
}

export function env(key?: string, fallback?: any) {
  return key ? import.meta.env[key] : fallback

  return 'wip'
}

export function config(key?: string, fallback?: string) {
  // eslint-disable-next-line no-console
  console.log('key', key, 'fallback', fallback)
  // return key ? configArr[key as string] : fallback
}
