import type { CloudConfig } from '@stacksjs/types'
import security from './security'

/**
 * **Cloud**
 *
 * This configuration defines your cloud. Because Stacks is fully-typed, you may hover
 * any of the options below and the definitions will be provided. In case you have
 * any questions, feel free to reach out via Discord or GitHub Discussions.
 */
export default {
  driver: 'aws',
  firewall: security.firewall,

  storage: {},

  cdn: {
    compress: true,
    allowedMethods: 'ALL',
    cachedMethods: 'GET_HEAD',
    originShieldRegion: 'us-east-1',
    minTtl: 0,
    defaultTtl: 86400,
    maxTtl: 31536000,
    priceClass: 'PriceClass_All',
    cookieBehavior: 'none',
    allowList: {
      cookies: [],
      headers: [],
      queryStrings: [],
    },
  },

  ai: true, // deploys AI endpoints
  docs: true, // deploys documentation
  api: true, // deploys API
  fileSystem: true, // enables file system

  // compute: {},
  // queues: false,
  // queue-concurrency: 50
} satisfies CloudConfig
