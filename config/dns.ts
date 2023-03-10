import { defineDnsConfig } from '../.stacks/core/config/src/helpers'

/**
 * **DNS Options**
 *
 * This configuration defines all of your DNS options. Because Stacks is fully-typed,
 * you may hover any of the options below and the definitions will be provided. In case
 * you have any questions, feel free to reach out via Discord or GitHub Discussions.
 */
export default defineDnsConfig({
  a: [],
  aaaa: [],
  cname: [],
  txt: [],
  mx: [],
})
