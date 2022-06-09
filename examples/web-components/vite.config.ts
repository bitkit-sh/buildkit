import type { UserConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import PresetIcons from '@unocss/preset-icons'
// import { alias } from '../../alias'

// https://vitejs.dev/config/
const config: UserConfig = {
  // resolve: {
  //   alias,
  // },

  plugins: [
    // TODO: allow to overwrite the options
    Vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: tag => tag.includes('hello-world'),
          // isCustomElement: tag => tag.startsWith('prefix-'),
        },
      },
    }),

    // TODO: allow to overwrite the options
    Unocss({
      mode: 'shadow-dom',
      presets: [
        PresetIcons({
          prefix: 'i-',
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          },
        }),
      ],
    }),
  ],
}

export default config
