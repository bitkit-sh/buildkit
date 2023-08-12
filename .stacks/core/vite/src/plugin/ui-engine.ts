import Vue from '@vitejs/plugin-vue'
import { type Plugin } from 'vite'

export function uiEngine(isWebComponent = false): Plugin {
  if (isWebComponent) {
    return Vue({
      include: [/\.vue$/, /\.md$/],
      template: {
        compilerOptions: {
          isCustomElement: () => true,
        },
      },
    })
  }

  return Vue({
    include: [/\.vue$/, /\.md$/],
  })
}
