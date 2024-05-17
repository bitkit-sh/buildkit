import type { Action } from '@stacksjs/actions'
import { buddyOptions, runCommand, runCommands } from '@stacksjs/cli'
import { err } from '@stacksjs/error-handling'
import { log } from '@stacksjs/logging'
import * as p from '@stacksjs/path'
import { storage } from '@stacksjs/storage'
import type { ActionOptions } from '@stacksjs/types'
import { Glob } from 'bun'

/**
 * Run an Action the Stacks way.
 *
 * @param action The action to invoke.
 * @param options The options to pass to the command.
 * @returns The result of the command.
 */
export async function runAction(action: string, options?: ActionOptions) {
  // check if action is a file anywhere in ./app/Actions/**/*.ts
  // if it is, return and await the action
  const glob = new Glob('**/*.ts')
  const scanOptions = { cwd: p.userActionsPath(), onlyFiles: true }

  for await (const file of glob.scan(scanOptions)) {
    log.debug('file', file)
    if (file === `${action}.ts` || file.endsWith(`${action}.ts`))
      return ((await import(p.userActionsPath(file))).default as Action).handle()

    // if a custom model name is used, we need to check for it
    const a = await import(p.userActionsPath(file))
    if (a.name === action) return await a.handle()
  }

  // or else, just run the action normally by assuming the action is core Action,  stored in p.actionsPath
  const opts = buddyOptions()
  const path = p.relativeActionsPath(`src/${action}.ts`)
  const cmd = `bun --bun ${path} ${opts}`.trimEnd()
  const optionsWithCwd = {
    cwd: options?.cwd || p.projectPath(),
    ...options,
  }

  log.debug('runAction:', cmd)
  log.debug('action options:', optionsWithCwd)

  return await runCommand(cmd, optionsWithCwd)
}

/**
 * Run Actions the Stacks way.
 *
 * @param actions The actions to invoke.
 * @param options The options to pass to the command.
 * @returns The result of the command.
 */
export async function runActions(actions: string[], options?: ActionOptions) {
  log.debug('runActions:', actions)
  log.debug('actions options:', options)

  if (!actions.length) return err('No actions were specified')

  for (const action of actions) {
    log.debug(`running action "${action}"`)
    if (!hasAction(action)) return err(`The specified action "${action}" does not exist`)
  }

  const opts = buddyOptions()

  const o = {
    cwd: options?.cwd || p.projectPath(),
    ...options,
  }

  const commands = actions.map((action) => `bun --bun ${p.relativeActionsPath(`src/${action}.ts`)} ${opts}`)

  log.debug('commands:', commands)

  return await runCommands(commands, o)
}

export function hasAction(action: string) {
  return storage.isFile(p.actionsPath(`src/${action}.ts`))
}
