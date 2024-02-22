import { type RuleLevel } from '@/modules/validation/enums/ruleLevel'

declare global {
  declare namespace App.Modules.Validation {
    type ErrorMessages = Record<string, string[]>

    type RuleMessages = Record<RuleLevel, string[]>

    type SafeParseResult = {
      success: boolean
      messages: App.Modules.Validation.ErrorMessages
    }

    type SchemeParser<T> = {
      parse: (data: unknown) => T
      safeParse: (data: unknown) => SafeParseResult
    }
  }
}

export = global
