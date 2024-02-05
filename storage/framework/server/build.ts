import { $ } from 'bun'
import { frameworkPath, projectPath } from '@stacksjs/path'
import { hasFiles } from '@stacksjs/storage'
import { log, runCommand } from '@stacksjs/cli'
import { app } from '@stacksjs/config'
import { slug } from '@stacksjs/strings'

// TODO: we cannot use Bun Shell scripts here yet because we need to use 1.0.8 for deployments, and Shell scripts were introduced after 1.0.8
// this allows for a custom "server configuration" by the user
if (hasFiles(projectPath('server'))) {
  await runCommand(`rm -rf ../../../server/build.ts`, {
    cwd: projectPath('server'),
  })
  await runCommand(`cp -r ../../../server .`, {
    cwd: projectPath('server'),
  })

  log.info('Using custom server configuration')
}
else {
  log.info('Using default server configuration')
}

await runCommand(`cp -r ../../../config ./config`, {
  cwd: frameworkPath('server'),
})
await runCommand(`cp -r ../../../routes ./routes`, {
  cwd: frameworkPath('server'),
})

// TODO: also allow for a custom container name via a config
await runCommand(`docker build --pull -t ${slug(app.name)} .`, {
  cwd: frameworkPath('server'),
})
