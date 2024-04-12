import { frameworkPath, viteConfigPath } from '@stacksjs/path'
import { parseOptions, runCommand } from '@stacksjs/cli'
import type { DeployOptions } from '@stacksjs/types'

const options: DeployOptions = parseOptions()

if (options.verbose)
// eslint-disable-next-line no-console
  console.log('dev components options', options)

await runCommand(`bunx vite --config ${viteConfigPath('src/components.ts')}`, {
  ...options,
  cwd: frameworkPath(),
})
