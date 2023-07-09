import { loadConfig, watchConfig } from 'c12'
import { readPackageJson } from '@stacksjs/storage'
import { frameworkPath } from '@stacksjs/path'
import type { ResolvedStacksOptions, StacksOptions as StacksConfig } from '@stacksjs/types'
import { app, cache, cdn, cli, database, dependencies, dns, docs, email, git, hashing, library, notification, payment, searchEngine, services, storageConfig as storage, ui } from './defaults'

export async function packageManager() {
  const { packageManager } = await readPackageJson(frameworkPath('package.json'))
  return packageManager
}

export const configDefaults: ResolvedStacksOptions = {
  app,
  cache,
  cdn,
  cli,
  database,
  dependencies,
  dns,
  docs,
  email,
  git,
  hashing,
  library,
  notification,
  payment,
  searchEngine,
  services,
  storage,
  ui,
}

export async function loadStacksConfig(overrides?: Partial<StacksConfig>, cwd = frameworkPath()) {
  const { config } = await loadConfig<StacksConfig>({
    name: 'stacks',
    defaults: configDefaults,
    overrides: {
      ...(overrides as StacksConfig),
    },
    cwd,
  })

  return config!
}

export function defineStacksConfig(config: Partial<StacksConfig>) {
  return config
}

export { loadConfig, watchConfig }