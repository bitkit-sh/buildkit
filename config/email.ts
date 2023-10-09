import { env } from '@stacksjs/env'
import type { EmailConfig } from '@stacksjs/types'

/**
 * **Email Configuration**
 *
 * This configuration defines all of your email options. Because Stacks is fully-typed, you
 * may hover any of the options below and the definitions will be provided. In case you
 * have any questions, feel free to reach out via Discord or GitHub Discussions.
 */
export default {
  from: {
    name: env.MAIL_FROM_NAME || 'Stacks',
    address: env.MAIL_FROM_ADDRESS || 'no-reply@stacksjs.org',
  },

  server: {
    mailboxes: ['chris'], // -> chris@${APP_URL}
    scan: true, // -> Scans for spam and viruses
  },
} satisfies EmailConfig
