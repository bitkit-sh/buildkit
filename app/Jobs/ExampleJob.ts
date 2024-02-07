import { Job } from '@stacksjs/queue'
import { Every } from '@stacksjs/types'
import { log } from '@stacksjs/cli'

export default new Job({
  name: 'Send Welcome Email', // optional, defaults to the file name
  description: 'A demo cron job that runs every minute', // optional
  queue: 'default', // optional, defaults to 'default'
  tries: 3, // optional, defaults to 3, in case of failures
  backoff: 3, // optional, defaults to 3-second delays between retries
  rate: Every.Minute, // optional, '* * * * *' in cron syntax (overwrites the Scheduler's definition)
  handle: () => {
    log.info('This cron job log this message every minute')
  },
  // action: 'SendWelcomeEmail', // instead of handle, you may target an action or `action: () => {`
})
