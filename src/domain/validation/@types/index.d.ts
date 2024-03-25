import { type z } from 'zod'

type ErrorMessages = Record<string, string[]>

type Model<T = any> = z.ZodType<T, any, any>
type ParseResult =
  | { success: false; messages: ErrorMessages }
  | { success: true; messages: Record<never, never> }

type RuleFn<TValue> = (value: TValue) => string | null | undefined
type RuleDef<TRuleLevel, TValue> = [
  ruleLevel: TRuleLevel,
  ruleFn: RuleFn<TValue>,
]

type ErrorHandlerFn = (
  error: unknown,
  messages: Readonly<ErrorMessages>,
) => ErrorMessages

type ErrorParserFn = (error: unknown) => ErrorMessages

declare global {
  declare namespace App.Domain.Validation {
    type RuleMessages<TRuleLevel extends string> = Record<TRuleLevel, string[]>

    type RulesValidatorFn<TRuleLevel extends string, TValue> = (
      value: TValue,
    ) => RuleMessages<TRuleLevel>

    type SchemeParser<TValue> = {
      parse: (data: unknown) => TValue
      safeParse: (data: unknown) => ParseResult
    }

    type ValidationMessages = ErrorMessages
    type CreateErrorParserFn = (handleError: ErrorHandlerFn) => ErrorParserFn

    type CreateRulesValidatorFn<TRuleLevel extends string> = <TValue>(
      ...rules: Array<RuleDef<TRuleLevel, TValue>>
    ) => RulesValidatorFn<TRuleLevel, TValue>

    type CreateSchemaParserFn = <TValue>(
      model: Model<TValue>,
      parseErrors: ErrorParserFn,
    ) => SchemeParser<TValue>
  }
}

export = global
