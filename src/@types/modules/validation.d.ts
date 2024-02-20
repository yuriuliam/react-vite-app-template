import { type RuleLevel } from '@/modules/validation/enums/ruleLevel'

declare global {
  declare namespace App.Modules.Validation {
    type ErrorMessages = Record<string, string[]>

    type RuleMessages = Record<RuleLevel, string[]>

    type SafeParseResult = {
      success: boolean
      messages: App.Modules.Validation.ErrorMessages
    }

    type Schema = {
      parse: (data: unknown) => any
      safeParse: (data: unknown) => SafeParseResult
    }
  }
}

export = global
