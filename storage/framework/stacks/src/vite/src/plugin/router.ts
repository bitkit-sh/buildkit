import { config } from '@stacksjs/config'
import VueRouter from 'unplugin-vue-router/vite'
import { path as p } from '@stacksjs/path'

// https://github.com/posva/unplugin-vue-router
export function router() {
  return VueRouter({
    extensions: ['.stx', '.md'],
    dts: p.frameworkStoragePath('types/router.d.ts'),
    routesFolder: [
      p.resourcesPath('views'),
    ],
    logs: config.app.debug || false,
  })
}