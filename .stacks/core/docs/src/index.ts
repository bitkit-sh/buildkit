import { defineConfig } from 'vitepress'
import type { UserConfig } from 'vitepress'
import { alias } from '@stacksjs/alias'
import { path as p } from '@stacksjs/path'
import { docs } from '@stacksjs/config'
import { server } from '@stacksjs/server'
import { kolorist as c } from '@stacksjs/cli'
import { version } from '../../../../package.json'

export const frameworkDefaults = {
  base: '/docs/',
  cleanUrls: true,
  srcDir: p.projectPath('docs'),
  outDir: p.projectStoragePath('framework/docs'),
  cacheDir: p.projectStoragePath('framework/cache/docs'),
  assetsDir: p.assetsPath(),
  // sitemap: {
  //   hostname: 'stacks.test',
  // },

  vite: {
    envDir: p.projectPath(),
    envPrefix: 'FRONTEND_',

    server: server({
      type: 'docs',
    }),

    resolve: {
      alias,
    },

    plugins: [
      {
        name: 'stacks-plugin',
        configureServer(server) {
          // const base = server.config.base || '/'
          // const _print = server.printUrls
          server.printUrls = () => { // eslint-disable-next-line no-console
            console.log(`  ${c.blue(c.bold('STACKS'))} ${c.blue(version)}`)

            // console.log(`  ${c.green('➜')}  ${c.bold('Docs')}: ${c.green('http://stacks.test:3333/docs')}`)
            // eslint-disable-next-line no-console
            console.log(`  ${c.green('➜')}  ${c.bold('Docs')}: ${c.green('https://stacks.localhost/docs')}`)
            // eslint-disable-next-line no-console
            console.log(`  ${c.green('➜')}  ${c.bold('Temp URL')}: ${c.green('http://stacksjs.test:3333')}`)
          }
        },
      },
    ],
  },
} satisfies UserConfig

const config: UserConfig = {
  ...frameworkDefaults,
  ...docs,
}

export default defineConfig(config)
