import { log, runCommand } from '../cli/src'

const result = await runCommand('bun build ./src/index.ts --outdir dist --format esm --target node', {
  cwd: import.meta.dir,
})

if (result.isErr())
  log.error(result.error)
