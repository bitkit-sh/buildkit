import { MoneyValidator, Validator } from '@stacksjs/validation'

/**
 * Inform TypeScript about the custom/user-added macros
 */
declare module '@stacksjs/validation' {
  interface Validator {
    money(): MoneyValidator
  }
}

declare module '@stacksjs/arrays' {
  interface Validator {
    // add custom methods to arrays
  }
}

declare module '@stacksjs/strings' {
  interface Validator {
    // add custom methods to strings
  }
}