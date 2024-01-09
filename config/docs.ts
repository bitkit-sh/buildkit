import { SocialLinkIcon } from '@stacksjs/types'
import type { DocsConfig } from '@stacksjs/types'

const nav = [
  { text: 'Config', link: '/config', activeMatch: '/config' },
  {
    text: 'Changelog',
    link: 'https://github.com/stacksjs/stacks/blob/main/CHANGELOG.md',
  },
  // { text: 'Blog', link: 'https://updates.ow3.org' },
  {
    text: 'Resources',
    items: [
      { text: 'Team', link: '/team' },
      { text: 'Releases', link: '/releases' },
      {
        items: [
          {
            text: 'Twitter',
            link: 'https://twitter.com/stacksjs',
          },
          {
            text: 'Discord Chat',
            link: 'https://discord.gg/stacksjs',
          },
          {
            text: 'Awesome Stacks',
            link: 'https://github.com/stacksjs/awesome-stacks',
          },
          {
            text: 'Changelog',
            link: 'https://github.com/stacksjs/stacks/blob/main/CHANGELOG.md',
          },
          {
            text: 'Contributing',
            link: 'https://github.com/stacksjs/stacks/blob/main/.github/CONTRIBUTING.md',
          },
        ],
      },
    ],
  },
]

const sidebar = {
  '/guide/': [
    {
      text: 'Getting Started',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/guide/intro' },
        { text: 'Quick Start', link: '/guide/get-started' },
      ],
    },

    {
      text: 'Bootcamp',
      collapsible: true,
      items: [
        { text: 'Welcome', link: '/bootcamp/intro' },
        {
          text: 'Let’s Build',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Build a Frontend', link: '/bootcamp/frontend' },
            { text: 'Build an API', link: '/bootcamp/api' },
            { text: 'Build a Documentation', link: '/bootcamp/docs' },
            {
              text: 'Build a Library',
              collapsible: true,
              collapsed: true,
              items: [
                { text: 'Component Library', link: '/bootcamp/library/components' },
                { text: 'Function Library', link: '/bootcamp/library/functions' },
              ],
            },
            { text: 'Build a CLI', link: '/bootcamp/cli' },
            { text: 'Build a Desktop App', link: '/bootcamp/desktop' },
          ],
        },
        {
          text: 'How-To',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'How to deploy?', link: '/bootcamp/how-to/deploy' },
            { text: 'Unit & Feature Tests', link: '/bootcamp/how-to/testing' },
            { text: 'Define env & config values', link: '/bootcamp/how-to/env-config' },
            { text: 'Error Handling', link: '/bootcamp/how-to/error-handling' },
            { text: 'Publish Components & Functions', link: '/bootcamp/how-to/publish' },
            { text: 'Create a Mailbox', link: '/bootcamp/how-to/create-mailbox' },
            { text: 'IDE Setup', link: '/bootcamp/how-to/ide-setup' },
            { text: 'Manage a Team', link: '/bootcamp/how-to/manage-team' },
            { text: 'Extend the Cloud', link: '/bootcamp/how-to/extend-cloud' },
            { text: 'Extend the Dashboard', link: '/bootcamp/how-to/extend-dashboard' },
          ],
        },
        {
          text: 'Tips',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Semantic Commits', link: '/bootcamp/tips/semantic-commits' },
            { text: 'Email, SMS, Social & Push notifications', link: '/bootcamp/tips/notifications' },
            { text: 'Payment sending, receiving & management', link: '/bootcamp/tips/payments' },
            { text: 'Cost Optimization', link: '/bootcamp/tips/cost-optimization' },
            { text: 'Jump Box', link: '/bootcamp/tips/jump-box' },
            { text: 'Remove your Cloud', link: '/bootcamp/tips/undeploy' },
            { text: 'Ship your ORM', link: '/bootcamp/tips/orm-usage' },
            { text: 'Limitations', link: '/bootcamp/tips/limitations' },
          ],
        },
        { text: 'Conclusion', link: '/bootcamp/conclusion' },
      ],
    },

    {
      text: 'Digging Deeper',
      collapsible: true,
      items: [
        { text: 'Actions', link: '/guide/actions' },
        { text: 'APIs', link: '/guide/apis' },
        { text: 'Apps', link: '/guide/apps' },
        { text: 'Buddy', link: '/guide/buddy' },
        {
          text: 'Built-in Components',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'KeepAlive', link: '/guide/components/keep-alive' },
            { text: 'Suspense', link: '/guide/components/suspense' },
            { text: 'Table', link: '/guide/components/table' },
            { text: 'Teleport', link: '/guide/components/teleport' },
            { text: 'Transition', link: '/guide/components/transition' },
            { text: 'TransitionGroup', link: '/guide/components/transition-group' },
            // { text: 'Audio', link: '/guide/components/audio' },
            // { text: 'Calendar', link: '/guide/components/calendar' },
            // { text: 'CommandPalette', link: '/guide/components/command-palette' },
            // { text: 'Audio', link: '/guide/components/date-picker' },
            // { text: 'FileManager', link: '/guide/components/file-manager' },
            // { text: 'Image', link: '/guide/components/image' },
            // { text: 'Video', link: '/guide/components/video' },
          ],
        },
        { text: 'CI / CD', link: '/guide/ci' },
        { text: 'Cloud', link: '/guide/cloud' },
        { text: 'Custom Directives', link: '/guide/custom-directives' },
        { text: 'Dashboard', link: '/guide/dashboard' },
        {
          text: 'Libraries',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Get Started', link: '/guide/libraries/get-started' },
            { text: 'Component Libs', link: '/guide/libraries/components' },
            { text: 'Function Libs', link: '/guide/libraries/functions' },
            { text: 'Composability', link: '/guide/libraries/composability' },
          ],
        },
        { text: 'Model-View-Action', link: '/guide/model-view-action' },
        {
          text: 'Packages',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Actions', link: '/guide/packages/actions' },
            { text: 'AI', link: '/guide/packages/ai' },
            { text: 'Alias', link: '/guide/packages/alias' },
            { text: 'Analytics', link: '/guide/packages/analytics' },
            { text: 'Arrays', link: '/guide/packages/arrays' },
            { text: 'Auth', link: '/guide/packages/auth' },
            { text: 'Buddy', link: '/guide/packages/buddy' },
            { text: 'Build', link: '/guide/packages/build' },
            { text: 'Cache', link: '/guide/packages/cache' },
            { text: 'Chat', link: '/guide/packages/chat' },
            { text: 'CLI', link: '/guide/packages/cli' },
            { text: 'Cloud', link: '/guide/packages/cloud' },
            { text: 'Collections', link: '/guide/packages/collections' },
            { text: 'Config', link: '/guide/packages/config' },
            { text: 'Database', link: '/guide/packages/database' },
            { text: 'Datetime', link: '/guide/packages/datetime' },
            { text: 'Desktop', link: '/guide/packages/desktop' },
            { text: 'Development', link: '/guide/packages/development' },
            { text: 'DNS', link: '/guide/packages/dns' },
            { text: 'Docs', link: '/guide/packages/docs' },
            { text: 'Email', link: '/guide/packages/email' },
            { text: 'Env', link: '/guide/packages/env' },
            { text: 'Error Handling', link: '/guide/packages/error-handling' },
            { text: 'ESlint Config', link: '/guide/packages/error-handling' },
            { text: 'Events', link: '/guide/packages/events' },
            { text: 'Faker', link: '/guide/packages/faker' },
            { text: 'Git', link: '/guide/packages/git' },
            { text: 'Health', link: '/guide/packages/health' },
            { text: 'Http', link: '/guide/packages/http' },
            { text: 'Lint', link: '/guide/packages/lint' },
            { text: 'Logging', link: '/guide/packages/logging' },
            { text: 'Modules', link: '/guide/packages/modules' },
            { text: 'Notifications', link: '/guide/packages/notifications' },
            { text: 'Objects', link: '/guide/packages/objects' },
            { text: 'ORM', link: '/guide/packages/orm' },
            { text: 'Path', link: '/guide/packages/path' },
            { text: 'Payments', link: '/guide/packages/payments' },
            { text: 'Permissions', link: '/guide/packages/permissions' },
            { text: 'Push', link: '/guide/packages/push' },
            { text: 'Query Builder', link: '/guide/packages/query-builder' },
            { text: 'Queue', link: '/guide/packages/queue' },
            { text: 'Realtime', link: '/guide/packages/realtime' },
            { text: 'REPL', link: '/guide/packages/repl' },
            { text: 'Router', link: '/guide/packages/router' },
            { text: 'Scheduler', link: '/guide/packages/scheduler' },
            { text: 'Search Engine', link: '/guide/packages/search-engine' },
            { text: 'Security', link: '/guide/packages/security' },
            { text: 'Server', link: '/guide/packages/server' },
            { text: 'Signals', link: '/guide/packages/signals' },
            { text: 'Slug', link: '/guide/packages/slug' },
            { text: 'SMS', link: '/guide/packages/sms' },
            { text: 'Storage', link: '/guide/packages/storage' },
            { text: 'Strings', link: '/guide/packages/strings' },
            { text: 'Testing', link: '/guide/packages/testing' },
            { text: 'Tinker', link: '/guide/packages/tinker' },
            { text: 'Tunnel', link: '/guide/packages/tunnel' },
            { text: 'Types', link: '/guide/packages/types' },
            { text: 'UI', link: '/guide/packages/ui' },
            { text: 'Utils', link: '/guide/packages/utils' },
            { text: 'Validation', link: '/guide/packages/validation' },
            { text: 'Vite', link: '/guide/packages/vite' },
          ],
        },
        { text: 'Plugins', link: '/guide/plugins' },
        { text: 'Testing', link: '/guide/testing' },
      ],
    },

    {
      text: 'Terminology',
      link: '/terminology',
    },
  ],
}

/**
 * **Documentation Options**
 *
 * This configuration defines all of your documentation options. Because Stacks is fully-typed,
 * you may hover any of the options below and the definitions will be provided. In case
 * you have any questions, feel free to reach out via Discord or GitHub Discussions.
 */
export default {
  lang: 'en-US',
  title: 'Stacks',
  description: 'Rapid application, cloud & library framework.',
  lastUpdated: true,

  themeConfig: {
    nav,
    sidebar,

    editLink: {
      pattern: 'https://github.com/stacksjs/stacks/edit/main/docs/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Stacks.js, Inc.',
    },

    socialLinks: [
      { icon: SocialLinkIcon.Twitter, link: 'https://twitter.com/stacksjs' },
      { icon: SocialLinkIcon.GitHub, link: 'https://github.com/stacksjs/stacks' },
      { icon: SocialLinkIcon.Discord, link: 'https://discord.gg/stacksjs' },
    ],

    // algolia: services.algolia,

    // carbonAds: {
    //   code: '',
    //   placement: '',
    // },
  },
} satisfies DocsConfig
