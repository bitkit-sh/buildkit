import process from 'node:process'
import { path as p } from '@stacksjs/path'
import { handleError } from '@stacksjs/error-handling'
import { writeFile } from '@stacksjs/storage'
import { log, runCommand } from '@stacksjs/cli'
import { ExitCode } from '@stacksjs/types'
import type { CLI, CliOptions } from '@stacksjs/types'
import { $ } from 'bun'

export function setup(buddy: CLI) {
  const descriptions = {
    setup: 'This command ensures your project is setup correctly',
    ohMyZsh: 'Enable Oh My Zsh',
    aws: 'Ensures AWS is connected to the project',
    project: 'Target a specific project',
    verbose: 'Enable verbose output',
  }

  buddy
    .command('setup', descriptions.setup)
    .alias('ensure')
    .option('-p, --project', descriptions.project, { default: false })
    .option('--verbose', descriptions.verbose, { default: false })
    .action(async (options: CliOptions) => {
      if (!await isPkgxInstalled())
        await installPkgx()

      // ensure the minimal amount of deps are written to ./pkgx.yaml
      await optimizePkgxDeps()

      await initializeProject(options)
    })

  buddy
    .command('setup:oh-my-zsh', descriptions.ohMyZsh) // if triggered multiple times, it will update the plugin
    .option('--verbose', descriptions.verbose, { default: false })
    .action(async (_options?: CliOptions) => {
      const homePath = (await $`echo $HOME`.text()).trim()
      const zshrcPath = p.join(homePath, '.zshrc')
      const pluginPath = p.frameworkPath('core/zsh-buddy/buddy.plugin.zsh')
      const customPath = p.join(homePath, '.oh-my-zsh/custom/plugins/buddy/')

      log.info(`Setting up Oh My Zsh via ${zshrcPath}...`)
      $.cwd(p.dirname(zshrcPath))
      let data = await $`cat ${p.basename(zshrcPath)}`.text()

      // Manipulate the data
      const pluginLineRegex = /^(?!#).*plugins=\(([^)]+)\)/m // ensure it's not a comment
      const match = data.match(pluginLineRegex)

      if (match) {
        // 1. Find the plugins line
        const plugins = match[1].split(' ')

        // 2. Add buddy to the list of plugins if it's not already there
        if (!plugins.includes('buddy')) {
          plugins.push('buddy')
          const newPluginLine = `plugins=(${plugins.join(' ')})`
          // 3. Replace the old plugin line with the new one
          data = data.replace(pluginLineRegex, newPluginLine)
          // 4. Write the data back to the file
          await writeFile(zshrcPath, data)

          // need to copy plugin to ~/.oh-my-zsh/custom/plugins
          log.info(`Copying buddy zsh plugin ${pluginPath} to ${customPath}...`)

          // create customPath if it doesn't exist
          await runCommand(`mkdir -p ${customPath}`)
          await runCommand(`cp -rf ${pluginPath} ${customPath}`)
          // await runCommand(`source ${customPath}/buddy.plugin.zsh`)

          log.success('Copied buddy zsh plugin')
        }
        else {
          log.info('buddy is already integrated in your shell, updating...')
          await runCommand(`cp -rf ${pluginPath} ${customPath}`)
          // await runCommand(`source ${customPath}/buddy.plugin.zsh`)
          log.success('Updated buddy zsh plugin')
        }
      }

      log.success('Oh My Zsh setup complete.')
      log.info('To see changes reflect, you may need to:')
      log.info('⌘⇧P workbench.action.reloadWindow')
    })

  buddy.on('setup:*', () => {
    console.error('Invalid command: %s\nSee --help for a list of available commands.', buddy.args.join(' '))
    process.exit(ExitCode.FatalError)
  })
}

async function isPkgxInstalled(): Promise<boolean> {
  const result = await runCommand('pkgx --version', { silent: true })

  if (result.isOk())
    return true

  return false
}

async function installPkgx(): Promise<void> {
  const result = await runCommand(p.frameworkPath('scripts/pkgx-install'))

  if (result.isOk())
    return

  handleError(result.error)
  process.exit(ExitCode.FatalError)
}

async function initializeProject(options: CliOptions): Promise<void> {
  log.info('Installing dependencies...')

  const result = await runCommand('bun install', {
    cwd: options.cwd || p.projectPath(),
  })

  if (result.isErr()) {
    handleError(result.error)
    process.exit(ExitCode.FatalError)
  }

  log.success('Installed node_modules')
  log.info('Ensuring .env exists...')

  if (storage.doesNotExist(p.projectPath('.env'))) {
    const envResult = await runCommand('cp .env.example .env', {
      cwd: options.cwd || p.projectPath(),
    })

    if (envResult.isErr()) {
      handleError(envResult.error)
      process.exit(ExitCode.FatalError)
    }

    log.success('.env created')
  }
  else { log.success('.env existed') }

  const keyResult = await runCommand('buddy key:generate', {
    cwd: options.cwd || p.projectPath(),
  })

  if (keyResult.isErr()) {
    handleError(keyResult.error)
    process.exit(ExitCode.FatalError)
  }

  log.info('Ensuring AWS is connected...')

  const awsResult = await runCommand('buddy configure:aws', {
    cwd: options.cwd || p.projectPath(),
  })

  if (awsResult.isErr()) {
    handleError(awsResult.error)
    process.exit(ExitCode.FatalError)
  }

  log.success('Configured AWS')

  // TODO: ensure the IDE is setup by making sure .vscode etc exists, and if not, copy them over

  log.success('Project is setup')
  log.info('Happy coding! 💙')
}

export async function optimizePkgxDeps(): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, 300))
}
