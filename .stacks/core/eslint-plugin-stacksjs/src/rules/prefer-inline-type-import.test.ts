/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */

import { RuleTester } from '@typescript-eslint/utils/dist/ts-eslint'
import { it } from '@stacksjs/testing'
import rule, { RULE_NAME } from './prefer-inline-type-import'

const valids = [
  'import { type Foo } from \'foo\'',
  'import type Foo from \'foo\'',
  'import type * as Foo from \'foo\'',
  'import type {} from \'foo\'',
]
const invalids = [
  ['import type { Foo } from \'foo\'', 'import { type Foo } from \'foo\''],
]

it('runs', () => {
  const ruleTester: RuleTester = new RuleTester({
    parser: require.resolve('@typescript-eslint/parser'),
  })

  ruleTester.run(RULE_NAME, rule, {
    valid: valids,
    invalid: invalids.map(i => ({
      code: i[0],
      output: i[1].trim(),
      errors: [{ messageId: 'preferInlineTypeImport' }],
    })),
  })
})
