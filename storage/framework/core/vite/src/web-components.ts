import { path as p } from '@stacksjs/path'
import { server } from '@stacksjs/server'
import { alias } from '@stacksjs/alias'
import { defineConfig } from 'vite'
import type { ViteBuildOptions } from '.'

// import { autoImports, components, cssEngine, inspect, uiEngine } from '.'

// const isWebComponent = true

export const webComponentsConfig = {
  root: p.frameworkPath('libs/components/web'),
  envDir: p.projectPath(),
  envPrefix: 'FRONTEND_',

  server: server({
    type: 'library',
  }),

  resolve: {
    alias,
  },

  optimizeDeps: {
    exclude: ['vue'],
  },

  plugins: [
    // inspect(),
    // uiEngine(isWebComponent),
    // cssEngine(isWebComponent),
    // autoImports(),
    // components(),
  ],

  build: webComponentsBuildOptions(),
}

export function webComponentsBuildOptions(): ViteBuildOptions {
  return {
    outDir: p.frameworkPath('components/web/dist'),
    emptyOutDir: true,
    lib: {
      entry: p.libraryEntryPath('web-components'),
      name: 'web-components',
      formats: ['cjs', 'es'],
      fileName: (format: string) => {
        if (format === 'es')
          return 'index.mjs'

        if (format === 'cjs')
          return 'index.cjs'

        return 'index.?.js'
      },
    },
  }
}

// @ts-expect-error - resolve this later
export default defineConfig(({ command }) => {
  if (command === 'serve')
    return webComponentsConfig

  // command === 'build'
  return webComponentsConfig
})
