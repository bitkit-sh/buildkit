import { log, parseOptions, runCommand } from '@stacksjs/cli'
import { NpmScript } from '@stacksjs/enums'
import { projectPath } from '@stacksjs/path'

// TODO: this should be a loader
log.info('Ensuring Code Style...')

const options = parseOptions()
await runCommand(NpmScript.LintFix, {
  cwd: projectPath(),
  ...options,
})

log.success('Linted')
