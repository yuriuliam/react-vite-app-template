import { createStringifyAdapter } from '@/shared/utils/strings'

const INDENT_SIZE = 2

const argsReplacer = (_k: string, v: any) => {
  if (v === undefined) return 'undefined'

  if (v instanceof Set) return Array.from(v)

  if (v instanceof Map) return Object.fromEntries(v.entries())

  return v
}

const beautifiedJsonStringify = createStringifyAdapter((value: any) =>
  JSON.stringify(value, argsReplacer, INDENT_SIZE),
)

const jsonStringify = createStringifyAdapter((value: any) =>
  JSON.stringify(value, argsReplacer),
)

export { beautifiedJsonStringify, jsonStringify }
