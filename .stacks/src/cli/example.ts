import type { CLI } from '@stacksjs/types'
import { invoke as runExample } from './actions/examples'

async function example(stacks: CLI) {
  stacks
    .command('example', 'Test your libraries against your built bundle.')
    .option('-c, --components', 'Test your Vue component library')
    .option('-v, --vue', 'Test your Vue component library')
    .option('-w, --web-components', 'Test your web component library')
    .action(async (options) => {
      await runExample(options)
    })

  stacks
    .command('example:vue', 'Test your Vue component library.')
    .alias('example:components')
    .action(async () => {
      await runExample('vue')
    })

  stacks
    .command('example:web-components', 'Test your Web Component library.')
    .action(async () => {
      await runExample('web-components')
    })
}

export { example }
