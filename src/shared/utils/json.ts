import { createStringifyAdapter } from '@/shared/utils/strings'

const argsReplacer = (_k: string, v: any) => {
  if (v === undefined) return 'undefined'

  if (v instanceof Set) return Array.from(v)

  if (v instanceof Map) return Object.fromEntries(v.entries())

  return v
}

const jsonParser = createStringifyAdapter((value: any) =>
  JSON.stringify(value, argsReplacer),
)

export { jsonParser }
