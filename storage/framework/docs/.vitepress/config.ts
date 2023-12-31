import { defineConfig } from 'vitepress'
import { alias } from 'src/alias/src'
import { path as p } from 'src/path/src'
import { server } from 'src/server/src'
import userConfig from '../../../../config/docs'
import { analyticsHead, faviconHead } from './head'

// import { config } from '@stacksjs/config'
// import { kolorist as c } from '@stacksjs/cli'
// import { version } from '../../../../stacks/package.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: p.projectPath('docs'),
  outDir: p.projectStoragePath('framework/docs/dist'),
  cacheDir: p.projectStoragePath('framework/cache/docs'),
  assetsDir: p.assetsPath(),

  // sitemap: {
  //   hostname: 'stacks.localhost',
  // },

  vite: {
    server: server({
      type: 'docs',
    }),

    resolve: {
      alias,
    },

    // plugins: [
    //   {
    //     name: 'stacks-plugin',
    //     configureServer(server) {
    //       // const base = server.config.base || '/'
    //       // const _print = server.printUrls
    //       server.printUrls = () => { // eslint-disable-next-line no-console
    //         console.log(`  ${c.blue(c.bold('STACKS'))} ${c.blue(version)}`)
    //         // console.log(`  ${c.green('➜')}  ${c.bold('Docs')}: ${c.cyan('http://stacks.localhost:3333/docs')}`)
    //         // eslint-disable-next-line no-console
    //         console.log(`  ${c.green('➜')}  ${c.bold('Docs')}: ${c.cyan('https://stacks.localhost/docs')}`)
    //       }
    //     },
    //   },
    // ],
  },

  head: [
    ...faviconHead,
    ...analyticsHead,
  ],

  ...userConfig,
})
