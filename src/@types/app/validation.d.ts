import { type RuleLevel } from '@/data/validation/enums/ruleLevel'

declare global {
  declare namespace App.Infra.Validation {
    type ErrorMessages = Record<string, string[]>

    type IErrorHandler = (
      error: unknown,
      messages: ErrorMessages,
    ) => ErrorMessages

    type IErrorParser = (error: unknown) => ErrorMessages

    type RuleMessages = Record<RuleLevel, string[]>
  }
}

export = global
